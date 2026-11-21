// La mascota en 3D, con gestos (21-nov-2026). Se carga en diferido, cuando la página ya está pintada.
// La página le pide un gesto con un evento en la caja: caja.dispatchEvent(new CustomEvent('cx:gesto', { detail: 'giro' })).
// Aquí van los giros; los saltos y el aplastarse los hace la página moviendo la caja entera, para que no se corte.
// Si algo falla (sin WebGL, sin red, modelo roto), no hace nada: en la página se queda la imagen 2D.
import {
  WebGLRenderer, Scene, PerspectiveCamera, HemisphereLight, DirectionalLight,
  Box3, Vector3, Group, SRGBColorSpace
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

const GRADOS = Math.PI / 180;
const VUELTA = Math.PI * 2;
const BASE = -12 * GRADOS;    // la pose de la imagen: un poco girada, con la cola a la vista
const VAIVEN = 15 * GRADOS;   // lo que se balancea sola
const POR_PIXEL = 0.014;      // lo que gira por cada píxel de arrastre: el ancho de un móvil es casi una vuelta
const ROCE = 2.4;             // lo deprisa que se frena al soltarla
const ESPERA = 1600;          // ms quieta, ya suelta, antes de volver de frente
const VEL_MAX = 14;           // rad/s: un tope al impulso
const acotar = (v, a, b) => Math.min(b, Math.max(a, v));

// Los gestos, con su duración en segundos.
const GESTOS = { giro: 1.0, celebra: 1.2, pirueta: 1.1, asiente: 1.0, baile: 1.2, canto: 1.1, salto: 0.9, hola: 0.9 };
const suave = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);

