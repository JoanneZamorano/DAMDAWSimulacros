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
    question: "1. ¿Cuál es la tecnología recomendada para desarrollar aplicaciones de escritorio multiplataforma en Java?",
    options: ["React Native", "JavaFX", ".NET MAUI", "Flutter"],
    correctAnswer: 1,
  },
  {
    question: "2. ¿Qué framework de desarrollo multiplataforma está basado en el lenguaje Dart?",
    options: ["React", "Flutter", "JavaFX", ".NET"],
    correctAnswer: 1,
  },
  {
    question: "3. ¿Qué capa de la arquitectura es responsable de gestionar la persistencia de datos en una aplicación?",
    options: ["Presentación (GUI)", "Lógica de negocio (Usuario)", "Capa de datos y servicios", "Sistema de eventos"],
    correctAnswer: 2,
  },
  {
    question: "4. ¿Cuál de los siguientes elementos es fundamental para reducir la carga cognitiva en la interfaz de usuario?",
    options: ["La selección adecuada de paletas de color", "El uso de un backend potente", "Una jerarquía visual clara y consistente", "La cantidad de líneas de código"],
    correctAnswer: 2,
  },
  {
    question: "5. En JavaFX con FXML, ¿qué representa el atributo fx:id?",
    options: ["Un identificador único para referenciar el componente desde código Java", "Una definición de estilos CSS", "Un tipo de evento del sistema", "Una etiqueta de error de compilación"],
    correctAnswer: 0,
  },
  {
    question: "6. ¿Qué factor contribuye significativamente a acelerar el proceso de prototipado en desarrollo de interfaces?",
    options: ["El uso de editores visuales (WYSIWYG)", "La escritura manual de todo el código", "La configuración del backend", "El proceso de debugging"],
    correctAnswer: 0,
  },
  {
    question: "7. ¿Qué herramienta oficial proporciona Oracle para diseñar interfaces visuales en JavaFX?",
    options: ["Blender", "Scene Builder", "Photoshop", "Excel"],
    correctAnswer: 1,
  },
  {
    question: "8. ¿Qué principio de diseño se representa mediante el acrónimo WYSIWYG?",
    options: ["Lo que ves es lo que obtienes (visualización en tiempo real de cambios)", "Un framework de desarrollo backend", "Una metodología de código limpio", "Un lenguaje de programación"],
    correctAnswer: 0,
  },
  {
    question: "9. ¿Cuál de las siguientes afirmaciones sobre los editores visuales modernos (como Scene Builder) es INCORRECTA?",
    options: ["Generan código desordenado e imposible de mantener", "Mejoran la productividad del desarrollo", "Permiten separar diseño de lógica", "Facilitan el prototipado rápido"],
    correctAnswer: 0,
  },
  {
    question: "10. ¿En qué formato de archivo se definen las interfaces declarativas en JavaFX?",
    options: ["JSON", "FXML (XML específico de JavaFX)", "CSS", "YAML"],
    correctAnswer: 1,
  },
  {
    question: "11. ¿Qué aspecto de la interfaz define el lenguaje FXML en una aplicación JavaFX?",
    options: ["La lógica de negocio", "La estructura visual y los componentes", "La configuración de la base de datos", "Los mecanismos de seguridad"],
    correctAnswer: 1,
  },
  {
    question: "12. ¿Cuál es la principal ventaja de separar la definición visual (FXML) de la lógica de negocio (Java)?",
    options: ["Aumenta la complejidad del proyecto", "Permite mejor mantenibilidad y reutilización del código", "Reduce el rendimiento de la aplicación", "Genera más errores en tiempo de ejecución"],
    correctAnswer: 1,
  },
  {
    question: "13. ¿En qué directorio de Android se almacenan los archivos de definición de layouts?",
    options: ["res/java", "src/layout", "res/layout", "res/xml"],
    correctAnswer: 2,
  },
  {
    question: "14. ¿Cuál es la clase base de la que heredan la mayoría de componentes gráficos en JavaFX?",
    options: ["Object", "Stage", "Control", "Node"],
    correctAnswer: 3,
  },
  {
    question: "15. En JavaFX, cuando se utiliza FXML para definir la interfaz y una clase Java como controlador asociado mediante `fx:controller`, ¿qué patrón de diseño se aplica principalmente para separar la vista de la lógica de presentación?",
    options: ["Arquitectura monolítica en capas", "Modelo-Vista-Controlador (MVC)", "Programación orientada a procedimientos", "Arquitectura de microservicios"],
    correctAnswer: 1,
  },
  {
    question: "16. ¿Cuál es una ventaja principal de reutilizar componentes en desarrollo de interfaces?",
    options: ["Incrementar la complejidad del código", "Aplicar soluciones en diferentes contextos y proyectos", "Reducir la capacidad de mantenimiento", "Aumentar la cantidad de bugs potenciales"],
    correctAnswer: 1,
  },
  {
    question: "17. En un componente personalizable como LikeButton, ¿cuál de estos atributos es una propiedad estructural del componente?",
    options: ["Nombre", "Valor de likes", "Estado de interacción", "Identificador de usuario"],
    correctAnswer: 0,
  },
  {
    question: "18. ¿Qué beneficio se obtiene al separar la presentación visual de la lógica funcional en una interfaz?",
    options: ["Menor precisión en el renderizado", "Mayor flexibilidad y control sobre la apariencia", "Reducción de la capacidad interactiva", "Disminución de opciones de personalización"],
    correctAnswer: 1,
  },
  {
    question: "19. ¿Cuál de estos aspectos NO constituye un pilar de la usabilidad en una aplicación?",
    options: ["Satisfacción del usuario", "Eficiencia en la realización de tareas", "Optimización del algoritmo de cifrado", "Efectividad al alcanzar objetivos"],
    correctAnswer: 2,
  },
  {
    question: "20. ¿Qué principio fundamental guía el diseño minimalista en interfaces?",
    options: ["Incluir todos los elementos técnicos disponibles", "Eliminar únicamente elementos redundantes o innecesarios", "Ampliar la paleta de colores para mayor atracción", "Multiplicar los controles y opciones visibles"],
    correctAnswer: 1,
  },
  {
    question: "21. ¿Qué característica de una interfaz favorece que el usuario comprenda su estructura y funcionalidad visualmente?",
    options: ["La presencia de animaciones continuas", "Una jerarquía clara y organización visual lógica de contenidos", "El uso indiscriminado de tipografías variadas", "La abundancia de elementos decorativos"],
    correctAnswer: 1,
  },
  {
    question: "22. El principal objetivo de aplicar simplicidad en el diseño de una interfaz es:",
    options: ["Disminuir el número de desarrolladores necesarios", "Minimizar el esfuerzo cognitivo requerido al usuario", "Incrementar la cantidad de funcionalidades visibles", "Aumentar la cantidad de pantallas del aplicativo"],
    correctAnswer: 1,
  },
  {
    question: "23. ¿Cuál es la consecuencia principal de sobrecargar una interfaz con demasiados elementos visuales?",
    options: ["Incremento de la velocidad de respuesta", "Aumento de la confusión y dificultad para navegar", "Mejora automática de la experiencia de usuario", "Reducción de la carga de procesamiento"],
    correctAnswer: 1,
  },
  {
    question: "24. ¿Cuál es la herramienta estándar más utilizada en ecosistema Java para generación de reportes profesionales?",
    options: ["Maven", "JasperReports", "Gradle", "Jenkins"],
    correctAnswer: 1,
  },
  {
    question: "25. ¿Qué tipo de archivo representa una plantilla de informe en sistemas de reportes Java?",
    options: ["Un archivo con extensión JRXML", "Un archivo ejecutable compilado", "Un documento de base de datos relacional", "Un script de configuración del servidor"],
    correctAnswer: 0,
  },
  {
    question: "26. ¿Cuál es el aporte primordial de la documentación en un proyecto de software?",
    options: ["Facilitar comunicación efectiva entre equipos y partes interesadas", "Únicamente describir aspectos visuales", "Aumentar la velocidad de compilación", "Incrementar el consumo de memoria en tiempo de ejecución"],
    correctAnswer: 0,
  },
  {
    question: "27. ¿A quién está dirigida principalmente la documentación de usuario en una aplicación software?",
    options: ["Exclusivamente a desarrolladores internos", "A los usuarios finales que interactúan con el sistema", "Solo a administradores de base de datos", "Únicamente a arquitectos de sistemas"],
    correctAnswer: 1,
  },
  {
    question: "28. ¿Cuál de los siguientes elementos NO forma parte de los componentes típicos de una interfaz gráfica de usuario (GUI)?",
    options: ["Campos de entrada de texto", "Estructuras de datos y algoritmos de procesamiento", "Menús desplegables", "Botones de acción"],
    correctAnswer: 1,
  },
  {
    question: "29. ¿Qué framework recomienda Oracle actualmente para desarrollar interfaces gráficas modernas en aplicaciones Java de escritorio?",
    options: ["Swing", "JavaFX", "Flutter", "React Native"],
    correctAnswer: 1,
  },
  {
    question: "30. ¿Qué lenguaje de programación es base del framework .NET MAUI?",
    options: ["Java", "Dart", "C#", "JavaScript"],
    correctAnswer: 2,
  },
  {
    question: "31. ¿Qué lenguaje de tipado estático está asociado al framework Flutter?",
    options: ["Python", "Dart", "Go", "Rust"],
    correctAnswer: 1,
  },
  {
    question: "32. ¿Cuál es la principal funcionalidad de los editores visuales en el desarrollo de interfaces?",
    options: ["Compilar automáticamente el código", "Permitir la construcción de interfaces mediante arrastrar y soltar componentes", "Optimizar el rendimiento de la CPU", "Gestionar bases de datos relacionales"],
    correctAnswer: 1,
  },
  {
    question: "33. ¿Qué formato de archivo XML específico genera el framework JavaFx para definir interfaces?",
    options: ["SVG", "FXML", "XAML", "XSD"],
    correctAnswer: 1,
  },
  {
    question: "34. En Android, ¿en qué formato se guardan los archivos de layout ubicados en la carpeta res/layout/ para definir la interfaz de usuario?",
    options: ["Archivos .fxml (JavaFX XML)", "Archivos .xaml (WPF/Xamarin XML)", "Archivos .xml con etiquetas propias de Android", "Archivos .json con estructura de componentes"],
    correctAnswer: 2,
  },
  {
    question: "35. ¿Qué beneficio principal se obtiene al mantener la lógica de negocio separada del código de presentación?",
    options: ["Reducción del número de líneas de código", "Aumento automático del rendimiento", "Facilita el mantenimiento y reutilización del código", "Eliminación de la necesidad de testing"],
    correctAnswer: 2,
  },
  {
    question: "36. ¿Cuál es el propósito del componente FXMLLoader dentro del ecosistema JavaFx?",
    options: ["Verificar errores de sintaxis en Java", "Leer y parsear archivos FXML para instanciar la interfaz", "Compilar código CSS a formato binario", "Gestionar la persistencia de datos en base de datos"],
    correctAnswer: 1,
  },
  {
    question: "37. ¿Qué representa la estructura jerárquica de elementos en un documento XML de interfaz?",
    options: ["La organización de tablas en una base de datos", "El flujo de control lógico del programa", "La jerarquía visual y relacional de componentes en la interfaz", "Las políticas de seguridad de la aplicación"],
    correctAnswer: 2,
  },
  {
    question: "38. ¿Cuál es la ventaja principal de utilizar una funcionalidad de previsualización en un IDE para desarrollo de interfaces?",
    options: ["Aumentar la velocidad de compilación final", "Visualizar la interfaz sin necesidad de compilar y ejecutar la aplicación completa", "Ejecutar automáticamente todos los métodos de negocio", "Eliminar la necesidad de testing manual"],
    correctAnswer: 1,
  },
  {
    question: "39. En una aplicación similar a Netflix, ¿qué aspecto de la interfaz describe un documento XML?",
    options: ["Los algoritmos de recomendación de contenido", "La definición de la estructura de carruseles y disposición de elementos visuales", "Las credenciales de autenticación de usuarios", "Los protocolos de streaming de vídeo"],
    correctAnswer: 1,
  },
  {
    question: "40. ¿Qué contenido se empaqueta dentro de un archivo JAR en una aplicación Java?",
    options: ["Únicamente código fuente no compilado", "Solo archivos de imágenes y multimedia", "Clases compiladas junto con recursos necesarios para la ejecución", "Exclusivamente hojas de estilos CSS"],
    correctAnswer: 2,
  },
  {
    question: "41. ¿Qué herramientas se utilizan habitualmente para gestionar las dependencias externas en proyectos Java?",
    options: ["Docker y Kubernetes", "Maven y Gradle", "Git y GitHub", "Apache Hadoop"],
    correctAnswer: 1,
  },
  {
    question: "42. ¿Cuál es una de las funcionalidades clave que proporciona Maven en el ciclo de vida del desarrollo?",
    options: ["Diseñar interfaces gráficas en tiempo real", "Administrar automáticamente todas las dependencias del proyecto", "Implementar algoritmos de machine learning", "Optimizar consultas SQL"],
    correctAnswer: 1,
  },
  {
    question: "43. ¿Qué ventajas proporciona el uso de librerías internas personalizadas en un proyecto de desarrollo de interfaces?",
    options: ["Incrementan la cantidad de errores en tiempo de compilación", "Generan inconsistencias visuales en la aplicación", "Mejoran la eficiencia y garantizan coherencia en componentes reutilizables", "Reducen la capacidad de procesamiento de la máquina virtual"],
    correctAnswer: 2,
  },
  {
    question: "44. ¿Cuál es el propósito principal de mantener la visibilidad del estado en una interfaz?",
    options: ["Hacer que la aplicación sea más atractiva visualmente", "Permitir que el usuario comprenda qué está ocurriendo en cada momento", "Minimizar el número de elementos en pantalla", "Implementar una paleta de colores específica"],
    correctAnswer: 1,
  },
  {
    question: "45. ¿Qué se entiende por correspondencia con el mundo real en el diseño de interfaces?",
    options: ["Implementar efectos visuales complejos y realistas", "Utilizar terminología y metáforas que el usuario comprenda de su experiencia cotidiana", "Crear animaciones que imiten movimientos físicos reales", "Integrar tecnologías de inteligencia artificial avanzada"],
    correctAnswer: 1,
  },
  {
    question: "46. ¿Qué principio de diseño permite que el usuario corrija sus acciones sin consecuencias permanentes?",
    options: ["Consistencia en los patrones de diseño", "Minimalismo en la presentación de información", "Control y libertad del usuario sobre sus acciones", "Prevención de errores mediante validaciones"],
    correctAnswer: 2,
  },
  {
    question: "47. ¿Cómo se define la consistencia en el contexto del desarrollo de interfaces?",
    options: ["La aplicación de una paleta de colores uniforme en toda la aplicación", "La replicación sistemática de patrones de diseño y comportamiento en elementos similares", "El uso controlado de animaciones y transiciones visuales", "La estandarización del código fuente y estructura de archivos"],
    correctAnswer: 1,
  },
  {
    question: "48. ¿Cuál es la consecuencia para la experiencia del usuario cuando falta consistencia en el diseño?",
    options: ["Mejora notable de la velocidad de interacción", "El usuario debe reaprender cómo funcionan elementos similares en diferentes contextos", "Aumento automático de la claridad visual de la interfaz", "Reducción de la cantidad de errores de entrada"],
    correctAnswer: 1,
  },
  {
    question: "49. ¿Cuál es la función principal de un design system en empresas tecnológicas modernas?",
    options: ["Almacenar y gestionar bases de datos de la aplicación", "Proporcionar un conjunto estandarizado de componentes, patrones y directrices de diseño reutilizables", "Optimizar el rendimiento de las consultas SQL y APIs", "Documentar exclusivamente la arquitectura técnica del backend"],
    correctAnswer: 1,
  },
  {
    question: "50. ¿Qué aspecto fundamental separa JasperReports en su arquitectura?",
    options: ["La separación entre el servidor de aplicaciones y la base de datos", "La distinción entre lenguajes de programación backend y frontend", "La separación de la estructura visual del informe respecto a los datos que lo alimentan", "La independencia entre la interfaz de usuario y las APIs externas"],
    correctAnswer: 2,
  },
  {
    question: "51. En un sistema de reporting como JasperReports, ¿qué componente actúa como contenedor principal que organiza bandas, campos y elementos visuales definiendo el layout completo del informe?",
    options: ["El conjunto de consultas SQL que alimentan los datos", "La plantilla o template del informe", "Los eventos y controladores de interacción", "Las hojas de estilo externas del proyecto"],
    correctAnswer: 1,
  },
  {
    question: "52. ¿De dónde obtiene principalmente un informe dinámico sus fuentes de datos?",
    options: ["De estilos CSS predefinidos", "De controladores, conexiones a bases de datos u otros orígenes de información", "De animaciones y efectos visuales", "De funciones JavaScript del cliente"],
    correctAnswer: 1,
  },
  {
    question: "53. ¿Qué características debe poseer la documentación dirigida a usuarios finales?",
    options: ["Ser exhaustivamente larga y contener todos los detalles técnicos implementados", "Utilizar únicamente terminología de programación avanzada", "Ser clara, concisa, y estar centrada en tareas prácticas del usuario", "Limitarse a manuales impresos distribuidos en formato papel"],
    correctAnswer: 2,
  },
  {
    question: "54. ¿Cuál es el propósito de implementar ayuda contextual integrada en una aplicación?",
    options: ["Reemplazar completamente los manuales técnicos impresos", "Proporcionar información relevante y específica en el contexto exacto donde el usuario la necesita", "Reducir exclusivamente la carga de la CPU durante la ejecución", "Asignar funciones adicionales a cada elemento visible"],
    correctAnswer: 1,
  },
  {
    question: "55. ¿Qué se consigue mediante la implementación de documentación integral en una aplicación?",
    options: ["Aumentar innecesariamente el consumo de memoria del sistema", "Reducir significativamente la curva de aprendizaje de los usuarios", "Generar más errores en la compilación del código", "Limitar exclusivamente el acceso a funcionalidades avanzadas"],
    correctAnswer: 1,
  },
  {
    question: "56. ¿Qué tipo de información debe incluir la documentación técnica de una API?",
    options: ["Instrucciones de instalación dirigidas a usuarios no técnicos", "Descripción de endpoints, parámetros, formatos de respuesta y ejemplos de uso", "Códigos CSS para personalizar interfaces visuales", "Guía de configuración del servidor de bases de datos"],
    correctAnswer: 1,
  },
  {
    question: "57. ¿Cuál es la tecnología de escritorio recomendada para desarrollar interfaces gráficas en Java?",
    options: ["JavaFX", "Swing", "AWT", "SWT"],
    correctAnswer: 0,
  },
  {
    question: "58. ¿Qué framework de interfaz gráfica utiliza el lenguaje Dart como base de desarrollo?",
    options: ["Flutter", "React Native", "Xamarin", "Ionic"],
    correctAnswer: 0,
  },
  {
    question: "59. En JavaFX, ¿qué formato de archivo específico permite definir interfaces de usuario de forma declarativa y es compatible con herramientas como Scene Builder?",
    options: ["FXML (.fxml)", "JSX (.jsx)", "XAML (.xaml)", "XHTML (.xhtml)"],
    correctAnswer: 0,
  },
  {
    question: "60. ¿Qué atributo en FXML se utiliza para identificar de manera única un nodo y permitir su referencia desde el código controlador?",
    options: ["fx:id", "fx:name", "fx:ref", "fx:controller"],
    correctAnswer: 0,
  },
]

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
            <h2 className="text-xl text-muted-foreground">Test Extra 1</h2>
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
