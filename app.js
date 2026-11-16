/**
 * ============================================================================
 * CONFIGURACIÓN PRINCIPAL (FÁCIL DE PERSONALIZAR)
 * ============================================================================
 *
 * 1. URL de tu Web App de Google Apps Script (termina en /exec).
 */
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzHUVltgukfS14AbQnUunNqL1JAehqx2GcimKR5dwqvTAoCJohdr7RLanWt5u2EMA7q9A/exec";

/**
 * 2. Clave de almacenamiento local (localStorage) para el autoguardado.
 */
const STORAGE_KEY = "quiz_persona_especial_v1";

/**
 * ============================================================================
 * BANCO DE SECCIONES Y PREGUNTAS EDITABLES
 * ============================================================================
 * Tipos de pregunta soportados (`type`):
 * - "chips-text"   : Botones de selección múltiple (chips) + campo de texto libre.
 * - "color-picker" : Selector visual de colores + campo libre.
 * - "versus"       : Botones grandes tipo tarjeta ("Esto o aquello") + nota opcional.
 * - "textarea"     : Pregunta abierta corta con sugerencias de inspiración.
 * - "multi-fields" : Varios campos cortos en una misma tarjeta (ej. fechas y tallas).
 */
const QUIZ_CONFIG = {
  welcome: {
    title: "Hola, persona especial ✨",
    subtitle:
      "Hice este pequeño juego interactivo para conocer mejor tus gustos, tus planes favoritos y todos esos detalles que te hacen sonreír."
  },
  final: {
    title: "¡Gracias por compartir tu mundo conmigo! 💖",
    message:
      "Cada detalle que respondiste vale oro para mí. Prometo usarlo para consentirte, sorprenderte y crear momentos inolvidables."
  },
  sections: [
    { id: "gustos", number: 1, title: "Tus Gustos", shortTitle: "1. Gustos" },
    { id: "disgustos", number: 2, title: "Lo que NO te gusta", shortTitle: "2. No me gusta" },
    { id: "planes", number: 3, title: "Planes Ideales", shortTitle: "3. Planes" },
    { id: "versus", number: 4, title: "Esto o Aquello", shortTitle: "4. Esto o Aquello" },
    { id: "molestias", number: 5, title: "Qué te incomoda", shortTitle: "5. Límites" },
    { id: "abiertas", number: 6, title: "De Corazón", shortTitle: "6. Abiertas" },
    { id: "fechas", number: 7, title: "Fechas y Tallas", shortTitle: "7. Fechas y Tallas" }
  ],
  questions: [
    // ========================================================================
    // SECCIÓN 1: GUSTOS
    // ========================================================================
    {
      id: "nombre_apodo",
      sectionId: "gustos",
      emoji: "💬",
      title: "¿Cómo te gusta que te digan?",
      subtitle: "Tu nombre, tu apodo o como prefieras. Así sé que eres tú. 😊",
      type: "multi-fields",
      fields: [
        {
          key: "nombre",
          label: "✨ Tu nombre o apodo",
          placeholder: "Ej: Ana, Anita, Reina..."
        }
      ]
    },
    {
      id: "gustos_comida",
      sectionId: "gustos",
      emoji: "🍝",
      title: "¿Cuál es tu comida favorita?",
      subtitle: "Elige todas las que te encanten o escribe ese platillo que te hace feliz al instante.",
      type: "chips-text",
      options: [
        "🍣 Sushi / Asiática",
        "🍕 Pizza artesanal",
        "🍝 Pasta italiana",
        "🌮 Tacos / Mexicana",
        "🍔 Hamburguesas",
        "🥩 Cortes de carne",
        "🦐 Mariscos / Ceviche",
        "🥗 Bowls y algo fresco",
        "🍰 Postres y pan dulce"
      ],
      placeholder: "Ej: Amo los tacos al pastor, el ramen picante y el tiramisú..."
    },
    {
      id: "gustos_bebida",
      sectionId: "gustos",
      emoji: "🍷",
      title: "¿Qué bebidas disfrutas más?",
      subtitle: "Para saber qué pedirte o llevarte de sorpresa en cualquier momento del día.",
      type: "chips-text",
      options: [
        "☕ Café helado / Latte",
        "🍵 Matcha / Chai",
        "🍷 Vino tinto",
        "🥂 Vino blanco / Rosado",
        "🍸 Coctelería dulce / Gin",
        "🧋 Frappé / Boba tea",
        "🍋 Limonada / Agua fresca",
        "🍺 Cerveza artesanal",
        "🍫 Chocolate caliente"
      ],
      placeholder: "Ej: Latte con leche de almendras y poca azúcar, o un tinto verano..."
    },
    {
      id: "gustos_musica",
      sectionId: "gustos",
      emoji: "🎶",
      title: "¿Qué música o artistas nunca faltan en tu playlist?",
      subtitle: "Para poner el soundtrack perfecto cuando vayamos en el auto o cenemos juntos.",
      type: "chips-text",
      options: [
        "🎤 Pop en inglés / español",
        "🎸 Indie / Alternativo",
        "💃 Reggaetón / Urbano",
        "🎷 R&B / Soul",
        "🌹 Baladas / Románticas",
        "🎸 Rock clásico",
        "🎹 Acústico / Lo-Fi",
        "🤠 Regional / Mexicana",
        "🪩 Electrónica / House"
      ],
      placeholder: "Cuéntame tus artistas, bandas o canciones favoritas del momento..."
    },
    {
      id: "gustos_pelis_series",
      sectionId: "gustos",
      emoji: "🍿",
      title: "¿Qué películas o series te atrapan?",
      subtitle: "Para nuestras próximas noches de sillón, manta y palomitas.",
      type: "chips-text",
      options: [
        "💕 Comedias románticas",
        "🕵️‍♀️ Thriller / Misterio",
        "😂 Comedia para reír mucho",
        "🎭 Drama / Basadas en hechos reales",
        "🚀 Ciencia ficción / Fantasía",
        "👻 Terror / Suspenso",
        "🎨 Animación / Studio Ghibli",
        "🔎 Documentales / True Crime",
        "🇰🇷 K-Dramas"
      ],
      placeholder: "Ej: Mi película favorita de toda la vida o la serie que quiero ver..."
    },
    {
      id: "gustos_color",
      sectionId: "gustos",
      emoji: "🎨",
      title: "¿Cuáles son tus colores favoritos?",
      subtitle: "Tanto para vestir como para flores, accesorios o detalles.",
      type: "color-picker",
      swatches: [
        { name: "Vino / Borgoña", hex: "#6B1D2F" },
        { name: "Rosa palo", hex: "#E8B4B8" },
        { name: "Negro elegante", hex: "#1E1A1D" },
        { name: "Blanco / Crema", hex: "#F7EFEA" },
        { name: "Dorado / Champagne", hex: "#C89D54" },
        { name: "Verde oliva / Salvia", hex: "#7A8F77" },
        { name: "Azul cielo / Marino", hex: "#385A7C" },
        { name: "Lila / Lavanda", hex: "#B69TC8".replace("T", "5") },
        { name: "Rojo intenso", hex: "#A82028" },
        { name: "Tonos tierra / Beige", hex: "#C5A88F" }
      ],
      placeholder: "¿Algún tono en especial que ames cómo te queda?"
    },
    {
      id: "gustos_flores",
      sectionId: "gustos",
      emoji: "🌷",
      title: "¿Cuáles son tus flores favoritas?",
      subtitle: "Porque las flores bonitas nunca necesitan un pretexto especial.",
      type: "chips-text",
      options: [
        "🌷 Tulipanes",
        "🌹 Rosas (rojas, rosas o blancas)",
        "🌻 Girasoles",
        "🌸 Peonías",
        "🌼 Margaritas / Gerberas",
        "💐 Lilies / Lirios",
        "🪻 Lavanda / Silvestres",
        "🪴 Orquídeas o plantitas en maceta"
      ],
      placeholder: "Ej: Me encantan las peonías rosadas o los ramos minimalistas..."
    },
    {
      id: "gustos_regalos",
      sectionId: "gustos",
      emoji: "🎁",
      title: "¿Qué tipo de regalos o detalles amas recibir?",
      subtitle: "Desde el detalle más pequeño hasta algo que llevas tiempo queriendo.",
      type: "chips-text",
      options: [
        "💌 Cartas escritas a mano",
        "✨ Joyería delicada (oro / plata)",
        "🌸 Perfumes / Aromas ricos",
        "👜 Bolsos / Accesorios",
        "💆‍♀️ Día de spa / Masaje",
        "📚 Libros especiales",
        "🍫 Mis dulces o snacks favoritos",
        "🎟️ Experiencias / Conciertos / Viajes",
        "🧴 Skincare / Maquillaje"
      ],
      placeholder: "¿Prefieres joyería dorada o plateada? ¿Algún antojo o wishlist?"
    },

    // ========================================================================
    // SECCIÓN 2: COSAS QUE NO LE GUSTAN
    // ========================================================================
    {
      id: "no_comidas",
      sectionId: "disgustos",
      emoji: "🙅‍♀️",
      title: "¿Qué comidas o ingredientes NO te gustan nada?",
      subtitle: "Súper importante para nunca pedirlo por error (incluye alergias o intolerancias).",
      type: "chips-text",
      options: [
        "🌿 Cilantro / Perejil",
        "🧅 Cebolla cruda",
        "🌶️ Comida muy picante",
        "🫒 Aceitunas",
        "🍄 Champiñones / Hongos",
        "🐟 Mariscos / Pescado",
        "🧀 Quesos muy fuertes",
        "🥛 Lácteos (intolerancia)",
        "🍍 Piña en la comida salada"
      ],
      placeholder: "Escribe cualquier ingrediente que prefieras evitar o alergias..."
    },
    {
      id: "no_olores",
      sectionId: "disgustos",
      emoji: "👃",
      title: "¿Qué olores o aromas no soportas?",
      subtitle: "En perfumes, velas, ambientes o comidas.",
      type: "chips-text",
      options: [
        "🚬 Humo de cigarro",
        "🍬 Perfumes excesivamente dulces",
        "🌲 Aromas muy maderosos / fuertes",
        "🥥 Olor a coco artificial",
        "🧼 Aromas químicos / incienso fuerte",
        "🧄 Olor a comida frita o ajo"
      ],
      placeholder: "¿Qué aromas te marean o prefieres evitar por completo?"
    },
    {
      id: "no_actitudes",
      sectionId: "disgustos",
      emoji: "⚡",
      title: "¿Qué actitudes te desencantan de inmediato?",
      subtitle: "Cosas que te quitan las ganas o te hacen sentir incómoda.",
      type: "chips-text",
      options: [
        "🙄 Falta de interés o frialdad",
        "📱 Estar pegado al celular al hablar",
        "🗣️ Que hablen mal de todo el mundo",
        "🤥 Mentiras (aunque sean pequeñas)",
        "😤 Grosería con meseros o demás personas",
        "🧊 Que no cumplan lo que prometen"
      ],
      placeholder: "Si quieres agregar algo más, este espacio es todo tuyo..."
    },
    {
      id: "no_regalos",
      sectionId: "disgustos",
      emoji: "🧸",
      title: "¿Qué regalos preferirías NO recibir?",
      subtitle: "Se vale decirlo con toda confianza para siempre acertar.",
      type: "chips-text",
      options: [
        "🧸 Peluches gigantes",
        "🍫 Chocolates con licor o amargos",
        "💐 Flores artificiales",
        "👕 Ropa sin estar segura de mi estilo",
        "🏠 Artículos de cocina / hogar",
        "🎈 Globos o cosas muy llamativas en público"
      ],
      placeholder: "Ej: Prefiero cosas discretas antes que sorpresas con mucha gente..."
    },

    // ========================================================================
    // SECCIÓN 3: PLANES IDEALES
    // ========================================================================
    {
      id: "planes_cena_o_tranqui",
      sectionId: "planes",
      emoji: "🕯️",
      title: "¿Cómo se ve tu cita ideal: cena romántica o plan tranquilo?",
      subtitle: "Elige los ambientes que más disfrutas compartir.",
      type: "chips-text",
      options: [
        "🍷 Cena elegante a la luz de las velas",
        "🌅 Picnic viendo el atardecer",
        "👩‍🍳 Cocinar juntos con música y vino",
        "☕ Cafetería bonita y caminar sin prisa",
        "🍸 Rooftop o terraza con buena vista",
        "🎬 Noche de pelis y pedir comida rica"
      ],
      placeholder: "Descríbeme tu cita soñada de principio a fin..."
    },
    {
      id: "planes_viajes",
      sectionId: "planes",
      emoji: "✈️",
      title: "¿Cuál es tu estilo favorito al viajar?",
      subtitle: "Cuando hacemos maletas, ¿qué es lo que más disfrutas?",
      type: "chips-text",
      options: [
        "🏖️ Resort o playa para desconectar total",
        "🏛️ Pueblitos mágicos con encanto",
        "🌆 Ciudades grandes, museos y compras",
        "🍷 Ruta del vino / viñedos",
        "🌲 Cabaña en el bosque con chimenea",
        "🚗 Roadtrip con buena música y paradas espontáneas"
      ],
      placeholder: "¿Eres de itinerario planeado o de fluir sobre la marcha?"
    },
    {
      id: "planes_finde",
      sectionId: "planes",
      emoji: "🥐",
      title: "¿Cómo sería tu fin de semana perfecto?",
      subtitle: "Imagina un sábado y domingo sin pendientes.",
      type: "chips-text",
      options: [
        "🥞 Despertar tarde y salir a un brunch rico",
        "🛍️ Tarde de paseo, compras y helado",
        "🧖‍♀️ Día de descanso, mascarillas y mimos",
        "🎶 Salir a bailar o a un concierto en la noche",
        "🏞️ Escapada de fin de semana fuera de la ciudad",
        "🛌 Quedarnos en cama platicando horas"
      ],
      placeholder: "Cuéntame qué no puede faltar en tu domingo ideal..."
    },
    {
      id: "planes_lugares_sonados",
      sectionId: "planes",
      emoji: "🌍",
      title: "¿Qué lugares sueñas con conocer algún día?",
      subtitle: "Ciudades, países, playas o incluso ese restaurante de la ciudad que tienes en la mira.",
      type: "chips-text",
      options: [
        "🗼 París / Francia",
        "🍝 Italia (Roma, Toscana, Costa Amalfitana)",
        "🌸 Japón",
        "🏛️ Grecia (Santorini)",
        "🗽 Nueva York",
        "🌌 Ver auroras boreales",
        "🏖️ Caribe / Tulum / Los Cabos",
        "🍷 Madrid / Barcelona"
      ],
      placeholder: "Anota aquí tu bucket list de destinos o lugares locales por visitar..."
    },

    // ========================================================================
    // SECCIÓN 4: ESTO O AQUELLO (TARJETAS GRANDES)
    // ========================================================================
    {
      id: "vs_playa_montana",
      sectionId: "versus",
      emoji: "🧭",
      title: "Esto o aquello: ¿Playa o Montaña?",
      subtitle: "Toca la tarjeta que más te llame hoy.",
      type: "versus",
      optionA: {
        emoji: "🏖️",
        label: "Playa",
        desc: "Sol, mar, brisa cálida y arena suave"
      },
      optionB: {
        emoji: "🏔️",
        label: "Montaña",
        desc: "Clima fresco, bosque, cabaña y neblina"
      },
      allowBoth: "✨ Ambos me encantan según la temporada"
    },
    {
      id: "vs_cafe_te",
      sectionId: "versus",
      emoji: "☕",
      title: "Esto o aquello: ¿Café o Té?",
      subtitle: "Tu compañero ideal para empezar la mañana o platicar por la tarde.",
      type: "versus",
      optionA: {
        emoji: "☕",
        label: "Café",
        desc: "El aroma del café recién hecho, caliente o frío"
      },
      optionB: {
        emoji: "🍵",
        label: "Té / Tisanas",
        desc: "Matcha, chai, tisanas frutales o té relajante"
      },
      allowBoth: "✨ Disfruto ambos dependiendo del antojo"
    },
    {
      id: "vs_salir_casa",
      sectionId: "versus",
      emoji: "🌙",
      title: "Esto o aquello: ¿Salir o Quedarse en casa?",
      subtitle: "Viernes por la noche, ¿qué plan te conquista más?",
      type: "versus",
      optionA: {
        emoji: "🥂",
        label: "Salir",
        desc: "Arreglarnos bonito, ir a cenar o tomar un drink"
      },
      optionB: {
        emoji: "🛋️",
        label: "Quedarse en casa",
        desc: "Ropa cómoda, pedir algo rico y abrazarnos"
      },
      allowBoth: "✨ Un equilibrio 50/50 entre los dos"
    },
    {
      id: "vs_dulce_salado",
      sectionId: "versus",
      emoji: "🥨",
      title: "Esto o aquello: ¿Dulce o Salado?",
      subtitle: "Cuando te da un antojo a media tarde o noche...",
      type: "versus",
      optionA: {
        emoji: "🍓",
        label: "Team Dulce",
        desc: "Chocolates, postres, helado o panecito recién horneado"
      },
      optionB: {
        emoji: "🧀",
        label: "Team Salado",
        desc: "Papas, tabla de quesos, botanas con limón o picante"
      },
      allowBoth: "✨ Primero algo salado y luego el postrecito"
    },
    {
      id: "vs_aventura_descanso",
      sectionId: "versus",
      emoji: "🌿",
      title: "Esto o aquello: ¿Aventura o Descanso?",
      subtitle: "¿Qué te recarga más la energía?",
      type: "versus",
      optionA: {
        emoji: "🎢",
        label: "Aventura",
        desc: "Explorar lugares nuevos, actividades y adrenalina"
      },
      optionB: {
        emoji: "🧖‍♀️",
        label: "Descanso",
        desc: "Paz absoluta, alberca, spa y cero prisas"
      },
      allowBoth: "✨ Un poquito de aventura y luego buen descanso"
    },
    {
      id: "vs_mensajes_llamadas",
      sectionId: "versus",
      emoji: "💌",
      title: "Esto o aquello: ¿Mensajes o Llamadas?",
      subtitle: "Cuando no estamos juntos durante el día...",
      type: "versus",
      optionA: {
        emoji: "💬",
        label: "Mensajes y audios",
        desc: "Textear durante el día, mandar fotos y notas de voz"
      },
      optionB: {
        emoji: "📞",
        label: "Llamadas",
        desc: "Escuchar nuestra voz y platicar cómo nos fue"
      },
      allowBoth: "✨ Mensajitos en el día y llamada en la noche"
    },

    // ========================================================================
    // SECCIÓN 5: QUÉ LE MOLESTA O INCOMODA
    // ========================================================================
    {
      id: "molestias_general",
      sectionId: "molestias",
      emoji: "🕊️",
      title: "¿Qué cosas te molestan o te incomodan?",
      subtitle: "Quiero cuidarte también en esto: elige lo que prefieres evitar.",
      type: "chips-text",
      options: [
        "⏰ La impuntualidad o que me hagan esperar mucho",
        "🔊 El ruido excesivo o lugares demasiado llenos",
        "🤨 Los celos o actitudes posesivas",
        "🗓️ Que me cambien los planes a última hora",
        "🥶 Que me dejen en visto o desaparezcan sin avisar",
        "🗣️ Que me alcen la voz o hablen con sarcasmo pesado",
        "🍽️ Que me presionen cuando tengo hambre o sueño"
      ],
      placeholder: "Cuéntame con confianza qué más te incomoda o cómo te gusta resolver un malentendido..."
    },

    // ========================================================================
    // SECCIÓN 6: PREGUNTAS ABIERTAS CORTAS
    // ========================================================================
    {
      id: "abierta_siempre_quiso",
      sectionId: "abiertas",
      emoji: "🌠",
      title: "Algo que siempre has querido hacer...",
      subtitle: "Puede ser un sueño grande, una experiencia curiosa o un plan sencillo que aún no has tachado de tu lista.",
      type: "textarea",
      suggestions: [
        "Volar en globo aerostático",
        "Tomar una clase de cerámica o cocina",
        "Ver el amanecer en la playa",
        "Ir a un concierto en primera fila"
      ],
      placeholder: "Escribe aquí eso que te haría mucha ilusión vivir..."
    },
    {
      id: "abierta_sentir_cuidada",
      sectionId: "abiertas",
      emoji: "🤍",
      title: "¿Qué te hace sentir cuidada y valorada?",
      subtitle: "Esos gestos cotidianos o palabras que hacen que tu corazón se sienta en paz.",
      type: "textarea",
      suggestions: [
        "Que me escuchen con atención y recuerden pequeños detalles",
        "Un abrazo largo sin que tenga que pedirlo",
        "Que me avisen que llegaron bien y me incluyan en sus planes",
        "Sentir que mi tranquilidad es importante"
      ],
      placeholder: "Ej: Cuando se acuerdan de algo que mencioné hace días, o cuando..."
    },
    {
      id: "abierta_detalle_inolvidable",
      sectionId: "abiertas",
      emoji: "✨",
      title: "Un detalle que nunca olvidarías...",
      subtitle: "No tiene que ser algo material; ¿qué gesto te derretiría por completo?",
      type: "textarea",
      suggestions: [
        "Una sorpresa planeada de principio a fin sin que yo tenga que preocuparme por nada",
        "Una carta sincera acompañada de mis flores favoritas",
        "Que me lleven mi comida favorita en un día pesado"
      ],
      placeholder: "Cuéntame ese detalle que guardarías siempre en la memoria..."
    },

    // ========================================================================
    // SECCIÓN 7: FECHAS IMPORTANTES Y TALLAS (OPCIONAL)
    // ========================================================================
    {
      id: "fechas_y_tallas",
      sectionId: "fechas",
      emoji: "🗓️",
      title: "Fechas importantes y tallas (secreto seguro 🤫)",
      subtitle: "Totalmente opcional, pero súper útil para nunca fallar al consentirte.",
      type: "multi-fields",
      fields: [
        {
          key: "cumpleanos",
          label: "🎂 Tu fecha de cumpleaños",
          placeholder: "Ej: 14 de mayo"
        },
        {
          key: "fechas_especiales",
          label: "💫 Otra fecha especial que te guste celebrar",
          placeholder: "Ej: Mi santo, aniversario o día favorito..."
        },
        {
          key: "talla_ropa",
          label: "👗 Talla de blusa / vestido / ropa",
          placeholder: "Ej: S / M o talla 26"
        },
        {
          key: "talla_calzado",
          label: "👠 Talla de calzado",
          placeholder: "Ej: 24 MX / 7 US"
        },
        {
          key: "medida_anillo_joyeria",
          label: "💍 Talla de anillo o metal favorito (oro/plata)",
          placeholder: "Ej: Anillo 6, prefiero dorado..."
        },
        {
          key: "extra_nota",
          label: "💌 ¿Algo más que quieras que sepa de ti?",
          placeholder: "Cualquier gusto, secreto o mensaje final...",
          fullWidth: true
        }
      ]
    }
  ]
};

