export type OptionKey = "a" | "b" | "c" | "d";

export interface QuizQuestion {
  id: number;
  question: string;
  options: Record<OptionKey, string>;
  correctAnswer: OptionKey;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question:
      "¿Cuál es el fenómeno principal que aborda el documental 'La Tierra pierde el Norte'?",
    options: {
      a: "El movimiento de los polos magnéticos de la Tierra",
      b: "El cambio climático y sus efectos en el Ártico",
      c: "La rotación de la Tierra y sus consecuencias",
      d: "Las erupciones volcánicas en el norte del planeta",
    },
    correctAnswer: "a",
    explanation:
      "El documental se centra en el fenómeno del desplazamiento de los polos magnéticos terrestres, un tema fundamental para la cartografía y navegación moderna.",
  },
  {
    id: 2,
    question:
      "Según los últimos cálculos mencionados en el documental, ¿a qué velocidad se desplaza el polo magnético norte?",
    options: {
      a: "Entre 10 y 15 kilómetros al año",
      b: "Entre 55 y 60 kilómetros al año",
      c: "Entre 25 y 30 kilómetros al año",
      d: "Entre 100 y 120 kilómetros al año",
    },
    correctAnswer: "b",
    explanation:
      "El documental indica que el polo norte magnético se desplaza entre 55 y 60 kilómetros al año, una aceleración significativa respecto a décadas anteriores.",
  },
  {
    id: 3,
    question:
      "¿Hacia dónde se está desplazando actualmente el polo norte magnético?",
    options: {
      a: "Hacia Siberia, Rusia",
      b: "Hacia el océano Pacífico",
      c: "Hacia Groenlandia",
      d: "Hacia el polo sur",
    },
    correctAnswer: "a",
    explanation:
      "El polo norte magnético se está desplazando desde el Ártico canadiense hacia Siberia, Rusia, un movimiento documentado por científicos internacionales.",
  },
  {
    id: 4,
    question: "¿Qué es el World Magnetic Model (WMM)?",
    options: {
      a: "Un tipo de brújula especializada",
      b: "Un satélite de investigación",
      c: "Un mapa geopolítico",
      d: "Un modelo matemático que representa el campo magnético terrestre",
    },
    correctAnswer: "d",
    explanation:
      "El World Magnetic Model es un modelo matemático que representa el campo magnético terrestre y se utiliza como referencia oficial para navegación por gobiernos, fuerzas armadas y empresas de todo el mundo.",
  },
  {
    id: 5,
    question:
      "¿Con qué frecuencia se actualiza oficialmente el World Magnetic Model?",
    options: {
      a: "Cada año",
      b: "Cada 5 años",
      c: "Cada 3 años",
      d: "Cada 10 años",
    },
    correctAnswer: "b",
    explanation:
      "El World Magnetic Model se publica y actualiza cada cinco años, aunque en ocasiones se han necesitado actualizaciones extraordinarias debido al rápido desplazamiento del polo magnético.",
  },
  {
    id: 6,
    question:
      "¿Cuál es la diferencia fundamental entre el polo norte geográfico y el polo norte magnético?",
    options: {
      a: "El polo magnético es fijo mientras que el geográfico se desplaza",
      b: "Ambos polos son exactamente el mismo punto",
      c: "Ambos polos se desplazan a la misma velocidad",
      d: "El polo geográfico es fijo mientras que el magnético se desplaza",
    },
    correctAnswer: "d",
    explanation:
      "El polo norte geográfico es un punto fijo determinado por el eje de rotación terrestre, mientras que el polo norte magnético se desplaza constantemente debido a las corrientes de hierro líquido en el núcleo externo de la Tierra.",
  },
  {
    id: 7,
    question: "¿Qué es la declinación magnética en cartografía?",
    options: {
      a: "La diferencia angular entre el norte geográfico y el norte magnético",
      b: "La inclinación de la brújula respecto a la horizontal",
      c: "La distancia entre los polos geográficos",
      d: "La velocidad de rotación terrestre",
    },
    correctAnswer: "a",
    explanation:
      "La declinación magnética es el ángulo entre la dirección del norte geográfico (verdadero) y la dirección del norte magnético señalada por la brújula. Es un concepto fundamental en cartografía y navegación.",
  },
  {
    id: 8,
    question: "¿Qué ocurre con la brújula en el polo norte magnético?",
    options: {
      a: "Señala perfectamente hacia el sur",
      b: "Señala siempre hacia el este",
      c: "La aguja se vuelve inestable y no tiene una dirección definida",
      d: "Funciona exactamente igual que en cualquier otro lugar",
    },
    correctAnswer: "c",
    explanation:
      "En el polo norte magnético, las líneas del campo magnético son verticales, por lo que la aguja de la brújula no puede alinearse horizontalmente y se vuelve inestable, impidiendo la orientación convencional.",
  },
  {
    id: 9,
    question:
      "¿Qué causa el campo magnético de la Tierra según la ciencia actual?",
    options: {
      a: "La atracción gravitatoria del Sol",
      b: "Los minerales magnéticos en la corteza terrestre",
      c: "La radiación solar",
      d: "El movimiento del hierro líquido en el núcleo externo terrestre",
    },
    correctAnswer: "d",
    explanation:
      "El campo magnético terrestre es generado por el movimiento del hierro y níquel líquidos en el núcleo externo de la Tierra, un fenómeno conocido como 'efecto dínamo'.",
  },
  {
    id: 10,
    question: "¿Qué es una inversión geomagnética?",
    options: {
      a: "El desplazamiento del polo magnético hacia el ecuador",
      b: "La desaparición temporal del campo magnético",
      c: "El aumento de la intensidad del campo magnético",
      d: "Un cambio en la orientación del campo magnético donde los polos norte y sur intercambian posiciones",
    },
    correctAnswer: "d",
    explanation:
      "Una inversión geomagnética es un fenómeno en el que los polos magnéticos de la Tierra intercambian sus posiciones: el polo norte magnético se convierte en polo sur y viceversa. Este fenómeno ha ocurrido múltiples veces en la historia del planeta.",
  },
  {
    id: 11,
    question: "¿Cuándo ocurrió la última inversión magnética completa de la Tierra?",
    options: {
      a: "Hace aproximadamente 786,000 años",
      b: "Hace aproximadamente 10,000 años",
      c: "Hace aproximadamente 2 millones de años",
      d: "Nunca ha ocurrido una inversión magnética",
    },
    correctAnswer: "a",
    explanation:
      "La última inversión magnética completa, conocida como el evento Brunhes-Matuyama, ocurrió hace aproximadamente 786,000 años. A lo largo de la historia geológica, la Tierra ha experimentado numerosas inversiones magnéticas.",
  },
  {
    id: 12,
    question:
      "¿Por qué es importante para los cartógrafos conocer el desplazamiento del polo magnético?",
    options: {
      a: "Solo por curiosidad científica",
      b: "Para actualizar los mapas magnéticos y asegurar la precisión en la navegación",
      c: "Para predecir terremotos",
      d: "Para determinar la hora exacta",
    },
    correctAnswer: "b",
    explanation:
      "Los cartógrafos deben conocer el desplazamiento del polo magnético para actualizar los mapas y cartas náuticas, corregir la declinación magnética y garantizar la precisión en sistemas de navegación que dependen del campo magnético terrestre.",
  },
  {
    id: 13,
    question:
      "¿Qué sistema de navegación se ve especialmente afectado por el desplazamiento del polo magnético?",
    options: {
      a: "GPS (Sistema de Posicionamiento Global)",
      b: "Navegación por estrellas",
      c: "Sistema GLONASS",
      d: "Navegación por brújula magnética",
    },
    correctAnswer: "d",
    explanation:
      "La navegación por brújula magnética es la más afectada directamente por el desplazamiento del polo magnético, ya que las brújulas señalan hacia el norte magnético, no hacia el geográfico. Esto requiere actualizaciones constantes de la declinación magnética.",
  },
  {
    id: 14,
    question:
      "¿Qué es la anomalía del Atlántico Sur mencionada en estudios sobre el campo magnético?",
    options: {
      a: "Una zona donde el campo magnético es más intenso de lo normal",
      b: "Un área con mayor actividad sísmica",
      c: "Una región donde el campo magnético es significativamente más débil",
      d: "Una corriente oceánica especial",
    },
    correctAnswer: "c",
    explanation:
      "La anomalía del Atlántico Sur es una región sobre Sudamérica y el océano Atlántico Sur donde el campo magnético terrestre es significativamente más débil que en otras latitudes similares, lo que permite que mayor radiación cósmica alcance la superficie.",
  },
  {
    id: 15,
    question:
      "¿Qué aplicaciones prácticas dependen del conocimiento preciso del campo magnético terrestre?",
    options: {
      a: "Solo la navegación marítima",
      b: "Exclusivamente la investigación científica",
      c: "Navegación aérea, marítima, sistemas GPS, y orientación de smartphones",
      d: "Únicamente las operaciones militares",
    },
    correctAnswer: "c",
    explanation:
      "El conocimiento preciso del campo magnético terrestre es esencial para múltiples aplicaciones: navegación aérea y marítima, calibración de sistemas GPS, orientación en smartphones y dispositivos electrónicos, y operaciones de búsqueda y rescate.",
  },
  {
    id: 16,
    question:
      "En cartografía topográfica, ¿cómo se representa habitualmente la declinación magnética en los mapas?",
    options: {
      a: "Con un diagrama que muestra la relación entre el norte geográfico, magnético y de cuadrícula",
      b: "Con un símbolo de estrella",
      c: "Con colores diferentes para cada hemisferio",
      d: "No se representa en los mapas topográficos",
    },
    correctAnswer: "a",
    explanation:
      "En los mapas topográficos, la declinación magnética se representa mediante un diagrama de declinación que muestra la relación angular entre el norte geográfico (verdadero), el norte magnético y el norte de cuadrícula, junto con el valor numérico de la declinación para el año de publicación del mapa.",
  },
  {
    id: 17,
    question:
      "¿Qué institución es responsable de mantener y actualizar el World Magnetic Model?",
    options: {
      a: "La NASA exclusivamente",
      b: "La Organización de las Naciones Unidas",
      c: "Agencias gubernamentales de Estados Unidos y Reino Unido (NOAA y British Geological Survey)",
      d: "Empresas privadas de navegación",
    },
    correctAnswer: "c",
    explanation:
      "El World Magnetic Model es mantenido conjuntamente por la Administración Nacional Oceánica y Atmosférica (NOAA) de Estados Unidos y el Servicio Geológico Británico (British Geological Survey), quienes cooperan para proporcionar datos precisos del campo magnético terrestre.",
  },
  {
    id: 18,
    question:
      "¿Qué relación existe entre el desplazamiento del polo magnético y la tectónica de placas?",
    options: {
      a: "Son fenómenos completamente independientes",
      b: "Los registros magnéticos en las placas ayudan a estudiar la historia del campo magnético",
      c: "El polo magnético controla el movimiento de las placas",
      d: "El movimiento de las placas causa directamente el desplazamiento del polo",
    },
    correctAnswer: "b",
    explanation:
      "Aunque son fenómenos diferentes, los registros de la orientación magnética conservados en las rocas de las placas tectónicas (paleomagnetismo) permiten a los científicos estudiar la historia del campo magnético terrestre, incluyendo las inversiones polares pasadas.",
  },
  {
    id: 19,
    question:
      "¿Por qué se dice que 'La Tierra pierde el Norte' en el título del documental?",
    options: {
      a: "Porque el norte geográfico está desapareciendo",
      b: "Porque el polo norte magnético se está desplazando rápidamente de su posición histórica",
      c: "Porque la brújula ya no funciona correctamente",
      d: "Porque el hielo del Ártico se está derritiendo",
    },
    correctAnswer: "b",
    explanation:
      "El título 'La Tierra pierde el Norte' hace referencia al rápido desplazamiento del polo norte magnético desde su posición histórica en el Ártico canadiense hacia Siberia, lo que representa un cambio significativo en el campo magnético terrestre con importantes implicaciones para la navegación y la cartografía.",
  },
  {
    id: 20,
    question:
      "Para un estudiante de Topografía y Cartografía Básica, ¿cuál es la importancia práctica de entender el desplazamiento del polo magnético?",
    options: {
      a: "No tiene ninguna aplicación práctica",
      b: "Solo sirve para aprobar exámenes teóricos",
      c: "Es fundamental para interpretar correctamente mapas antiguos, actualizar datos cartográficos y realizar orientaciones precisas en el campo",
      d: "Es importante únicamente para trabajos en el Ártico",
    },
    correctAnswer: "c",
    explanation:
      "Para profesionales de la topografía y cartografía, entender el desplazamiento del polo magnético es esencial para: interpretar correctamente la declinación magnética en mapas de diferentes épocas, actualizar datos cartográficos, realizar orientaciones precisas con brújula en trabajo de campo, y comprender las limitaciones de los sistemas de navegación magnética.",
  },
];

export const OPTION_KEYS: OptionKey[] = ["a", "b", "c", "d"];
export const PASS_THRESHOLD = 70;
