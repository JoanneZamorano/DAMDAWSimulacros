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
    question: "1. ¿Cuál es uno de los beneficios de trabajar la marca personal?",
    options: [
      "Reducir el número de entrevistas",
      "Diferenciarse de la competencia",
      "Evitar el uso de redes sociales",
      "No necesitar CV"
    ],
    correctAnswer: 1
  },
  {
    question: "2. ¿Qué incluye la experiencia profesional en el CV?",
    options: [
      "Solo el nombre de la empresa",
      "Puesto, empresa, funciones y fechas",
      "Puesto, empresa, funciones y fechas",
      "Solo el cargo"
    ],
    correctAnswer: 1
  },
  {
    question: "3. ¿Qué es la marca personal?",
    options: [
      "El currículum en papel",
      "La forma en que te perciben los demás",
      "Tu experiencia laboral únicamente",
      "Tu formación académica"
    ],
    correctAnswer: 1
  },
  {
    question: "4. ¿Cuál es la misión principal del CV?",
    options: [
      "Enumerar cursos",
      "Definir tu personalidad",
      "Defender tu candidatura",
      "Conseguir seguidores"
    ],
    correctAnswer: 2
  },
  {
    question: "5. ¿Cuál es una desventaja del CV online?",
    options: [
      "Difícil acceso",
      "No se puede actualizar",
      "Pérdida de privacidad",
      "No lo ven las empresas"
    ],
    correctAnswer: 2
  },
  {
    question: "6. ¿Qué elemento forma parte de la estructura de un CV?",
    options: [
      "Opiniones personales",
      "Datos personales",
      "Redes sociales obligatorias",
      "Fotografías familiares"
    ],
    correctAnswer: 1
  },
  {
    question: "7. ¿Cuál es una ventaja del CV vía email?",
    options: [
      "Mayor impacto visual",
      "Permite envío masivo y a distancia",
      "Se actualiza automáticamente",
      "Tiene más privacidad"
    ],
    correctAnswer: 1
  },
  {
    question: "8. ¿Qué debe incluir el extracto del CV?",
    options: [
      "Solo datos personales",
      "Perfil profesional y objetivo",
      "Solo experiencia",
      "Solo formación"
    ],
    correctAnswer: 1
  },
  {
    question: "9. ¿Cuánto tiempo tardan los reclutadores en una primera revisión de un CV?",
    options: [
      "1 minuto",
      "30 segundos",
      "6 segundos",
      "10 minutos"
    ],
    correctAnswer: 2
  },
  {
    question: "10. ¿Cuál es un formato posible de CV?",
    options: [
      "Solo en papel",
      "Solo online",
      "Documento, online o videocurrículum",
      "Solo en redes sociales"
    ],
    correctAnswer: 2
  },
  {
    question: "11. ¿Cuál era el objetivo principal de las entrevistas de problema?",
    options: [
      "Vender directamente el producto",
      "Conseguir financiación",
      "Confirmar que el problema es relevante",
      "Diseñar el logotipo de la empresa"
    ],
    correctAnswer: 2
  },
  {
    question: "12. ¿Cuál es el primer paso para generar una idea emprendedora útil?",
    options: [
      "Crear una página web",
      "Detectar un problema real",
      "Buscar financiación",
      "Contratar empleados"
    ],
    correctAnswer: 1
  },
  {
    question: "13. Según la unidad, una queja cotidiana puede convertirse en:",
    options: [
      "Un gasto innecesario",
      "Una estrategia publicitaria",
      "Una oportunidad de negocio",
      "Un problema legal"
    ],
    correctAnswer: 2
  },
  {
    question: "14. ¿Qué hizo Dropbox para validar su idea antes de desarrollar el producto completo?",
    options: [
      "Abrir tiendas físicas",
      "Crear una aplicación completa",
      "Lanzar un vídeo explicativo",
      "Contratar inversores"
    ],
    correctAnswer: 2
  },
  {
    question: "15. ¿Qué permiten hacer los Objetivos de Desarrollo Sostenible (ODS)?",
    options: [
      "Eliminar la competencia",
      "Detectar oportunidades con impacto social y ambiental",
      "Reducir impuestos empresariales",
      "Crear productos tecnológicos automáticamente"
    ],
    correctAnswer: 1
  },
  {
    question: "16. ¿Qué demuestra normalmente la existencia de competencia?",
    options: [
      "Que la idea no vale",
      "Que existe demanda real",
      "Que el negocio fracasará",
      "Que el mercado está cerrado"
    ],
    correctAnswer: 1
  },
  {
    question: "17. ¿Qué herramienta ayuda a observar tendencias y necesidades emergentes?",
    options: [
      "Excel",
      "Photoshop",
      "Google Trends",
      "PowerPoint"
    ],
    correctAnswer: 2
  },
  {
    question: "18. ¿Qué combina el Design Thinking para entender necesidades reales?",
    options: [
      "Publicidad y ventas",
      "Empatía, creatividad y experimentación",
      "Finanzas y contabilidad",
      "Tecnología y logística"
    ],
    correctAnswer: 1
  },
  {
    question: "19. ¿Qué se hace en la fase de prototipar?",
    options: [
      "Analizar balances financieros",
      "Crear versiones mínimas de la idea para aprender",
      "Contratar empleados",
      "Registrar la marca"
    ],
    correctAnswer: 1
  },
  {
    question: "20. ¿Qué organización utilizó Design Thinking para combatir la contaminación plástica?",
    options: [
      "Glovo",
      "Dropbox",
      "Heura Foods",
      "The Ocean Cleanup"
    ],
    correctAnswer: 3
  },
  {
    question: "21. ¿Qué tipo de financiación utiliza recursos propios?",
    options: [
      "Venture Capital",
      "Crowdfunding",
      "Bootstrapping",
      "Business Angels"
    ],
    correctAnswer: 2
  },
  {
    question: "22. ¿Cuál es la primera fase del proceso de Design Thinking?",
    options: [
      "Idear",
      "Prototipar",
      "Empatizar",
      "Testear"
    ],
    correctAnswer: 2
  },
  {
    question: "23. Según la unidad, el impacto social y ambiental:",
    options: [
      "Solo se mide al final del proyecto",
      "Es menos importante que el beneficio económico",
      "Debe incorporarse desde el inicio del proyecto",
      "Solo depende de las ONG"
    ],
    correctAnswer: 2
  },
  {
    question: "24. ¿Cuándo una idea se convierte realmente en negocio?",
    options: [
      "Cuando tiene muchos seguidores en redes sociales",
      "Cuando los ingresos superan los costes",
      "Cuando consigue financiación bancaria",
      "Cuando se registra legalmente"
    ],
    correctAnswer: 1
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

export default function IPE2Simulacro2Quiz() {
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
              <span className="text-foreground">IPE II</span>
            </h1>
            <h2 className="text-xl text-muted-foreground">Simulacro II</h2>
            <p className="text-muted-foreground text-lg">Itinerario para la empleabilidad II</p>

            <div className="space-y-4 text-left py-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">{questions.length} Preguntas</p>
                  <p className="text-sm text-muted-foreground">Todos los conceptos clave</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Preguntas Aleatorizadas</p>
                  <p className="text-sm text-muted-foreground">Cada sesion es diferente</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Retroalimentacion Inmediata</p>
                  <p className="text-sm text-muted-foreground">Aprende mientras practicas</p>
                </div>
              </div>
            </div>

            <Button
              onClick={startQuiz}
              size="lg"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold"
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
              <div className="text-6xl font-bold text-teal-500 mb-2">{Math.max(0, percentage)}%</div>
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
              {percentage >= 90 && <p className="text-lg text-foreground">Excelente. Dominas IPE II.</p>}
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
                className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold"
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
          <span className="text-teal-500">{answeredCount} respondidas</span>
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
                      ${!showFeedback && "hover:border-teal-500 hover:bg-accent cursor-pointer"}
                      ${showFeedback && "cursor-not-allowed"}
                      ${isSelected && !showFeedback && "border-teal-500 bg-accent"}
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
                className="flex-1 bg-teal-500 hover:bg-teal-600 text-white"
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
            className="h-full bg-teal-500 transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