/**
 * ============================================================================
 * ESTADO DE LA APLICACIÓN Y PERSISTENCIA (localStorage)
 * ============================================================================
 */
const state = {
  currentStep: 0,
  answers: {}, // Mapa { [questionId]: { selected: [], text: "", fields: {} } }
  startedAt: null,
  submitted: false
};

// Referencias del DOM
const dom = {
  quizHeader: document.getElementById("quizHeader"),
  sectionBadge: document.getElementById("sectionBadge"),
  saveIndicator: document.getElementById("saveIndicator"),
  saveIndicatorText: document.getElementById("saveIndicatorText"),
  stepCounter: document.getElementById("stepCounter"),
  progressBarContainer: document.getElementById("progressBarContainer"),
  progressFill: document.getElementById("progressFill"),
  sectionPills: document.getElementById("sectionPills"),

  welcomeScreen: document.getElementById("welcomeScreen"),
  welcomeTitle: document.getElementById("welcomeTitle"),
  welcomeSubtitle: document.getElementById("welcomeSubtitle"),
  startQuizBtn: document.getElementById("startQuizBtn"),
  resumeQuizBtn: document.getElementById("resumeQuizBtn"),
  resetSavedBtn: document.getElementById("resetSavedBtn"),

  questionScreen: document.getElementById("questionScreen"),
  questionAnimator: document.getElementById("questionAnimator"),
  questionEmoji: document.getElementById("questionEmoji"),
  questionCategory: document.getElementById("questionCategory"),
  questionTitle: document.getElementById("questionTitle"),
  questionSubtitle: document.getElementById("questionSubtitle"),
  questionBody: document.getElementById("questionBody"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),
  skipBtn: document.getElementById("skipBtn"),

  finalScreen: document.getElementById("finalScreen"),
  finalTitle: document.getElementById("finalTitle"),
  finalMessage: document.getElementById("finalMessage"),
  submissionLoading: document.getElementById("submissionLoading"),
  submissionSuccess: document.getElementById("submissionSuccess"),
  submissionError: document.getElementById("submissionError"),
  submissionErrorTitle: document.getElementById("submissionErrorTitle"),
  submissionErrorDesc: document.getElementById("submissionErrorDesc"),
  retrySubmitBtn: document.getElementById("retrySubmitBtn"),
  copySummaryBtn: document.getElementById("copySummaryBtn"),
  answeredCountBadge: document.getElementById("answeredCountBadge"),
  summaryList: document.getElementById("summaryList"),
  editAnswersBtn: document.getElementById("editAnswersBtn")
};

