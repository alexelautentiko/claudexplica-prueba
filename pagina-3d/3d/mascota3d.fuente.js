// La mascota en 3D. Se carga en diferido, después del salto a Claude.
// Si algo falla (sin WebGL, sin red, modelo roto), no hace nada: en la página se queda la imagen 2D.
import {
  WebGLRenderer, Scene, PerspectiveCamera, HemisphereLight, DirectionalLight,
  Box3, Vector3, Group, SRGBColorSpace
} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js';

const GRADOS = Math.PI / 180;
const BASE = -12 * GRADOS;    // la pose de la imagen: un poco girada, con la cola a la vista
const VAIVEN = 15 * GRADOS;   // lo que se balancea sola
const TOPE = 20 * GRADOS;     // nunca más de ±20° desde la base: la espalda (inventada) no se enseña
const acotar = (v, a, b) => Math.min(b, Math.max(a, v));

export function montar(caja) {
  if (!caja || caja.dataset.m3d) return;
  caja.dataset.m3d = '1';

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
  let enVista = true, t0 = 0;
  let agarrado = false, agarre = 0, x0 = 0, empuje = 0, empujeSuave = 0;

  function cuadro(ahora) {
    raf = requestAnimationFrame(cuadro);
    if (!t0) t0 = ahora;
    const t = (ahora - t0) / 1000;
    agarre += ((agarrado ? 1 : 0) - agarre) * 0.12;
    empujeSuave += (empuje - empujeSuave) * 0.1;
    const giro = acotar(Math.sin(t * 0.7) * VAIVEN * (1 - agarre) + empujeSuave, -TOPE, TOPE);
    pivote.rotation.y = BASE + giro;
    pivote.rotation.x = Math.sin(t * 0.9 + 1) * 0.02;
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

  // Con el dedo o el ratón se puede girar un poco; al soltar, vuelve sola.
  lienzo.addEventListener('pointerdown', (e) => {
    agarrado = true; x0 = e.clientX;
    try { lienzo.setPointerCapture(e.pointerId); } catch (err) {}
  });
  lienzo.addEventListener('pointermove', (e) => {
    if (agarrado) empuje = acotar((e.clientX - x0) * 0.012, -TOPE, TOPE);
  });
  const soltar = () => { agarrado = false; empuje = 0; };
  lienzo.addEventListener('pointerup', soltar);
  lienzo.addEventListener('pointercancel', soltar);
  if (window.matchMedia && matchMedia('(pointer: fine)').matches) {
    window.addEventListener('pointermove', (e) => {
      if (!agarrado) empuje = ((e.clientX / window.innerWidth) - 0.5) * 2 * 7 * GRADOS;
    }, { passive: true });
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
