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
    question: "1. ¿Cuál es el objetivo principal de una marca personal sólida en la búsqueda de empleo?",
    options: [
      "Evitar usar portales de empleo",
      "Construir una identidad profesional visible y auténtica que refleje experiencia",
      "Conseguir entrevistas sin CV",
      "Sustituir el networking por completo"
    ],
    correctAnswer: 1
  },
  {
    question: "2. ¿Qué implica adaptar el CV a cada oferta?",
    options: [
      "Mantener el mismo CV para todas las vacantes",
      "Personalizarlo destacando logros y palabras clave relevantes para la oferta",
      "Cambiar solo la foto del perfil",
      "Eliminar la experiencia previa para que sea más breve"
    ],
    correctAnswer: 1
  },
  {
    question: "3. ¿Qué se entiende por dominio de plataformas digitales en esta unidad?",
    options: [
      "Usar únicamente WhatsApp para buscar empleo",
      "Crear CVs sin adaptarlos",
      "Utilizar Linkedin y portales especializados para aumentar visibilidad",
      "Evitar cualquier presencia online"
    ],
    correctAnswer: 2
  },
  {
    question: "4. El networking estratégico sirve principalmente para:",
    options: [
      "Acceder al mercado oculto de ofertas laborales mediante contactos",
      "Reducir la visibilidad profesional en redes",
      "Encontrar empleo solo a través de anuncios públicos",
      "No depender de ninguna relación profesional"
    ],
    correctAnswer: 0
  },
  {
    question: "5. Según el esquema de estrategia activa y proactiva, ¿qué dos caminos conducen a oportunidades laborales?",
    options: [
      "Solo portales generalistas y sindicatos",
      "Marca personal en plataformas digitales y networking",
      "Enviar el mismo CV a todas las empresas y esperar respuesta",
      "Hacer entrevistas sin preparación y repetirlas"
    ],
    correctAnswer: 1
  },
  {
    question: "6. ¿Cuál es la función principal de la carta de motivación según la unidad?",
    options: [
      "Repetir exactamente el CV",
      "Contar tu historia y motivación, mostrando personalidad y conexión",
      "Sustituir la entrevista",
      "Evitar hablar de motivación"
    ],
    correctAnswer: 1
  },
  {
    question: "7. En la preparación del CV, la concisión significa:",
    options: [
      "Incluir toda la vida laboral con máximo detalle",
      "Sintetizar la propuesta de valor de forma clara",
      "No incluir logros para no parecer presumido",
      "Copiar el CV de internet para ahorrar tiempo"
    ],
    correctAnswer: 1
  },
  {
    question: "8. La asertividad se define como:",
    options: [
      "La capacidad de imponer las propias ideas al grupo",
      "La capacidad de expresar ideas y necesidades respetando los derechos",
      "La habilidad para evitar cualquier conversación incómoda",
      "La costumbre de ceder siempre ante los demás"
    ],
    correctAnswer: 1
  },
  {
    question: "9. Según la unidad, la inteligencia emocional es la habilidad para:",
    options: [
      "Resolver operaciones matemáticas con rapidez",
      "Mandar sobre otras personas en el trabajo",
      "Identificar, comprender y regular las propias emociones y las de los demás",
      "Evitar cualquier conflicto interpersonal"
    ],
    correctAnswer: 2
  },
  {
    question: "10. ¿Qué son las competencias blandas?",
    options: [
      "Conocimientos exclusivamente técnicos para el trabajo",
      "Habilidades personales, sociales y emocionales",
      "Capacidades centradas solo en el uso de herramientas digitales",
      "Normas obligatorias de prevención laboral"
    ],
    correctAnswer: 1
  },
  {
    question: "11. La autorregulación implica principalmente:",
    options: [
      "Expresar siempre lo primero que se piensa",
      "Gestionar impulsos y reacciones, eligiendo respuestas útiles",
      "Evitar trabajar con otras personas",
      "Centrarse solo en las emociones ajenas"
    ],
    correctAnswer: 1
  },
  {
    question: "12. Según la matriz de Eisenhower, las tareas importantes, pero no urgentes deben:",
    options: [
      "Eliminarse",
      "Hacerse inmediatamente sin planificación",
      "Planificarse",
      "Delegarse siempre"
    ],
    correctAnswer: 2
  },
  {
    question: "13. ¿Cuál de las siguientes opciones forma parte de la gestión de relaciones?",
    options: [
      "Comunicación efectiva",
      "Cálculo financiero",
      "Archivo documental",
      "Archivo documental"
    ],
    correctAnswer: 0
  },
  {
    question: "14. La autoconciencia consiste en:",
    options: [
      "Reconocer qué emoción se siente, qué la provoca y cómo afecta a la conducta",
      "Dirigir equipos de trabajo con autoridad",
      "Delegar tareas complejas a otras personas",
      "Ignorar las emociones para ser más eficiente"
    ],
    correctAnswer: 0
  },
  {
    question: "15. ¿Cuál es uno de los pilares de la comunicación interpersonal?",
    options: [
      "La autoridad",
      "La escucha activa",
      "La jerarquía",
      "La competencia individual"
    ],
    correctAnswer: 1
  },
  {
    question: "16. ¿Qué caracteriza la escucha activa?",
    options: [
      "Interrumpir para opinar",
      "Escuchar solo lo importante",
      "Prestar atención completa y comprender el mensaje",
      "Ignorar emociones"
    ],
    correctAnswer: 2
  },
  {
    question: "17. La autorregulación implica:",
    options: [
      "Reprimir emociones",
      "Ignorar los problemas",
      "Gestionar impulsos y reacciones de forma adecuada",
      "Delegar tareas"
    ],
    correctAnswer: 2
  },
  {
    question: "18. La asertividad se define como:",
    options: [
      "Decir siempre lo que uno piensa sin filtros",
      "Evitar conflictos a toda costa",
      "Expresar ideas respetando los propios derechos y los de los demás",
      "Imponer la opinión propia"
    ],
    correctAnswer: 2
  },
  {
    question: "19. En la resolución de conflictos, el enfoque ganar-ganar busca:",
    options: [
      "Que una parte gane siempre",
      "Evitar el conflicto",
      "Beneficiar a todas las partes implicadas",
      "Imponer decisiones rápidas"
    ],
    correctAnswer: 2
  },
  {
    question: "20. La matriz de Eisenhower sirve para:",
    options: [
      "Evaluar emociones",
      "Resolver conflictos",
      "Clasificar tareas según urgencia e importancia",
      "Mejorar la comunicación"
    ],
    correctAnswer: 2
  },
  {
    question: "21. ¿Qué permite la comunicación efectiva?",
    options: [
      "Evitar el trabajo en equipo",
      "Expressar ideas con claridad y respeto",
      "Imponer decisiones",
      "Reducir la productividad"
    ],
    correctAnswer: 1
  },
  {
    question: "22. La autoconciencia consiste en:",
    options: [
      "Controlar a otras personas",
      "Reconocer las emociones propias y su impacto",
      "Evitar conflictos",
      "Trabajar en equipo"
    ],
    correctAnswer: 1
  },
  {
    question: "23. ¿Qué son las competencias blandas?",
    options: [
      "Habilidades técnicas específicas",
      "Conocimientos académicos",
      "Habilidades personales, sociales y emocionales",
      "Normas legales laborales"
    ],
    correctAnswer: 2
  },
  {
    question: "24. Según Daniel Goleman, la inteligencia emocional es:",
    options: [
      "La capacidad de memorizar información",
      "La habilidad para identificar y gestionar emociones propias y ajenas",
      "El conocimiento técnico aplicado",
      "La capacidad de trabajar solo"
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

export default function IPE2Simulacro1Quiz() {
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
            <h2 className="text-xl text-muted-foreground">Kahoot 1</h2>
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