/**
 * Inicializa la aplicación al cargar el DOM
 */
function initApp() {
  // Textos configurables de bienvenida y despedida
  dom.welcomeTitle.textContent = QUIZ_CONFIG.welcome.title;
  dom.welcomeSubtitle.textContent = QUIZ_CONFIG.welcome.subtitle;
  dom.finalTitle.textContent = QUIZ_CONFIG.final.title;
  dom.finalMessage.textContent = QUIZ_CONFIG.final.message;

  loadStateFromStorage();
  renderSectionPills();
  bindEvents();

  showWelcomeScreen();
}

/**
 * Carga progreso guardado desde localStorage
 */
function loadStateFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") {
      state.answers = parsed.answers || {};
      state.currentStep =
        typeof parsed.currentStep === "number"
          ? Math.min(Math.max(0, parsed.currentStep), QUIZ_CONFIG.questions.length - 1)
          : 0;
      state.startedAt = parsed.startedAt || new Date().toISOString();
    }
  } catch (err) {
    console.warn("No se pudo leer localStorage:", err);
  }
}

/**
 * Guarda progreso automáticamente en localStorage y muestra confirmación sutil
 */
let saveTimeout = null;
function saveStateToStorage() {
  try {
    if (!state.startedAt) {
      state.startedAt = new Date().toISOString();
    }
    const payload = {
      currentStep: state.currentStep,
      answers: state.answers,
      startedAt: state.startedAt,
      updatedAt: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));

    // Indicador visual de autoguardado
    if (dom.saveIndicator && dom.saveIndicatorText) {
      dom.saveIndicator.classList.add("saving");
      dom.saveIndicatorText.textContent = "Guardando...";
      clearTimeout(saveTimeout);
      saveTimeout = setTimeout(() => {
        dom.saveIndicator.classList.remove("saving");
        dom.saveIndicatorText.textContent = "Guardado ✓";
      }, 450);
    }
  } catch (err) {
    console.warn("No se pudo guardar en localStorage:", err);
  }
}

