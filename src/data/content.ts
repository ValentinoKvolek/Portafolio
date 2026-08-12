export const profile = {
  name: "Valentino Franco Kvolek",
  handle: "vfk",
  host: "portfolio",
  role: "Backend & Data Engineer",
  subrole: "Estudiante de Lic. en Informática (UNLP)",
  location: "La Plata, Buenos Aires, Argentina",
  bio: [
    "Backend & Data Engineer especializado en diseño de bases de datos, optimización en",
    "SQL Server y automatización de procesos críticos,",
    "trabajando actualmente en Dycos para empresas como Securitas Argentina, Uruguay,",
    "Colombia y Estados Unidos, Videojet y Diagnóstico y Soluciones.",
    "",
    "Mi rol va más allá de tareas puntuales: trabajo con un enfoque de ingeniero de",
    "software end-to-end, muchas veces arrancando desde cero con el usuario — reuniones",
    "para relevar requerimientos, análisis del problema y una solución dentro de plazos",
    "ajustados. Dentro del ecosistema Softland Logic esto se traduce en optimización de",
    "stored procedures, debugging de flujos complejos, trazabilidad de stock, análisis de",
    "logs, integración entre módulos y mantenimiento del Diccionario de Datos. También",
    "gestiono entornos remotos, VPNs corporativas, accesos e infraestructura de",
    "testing/desarrollo.",
    "",
    "Desde mi ingreso, he liderado la modernización de procesos migrando scripts legados",
    "(VBScript) a soluciones robustas en Python con IA integrada. Esto no solo redujo",
    "costos de operación y tiempos de ejecución, sino que liberó a los usuarios de tareas",
    "manuales e iterativas, transformando flujos complejos en procesos automatizados \"sin",
    "fricción\". A su vez, esta centralización de información permitió generar datos de",
    "alto valor estratégico para la toma de decisiones de las empresas.",
    "",
    "Estoy enfocado en el desarrollo y la resolución de problemas en el sector",
    "empresarial, con una mirada orientada a lo económico, donde el tiempo es un recurso",
    "crítico y cada solución tiene impacto directo en el negocio.",
    "",
    "Mi objetivo profesional es avanzar hacia Seguridad Informática, Redes y Arquitecturas",
    "de Sistemas, combinando la experiencia práctica en entornos corporativos con mi",
    "formación académica en la UNLP.",
  ],
};

export const experience = [
  {
    id: "dycos",
    role: "Backend & Data Engineer",
    org: "Dycos",
    period: "Actualidad",
    duration: "en curso",
    location: "Remoto",
    bullets: [
      "Análisis y desarrollo de procesos críticos del ERP Softland Logic",
      "Optimización de stored procedures y debugging de flujos complejos",
      "Trazabilidad de stock, análisis de logs e integración entre módulos",
      "Mantenimiento del Diccionario de Datos",
      "Gestión de entornos remotos, VPNs corporativas y accesos",
      "Infraestructura de testing/desarrollo y autenticación integrada",
      "Modernización de procesos: migración de scripts legados (VBScript) a Python con IA integrada",
    ],
  },
  {
    id: "freelance",
    role: "Desarrollador Web Freelance",
    org: "Freelance",
    period: "2024 – actualidad",
    duration: "en curso",
    location: "Remoto",
    bullets: [
      "Desarrollo y despliegue de sitios web con React, Next.js, Vite y GSAP, aplicando buenas prácticas de programación",
      "Adaptación a nuevas tecnologías según cada proyecto, usando skills de IA y entrenando modelos propios para seguir la identidad de marca de cada cliente y diseñar a partir de esa base, buscando siempre crear una app única",
      "Aguada Escondida — sitio de astroturismo (aguadaescondida.com.ar)",
      "Corredor Meseta Sur — sitio de turismo de ruta (corredormesetasur.com.ar)",
      "Meseta de Somuncurá — guía de viaje interactiva (en desarrollo)",
    ],
  },
  {
    id: "fifa",
    role: "Soporte Técnico IT",
    org: "FIFA — Copa Mundial Sub-20 2023",
    period: "ene. 2023 – nov. 2023",
    duration: "11 meses",
    location: "La Plata, Buenos Aires · Presencial",
    bullets: [
      "Aseguré la operatividad de los sistemas tecnológicos del evento",
      "Análisis de performance y resolución de incidencias en tiempo real",
      "Validación de integraciones entre sistemas vía pruebas de API",
      "Coordinación con equipos técnicos internacionales bajo alta presión",
    ],
  },
  {
    id: "playas-doradas",
    role: "Soporte y Gestión de Sistemas IT",
    org: "Oficina de Turismo – Playas Doradas (Municipalidad de Sierra Grande)",
    period: "dic. 2022 – feb. 2023",
    duration: "3 meses",
    location: "Presencial",
    bullets: [
      "Administración de sistemas de registro y consulta",
      "Optimización de flujos de información y soporte técnico",
      "Mantenimiento de redes, configuración de equipos y reparación de PCs",
    ],
  },
  {
    id: "rivadavia",
    role: "Técnico en Reparación y Seguridad de Sistemas",
    org: "Municipalidad de Rivadavia",
    period: "abr. 2021 – dic. 2022",
    duration: "1 año 9 meses",
    location: "América, Buenos Aires · Presencial",
    bullets: [
      "Soporte técnico y mantenimiento de sistemas administrativos (ERP municipal)",
      "Consultas SQL para control de datos y detección de inconsistencias",
      "Integración y validación de módulos nuevos",
      "Documentación de incidencias, reportes y propuestas de mejora",
    ],
  },
];

