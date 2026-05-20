"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, X, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Question { question: string; options: string[]; correctAnswer: number }

const questions: Question[] = [
  {
    question: "1. El currículum vitae es:",
    options: [
      "Un documento que resume la trayectoria profesional",
      "Un contrato de trabajo",
      "Un informe médico",
      "Un documento legal obligatorio"
    ],
    correctAnswer: 0
  },
  {
    question: "2. El objetivo principal del currículum es:",
    options: [
      "Solicitar vacaciones",
      "Conseguir un empleo",
      "Pedir un ascenso",
      "Firmar un contrato"
    ],
    correctAnswer: 1
  },
  {
    question: "3. ¿Qué información debe incluir un CV?",
    options: [
      "Solo experiencia",
      "Solo formación",
      "Experiencia, formación y datos personales",
      "Solo datos personales"
    ],
    correctAnswer: 2
  },
  {
    question: "4. El perfil profesional en el CV sirve para:",
    options: [
      "Indicar el salario",
      "Sustituir la experiencia",
      "Decorar el documento",
      "Resumir la trayectoria y objetivos"
    ],
    correctAnswer: 3
  },
  {
    question: "5. La carta de presentación acompaña a:",
    options: [
      "El contrato",
      "EI DNI",
      "El currículum",
      "La nómina"
    ],
    correctAnswer: 2
  },
  {
    question: "6. La carta de presentación tiene como finalidad:",
    options: [
      "Calcular salario",
      "Firmar contrato",
      "Solicitar vacaciones",
      "Presentar al candidato"
    ],
    correctAnswer: 3
  },
  {
    question: "7. En una entrevista de trabajo es importante:",
    options: [
      "Interrumpir",
      "No hablar",
      "Llegar tarde",
      "Mostrar interés"
    ],
    correctAnswer: 3
  },
  {
    question: "8. La comunicación verbal incluye:",
    options: [
      "Gestos",
      "Palabras",
      "Postura",
      "Mirada"
    ],
    correctAnswer: 1
  },
  {
    question: "9. La comunicación no verbal incluye:",
    options: [
      "Escritura",
      "Tono de voz",
      "Palabras",
      "Gestos y postura"
    ],
    correctAnswer: 3
  },
  {
    question: "10. Una entrevista laboral sirve para:",
    options: [
      "Firmar contrato",
      "Evaluar al candidato",
      "Despedir",
      "Pagar salario"
    ],
    correctAnswer: 1
  },
  {
    question: "11. La empleabilidad se refiere a:",
    options: [
      "Capacidad de conseguir y mantener empleo",
      "Reducir jornada",
      "Tener empleo fijo",
      "Cobrar más salario"
    ],
    correctAnswer: 0
  },
  {
    question: "12. Las competencias profesionales son:",
    options: [
      "Vacaciones",
      "Habilidades y conocimientos",
      "Contratos",
      "Salarios"
    ],
    correctAnswer: 1
  },
  {
    question: "13. La actitud en una entrevista debe ser:",
    options: [
      "Profesional",
      "Pasiva",
      "Indiferente",
      "Negativa"
    ],
    correctAnswer: 0
  },
  {
    question: "14. El lenguaje corporal debe ser:",
    options: [
      "Nervioso",
      "Cerrado",
      "Seguro y natural",
      "Exagerado"
    ],
    correctAnswer: 2
  },
  {
    question: "15. La escucha activa implica:",
    options: [
      "Ignorar",
      "Interrumpir",
      "No prestar atención",
      "Prestar atención y responder adecuadamente"
    ],
    correctAnswer: 3
  },
  {
    question: "16. El mercado laboral está formado por:",
    options: [
      "Solo trabajadores",
      "Empresas y trabajadores",
      "Solo contratos",
      "Solo empresas"
    ],
    correctAnswer: 1
  },
  {
    question: "17. La búsqueda de empleo puede hacerse mediante:",
    options: [
      "Solo contactos",
      "Solo empresas",
      "Redes sociales profesionales",
      "Solo prensa"
    ],
    correctAnswer: 2
  },
  {
    question: "18. LinkedIn es:",
    options: [
      "Una empresa",
      "Una red social profesional",
      "Una nómina",
      "Un contrato"
    ],
    correctAnswer: 1
  },
  {
    question: "19. El networking consiste en:",
    options: [
      "Firmar documentos",
      "Crear contactos profesionales",
      "Pagar salarios",
      "Hacer contratos"
    ],
    correctAnswer: 1
  },
  {
    question: "20. Una oferta de empleo incluye:",
    options: [
      "Solo contrato",
      "Solo salario",
      "Solo horario",
      "Requisitos y condiciones"
    ],
    correctAnswer: 3
  },
  {
    question: "21. El autoconocimiento permite:",
    options: [
      "Reducir salario",
      "Firmar contratos",
      "Conocer fortalezas y debilidades",
      "Evitar empleo"
    ],
    correctAnswer: 2
  },
  {
    question: "22. La marca personal es:",
    options: [
      "La imagen profesional que proyectas",
      "Un salario",
      "Un contrato",
      "Una empresa"
    ],
    correctAnswer: 0
  },
  {
    question: "23. Un objetivo profesional debe ser:",
    options: [
      "General",
      "Imposible",
      "Irreal",
      "Claro y alcanzable"
    ],
    correctAnswer: 3
  },
  {
    question: "24. La formación continua permite:",
    options: [
      "Evitar trabajo",
      "No aprender",
      "Reducir salario",
      "Mejorar competencias"
    ],
    correctAnswer: 3
  },
  {
    question: "25. La flexibilidad laboral implica:",
    options: [
      "Adaptación a cambios",
      "Reducir jornada",
      "No trabajar",
      "Rigidez"
    ],
    correctAnswer: 0
  },
  {
    question: "26. El trabajo en equipo requiere:",
    options: [
      "Competencia",
      "Aislamiento",
      "Individualismo",
      "Colaboración"
    ],
    correctAnswer: 3
  },
  {
    question: "27. La responsabilidad laboral implica:",
    options: [
      "No cumplir",
      "Llegar tarde",
      "Cumplir tareas",
      "Evitar trabajo"
    ],
    correctAnswer: 2
  },
  {
    question: "28. La iniciativa es:",
    options: [
      "No hacer nada",
      "Esperar órdenes",
      "Evitar responsabilidades",
      "Actuar de forma proactiva"
    ],
    correctAnswer: 3
  },
  {
    question: "29. La organización del tiempo permite:",
    options: [
      "Reducir trabajo",
      "Evitar tareas",
      "Perder tiempo",
      "Ser más eficiente"
    ],
    correctAnswer: 3
  },
  {
    question: "30. La toma de decisiones implica:",
    options: [
      "Delegar siempre",
      "No pensar",
      "Evitar elegir",
      "Analizar y elegir opciones"
    ],
    correctAnswer: 3
  }
]

