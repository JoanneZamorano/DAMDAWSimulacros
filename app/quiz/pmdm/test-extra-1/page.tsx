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
    question: "1. ¿Cuál es la función principal al diseñar la interfaz de usuario en una aplicación móvil?",
    options: [
      "Optimizar algoritmos de procesamiento",
      "Permitir que el usuario interactúe de forma intuitiva con la aplicación",
      "Aumentar la resolución de pantalla",
      "Minimizar el uso de memoria RAM"
    ],
    correctAnswer: 1,
  },
  {
    question: "2. ¿Cuál es la consecuencia negativa de una jerarquía visual deficiente en una interfaz móvil?",
    options: [
      "Aumenta la capacidad de procesamiento",
      "El usuario encuentra dificultad para identificar elementos prioritarios y comprender la estructura",
      "Reduce significativamente el consumo de batería",
      "Simplifica el ciclo de desarrollo"
    ],
    correctAnswer: 1,
  },
  {
    question: "3. ¿Cuál es la responsabilidad fundamental de un patrón Repository en arquitectura móvil?",
    options: [
      "Controlar la visualización de elementos UI",
      "Abstraer y centralizar el acceso a múltiples fuentes de datos",
      "Ejecutar animaciones y transiciones visuales",
      "Gestionar la navegación entre pantallas"
    ],
    correctAnswer: 1,
  },
  {
    question: "4. ¿Cuál es la ventaja más significativa de utilizar React Native para desarrollo multiplataforma?",
    options: [
      "Requiere código exclusivamente nativo en cada plataforma",
      "Permite reutilizar una única base de código para iOS y Android",
      "Elimina completamente los componentes nativos del sistema",
      "Ofrece mejor rendimiento que aplicaciones nativas puras"
    ],
    correctAnswer: 1,
  },
  {
    question: "5. ¿Cuál es la función del hook useState en React/React Native?",
    options: [
      "Ejecutar código una única vez al montar el componente",
      "Crear y gestionar variables de estado dentro del componente",
      "Conectar con APIs externas de forma automática",
      "Definir estilos y temas visuales"
    ],
    correctAnswer: 1,
  },
  {
    question: "6. ¿Cuál es el propósito principal de un prefab en Unity?",
    options: [
      "Ejecutar funciones de lógica de negocio",
      "Guardar configuraciones de estado entre escenas",
      "Almacenar y reutilizar objetos preconfigurados",
      "Compilar código C# a bytecode"
    ],
    correctAnswer: 2,
  },
  {
    question: "7. En el contexto de animaciones en aplicaciones móviles, ¿qué ventaja proporciona el uso de animaciones basadas en propiedades frente a animaciones basadas en fotogramas?",
    options: [
      "Mayor consumo de batería y mejor rendimiento en dispositivos antiguos",
      "Interpolación automática de valores intermedios y mejor optimización del hardware",
      "Imposibilidad de realizar animaciones complejas",
      "Reducción del código sin capacidad de personalización"
    ],
    correctAnswer: 1,
  },
  {
    question: "8. ¿Cuál es la principal diferencia entre el ciclo de vida de onCreate() y onStart() en una Activity de Android?",
    options: [
      "onCreate() se ejecuta cuando la Activity es completamente visible; onStart() se ejecuta antes de que sea visible",
      "onCreate() se ejecuta una única vez durante la creación; onStart() puede ejecutarse múltiples veces al reanudar la Activity",
      "onCreate() no tiene acceso a savedInstanceState; onStart() sí",
      "onStart() es exclusivo para Activities con fragmentos"
    ],
    correctAnswer: 1,
  },
  {
    question: "9. En React Native, ¿cuál es el propósito del hook useCallback?",
    options: [
      "Ejecutar efectos secundarios cuando dependencias cambian",
      "Memoizar funciones para evitar recrearlas en cada render",
      "Gestionar estado local del componente",
      "Realizar llamadas HTTP de forma optimizada"
    ],
    correctAnswer: 1,
  },
  {
    question: "10. ¿Qué ocurre cuando una interfaz móvil carece de una jerarquía visual clara?",
    options: [
      "El usuario puede confundirse sobre qué elementos son más importantes y la navegación se vuelve ineficiente",
      "Se reduce automáticamente el tamaño de la aplicación",
      "La batería del dispositivo se descarga más lentamente",
      "El código se vuelve más mantenible"
    ],
    correctAnswer: 0,
  },
  {
    question: "11. En el patrón de arquitectura de una aplicación móvil, ¿cuál es la responsabilidad principal de un Repository?",
    options: [
      "Gestionar la renderización de componentes visuales",
      "Abstraer la lógica de acceso a datos y proporcionar una interfaz consistente",
      "Ejecutar animaciones y transiciones",
      "Controlar la navegación entre pantallas"
    ],
    correctAnswer: 1,
  },
  {
    question: "12. ¿Cuál es una ventaja principal de usar TypeScript en lugar de JavaScript puro para desarrollo móvil?",
    options: [
      "Aumenta automáticamente la velocidad de ejecución del código",
      "Proporciona tipado estático y detección de errores en tiempo de compilación",
      "Reduce el tamaño del bundle descargable",
      "Elimina la necesidad de realizar pruebas unitarias"
    ],
    correctAnswer: 1,
  },
  {
    question: "13. En una aplicación con Jetpack Compose, ¿cuál es el rol fundamental de un Composable?",
    options: [
      "Gestionar la persistencia de datos en la base de datos",
      "Describir una parte de la interfaz de usuario de forma funcional y reactiva",
      "Compilar el código nativo de la aplicación",
      "Controlar permisos del dispositivo"
    ],
    correctAnswer: 1,
  },
  {
    question: "14. ¿Qué problema resuelve el uso de databinding en Android?",
    options: [
      "Sincronizar automáticamente datos del modelo con la interfaz y reducir código repetitivo",
      "Mejorar la velocidad de compilación del proyecto",
      "Permitir que las Activities sean independientes de Fragments",
      "Eliminar la necesidad de servicios en background"
    ],
    correctAnswer: 0,
  },
  {
    question: "15. En desarrollo de aplicaciones móviles multiplataforma, ¿cuál es la principal ventaja de Flutter sobre otras alternativas?",
    options: [
      "Utiliza exclusivamente código nativo de cada plataforma",
      "Motor gráfico propio que garantiza consistencia visual y excelente rendimiento en ambas plataformas",
      "No requiere conocimientos de programación orientada a objetos",
      "Soporta únicamente diseño web responsive"
    ],
    correctAnswer: 1,
  },
  {
    question: "16. ¿Cuál es el propósito de usar una corrutina en Kotlin para desarrollo Android?",
    options: [
      "Realizar operaciones asincrónicas sin bloquear el hilo principal",
      "Compilar el código Java a bytecode",
      "Aumentar la resolución de pantalla de la aplicación",
      "Eliminar la necesidad de usar RecyclerView"
    ],
    correctAnswer: 0,
  },
  {
    question: "17. En el contexto de seguridad móvil, ¿qué propósito tiene el almacenamiento de datos sensibles en un Keystore?",
    options: [
      "Aumentar la velocidad de carga de la aplicación",
      "Proteger credenciales y claves criptográficas mediante encriptación del sistema operativo",
      "Reducir el tamaño total de la aplicación",
      "Permitir que cualquier aplicación acceda a los datos compartidos"
    ],
    correctAnswer: 1,
  },
  {
    question: "18. ¿Qué es el principio de Single Responsibility en el contexto de arquitectura de aplicaciones móviles?",
    options: [
      "Cada clase o módulo debe tener una única razón para cambiar, facilitando mantenimiento y pruebas",
      "Solo un desarrollador puede trabajar en el proyecto simultáneamente",
      "La aplicación debe tener una única pantalla principal",
      "Solo se puede usar una base de datos por proyecto"
    ],
    correctAnswer: 0,
  },
  {
    question: "19. ¿Cuál es el principal objetivo del diseño de interfaces en aplicaciones móviles?",
    options: [
      "Maximizar la cantidad de contenido visible en pantalla",
      "Facilitar la interacción del usuario considerando el tamaño reducido de la pantalla y el contexto de uso",
      "Utilizar exclusivamente colores vibrantes para atraer atención",
      "Implementar la mayor cantidad posible de animaciones"
    ],
    correctAnswer: 1,
  },
  {
    question: "20. ¿Qué consecuencia tiene una jerarquía visual deficiente en una interfaz móvil?",
    options: [
      "Aumenta el tamaño del archivo de la aplicación",
      "El usuario no identifica correctamente el orden de lectura ni los elementos prioritarios, dificultando la navegación",
      "Mejora automáticamente la velocidad de carga",
      "Reduce la compatibilidad con navegadores web"
    ],
    correctAnswer: 1,
  },
  {
    question: "21. ¿Cuál es la función principal de un Repository en la arquitectura de una aplicación móvil?",
    options: [
      "Renderizar los componentes visuales en pantalla",
      "Gestionar la obtención y persistencia de datos, abstrayendo la fuente de datos",
      "Ejecutar animaciones y transiciones entre pantallas",
      "Controlar la rotación del dispositivo"
    ],
    correctAnswer: 1,
  },
  {
    question: "22. ¿Cuál es la principal ventaja de utilizar React Native para el desarrollo de aplicaciones móviles?",
    options: [
      "Usar código exclusivamente nativo de cada plataforma",
      "Permitir escribir código una sola vez en JavaScript/TypeScript y compilarlo para iOS y Android",
      "Ofrecer mejor rendimiento que cualquier aplicación nativa",
      "No requiere conocimiento de componentes visuales"
    ],
    correctAnswer: 1,
  },
  {
    question: "23. ¿Cuál es el propósito del hook useState en aplicaciones React o React Native?",
    options: [
      "Obtener datos de una API externa",
      "Gestionar el estado interno de un componente funcional",
      "Ejecutar efectos secundarios después del renderizado",
      "Navegar entre pantallas"
    ],
    correctAnswer: 1,
  },
  {
    question: "24. ¿Cuál es la diferencia principal entre useState y useEffect en React?",
    options: [
      "useState es más rápido que useEffect",
      "useState gestiona estado, mientras que useEffect ejecuta efectos secundarios tras cambios",
      "useEffect solo funciona en componentes de clase",
      "No hay diferencia, son alias del mismo hook"
    ],
    correctAnswer: 1,
  },
  {
    question: "25. ¿Qué componente en una arquitectura de motor gráfico 3D define la posición y rotación de un objeto en el espacio?",
    options: [
      "Renderer",
      "Collider",
      "Transform",
      "Material"
    ],
    correctAnswer: 2,
  },
  {
    question: "26. ¿Cuál es la función del patrón ViewModel en una arquitectura MVVM de aplicaciones móviles?",
    options: [
      "Renderizar directamente los componentes visuales",
      "Almacenar exclusivamente datos en bases de datos locales",
      "Exponer datos y lógica de presentación al View, independiente de la UI específica",
      "Ejecutar peticiones HTTP sin intermediarios"
    ],
    correctAnswer: 2,
  },
  {
    question: "27. ¿Cuál es el principal beneficio de implementar inyección de dependencias en una aplicación móvil?",
    options: [
      "Aumentar el tamaño de la aplicación",
      "Facilitar testing y mantener código desacoplado y flexible",
      "Obligar el uso de interfaces heredadas",
      "Reducir el número de clases necesarias"
    ],
    correctAnswer: 1,
  },
  {
    question: "28. ¿Qué significa que una aplicación móvil sea responsiva?",
    options: [
      "Que responde a toques del usuario rápidamente",
      "Que la interfaz se adapta y funciona correctamente en diferentes tamaños de pantalla y orientaciones",
      "Que usa bibliotecas externas para mejorar el rendimiento",
      "Que tiene habilitadas las notificaciones push"
    ],
    correctAnswer: 1,
  },
  {
    question: "29. ¿Cuál es el propósito del Collider en un motor gráfico 3D como Unity?",
    options: [
      "Definir el material visual del objeto",
      "Gestionar colisiones y detectar cuándo dos cuerpos se tocan",
      "Controlar la iluminación de la escena",
      "Reproducir audio cuando ocurre un evento"
    ],
    correctAnswer: 1,
  },
  {
    question: "30. ¿Qué es un LiveData en Android y cuál es su principal ventaja?",
    options: [
      "Una base de datos en tiempo real que sincroniza automáticamente con el servidor",
      "Un contenedor de datos observable que respeta el ciclo de vida de componentes y evita fugas de memoria",
      "Una clase que hereda directamente de View",
      "Un servicio que solo funciona cuando la pantalla está activa"
    ],
    correctAnswer: 1,
  },
  {
    question: "31. ¿Cuál es la diferencia entre una Activity y un Fragment en Android?",
    options: [
      "Una Activity es una pantalla completa, un Fragment es una parte reutilizable de interfaz dentro de una Activity",
      "Los Fragments son más antiguos que las Activities",
      "Una Activity se usa solo para juegos, un Fragment para aplicaciones normales",
      "No hay diferencia funcional, solo de nomenclatura"
    ],
    correctAnswer: 0,
  },
  {
    question: "32. ¿Qué es el proceso de serialización en el contexto de aplicaciones móviles?",
    options: [
      "Ejecutar tareas en orden secuencial",
      "Convertir objetos en un formato que puede ser almacenado o transmitido (JSON, XML, binario)",
      "Comprimir datos para reducir tamaño de la aplicación",
      "Encriptar la comunicación entre cliente y servidor"
    ],
    correctAnswer: 1,
  },
  {
    question: "33. ¿Cuál es el propósito de un Animator en un motor gráfico 3D?",
    options: [
      "Gestionar la física y colisiones de objetos",
      "Controlar transiciones suaves de propiedades (posición, rotación, escala) a lo largo del tiempo",
      "Renderizar la geometría de los objetos",
      "Gestionar la cámara de la escena"
    ],
    correctAnswer: 1,
  },
  {
    question: "34. ¿Cuál es el propósito principal de utilizar un patrón Repository en la arquitectura de una aplicación móvil?",
    options: [
      "Abstraer la lógica de acceso a datos y centralizar las operaciones de persistencia",
      "Renderizar componentes visuales en la pantalla del dispositivo",
      "Ejecutar animaciones y transiciones entre vistas",
      "Gestionar los permisos de seguridad del sistema operativo"
    ],
    correctAnswer: 0,
  },
  {
    question: "35. En el desarrollo de interfaces móviles, ¿qué consecuencia tiene una jerarquía visual deficiente?",
    options: [
      "El usuario no puede identificar fácilmente los elementos más importantes de la interfaz",
      "Se reduce automáticamente el consumo de batería del dispositivo",
      "Aumenta la velocidad de carga de los recursos multimedia",
      "Mejora la compatibilidad con dispositivos antiguos"
    ],
    correctAnswer: 0,
  },
  {
    question: "36. ¿Cuál es la principal ventaja de utilizar React Native en el desarrollo de aplicaciones móviles?",
    options: [
      "Permitir escribir código una sola vez y desplegarlo en múltiples plataformas móviles",
      "Asegurar que solo se utilice código nativo del sistema operativo",
      "Eliminar completamente la necesidad de interfaces gráficas",
      "Requerir conocimiento exclusivo de Swift y Kotlin"
    ],
    correctAnswer: 0,
  },
  {
    question: "37. ¿Cuál es la función del hook useState en React?",
    options: [
      "Gestionar el estado local de un componente funcional",
      "Realizar peticiones HTTP a servidores remotos",
      "Ejecutar efectos secundarios después del renderizado",
      "Navegar entre pantallas de la aplicación"
    ],
    correctAnswer: 0,
  },
  {
    question: "38. En el contexto de programación 3D con Unity, ¿qué componente es responsable de definir la posición, rotación y escala de un objeto?",
    options: [
      "Transform",
      "Renderer",
      "Collider",
      "Rigidbody"
    ],
    correctAnswer: 0,
  },
  {
    question: "39. ¿Cuál es la responsabilidad principal de un ViewModel en la arquitectura MVVM de una aplicación móvil?",
    options: [
      "Contener la lógica de negocio y exponer los datos que la Vista necesita",
      "Dibujar directamente los píxeles en la pantalla",
      "Gestionar exclusivamente las conexiones de red",
      "Almacenar datos en la base de datos del dispositivo"
    ],
    correctAnswer: 0,
  },
  {
    question: "40. ¿Qué es responsive design en el contexto del desarrollo de aplicaciones móviles?",
    options: [
      "Capacidad de la interfaz de adaptarse automáticamente a diferentes tamaños de pantalla y orientaciones",
      "Proceso de compilar el código en lenguaje máquina para mayor velocidad",
      "Técnica para encriptar datos sensibles del usuario",
      "Método para reducir el tamaño de archivos multimedia"
    ],
    correctAnswer: 0,
  },
  {
    question: "41. ¿Cuál es el propósito del hook useEffect en React?",
    options: [
      "Ejecutar código con efectos secundarios después del renderizado del componente",
      "Obtener datos de un archivo JSON local",
      "Cambiar el estado de un componente padre desde un componente hijo",
      "Compilar el código TypeScript a JavaScript"
    ],
    correctAnswer: 0,
  },
  {
    question: "42. En desarrollo Android nativo, ¿qué es un Intent y cuál es su función principal?",
    options: [
      "Un mecanismo para comunicar intenciones o acciones entre componentes de Android",
      "Un tipo de variable que almacena números decimales",
      "Un archivo XML que define la estructura de la base de datos",
      "Una librería para trabajar con APIs REST"
    ],
    correctAnswer: 0,
  },
  {
    question: "43. ¿Cuál es la función de un Observer en el patrón Reactive programming para aplicaciones móviles?",
    options: [
      "Suscribirse a cambios en un flujo de datos y reaccionar cuando estos cambios ocurren",
      "Almacenar permanentemente datos en el dispositivo",
      "Compilar automáticamente el código de la aplicación",
      "Proteger la aplicación contra ataques de seguridad"
    ],
    correctAnswer: 0,
  },
  {
    question: "44. ¿Qué es el ciclo de vida de una Activity en Android?",
    options: [
      "La secuencia de métodos callback que se invocan a medida que una Activity transita entre diferentes estados",
      "El tiempo máximo que una aplicación puede estar abierta sin ser cerrada",
      "El proceso de convertir una aplicación Android a iOS",
      "El número de veces que un usuario puede interactuar con la aplicación"
    ],
    correctAnswer: 0,
  },
  {
    question: "45. ¿Cuál es el propósito de utilizar constraintLayout en diseños XML de Android?",
    options: [
      "Crear diseños flexibles y complejos definiendo restricciones posicionales entre vistas",
      "Ejecutar operaciones matemáticas en tiempo de ejecución",
      "Almacenar datos de usuario de forma cifrada",
      "Compilar código Java a bytecode de Android"
    ],
    correctAnswer: 0,
  },
  {
    question: "46. ¿Qué es la asincronía en el desarrollo de aplicaciones móviles y por qué es importante?",
    options: [
      "La capacidad de ejecutar operaciones prolongadas sin bloquear el hilo principal de la UI",
      "Un método para encriptar datos transmitidos por red",
      "El proceso de sincronizar bases de datos en la nube",
      "Una técnica para comprimir archivos multimedia"
    ],
    correctAnswer: 0,
  },
  {
    question: "47. ¿Cuál es la función de Gradle en un proyecto Android?",
    options: [
      "Sistema de construcción automatizado que gestiona dependencias, compilación y empaquetado",
      "Editor de código fuente para escribir aplicaciones Android",
      "Framework para diseñar interfaces gráficas responsivas",
      "Base de datos local para almacenar información del usuario"
    ],
    correctAnswer: 0,
  },
  {
    question: "48. ¿Qué es el principio de separación de responsabilidades en arquitectura de software móvil?",
    options: [
      "Dividir la aplicación en componentes independientes, cada uno con una responsabilidad específica",
      "Usar un único archivo para todo el código de la aplicación",
      "Asegurar que todos los componentes compartan los mismos datos",
      "Crear interfaces gráficas sin lógica de negocio detrás"
    ],
    correctAnswer: 0,
  },
  {
    question: "49. ¿Qué patrón arquitectónico divide una aplicación en tres capas: datos, interfaz de usuario y gestión de la interacción entre ambas?",
    options: [
      "Modelo Vista Controlador (MVC)",
      "Singleton",
      "Factory Method",
      "Decorator"
    ],
    correctAnswer: 0,
  },
  {
    question: "50. En React Native, ¿cuál es la ventaja principal de utilizar FlatList en lugar de ScrollView para listas largas?",
    options: [
      "FlatList renderiza todos los elementos simultáneamente, mejorando la velocidad visual",
      "FlatList solo renderiza los elementos visibles en pantalla, optimizando memoria y rendimiento",
      "FlatList no requiere keys en los elementos",
      "FlatList es solo compatible con iOS"
    ],
    correctAnswer: 1,
  },
  {
    question: "51. ¿Cuál es el propósito del hook useEffect en React?",
    options: [
      "Gestionar el estado de los componentes",
      "Ejecutar efectos secundarios y sincronizar con el ciclo de vida del componente",
      "Optimizar el rendering evitando re-renders innecesarios",
      "Gestionar la navegación entre pantallas"
    ],
    correctAnswer: 1,
  },
  {
    question: "52. ¿Qué componente de Unity es responsable de la renderización gráfica de un objeto 3D?",
    options: [
      "Collider",
      "Renderer",
      "Transform",
      "Rigidbody"
    ],
    correctAnswer: 1,
  },
  {
    question: "53. ¿Cuál es la función principal de un ViewModel en arquitectura MVVM para aplicaciones móviles?",
    options: [
      "Definir la interfaz gráfica visual",
      "Gestionar la lógica de presentación e interactuar con los modelos de datos",
      "Almacenar credenciales de acceso",
      "Compilar el código de la aplicación"
    ],
    correctAnswer: 1,
  },
  {
    question: "54. ¿Qué método del ciclo de vida de Android se ejecuta cuando el usuario sale de la actividad?",
    options: [
      "onDestroy()",
      "onPause()",
      "onStop()",
      "onResume()"
    ],
    correctAnswer: 1,
  },
  {
    question: "55. ¿Cuál es el propósito del patrón Repository en desarrollo de aplicaciones móviles?",
    options: [
      "Controlar la renderización de la interfaz gráfica",
      "Abstraer las fuentes de datos (API, base de datos local) y proporcionar una interfaz única para acceder a ellos",
      "Gestionar animaciones y transiciones",
      "Compilar y empaquetar la aplicación"
    ],
    correctAnswer: 1,
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
              <span className="text-foreground">Programacion Multimedia y Dispositivos Moviles</span>
            </h1>
            <h2 className="text-xl text-muted-foreground">Test Extra I</h2>
            <p className="text-muted-foreground text-lg">Programacion Multimedia y Dispositivos Moviles</p>

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