/**
 * Obtiene o inicializa la respuesta de una pregunta específica
 */
function getAnswerObj(questionId) {
  if (!state.answers[questionId]) {
    state.answers[questionId] = {
      selected: [],
      text: "",
      fields: {}
    };
  }
  return state.answers[questionId];
}

/**
 * Verifica si una pregunta tiene alguna respuesta escrita o seleccionada
 */
function isQuestionAnswered(questionId) {
  const ans = state.answers[questionId];
  if (!ans) return false;
  const hasSelected = Array.isArray(ans.selected) && ans.selected.length > 0;
  const hasText = typeof ans.text === "string" && ans.text.trim().length > 0;
  const hasFields =
    ans.fields &&
    Object.values(ans.fields).some((val) => typeof val === "string" && val.trim().length > 0);
  return hasSelected || hasText || hasFields;
}

/**
 * Cuenta cuántas preguntas tienen respuesta en total
 */
function countAnsweredQuestions() {
  return QUIZ_CONFIG.questions.filter((q) => isQuestionAnswered(q.id)).length;
}

/**
 * Muestra únicamente la pantalla solicitada ('welcome' | 'question' | 'final')
 */
function showScreen(screenName) {
  dom.welcomeScreen.classList.toggle("hidden", screenName !== "welcome");
  dom.questionScreen.classList.toggle("hidden", screenName !== "question");
  dom.finalScreen.classList.toggle("hidden", screenName !== "final");

  dom.quizHeader.classList.toggle("hidden", screenName !== "question");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/**
 * Configura la pantalla de bienvenida (mostrando botón de continuar si hay progreso previo)
 */
function showWelcomeScreen() {
  const answeredCount = countAnsweredQuestions();
  const hasProgress = answeredCount > 0 || state.currentStep > 0;

  if (hasProgress) {
    dom.resumeQuizBtn.classList.remove("hidden");
    dom.resumeQuizBtn.textContent = `Continuar donde me quedé (Paso ${state.currentStep + 1} de ${QUIZ_CONFIG.questions.length})`;
    dom.startQuizBtn.textContent = "Ver desde la primera pregunta ✨";
    dom.resetSavedBtn.classList.remove("hidden");
  } else {
    dom.resumeQuizBtn.classList.add("hidden");
    dom.startQuizBtn.textContent = "Empezar ✨";
    dom.resetSavedBtn.classList.add("hidden");
  }

  showScreen("welcome");
}

/**
 * Renderiza las píldoras de navegación por sección en la cabecera
 */
function renderSectionPills() {
  dom.sectionPills.innerHTML = "";
  QUIZ_CONFIG.sections.forEach((sec) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "section-pill";
    btn.dataset.sectionId = sec.id;
    btn.textContent = sec.shortTitle;
    btn.addEventListener("click", () => {
      const firstIndex = QUIZ_CONFIG.questions.findIndex((q) => q.sectionId === sec.id);
      if (firstIndex !== -1) {
        const direction = firstIndex >= state.currentStep ? "forward" : "backward";
        state.currentStep = firstIndex;
        saveStateToStorage();
        renderCurrentQuestion(direction);
      }
    });
    dom.sectionPills.appendChild(btn);
  });
}

