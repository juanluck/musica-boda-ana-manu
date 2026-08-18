# Ana Belén & Manuel · Música de la ceremonia (v1)

Este paquete contiene una primera propuesta integral para la web y el programa A5 de la ceremonia del 12/09/2026.

## 1. Web

La carpeta `web/` es un sitio estático listo para GitHub Pages.

- `index.html`: página principal.
- `assets/config.js`: datos de la boda, repertorio, enlaces y textos explicativos.
- `assets/styles.css`: identidad visual y diseño responsive.
- `assets/app.js`: genera el repertorio y carga los vídeos de YouTube al pulsar.
- `assets/anagrama-am.png` y `assets/mosaico-granadino.png`: imágenes originales suministradas para la boda.

### Publicar en GitHub Pages

1. Copiar el contenido de `web/` a la raíz del repositorio elegido.
2. En GitHub: Settings -> Pages.
3. Seleccionar la rama que contiene la web y la carpeta `/ (root)`.
4. GitHub proporcionará la URL pública.

No hay proceso de compilación ni dependencias de Node/Python.

### Quitar los textos explicativos

En `web/assets/config.js` cambiar:

```js
showDescriptions: true
```

por:

```js
showDescriptions: false
```

Los nombres, autores, momentos y vídeos permanecerán intactos.

### Vídeos

Se conservan exactamente los enlaces facilitados. La web muestra primero una miniatura para mejorar la carga en móvil; al pulsar se inserta el vídeo mediante el modo de privacidad mejorada de YouTube. Cada ficha mantiene además el enlace directo original.

## 2. Programa A5

La carpeta `print/` contiene:

- `programa-a5.html`: fuente editable, preparada para impresión A5 a doble cara.
- `programa-musical-A5-v1.pdf`: versión PDF para revisar/imprimir.

El QR todavía es un marcador provisional, porque la URL definitiva de GitHub Pages no existe aún. Cuando la web esté publicada, debe sustituirse por el QR real.

## Criterio visual

La propuesta mezcla de forma sutil las dos identidades facilitadas:

- base marfil, verde salvia, líneas doradas y motivos botánicos inspirados en la invitación;
- pequeños acentos de mosaico azul/dorado inspirados en la cerámica granadina de los regalos.

El objetivo es que web y A5 parezcan papelería oficial de la boda y no un proyecto independiente.
