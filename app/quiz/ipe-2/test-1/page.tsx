"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, X, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Question { question: string; options: string[]; correctAnswer: number }

const questions: Question[] = [
  {
    question: "1. Las competencias blandas son:",
    options: [
      "a) Habilidades técnicas",
      "b) Habilidades personales, sociales y emocionales",
      "c) Conocimientos teóricos",
      "d) Certificaciones oficiales"
    ],
    correctAnswer: 1
  },
  {
    question: "2. La inteligencia emocional consiste en:",
    options: [
      "a) Resolver problemas matemáticos",
      "b) Identificar y gestionar emociones",
      "c) Memorizar datos",
      "d) Liderar empresas"
    ],
    correctAnswer: 1
  },
  {
    question: "3. La autoconciencia implica:",
    options: [
      "a) Ignorar emociones",
      "b) Reconocer emociones propias",
      "c) Controlar a otros",
      "d) Tomar decisiones rápidas"
    ],
    correctAnswer: 1
  },
  {
    question: "4. La autorregulación permite:",
    options: [
      "a) Actuar impulsivamente",
      "b) Controlar reacciones",
      "c) Evitar emociones",
      "d) Ignorar problemas"
    ],
    correctAnswer: 1
  },
  {
    question: "5. La motivación en IE es:",
    options: [
      "a) Evitar trabajar",
      "b) Orientarse a objetivos",
      "c) Descansar más",
      "d) Reducir esfuerzo"
    ],
    correctAnswer: 1
  },
  {
    question: "6. La empatía consiste en:",
    options: [
      "a) Ignorar a los demás",
      "b) Comprender emociones ajenas",
      "c) Mandar sobre otros",
      "d) Evitar conflictos"
    ],
    correctAnswer: 1
  },
  {
    question: "7. La autogestión combina:",
    options: [
      "a) Comunicación y liderazgo",
      "b) Autoconciencia, autorregulación y motivación",
      "c) Experiencia y formación",
      "d) Trabajo y salario"
    ],
    correctAnswer: 1
  },
  {
    question: "8. La comunicación efectiva permite:",
    options: [
      "a) Evitar hablar",
      "b) Expresar ideas con claridad",
      "c) Imponer opiniones",
      "d) Ignorar al equipo"
    ],
    correctAnswer: 1
  },
  {
    question: "9. La colaboración implica:",
    options: [
      "a) Trabajar solo",
      "b) Trabajar en equipo",
      "c) Evitar responsabilidades",
      "d) Delegar todo"
    ],
    correctAnswer: 1
  },
  {
    question: "10. Resolver conflictos implica:",
    options: [
      "a) Evitarlos",
      "b) Afrontarlos constructivamente",
      "c) Ignorarlos",
      "d) Imponer decisiones"
    ],
    correctAnswer: 1
  },
  {
    question: "11. La comunicación interpersonal incluye:",
    options: [
      "a) Solo palabras",
      "b) Nivel verbal, no verbal y paraverbal",
      "c) Solo gestos",
      "d) Solo tono"
    ],
    correctAnswer: 1
  },
  {
    question: "12. La asertividad es:",
    options: [
      "a) Imponer ideas",
      "b) Expresar ideas con respeto",
      "c) Callarse",
      "d) Evitar conflictos"
    ],
    correctAnswer: 1
  },
  {
    question: "13. La escucha activa consiste en:",
    options: [
      "a) Oír sin atención",
      "b) Prestar atención completa",
      "c) Interrumpir",
      "d) Ignorar"
    ],
    correctAnswer: 1
  },
  {
    question: "14. La matriz de Eisenhower sirve para:",
    options: [
      "a) Comunicar mejor",
      "b) Priorizar tareas",
      "c) Motivar equipos",
      "d) Resolver conflictos"
    ],
    correctAnswer: 1
  },
  {
    question: "15. Las tareas urgentes e importantes se deben:",
    options: [
      "a) Eliminar",
      "b) Delegar",
      "c) Hacer inmediatamente",
      "d) Posponer"
    ],
    correctAnswer: 2
  },
  {
    question: "16. Un conflicto de tarea es:",
    options: [
      "a) Personal",
      "b) Sobre el trabajo",
      "c) Emocional",
      "d) Familiar"
    ],
    correctAnswer: 1
  },
  {
    question: "17. Negociar con enfoque ganar-ganar implica:",
    options: [
      "a) Ganar a toda costa",
      "b) Beneficiar a ambas partes",
      "c) Evitar negociar",
      "d) Imponer decisiones"
    ],
    correctAnswer: 1
  },
  {
    question: "18. La seguridad psicológica es:",
    options: [
      "a) Seguridad física",
      "b) Confianza para expresar ideas",
      "c) Normas laborales",
      "d) Salario alto"
    ],
    correctAnswer: 1
  },
  {
    question: "19. El networking consiste en:",
    options: [
      "a) Enviar CVS",
      "b) Crear contactos profesionales",
      "c) Hacer entrevistas",
      "d) Estudiar"
    ],
    correctAnswer: 1
  },
  {
    question: "20. La marca personal es:",
    options: [
      "a) Tu ropa",
      "b) Cómo te perciben los demás",
      "c) Tu salario",
      "d) Tu contrato"
    ],
    correctAnswer: 1
  },
  {
    question: "21. LinkedIn se utiliza para:",
    options: [
      "a) Juegos",
      "b) Búsqueda de empleo",
      "c) Compras",
      "d) Estudio"
    ],
    correctAnswer: 1
  },
  {
    question: "22. El mercado oculto de empleo es:",
    options: [
      "a) Ofertas públicas",
      "b) Ofertas no publicadas",
      "c) Trabajos ilegales",
      "d) Empresas ocultas"
    ],
    correctAnswer: 1
  },
  {
    question: "23. El CV debe ser:",
    options: [
      "a) Largo",
      "b) Claro y conciso",
      "c) Confuso",
      "d) Muy detallado"
    ],
    correctAnswer: 1
  },
  {
    question: "24. El impacto visual del CV implica:",
    options: [
      "a) Colores aleatorios",
      "b) Diseño limpio y profesional",
      "c) Muchas imágenes",
      "d) Texto largo"
    ],
    correctAnswer: 1
  },
  {
    question: "25. Adaptar el CV significa:",
    options: [
      "a) Usar siempre el mismo",
      "b) Ajustarlo a cada oferta",
      "c) Cambiar el formato",
      "d) Añadir fotos"
    ],
    correctAnswer: 1
  },
  {
    question: "26. La carta de motivación sirve para:",
    options: [
      "a) Repetir el CV",
      "b) Mostrar motivación y personalidad",
      "c) Añadir datos personales",
      "d) Explicar el salario"
    ],
    correctAnswer: 1
  },
  {
    question: "27. El CV puede presentarse como:",
    options: [
      "a) Solo papel",
      "b) Documento, online o vide CV",
      "c) Solo email",
      "d) Solo vídeo"
    ],
    correctAnswer: 1
  },
  {
    question: "28. Una ventaja del CV online es:",
    options: [
      "a) Difícil acceso",
      "b) Fácil actualización",
      "c) Menor visibilidad",
      "d) Más costes"
    ],
    correctAnswer: 1
  },
  {
    question: "29. La estructura del CV incluye:",
    options: [
      "a) Solo experiencia",
      "b) Datos personales, formación y experiencia",
      "c) Solo formación",
      "d) Solo datos personales"
    ],
    correctAnswer: 1
  },
  {
    question: "30. El extracto del CV incluye:",
    options: [
      "a) Dirección",
      "b) Perfil profesional",
      "c) Salario",
      "d) Empresa"
    ],
    correctAnswer: 1
  }
]
function shuffleArray<T>(array: T[]): T[] { const newArray = [...array]; for (let i = newArray.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [newArray[i], newArray[j]] = [newArray[j], newArray[i]] } return newArray }

export default function IPE2Test1Quiz() {
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
            <h2 className="text-xl text-muted-foreground">Test I</h2>
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
