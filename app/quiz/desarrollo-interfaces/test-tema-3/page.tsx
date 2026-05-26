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
    "question": "¿Qué define una interfaz declarativa?",
    "options": ["Cómo se ejecuta el código", "Qué debe mostrarse", "Cómo optimizar memoria", "Cómo compilar"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué lenguaje se utiliza para definir interfaces declarativas?",
    "options": ["Java", "Kotlin", "XML", "Python"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué diferencia principal hay con el enfoque imperativo?",
    "options": ["Usa más código", "Define estructura en lugar de instrucciones", "Es más lento", "No usa eventos"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué archivo usa JavaFX para interfaces declarativas?",
    "options": ["JSON", "XML", "FXML", "CSS"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué archivo usa Android para layouts?",
    "options": ["FXML", "XML", "HTML", "YAML"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué define el XML/FXML?",
    "options": ["Lógica", "Base de datos", "Estructura visual", "Seguridad"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué gestiona el código Java/Kotlin?",
    "options": ["Diseño", "Eventos y lógica", "Estilos", "Layout"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué ventaja aporta separar diseño y lógica?",
    "options": ["Más errores", "Más complejidad", "Mejor mantenibilidad", "Menos rendimiento"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué permite la reutilización de layouts?",
    "options": ["Reducir CPU", "Evitar duplicidad", "Aumentar memoria", "Reducir red"],
    "correctAnswer": 1
  },
  {
    "question": "¿Dónde se almacenan layouts en Android?",
    "options": ["res/xml", "res/layout", "res/java", "src/layout"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué hace FXMLLoader en JavaFX?",
    "options": ["Compila código", "Carga el FXML", "Ejecuta eventos", "Aplica estilos"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué representa el árbol jerárquico del XML?",
    "options": ["Base de datos", "Jerarquía de UI", "Seguridad", "Red"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué permite la previsualización?",
    "options": ["Ejecutar lógica", "Ver la interfaz sin compilar", "Debuggear", "Compilar más rápido"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué hace el controlador?",
    "options": ["Diseña la UI", "Conecta UI y datos", "Define estilos", "Gestiona memoria"],
    "correctAnswer": 1
  },
  {
    "question": "En el caso Netflix, ¿qué representa el XML?",
    "options": ["Base de datos", "Lógica", "Estructura de carruseles", "Seguridad"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué ventaja clave muestra Netflix?",
    "options": ["Más CPU", "Reutilización de componentes", "Menos memoria", "Más código"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué es ConstraintLayout?",
    "options": ["Lenguaje", "Base de datos", "Layout complejo en Android", "Estilo"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué atributo es esencial en Android XML?",
    "options": ["android:id", "fx:id", "css:id", "java:id"],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué mito es falso?",
    "options": ["XML sigue siendo usado", "XML es obsoleto", "XML permite reutilización", "XML mejora organización"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué ventaja tiene combinar editor visual y XML?",
    "options": ["Menos precisión", "Mayor control y rapidez", "Más errores", "Menos mantenimiento"],
    "correctAnswer": 1
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
            <h2 className="text-xl text-muted-foreground">Simulacro I</h2>
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
