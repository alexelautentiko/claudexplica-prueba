// Genera, en la raíz del sitio (este repositorio):
//   guia/index.html  la guía en HTML, para que la encuentren los buscadores (y Claude con su búsqueda)
//   sitemap.xml      la página, la guía en HTML y la guía en texto, con la fecha del último cambio de cada una
//   robots.txt       deja fuera las carpetas de prueba
//
// Lo lanza solo la Action .github/workflows/guia.yml en cada push que toque guia.md o index.html.
// A mano:  npm install --no-save marked@14.1.4 && node scripts/guia-html.mjs .
//
// La norma (21-nov-2026): la guía vive siempre en las mismas direcciones, /guia.md y /guia/. La versión va en su
// texto (línea 3) y las anteriores, en el historial de git. Las carpetas vN/ son solo para probar y no entran aquí.
//
// Por qué: en una conversación nueva, Claude no puede abrir la dirección de la guía que tiene en su memoria;
// solo las que escribe la persona o las que salen en una búsqueda. Si la guía sale en el buscador, la abre.

import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { marked } from 'marked';

const sitio = process.argv[2];
if (!sitio) {
  console.error('Uso: node scripts/guia-html.mjs <carpeta del sitio>');
  process.exit(1);
}

const DOMINIO = 'https://claudexplica.xyz';
const md = readFileSync(join(sitio, 'guia.md'), 'utf8');

const version = (md.match(/Versión (D\d+(?:\.\d+)?)/) || [])[1] || '';
// La descripción es el primer párrafo de texto después del título y la línea de la versión.
const parrafos = md.split(/\n\s*\n/).map((p) => p.trim()).filter((p) => p && !p.startsWith('#') && !/^Guía de @claudexplica/.test(p));
const descripcion = (parrafos[0] || '').replace(/\*\*/g, '').replace(/\s+/g, ' ').slice(0, 300).replace(/\s\S*$/, '') + '…';
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

marked.setOptions({ gfm: true });
const cuerpo = marked.parse(md);

