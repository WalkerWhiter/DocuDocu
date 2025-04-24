---
sidebar_position: 4
---

Los DOM Breakpoints son puntos de interrupción que podés agregar a elementos del DOM para que el depurador del navegador se detenga cuando ese elemento cambia.

Los DOM Breakpoints te permiten poner un "punto de interrupción" en un elemento del DOM para que el navegador te avise cuando:

Se le cambia un atributo (como class, style, disabled, etc.).

Se le agregan/eliminan nodos hijos.

Se elimina completamente del DOM.

Lo encuentras en la parte inferior de **"Elements"** y al costado de **"Event Listeners"**.

<img src="/img/DOM1.png" />

## ¿Dónde se usan?
En el panel "Elements" del Inspector de Chrome o Edge:

Hacés clic derecho sobre un elemento.

Vas a "Break on..." (romper en...).

Elegís uno de los siguientes:

## Tipos de DOM Breakpoints

Opción	¿Qué detecta? 🔍
Subtree modifications	Cuando cambian los hijos del elemento (se agregan o eliminan).
Attributes modifications	Cuando se cambia un atributo (como class, id, style).
Node removal	Cuando el nodo es eliminado del DOM.

## Ejemplo práctico
Imaginá que hay un div que se muestra/oculta dinámicamente con JS. No sabés dónde ni por qué se modifica.

Paso a paso:
Click derecho sobre el div → Break on... → Subtree modifications

Recargás o interactuás con la app.

¡Boom! El navegador se detiene automáticamente cuando ese div cambia.

Te lleva al código fuente que hizo el cambio. Desde ahí podés analizar y seguir paso a paso.

👁‍🗨 ¿Por qué son tan útiles?
Descubrís qué script modifica el DOM sin tener que buscar entre miles de líneas.

Depurás efectos colaterales que no se ven a simple vista.

Súper útil para entender cómo funcionan frameworks como React, Vue, Docusaurus (en el cliente), etc.