export const education = [
  {
    school: "Facultad de Informática — Universidad Nacional de La Plata",
    degree: "Licenciatura en Informática (Computational Science)",
    period: "2023 – 2027",
  },
  {
    school: "Inglés — Saint Francis English College",
    degree: "Nivel B2",
    period: "2024 – actualidad",
  },
];

export const projects = [
  {
    id: "aguada-escondida",
    dir: "aguada-escondida/",
    name: "Aguada Escondida",
    desc: "Astroturismo en la Meseta de Somuncurá, Patagonia. Cielos Bortle 1, naturaleza y silencio profundo.",
    stack: ["React", "Next.js"],
    link: "https://aguadaescondida.com.ar",
    linkLabel: "aguadaescondida.com.ar",
    status: "live",
    story: {
      problem: [
        "Aguada Escondida es un emprendimiento de astroturismo en plena Meseta de Somuncurá, uno de los cielos más oscuros del país (Bortle 1), pero no tenía presencia online: sin sitio, dependían del boca en boca y de redes sociales para que la gente supiera que existían y confiara en reservar una estadía a horas de la ciudad más cercana.",
        "El desafío no era solo mostrar información, sino transmitir algo difícil de poner en palabras: la sensación de silencio y oscuridad absoluta que hace único al lugar, y generar la confianza necesaria para que alguien reserve sin haber estado nunca ahí.",
      ],
      process: [
        "Arranqué el proyecto desde cero con el usuario: reuniones para entender qué querían comunicar, qué los diferenciaba de otras propuestas de turismo rural y qué información necesitaba ver un visitante antes de decidirse a viajar.",
        "Construí el sitio con React y Next.js, priorizando fotografía de cielo nocturno y una narrativa simple centrada en la experiencia (el silencio, la oscuridad, la naturaleza) antes que en una lista fría de servicios, con un flujo de contacto directo para consultas y reservas.",
      ],
      outcome: [
        "El sitio está en producción en aguadaescondida.com.ar y hoy es el canal principal por el que la gente descubre el emprendimiento y hace la primera consulta antes de reservar.",
      ],
    },
  },
  {
    id: "corredor-meseta-sur",
    dir: "corredor-meseta-sur/",
    name: "Corredor Meseta Sur",
    desc: "179km que unen la costa atlántica con la meseta de Somuncurá, Río Negro. El cielo más oscuro de Argentina.",
    stack: ["React", "Next.js"],
    link: "https://corredormesetasur.com.ar",
    linkLabel: "corredormesetasur.com.ar",
    status: "live",
    story: {
      problem: [
        "Corredor Meseta Sur es una ruta turística de 179km que conecta la costa atlántica rionegrina con la meseta de Somuncurá, pensada para poner en el mapa a varias localidades chicas que individualmente no tienen la escala para atraer turismo por su cuenta.",
        "El problema era de coordinación tanto como de diseño: había que representar un recorrido de varios días y varios pueblos distintos en un solo sitio, sin que se sintiera como una lista desordenada de lugares sueltos.",
      ],
      process: [
        "Trabajé el sitio como una extensión natural de lo aprendido en Aguada Escondida, pero resolviendo un problema distinto: en vez de un único destino, había que guiar al visitante a través de un corredor, con información clara de distancias, paradas y qué esperar en cada tramo.",
        "Usé React y Next.js para armar una estructura de recorrido navegable, con foco en fotografía del cielo nocturno de la zona (uno de los más oscuros de Argentina) como hilo conductor visual entre las distintas paradas del corredor.",
      ],
      outcome: [
        "El sitio está en producción en corredormesetasur.com.ar, dándole a la iniciativa turística una presencia unificada que antes no existía.",
      ],
    },
  },
  {
    id: "meseta-de-somuncura",
    dir: "meseta-de-somuncura/",
    name: "Meseta de Somuncurá — Guía",
    desc: "Guía de viaje interactiva de la región: 16 lugares reales, cada uno con su propio artículo sobre geología, ecología y acceso.",
    stack: ["React", "Vite", "GSAP"],
    link: null,
    linkLabel: "repo privado",
    status: "dev",
    story: {
      problem: [
        "Después de Aguada Escondida y Corredor Meseta Sur quedaba un vacío: no había una guía centralizada de la región completa, con información seria (geología, ecología, cómo llegar) de cada lugar puntual dentro de la meseta.",
      ],
      process: [
        "Este proyecto lo estoy armando con React, Vite y GSAP para poder trabajar animaciones y transiciones más ricas que en los sitios anteriores, ya que acá la navegación entre 16 lugares distintos necesita sentirse fluida, casi como explorar un mapa interactivo en vez de leer una lista de artículos.",
        "Cada lugar tiene su propio artículo con datos reales de geología, ecología y acceso, así que buena parte del trabajo es también de investigación y curaduría de contenido, no solo de código.",
      ],
      outcome: [
        "Todavía en desarrollo — es un repo privado por ahora. La idea es que termine siendo la guía de referencia de la región, conectando los otros dos proyectos en un solo lugar.",
      ],
    },
  },
  {
    id: "dycos-skills",
    dir: "dycos-skills/",
    name: "dycos-skills",
    desc: "Skill de Claude AI que contextualiza al asistente para soporte técnico sobre Softland ERP y SQL Server en Dycos.",
    stack: ["Claude AI", "SQL Server"],
    link: "https://github.com/ValentinoKvolek/dycos-skills",
    linkLabel: "github.com/ValentinoKvolek/dycos-skills",
    status: "live",
    story: {
      problem: [
        "En Dycos, gran parte del soporte técnico sobre Softland Logic (el ERP que usamos con clientes como Securitas y Videojet) depende de conocimiento acumulado a mano: estructura de stored procedures, particularidades del Diccionario de Datos, flujos típicos de debugging. Ese conocimiento vive en la cabeza del equipo y es lento de transmitir a un asistente de IA genérico cada vez que se necesita ayuda.",
      ],
      process: [
        "Armé una skill de Claude AI que empaqueta ese contexto específico de Softland ERP y SQL Server, para que el asistente entienda de entrada la estructura del sistema, los patrones de stored procedures que usamos y cómo encarar el debugging de flujos complejos, en vez de arrancar cada consulta desde cero.",
        "El foco estuvo en que la skill fuera reutilizable por todo el equipo, no solo por mí, así que documenté bien los casos de uso y probé que respondiera de forma consistente ante los problemas típicos que aparecen en el día a día.",
      ],
      outcome: [
        "Está en uso activo como herramienta interna de soporte, reduciendo el tiempo que toma diagnosticar problemas recurrentes en el ERP.",
      ],
    },
  },
  {
    id: "interactive-map-unlp",
    dir: "interactive-map-unlp/",
    name: "InteractiveMapUnlp",
    desc: "Web app para seguir el plan de estudios de la carrera de la manera correcta.",
    stack: ["React", "Vite"],
    link: "https://github.com/ValentinoKvolek/InteractiveMapUnlp",
    linkLabel: "github.com/ValentinoKvolek/InteractiveMapUnlp",
    status: "live",
    story: {
      problem: [
        "El plan de estudios de Informática en la UNLP tiene correlatividades entre materias que no siempre son fáciles de visualizar solo mirando la resolución oficial en PDF. Como estudiante, terminaba perdiendo tiempo tratando de entender qué materias me habilitaban a cursar cuáles otras.",
      ],
      process: [
        "Construí una web app con React y Vite que representa el plan de estudios completo como un mapa interactivo, donde se pueden ver de un vistazo las correlatividades reales entre materias en vez de tener que cruzar esa información manualmente.",
      ],
      outcome: [
        "Es una herramienta que uso yo mismo y que quedó pública en GitHub para que otros estudiantes de la carrera la puedan usar también.",
      ],
    },
  },
  {
    id: "rustaceo-libre",
    dir: "rustaceo-libre/",
    name: "RustaceoLibre",
    desc: "Marketplace descentralizado estilo MercadoLibre, contratos inteligentes en Ink!. Proyecto final del seminario de Rust (equipo de 4).",
    stack: ["Rust", "Ink!"],
    link: "https://github.com/frentuka/RustaceoLibre",
    linkLabel: "github.com/frentuka/RustaceoLibre",
    status: "live",
    story: {
      problem: [
        "Como proyecto final del seminario de Rust en la facultad, el desafío en equipo (4 personas) era construir algo con peso real: un marketplace estilo MercadoLibre pero descentralizado, corriendo la lógica de publicaciones, compras y reputación en contratos inteligentes en vez de un backend tradicional.",
      ],
      process: [
        "Trabajamos con Rust e Ink! para escribir los contratos inteligentes, lo que implicó pensar el modelo de datos y las reglas de negocio (publicación de productos, flujo de compra, manejo de fondos) de una forma mucho más estricta que en un desarrollo web convencional, dado que los errores en un contrato inteligente son mucho más costosos de corregir después.",
        "Al ser un trabajo de equipo de 4, también fue un ejercicio de coordinación: dividir el sistema en módulos claros y acordar interfaces entre las partes que cada uno desarrollaba.",
      ],
      outcome: [
        "Entregamos el proyecto completo y funcional como cierre del seminario, con el código disponible públicamente en GitHub.",
      ],
    },
  },
];

export const skills = {
  "ai / data": [
    "Machine Learning (Algoritmos y Fundamentos Matemáticos)",
    "LLMs (Claude, GPT, Gemini)",
    "Custom AI Skills / Agents",
    "Prompt Engineering & Automation",
    "Data Warehousing & Pipelines de Datos",
    "Modelado y Migración de Bases de Datos",
  ],
  backend: ["SQL", "Python", "C", "Pascal", "Rust", "Java", ".NET"],
  "frontend / web": ["React", "Next.js", "Vite", "GSAP"],
  "devops / tools": [
    "Linux",
    "Git / GitHub",
    "Infraestructura de Testing / Dev",
    "Redes Corporativas & VPNs",
    "Autenticación Integrada & Seguridad",
    "Liderazgo Técnico",
  ],
};

export const contact = {
  email: "valenkvolek@gmail.com",
  github: "https://github.com/ValentinoKvolek",
  githubLabel: "github.com/ValentinoKvolek",
  linkedin: "https://www.linkedin.com/in/valenfranco/",
  linkedinLabel: "linkedin.com/in/valenfranco",
};
