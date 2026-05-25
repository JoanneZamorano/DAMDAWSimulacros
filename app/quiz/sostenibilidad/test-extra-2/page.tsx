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
    question: "56. ¿Cuál de las siguientes prácticas forma parte de la estrategia de las «5 R»?",
    options: [
      "Recolectar residuos industriales sin clasificar",
      "Rechazar productos con exceso de empaques no necesarios",
      "Remodelar completamente todos los procesos productivos",
      "Recaudar fondos para programas ambientales"
    ],
    correctAnswer: 1,
  },
  {
    question: "57. ¿En qué unidad de medida se expresa típicamente la huella ecológica de un territorio o población?",
    options: [
      "Kilogramos por habitante anual",
      "Hectáreas globales (gha) por habitante",
      "Toneladas métricas por kilómetro cuadrado",
      "Megajulios por cápita mensual"
    ],
    correctAnswer: 1,
  },
  {
    question: "58. Según el marco de las '5 R' de sostenibilidad (Rechazar, Reducir, Reutilizar, Reparar y Reciclar), ¿cuál de estas acciones pertenece específicamente a dicho enfoque?",
    options: [
      "Rentabilidad del ciclo productivo",
      "Reparación de equipos obsoletos para extender su vida útil",
      "Regulación normativa medioambiental",
      "Revalorización de activos empresariales"
    ],
    correctAnswer: 1,
  },
  {
    question: "59. ¿Cuál es la causa principal de la aceleración del cambio climático en el período contemporáneo?",
    options: [
      "Variaciones naturales en la actividad solar y ciclos geológicos terrestres",
      "El aumento de gases de efecto invernadero de origen antropogénico debido a actividades industriales y de consumo",
      "La reducción de la cobertura vegetal causada exclusivamente por fenómenos naturales de erosión",
      "El incremento en la cantidad de aerosoles marinos por evaporación oceánica"
    ],
    correctAnswer: 1,
  },
  {
    question: "60. ¿Qué característica define al Día de la Sobrecapacidad de la Tierra (Overshoot Day)?",
    options: [
      "La fecha en que la humanidad ha consumido todos los recursos naturales renovables que el planeta puede generar en un año",
      "El momento en que la población mundial alcanza su máximo histórico en crecimiento demográfico",
      "La jornada designada por Naciones Unidas para conmemorar la Cumbre de Estocolmo",
      "El año en que se espera que se agoten completamente los combustibles fósiles del planeta"
    ],
    correctAnswer: 0,
  },
  {
    question: "61. ¿Qué significa que un territorio o sector productivo alcance la neutralidad climática?",
    options: [
      "Que detiene completamente toda actividad económica para no generar emisiones",
      "Que iguala sus emisiones de gases de efecto invernadero con la cantidad que absorbe o compensa, resultando en un balance neto cero",
      "Que invierte toda su presupuesto en energías renovables sin considerar eficiencia",
      "Que reduce sus emisiones en un 50% respecto al año base de referencia"
    ],
    correctAnswer: 1,
  },
  {
    question: "62. ¿Cuál de los siguientes criterios caracteriza principalmente al transporte considerado sostenible?",
    options: [
      "Minimizar la generación de emisiones y externalidades negativas, priorizando modos colectivos o de bajas emisiones",
      "Garantizar que todos los desplazamientos sean de corta distancia sin exceder 5 kilómetros",
      "Utilizar exclusivamente vehículos de propulsión eléctrica sin importar su origen energético",
      "Reducir el número de desplazamientos mediante prohibición de circulación urbana"
    ],
    correctAnswer: 0,
  },
  {
    question: "63. ¿Cuál es la propuesta fundamental de la economía circular en contraposición al modelo lineal tradicional?",
    options: [
      "Eliminar el sector secundario de transformación de materias primas",
      "Mantener recursos en uso el mayor tiempo posible, regenerando productos al final de su vida útil en lugar de desecharlos",
      "Incrementar la producción de bienes de consumo para garantizar empleo industrial",
      "Trasladar toda la producción a países en desarrollo con regulación ambiental menor"
    ],
    correctAnswer: 1,
  },
  {
    question: "64. ¿Cuál es el propósito principal del ecodiseño en los procesos de desarrollo de productos?",
    options: [
      "Integrar criterios ambientales desde las primeras fases de concepción para minimizar impactos durante todo el ciclo de vida",
      "Reducir únicamente el empaque externo de los productos finales",
      "Aplicar certificaciones ambientales retrospectivas una vez completada la fabricación",
      "Diseñar productos que sean biodegradables en menos de 30 días"
    ],
    correctAnswer: 0,
  },
  {
    question: "65. ¿Cuál es la actividad principal de plataformas como Back Market en el contexto de sostenibilidad?",
    options: [
      "Facilitar la compraventa de productos reacondicionados y de segunda mano, extendiendo la vida útil de equipos electrónicos",
      "Importar productos electrónicos de bajo costo desde mercados no regulados",
      "Realizar reciclaje industrial de todos los residuos electrónicos sin distinción de origen",
      "Fabricar réplicas legales de productos de marcas reconocidas a menor precio"
    ],
    correctAnswer: 0,
  },
  {
    question: "66. ¿Cuál es la definición correcta de biodiversidad en términos ecológicos y de sostenibilidad?",
    options: [
      "La cantidad total de biomasa que existe en un ecosistema en un momento dado",
      "La variedad de organismos vivos, especies, genes y ecosistemas presentes en una región o en el planeta",
      "El número de áreas protegidas establecidas por gobiernos nacionales",
      "La capacidad de reproducción de una especie animal dominante en un territorio"
    ],
    correctAnswer: 1,
  },
  {
    question: "67. ¿Cuál de las siguientes constituye una amenaza significativa para la conservación de la biodiversidad?",
    options: [
      "El aumento controlado de la densidad demográfica en ciudades consolidadas",
      "La pérdida y fragmentación de hábitats naturales debido a expansión agrícola, urbanización e infraestructuras",
      "La prohibición total de aprovechamientos sostenibles de recursos naturales",
      "El incremento en la inversión pública en educación ambiental"
    ],
    correctAnswer: 1,
  },
  {
    question: "68. ¿Qué mide la tasa AROPE en el contexto de la sostenibilidad social?",
    options: [
      "La absorción de residuos orgánicos en procesos de compostaje industrial",
      "El riesgo de pobreza o exclusión social de la población, considerando ingresos, privación material y baja intensidad laboral",
      "La cantidad de aire contaminado respirado por población urbana",
      "La tasa de aprovechamiento de recursos petrológicos en economías emergentes"
    ],
    correctAnswer: 1,
  },
  {
    question: "69. ¿Cuál es el objetivo primordial del desarrollo sostenible en relación con la satisfacción de las necesidades humanas?",
    options: [
      "Maximizar la producción industrial sin límites de recursos",
      "Satisfacer las necesidades presentes sin comprometer la capacidad de las generaciones futuras",
      "Priorizar únicamente el crecimiento económico de los países desarrollados",
      "Reducir toda actividad económica para proteger el medio ambiente"
    ],
    correctAnswer: 1,
  },
  {
    question: "70. ¿Qué transformación caracteriza a los fenómenos meteorológicos bajo el impacto del cambio climático?",
    options: [
      "Se vuelven más predecibles y de menor intensidad",
      "Aumentan en frecuencia e intensidad, con patrones más extremos e impredecibles",
      "Disminuyen considerablemente en toda la geografía mundial",
      "Se distribuyen de forma equilibrada en todas las latitudes terrestres"
    ],
    correctAnswer: 1,
  },
  {
    question: "71. ¿Cuál de los siguientes NO es un pilar fundamental de la sostenibilidad?",
    options: [
      "Pilar económico (viabilidad financiera)",
      "Pilar ambiental (protección de ecosistemas)",
      "Pilar de supremacía industrial (maximización de producción)",
      "Pilar social (equidad y calidad de vida)"
    ],
    correctAnswer: 2,
  },
  {
    question: "72. Según la estrategia de las '5 R' para la gestión sostenible de residuos, ¿cuál de las siguientes opciones representa correctamente una de sus acciones fundamentales?",
    options: [
      "Recolectar residuos mezclados para agilizar su transporte",
      "Reducir la cantidad de recursos consumidos y residuos generados en origen",
      "Revender productos usados sin control de calidad ni trazabilidad",
      "Reasignar fondos medioambientales a otras áreas de la empresa"
    ],
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

export default function DigitalizacionSimulacro1Quiz() {
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
              <span className="text-foreground">Sostenibilidad</span>
            </h1>
            <h2 className="text-xl text-muted-foreground">Test Extra II</h2>
            <p className="text-muted-foreground text-lg">Desarrollo sostenible y medioambiente</p>

            <div className="space-y-4 text-left py-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-violet-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">{questions.length} Preguntas</p>
                  <p className="text-sm text-muted-foreground">Todos los conceptos clave</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-violet-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Preguntas Aleatorizadas</p>
                  <p className="text-sm text-muted-foreground">Cada sesion es diferente</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-violet-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Retroalimentacion Inmediata</p>
                  <p className="text-sm text-muted-foreground">Aprende mientras practicas</p>
                </div>
              </div>
            </div>

            <Button
              onClick={startQuiz}
              size="lg"
              className="w-full bg-violet-500 hover:bg-violet-600 text-white font-semibold"
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
              <div className="text-6xl font-bold text-violet-500 mb-2">{Math.max(0, percentage)}%</div>
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
              {percentage >= 90 && <p className="text-lg text-foreground">Excelente. Dominas Digitalizacion.</p>}
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
                className="w-full bg-violet-500 hover:bg-violet-600 text-white font-semibold"
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
          <span className="text-violet-500">{answeredCount} respondidas</span>
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
                      ${!showFeedback && "hover:border-violet-500 hover:bg-accent cursor-pointer"}
                      ${showFeedback && "cursor-not-allowed"}
                      ${isSelected && !showFeedback && "border-violet-500 bg-accent"}
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
                className="flex-1 bg-violet-500 hover:bg-violet-600 text-white"
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
            className="h-full bg-violet-500 transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