export function montar(caja) {
  if (!caja || caja.dataset.m3d) return;
  caja.dataset.m3d = '1';

  // Para revisar el modelo por todos lados: ?giro=180 lo deja quieto en ese ángulo.
  const pedido = /[?&]giro=(-?\d+)/.exec(location.search);
  const fijo = pedido ? Number(pedido[1]) * GRADOS : null;

  const lienzo = document.createElement('canvas');
  lienzo.className = 'lienzo';
  lienzo.setAttribute('aria-hidden', 'true');

  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas: lienzo, alpha: true, antialias: true, powerPreference: 'low-power' });
  } catch (e) { return; }
  renderer.outputColorSpace = SRGBColorSpace;

  const escena = new Scene();
  escena.add(new HemisphereLight(0xffffff, 0xffd9b0, 2.2));
  const sol = new DirectionalLight(0xffffff, 0.9);
  sol.position.set(-2, 3, 4);
  escena.add(sol);
  const camara = new PerspectiveCamera(26, 1, 0.1, 50);
  const pivote = new Group();
  escena.add(pivote);

  function medir() {
    const w = caja.clientWidth, h = caja.clientHeight;
    if (!w || !h) return;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h, false);
    camara.aspect = w / h;
    camara.updateProjectionMatrix();
  }

  let listo = false, pintado = false, cancelado = false, raf = 0;
  let enVista = true, t0 = 0, antes = 0;
  // El giro que le da la persona: sin tope, da la vuelta entera. Al soltar sigue con el impulso,
  // se frena y, tras una pausa, vuelve de frente por el camino corto.
  let agarrado = false, xAntes = 0, tAntes = 0, soltadoEn = 0;
  let angulo = 0, vel = 0, libre = 0;
  let empuje = 0, empujeSuave = 0;
  let gesto = null, gestoT0 = 0;
  caja.addEventListener('cx:gesto', (e) => {
    if (!GESTOS[e.detail]) return;
    gesto = e.detail; gestoT0 = performance.now();
    arrancar();
  });

  // Lo que cada gesto suma a la pose, en radianes.
  function deGesto(ahora) {
    const g = { x: 0, y: 0, z: 0 };
    if (!gesto) return g;
    const k = (ahora - gestoT0) / 1000 / GESTOS[gesto];
    if (k >= 1) { gesto = null; return g; }
    const resto = 1 - k;
    if (gesto === 'giro') g.y = suave(k) * VUELTA;                       // vídeo: una vuelta entera
    else if (gesto === 'celebra') g.y = suave(k) * VUELTA;               // al elegir: vuelta (y salto, en la página)
    else if (gesto === 'pirueta') g.x = -suave(k) * VUELTA;              // diseño: voltereta hacia delante
    else if (gesto === 'asiente') g.x = Math.sin(k * Math.PI * 4) * 0.34 * resto;   // agentes: dice que sí
    else if (gesto === 'baile') {                                        // redes: se menea
      g.z = Math.sin(k * Math.PI * 6) * 0.26 * resto;
      g.y = Math.sin(k * Math.PI * 3) * 0.4 * resto;
    } else if (gesto === 'canto') {                                      // voz: se balancea como cantando
      g.z = Math.sin(k * Math.PI * 4) * 0.14 * resto;
      g.x = -Math.abs(Math.sin(k * Math.PI * 4)) * 0.14 * resto;
    } else if (gesto === 'salto') g.y = Math.sin(k * Math.PI) * 0.6;     // vender: mira de lado mientras salta
    else if (gesto === 'hola') g.z = Math.sin(k * Math.PI * 3) * 0.2 * resto;        // al volver: se inclina
    return g;
  }

  function cuadro(ahora) {
    raf = requestAnimationFrame(cuadro);
    if (!t0) { t0 = ahora; antes = ahora; }
    const t = (ahora - t0) / 1000;
    const dt = Math.min(0.05, (ahora - antes) / 1000);
    antes = ahora;

    if (fijo !== null) {
      pivote.rotation.y = BASE + fijo;
    } else {
      const casa = Math.round(angulo / VUELTA) * VUELTA;
      if (!agarrado) {
        angulo += vel * dt;
        vel *= Math.exp(-ROCE * dt);
        if (Math.abs(vel) < 0.25 && performance.now() - soltadoEn > ESPERA) {
          vel = 0;
          angulo += (casa - angulo) * (1 - Math.exp(-3 * dt));
          if (Math.abs(casa - angulo) < 0.0005) angulo = casa;
        }
      }
      // El balanceo y el seguimiento del ratón solo cuando está de frente y suelta.
      const enCasa = !agarrado && Math.abs(vel) < 0.25 && Math.abs(casa - angulo) < 0.35;
      libre += ((enCasa ? 1 : 0) - libre) * (1 - Math.exp(-4 * dt));
      empujeSuave += (empuje - empujeSuave) * 0.1;
      pivote.rotation.y = BASE + angulo + (Math.sin(t * 0.7) * VAIVEN + empujeSuave) * libre;
    }
    const g = deGesto(ahora);
    pivote.rotation.y += g.y;
    pivote.rotation.x = Math.sin(t * 0.9 + 1) * 0.02 + g.x;
    pivote.rotation.z = g.z;
    pivote.position.y = Math.sin(t * 1.4) * 0.018;
    renderer.render(escena, camara);
    if (!pintado) { pintado = true; caja.classList.add('con3d'); }
  }
  function arrancar() { if (listo && !raf && enVista && !document.hidden) raf = requestAnimationFrame(cuadro); }
  function parar() { if (raf) cancelAnimationFrame(raf); raf = 0; }
  function rendirse() { cancelado = true; parar(); caja.classList.remove('con3d'); }

  // Si tarda demasiado, se queda la imagen.
  const plazo = setTimeout(() => { if (!listo) rendirse(); }, 12000);

  const cargador = new GLTFLoader();
  cargador.setMeshoptDecoder(MeshoptDecoder);
  cargador.load(new URL('./enchufe.glb', import.meta.url).href, (gltf) => {
    clearTimeout(plazo);
    if (cancelado) return;
    const modelo = gltf.scene;
    const caja3 = new Box3().setFromObject(modelo);
    const tam = caja3.getSize(new Vector3());
    const centro = caja3.getCenter(new Vector3());
    modelo.position.sub(centro);
    modelo.scale.setScalar(1 / tam.y);
    modelo.position.multiplyScalar(1 / tam.y);
    modelo.traverse((o) => {
      if (!o.isMesh) return;
      o.material.roughness = 1;
      o.material.metalness = 0;
      // Un borde algo más claro, como el pelillo del peluche a contraluz.
      o.material.onBeforeCompile = (s) => {
        s.fragmentShader = s.fragmentShader.replace('#include <opaque_fragment>',
          'float cxBorde = pow(1.0 - clamp(dot(normalize(normal), normalize(vViewPosition)), 0.0, 1.0), 2.4);\n' +
          'outgoingLight += cxBorde * 0.22 * diffuseColor.rgb;\n#include <opaque_fragment>');
      };
    });
    pivote.add(modelo);
    camara.position.set(0, 0.42, 3.0);
    camara.lookAt(0, -0.02, 0);
    caja.appendChild(lienzo);
    medir();
    listo = true;
    arrancar();
  }, undefined, () => { clearTimeout(plazo); rendirse(); });

  // Con el dedo o el ratón se le da la vuelta entera. El arrastre vertical sigue moviendo la página
  // (touch-action: pan-y en la hoja de estilos), así que solo cuenta el horizontal.
  if (fijo === null) {
    lienzo.addEventListener('pointerdown', (e) => {
      agarrado = true; xAntes = e.clientX; tAntes = performance.now(); vel = 0;
      try { lienzo.setPointerCapture(e.pointerId); } catch (err) {}
    });
    lienzo.addEventListener('pointermove', (e) => {
      if (!agarrado) return;
      const ahora = performance.now();
      const paso = (e.clientX - xAntes) * POR_PIXEL;
      const dt = Math.max(0.008, (ahora - tAntes) / 1000);
      angulo += paso;
      vel = acotar(vel * 0.5 + (paso / dt) * 0.5, -VEL_MAX, VEL_MAX);
      xAntes = e.clientX; tAntes = ahora;
    });
    const soltar = () => {
      if (!agarrado) return;
      agarrado = false; soltadoEn = performance.now();
      // Si el dedo se paró antes de levantarse, no hay impulso.
      if (soltadoEn - tAntes > 90) vel = 0;
    };
    lienzo.addEventListener('pointerup', soltar);
    lienzo.addEventListener('pointercancel', soltar);
    if (window.matchMedia && matchMedia('(pointer: fine)').matches) {
      window.addEventListener('pointermove', (e) => {
        if (!agarrado) empuje = ((e.clientX / window.innerWidth) - 0.5) * 2 * 7 * GRADOS;
      }, { passive: true });
    }
  }

  // No gasta batería si no se ve.
  document.addEventListener('visibilitychange', () => { if (document.hidden) parar(); else arrancar(); });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((es) => { enVista = es[0].isIntersecting; if (enVista) arrancar(); else parar(); }).observe(caja);
  }
  if ('ResizeObserver' in window) new ResizeObserver(medir).observe(caja);
  else window.addEventListener('resize', medir);
  lienzo.addEventListener('webglcontextlost', (e) => { e.preventDefault(); rendirse(); });
}

montar(document.getElementById('escena'));
