# El sistema para crear con Claude

Guía de @claudexplica. Versión D11.1, del 21 de noviembre de 2026.

Este es el sistema de @claudexplica para crear con Claude desde un chat: vídeos, una tienda o un producto digital, voces y agentes que atienden a tus clientes, el WhatsApp de tu negocio, tus redes, lo que funciona en tu competencia, una web, presentaciones, imágenes y guiones. Claude hace el trabajo, solo o con una herramienta conectada a tu cuenta.

## Lo primero: qué quieres crear

Se elige una cosa antes de empezar. Si la persona ya ha dicho qué quiere, se va directo a su receta.

**Vídeo**

- Un vídeo sin salir en cámara: parte A, recetas 1 y 2.
- Un anuncio de tu producto: receta 4.
- Editar un vídeo que ya has grabado: parte B, recetas 6 y 7.
- Cortos de un vídeo largo: receta 8.
- Un vídeo con presentador o con tu avatar: parte C, recetas 10 y 11.
- Guiones para tus reels: parte I, receta 31.

**Vender**

- Una tienda online: parte D, recetas 12 y 13.
- Un producto digital, como un ebook o una plantilla: receta 14.
- Qué dicen las reseñas de tu negocio y de tu competencia: parte J, receta 35.
- Los negocios de tu zona, para conocer tu mercado: receta 36.

**Voz y agentes**

- Una locución o tu propia voz: parte E, recetas 15 y 16.
- Un agente de voz para tu web: receta 17.
- Un agente que contesta el teléfono: receta 18.
- Un agente que contesta solo tu WhatsApp: receta 19.

**El WhatsApp de tu negocio**

- Ver quién espera respuesta y contestar con Claude: parte H, receta 27.
- Seguimientos y recordatorios: receta 28.
- Un aviso a tus clientes: receta 29.
- El resumen del día: receta 30.

**Redes**

- Publicar o programar en todas tus redes: parte F, receta 20.
- Contestar comentarios y mensajes: receta 21.
- Respuestas automáticas en Instagram: receta 22.
- Ver qué funciona: receta 23.
- El plan de contenido del mes: receta 32.
- Qué funciona en las cuentas de tu competencia: receta 34.

**Web y diseño**

- Una web o una landing: parte G, receta 24.
- Una presentación: receta 25.
- Imágenes y carruseles: receta 26.
- Una mini app para tus clientes: receta 33.

Todas las partes están enteras más abajo, en esta misma página.

Todas necesitan una cuenta de Claude. Revid, Submagic, HeyGen, Zernio, Wassenger y Apify se añaden como conector personalizado, y la cuenta gratuita de Claude admite uno solo: si ya hay otro puesto, hay que quitarlo antes de añadir el nuevo. Shopify, ElevenLabs, Lovable y Canva están en el directorio de conectores de Claude y no cuentan para ese límite. Las recetas 24, 25 y 31 a 33 las hace Claude solo. La parte C, según HeyGen, pide un plan de pago de Claude.

Al empezar una parte, Claude dice en una frase para qué va bien esa herramienta y para qué no (su línea «Va bien para»), junto al enlace para crear la cuenta. Si no encaja con lo que la persona quiere, propone la parte que sí encaja. Solo pregunta lo que puede bloquear: si su Claude es gratuito y ya tiene otro conector personalizado puesto, y en la parte C, si su Claude es de pago.

Antes de usar una herramienta por primera vez en la conversación, Claude mira si trae sus propias instrucciones: una skill de esa herramienta, o las skills y guías que ofrece su conector. Si las hay, las carga y las sigue para manejarla. Esta guía dice qué se hace y en qué orden; las instrucciones de la herramienta, cómo se usa.