/**
 * Actualiza la cabecera superior (barra de progreso, sección actual, contador)
 */
function updateHeaderProgress() {
  const total = QUIZ_CONFIG.questions.length;
  const currentIndex = state.currentStep;
  const question = QUIZ_CONFIG.questions[currentIndex];
  const section = QUIZ_CONFIG.sections.find((s) => s.id === question.sectionId);

  const percent = Math.round(((currentIndex + 1) / total) * 100);
  dom.sectionBadge.textContent = section ? `Sección ${section.number} · ${section.title}` : "Cuestionario";
  dom.stepCounter.textContent = `${currentIndex + 1} / ${total}`;
  dom.progressFill.style.width = `${percent}%`;
  dom.progressBarContainer.setAttribute("aria-valuenow", String(percent));

  // Actualizar estado de las píldoras de sección
  const pillButtons = dom.sectionPills.querySelectorAll(".section-pill");
  pillButtons.forEach((pill) => {
    const secId = pill.dataset.sectionId;
    const isActive = secId === question.sectionId;
    const secQuestions = QUIZ_CONFIG.questions.filter((q) => q.sectionId === secId);
    const anyAnswered = secQuestions.some((q) => isQuestionAnswered(q.id));

    pill.classList.toggle("active", isActive);
    pill.classList.toggle("completed", !isActive && anyAnswered);

    if (isActive) {
      pill.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  });
}

/**
 * Renderiza la pregunta activa con animación suave de transición
 */
function renderCurrentQuestion(direction = "forward") {
  showScreen("question");
  updateHeaderProgress();

  const question = QUIZ_CONFIG.questions[state.currentStep];
  const section = QUIZ_CONFIG.sections.find((s) => s.id === question.sectionId);
  const answer = getAnswerObj(question.id);

  // Reiniciar animación direccional
  dom.questionAnimator.classList.remove("anim-forward", "anim-backward");
  void dom.questionAnimator.offsetWidth; // reflow para reiniciar keyframes
  dom.questionAnimator.classList.add(direction === "backward" ? "anim-backward" : "anim-forward");

  // Textos de la pregunta
  dom.questionEmoji.textContent = question.emoji || "✨";
  dom.questionCategory.textContent = section ? `${section.number}. ${section.title}` : "";
  dom.questionTitle.textContent = question.title;
  dom.questionSubtitle.textContent = question.subtitle || "";

  // Limpiar cuerpo y construir según tipo
  dom.questionBody.innerHTML = "";

  if (question.type === "chips-text") {
    renderChipsTextQuestion(question, answer);
  } else if (question.type === "color-picker") {
    renderColorPickerQuestion(question, answer);
  } else if (question.type === "versus") {
    renderVersusQuestion(question, answer);
  } else if (question.type === "textarea") {
    renderTextareaQuestion(question, answer);
  } else if (question.type === "multi-fields") {
    renderMultiFieldsQuestion(question, answer);
  }

  // Estado de botones Atrás / Siguiente
  dom.prevBtn.style.visibility = state.currentStep === 0 ? "hidden" : "visible";
  const isLastStep = state.currentStep === QUIZ_CONFIG.questions.length - 1;
  dom.nextBtn.textContent = isLastStep ? "Finalizar y enviar ✨" : "Siguiente →";
}

/**
 * 1. Renderizador: Chips de opción múltiple + campo de texto libre
 */
function renderChipsTextQuestion(question, answer) {
  const chipsContainer = document.createElement("div");
  chipsContainer.className = "chips-grid";
  chipsContainer.setAttribute("role", "group");
  chipsContainer.setAttribute("aria-label", question.title);

  question.options.forEach((optText) => {
    const isSelected = answer.selected.includes(optText);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `chip-btn${isSelected ? " selected" : ""}`;
    btn.setAttribute("aria-pressed", String(isSelected));
    btn.innerHTML = `<span>${optText}</span>`;

    btn.addEventListener("click", () => {
      const idx = answer.selected.indexOf(optText);
      if (idx > -1) {
        answer.selected.splice(idx, 1);
        btn.classList.remove("selected");
        btn.setAttribute("aria-pressed", "false");
      } else {
        answer.selected.push(optText);
        btn.classList.add("selected");
        btn.setAttribute("aria-pressed", "true");
      }
      saveStateToStorage();
    });

    chipsContainer.appendChild(btn);
  });

  dom.questionBody.appendChild(chipsContainer);

  // Campo libre complementario
  const fieldGroup = document.createElement("div");
  fieldGroup.className = "field-group";

  const label = document.createElement("label");
  label.className = "field-label";
  label.htmlFor = `input_${question.id}`;
  label.textContent = "¿Quieres agregar algún detalle o especificar los tuyos? (opcional)";

  const textarea = document.createElement("textarea");
  textarea.id = `input_${question.id}`;
  textarea.className = "textarea-input";
  textarea.rows = 3;
  textarea.placeholder = question.placeholder || "Escribe aquí con total libertad...";
  textarea.value = answer.text || "";

  textarea.addEventListener("input", (e) => {
    answer.text = e.target.value;
    saveStateToStorage();
  });

  fieldGroup.appendChild(label);
  fieldGroup.appendChild(textarea);
  dom.questionBody.appendChild(fieldGroup);
}

/**
 * 2. Renderizador: Selector visual de colores + campo libre
 */
function renderColorPickerQuestion(question, answer) {
  const swatchGrid = document.createElement("div");
  swatchGrid.className = "color-swatches";
  swatchGrid.setAttribute("role", "group");
  swatchGrid.setAttribute("aria-label", question.title);

  question.swatches.forEach((swatch) => {
    const isSelected = answer.selected.includes(swatch.name);
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `swatch-btn${isSelected ? " selected" : ""}`;
    btn.setAttribute("aria-pressed", String(isSelected));

    const dot = document.createElement("span");
    dot.className = "swatch-dot";
    dot.style.backgroundColor = swatch.hex;

    const text = document.createElement("span");
    text.textContent = swatch.name;

    btn.appendChild(dot);
    btn.appendChild(text);

    btn.addEventListener("click", () => {
      const idx = answer.selected.indexOf(swatch.name);
      if (idx > -1) {
        answer.selected.splice(idx, 1);
        btn.classList.remove("selected");
        btn.setAttribute("aria-pressed", "false");
      } else {
        answer.selected.push(swatch.name);
        btn.classList.add("selected");
        btn.setAttribute("aria-pressed", "true");
      }
      saveStateToStorage();
    });

    swatchGrid.appendChild(btn);
  });

  dom.questionBody.appendChild(swatchGrid);

  const fieldGroup = document.createElement("div");
  fieldGroup.className = "field-group";

  const label = document.createElement("label");
  label.className = "field-label";
  label.htmlFor = `input_${question.id}`;
  label.textContent = "Algún otro color o combinación que te encante (opcional)";

  const input = document.createElement("input");
  input.type = "text";
  input.id = `input_${question.id}`;
  input.className = "text-input";
  input.placeholder = question.placeholder || "Ej: Verde esmeralda, palo de rosa...";
  input.value = answer.text || "";

  input.addEventListener("input", (e) => {
    answer.text = e.target.value;
    saveStateToStorage();
  });

  fieldGroup.appendChild(label);
  fieldGroup.appendChild(input);
  dom.questionBody.appendChild(fieldGroup);
}

/**
 * 3. Renderizador: Botones grandes tipo tarjeta "Esto o Aquello" (Versus)
 */
function renderVersusQuestion(question, answer) {
  const grid = document.createElement("div");
  grid.className = "versus-grid";
  grid.setAttribute("role", "radiogroup");
  grid.setAttribute("aria-label", question.title);

  const currentChoice = answer.selected[0] || "";

  const createCard = (opt) => {
    const card = document.createElement("button");
    card.type = "button";
    const isSelected = currentChoice === opt.label;
    card.className = `versus-card${isSelected ? " selected" : ""}`;
    card.setAttribute("aria-pressed", String(isSelected));

    card.innerHTML = `
      <span class="versus-emoji" aria-hidden="true">${opt.emoji}</span>
      <span class="versus-label">${opt.label}</span>
      <span class="versus-desc">${opt.desc}</span>
    `;

    card.addEventListener("click", () => {
      answer.selected = [opt.label];
      saveStateToStorage();
      updateSelectionUI();
    });

    return card;
  };

  const cardA = createCard(question.optionA);
  const cardB = createCard(question.optionB);
  grid.appendChild(cardA);
  grid.appendChild(cardB);

  let bothBtn = null;
  if (question.allowBoth) {
    bothBtn = document.createElement("button");
    bothBtn.type = "button";
    const isBoth = currentChoice === question.allowBoth;
    bothBtn.className = `versus-both-btn${isBoth ? " selected" : ""}`;
    bothBtn.setAttribute("aria-pressed", String(isBoth));
    bothBtn.textContent = question.allowBoth;

    bothBtn.addEventListener("click", () => {
      answer.selected = [question.allowBoth];
      saveStateToStorage();
      updateSelectionUI();
    });

    grid.appendChild(bothBtn);
  }

  function updateSelectionUI() {
    const choice = answer.selected[0] || "";
    cardA.classList.toggle("selected", choice === question.optionA.label);
    cardA.setAttribute("aria-pressed", String(choice === question.optionA.label));

    cardB.classList.toggle("selected", choice === question.optionB.label);
    cardB.setAttribute("aria-pressed", String(choice === question.optionB.label));

    if (bothBtn) {
      bothBtn.classList.toggle("selected", choice === question.allowBoth);
      bothBtn.setAttribute("aria-pressed", String(choice === question.allowBoth));
    }
  }

  dom.questionBody.appendChild(grid);

  // Nota rápida opcional
  const fieldGroup = document.createElement("div");
  fieldGroup.className = "field-group";

  const label = document.createElement("label");
  label.className = "field-label";
  label.htmlFor = `input_${question.id}`;
  label.textContent = "¿Algún matiz o comentario sobre tu elección? (opcional)";

  const input = document.createElement("input");
  input.type = "text";
  input.id = `input_${question.id}`;
  input.className = "text-input";
  input.placeholder = "Ej: Me gusta la playa pero que no haga tantísimo calor...";
  input.value = answer.text || "";

  input.addEventListener("input", (e) => {
    answer.text = e.target.value;
    saveStateToStorage();
  });

  fieldGroup.appendChild(label);
  fieldGroup.appendChild(input);
  dom.questionBody.appendChild(fieldGroup);
}

/**
 * 4. Renderizador: Preguntas abiertas cortas con chips de inspiración
 */
function renderTextareaQuestion(question, answer) {
  if (Array.isArray(question.suggestions) && question.suggestions.length > 0) {
    const hintTitle = document.createElement("p");
    hintTitle.className = "field-hint";
    hintTitle.textContent = "💡 Ideas rápidas (toca una si quieres agregarla a tu respuesta):";
    dom.questionBody.appendChild(hintTitle);

    const chipsWrap = document.createElement("div");
    chipsWrap.className = "chips-grid";

    question.suggestions.forEach((idea) => {
      const isSelected = answer.selected.includes(idea);
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = `chip-btn${isSelected ? " selected" : ""}`;
      chip.textContent = `+ ${idea}`;

      chip.addEventListener("click", () => {
        const idx = answer.selected.indexOf(idea);
        if (idx > -1) {
          answer.selected.splice(idx, 1);
          chip.classList.remove("selected");
        } else {
          answer.selected.push(idea);
          chip.classList.add("selected");
        }
        saveStateToStorage();
      });

      chipsWrap.appendChild(chip);
    });

    dom.questionBody.appendChild(chipsWrap);
  }

  const fieldGroup = document.createElement("div");
  fieldGroup.className = "field-group";

  const label = document.createElement("label");
  label.className = "field-label";
  label.htmlFor = `input_${question.id}`;
  label.textContent = "Tu respuesta (con tus propias palabras):";

  const textarea = document.createElement("textarea");
  textarea.id = `input_${question.id}`;
  textarea.className = "textarea-input";
  textarea.rows = 4;
  textarea.placeholder = question.placeholder || "Escribe aquí...";
  textarea.value = answer.text || "";

  textarea.addEventListener("input", (e) => {
    answer.text = e.target.value;
    saveStateToStorage();
  });

  fieldGroup.appendChild(label);
  fieldGroup.appendChild(textarea);
  dom.questionBody.appendChild(fieldGroup);
}

/**
 * 5. Renderizador: Campos múltiples (Fechas importantes y tallas)
 */
function renderMultiFieldsQuestion(question, answer) {
  if (!answer.fields) answer.fields = {};

  const grid = document.createElement("div");
  grid.className = "multi-fields-grid";

  question.fields.forEach((field) => {
    const group = document.createElement("div");
    group.className = `field-group${field.fullWidth ? " full-width" : ""}`;

    const label = document.createElement("label");
    label.className = "field-label";
    label.htmlFor = `field_${question.id}_${field.key}`;
    label.textContent = field.label;

    const input = field.fullWidth
      ? document.createElement("textarea")
      : document.createElement("input");

    if (!field.fullWidth) {
      input.type = "text";
      input.className = "text-input";
    } else {
      input.className = "textarea-input";
      input.rows = 3;
    }

    input.id = `field_${question.id}_${field.key}`;
    input.placeholder = field.placeholder || "";
    input.value = answer.fields[field.key] || "";

    input.addEventListener("input", (e) => {
      answer.fields[field.key] = e.target.value;
      saveStateToStorage();
    });

    group.appendChild(label);
    group.appendChild(input);
    grid.appendChild(group);
  });

  dom.questionBody.appendChild(grid);
}

/**
 * Avanza al siguiente paso o finaliza el cuestionario
 */
function goNextStep() {
  if (state.currentStep < QUIZ_CONFIG.questions.length - 1) {
    state.currentStep += 1;
    saveStateToStorage();
    renderCurrentQuestion("forward");
  } else {
    finishQuiz();
  }
}

/**
 * Retrocede al paso anterior
 */
function goPrevStep() {
  if (state.currentStep > 0) {
    state.currentStep -= 1;
    saveStateToStorage();
    renderCurrentQuestion("backward");
  }
}

/**
 * Formatea la respuesta de una pregunta como texto legible para el resumen y Google Sheets
 */
function formatQuestionResponse(question) {
  const ans = state.answers[question.id];
  if (!ans) return "Sin responder (saltada)";

  const parts = [];
  if (Array.isArray(ans.selected) && ans.selected.length > 0) {
    parts.push(ans.selected.join(", "));
  }
  if (typeof ans.text === "string" && ans.text.trim().length > 0) {
    parts.push(ans.text.trim());
  }
  if (ans.fields && typeof ans.fields === "object") {
    const fieldStrings = [];
    (question.fields || []).forEach((f) => {
      const val = ans.fields[f.key];
      if (val && val.trim().length > 0) {
        fieldStrings.push(`${f.label}: ${val.trim()}`);
      }
    });
    if (fieldStrings.length > 0) {
      parts.push(fieldStrings.join(" | "));
    }
  }

  return parts.length > 0 ? parts.join(" — Nota: ") : "Sin responder (saltada)";
}

/**
 * Construye el payload JSON para enviar a Google Apps Script (doPost)
 */
function buildSubmissionPayload() {
  const flatAnswers = {};
  const detailedList = [];

  QUIZ_CONFIG.questions.forEach((q) => {
    const formatted = formatQuestionResponse(q);
    flatAnswers[q.id] = formatted;
    detailedList.push({
      id: q.id,
      question: q.title,
      answer: formatted
    });
  });

  return {
    submittedAt: new Date().toISOString(),
    startedAt: state.startedAt || new Date().toISOString(),
    answeredCount: countAnsweredQuestions(),
    totalQuestions: QUIZ_CONFIG.questions.length,
    userAgent: navigator.userAgent,
    answers: flatAnswers,
    detailed: detailedList
  };
}

/**
 * Muestra la pantalla final, genera el resumen de respuestas y envía los datos
 */
function finishQuiz() {
  showScreen("final");
  renderSummaryList();
  submitAnswersToGoogleSheet();
}

/**
 * Renderiza el acordeón de resumen para que pueda revisar o editar cualquier pregunta
 */
function renderSummaryList() {
  dom.answeredCountBadge.textContent = `${countAnsweredQuestions()} de ${QUIZ_CONFIG.questions.length}`;
  dom.summaryList.innerHTML = "";

  QUIZ_CONFIG.questions.forEach((q, idx) => {
    const item = document.createElement("div");
    item.className = "summary-item";

    const info = document.createElement("div");
    const qTitle = document.createElement("div");
    qTitle.className = "summary-item-q";
    qTitle.textContent = `${idx + 1}. ${q.title}`;

    const qAns = document.createElement("div");
    qAns.className = "summary-item-a";
    qAns.textContent = formatQuestionResponse(q);

    info.appendChild(qTitle);
    info.appendChild(qAns);

    const editBtn = document.createElement("button");
    editBtn.type = "button";
    editBtn.className = "summary-jump-btn";
    editBtn.textContent = "Editar";
    editBtn.addEventListener("click", () => {
      state.currentStep = idx;
      saveStateToStorage();
      renderCurrentQuestion("backward");
    });

    item.appendChild(info);
    item.appendChild(editBtn);
    dom.summaryList.appendChild(item);
  });
}

/**
 * Envía las respuestas al Web App de Google Apps Script mediante fetch POST
 */
async function submitAnswersToGoogleSheet() {
  dom.submissionLoading.classList.remove("hidden");
  dom.submissionSuccess.classList.add("hidden");
  dom.submissionError.classList.add("hidden");

  const endpoint = (GOOGLE_SCRIPT_URL || "").trim();

  // Si aún no se ha pegado la URL de Google Apps Script, mostramos aviso amable con opción de reintentar/copiar
  if (!endpoint) {
    setTimeout(() => {
      dom.submissionLoading.classList.add("hidden");
      dom.submissionError.classList.remove("hidden");
      dom.submissionErrorTitle.textContent =
        "Tus respuestas están guardadas en tu dispositivo ✨ (Falta conectar Google Sheets)";
      dom.submissionErrorDesc.textContent =
        "El enlace de Google Apps Script aún no está configurado en GOOGLE_SCRIPT_URL (app.js). Tus respuestas NO se han perdido: puedes copiarlas con el botón de abajo o reintentar cuando esté listo.";
    }, 500);
    return;
  }

  try {
    const payload = buildSubmissionPayload();

    // Nota importante sobre Google Apps Script Web Apps:
    // Usamos Content-Type: text/plain;charset=utf-8 para evitar bloqueos de preflight CORS (OPTIONS)
    // en navegadores móviles y de escritorio. Apps Script recibe el JSON en e.postData.contents.
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    state.submitted = true;
    dom.submissionLoading.classList.add("hidden");
    dom.submissionSuccess.classList.remove("hidden");
  } catch (error) {
    console.warn("Error al enviar a Google Sheets:", error);
    dom.submissionLoading.classList.add("hidden");
    dom.submissionError.classList.remove("hidden");
    dom.submissionErrorTitle.textContent =
      "Ups, hubo un detallito al enviar tus respuestas";
    dom.submissionErrorDesc.textContent =
      "¡Tranquila! Todas tus respuestas están guardadas y seguras aquí mismo. Verifica tu conexión y toca «Reintentar envío» o copia tu resumen.";
  }
}

/**
 * Copia todas las respuestas formateadas al portapapeles como respaldo
 */
async function copySummaryToClipboard() {
  const lines = ["✨ MIS RESPUESTAS DEL QUIZ ESPECIAL ✨", ""];
  QUIZ_CONFIG.questions.forEach((q, idx) => {
    lines.push(`${idx + 1}. ${q.title}`);
    lines.push(`   👉 ${formatQuestionResponse(q)}`);
    lines.push("");
  });

  const text = lines.join("\n");
  try {
    await navigator.clipboard.writeText(text);
    const originalText = dom.copySummaryBtn.textContent;
    dom.copySummaryBtn.textContent = "✓ ¡Copiado al portapapeles!";
    setTimeout(() => {
      dom.copySummaryBtn.textContent = originalText;
    }, 2500);
  } catch {
    alert("Aquí tienes tus respuestas para copiar:\n\n" + text);
  }
}

/**
 * Asocia todos los eventos de botones, formularios y teclado
 */
function bindEvents() {
  // Botón Empezar desde el paso 1
  dom.startQuizBtn.addEventListener("click", () => {
    state.currentStep = 0;
    saveStateToStorage();
    renderCurrentQuestion("forward");
  });

  // Botón Continuar donde me quedé
  dom.resumeQuizBtn.addEventListener("click", () => {
    renderCurrentQuestion("forward");
  });

  // Botón Reiniciar respuestas guardadas
  dom.resetSavedBtn.addEventListener("click", () => {
    if (confirm("¿Quieres borrar las respuestas guardadas y comenzar desde cero?")) {
      localStorage.removeItem(STORAGE_KEY);
      state.answers = {};
      state.currentStep = 0;
      state.startedAt = null;
      showWelcomeScreen();
    }
  });

  // Navegación entre preguntas
  dom.prevBtn.addEventListener("click", goPrevStep);
  dom.nextBtn.addEventListener("click", goNextStep);
  dom.skipBtn.addEventListener("click", goNextStep);

  // Pantalla final: reintentar envío, copiar resumen, volver a editar
  dom.retrySubmitBtn.addEventListener("click", submitAnswersToGoogleSheet);
  dom.copySummaryBtn.addEventListener("click", copySummaryToClipboard);
  dom.editAnswersBtn.addEventListener("click", () => {
    renderCurrentQuestion("backward");
  });
}

// Iniciar aplicación
document.addEventListener("DOMContentLoaded", initApp);

/**
 * ============================================================================
 * CÓDIGO DE GOOGLE APPS SCRIPT (doPost) PARA PEGAR EN TU GOOGLE SHEET
 * ============================================================================
 * También disponible en el archivo `google-apps-script.gs` y explicado en `README.md`.
 *
 * function doPost(e) {
 *   try {
 *     var lock = LockService.getScriptLock();
 *     lock.tryLock(10000);
 *
 *     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 *     var data = JSON.parse(e.postData.contents);
 *     var answers = data.answers || {};
 *     var keys = Object.keys(answers);
 *
 *     // Crear encabezados automáticamente en la fila 1 si la hoja está vacía
 *     if (sheet.getLastRow() === 0) {
 *       var headers = ["Fecha de envío", "Respondidas", "Total Preguntas"].concat(keys);
 *       sheet.appendRow(headers);
 *       sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold");
 *     }
 *
 *     var row = [
 *       new Date(),
 *       data.answeredCount || 0,
 *       data.totalQuestions || keys.length
 *     ];
 *
 *     for (var i = 0; i < keys.length; i++) {
 *       row.push(answers[keys[i]] || "");
 *     }
 *
 *     sheet.appendRow(row);
 *     lock.releaseLock();
 *
 *     return ContentService
 *       .createTextOutput(JSON.stringify({ status: "ok" }))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   } catch (err) {
 *     return ContentService
 *       .createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   }
 * }
 */
