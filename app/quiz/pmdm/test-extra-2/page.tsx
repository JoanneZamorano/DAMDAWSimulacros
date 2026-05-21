"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, X, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Question {
  question: string
  options: string[]
  correctAnswer: number
}

const questions: Question[] = [
  {
    question: "56. ¿Qué es la vinculación de datos bidireccional (two-way binding) en el contexto de frameworks móviles?",
    options: [
      "La capacidad de compilar código en ambas direcciones",
      "La sincronización automática de cambios entre la Vista y el Modelo en ambas direcciones",
      "Un método de encriptación de datos",
      "La comunicación entre dos dispositivos simultáneamente"
    ],
    correctAnswer: 1,
  },
  {
    question: "57. ¿Cuál es la principal ventaja de usar Kotlin sobre Java en el desarrollo de aplicaciones Android?",
    options: [
      "Kotlin es más rápido en tiempo de ejecución",
      "Kotlin tiene sintaxis más concisa, mejor seguridad de tipos nulos y mejor interoperabilidad",
      "Kotlin solo funciona en Android",
      "Kotlin no requiere compilación"
    ],
    correctAnswer: 1,
  },
  {
    question: "58. ¿Qué es el estado efímero en el contexto de aplicaciones móviles?",
    options: [
      "Datos que se guardan permanentemente en la base de datos",
      "Información temporal que existe solo durante la sesión actual y se pierde al cerrar la aplicación",
      "El estado de la batería del dispositivo",
      "Datos encriptados en la nube"
    ],
    correctAnswer: 1,
  },
  {
    question: "59. ¿Cuál es la función del adaptador en RecyclerView de Android?",
    options: [
      "Traducir palabras en diferentes idiomas",
      "Proporcionar datos a la RecyclerView y crear ViewHolders para renderizar cada elemento",
      "Gestionar permisos del dispositivo",
      "Compilar código nativo"
    ],
    correctAnswer: 1,
  },
  {
    question: "60. ¿Qué es una actividad en Android y cuál es su propósito principal?",
    options: [
      "Un archivo de configuración de la aplicación",
      "Una pantalla o ventana que presenta una interfaz gráfica con la que el usuario interactúa",
      "Un servicio que ejecuta tareas en segundo plano",
      "Un componente que gestiona permisos del sistema"
    ],
    correctAnswer: 1,
  },
  {
    question: "61. ¿Cuál es la diferencia entre una petición HTTP síncrona y asíncrona en aplicaciones móviles?",
    options: [
      "Las síncronas son más seguras que las asincrónicas",
      "Las síncronas bloquean la ejecución hasta recibir respuesta, mientras que las asincrónicas permiten continuar ejecutando código sin esperar",
      "Las asincrónicas solo funcionan con conexión WiFi",
      "No hay diferencia funcional entre ambas"
    ],
    correctAnswer: 1,
  },
  {
    question: "62. ¿Cuál es el propósito principal de implementar un patrón MVVM en aplicaciones móviles?",
    options: [
      "Separar la lógica de presentación de la lógica de negocio mediante un componente ViewModel",
      "Reducir el tamaño del archivo APK eliminando componentes innecesarios",
      "Optimizar el consumo de batería deshabilitando actualizaciones automáticas",
      "Facilitar la conexión directa entre Activities y bases de datos sin intermediarios"
    ],
    correctAnswer: 0,
  },
  {
    question: "63. En React Native, ¿cuál es la diferencia fundamental entre FlatList y ScrollView respecto a la renderización de elementos?",
    options: [
      "FlatList renderiza solo los elementos visibles en pantalla, mientras que ScrollView renderiza todos los elementos en memoria",
      "FlatList solo funciona en Android y ScrollView únicamente en iOS",
      "ScrollView implementa virtualización, siendo más eficiente que FlatList en listas grandes",
      "FlatList no permite desplazamiento horizontal, únicamente vertical"
    ],
    correctAnswer: 0,
  },
  {
    question: "64. ¿Cuál es la función principal del hook useEffect en React?",
    options: [
      "Gestionar el estado local de un componente funcional",
      "Ejecutar efectos secundarios en componentes funcionales, controlados por un array de dependencias",
      "Crear referencias mutables que persisten entre renderizados",
      "Optimizar el rendimiento previniendo renderizados innecesarios"
    ],
    correctAnswer: 1,
  },
  {
    question: "65. En desarrollo Android con Kotlin, ¿qué rol cumple un ViewModel en la arquitectura MVVM?",
    options: [
      "Controlar directamente las acciones del usuario desde la interfaz gráfica",
      "Almacenar datos y lógica de presentación, sobreviviendo a cambios de configuración",
      "Gestionar exclusivamente la persistencia de datos en SQLite",
      "Renderizar elementos visuales y detectar gestos del usuario"
    ],
    correctAnswer: 1,
  },
  {
    question: "66. ¿Cuál es el propósito de utilizar un patrón Repository en arquitecturas móviles?",
    options: [
      "Abstraer las fuentes de datos y proporcionar una interfaz unificada de acceso a datos",
      "Reemplazar completamente la necesidad de usar bases de datos locales",
      "Ejecutar animaciones complejas de manera eficiente",
      "Controlar la navegación entre pantallas de la aplicación"
    ],
    correctAnswer: 0,
  },
  {
    question: "67. En Unity, ¿qué componente es responsable de definir la posición, rotación y escala de un GameObject?",
    options: [
      "Renderer",
      "Transform",
      "Collider",
      "Rigidbody"
    ],
    correctAnswer: 1,
  },
  {
    question: "68. Durante el análisis de usabilidad de una app Android, se detecta que los elementos de la interfaz tienen tamaños, colores y espaciados similares sin distinción de importancia. ¿Cuál es el principal problema de experiencia de usuario que provoca esta ausencia de jerarquía visual?",
    options: [
      "Los usuarios no pueden identificar claramente los elementos prioritarios ni la estructura del contenido",
      "La aplicación consume más batería al renderizar los componentes gráficos",
      "El sistema operativo restringe los permisos de acceso a la interfaz",
      "Se reduce la compatibilidad con versiones anteriores de Android"
    ],
    correctAnswer: 0,
  },
  {
    question: "69. ¿Cuál es la principal ventaja de utilizar React Native en el desarrollo multiplataforma?",
    options: [
      "Escribir una única codebase JavaScript que renderiza componentes nativos en iOS y Android",
      "Garantizar rendimiento idéntico al código nativo puro en todas las plataformas",
      "Eliminar completamente la necesidad de conocer particularidades de cada plataforma",
      "Usar exclusivamente componentes nativos sin ningún tipo de capa de abstracción"
    ],
    correctAnswer: 0,
  },
  {
    question: "70. En el desarrollo de interfaces móviles, ¿qué principio de diseño se refiere a la claridad en la comunicación visual entre el usuario y la aplicación?",
    options: [
      "Minimalismo",
      "Feedback visual y retroalimentación inmediata",
      "Contraste cromático extremo",
      "Densidad máxima de información"
    ],
    correctAnswer: 1,
  },
  {
    question: "71. ¿Qué característica define a una aplicación móvil responsiva?",
    options: [
      "Se adapta automáticamente al tamaño y orientación de pantalla manteniendo usabilidad",
      "Funciona exclusivamente en smartphones con pantalla superior a 5 pulgadas",
      "Requiere reconexión manual a la red cada vez que cambia la orientación",
      "Está optimizada únicamente para la resolución original de diseño"
    ],
    correctAnswer: 0,
  },
  {
    question: "72. En programación de shaders para gráficos móviles, ¿cuál es la principal razón para optimizar el número de operaciones en el fragment shader?",
    options: [
      "Reducir la carga computacional en la GPU, que es crítica en dispositivos móviles con recursos limitados",
      "Asegurar que el código sea más fácil de leer y mantener",
      "Permitir la compilación en versiones antiguas de OpenGL",
      "Incrementar la resolución de la pantalla automáticamente"
    ],
    correctAnswer: 0,
  },
  {
    question: "73. ¿Qué diferencia existe entre compilación JIT y AOT en contexto de aplicaciones móviles?",
    options: [
      "JIT compila en tiempo de ejecución adaptándose al dispositivo, AOT precompila antes de instalar",
      "AOT solo funciona en Android, JIT en iOS exclusivamente",
      "JIT produce archivos más pequeños que AOT",
      "AOT requiere compilador instalado en el dispositivo móvil"
    ],
    correctAnswer: 0,
  },
  {
    question: "74. En desarrollo con Flutter, ¿cuál es la función principal de los Widgets?",
    options: [
      "Componentes declarativos que definen la interfaz y comportamiento de la UI",
      "Funciones que comprimen imágenes para reducir tamaño de aplicación",
      "Módulos que gestionan exclusivamente la comunicación con servidores",
      "Librerías externas para acceso a sensores del dispositivo"
    ],
    correctAnswer: 0,
  },
  {
    question: "75. ¿Cuál es el propósito del patrón Singleton en contexto de desarrollo móvil?",
    options: [
      "Asegurar que una clase tenga exactamente una instancia accesible globalmente",
      "Crear múltiples instancias de una clase para distribuir carga de procesamiento",
      "Replicar datos en múltiples servidores simultáneamente",
      "Limitar el número máximo de usuarios concurrentes en la aplicación"
    ],
    correctAnswer: 0,
  },
  {
    question: "76. En diseño de interfaces móviles, ¿qué es el principio de 'touch-friendly' o 'amigable al tacto'?",
    options: [
      "Diseñar elementos interactivos con tamaño y espaciado suficientes para toque preciso",
      "Usar exclusivamente colores brillantes para llamar atención al tocar",
      "Requerir múltiples gestos para completar cada acción",
      "Implementar vibración en cada toque del usuario"
    ],
    correctAnswer: 0,
  },
  {
    question: "77. ¿Cuál es el objetivo principal del diseño de interfaces móviles?",
    options: [
      "Facilitar la interacción del usuario con el dispositivo de forma intuitiva y eficiente",
      "Maximizar el uso de memoria RAM del dispositivo",
      "Implementar el mayor número posible de funcionalidades en una sola pantalla",
      "Utilizar exclusivamente colores oscuros para reducir consumo de batería"
    ],
    correctAnswer: 0,
  },
  {
    question: "78. ¿Qué consecuencia directa tiene una interfaz con mala jerarquía visual?",
    options: [
      "El usuario tiene dificultades para identificar la información prioritaria",
      "Mejora automáticamente la accesibilidad del contenido",
      "Aumenta la velocidad de renderizado de la aplicación",
      "Reduce el consumo de datos en conexión móvil"
    ],
    correctAnswer: 0,
  },
  {
    question: "79. ¿Cuál es la función principal de un patrón Repository en la arquitectura de una aplicación móvil?",
    options: [
      "Gestionar la lógica de acceso a datos, abstrayendo la fuente",
      "Controlar directamente los eventos de la interfaz de usuario",
      "Ejecutar animaciones y transiciones entre pantallas",
      "Gestionar la navegación entre actividades o fragmentos"
    ],
    correctAnswer: 0,
  },
  {
    question: "80. ¿Cuál es la principal ventaja de utilizar React Native en el desarrollo multiplataforma?",
    options: [
      "Escribir código una sola vez y desplegarlo en iOS y Android",
      "Obligar el uso exclusivo de componentes nativos sin abstracción",
      "Aumentar el consumo de memoria en dispositivos móviles",
      "Eliminar completamente la necesidad de testing en aplicaciones"
    ],
    correctAnswer: 0,
  },
  {
    question: "81. ¿Qué hook de React se utiliza para gestionar el estado local de un componente funcional?",
    options: [
      "useState",
      "useFetch",
      "useEffect",
      "useCallback"
    ],
    correctAnswer: 0,
  },
  {
    question: "82. En un proyecto de desarrollo Android nativo, ¿qué clase es responsable de definir la posición, escala y rotación de un objeto visual?",
    options: [
      "Renderer",
      "Matrix",
      "Collider",
      "ViewGroup"
    ],
    correctAnswer: 1,
  },
  {
    question: "83. ¿Cuál es la diferencia fundamental entre AsyncTask y corrutinas en Kotlin para operaciones asincrónicas?",
    options: [
      "AsyncTask está deprecada y las corrutinas ofrecen sintaxis más simple y seguridad de tipo",
      "AsyncTask es más rápido que las corrutinas en todas las operaciones",
      "Las corrutinas solo funcionan en dispositivos con Android 11 o superior",
      "AsyncTask no requiere importar librerías adicionales a diferencia de corrutinas"
    ],
    correctAnswer: 0,
  },
  {
    question: "84. ¿Qué patrón de diseño se recomienda usar para comunicación entre fragmentos sin acoplamiento directo?",
    options: [
      "ViewModel compartido con LiveData o StateFlow",
      "Referencias directas entre instancias de fragmentos",
      "Variables estáticas globales en una clase utilitaria",
      "Llamadas directas a métodos privados del fragmento"
    ],
    correctAnswer: 0,
  },
  {
    question: "85. ¿Cuál es el propósito principal de usar Constraint Layout en lugar de otros layouts en Android?",
    options: [
      "Crear interfaces flexibles y responsivas con pocas declaraciones de constraints",
      "Aumentar el rendimiento eliminando todas las mediciones de vistas",
      "Simplificar la escritura de código XML mediante etiquetas predefinidas",
      "Obligar el uso de componentes Material Design exclusivamente"
    ],
    correctAnswer: 0,
  },
  {
    question: "86. ¿Qué ventaja proporciona el uso de Data Binding en Android respecto a la gestión manual de vistas?",
    options: [
      "Reduce código boilerplate permitiendo vincular datos directamente en XML",
      "Elimina completamente la necesidad de testear la lógica de presentación",
      "Aumenta el tamaño de la aplicación de forma significativa",
      "Solo funciona con actividades, no con fragmentos"
    ],
    correctAnswer: 0,
  },
  {
    question: "87. ¿Cuál es la principal función de la inyección de dependencias en aplicaciones móviles?",
    options: [
      "Desacoplar componentes permitiendo fácil substitución y testeo",
      "Compilar el código más rápidamente durante el desarrollo",
      "Automatizar la creación de bases de datos locales",
      "Gestionar permisos de usuario de forma automática"
    ],
    correctAnswer: 0,
  },
  {
    question: "88. ¿Cuál es la diferencia principal entre LiveData y Flow respecto a la integración con el ciclo de vida en Android?",
    options: [
      "LiveData está integrada nativamente al ciclo de vida, mientras que Flow requiere gestión explícita mediante extensiones como flowWithLifecycle",
      "Flow gestiona el ciclo de vida automáticamente sin necesidad de configuración adicional",
      "LiveData ha sido eliminada del SDK y sustituida completamente por Flow",
      "Ambas requieren la misma configuración manual para respetar el ciclo de vida"
    ],
    correctAnswer: 0,
  },
  {
    question: "89. ¿Cuál es el protocolo estándar para comunicación segura entre una aplicación móvil y un servidor remoto?",
    options: [
      "HTTPS con certificados SSL/TLS",
      "HTTP sin encriptación",
      "FTP con autenticación básica",
      "WebSocket sin validación de certificados"
    ],
    correctAnswer: 0,
  },
  {
    question: "90. ¿Qué aspecto fundamental debe considerarse al diseñar un app para trabajar en modo offline?",
    options: [
      "Almacenar datos locales y sincronizar cuando la conexión se restablezca",
      "Bloquear todas las funcionalidades si no hay conexión",
      "Usar exclusivamente APIs REST sin caché",
      "Aumentar el tamaño mínimo del dispositivo requerido"
    ],
    correctAnswer: 0,
  },
  {
    question: "91. ¿Cuál es el principal beneficio de implementar un sistema de caché en capas en una aplicación móvil?",
    options: [
      "Reducir la carga en servidor y mejorar la velocidad de respuesta al usuario",
      "Eliminar completamente la necesidad de conexión a red",
      "Aumentar automáticamente la memoria disponible del dispositivo",
      "Deprecar el uso de bases de datos locales"
    ],
    correctAnswer: 0,
  },
  {
    question: "92. ¿Cuál es la principal función de un Repository en arquitectura móvil?",
    options: [
      "Gestionar la abstracción del acceso a datos",
      "Renderizar componentes visuales en pantalla",
      "Controlar animaciones y transiciones",
      "Validar permisos de usuario"
    ],
    correctAnswer: 0,
  },
  {
    question: "93. ¿Cuál es la principal ventaja de usar React Native frente al desarrollo nativo separado para iOS y Android?",
    options: [
      "Genera código máquina optimizado sin capas intermedias",
      "Reutilización de base de código entre iOS y Android",
      "Requiere conocer Swift y Kotlin simultáneamente",
      "Obliga a publicar ambas apps en el mismo ciclo de lanzamiento"
    ],
    correctAnswer: 1,
  },
  {
    question: "94. ¿Cuál es el propósito principal del hook useState en React?",
    options: [
      "Obtener datos de una API externa",
      "Gestionar el estado reactivo de un componente funcional",
      "Ejecutar efectos secundarios al montar el componente",
      "Memoizar valores calculados"
    ],
    correctAnswer: 1,
  },
  {
    question: "95. ¿Qué consecuencia tiene una jerarquía visual deficiente en una interfaz móvil?",
    options: [
      "Aumenta la claridad de contenidos prioritarios",
      "El usuario no identifica correctamente qué elementos son prioritarios",
      "Mejora automáticamente la accesibilidad",
      "Reduce el consumo de batería del dispositivo"
    ],
    correctAnswer: 1,
  },
  {
    question: "96. ¿Cuál es la función del componente Transform en un motor gráfico 3D?",
    options: [
      "Renderizar geometría en pantalla",
      "Definir posición, rotación y escala de un objeto",
      "Detectar colisiones entre objetos",
      "Gestionar la iluminación de la escena"
    ],
    correctAnswer: 1,
  },
  {
    question: "97. ¿Qué patrón arquitectónico recomienda oficialmente Google para el desarrollo de aplicaciones Android con Jetpack y permite separar la lógica de presentación de la UI mediante un ViewModel observable?",
    options: [
      "MVC (Model-View-Controller)",
      "MVP (Model-View-Presenter)",
      "MVVM (Model-View-ViewModel)",
      "Clean Architecture"
    ],
    correctAnswer: 2,
  },
  {
    question: "98. ¿Cuál es el propósito del hook useEffect en React?",
    options: [
      "Gestionar cambios de estado en componentes",
      "Ejecutar efectos secundarios sincronizados con ciclo de vida",
      "Optimizar rendimiento evitando re-renders",
      "Validar propiedades de componentes"
    ],
    correctAnswer: 1,
  },
  {
    question: "99. ¿Qué característica del diseño responsive es crítica para pantallas móviles?",
    options: [
      "Uso exclusivo de colores saturados",
      "Adaptación de layout según tamaño y orientación de pantalla",
      "Maximización del número de elementos por pantalla",
      "Utilización de fuentes muy pequeñas para economizar espacio"
    ],
    correctAnswer: 1,
  },
  {
    question: "100. ¿Qué característica define a un Fragment en Android, diferenciándolo de una Activity?",
    options: [
      "Un Fragment representa una pantalla completa e independiente con su propio ciclo de vida autónomo",
      "Un Fragment gestiona únicamente la lógica de negocio y el acceso a datos de la aplicación",
      "Un Fragment es un componente de UI modular y reutilizable que reside dentro de una Activity",
      "Un Fragment y una Activity son equivalentes, pero Fragment se usa solo en versiones antiguas de Android"
    ],
    correctAnswer: 2,
  },
  {
    question: "101. ¿Qué problema resuelve la inyección de dependencias en aplicaciones móviles?",
    options: [
      "Reducir el tamaño del archivo APK",
      "Desacoplar componentes facilitando testabilidad y flexibilidad",
      "Aumentar directamente el rendimiento de ejecución",
      "Simplificar el lenguaje de programación"
    ],
    correctAnswer: 1,
  },
  {
    question: "102. ¿Cuál es la finalidad del responsive design en interfaz móvil?",
    options: [
      "Aumentar las animaciones de la aplicación",
      "Garantizar usabilidad óptima en múltiples tamaños y orientaciones",
      "Reducir el número de colores de la paleta",
      "Eliminar la necesidad de testing en dispositivos reales"
    ],
    correctAnswer: 1,
  },
  {
    question: "103. ¿Qué tipo de datos gestiona típicamente un ViewModel en arquitectura MVVM?",
    options: [
      "Solo datos persistidos en base de datos",
      "Estado de UI y lógica de presentación independiente de detalles de View",
      "Configuración del dispositivo del usuario",
      "Credenciales de seguridad del sistema"
    ],
    correctAnswer: 1,
  },
  {
    question: "104. ¿Cuál es el problema de usar valores hardcodeados en interfaces móviles?",
    options: [
      "Mejora automáticamente el rendimiento",
      "Facilita la mantenibilidad y adaptabilidad de diseños",
      "Dificulta adaptabilidad a diferentes tamaños, densidades y orientaciones",
      "Aumenta la seguridad de la aplicación"
    ],
    correctAnswer: 2,
  },
  {
    question: "105. ¿Qué ventaja proporciona usar LiveData en lugar de variables simples en Android?",
    options: [
      "Reduce el tamaño de la aplicación",
      "Permite observar cambios de datos y actualizar UI automáticamente",
      "Elimina la necesidad de cualquier patrón arquitectónico",
      "Aumenta directamente la velocidad de procesamiento"
    ],
    correctAnswer: 1,
  },
  {
    question: "106. ¿Cuál es el propósito de usar un RecyclerView en lugar de un ListView en Android?",
    options: [
      "RecyclerView ocupa menos memoria de pantalla",
      "RecyclerView ofrece mejor rendimiento reutilizando vistas, mayor flexibilidad y comportamiento predecible",
      "ListView permite más tipos de datos simultáneamente",
      "RecyclerView elimina la necesidad de un adaptador"
    ],
    correctAnswer: 1,
  }
];

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export default function SGESimulacro2Quiz() {
  const [started, setStarted] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [incorrectCount, setIncorrectCount] = useState(0)
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([])
  const [finished, setFinished] = useState(false)

  const startQuiz = () => {
    setShuffledQuestions(shuffleArray(questions))
    setStarted(true)
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setCorrectCount(0)
    setIncorrectCount(0)
    setFinished(false)
  }

  const handleAnswerClick = (answerIndex: number) => {
    if (showFeedback) return

    setSelectedAnswer(answerIndex)
    setShowFeedback(true)

    if (answerIndex === shuffledQuestions[currentQuestionIndex].correctAnswer) {
      setCorrectCount(correctCount + 1)
    } else {
      setIncorrectCount(incorrectCount + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    } else {
      setFinished(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setSelectedAnswer(null)
      setShowFeedback(false)
    }
  }

  if (!started) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-lg p-8 bg-card border-border">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold">
              <span className="text-foreground">Sistemas de Gestion Empresarial</span>
            </h1>
            <h2 className="text-xl text-muted-foreground">Test Extra II</h2>
            <p className="text-muted-foreground text-lg">ERP, CRM y sistemas empresariales</p>

            <div className="space-y-4 text-left py-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">{questions.length} Preguntas</p>
                  <p className="text-sm text-muted-foreground">Todos los conceptos clave</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Preguntas Aleatorizadas</p>
                  <p className="text-sm text-muted-foreground">Cada sesion es diferente</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Retroalimentacion Inmediata</p>
                  <p className="text-sm text-muted-foreground">Aprende mientras practicas</p>
                </div>
              </div>
            </div>

            <Button
              onClick={startQuiz}
              size="lg"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold"
            >
              Comenzar Quiz
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  if (finished) {
    const finalScore = correctCount - (incorrectCount * 0.25)
    const percentage = Math.round((finalScore / shuffledQuestions.length) * 100)
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-lg p-8 bg-card border-border">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Quiz Completado</h2>
            <div className="py-8">
              <div className="text-6xl font-bold text-amber-500 mb-2">{Math.max(0, percentage)}%</div>
              <p className="text-xl text-muted-foreground">
                Puntuacion final: {finalScore.toFixed(2)} de {shuffledQuestions.length}
              </p>
            </div>

            <div className="space-y-2 text-left bg-muted/50 p-4 rounded-lg">
              <p className="text-foreground flex justify-between">
                <span>Respuestas correctas:</span>
                <span className="text-green-500 font-semibold">{correctCount}</span>
              </p>
              <p className="text-foreground flex justify-between">
                <span>Respuestas incorrectas:</span>
                <span className="text-red-500 font-semibold">{incorrectCount}</span>
              </p>
              <p className="text-foreground flex justify-between border-t border-border pt-2 mt-2">
                <span>Penalizacion (x0.25):</span>
                <span className="text-red-500 font-semibold">-{(incorrectCount * 0.25).toFixed(2)}</span>
              </p>
            </div>

            <div className="space-y-2">
              {percentage >= 90 && <p className="text-lg text-foreground">Excelente. Dominas SGE.</p>}
              {percentage >= 70 && percentage < 90 && (
                <p className="text-lg text-foreground">Muy bien. Buen conocimiento.</p>
              )}
              {percentage >= 50 && percentage < 70 && (
                <p className="text-lg text-foreground">Bien hecho. Sigue practicando.</p>
              )}
              {percentage < 50 && <p className="text-lg text-foreground">Sigue aprendiendo. Tu puedes.</p>}
            </div>

            <div className="space-y-3">
              <Button
                onClick={startQuiz}
                size="lg"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold"
              >
                Intentar de Nuevo
              </Button>
              <Link href="/" className="block">
                <Button variant="outline" size="lg" className="w-full bg-transparent">
                  Volver al Inicio
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex]
  const answeredCount = currentQuestionIndex + (showFeedback ? 1 : 0)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-border">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver
        </Link>
        <div className="text-sm text-muted-foreground">
          Pregunta {currentQuestionIndex + 1} de {shuffledQuestions.length}{" "}
          <span className="text-amber-500">{answeredCount} respondidas</span>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl p-8 bg-card border-border">
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold text-foreground text-balance flex-1">{currentQuestion.question}</h2>
              <span className="text-sm text-muted-foreground ml-4">
                {currentQuestionIndex + 1}/{shuffledQuestions.length}
              </span>
            </div>

            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index
                const isCorrect = index === currentQuestion.correctAnswer
                const showCorrect = showFeedback && isCorrect
                const showIncorrect = showFeedback && isSelected && !isCorrect

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    disabled={showFeedback}
                    className={`
                      w-full text-left p-4 rounded-lg border-2 transition-all
                      ${!showFeedback && "hover:border-amber-500 hover:bg-accent cursor-pointer"}
                      ${showFeedback && "cursor-not-allowed"}
                      ${isSelected && !showFeedback && "border-amber-500 bg-accent"}
                      ${showCorrect && "border-green-500 bg-green-500/10"}
                      ${showIncorrect && "border-red-500 bg-red-500/10"}
                      ${!isSelected && !showCorrect && !showIncorrect && "border-border bg-card"}
                    `}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-foreground font-medium">{option}</span>
                      {showCorrect && <Check className="w-5 h-5 text-green-500 shrink-0" />}
                      {showIncorrect && <X className="w-5 h-5 text-red-500 shrink-0" />}
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="flex gap-3 pt-4 border-t border-border">
              <Button
                onClick={handlePrevious}
                variant="outline"
                className="flex-1"
                disabled={currentQuestionIndex === 0}
              >
                Anterior
              </Button>
              <Button
                onClick={handleNext}
                className="flex-1 bg-amber-500 hover:bg-amber-600 text-white"
                disabled={!showFeedback}
              >
                {currentQuestionIndex < shuffledQuestions.length - 1 ? "Siguiente" : "Ver Resultados"}
              </Button>
            </div>
          </div>
        </Card>
      </div>

      <div className="p-4">
        <div className="h-2 bg-muted rounded-full overflow-hidden max-w-2xl mx-auto">
          <div
            className="h-full bg-amber-500 transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