Si la persona pide a Claude que recuerde esta guía, Claude lo guarda en su memoria como una nota general, no dentro de un tema: cuando quiera crear algo con Claude, antes de contestar, abrir esta guía (https://claudexplica.xyz/guia.md). En una conversación nueva, Claude solo puede abrir las direcciones que escribe la persona o las que salen en una búsqueda, así que la nota dice también qué hacer si no le deja: buscarla en la web y abrir el resultado de claudexplica.xyz y, si no sale, pedirle a la persona que pegue esa dirección en el chat. Si su cuenta no tiene la memoria activada, se lo dice en una frase y le explica que se activa en los ajustes de Claude, sin insistir.

---

## Parte A. Un vídeo sin salir en cámara, con Revid

**Va bien para** vídeos cortos de imágenes con voz y subtítulos, desde una idea o un guion: listas, datos curiosos, explicaciones. **No va bien para** historias con los mismos personajes en cada escena, ni para editar un vídeo ya grabado (eso es la parte B). Si las fotos de un producto llevan texto, el texto puede salir estropeado: el anuncio sale mejor desde la página del producto.

Son tres pasos:

1. Crear la cuenta gratis de Revid y conectarla a Claude. Una sola vez.
2. Ver qué vídeos funcionan en tu tema y cuánto costará el tuyo. Gratis (receta 1).
3. Generar el vídeo y publicarlo. Aquí hace falta un plan de Revid (recetas 2 a 5).

### Lo primero: la cuenta gratis de Revid

Todo empieza por crear la cuenta de Revid desde este enlace: https://www.revid.ai/?via=aferncult

Es gratis y no pide tarjeta. Con ella, Claude ya puede buscar qué vídeos funcionan en un tema (20 búsquedas al día) y calcular cuánto costará un vídeo antes de hacerlo. El conector de Claude se enlaza después con esta misma cuenta, así que va antes que todo lo demás.

### Qué más hace falta

Para generar el vídeo, un plan de Revid. El plan Growth cuesta 39 dólares al mes y trae 2.000 créditos. Con el código CLAUDEXPLICA, el primer mes sale un 20 % más barato. Se escribe al pagar.

### Conectar Revid a Claude, una sola vez

Con la cuenta de Revid ya creada:

1. Abrir los conectores de Claude: https://claude.ai/customize/connectors (en el menú de Claude, «Customize» y «Connectors»). Se hace en claude.ai desde un navegador o en la app del ordenador; una vez puesto, el conector sirve también en la app del móvil.
2. Pulsar «Add» y «Add custom connector». Nombre: Revid. En la casilla de la dirección se pega esto, tal cual: `https://www.revid.ai/api/mcp`. Es una dirección para Claude: abierta en el navegador solo da un error.
3. Seguir hasta «Add». Se abre Revid para iniciar sesión: se entra con la cuenta recién creada y se aprueba el acceso.
4. De vuelta en el chat, mirar que Revid está activado: botón «+» y «Connectors». Si Claude sigue sin verlo, se abre una conversación nueva.

La primera vez que Claude usa Revid pide permiso: se acepta.

### Receta 1. Ver qué funciona en tu tema (gratis)

Se le pide a Claude, por ejemplo: «Busca con Revid los vídeos más virales sobre datos curiosos en español y resume cómo empiezan».

Claude devuelve los vídeos con sus vistas, su texto completo y su primera frase. Sirve para elegir el tema y la primera frase antes de gastar nada.

### Receta 2. Un vídeo desde una idea

1. Se le da a Claude el tema y la duración. Por ejemplo: «Haz un vídeo vertical de 30 segundos con tres datos curiosos sobre el océano, con una voz nativa de España y subtítulos». La voz se pide por su acento («de España», «mexicana»): las que salen por defecto hablan español con acento inglés.
2. Antes de generar, se le pide el precio en créditos. Calcularlo es gratis y depende de cómo se hagan las imágenes. Para 30 segundos, en noviembre de 2026:
   - Con vídeos de archivo: unos 33 créditos. Con el plan Growth, unos 60 vídeos al mes.
   - Con imágenes en movimiento: 37 créditos, o 59 con música hecha a medida. De 33 a 54 vídeos al mes.
   - Con vídeo generado por IA: unos 360 créditos. Unos 5 vídeos al mes.
3. Si no hay plan, este es el momento de elegirlo en Revid. Al pagar, se escribe el código CLAUDEXPLICA: un 20 % menos el primer mes.
4. Claude lanza el vídeo y avisa cuando está listo, con el enlace para verlo.
5. Si algo no convence (una frase, una imagen, la voz), se le pide el cambio: Claude lo corrige sobre el mismo vídeo, sin hacerlo de nuevo.

### Receta 3. Un vídeo desde un artículo o un enlace

Se le da a Claude la dirección de una página y la duración. Por ejemplo: «Convierte este artículo en un vídeo vertical de 40 segundos con subtítulos: (enlace)». Lo demás es igual que en la receta 2: primero el precio, después el vídeo.

### Receta 4. Un anuncio de producto

Se le dan a Claude las fotos del producto o su página y lo que tiene que contar. Por ejemplo: «Haz un anuncio de 20 segundos de este producto con estas fotos: (enlaces)». Lo demás es igual que en la receta 2.

### Receta 5. Publicarlo o programarlo

Las cuentas de TikTok, YouTube e Instagram se conectan en los ajustes de Revid. Después se le pide a Claude, por ejemplo: «Publica el último vídeo en mi TikTok el viernes a las 18:00».

---

## Parte B. Editar un vídeo que ya has grabado, con Submagic

**Va bien para** poner subtítulos, imágenes de apoyo y estilo a un vídeo corto que ya has grabado. **No va bien para** quien necesita 4K o decidir cada corte a mano. Los cortos de un vídeo largo (receta 8) se revisan antes de publicarlos.

Son tres pasos:

1. Crear la cuenta gratis de Submagic y conectarla a Claude. Una sola vez.
2. Pedirle a Claude la edición y subir el vídeo desde el móvil o el ordenador (recetas 6 a 8).
3. Descargarlo o publicarlo (receta 9).

### Lo primero: la cuenta gratis de Submagic

Todo empieza por crear la cuenta de Submagic desde este enlace: https://submagic.co/?via=claudexplica

Es gratis y no pide tarjeta. Trae 15 créditos, unos 5 vídeos con subtítulos, y una edición entera de Iris, la editora de Submagic. Lo que se descarga con la cuenta gratis lleva la marca de agua de Submagic. El conector de Claude se enlaza después con esta misma cuenta.

### Qué más hace falta

- El vídeo, en MP4 o MOV, de hasta 10 minutos.
- Para quitar la marca de agua y hacer más vídeos, un plan de Submagic:
  - Starter: 19 dólares al mes, o 12 con pago anual. Al mes, 15 vídeos con subtítulos y 2 ediciones de Iris, con vídeos de hasta 2 minutos.
  - Pro: 39 dólares al mes, o 23 con pago anual. Al mes, 40 vídeos y 6 ediciones de Iris, con vídeos de hasta 5 minutos. Suma quitar silencios y tomas falsas, limpiar el audio y publicar en redes.

### Conectar Submagic a Claude, una sola vez

Con la cuenta de Submagic ya creada:

1. Abrir este enlace, que deja el conector ya rellenado: https://claude.ai/customize/connectors?modal=add-custom-connector&connectorName=Submagic&connectorUrl=https%3A%2F%2Fapi.submagic.co%2Fmcp
   Si no se rellena solo: en los conectores de Claude (https://claude.ai/customize/connectors), «Add» y «Add custom connector». Nombre: Submagic. Dirección: `https://api.submagic.co/mcp`. Es una dirección para Claude: abierta en el navegador solo da un error.
   Se hace en claude.ai desde un navegador o en la app del ordenador; una vez puesto, sirve también en la app del móvil.
2. Seguir hasta «Add». Se abre Submagic: se entra con la cuenta recién creada y se pulsa «Allow access».
3. De vuelta en el chat, mirar que Submagic está activado: botón «+» y «Connectors». Si Claude sigue sin verlo, se abre una conversación nueva.

### Receta 6. Subtítulos para tu vídeo

1. Se le pide a Claude, por ejemplo: «Con Submagic, pon subtítulos en español a mi vídeo. Enséñame antes los estilos».
2. Claude da un enlace para subir el vídeo. Se abre en el móvil o en el ordenador, se elige el vídeo y se envía. Cada enlace vale para un vídeo y caduca a los 30 minutos. También vale un enlace de Google Drive o Dropbox.
3. Claude avisa cuando está listo, con el enlace para verlo y descargarlo.

Cuesta 3 créditos. Los extras suman de 1 a 3 créditos cada uno: zooms, imágenes de apoyo, un título de gancho al principio, quitar silencios. Si el vídeo falla, los créditos vuelven.

### Receta 7. Que Iris lo edite entero

Iris monta un vídeo hablado de hasta 3 minutos: cortes, subtítulos, imágenes de apoyo, música, efectos y gráficos.

1. Se le pide a Claude: «Con Submagic, que Iris edite mi vídeo. Enséñame antes sus estilos».
2. Se sube el vídeo con el enlace que da Claude, como en la receta 6.
3. Los cambios se piden con palabras: «quita la pausa del principio», «la música más baja», «los subtítulos más arriba». Cada cambio guarda una versión nueva.

Cuesta 20 créditos por vídeo, y los cambios no gastan. La cuenta gratis trae una edición de Iris.

### Receta 8. Cortos de un vídeo largo

Se le da a Claude el enlace de un vídeo de YouTube: «Con Submagic, saca cortos de este vídeo: (enlace)». Submagic elige los mejores momentos y los deja en vertical, con subtítulos. Cuesta 8 créditos.

### Receta 9. Publicarlo o programarlo

Las cuentas de TikTok, YouTube, Instagram, X, Facebook y LinkedIn se conectan en Submagic. Después se le pide a Claude, por ejemplo: «Publica el último vídeo en mi Instagram mañana a las 9:00». Publicar va con el plan Pro.

---

## Parte C. Un vídeo con presentador, con HeyGen

**Va bien para** un vídeo corto con alguien que habla a cámara: tu avatar o uno de sus presentadores, diciendo un guion. **No va bien para** que monte el vídeo entero sin guion, ni para vídeos largos o en serie. Pide un plan de pago de Claude.

Son tres pasos:

1. Crear la cuenta de HeyGen y conectarla a Claude. Una sola vez.
2. Darle a Claude el tema o el guion (receta 10).
3. Si quieres que el presentador seas tú, crear tu avatar en HeyGen (receta 11).

### Lo primero: la cuenta de HeyGen

Se crea en https://www.heygen.com. Es gratis: 3 vídeos al mes de hasta 1 minuto, con marca de agua, con más de 500 presentadores ya hechos y un avatar propio.

### Qué más hace falta

- Un plan de pago de Claude: HeyGen lo pide para usarlo desde Claude, y recomienda su plan Creator o uno mayor.
- Planes de HeyGen, el 20 de noviembre de 2026: Creator, 29 dólares al mes, con 600 créditos, sin marca de agua, en 1080p, vídeos de hasta 30 minutos y tu avatar con tu propia voz. Pro, 49 dólares al mes, con 1.000 créditos y 4K. Con pago anual, dos meses gratis.

### Conectar HeyGen a Claude, una sola vez

Con la cuenta de HeyGen ya creada:

1. Abrir este enlace, que deja el conector ya rellenado: https://claude.ai/customize/connectors?modal=add-custom-connector&connectorName=HeyGen&connectorUrl=https%3A%2F%2Fmcp.heygen.com%2Fmcp%2Fv1%2F
   Si no se rellena solo: en los conectores de Claude (https://claude.ai/customize/connectors), «Add» y «Add custom connector». Nombre: HeyGen. Dirección: `https://mcp.heygen.com/mcp/v1/`.
2. Seguir hasta «Add», pulsar «Connect» y aprobar el acceso en HeyGen.
3. De vuelta en el chat, mirar que HeyGen está activado (botón «+» y «Connectors») y preguntar: «¿Cuántos créditos me quedan en HeyGen?».

### Receta 10. Un vídeo con presentador, desde un tema o un guion

1. Se le pide a Claude, por ejemplo: «Con HeyGen, haz un vídeo vertical de 30 segundos con un presentador que explique por qué el café quita el sueño, en español de España. Enséñame antes los presentadores y las voces».
2. Claude escribe el guion, o usa el tuyo palabra por palabra si se lo das, y genera el vídeo con el presentador y la voz elegidos.
3. Claude avisa cuando está listo, con el enlace para verlo. El vídeo queda también en «Projects», en HeyGen.

### Receta 11. Que el presentador seas tú

Tu avatar se crea una vez en la app de HeyGen: se graba un vídeo corto hablando a cámara y se da el permiso para usar tu imagen. La cuenta gratis permite uno; con tu propia voz, desde el plan Creator.

Después se le pide a Claude: «Con HeyGen, haz este vídeo con mi avatar: (guion)». A partir de ahí, cada vídeo sale sin volver a grabarte.

---

## Parte D. Una tienda online o un producto digital, con Shopify

**Va bien para** montar tu tienda sin programar, si ya tienes producto y una forma de traer visitas. **No va bien para** vender sin tráfico, ni para un catálogo digital muy grande. Antes de abrirla, haz una compra de prueba; y si no vas a seguir, cancela antes de que acabe la prueba.

Son tres pasos:

1. Entrar en Shopify desde el enlace del canal y activar el conector en Claude. Una sola vez.
2. Pedirle a Claude la tienda (receta 12). No hace falta cuenta de Shopify para verla.
3. Guardarla en tu cuenta de Shopify y abrirla al público (receta 13). Con la tienda guardada, se le pueden añadir productos digitales (receta 14).

### Lo primero: entrar en Shopify desde este enlace

Todo empieza por abrir Shopify desde este enlace, en el mismo navegador en el que se usa Claude: https://shopify.pxf.io/yZNkvG

No hace falta registrarse todavía. La cuenta se crea al guardar la tienda (receta 13), y tiene que ser en ese mismo navegador.

### Qué cuesta

- El conector y ver la tienda, nada.
- Shopify, en España, el 21 de noviembre de 2026: 3 días gratis; después, 1 € al mes los 3 primeros meses, y luego el plan Basic, 32 € al mes, o 24 € al mes con pago anual.

### Activar Shopify en Claude, una sola vez

1. En el chat de Claude: botón «+», «Connectors» y Shopify. También desde https://claude.ai/directory/connectors/shopify
2. Se pulsa «Connect». Está en el directorio de Claude, así que funciona con la cuenta gratuita y no cuenta como conector personalizado.

### Receta 12. Tu tienda, desde una idea

1. Se le dice a Claude qué vendes y cómo quieres que se vea. Por ejemplo: «Con Shopify, monta una tienda para vender velas artesanales, con un estilo cálido y minimalista».
2. Después, los productos con sus precios: «Añade tres velas: lavanda a 18 €, vainilla a 18 € y un pack de las dos a 32 €».
3. Claude enseña cómo queda. Los cambios se piden con palabras: «el titular más corto», «otro color de fondo».

### Receta 13. Guardarla y abrirla al público

1. Cuando la tienda guste, se le pide a Claude el enlace para guardarla en una cuenta de Shopify, y se abre en el mismo navegador del enlace del principio: https://shopify.pxf.io/yZNkvG
2. Se crea la cuenta y la tienda queda guardada en ella.
3. Antes de vender, en el panel de Shopify: pagos, envíos, impuestos y dominio.

### Receta 14. Un producto digital: un ebook o una plantilla

Con la tienda ya guardada en tu cuenta de Shopify (receta 13):

1. Se escribe el producto con Claude. Por ejemplo: «Escribe conmigo un ebook de 15 páginas sobre batch cooking para principiantes. Primero, el índice». Al terminar, se le pide en PDF.
2. Se le pide a Claude que lo ponga a la venta: «Con Shopify, crea en mi tienda un producto digital: el ebook "Batch cooking fácil", a 9 €, con su descripción». Si hace falta, Claude instala la app de productos digitales de Shopify y dice cómo pasarle el archivo.
3. Quien compra recibe el archivo para descargarlo. Antes de anunciarlo, se mira en el panel de Shopify cómo queda la página del producto.

---

## Parte E. Voz y agentes, con ElevenLabs

**Va bien para** locuciones que suenan reales y para clonar tu voz con un audio de calidad. **No va bien para** conservar un acento muy marcado, ni para un agente de teléfono barato con muchas llamadas. Si pagas, quita la recarga automática: los créditos sin gastar se pierden al bajar de plan o cancelar.

Son tres pasos:

1. Crear la cuenta gratis de ElevenLabs y activar el conector en Claude. Una sola vez.
2. Pedirle a Claude la locución (receta 15) o un agente (recetas 17 a 19): en tu web, al teléfono o en WhatsApp.
3. Si quieres que la voz sea la tuya, clonarla en ElevenLabs (receta 16).

### Lo primero: la cuenta gratis de ElevenLabs

Todo empieza por crear la cuenta de ElevenLabs desde este enlace: https://elevenlabs.io

Es gratis: 10.000 créditos al mes, unos 10 minutos de voz. El conector de Claude se enlaza después con esta misma cuenta.

### Qué más hace falta

Para usar la voz en vídeos o audios con los que ganes dinero, o para clonar tu voz, un plan de ElevenLabs. Precios del 21 de noviembre de 2026:

- Starter: 6 dólares al mes. Unos 30 minutos de voz, uso comercial y clonar tu voz con un audio corto.
- Creator: 22 dólares al mes, 11 el primer mes. Unos 120 minutos de voz y la clonación profesional, la más fiel.

### Activar ElevenLabs en Claude, una sola vez

1. Abrir https://claude.ai/directory/connectors/elevenlabs y pulsar «Connect». También en el chat: botón «+», «Connectors» y ElevenLabs.
2. Se abre ElevenLabs: se entra con la cuenta recién creada, se elige el espacio de trabajo y se pulsa «Authorize».
3. Está en el directorio de Claude, así que funciona con la cuenta gratuita y no cuenta como conector personalizado.

### Receta 15. Una locución para tu vídeo

1. Se le da a Claude el texto, o se le pide que lo escriba, y cómo tiene que sonar. Por ejemplo: «Con ElevenLabs, lee este texto con una voz de hombre de España, cercana y tranquila. Enséñame antes tres voces: (texto)». La voz se pide por su acento («de España», «mexicana»).
2. Claude devuelve un enlace para descargar el audio. El enlace caduca en unas dos horas: se descarga enseguida.
3. Si algo no convence (el ritmo, una palabra, la voz), se le pide el cambio y genera otra vez esa parte.

### Receta 16. Que la voz sea la tuya

Tu voz se clona una vez en la web de ElevenLabs, en «Voices»: se sube o se graba un audio tuyo hablando, limpio y sin música. Pide el plan Starter.

Después se le pide a Claude: «Con ElevenLabs, lee este texto con mi voz: (texto)». A partir de ahí, cada locución sale con tu voz sin volver a grabarte.

### Receta 17. Un agente que contesta hablando

Un agente de voz atiende a tus clientes: contesta dudas, explica precios o toma datos.

1. Se le describe a Claude qué tiene que hacer. Por ejemplo: «Con ElevenLabs, crea un agente de voz para mi peluquería que conteste dudas de horarios y precios, en español de España. Horario: (…). Precios: (…)».
2. Se le pide el enlace para hablar con él y se prueba.
3. Los cambios se piden con palabras: «que salude más corto», «que pida el teléfono al final».

### Receta 18. Un agente que contesta el teléfono

El agente de la receta 17 también puede coger las llamadas de tu negocio. Hace falta un número de teléfono de Twilio, que es de pago (el número y los minutos), y unos minutos en la web de ElevenLabs.

1. Se crea el agente con Claude, como en la receta 17, diciéndole que atiende llamadas. Por ejemplo: «Con ElevenLabs, crea un agente que conteste el teléfono de mi clínica, dé citas y, si no sabe algo, pida el nombre y el teléfono».
2. Se consigue un número en https://www.twilio.com y se copian su «Account SID» y su «Auth Token».
3. En ElevenLabs, en el apartado «Phone Numbers» de los agentes, se importa el número de Twilio con esos datos y se le asigna el agente. ElevenLabs deja Twilio configurado solo.
4. Se llama al número para probarlo. Los cambios del agente se le siguen pidiendo a Claude.

### Receta 19. Un agente de WhatsApp

El agente contesta los mensajes y los audios de tu WhatsApp de empresa.

Hace falta una cuenta de empresa en Meta y un número que no esté en uso en la app de WhatsApp ni con otro proveedor. Meta cobra aparte las plantillas y las llamadas.

1. Se crea el agente con Claude, como en la receta 17, diciéndole que atiende por WhatsApp. Por ejemplo: «Con ElevenLabs, crea un agente que conteste por WhatsApp a los clientes de mi tienda, con mensajes cortos y en español de España».
2. En ElevenLabs, en el apartado «WhatsApp» de los agentes, se pulsa «Import account» y se siguen los pasos de Meta: elegir o crear la cuenta de empresa y el número, y dar permiso.
3. En la cuenta importada, se le asigna el agente. A partir de ahí contesta solo.
4. Se le escribe desde otro móvil para probarlo.

---

## Parte F. Tus redes sociales, con Zernio

**Va bien para** que Claude publique y programe en varias redes a la vez y te ayude a contestar comentarios y mensajes. **No va bien para** quien quiere subir muchas publicaciones de golpe sin tocar nada técnico. Es gratis con 2 cuentas; desde la tercera, de pago.

Son tres pasos:

1. Crear la cuenta gratis de Zernio, conectar tus redes y conectarlo a Claude. Una sola vez.
2. Publicar o programar desde el chat (receta 20).
3. Contestar comentarios y mensajes, responder solo a quien comenta y ver qué funciona (recetas 21 a 23).

### Lo primero: la cuenta gratis de Zernio

Todo empieza por crear la cuenta de Zernio desde este enlace: https://zernio.link/alex-fernandez

Las dos primeras cuentas de redes son gratis y no piden tarjeta. Dentro de Zernio se conectan las redes: Instagram, TikTok, YouTube, LinkedIn, X, Facebook, Threads o Pinterest.

### Qué cuesta

- Desde la tercera cuenta, 6 dólares al mes por cada una (precios del 21 de noviembre de 2026).
- Los primeros 10.000 mensajes privados al mes, gratis.
- Si promocionas una publicación, el presupuesto del anuncio se paga aparte, en cada red.

### Conectar Zernio a Claude, una sola vez

Con la cuenta de Zernio ya creada y alguna red conectada:

1. Abrir este enlace, que deja el conector ya rellenado: https://claude.ai/customize/connectors?modal=add-custom-connector&connectorName=Zernio&connectorUrl=https%3A%2F%2Fmcp.zernio.com%2Fmcp
   Si no se rellena solo: en los conectores de Claude (https://claude.ai/customize/connectors), «Add» y «Add custom connector». Nombre: Zernio. Dirección: `https://mcp.zernio.com/mcp`. Es una dirección para Claude: abierta en el navegador solo da un error.
   Se hace en claude.ai desde un navegador o en la app del ordenador; una vez puesto, sirve también en la app del móvil.
2. Seguir hasta «Add». Se abre Zernio: se entra con la cuenta recién creada y se pulsa «Authorize».
3. De vuelta en el chat, mirar que Zernio está activado (botón «+» y «Connectors») y preguntar: «¿Qué cuentas tengo conectadas en Zernio?».

### Receta 20. Publicar o programar

Se le pide a Claude, por ejemplo: «Con Zernio, publica esta foto con este texto en Instagram y LinkedIn el jueves a las 16:00». Si la foto o el vídeo está en tu móvil o tu ordenador, Claude da un enlace para subirlo. Claude puede escribir el texto de cada red a su medida.

### Receta 21. Contestar comentarios y mensajes

Se le pide a Claude: «Con Zernio, enséñame los comentarios y los mensajes sin contestar de esta semana y propón una respuesta para cada uno». Se revisan y se le dice cuáles enviar.

### Receta 22. Respuestas automáticas en Instagram

Quien comenta una palabra en tu publicación recibe tu mensaje privado, solo. Hace falta una cuenta profesional de Instagram conectada en Zernio.

1. Se le pide a Claude, por ejemplo: «Con Zernio, crea una respuesta automática en mi último reel de Instagram: cuando alguien comente la palabra GUIA, mándale por privado este mensaje: (texto). Y contesta al comentario "Te lo he enviado por privado"».
2. Claude la crea y la deja activa. Para verla funcionar, se comenta la palabra desde otra cuenta.
3. Después se le puede preguntar cuánta gente la ha recibido y cuántos han pulsado el enlace.

Solo responde a los comentarios nuevos, una vez por persona. Si el mensaje lleva botones, Instagram a veces no se los entrega a quien no sigue la cuenta: entonces es mejor el enlace escrito en el texto.

### Receta 23. Ver qué funciona

Se le pide a Claude: «Con Zernio, dime cuáles de mis publicaciones del último mes llegaron a más gente y a qué hora me conviene publicar». Sirve para decidir el siguiente contenido.

---

## Parte G. Una web, una presentación o imágenes

Las recetas 24 y 25 las hace Claude solo, sin conectar nada. La 26 usa Canva, que está en el directorio de conectores de Claude.

### Receta 24. Una web o una landing

1. Se le describe a Claude lo que quieres. Por ejemplo: «Hazme una landing para mi peluquería: servicios, precios, horario y un botón de WhatsApp. Estilo cálido y moderno». Claude la hace en el chat, como artefacto, y se ve al momento.
2. Los cambios se piden con palabras: «el titular más grande», «añade una sección de opiniones».
3. Para compartirla, el botón «Publish» del artefacto da un enlace público.
4. Si la quieres en tu propio dominio o con un formulario que guarde datos, Claude la hace con Lovable, que está en el directorio de conectores (botón «+», «Connectors», Lovable). Para probarla, la cuenta gratis da 5 créditos al día, y cada cambio gasta: se piden juntos y bien explicados. El dominio propio pide su plan Pro, 25 € al mes (21 de noviembre de 2026).

### Receta 25. Una presentación

1. Se le dice a Claude para qué es, a quién se la enseñas y cuántas diapositivas. Por ejemplo: «Hazme una presentación de 8 diapositivas para presentar mi negocio a un posible socio: (datos). Estilo sobrio, en azul y blanco». Si le faltan datos, Claude te los pregunta.
2. Claude la hace como archivo de PowerPoint para descargar. Si en tu cuenta no puede crear archivos, se le pide como artefacto, que se ve a pantalla completa.
3. Los cambios se piden con palabras: «la diapositiva 3, con menos texto», «añade una de precios». El archivo se abre en PowerPoint, Google Slides o Keynote para presentarlo o seguir retocándolo.

### Receta 26. Imágenes y carruseles, con Canva

1. Se crea la cuenta de Canva en https://www.canva.com (sirve la gratuita) y se activa Canva en Claude: botón «+», «Connectors» y Canva. Se entra con la cuenta de Canva y se da permiso.
2. Se le pide a Claude, por ejemplo: «Con Canva, hazme un carrusel de Instagram de 5 diapositivas con los 5 errores al empezar a correr, en naranja y crema». Claude enseña varias propuestas.
3. Se elige una y se le piden los cambios con palabras. El diseño queda en tu cuenta de Canva, desde donde se descarga o se sigue editando.

---

## Parte H. El WhatsApp de tu negocio, con Wassenger

**Va bien para** el negocio que atiende a sus clientes por WhatsApp y quiere que Claude le ayude a contestar, hacer seguimientos y avisar. **No va bien para** escribir a quien no te ha dado su número, ni para un agente que conteste solo (eso es la receta 19). No tiene plan gratis: 7 días de prueba y después desde 39,90 € al mes.

Claude lee los chats de tu WhatsApp de empresa, te dice quién espera respuesta y te escribe las respuestas. Solo envía lo que le dices que envíe.

Son tres pasos:

1. Crear la cuenta de Wassenger y conectar tu número de WhatsApp. Una sola vez.
2. Conectar Wassenger a Claude con una clave. Una sola vez.
3. Pedirle a Claude lo que necesites (recetas 27 a 30).

Para Instagram y las demás redes, la parte F.

### Lo primero: la cuenta de Wassenger

Todo empieza por crear la cuenta de Wassenger desde este enlace: https://wassenger.com/?ref=cu309m

Los 7 primeros días son gratis y no piden tarjeta. Dentro, Wassenger guía los pasos de Meta para conectar el número, de una de tres formas:

- Seguir usando la app WhatsApp Business en tu móvil con el mismo número (la opción «Coexistence»). Es la más cómoda si ya atiendes desde el móvil.
- Pasar a Wassenger el número que ya usas.
- Empezar con un número nuevo.

### Qué cuesta

Después de la prueba, un plan de Wassenger (precios del 21 de noviembre de 2026):

- Professional: 39,90 € al mes, o 33,25 € con pago anual. Hasta 3 personas en la bandeja, el asistente de IA y la conexión con Claude.
- Business: 69,90 € al mes. Hasta 6 personas y automatizaciones.

Meta cobra aparte, a precio de coste, las plantillas: los mensajes que abren una conversación o que se envían cuando han pasado más de 24 horas desde el último mensaje del cliente.

### Conectar Wassenger a Claude, una sola vez

Con el número ya conectado en Wassenger:

1. Crear una clave para Claude en https://app.wassenger.com/developers/apikeys y copiarla. Si un día la borras, Claude deja de tener acceso.
2. En los conectores de Claude (https://claude.ai/customize/connectors), «Add» y «Add custom connector». Nombre: Wassenger. Dirección: `https://api.wassenger.com/mcp?key=TU_CLAVE`, con tu clave en lugar de TU_CLAVE.
   La clave va solo ahí: no se pega en el chat.
   Se hace en claude.ai desde un navegador o en la app del ordenador; una vez puesto, sirve también en la app del móvil.
3. De vuelta en el chat, mirar que Wassenger está activado (botón «+» y «Connectors») y pedir: «Con Wassenger, comprueba que mi WhatsApp está conectado». Tiene que responder con tu número activo.

### Receta 27. Quién espera respuesta

Se le pide a Claude: «Con Wassenger, enséñame los clientes que llevan más tiempo esperando respuesta en WhatsApp y escríbeme una respuesta para cada uno». Claude enseña cada respuesta y envía solo las que le apruebas.

### Receta 28. Seguimientos y recordatorios

Se le pide a Claude, por ejemplo: «Con Wassenger, busca a quien me pidió precio esta semana y no ha vuelto a escribir, y prográmale un mensaje para mañana a las 10:00». O el recordatorio de una cita, la víspera.

Si han pasado más de 24 horas desde el último mensaje del cliente, WhatsApp solo deja enviar una plantilla aprobada por Meta. Claude la prepara y Meta la revisa antes de que se pueda usar.

### Receta 29. Un aviso a tus clientes

Se le pide a Claude, por ejemplo: «Con Wassenger, manda este aviso a mis contactos con la etiqueta "clientes": (texto)». Va como plantilla, y Meta cobra cada envío.

Solo a quien te ha dado su número y quiere recibir tus mensajes. WhatsApp limita o bloquea los números que escriben a quien no los conoce.

### Receta 30. El resumen del día

Se le pide a Claude: «Con Wassenger, resúmeme los chats de ayer: quién preguntó qué y qué queda pendiente». Sirve para empezar el día sabiendo a quién contestar primero.

---

## Parte I. Guiones, plan de contenido y mini apps, con Claude solo

Las recetas 31 a 33 las hace Claude solo, sin conectar nada. Cada una acaba donde empieza otra parte de esta guía, por si quieres seguir.

### Receta 31. Guiones para tus reels

1. Se le dice a Claude el tema, a quién le hablas y cómo hablas. Por ejemplo: «Escríbeme 3 guiones de reel de 40 segundos sobre los errores al empezar a correr, para principiantes y en tono cercano. Cada uno con su gancho, el guion y el pie».
2. Si tienes un reel que te funcionó, se le pega su texto y Claude sigue su estilo.
3. Se elige uno y se retoca con palabras: «el gancho más corto», «sin tecnicismos».
4. Para hacer el vídeo con ese guion: sin salir en cámara, la parte A; con presentador, la parte C. Si lo grabas tú, la parte B lo edita.

### Receta 32. El plan de contenido del mes

1. Se le dice a Claude de qué va tu cuenta, en qué redes estás y cuántas veces quieres publicar. Por ejemplo: «Hazme el plan de contenido de diciembre para mi cuenta de Instagram de recetas fáciles: 3 publicaciones a la semana, mezclando reels y carruseles».
2. Claude lo devuelve como tabla: el día, el formato, la idea y el texto de cada publicación. Si lo quieres en Excel, se le pide el archivo.
3. Los cambios se piden con palabras: «más reels y menos carruseles», «una semana dedicada a la Navidad».
4. Para programarlo todo de una vez en tus redes, la parte F (receta 20).

### Receta 33. Una mini app para tus clientes

1. Se le describe a Claude qué tiene que hacer. Por ejemplo: «Hazme una calculadora de presupuestos para mi empresa de reformas: el cliente elige los metros, el tipo de suelo y si quiere pintura, y ve el precio aproximado». O un test que recomiende el producto que le va a cada cliente.
2. Claude la hace en el chat, como artefacto, y se prueba al momento.
3. Los cambios se piden con palabras: «añade el IVA», «el botón en verde».
4. Para compartirla, el botón «Publish» del artefacto da un enlace público, que se pone en tu bio o en tu web (receta 24).

---

## Parte J. Lo que funciona en tu competencia y en tu zona, con Apify

**Va bien para** sacar datos públicos que eliges tú (las cuentas de tu competencia, las reseñas de un negocio, los negocios de una zona) sin programar, y que Claude te diga qué significan. **No va bien para** conseguir el contacto de quien decide en una empresa, ni para mandar publicidad a esos negocios. Pide siempre a Claude el coste antes y ponle un tope: es lo que más sorprende a quien empieza.

Son tres pasos:

1. Crear la cuenta gratis de Apify y conectarla a Claude. Una sola vez.
2. Pedirle a Claude los datos, con el coste antes (recetas 34 a 36).
3. Leer lo que Claude saca de ellos.

### Lo primero: la cuenta gratis de Apify

Se crea en https://apify.com. Es gratis y no pide tarjeta.

### Qué cuesta

Precios del 21 de noviembre de 2026:

- Gratis: 5 dólares de crédito al mes, que dan para cientos de resultados. Si se gastan, se para hasta el mes siguiente y no cobra nada. El crédito que sobra no pasa al mes siguiente.
- Starter: 19 dólares al mes, más IVA, con 19 dólares de crédito. Hace falta si lo usas cada semana.

### Conectar Apify a Claude, una sola vez

1. Abrir este enlace, que deja el conector ya rellenado: https://claude.ai/customize/connectors?modal=add-custom-connector&connectorName=Apify&connectorUrl=https%3A%2F%2Fmcp.apify.com
   Si no se rellena solo: en los conectores de Claude (https://claude.ai/customize/connectors), «Add» y «Add custom connector». Nombre: Apify. Dirección: `https://mcp.apify.com`. Es una dirección para Claude: abierta en el navegador no sirve.
2. Seguir hasta «Add». Se abre Apify: se entra con la cuenta recién creada y se aprueba el acceso.
3. De vuelta en el chat, mirar que Apify está activado: botón «+» y «Connectors».

### Receta 34. Qué funciona en las cuentas de tu competencia

Se le pide a Claude, por ejemplo: «Con Apify, saca los últimos 30 reels de estas cuentas públicas de Instagram: @…, @…, @…. Antes dime cuánto costará y no gastes más de 1 dólar. Ordénalos por visualizaciones respecto a los seguidores de cada cuenta y dime qué tienen en común los 10 mejores: tema, duración, primera frase y formato».

Son datos públicos y para uso propio: importa qué funciona, no quién comenta.

### Receta 35. Qué dicen las reseñas de un negocio

Se le pide a Claude, por ejemplo: «Con Apify, saca las últimas 300 reseñas de Google Maps de (enlace de mi negocio) y de (enlace de un competidor). Dime antes el coste y no pases de 50 céntimos. Resume qué elogian y qué critican más, con 3 citas cortas sin nombres, y dame 5 mejoras».

### Receta 36. Los negocios de tu zona

Se le pide a Claude, por ejemplo: «Con Apify, busca en Google Maps "peluquerías" en Chamberí (Madrid), máximo 100. Dime antes el coste y no pases de 1 dólar. Hazme una tabla con el nombre, la nota, el número de reseñas, el horario y la web, y dime dónde hay menos competencia».

Sirve para conocer tu mercado. Mandar publicidad por correo o por mensaje a esos negocios sin que te la pidan está prohibido en España (LSSI).

---

## Si algo no sale

- Claude dice que no tiene el conector: se activa en el botón «+», «Connectors», o se abre una conversación nueva.
- Claude no deja añadir el conector: con Claude gratis solo cabe uno personalizado (Revid, Submagic, HeyGen, Zernio, Wassenger o Apify). Se quita el que haya. Shopify, ElevenLabs, Lovable y Canva no cuentan.
- Revid avisa al generar de que hace falta un plan: buscar y calcular el precio van con la cuenta gratis; generar pide un plan activo, aunque queden créditos. Al pagarlo, el código CLAUDEXPLICA.
- Submagic dice que no hay créditos: se le pregunta a Claude cuántos quedan. Cada vídeo necesita todos sus créditos; si no llegan, no se cobra nada.
- El enlace de subida ha caducado o rechaza el vídeo: se le pide otro a Claude, o un vídeo más corto.
- HeyGen no se deja conectar o no responde: según HeyGen, desde Claude hace falta un plan de pago de Claude.
- La tienda de Shopify pide contraseña: hasta que se guarda en una cuenta y se abre al público, nadie puede comprar. La plantilla puede traer textos en inglés y no trae fotos: hay que revisarlos antes de abrirla.
- El enlace del audio de ElevenLabs ya no abre: caduca en unas dos horas. Se le pide a Claude que lo genere otra vez.
- El número de WhatsApp no se deja importar: no puede estar en uso en la app de WhatsApp ni con otro proveedor. Hace falta otro número, o darlo de baja allí.
- Wassenger dice que falta la clave o que no es válida: se crea otra en https://app.wassenger.com/developers/apikeys y se cambia en la dirección del conector. Si dice que no hay ningún número activo, se conecta el número dentro de Wassenger.
- Lovable se queda sin créditos: la cuenta gratis da 5 al día y se recargan al día siguiente. Para no gastarlos, los cambios se piden juntos y bien explicados.
- Apify dice que no queda crédito: el gratis vuelve al empezar el mes siguiente. Antes de cada búsqueda, se le pide a Claude el coste y un tope.
- Zernio dice que no hay cuentas conectadas: se conecta una red en la app de Zernio y se vuelve a pedir. Si Claude no llega a Zernio, se quita el conector y se añade de nuevo.
