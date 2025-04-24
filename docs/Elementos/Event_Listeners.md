---
sidebar_position: 3
---
Es una sección del Inspector que te permite ver qué eventos JavaScript están conectados a un elemento del DOM.

Lo puedes encontrar al costado de **"Layout"**, para acceder presionas click izquierdo.

imagen de referencia:
<img src="/img/E.L.png" />

## ¿Para qué sirve?
### Ver qué eventos están asociados a un elemento
Ejemplo: si haces clic en un botón y algo pasa, podés ver si ese botón tiene eventos como:

click

mouseover

keydown

submit

change

Y de dónde vienen (archivo JS, línea, etc.).

### Saber qué archivo o script los definió
La pestaña te muestra:

El tipo de evento (click, input, etc.).

Dónde está definido (archivo JS + línea).

Si es capturing o bubbling.

Si está desactivado (por ejemplo, passive, once, etc.).

### Depurar errores de interacción
Es ideal si:

Un botón no responde y querés saber si tiene evento.

Un elemento reacciona de forma inesperada.

Quieres entender cómo una app compleja maneja los eventos (como un onScroll, onChange, etc.).

## ¿Cómo se usa?
Abre el Inspector (F12 o clic derecho → "Inspeccionar").

Seleccioná un elemento del DOM.

Buscá la pestaña Event Listeners (junto a "Styles", "Computed", "Layout").

Expandí las categorías de eventos (como click, mouse, keyboard).

Hacé clic sobre el archivo/función para ir directamente al código en la pestaña "Sources".

<img src="/img/E.L3.png" />
## Ejemplo
Supongamos que un botón tiene este código:

<img src="/img/E.L1.png" />

En el inspector vas a ver:

<img src="/img/E.L2.png" />