function shuffleArray<T>(array: T[]): T[] { const newArray = [...array]; for (let i = newArray.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [newArray[i], newArray[j]] = [newArray[j], newArray[i]] } return newArray }

export default function IPE2Test2Quiz() {
  const [started, setStarted] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [incorrectCount, setIncorrectCount] = useState(0)
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([])
  const [finished, setFinished] = useState(false)

  const startQuiz = () => { setShuffledQuestions(shuffleArray(questions)); setStarted(true); setCurrentQuestionIndex(0); setSelectedAnswer(null); setShowFeedback(false); setCorrectCount(0); setIncorrectCount(0); setFinished(false) }
  const handleAnswerClick = (answerIndex: number) => { if (showFeedback) return; setSelectedAnswer(answerIndex); setShowFeedback(true); if (answerIndex === shuffledQuestions[currentQuestionIndex].correctAnswer) { setCorrectCount(correctCount + 1) } else { setIncorrectCount(incorrectCount + 1) } }
  const handleNext = () => { if (currentQuestionIndex < shuffledQuestions.length - 1) { setCurrentQuestionIndex(currentQuestionIndex + 1); setSelectedAnswer(null); setShowFeedback(false) } else { setFinished(true) } }
  const handlePrevious = () => { if (currentQuestionIndex > 0) { setCurrentQuestionIndex(currentQuestionIndex - 1); setSelectedAnswer(null); setShowFeedback(false) } }

  if (!started) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-lg p-8 bg-card border-border">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"><ArrowLeft className="w-4 h-4" />Volver al inicio</Link>
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold"><span className="text-foreground">IPE II</span></h1>
            <h2 className="text-xl text-muted-foreground">Test II</h2>
            <p className="text-muted-foreground text-lg">Itinerario para la empleabilidad II</p>
            <div className="space-y-4 text-left py-6">
              <div className="flex items-start gap-3"><Check className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" /><div><p className="font-semibold text-foreground">{questions.length} Preguntas</p><p className="text-sm text-muted-foreground">Todos los conceptos clave</p></div></div>
              <div className="flex items-start gap-3"><Check className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" /><div><p className="font-semibold text-foreground">Preguntas Aleatorizadas</p><p className="text-sm text-muted-foreground">Cada sesion es diferente</p></div></div>
              <div className="flex items-start gap-3"><Check className="w-5 h-5 text-teal-500 mt-0.5 shrink-0" /><div><p className="font-semibold text-foreground">Retroalimentacion Inmediata</p><p className="text-sm text-muted-foreground">Aprende mientras practicas</p></div></div>
            </div>
            <Button onClick={startQuiz} size="lg" className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold">Comenzar Quiz</Button>
          </div>
        </Card>
      </div>
    )
  }

  if (finished) {
    const finalScore = correctCount - (incorrectCount * 0.25); const percentage = Math.round((finalScore / shuffledQuestions.length) * 100)
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-lg p-8 bg-card border-border">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Quiz Completado</h2>
            <div className="py-8"><div className="text-6xl font-bold text-teal-500 mb-2">{Math.max(0, percentage)}%</div><p className="text-xl text-muted-foreground">Puntuacion final: {finalScore.toFixed(2)} de {shuffledQuestions.length}</p></div>
            <div className="space-y-2 text-left bg-muted/50 p-4 rounded-lg">
              <p className="text-foreground flex justify-between"><span>Respuestas correctas:</span><span className="text-green-500 font-semibold">{correctCount}</span></p>
              <p className="text-foreground flex justify-between"><span>Respuestas incorrectas:</span><span className="text-red-500 font-semibold">{incorrectCount}</span></p>
              <p className="text-foreground flex justify-between border-t border-border pt-2 mt-2"><span>Penalizacion (x0.25):</span><span className="text-red-500 font-semibold">-{(incorrectCount * 0.25).toFixed(2)}</span></p>
            </div>
            <div className="space-y-3">
              <Button onClick={startQuiz} size="lg" className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold">Intentar de Nuevo</Button>
              <Link href="/" className="block"><Button variant="outline" size="lg" className="w-full bg-transparent">Volver al Inicio</Button></Link>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex]; const answeredCount = currentQuestionIndex + (showFeedback ? 1 : 0)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-border">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"><ArrowLeft className="w-4 h-4" />Volver</Link>
        <div className="text-sm text-muted-foreground">Pregunta {currentQuestionIndex + 1} de {shuffledQuestions.length}{" "}<span className="text-teal-500">{answeredCount} respondidas</span></div>
      </div>
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl p-8 bg-card border-border">
          <div className="space-y-6">
            <div className="flex justify-between items-start"><h2 className="text-2xl font-bold text-foreground text-balance flex-1">{currentQuestion.question}</h2><span className="text-sm text-muted-foreground ml-4">{currentQuestionIndex + 1}/{shuffledQuestions.length}</span></div>
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index; const isCorrect = index === currentQuestion.correctAnswer; const showCorrect = showFeedback && isCorrect; const showIncorrect = showFeedback && isSelected && !isCorrect
                return (<button key={index} onClick={() => handleAnswerClick(index)} disabled={showFeedback} className={`w-full text-left p-4 rounded-lg border-2 transition-all ${!showFeedback && "hover:border-teal-500 hover:bg-accent cursor-pointer"} ${showFeedback && "cursor-not-allowed"} ${isSelected && !showFeedback && "border-teal-500 bg-accent"} ${showCorrect && "border-green-500 bg-green-500/10"} ${showIncorrect && "border-red-500 bg-red-500/10"} ${!isSelected && !showCorrect && !showIncorrect && "border-border bg-card"}`}><div className="flex items-center justify-between gap-3"><span className="text-foreground font-medium">{option}</span>{showCorrect && <Check className="w-5 h-5 text-green-500 shrink-0" />}{showIncorrect && <X className="w-5 h-5 text-red-500 shrink-0" />}</div></button>)
              })}
            </div>
            <div className="flex gap-3 pt-4 border-t border-border"><Button onClick={handlePrevious} variant="outline" className="flex-1" disabled={currentQuestionIndex === 0}>Anterior</Button><Button onClick={handleNext} className="flex-1 bg-teal-500 hover:bg-teal-600 text-white" disabled={!showFeedback}>{currentQuestionIndex < shuffledQuestions.length - 1 ? "Siguiente" : "Ver Resultados"}</Button></div>
          </div>
        </Card>
      </div>
      <div className="p-4"><div className="h-2 bg-muted rounded-full overflow-hidden max-w-2xl mx-auto"><div className="h-full bg-teal-500 transition-all duration-300" style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }} /></div></div>
    </div>
  )
}
