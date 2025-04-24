---
sidebar_position: 0
---

En esta pestaña se puede ver que codigo que a usado para poder darle ese diseño a la pagina, se encuentra en la parte inferior.

<img src="/img/Styles.png" />

Se muestra el codigo de estilo y composicion de esta manera:
<img src="/img/Styles2.png" />

## Filtro
<img src="/img/Styles3.png" />
Esta opcion nos sirve para ver un bloque en especifico que queramos ver a profundidad, le damos click izquierdo y empezamos a escribir para que nos muestre los bloques de codigo que coinciden.

<img src="/img/Styles4.png" />

Por ejemplo; en la ultima imagen busque **"body"** lo que ahora me muestra todos los bloques que tengan que ver con ello.

## :hov
<img src="/img/Styles5.png" />
Esta opcion sirve principalmente para poder alternar entre dos estados de una linea de codigo en especifico, sirve para tener una vista previa de como se veria con ciertas modificaciones.

Al darle un click izquierdo, se desplegara este panel de opciones:
<img src="/img/Styles6.png" />

Las opciones van desde desactivar algunas cosas, que el mouse al pasar cerca de ese bloque pestañee, etc.

## .cls
<img src="/img/Styles7.png" />
Este pequeño boton sirve para desabilitar/habilitar clases en un bloque, asi tenemos un control de errores mas eficiente y experimentar sobre los llamados que se hacen en esa linea.

Por ejemplo; click izquierdo en el panel principal para elegir un bloque de codigo y luego presionar el boton **".cls."**, aparecera un panel de opciones multiples para verificar las clases que se estan llamando y que ocurriria si las quitamos.

<img src="/img/Styles8.png" />

Puede desmarcar esas opciones de la pagina de su preferencia para experimentar.

## New Style Rule
<img src="/img/Style10.png" />

Aqui se puede experimentar colocando estilos con **css** dando un click derecho en la fila de codigo de nuestra preferencia.

## Toggle common rendering emulations
<img src="/img/Styles9.png" />
En esta opcion solo sirve para ver como se veria con modo nocturno o el modo normal de la pagina, modo nocturno cambia la pagina a colores oscuros.

Al presionar click izquierdo en el icono se puede ver un menu con las opciones para el color ce la pagina como vera en este ejemplo:
<img src="/img/Styles10.png" />

## Show computed styles sidebar

<img src="/img/Styles11.png" />
Es una pestaña que muestra los valores finales de todos los estilos CSS aplicados a un elemento, después de que:

- Se aplican todas las reglas de CSS.

- Se resuelven los conflictos (especificidad, herencia, etc.).

- Se aplican valores por defecto del navegador.

### ¿Para qué sirve?
✅ 1. Ver estilos aplicados realmente
A veces un elemento parece tener font-size: 14px en tu archivo CSS, pero el panel "Computed" muestra que en realidad es 16px. Esto te ayuda a detectar:

Overrides (sobrescrituras)

Estilos heredados

Valores calculados

✅ 2. Ver de dónde viene cada estilo
Cuando haces clic en un estilo dentro de "Computed", te muestra en qué archivo y línea fue definido.

Ejemplo: margin-top: 16px ← viene de custom.css: line 25.

✅ 3. Diagnosticar problemas visuales
Te ayuda a entender:

¿Por qué un botón se ve tan grande?

¿Por qué hay espacio entre dos elementos?

¿Cuál es el padding/margin real aplicado?

<img src="/img/Styles12.png" />
























