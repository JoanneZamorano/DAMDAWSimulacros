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
    question: "61. ¿Cuál es la herramienta visual de diseño oficial que se utiliza para crear interfaces FXML en JavaFX?",
    options: ["JavaFX Scene Builder", "Eclipse IDE", "NetBeans Designer", "IntelliJ Form Designer"],
    correctAnswer: 0,
  },
  {
    question: "62. ¿Qué ventaja principal proporciona separar la definición de la interfaz (FXML) de la lógica de negocio (Java)?",
    options: ["Facilita el mantenimiento y permite que diseñadores y desarrolladores trabajen en paralelo", "Reduce el tamaño del ejecutable final", "Aumenta la velocidad de ejecución", "Permite usar más colores en la interfaz"],
    correctAnswer: 0,
  },
  {
    question: "63. ¿Cuál es la clase base de la que heredan todos los controles en JavaFX?",
    options: ["Control", "Node", "Region", "Parent"],
    correctAnswer: 0,
  },
  {
    question: "64. ¿Qué concepto de la ISO 9241 define la capacidad de un producto para ser utilizado por usuarios específicos a fin de alcanzar objetivos determinados con efectividad, eficiencia y satisfacción?",
    options: ["Usabilidad", "Accesibilidad", "Compatibilidad", "Rendimiento"],
    correctAnswer: 0,
  },
  {
    question: "65. ¿Cuál de los siguientes aspectos NO forma parte de los criterios de usabilidad en el diseño de interfaces?",
    options: ["La capacidad de procesamiento del servidor de la aplicación", "La facilidad de aprendizaje de la interfaz", "La efectividad al lograr los objetivos del usuario", "La satisfacción del usuario con el producto"],
    correctAnswer: 0,
  },
  {
    question: "66. ¿Qué patrón de diseño de interfaces reduce la carga cognitiva mostrando únicamente la información relevante en cada momento de la interacción?",
    options: ["Progressive disclosure (divulgación progresiva)", "Carga masiva de todos los datos disponibles simultáneamente", "Uso de fuentes pequeñas para concentrar más información en pantalla", "Ocultación permanente de todos los menús de navegación"],
    correctAnswer: 0,
  },
  {
    question: "67. ¿Qué ventaja técnica proporciona el desacoplamiento de la apariencia visual de la lógica de funcionalidad en una aplicación?",
    options: ["Permite cambiar temas y estilos sin modificar el código de lógica", "Aumenta automáticamente la velocidad de la aplicación", "Reduce el consumo de memoria a la mitad", "Permite usar menos líneas de código"],
    correctAnswer: 0,
  },
  {
    question: "68. En JavaFX, ¿qué técnica permite crear un control personalizado extendiéndolo de Region o Control para usarlo en múltiples pantallas sin duplicar código?",
    options: ["Componentes reutilizables personalizados", "Herencia múltiple de interfaces", "Polimorfismo paramétrico", "Inyección de dependencias"],
    correctAnswer: 0,
  },
  {
    question: "69. ¿En qué ubicación se almacenan tipicamente los archivos de layout en una aplicación Android?",
    options: ["En la carpeta res/layout", "En la carpeta src/main", "En la carpeta assets", "En la carpeta drawable"],
    correctAnswer: 0,
  },
  {
    question: "70. ¿Cuál de las siguientes es una característica que acelera significativamente el prototipado de interfaces en JavaFX?",
    options: ["El uso de herramientas visuales como Scene Builder combinadas con FXML", "Escribir todo el código de interfaz manualmente", "Usar únicamente estilos inline en cada componente", "Compilar la aplicación después de cada cambio"],
    correctAnswer: 0,
  },
  {
    question: "71. ¿Qué mecanismo es más adecuado para persistir las preferencias de interfaz de una aplicación JavaFX entre diferentes sesiones de usuario?",
    options: ["Archivos Properties o JSON almacenados en el sistema de ficheros", "Variables estáticas declaradas en memoria durante la ejecución", "Archivos temporales generados automáticamente por el sistema operativo", "Cookies o caché del navegador web"],
    correctAnswer: 0,
  },
  {
    question: "72. ¿Cuál es la tecnología moderna y recomendada actualmente para desarrollar interfaces gráficas de escritorio en Java?",
    options: ["JavaFX", "Swing", "AWT", "Spring MVC"],
    correctAnswer: 0,
  },
  {
    question: "73. ¿Qué lenguaje de programación utiliza el framework Flutter para el desarrollo de aplicaciones multiplataforma?",
    options: ["Dart", "Kotlin", "Swift", "TypeScript"],
    correctAnswer: 0,
  },
  {
    question: "74. ¿Cuál es el formato de archivo que utiliza JavaFX para definir interfaces de usuario de manera declarativa?",
    options: ["FXML", "JSON", "YAML", "Properties"],
    correctAnswer: 0,
  },
  {
    question: "75. ¿Cuál es la herramienta oficial que proporciona JavaFX para diseñar interfaces visuales de manera gráfica (WYSIWYG)?",
    options: ["Scene Builder", "NetBeans Designer", "Eclipse Visual Editor", "IntelliJ UI Designer"],
    correctAnswer: 0,
  },
  {
    question: "76. ¿Qué atributo en FXML se utiliza para identificar de forma única un componente de la interfaz?",
    options: ["fx:id", "id", "uid", "ref"],
    correctAnswer: 0,
  },
  {
    question: "77. ¿Cuál es una ventaja principal de separar el diseño de la interfaz de la lógica de negocio?",
    options: ["Facilita el mantenimiento y permite que diseñadores y programadores trabajen independientemente", "Reduce el tamaño del archivo ejecutable", "Aumenta la velocidad de ejecución de la aplicación", "Elimina la necesidad de probadores de calidad"],
    correctAnswer: 0,
  },
  {
    question: "78. Según la norma ISO 9241, ¿qué atributo de usabilidad (conocido en inglés como *learnability*) mide la facilidad con que un usuario nuevo aprende a utilizar una interfaz sin entrenamiento previo?",
    options: ["Capacidad de aprendizaje", "Accesibilidad", "Consistencia", "Eficiencia"],
    correctAnswer: 0,
  },
  {
    question: "79. ¿Cuál es la clase base de la cual heredan la mayoría de controles visuales en JavaFX?",
    options: ["Control", "Node", "Region", "Parent"],
    correctAnswer: 0,
  },
  {
    question: "80. ¿Qué patrón de diseño se implementa cuando se utiliza un archivo FXML junto con una clase controladora?",
    options: ["Model-View-Controller", "Singleton", "Factory", "Observer"],
    correctAnswer: 0,
  },
  {
    question: "81. ¿Cuál es la principal ventaja de utilizar propiedades vinculables (binding properties) en JavaFX?",
    options: ["Sincronizar automáticamente datos entre componentes UI y modelos de datos", "Reducir el uso de memoria en la aplicación", "Acelerar la compilación del código", "Eliminar la necesidad de escribir getters y setters"],
    correctAnswer: 0,
  },
  {
    question: "82. ¿En qué ubicación del proyecto Android se definen típicamente los archivos XML de layouts?",
    options: ["En la carpeta res/layout", "En la carpeta src/main/java", "En la carpeta assets", "En la carpeta drawable"],
    correctAnswer: 0,
  },
  {
    question: "83. ¿Qué ventaja proporciona desacoplar la apariencia visual de la lógica funcional en una aplicación?",
    options: ["Permite cambiar el tema o estilo sin afectar el funcionamiento de la aplicación", "Reduce automáticamente el consumo de batería", "Aumenta la resolución de la pantalla", "Elimina la necesidad de pruebas unitarias"],
    correctAnswer: 0,
  },
  {
    question: "84. ¿Cuál de los siguientes NO es un aspecto considerado en la definición ISO 9241-11 de usabilidad?",
    options: ["La velocidad de descarga de recursos externos", "La efectividad en la realización de tareas", "La satisfacción del usuario", "La eficiencia en el uso"],
    correctAnswer: 0,
  },
  {
    question: "85. ¿Cuál es el propósito principal de utilizar un enfoque visual WYSIWYG en el diseño de interfaces?",
    options: ["Acelerar el prototipado y permitir visualizar la interfaz en tiempo real sin escribir código", "Garantizar que la aplicación funcione sin errores", "Reducir el tamaño final de la aplicación", "Eliminar completamente la necesidad de programadores Java"],
    correctAnswer: 0,
  },
  {
    question: "86. ¿Qué beneficio principal aporta la separación de responsabilidades al dividir la interfaz y la lógica en archivos distintos (como FXML y Java)?",
    options: ["Reduce la complejidad del código que debe revisar el desarrollador al separar responsabilidades", "Disminuye la cantidad total de líneas de código necesarias", "Mejora el tiempo de ejecución de la aplicación", "Reduce el espacio en disco ocupado por el proyecto"],
    correctAnswer: 0,
  },
  {
    question: "87. ¿Cuál es la tecnología de referencia para desarrollar interfaces gráficas de escritorio en Java?",
    options: ["Swing", "JavaFX", "AWT", "Android UI"],
    correctAnswer: 1,
  },
  {
    question: "88. ¿Qué lenguaje de marcado utiliza JavaFX para definir interfaces de usuario de forma declarativa?",
    options: ["HTML", "XML", "FXML", "JSON"],
    correctAnswer: 2,
  },
  {
    question: "89. ¿Cuál es la herramienta gráfica oficial de JavaFX que permite diseño WYSIWYG de interfaces?",
    options: ["NetBeans IDE", "Scene Builder", "IntelliJ IDEA", "Android Studio"],
    correctAnswer: 1,
  },
  {
    question: "90. En JavaFX, ¿qué atributo se utiliza para identificar de forma única un componente en un archivo FXML?",
    options: ["id", "fx:id", "name", "identifier"],
    correctAnswer: 1,
  },
  {
    question: "91. ¿Cuál es la clase base de la que heredan todos los controles en JavaFX?",
    options: ["Node", "Control", "Component", "Widget"],
    correctAnswer: 1,
  },
  {
    question: "92. ¿Qué ventaja principal proporciona separar la definición de la interfaz (FXML) de la lógica de negocio (Java)?",
    options: ["Reduce el tamaño de los archivos de código fuente", "Permite trabajo simultáneo de diseñadores y desarrolladores sin conflictos", "Mejora automáticamente el rendimiento de la aplicación", "Elimina la necesidad de compilar el código Java"],
    correctAnswer: 1,
  },
  {
    question: "93. En el contexto de desarrollo de interfaces, ¿qué concepto se refiere a la facilidad con la que un usuario puede interactuar y utilizar una aplicación?",
    options: ["Accesibilidad", "Usabilidad", "Rendimiento", "Escalabilidad"],
    correctAnswer: 1,
  },
  {
    question: "94. ¿Qué ventaja principal aporta desacoplar la apariencia visual de la funcionalidad en una aplicación de escritorio?",
    options: ["Facilita la aplicación de diferentes estilos sin modificar la lógica de la aplicación", "Reduce automáticamente el uso de memoria", "Acelera la ejecución del código compilado", "Elimina la necesidad de pruebas unitarias"],
    correctAnswer: 0,
  },
  {
    question: "95. En JavaFX, ¿qué técnica permite encapsular un fragmento de interfaz gráfica con su lógica asociada para usarlo en múltiples pantallas sin duplicar código?",
    options: ["Implementar el patrón Singleton en el controlador principal", "Crear componentes personalizados mediante herencia de Control y FXML", "Aplicar el patrón Factory para instanciar ventanas", "Definir todos los estilos en un único archivo CSS global"],
    correctAnswer: 1,
  },
  {
    question: "96. ¿Qué estrategia de diseño de interfaces reduce la carga cognitiva del usuario?",
    options: ["Mostrar todos los controles disponibles en una única pantalla", "Utilizar íconos sin etiquetas de texto", "Agrupar funcionalidades relacionadas y mostrar solo opciones relevantes según el contexto", "Maximizar el número de colores en la interfaz"],
    correctAnswer: 2,
  },
  {
    question: "97. ¿Cuál de las siguientes no es una característica de la usabilidad según estándares internacionales?",
    options: ["Efectividad en el logro de objetivos", "Eficiencia en el uso de recursos", "Satisfacción del usuario", "Requisitos de hardware específicos del dispositivo"],
    correctAnswer: 3,
  },
  {
    question: "98. En desarrollo de interfaces, ¿cuál es el propósito principal de utilizar un enfoque WYSIWYG?",
    options: ["Facilitar el código a máquina para compilación más rápida", "Acelerar el prototipado y diseño visual de interfaces", "Reducir la cantidad de memoria requerida por la aplicación", "Aumentar automáticamente la velocidad de ejecución"],
    correctAnswer: 1,
  },
  {
    question: "99. ¿Cuál es el estructura general de un archivo FXML en JavaFX?",
    options: ["Etiquetas HTML con atributos JavaScript", "Jerarquía de elementos XML que representan componentes JavaFX", "Código Java compilado a bytecode", "Definición de estilos CSS puro"],
    correctAnswer: 1,
  },
  {
    question: "100. ¿Cuál de las siguientes afirmaciones sobre diseño de interfaces de usuario es CORRECTA (no un mito)?",
    options: ["Una interfaz visualmente atractiva garantiza por sí sola una buena usabilidad", "El diseño de interfaces solo importa en las fases finales del proyecto", "La usabilidad y la estética pueden trabajarse conjuntamente en el diseño moderno de interfaces", "Los usuarios siempre leen toda la documentación antes de usar una aplicación"],
    correctAnswer: 2,
  },
  {
    question: "101. En plataformas móviles como Android, ¿dónde se almacenan típicamente los archivos de definición de layouts?",
    options: ["En la carpeta src/main/java", "En la carpeta res/layout", "En la carpeta assets", "En la carpeta bin/release"],
    correctAnswer: 1,
  },
  {
    question: "102. ¿Cuál es la tecnología estándar de Java para desarrollar interfaces gráficas de aplicaciones de escritorio?",
    options: ["JavaFX", "Swing", "AWT", "Android SDK"],
    correctAnswer: 0,
  },
  {
    question: "103. ¿Qué lenguaje de programación utiliza el framework Flutter para el desarrollo de interfaces móviles?",
    options: ["Kotlin", "Dart", "Java", "Swift"],
    correctAnswer: 1,
  },
  {
    question: "104. ¿Cuál es la herramienta visual que proporciona Oracle para diseñar interfaces de usuario con JavaFX?",
    options: ["Scene Builder", "Android Studio", "NetBeans Designer", "Eclipse Visual Editor"],
    correctAnswer: 0,
  },
  {
    question: "105. ¿Qué tipo de formato utiliza JavaFX para definir interfaces de usuario de manera declarativa?",
    options: ["JSON", "YAML", "FXML", "Properties"],
    correctAnswer: 2,
  },
  {
    question: "106. ¿Cuál es el propósito principal del atributo fx:id en las definiciones FXML?",
    options: ["Definir el identificador único del archivo", "Asignar un identificador a un control para acceder a él desde el código Java", "Especificar el namespace de JavaFX", "Declarar variables locales en la interfaz"],
    correctAnswer: 1,
  },
  {
    question: "107. ¿En dónde se almacenan típicamente los archivos de definición de layouts en el desarrollo de aplicaciones Android?",
    options: ["En la carpeta /src", "En la carpeta /res/layout", "En la carpeta /app/java", "En la carpeta /drawable"],
    correctAnswer: 1,
  },
  {
    question: "108. ¿Cuál es la principal ventaja de separar el diseño de la interfaz de la lógica de aplicación?",
    options: ["Reduce el tamaño del archivo ejecutable", "Permite que diseñadores y programadores trabajen de forma independiente y facilita el mantenimiento", "Mejora automáticamente el rendimiento de la aplicación", "Elimina la necesidad de pruebas unitarias"],
    correctAnswer: 1,
  },
  {
    question: "109. En diseño de interfaces, ¿qué principio busca específicamente reducir la carga cognitiva mostrando solo la información necesaria en cada momento?",
    options: ["Minimalismo y densidad de información equilibrada", "Retroalimentación inmediata del sistema", "Consistencia en la navegación", "Accesibilidad universal"],
    correctAnswer: 0,
  },
  {
    question: "110. ¿Cuál es la clase raíz de la que hereda cualquier elemento de la jerarquía de escena (scene graph) en JavaFX, incluyendo controles, layouts y formas gráficas?",
    options: ["Component", "Node", "Control", "Widget"],
    correctAnswer: 1,
  },
  {
    question: "111. ¿Qué característica del paradigma WYSIWYG facilita el proceso de desarrollo de interfaces?",
    options: ["Permite escribir código más rápidamente", "Muestra el resultado visual en tiempo real mientras se diseña", "Reduce el consumo de memoria de la aplicación", "Aumenta la seguridad de la aplicación"],
    correctAnswer: 1,
  },
  {
    question: "112. ¿Qué mecanismo de JavaFX permite incluir y reutilizar archivos FXML dentro de otros archivos FXML para construir interfaces modulares?",
    options: ["La herencia múltiple entre controladores Java", "La directiva <fx:include> dentro de archivos FXML", "La implementación de interfaces Serializable", "Los métodos estáticos de la clase FXMLLoader"],
    correctAnswer: 1,
  },
  {
    question: "113. ¿Cuál es el principal beneficio de desacoplar la apariencia de un componente de su funcionalidad?",
    options: ["Permite cambiar el tema visual sin modificar la lógica del componente", "Reduce el número de líneas de código necesarias", "Mejora exclusivamente el rendimiento en tiempo de ejecución", "Elimina la necesidad de compilación"],
    correctAnswer: 0,
  },
  {
    question: "114. Según la norma ISO 9241, ¿cuál es la definición de usabilidad?",
    options: ["La velocidad de procesamiento de la aplicación", "El grado en que el producto puede ser utilizado por usuarios específicos para conseguir objetivos con efectividad, eficiencia y satisfacción", "La cantidad de colores y elementos visuales en la interfaz", "La capacidad de la aplicación de almacenar datos"],
    correctAnswer: 1,
  },
  {
    question: "115. ¿Qué aspecto NO forma parte de la evaluación de usabilidad de una interfaz?",
    options: ["La facilidad de aprendizaje de la interfaz", "El lenguaje de programación utilizado en el backend", "La capacidad del usuario de alcanzar sus objetivos", "La satisfacción percibida por el usuario"],
    correctAnswer: 1,
  },
  {
    question: "116. En una arquitectura de capas, ¿cuál es la responsabilidad principal de la capa de persistencia?",
    options: ["Procesar las acciones del usuario", "Almacenar y recuperar datos de la base de datos o sistemas de almacenamiento", "Presentar información al usuario", "Ejecutar animaciones visuales"],
    correctAnswer: 1,
  },
];

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export default function DesarrolloInterfacesSimulacro1Quiz() {
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
              <span className="text-foreground">Desarrollo de Interfaces</span>
            </h1>
            <h2 className="text-xl text-muted-foreground">Test Extra II</h2>
            <p className="text-muted-foreground text-lg">Interfaces de usuario y usabilidad</p>

            <div className="space-y-4 text-left py-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-pink-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">{questions.length} Preguntas</p>
                  <p className="text-sm text-muted-foreground">Todos los conceptos clave</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-pink-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Preguntas Aleatorizadas</p>
                  <p className="text-sm text-muted-foreground">Cada sesion es diferente</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-pink-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Retroalimentacion Inmediata</p>
                  <p className="text-sm text-muted-foreground">Aprende mientras practicas</p>
                </div>
              </div>
            </div>

            <Button
              onClick={startQuiz}
              size="lg"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold"
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
              <div className="text-6xl font-bold text-pink-500 mb-2">{Math.max(0, percentage)}%</div>
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
              {percentage >= 90 && <p className="text-lg text-foreground">Excelente. Dominas Desarrollo de Interfaces.</p>}
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
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold"
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
          <span className="text-pink-500">{answeredCount} respondidas</span>
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
                      ${!showFeedback && "hover:border-pink-500 hover:bg-accent cursor-pointer"}
                      ${showFeedback && "cursor-not-allowed"}
                      ${isSelected && !showFeedback && "border-pink-500 bg-accent"}
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
                className="flex-1 bg-pink-500 hover:bg-pink-600 text-white"
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
            className="h-full bg-pink-500 transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
