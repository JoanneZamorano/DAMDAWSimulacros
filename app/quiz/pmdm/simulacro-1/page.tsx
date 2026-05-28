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
    "question": "1. ¿Qué panel de Unity permite editar propiedades de cada objeto y sus componentes?",
    "options": [
      "Scene",
      "Game",
      "Hierarchy",
      "Inspector"
    ],
    "correctAnswer": 3
  },
  {
    "question": "2. ¿Qué tipo de proyección de cámara en Unity representa profundidad de forma realista?",
    "options": [
      "Orthographic",
      "Field of View",
      "Perspective",
      "Isometric"
    ],
    "correctAnswer": 2
  },
  {
    "question": "3. ¿Qué representa la Mixed Reality en Unity?",
    "options": [
      "Solo entornos digitales completos",
      "Solo elementos digitales sobre mundo real",
      "Combina objetos reales y virtuales con interaccion entre ellos",
      "Un sistema de particulas avanzado"
    ],
    "correctAnswer": 2
  },
  {
    "question": "4. ¿Qué herramienta de Unity permite modelar geometrías directamente en el editor?",
    "options": [
      "Shader Graph",
      "Tilemap Editor",
      "Particle System",
      "ProBuilder"
    ],
    "correctAnswer": 3
  },
  {
    "question": "5. ¿Qué tipo de luz en Unity proyecta un cono útil para linternas o focos?",
    "options": [
      "Point Light",
      "Directional Light",
      "Area Light",
      "Spot Light"
    ],
    "correctAnswer": 3
  },
  {
    "question": "6. ¿Qué significa LTS en Unity Hub?",
    "options": [
      "Long Term Support",
      "Latest Technology System",
      "Low Texture Settings",
      "Large Team Software"
    ],
    "correctAnswer": 0
  },
  {
    "question": "7. ¿Cuándo se activa OnCollisionEnter2D en Unity?",
    "options": [
      "Al separarse dos objetos",
      "Al activarse la gravedad",
      "Al destruirse un objeto",
      "Al detectarse contacto entre dos objetos con Collider"
    ],
    "correctAnswer": 3
  },
  {
    "question": "8. ¿Qué representa el eje Y en el espacio 3D de Unity?",
    "options": [
      "La profundidad",
      "El eje horizontal",
      "La altura",
      "La rotación"
    ],
    "correctAnswer": 2
  },
  {
    "question": "9. ¿Qué hace transform.Translate en Unity?",
    "options": [
      "Aplica una fuerza física al objeto",
      "Detecta colisiones",
      "Mueve un objeto directamente sin respetar fisicas",
      "Cambia el material del objeto"
    ],
    "correctAnswer": 2
  },
  {
    "question": "10. ¿Qué es un Physics Material en Unity?",
    "options": [
      "Un tipo de shader",
      "Permite ajustar rebote y fricción de superficies",
      "Un tipo de collider",
      "Un sistema de particulas"
    ],
    "correctAnswer": 1
  },
  {
    "question": "11. ¿Qué componente de Unity controla cómo se ve un objeto en pantalla?",
    "options": [
      "Transform",
      "Collider",
      "Script",
      "Renderer"
    ],
    "correctAnswer": 3
  },
  {
    "question": "12. ¿Qué significa que React Native usa componentes nativos reales?",
    "options": [
      "Crea una web embebida dentro de la app",
      "Usa un navegador interno como WebView",
      "Traduce componentes a elementos nativos del sistema operativo",
      "Usa únicamente HTML y CSS"
    ],
    "correctAnswer": 2
  },
  {
    "question": "13. ¿Qué carpeta en un proyecto React Native contiene las imágenes y recursos?",
    "options": [
      "components",
      "screens",
      "styles",
      "assets"
    ],
    "correctAnswer": 3
  },
  {
    "question": "14. ¿Qué hace npm run android en React Native?",
    "options": [
      "Instala dependencias del proyecto",
      "Ejecuta la app en el emulador de Android",
      "Compila el proyecto para producción",
      "Crea un nuevo proyecto"
    ],
    "correctAnswer": 1
  },
  {
    "question": "15. ¿Qué es el Tab Navigator en React Navigation?",
    "options": [
      "Una pila de pantallas apiladas",
      "Un menú lateral desplegable",
      "Un sistema de pestañas en la parte inferior o superior",
      "Un modal flotante"
    ],
    "correctAnswer": 2
  },
  {
    "question": "16. ¿Qué librería se recomienda para gestionar estados de datos y caché en React Native?",
    "options": [
      "Axios",
      "fetch()",
      "StyleSheet",
      "React Query"
    ],
    "correctAnswer": 3
  },
  {
    "question": "17. ¿Qué hace useNavigation en React Native?",
    "options": [
      "Gestiona datos dinámicos",
      "Ejecuta código tras el renderizado",
      "Accede al objeto de navegación sin pasar props manualmente",
      "Gestiona efectos secundarios"
    ],
    "correctAnswer": 2
  },
  {
    "question": "18. ¿Qué es el archivo package.json en un proyecto React Native?",
    "options": [
      "El punto de entrada de la app",
      "El archivo de estilos globales",
      "El archivo de configuración de navegación",
      "El archivo que gestiona las dependencias del proyecto"
    ],
    "correctAnswer": 3
  },
  {
    "question": "19. ¿Qué es el Drawer Navigator en React Navigation?",
    "options": [
      "Un sistema de pestañas inferiores",
      "Un menú lateral desplegable tipo hamburguesa",
      "Una pila de pantallas",
      "Un sistema de modales"
    ],
    "correctAnswer": 1
  },
  {
    "question": "20. ¿Qué empresa usa React Native en parte o totalidad de sus apps según el PDF?",
    "options": [
      "Samsung y Huawei",
      "Facebook Instagram Uber Eats y Tesla",
      "Google y Apple",
      "Microsoft y Amazon"
    ],
    "correctAnswer": 1
  },
  {
    "question": "21. ¿Qué es el Service Locator en inyección de dependencias Android?",
    "options": [
      "Un tipo de navegación",
      "Una clase centralizada que gestiona instancias bajo demanda",
      "Un sistema de animaciones",
      "Un tipo de layout XML"
    ],
    "correctAnswer": 1
  },
  {
    "question": "22. ¿Qué problema genera crear dependencias directamente dentro de cada clase en Android?",
    "options": [
      "Mejora el rendimiento",
      "Facilita las pruebas unitarias",
      "Genera alto acoplamiento dificultando mantenimiento y pruebas",
      "Reduce el tamaño del APK"
    ],
    "correctAnswer": 2
  },
  {
    "question": "23. ¿Qué hace la anotación @Inject en Hilt?",
    "options": [
      "Marca la clase Application como punto de entrada",
      "Define los objetos que Hilt puede crear",
      "Marca clases donde se inyectan dependencias",
      "Señala dónde se inyectan dependencias o cómo se construyen clases"
    ],
    "correctAnswer": 3
  },
  {
    "question": "24. ¿Qué hace @Module en Hilt junto con @Provides?",
    "options": [
      "Marca la clase Application",
      "Define los objetos que Hilt puede crear y compartir",
      "Marca Activities y Fragments para inyeccion",
      "Señala el scope de una dependencia"
    ],
    "correctAnswer": 1
  },
  {
    "question": "25. ¿Qué scope de Hilt se usa para dependencias específicas de un Fragment?",
    "options": [
      "@Singleton",
      "@ActivityScoped",
      "@FragmentScoped",
      "@ViewModelScoped"
    ],
    "correctAnswer": 2
  },
  {
    "question": "26. ¿Cuándo genera Hilt el código de inyección según el PDF?",
    "options": [
      "En tiempo de ejecución",
      "Durante las pruebas unitarias",
      "Al publicar en la Play Store",
      "En tiempo de compilación"
    ],
    "correctAnswer": 3
  },
  {
    "question": "27. ¿Qué ventaja tiene usar interfaces en inyección de dependencias Android?",
    "options": [
      "Aumenta el acoplamiento entre clases",
      "Facilita intercambiar implementaciones sin modificar el resto del código",
      "Elimina la necesidad de pruebas",
      "Reduce el rendimiento de la app"
    ],
    "correctAnswer": 1
  },
  {
    "question": "28. ¿Qué patrón consiste en encapsular código antiguo detrás de repositorios nuevos migrando poco a poco?",
    "options": [
      "Big Bang Refactor",
      "Feature Toggle",
      "Strangler Pattern",
      "Blue Green Deployment"
    ],
    "correctAnswer": 2
  },
  {
    "question": "29. ¿Qué expone el ViewModel mediante StateFlow o LiveData en MVVM Android?",
    "options": [
      "El acceso directo a la red",
      "El estado inmutable observable para la UI",
      "Los layouts XML de la interfaz",
      "Las animaciones de los componentes"
    ],
    "correctAnswer": 1
  },
  {
    "question": "30. ¿Qué son los Use Cases en la capa de Dominio de Android?",
    "options": [
      "Clases que gestionan el almacenamiento local",
      "Clases que encapsulan reglas y lógica de negocio independientes de la UI",
      "Clases que gestionan la navegación",
      "Clases que definen los layouts"
    ],
    "correctAnswer": 1
  },
  {
    "question": "31. ¿Qué herramienta de Android sustituye a SharedPreferences según la Unidad 2?",
    "options": [
      "Room",
      "Retrofit",
      "SQLite",
      "DataStore"
    ],
    "correctAnswer": 3
  },
  {
    "question": "32. ¿Qué hace la Global Illumination en Unity?",
    "options": [
      "Genera partículas de luz",
      "Precalcula iluminación estática",
      "Simula rebotes de luz realistas",
      "Aplica sombras suaves a objetos"
    ],
    "correctAnswer": 2
  },
  {
    "question": "33. ¿Qué es el baked lighting en Unity?",
    "options": [
      "Un sistema de particulas",
      "Iluminación dinámica en tiempo real",
      "Un tipo de shader",
      "Iluminación estática precalculada que optimiza rendimiento"
    ],
    "correctAnswer": 3
  },
  {
    "question": "34. ¿Qué herramienta de Unity añade efectos como bloom desenfoque o color grading?",
    "options": [
      "Shader Graph",
      "Particle System",
      "Post-Processing Stack",
      "ProBuilder"
    ],
    "correctAnswer": 2
  },
  {
    "question": "35. ¿Qué significa alta cohesión en un módulo Android?",
    "options": [
      "Que depende de muchos otros módulos",
      "Que tiene pocas líneas de código",
      "Que comparte codigo con otros modulos",
      "Que hace una sola cosa bien con responsabilidades definidas"
    ],
    "correctAnswer": 3
  },
  {
    "question": "36. ¿Qué herramienta de Gradle reduce recompilaciones ocultando dependencias transitivas?",
    "options": [
      "api",
      "kapt",
      "implementation",
      "annotationProcessor"
    ],
    "correctAnswer": 2
  },
  {
    "question": "37. ¿Qué es un sealed class UiState en MVVM Android?",
    "options": [
      "Un tipo de repositorio",
      "Un tipo de ViewModel",
      "Un tipo de Use Case",
      "Una clase con variantes como Loading Content y Error para modelar estados"
    ],
    "correctAnswer": 3
  },
  {
    "question": "38. ¿Qué hace el NavController en Navigation Component?",
    "options": [
      "Renderiza los fragments en pantalla",
      "Define las rutas en el nav graph",
      "Pasa argumentos entre pantallas",
      "Gestiona el back stack y las transiciones entre destinos"
    ],
    "correctAnswer": 3
  },
  {
    "question": "39. ¿Qué representa el eje Z en el espacio 3D de Unity?",
    "options": [
      "La altura",
      "El eje horizontal",
      "La rotación",
      "La profundidad"
    ],
    "correctAnswer": 3
  },
  {
    "question": "40. ¿Qué es AR Foundation en Unity?",
    "options": [
      "Un sistema de particulas",
      "Un framework multiplataforma para apps de realidad aumentada",
      "Un tipo de shader",
      "Un sistema de fisicas 2D"
    ],
    "correctAnswer": 1
  },
  {
    "question": "41. ¿Qué hace el método OnCollisionExit2D en Unity?",
    "options": [
      "Se activa al detectar contacto entre objetos",
      "Se activa al entrar en un trigger",
      "Se activa al separarse dos objetos en colision",
      "Se activa al destruirse un objeto"
    ],
    "correctAnswer": 2
  },
  {
    "question": "42. ¿Qué es el AppContainer en inyección de dependencias manual Android?",
    "options": [
      "Un tipo de ViewModel",
      "Una clase central que inicializa y distribuye instancias de dependencias",
      "Un tipo de Repository",
      "Un sistema de navegación"
    ],
    "correctAnswer": 1
  },
  {
    "question": "43. ¿Qué herramienta de Unity edita clips de animación cuadro a cuadro?",
    "options": [
      "Animator Controller",
      "Shader Graph",
      "Animation Timeline",
      "Particle System"
    ],
    "correctAnswer": 2
  },
  {
    "question": "44. ¿Qué representa el concepto de bajo acoplamiento en la modularización Android?",
    "options": [
      "Que los módulos compartan todo el código posible",
      "Que cada módulo dependa lo mínimo posible del resto",
      "Que todos los módulos tengan el mismo tamaño",
      "Que los módulos no puedan comunicarse entre si"
    ],
    "correctAnswer": 1
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

export default function PMDMSimulacro1Quiz() {
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
              <span className="text-foreground">PMDM</span>
            </h1>
            <h2 className="text-xl text-muted-foreground">Simulacro I</h2>
            <p className="text-muted-foreground text-lg">Programacion Multimedia y Dispositivos Moviles</p>

            <div className="space-y-4 text-left py-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">{questions.length} Preguntas</p>
                  <p className="text-sm text-muted-foreground">Todos los conceptos clave</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Preguntas Aleatorizadas</p>
                  <p className="text-sm text-muted-foreground">Cada sesion es diferente</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Retroalimentacion Inmediata</p>
                  <p className="text-sm text-muted-foreground">Aprende mientras practicas</p>
                </div>
              </div>
            </div>

            <Button
              onClick={startQuiz}
              size="lg"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold"
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
              <div className="text-6xl font-bold text-emerald-500 mb-2">{Math.max(0, percentage)}%</div>
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
              {percentage >= 90 && <p className="text-lg text-foreground">Excelente. Dominas PMDM.</p>}
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
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold"
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
          <span className="text-emerald-500">{answeredCount} respondidas</span>
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
                      ${!showFeedback && "hover:border-emerald-500 hover:bg-accent cursor-pointer"}
                      ${showFeedback && "cursor-not-allowed"}
                      ${isSelected && !showFeedback && "border-emerald-500 bg-accent"}
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
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white"
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
            className="h-full bg-emerald-500 transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
