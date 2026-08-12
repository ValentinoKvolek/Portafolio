---
name: vfk@portfolio
description: Portfolio de terminal Linux (Arch, no macOS) para Valentino Kvolek — Backend & Data Engineer y desarrollador freelance.
colors:
  bg: "#0b0e0f"
  bg-raised: "#101416"
  bg-titlebar: "#161b1d"
  border: "#262d2f"
  fg: "#c9d1cf"
  fg-dim: "#6b7776"
  fg-bright: "#eef2f0"
  green: "#4fd67a"
  green-bright: "#8affb0"
  amber: "#e8b464"
  red: "#e06c75"
  blue: "#61afef"
  cyan: "#56c2c0"
typography:
  display:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "clamp(1.5rem, 4vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  body:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 400
    letterSpacing: "0.05em"
rounded:
  none: "0px"
  sm: "2px"
  md: "8px"
  card: "30px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
components:
  button-contact:
    backgroundColor: "rgba(255,255,255,0.1)"
    textColor: "rgba(255,255,255,0.9)"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  tag:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    rounded: "{rounded.none}"
    padding: "2px 8px"
  tag-hover:
    textColor: "{colors.green-bright}"
  badge-live:
    backgroundColor: "transparent"
    textColor: "{colors.green}"
    rounded: "{rounded.none}"
    padding: "2px 6px"
  badge-wip:
    backgroundColor: "transparent"
    textColor: "{colors.amber}"
    rounded: "{rounded.none}"
    padding: "2px 6px"
  nav-tab:
    backgroundColor: "transparent"
    textColor: "{colors.fg-dim}"
    rounded: "{rounded.none}"
    padding: "4px 8px"
  nav-tab-hover:
    backgroundColor: "{colors.green}"
    textColor: "{colors.bg}"
    rounded: "{rounded.none}"
    padding: "4px 8px"
---

# Design System: vfk@portfolio

## Overview

**Creative North Star: "La Consola CRT Verde"**

Este sistema simula un monitor CRT viejo corriendo una sesión real de Arch Linux (`vfk@archlinux:~/portfolio — zsh`): fósforo verde sobre negro casi puro, scanlines sutiles que titilan, tipografía monoespaciada de punta a punta. No es una "terminal" genérica de stock — es específicamente Linux, con su propio prompt, su propio shell interactivo y su propia jerga (`ls`, `cat`, `whoami`). Es explícitamente **anti-macOS**: nada de traffic-lights redondeados, glassmorphism, gradientes decorativos o sombras suaves difusas. Cada sección de la página se presenta como si el visitante estuviera leyendo el output de un comando real tipeado en esa sesión.

La interacción es precisa y utilitaria: los elementos están quietos y planos en reposo, y solo "se encienden" en verde al hover/focus — como un prompt que empieza a parpadear cuando lo tocás. El único lugar con volumen físico real (esquinas redondeadas, sombra) es el `ShellPrompt`, la terminal interactiva embebida: es una excepción deliberada, la ventana-dentro-de-la-ventana, no una inconsistencia.

