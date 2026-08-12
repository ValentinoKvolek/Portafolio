# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dos audiencias con el mismo peso:

- **Reclutadores / empresas** evaluando a Valentino para un puesto full-time de Backend & Data Engineer (SQL Server, automatización de procesos, ecosistema ERP Softland Logic).
- **Clientes freelance** evaluando si contratarlo para desarrollo de sitios web (React / Next.js / Vite / GSAP), a partir de proyectos reales ya entregados (Aguada Escondida, Corredor Meseta Sur).

Ambos llegan al mismo sitio de una sola página (scroll único) y deben poder identificar rápido cuál de las dos facetas les interesa.

## Product Purpose

Portfolio personal de una sola página que funciona como carta de presentación profesional: mostrar experiencia real, stack técnico y proyectos entregados para generar contacto — ya sea una entrevista laboral o un encargo freelance. Éxito = que el visitante llegue a la sección de contacto y escriba.

## Positioning

Combinación poco común: ingeniería backend/datos en un ERP corporativo real (Softland Logic, SQL Server, VPNs y accesos corporativos) **+** modernización activa de procesos legados con IA (migración de VBScript a Python con IA integrada) **+** desarrollo web freelance con sitios en producción. No es "estudiante con portfolio de práctica": tiene impacto medible en empresas reales (Securitas Argentina/Uruguay/Colombia/EE.UU., Videojet, Diagnóstico y Soluciones) y sitios freelance ya en vivo.

## Operating Context

- Sitio de una sola página (Next.js/React), scroll continuo por secciones: Hero (whoami), About, Experience (`ls -la experience/`), Projects, Skills, Contact.
- Estética de terminal Linux (no estilo macOS): prompt `vfk@portfolio:~$`, comandos simulados, tipografía monoespaciada, paleta verde sobre negro.
- Se consume principalmente en desktop (recruiters/clientes revisando portfolios) pero debe sostenerse en mobile.
- Todo el contenido sale de `src/data/content.ts`; no hay CMS ni backend propio.

## Capabilities and Constraints

- Next.js 16 (Turbopack) + React 19 + Tailwind v4, sin backend propio — sitio estático de contenido.
- Contenido actualmente 100% en español. Inglés queda como hueco explícitamente pendiente: el usuario tiene nivel B2 certificado (Saint Francis English College) y quiere abrir a audiencia internacional a futuro, pero no está decidido cómo (¿toggle de idioma? ¿página separada?) ni priorizado todavía.
- Componente `ProfileCard` (tarjeta de perfil con foto) es una librería de terceros adaptada (ReactBits) — su paleta ya fue ajustada al verde de la terminal para no romper el tema.

## Brand Commitments

- Estética de terminal **Linux real**, explícitamente no macOS-style: sin traffic lights redondeados tipo Mac, sin gradientes/glassmorphism genérico.
- Contenido siempre real y verificable: empresas, roles, fechas y links de proyectos reales — nada de relleno ni logos/testimonios inventados.
- Nombre completo "Valentino Franco Kvolek", handle `vfk`.

## Evidence on Hand

- Experiencia laboral real con fechas, duración y ubicación: Dycos (actual), Freelance (2024–actualidad), FIFA Copa Mundial Sub-20 2023, Municipalidad de Sierra Grande, Municipalidad de Rivadavia.
- Educación real: Lic. en Informática (UNLP, 2023–2027), Inglés B2 (Saint Francis English College, 2024–actualidad).
- Proyectos reales con links: aguadaescondida.com.ar (live), corredormesetasur.com.ar (live), Meseta de Somuncurá (en desarrollo, repo privado), dycos-skills (GitHub), InteractiveMapUnlp (GitHub), RustaceoLibre (GitHub, trabajo en equipo de 4).
- Contacto real: email, GitHub, LinkedIn (`src/data/content.ts`).
- No hay testimonios de clientes ni métricas de negocio (conversiones, ahorro en $) documentadas todavía — no inventar cifras si se piden en trabajo futuro.

## Product Principles

1. Cada dato mostrado tiene que ser verificable (empresa real, fecha real, link real) — el sitio vende credibilidad, no relleno.
2. Una sola narrativa, dos lecturas: el mismo scroll debe leerse como "quiero contratarlo full-time" y como "quiero encargarle un sitio", sin secciones separadas que fragmenten la identidad.
3. La estética de terminal es parte del mensaje (orden, precisión técnica, dominio de herramientas de bajo nivel) — no es decoración, reforzarla en vez de diluirla.
4. Priorizar densidad de información legible por sobre relleno visual: es un portfolio técnico, no una landing de marketing genérica.

## Accessibility & Inclusion

Sin requerimiento específico confirmado todavía.
