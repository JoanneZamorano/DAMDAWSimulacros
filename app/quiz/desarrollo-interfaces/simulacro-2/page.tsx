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
    "question": "¿Qué framework se utiliza en Java para crear aplicaciones de escritorio?",
    "options": ["React Native", "Flutter", "JavaFX", ".NET MAUI"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué tecnología está basada en el lenguaje Dart?",
    "options": ["Flutter", "JavaFX", ".NET", "React"],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué componente transforma las acciones del usuario en eventos?",
    "options": ["Backend", "GUI", "Base de datos", "Servidor"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué capa se encarga de almacenar y gestionar la información?",
    "options": ["Eventos", "Interfaz gráfica", "Datos y servicios", "Usuario"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué ayuda a disminuir la carga cognitiva en una interfaz?",
    "options": ["Más colores", "Jerarquía visual", "Mayor código", "Backend"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué representa fx:id en JavaFX?",
    "options": ["Una excepción", "Un identificador de componente", "Un estilo visual", "Una animación"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué facilita la creación rápida de prototipos visuales?",
    "options": ["Depuración", "Editores visuales", "Backend", "Programación manual"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué programa se emplea normalmente con JavaFX para diseñar interfaces?",
    "options": ["Photoshop", "Excel", "Scene Builder", "Blender"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué significa el concepto WYSIWYG?",
    "options": ["Editor visual", "Código optimizado", "Lenguaje compilado", "Framework web"],
    "correctAnswer": 0
  },
  {
    "question": "¿Cuál de estas afirmaciones es incorrecta sobre los editores visuales?",
    "options": ["Separan diseño y lógica", "Aumentan la productividad", "Generan siempre código desordenado", "Permiten diseñar más rápido"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué lenguaje declarativo se utiliza con frecuencia para definir interfaces?",
    "options": ["Python", "Java", "XML", "C++"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué tipo de archivo usa JavaFX para definir interfaces gráficas?",
    "options": ["JSON", "FXML", "HTML", "TXT"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué describe principalmente un archivo XML/FXML?",
    "options": ["La lógica del programa", "La seguridad", "La estructura visual", "Las consultas SQL"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué efecto positivo tiene separar la interfaz de la lógica?",
    "options": ["Más facilidad de mantenimiento", "Más errores", "Menor claridad", "Menos reutilización"],
    "correctAnswer": 0
  },
  {
    "question": "¿En qué carpeta se guardan los layouts en Android?",
    "options": ["src/layout", "res/layout", "res/java", "assets/xml"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué clase sirve de base para los controles en JavaFX?",
    "options": ["Stage", "Object", "Control", "Node"],
    "correctAnswer": 3
  },
  {
    "question": "¿Qué ventaja principal tiene reutilizar componentes?",
    "options": ["Más consumo de memoria", "Mayor cantidad de errores", "Uso en varios proyectos", "Más código repetido"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué propiedad suele tener un botón de “Me gusta”?",
    "options": ["Liked", "Nombre", "EstadoUI", "Contador"],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué ventaja aporta separar la apariencia de la lógica?",
    "options": ["Mayor control visual", "Más memoria", "Más errores", "Menos flexibilidad"],
    "correctAnswer": 0
  },
  {
    "question": "¿Cómo define la ISO 9241 la usabilidad?",
    "options": ["Velocidad del sistema", "Aspecto visual", "Nivel de efectividad, eficiencia y satisfacción", "Capacidad gráfica"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué aspecto NO pertenece directamente a la usabilidad?",
    "options": ["Eficiencia", "Satisfacción", "Rendimiento técnico", "Efectividad"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué caracteriza al diseño minimalista?",
    "options": ["Gran cantidad de botones", "Menos elementos innecesarios", "Uso excesivo de colores", "Más información visual"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué hace que una interfaz sea más fácil de entender visualmente?",
    "options": ["Animaciones complejas", "Decoración", "Uso de iconos aleatorios", "Organización visual de la información"],
    "correctAnswer": 3
  },
  {
    "question": "¿Cuál es la finalidad de la simplicidad en diseño?",
    "options": ["Incrementar opciones", "Reducir la carga cognitiva", "Añadir más elementos", "Usar más colores"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué sucede cuando una interfaz contiene demasiados elementos?",
    "options": ["Aumenta la claridad", "Disminuye la confusión", "Genera mayor confusión", "Mejora la experiencia"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué se entiende por reporting en software?",
    "options": ["Guardar información", "Transformar datos en documentos", "Optimizar procesos", "Crear interfaces"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué herramienta es muy utilizada en Java para generar informes?",
    "options": ["Hibernate", "Spring", "JasperReports", "Docker"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué es un archivo JRXML?",
    "options": ["Un script de base de datos", "Una plantilla de informe", "Código Java", "Un ejecutable"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué aporta principalmente la documentación en un proyecto software?",
    "options": ["Mayor memoria", "Comunicación y comprensión", "Velocidad", "Diseño gráfico"],
    "correctAnswer": 1
  },
  {
    "question": "¿A quién va dirigida la documentación de usuario?",
    "options": ["Administradores", "Desarrolladores", "Usuarios finales", "Técnicos de red"],
    "correctAnswer": 2
  }
]

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export default function DesarrolloInterfacesSimulacro2Quiz() {
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
            <h2 className="text-xl text-muted-foreground">Simulacro II</h2>
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