**Key Characteristics:**
- Negro casi puro (#0b0e0f) con un único acento vivo: verde fósforo.
- 100% monoespaciado (JetBrains Mono), sin tipografía secundaria.
- Ángulo recto por defecto (0px radius) en absolutamente todo excepto dos excepciones nombradas.
- Cero sombra por defecto; la profundidad se transmite por capas tonales (bg → bg-raised → bg-titlebar), no por `box-shadow`.
- Cada sección arranca con un prompt simulado (`vfk@portfolio:cwd$ comando`) — es la firma estructural del sitio.

## Colors

Paleta de terminal clásica: negro casi puro como lienzo, un solo acento que manda (verde fósforo), y los colores ANSI clásicos (rojo, azul, cian, ámbar) reservados para metadatos puntuales, nunca para superficies grandes.

### Primary
- **Phosphor Green** (`#4fd67a`): el acento único del sitio. Prompt (`vfk@`), bordes en hover, links de contacto, estado "live" de proyectos, cursor parpadeante. Aparece solo en texto/bordes finos, nunca como fondo grande.
- **Phosphor Green Bright** (`#8affb0`): estado más intenso del verde — hover sobre el rol/degree ya en foco, texto de la tarjeta de perfil, hover sobre skills y links.

### Neutral
- **Void Black** (`#0b0e0f`): fondo base de toda la página (`body`).
- **Raised Panel** (`#101416`): fondo de superficies "elevadas" por tono — tarjetas de proyecto, el cuerpo del `ShellPrompt`. No hay sombra; el contraste tonal ES la elevación.
- **Titlebar Charcoal** (`#161b1d`): fondo de las barras de chrome fijas (TitleBar arriba, StatusBar abajo, header del ShellPrompt) — el nivel más "de sistema operativo" del stack tonal.
- **Ash Border** (`#262d2f`): todos los bordes en reposo (cards, chips, divisores de barra).
- **Terminal Grey** (`#c9d1cf`): color de texto de cuerpo por defecto.
- **Dim Grey** (`#6b7776`): texto secundario/metadata — fechas, ubicaciones, descripciones, placeholders de la barra de estado.
- **Phosphor White** (`#eef2f0`): texto de máximo contraste — nombre en el Hero, título de proyecto, comando tipeado por el usuario.

### Secondary (acentos ANSI puntuales)
- **Amber Alert** (`#e8b464`): categorías de skills en mayúscula, indicador de estado "online" en la StatusBar, estado "wip" de un proyecto, comandos de ejemplo en el shell interactivo.
- **Terminal Red** (`#e06c75`): exclusivamente el botón de cerrar simulado (`×`) del chrome de ventana — nunca error real de formulario (no hay formularios).
- **Terminal Blue** (`#61afef`): rutas de directorio (`~/portfolio`, `dir/` de cada proyecto).
- **Terminal Cyan** (`#56c2c0`): el hostname (`portfolio`) en cada prompt simulado.

### Named Rules
**The Dormant Terminal Rule.** Todo elemento interactivo empieza plano y sin color de acento en reposo; el verde se "enciende" recién en hover/focus. El verde nunca cubre una superficie grande — su rareza es lo que lo hace leíble como señal.

## Typography

**Body / Display / Label Font:** JetBrains Mono (con fallback `ui-monospace, monospace`)

**Character:** Una sola familia monoespaciada para absolutamente todo — no hay pairing. La jerarquía se construye con tamaño, peso y color, nunca cambiando de tipografía. Sensación: consola real, no una "temática" de terminal aplicada sobre una tipografía humanista.

### Hierarchy
- **Display** (700, `clamp(1.5rem, 4vw, 2.25rem)`, line-height 1.1): el nombre en el Hero (`Valentino Franco Kvolek`) — el único momento de tipografía grande del sitio.
- **Body** (400, 14px, line-height 1.625): todo el copy — bio, bullets de experiencia, descripciones de proyecto.
- **Label** (400, 11px, letter-spacing 0.05em, uppercase cuando aplica): categorías de skills (`[ai / data]`), badges de estado (`live`/`wip`), metadata de la StatusBar.

### Named Rules
**The One Voice Rule.** Ninguna sección usa una tipografía distinta a JetBrains Mono, ni siquiera para números o iconografía — todo pasa por el mismo glifo monoespaciado, reforzando que el sitio ES una terminal, no una página que imita una.

## Layout

Página de una sola columna, contenida en `max-w-3xl` (768px) centrado, con `px-4 sm:px-6`. El chrome de "ventana de sistema operativo" está fijo y fuera del flujo: `TitleBar` (36px, arriba) y `StatusBar` (32px, abajo) enmarcan todo el scroll, por lo que el contenido lleva `pt-16 pb-16` para no quedar tapado.

Cada sección es un bloque `CommandLine` (prompt + resultado) con `mb-12` (48px) de separación entre secciones y `scroll-mt-16` para que el anclaje `#id` no quede tapado por el TitleBar fijo. Dentro de una sección, grids de 2 columnas en `sm:` y arriba (`sm:grid-cols-2`) para proyectos y skills; en mobile todo cae a una columna.

Responsive: el único quiebre real es `sm:` (640px) — por debajo de eso, la StatusBar oculta el reloj/hostname y prioriza los tabs de navegación; la ProfileCard se centra (`mx-auto`) en vez de anclarse a la derecha del Hero.

## Elevation & Depth

Sistema mayormente **plano por capas tonales**: la sensación de profundidad viene de apilar tres negros progresivamente más claros (`bg` → `bg-raised` → `bg-titlebar`), no de `box-shadow`. No hay sombras ambientales decorativas en ningún componente estándar.

**Una excepción deliberada:** el `ShellPrompt` (terminal interactiva embebida) lleva `shadow-lg shadow-black/40` y `rounded-sm` (2px) — es el único componente con volumen físico real, porque es literalmente una ventana dentro de la ventana del sitio. Confirmado como firma intencional, no como inconsistencia a corregir.

### Shadow Vocabulary
- **Shell window** (`box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.4)`): exclusivo del contenedor del `ShellPrompt`, para que se lea como una ventana de terminal real flotando sobre la página.

### Named Rules
**The Flat-By-Default Rule.** Toda superficie es plana en reposo. La única sombra del sistema vive en un solo componente con motivo explícito (ventana de terminal real); ningún componente nuevo debería sumar una segunda.

## Shapes

Ángulo recto por defecto: `border-radius: 0` en cards, chips, badges, inputs y bordes de sección. El sitio evita deliberadamente cualquier curva que recuerde a UI tipo macOS/glassmorphism.

**Dos excepciones nombradas, y solo dos:**
1. **ShellPrompt** (`rounded-sm`, 2px): ventana de terminal interactiva.
2. **ProfileCard** (componente de terceros adaptado, `--card-radius: 30px`, y `8px` en el botón de contacto interno): la tarjeta de perfil con foto es la única superficie "orgánica" del sitio — su paleta ya fue reconducida al verde de la terminal, pero su geometría redondeada se mantiene porque es una pieza claramente diferenciada (foto + glow), no un componente de UI estándar del sistema.

### Named Rules
**The Right Angle Rule.** Todo nuevo componente nace con `rounded: 0` salvo que sea, explícitamente, uno de los dos casos de excepción de arriba. No agregar una tercera excepción sin decisión consciente.

## Components

Cada componente se siente como una herramienta de línea de comandos: sin adorno, borde nítido en reposo, respuesta de color inmediata (no animada más allá de `transition-colors`) al hover.

### Buttons
- **Shape:** recto (0px), salvo el botón de contacto de la ProfileCard (8px, excepción heredada de ese componente).
- **Primary (CTA de contacto en ProfileCard):** fondo `rgba(255,255,255,0.1)` con blur, texto blanco 90%, borde `rgba(255,255,255,0.1)`, padding `12px 16px`.
- **Hover/Focus:** borde sube a `rgba(255,255,255,0.4)` + `translateY(-1px)`.
- **Nav tabs (StatusBar):** texto `fg-dim` en reposo; hover invierte a fondo verde sólido + texto negro (`bg`) — el único lugar del sitio donde el verde cubre una superficie completa, porque es el estado activo de navegación.

### Tags / Chips (skills, stack de proyecto)
- **Style:** transparente, borde `border` (1px), texto `fg` o `cyan` según contexto, sin radius.
- **State:** hover invierte borde y texto a verde (`border-green`, `text-green-bright`) — `transition-colors`, sin easing personalizado.

### Status Badges (live / wip)
- **Style:** transparente con borde de color, texto del mismo color, `10px`, padding `2px 6px`, sin radius.
- **Variantes:** `live` = verde; `wip` = ámbar. No hay una tercera variante — cualquier estado nuevo debe mapear a uno de estos dos o justificar un tercer color ANSI.

### Cards / Containers (proyectos)
- **Corner Style:** recto (0px).
- **Background:** `bg-raised` sobre `bg` — el contraste tonal es la única señal de "tarjeta".
- **Shadow Strategy:** ninguna (ver Elevation).
- **Border:** `border` en reposo, `border-green/60` en hover.
- **Internal Padding:** 16px (`p-4`).

### Navigation (TitleBar / StatusBar)
- Chrome fijo, tipografía `label`, altura fija (36px / 32px), fondo `bg-titlebar`, borde `border` en el lado que enfrenta el contenido. Sin estado "activo" resaltado más allá del hover de los tabs de sección.

### Command Line Header (componente de firma)
Cada sección de contenido (`About`, `Experience`, `Projects`, `Skills`, `Contact`) se abre con la misma línea de prompt simulado: `vfk@portfolio:cwd$ comando` (color: verde/dim/cian/dim/azul/dim/blanco brillante, en ese orden exacto de segmentos), seguida del "output" del comando como contenido de la sección. Esta estructura es el signature pattern del sitio — reforzarla en cualquier sección nueva, nunca reemplazarla por un `<h2>` genérico.

### ProfileCard (componente de terceros adaptado)
Tarjeta de perfil con foto, tilt 3D e info de usuario superpuesta (avatar, handle, status, botón de contacto). Es la única superficie del sitio con degradados y esquinas muy redondeadas (30px) — deliberadamente diferenciada como "la foto", no como parte del lenguaje de UI del sistema. Su gradiente de texto (nombre/título) fue reconducido de violeta/azul original al verde de la terminal (`#eef2f0` → `#4fd67a` para el nombre, `#eef2f0` → `#8affb0` para el título) para no romper la identidad de marca.

## Do's and Don'ts

### Do:
- **Do** mantener todo en JetBrains Mono — cero tipografías secundarias, ni siquiera para números o labels.
- **Do** abrir cada sección nueva con un prompt simulado `vfk@portfolio:cwd$ comando` (The Command Line Header pattern).
- **Do** dejar todo en reposo plano/sin color de acento y encender el verde solo en hover/focus (The Dormant Terminal Rule).
- **Do** usar `rounded: 0` por defecto en cualquier componente nuevo (The Right Angle Rule); las únicas excepciones vigentes son el ShellPrompt y la ProfileCard.
- **Do** respaldar todo dato mostrado con un hecho verificable (empresa, fecha, link real) — coherente con el Product Principle #1 de PRODUCT.md.

### Don't:
- **Don't** introducir esquinas redondeadas, gradientes decorativos, glassmorphism o sombras ambientales fuera de las dos excepciones nombradas — es un rechazo de marca explícito a la estética macOS-style.
- **Don't** dejar que el verde cubra una superficie grande en reposo; su escasez es lo que lo hace leíble como señal de interacción.
- **Don't** sumar una segunda familia tipográfica o un peso "display" fuera de JetBrains Mono.
- **Don't** inventar testimonios, logos de clientes o métricas de negocio — PRODUCT.md confirma que no existen todavía.
- **Don't** reemplazar el patrón de prompt simulado por un encabezado (`<h2>`) genérico en secciones nuevas.
