---
sidebar_position: 1
---

¿Para qué sirve el panel "Computed" en "Elementos"?
El panel "Computed" muestra los valores finales y exactos de las propiedades CSS que se aplican a un elemento del DOM. Esto incluye todos los estilos aplicados desde:

CSS de tu proyecto (.css, .module.css, etc.)

Estilos heredados

Estilos por defecto del navegador

Estilos sobreescritos por reglas más específicas

Este se encuentra en la parte inferior al costado de **"Styles"**

<img src="/img/Computed1.png" />

## ¿Por qué es útil?
A diferencia del panel "Styles", que te muestra todas las reglas aplicadas (aunque estén anuladas o duplicadas), el panel "Computed" te muestra solo el resultado final que el navegador interpreta.

## Casos de uso comunes
1. 🔍 Ver el valor real aplicado
Ejemplo: Aunque en tu CSS pones font-size: 1rem, el panel "Computed" te dirá que eso equivale a 16px.

2. 🛠 Saber qué estilo está causando un cambio
Si ves que un div tiene un margen o un color inesperado, en "Computed" puedes hacer clic en ese valor (por ejemplo margin-top: 24px) y te dirá de dónde viene, con link al archivo.

3. 📦 Ver el modelo de caja visual (Box Model)
Al final del panel "Computed" verás un diagrama con:

Contenido

Padding

Border

Margin

Muy útil para entender por qué un componente se ve como se ve.

🔧 Ejemplo visual
Supongamos que inspeccionás un botón. En el panel "Computed" podrías ver:


Copiar
Editar
color: #ffffff
font-size: 16px
padding: 12px 20px
margin-top: 8px
background-color: rgb(0, 123, 255)

<img src="/img/Computed2.png" />