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
  { "question": "1. ¿Qué vista del Editor de Unity se usa para construir el mundo visual colocando objetos luces y cámaras?", "options": ["Game View", "Inspector", "Scene View", "Hierarchy"], "correctAnswer": 2 },
  { "question": "2. ¿Qué tecnología de React Native permite ver actualizaciones instantáneamente sin recompilar toda la app?", "options": ["Cold Reload", "Full Reload", "Fast Refresh", "Hot Reloading"], "correctAnswer": 3 },
  { "question": "3. ¿Qué tipo de módulos en Android ofrecen servicios transversales como red almacenamiento y utilidades?", "options": ["Feature modules", "Dynamic modules", "Core modules", "App modules"], "correctAnswer": 2 },
  { "question": "4. ¿Qué hace el método AddForce() en Unity?", "options": ["Mueve el objeto directamente con Transform", "Aplica una textura al objeto", "Detecta colisiones entre objetos", "Aplica una fuerza fisica respetando las leyes del motor"], "correctAnswer": 3 },
  { "question": "5. ¿Qué patrón de Unity actúa como un cerebro visual recibiendo variables desde scripts y transformándolas en animaciones?", "options": ["Rigidbody2D", "Collider2D", "Animator", "Prefab"], "correctAnswer": 2 },
  { "question": "6. ¿Qué tipo de Collider2D en Unity es más adecuado para detectar con precisión si un personaje está tocando el suelo?", "options": ["BoxCollider2D", "PolygonCollider2D", "EdgeCollider2D", "CircleCollider2D"], "correctAnswer": 3 },
  { "question": "7. ¿Qué ventaja ofrece la modularización en Android según la Unidad 2?", "options": ["Aumenta el tamaño del APK", "Reduce la necesidad de pruebas", "Elimina la necesidad de Gradle", "Permite compilaciones más rápidas y equipos trabajando en paralelo"], "correctAnswer": 3 },
  { "question": "8. ¿Qué componente de React Native se usa para mostrar listas largas de forma eficiente?", "options": ["ScrollView", "ListView", "FlatList", "RecyclerView"], "correctAnswer": 2 },
  { "question": "9. ¿Qué representa la capa de Datos en la arquitectura Android moderna?", "options": ["La interfaz de usuario con Activities y Fragments", "Los casos de uso y reglas de negocio independientes", "Las pantallas de navegacion del usuario", "Los repositorios que combinan fuentes de datos remotas y locales"], "correctAnswer": 3 },
  { "question": "10. ¿Qué herramienta de Android permite acceder a vistas de forma segura sin casts ni NullPointerException?", "options": ["DataBinding", "Hilt", "ViewBinding", "Navigation Component"], "correctAnswer": 2 },
  { "question": "11. ¿Qué significa UDF en el contexto de arquitectura Android?", "options": ["Universal Data Framework", "Unified Development Flow", "Unidirectional Data Flow", "Universal Domain Function"], "correctAnswer": 2 },
  { "question": "12. ¿Qué tipo de Dynamic Feature Module en Android permite descargar funcionalidades bajo demanda reduciendo el APK base?", "options": ["Core Module", "Feature Module estático", "App Module", "Dynamic Feature Module"], "correctAnswer": 3 },
  { "question": "13. ¿Qué componente de Unity detecta el área de colisión invisible alrededor de un objeto?", "options": ["Transform", "Renderer", "Script", "Collider"], "correctAnswer": 3 },
  { "question": "14. ¿Qué librería de React Native permite consumir APIs REST con gestión avanzada de autenticación paginación y cabeceras?", "options": ["fetch()", "XMLHttpRequest", "Axios", "React Query"], "correctAnswer": 2 },
  { "question": "15. ¿Qué tipo de scope de Hilt en Android se usa para dependencias que solo viven durante una Activity específica?", "options": ["@Singleton", "@ActivityScoped", "@FragmentScoped", "@ViewModelScoped"], "correctAnswer": 1 },
  { "question": "16. ¿Qué concepto de Unity permite que cambiar un objeto original actualice automáticamente todas sus instancias?", "options": ["GameObject", "Script", "Scene", "Prefab"], "correctAnswer": 3 },
  { "question": "17. ¿Qué representa el NavHostFragment en el Navigation Component de Android?", "options": ["El archivo que define las rutas de navegación", "El controlador que gestiona el back stack", "El contenedor visual que renderiza los destinos del nav graph", "Los argumentos que se pasan entre pantallas"], "correctAnswer": 2 },
  { "question": "18. ¿Qué tipo de shader en Unity calcula cómo la luz interactúa con superficies como metal vidrio o plástico?", "options": ["Particle System", "Transform", "Collider", "Shader"], "correctAnswer": 3 },
  { "question": "19. ¿Qué hace SafeArgs en el Navigation Component de Android?", "options": ["Gestiona las animaciones de transición", "Controla el back stack de navegación", "Renderiza los fragments en pantalla", "Garantiza que los datos entre pantallas sean del tipo correcto"], "correctAnswer": 3 },
  { "question": "20. ¿Qué ventaja ofrece Hilt frente a la inyección de dependencias manual en Android?", "options": ["Hilt genera el código en tiempo de ejecución aumentando el rendimiento", "Hilt elimina la necesidad de pruebas unitarias", "Hilt automatiza la creación y gestión del ciclo de vida de las dependencias", "Hilt solo funciona con proyectos pequeños"], "correctAnswer": 2 },
  { "question": "21. ¿Qué representa la arquitectura de tres capas en Android?", "options": ["Frontend backend y base de datos", "Modelo Vista y Controlador", "UI Dominio y Datos", "Actividades Fragmentos y ViewModels"], "correctAnswer": 2 },
  { "question": "22. ¿Qué tipo de materiales usa Unity para lograr texturas fotorrealistas con albedo metallic normal map y smoothness?", "options": ["Standard Shader", "Toon Shader", "Unlit Shader", "PBR Physically Based Rendering"], "correctAnswer": 3 },
  { "question": "23. ¿Qué componente de React Native se usa como contenedor principal para estructurar la interfaz?", "options": ["Text", "Image", "Button", "View"], "correctAnswer": 3 },
  { "question": "24. ¿Qué método del ciclo de vida de un Fragment en Android es el lugar correcto para evitar memory leaks?", "options": ["onCreateView()", "onViewCreated()", "onDestroyView()", "onPause()"], "correctAnswer": 2 },
  { "question": "25. ¿Qué herramienta visual de Unity permite crear materiales personalizados sin escribir código?", "options": ["Particle System", "Shader Graph", "ProBuilder", "Terrain Tools"], "correctAnswer": 1 },
  { "question": "26. ¿Qué tipo de inicialización ofrece App Startup para librerías no críticas que no deben bloquear el hilo principal?", "options": ["Eager initialization", "Parallel initialization", "Lazy initialization", "Sequential initialization"], "correctAnswer": 2 },
  { "question": "27. ¿Qué representa el ViewModel en la arquitectura MVVM de Android?", "options": ["El acceso directo a la base de datos", "La interfaz gráfica de usuario", "El modulo de navegación entre pantallas", "El componente que expone el estado observable a la UI mediante Live Data"], "correctAnswer": 3 },
  { "question": "28. ¿Qué tipo de exportación permite publicar proyectos Unity en navegadores sin instalación?", "options": ["Android Build", "IOS Build", "Desktop Build", "WebGL"], "correctAnswer": 3 },
  { "question": "29. ¿Qué tipo de iluminación en Unity precalcula la iluminación estática para optimizar el rendimiento?", "options": ["Dynamic Lighting", "Real Time Lighting", "Baked Lighting", "Global Illumination"], "correctAnswer": 2 },
  { "question": "30. ¿Cuál es el beneficio principal del patrón Repository en Android según la Unidad 2?", "options": ["Gestionar las animaciones de la interfaz", "Manejar la navegación entre pantallas", "Servir como única fuente de verdad combinando datos remotos y locales", "Controlar el ciclo de vida de los ViewModels"], "correctAnswer": 2 },
  { "question": "31. ¿Qué componente de React Native permite implementar un menú lateral desplegable tipo hamburguesa?", "options": ["Tab Navigator", "Stack Navigator", "Modal Navigator", "Drawer Navigator"], "correctAnswer": 3 },
  { "question": "32. ¿Qué tipo de pruebas recomienda la Unidad 2 empezar antes que las pruebas de Ul por ser más rápidas y estables?", "options": ["Instrumented tests", "UI tests con Espresso", "End to end tests", "Tests unitarios de Use Cases y Repositorios"], "correctAnswer": 3 },
  { "question": "33. ¿Qué evento de Unity se activa específicamente cuando dos objetos con Collider dejan de estar en contacto?", "options": ["OnTriggerEnter2D()", "OnCollisionEnter2D()", "OnTriggerExit2D()", "OnCollisionExit2D()"], "correctAnswer": 3 },
  { "question": "34. ¿Qué herramienta de Unity se recomienda para crear y editar entornos 2D con precisión física mediante tiles?", "options": ["Shader Graph", "ProBuilder", "Particle System", "Tilemap Editor"], "correctAnswer": 3 },
  { "question": "35. ¿Qué tipo de inyección de dependencias en Android pasa la dependencia como parámetro al crear el objeto?", "options": ["Service Locator", "Setter Injection", "Property Injection", "Constructor Injection"], "correctAnswer": 3 },
  { "question": "36. ¿Qué representa el objeto binding.root en ViewBinding de Android?", "options": ["La propiedad tipada de una vista específica", "El ViewModel asociado al layout", "La jerarquía del layout que se establece como contenido de la pantalla", "El ciclo de vida del Fragment"], "correctAnswer": 2 },
  { "question": "37. ¿Qué tipo de scope de Hilt se usa para dependencias específicas de un ViewModel?", "options": ["@Singleton", "@ActivityScoped", "@ViewModelScoped", "@FragmentScoped"], "correctAnswer": 2 },
  { "question": "38. ¿Qué librería de control de versiones menciona la Unidad 5 de Unity para proyectos colaborativos?", "options": ["GitHub", "GitLab", "Plastic SCM Git", "Bitbucket"], "correctAnswer": 2 },
  { "question": "39. ¿Qué representa la JavaScript Layer en la arquitectura interna de React Native?", "options": ["El nivel más bajo con módulos nativos escritos en Java o Swift", "El puente que comunica JavaScript con código nativo", "El gestor de paquetes npm o yarn", "La capa donde se escribe la logica"], "correctAnswer": 3 },
  { "question": "40. ¿Qué tipo de módulo de Hilt define los objetos que puede crear y compartir con anotación @Provides?", "options": ["@HiltAndroidApp", "@AndroidEntryPoint", "@Inject", "@Module"], "correctAnswer": 3 },
  { "question": "41. ¿Qué diferencia existe entre OnCollisionEnter2D y OnTriggerEnter2D en Unity?", "options": ["OnTriggerEnter2D bloquea fisicamente los objetos y OnCollisionEnter2D no", "Ambos funcionan exactamente igual", "OnCollisionEnter2D se usa cuando el collider tiene is Trigger activado", "OnTriggerEnter2D se usa cuando el collider tiene Is Trigger activado"], "correctAnswer": 3 },
  { "question": "42. ¿Qué representa el concepto de alta cohesión en la modularización?", "options": ["Que los módulos dependan entre sí lo máximo posible", "Que cada módulo tenga muchas responsabilidades diferentes", "Que cada módulo haga una cosa bien con limites claros", "Que todos los módulos compartan el mismo código"], "correctAnswer": 2 },
  { "question": "43. ¿Qué tipo de animación en Unity define el estado visual como Idle Run Jump o Attack en el Animator Controller?", "options": ["Blend Tree", "Clip de animación", "Transition", "State"], "correctAnswer": 3 },
  { "question": "44. ¿Qué herramienta integrada de Unity permite visualizar colliders trayectorias y fuerzas durante la ejecución?", "options": ["Scene View", "Game View", "Physics 2D Debug Mode", "Inspector"], "correctAnswer": 2 }
];

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export default function PMDMSimulacro2Quiz() {
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
            <h2 className="text-xl text-muted-foreground">Simulacro II</h2>
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