const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<meta name="theme-color" content="#FFF4E6">
<title>Guía para crear con Claude · Claudexplica</title>
<meta name="description" content="${esc(descripcion)}">
<link rel="canonical" href="${DOMINIO}/guia/">
<link rel="alternate" type="text/markdown" href="${DOMINIO}/guia.md">
<meta property="og:url" content="${DOMINIO}/guia/">
<meta property="og:title" content="Guía para crear con Claude">
<meta property="og:description" content="${esc(descripcion)}">
<link rel="icon" type="image/png" href="/icono.png">
<link rel="preload" href="/fuentes/inter.woff2" as="font" type="font/woff2" crossorigin>
<style>
  @font-face { font-family: "Inter"; src: url("/fuentes/inter.woff2") format("woff2"); font-weight: 100 900; font-display: swap; }
  @font-face { font-family: "JetBrains Mono"; src: url("/fuentes/jetbrains-mono.woff2") format("woff2"); font-weight: 400; font-display: swap; }

  :root { --papel: #FFF4E6; --tinta: #15110D; --naranja: #E8590C; --verde: #0B7A43; --linea: #E9D8C2; --suave: #6B5E50; }
  * { box-sizing: border-box; }
  html { -webkit-text-size-adjust: 100%; }
  body { margin: 0; background: var(--papel); color: var(--tinta);
         font-family: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; font-size: 17px; line-height: 1.55; }
  .cabecera { max-width: 720px; margin: 0 auto; padding: 24px 16px 0; display: flex; align-items: center; gap: 14px; }
  .cabecera img { width: 56px; height: auto; flex: none; }
  .marca { margin: 0; font-family: "JetBrains Mono", ui-monospace, Consolas, monospace; font-size: 13px; letter-spacing: .06em;
           text-transform: uppercase; color: var(--naranja); }
  .boton { display: inline-flex; align-items: center; gap: 8px; margin-top: 6px; padding: 10px 16px; border-radius: 12px;
           background: var(--naranja); color: var(--tinta); font-weight: 800; text-decoration: none; }
  .boton:focus-visible { outline: 3px solid var(--tinta); outline-offset: 3px; }
  main { max-width: 720px; margin: 0 auto; padding: 8px 16px 48px; overflow-wrap: anywhere; }
  h1 { margin: 24px 0 8px; font-size: 34px; line-height: 1.1; font-weight: 850; letter-spacing: -.02em; text-wrap: balance; }
  h2 { margin: 48px 0 10px; padding-top: 20px; border-top: 2px solid var(--linea); font-size: 25px; line-height: 1.2; font-weight: 800; }
  h3 { margin: 30px 0 8px; font-size: 19px; line-height: 1.25; font-weight: 800; }
  p, li { text-wrap: pretty; }
  ul, ol { padding-left: 1.3em; }
  li { margin: 4px 0; }
  a { color: var(--tinta); text-decoration-color: var(--naranja); text-decoration-thickness: 2px; text-underline-offset: 3px; }
  code { font-family: "JetBrains Mono", ui-monospace, Consolas, monospace; font-size: .88em; background: #fff;
         border: 1px solid var(--linea); border-radius: 6px; padding: 1px 5px; }
  pre { background: #fff; border: 1px solid var(--linea); border-radius: 12px; padding: 12px 14px; overflow-x: auto; }
  pre code { border: 0; padding: 0; }
  hr { border: 0; margin: 0; }
  table { border-collapse: collapse; width: 100%; display: block; overflow-x: auto; }
  th, td { border: 1px solid var(--linea); padding: 6px 10px; text-align: left; }
  .pie { max-width: 720px; margin: 0 auto; padding: 0 16px 32px; font-size: 14px; color: var(--suave); }
</style>
</head>
<body>
<header class="cabecera">
  <img src="/mascota.webp" width="360" height="337" alt="">
  <div>
    <p class="marca">@claudexplica${version ? ' · ' + version : ''}</p>
    <a class="boton" href="/">Abrir Claude con esta guía →</a>
  </div>
</header>
<main>
${cuerpo}
</main>
<footer class="pie">
  <p>La misma guía, en texto: <a href="/guia.md">${DOMINIO.replace('https://', '')}/guia.md</a>. Cuenta no oficial, sin relación con Anthropic.</p>
</footer>
</body>
</html>
`;

mkdirSync(join(sitio, 'guia'), { recursive: true });
writeFileSync(join(sitio, 'guia', 'index.html'), html);

// La fecha de cada dirección es la del último commit que cambió su fichero (hoy, si tiene cambios sin guardar).
// Así el sitemap solo dice «ha cambiado» cuando de verdad ha cambiado la guía o la página.
const hoy = new Date().toISOString().slice(0, 10);
function ultimoCambio(fichero) {
  try {
    const git = (...a) => execFileSync('git', ['-C', sitio, ...a], { encoding: 'utf8' }).trim();
    if (git('status', '--porcelain', '--', fichero)) return hoy;
    return git('log', '-1', '--format=%cs', '--', fichero) || hoy;
  } catch {
    return hoy;
  }
}
const urls = [
  ['/', ultimoCambio('index.html')],
  ['/guia/', ultimoCambio('guia.md')],
  ['/guia.md', ultimoCambio('guia.md')]
];
writeFileSync(join(sitio, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(([u, fecha]) => `  <url><loc>${DOMINIO}${u}</loc><lastmod>${fecha}</lastmod></url>`).join('\n')}
</urlset>
`);

// Fuera de los buscadores: las versiones de prueba (v2, v3…), las pruebas de enlaces y las recetas sueltas antiguas.
const pruebas = readdirSync(sitio)
  .filter((n) => statSync(join(sitio, n)).isDirectory() && (/^v\d+$/.test(n) || n === 'pruebas' || n === 'recetas'))
  .sort((a, b) => a.localeCompare(b, 'es', { numeric: true }));
writeFileSync(join(sitio, 'robots.txt'), `User-agent: *
${pruebas.map((n) => `Disallow: /${n}/`).join('\n')}

Sitemap: ${DOMINIO}/sitemap.xml
`);

console.log(`guia/index.html (${version}), sitemap.xml y robots.txt escritos en ${sitio}`);
console.log(`Fuera de los buscadores: ${pruebas.join(', ')}`);
