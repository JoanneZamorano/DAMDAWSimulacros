"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, X, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Question { question: string; options: string[]; correctAnswer: number }

const questions: Question[] = [
  {
    question: "1. I'm ......... the budget for new car models.",
    options: ["responsible of", "responsible at", "responsibility for", "responsible for"],
    correctAnswer: 3,
  },
  {
    question: "2. If you work more hours than usual, you do",
    options: ["overtime", "flexitime", "part-time", "commission"],
    correctAnswer: 0,
  },
  {
    question: "3. A ......... employee is very enthusiastic and wants to succeed.",
    options: ["methodical", "numerate", "motivated", "flexible"],
    correctAnswer: 2,
  },
  {
    question: "4. She is very skilled ......... using Excel and data analysis.",
    options: ["with", "to", "at/in", "on"],
    correctAnswer: 2,
  },
  {
    question: "5. Factory workers often work in ......... : day, night...",
    options: ["clocks", "rounds", "shifts", "routines"],
    correctAnswer: 2,
  },
  {
    question: "6. I work ......... a multinational company in the tech sector.",
    options: ["with", "for", "at", "in"],
    correctAnswer: 1,
  },
  {
    question: "7. Employers look for candidates who are ......... and can work independently.",
    options: ["self-starters", "commuters", "managers", "team players"],
    correctAnswer: 0,
  },
  {
    question: "8. Many students find ........ jobs during the holidays.",
    options: ["regular", "permanent", "temporary", "fixed"],
    correctAnswer: 2,
  },
  {
    question: "9. Employees can ......... in at any time between 8 and 10.",
    options: ["shift", "sign", "log", "clock"],
    correctAnswer: 3,
  },
  {
    question: "10. My total ......... includes my salary and bonuses.",
    options: ["income", "overtime", "benefit", "wage"],
    correctAnswer: 0,
  },
  {
    question: "11. My manager is ......... work today because she is ill.",
    options: ["out of", "off", "in", "on"],
    correctAnswer: 1,
  },
  {
    question: "12. Harry is very good ......... communicating with customers.",
    options: ["with", "in", "on", "at"],
    correctAnswer: 3,
  },
  {
    question: "13. A ......... person works in a very organized and systematic way.",
    options: ["motivated", "methodical", "talented", "numerate"],
    correctAnswer: 1,
  },
  {
    question: "14. Many people are ......... work due to the economic crisis.",
    options: ["out of", "off", "in", "on"],
    correctAnswer: 0,
  },
  {
    question: "15. Computer programming is an example of ......... skill.",
    options: ["digital", "hard", "difficult", "soft"],
    correctAnswer: 1,
  },
  {
    question: "16. Good communication is an example of ......... skill.",
    options: ["financial", "technical", "legal", "soft"],
    correctAnswer: 3,
  },
  {
    question: "17. A polite way to start a letter when you don't know the name is 'Dear .........'",
    options: ["Mr or Mrs", "All", "Sir or Madam", "Friend"],
    correctAnswer: 2,
  },
  {
    question: "18. We need someone who is a real ......... ; the job requires constant collaboration.",
    options: ["team player", "hard worker", "lone worker", "social player"],
    correctAnswer: 0,
  },
  {
    question: "19. Kerstin is ......... of the design department at a European car company.",
    options: ["in charge", "confident", "responsible", "the manager for"],
    correctAnswer: 0,
  },
  {
    question: "20. You usually end a cover letter with 'I look forward to ......... from you'.",
    options: ["hear", "hears", "hearing", "heard"],
    correctAnswer: 2,
  },
  {
    question: "21. He works ......... the IT department of a large company.",
    options: ["at", "in", "on", "for"],
    correctAnswer: 1,
  },
  {
    question: "22. I graduated ......... Oxford University ......... a degree ......... engineering.",
    options: ["in /with/ of", "at/on/of", "on/in/with", "from / with / in"],
    correctAnswer: 3,
  },
  {
    question: "23. A CV usually includes your education, skills, and",
    options: ["salary", "work experience", "address", "hobbies"],
    correctAnswer: 1,
  },
  {
    question: "24. A polite ending for a formal letter or email is 'Yours .........'",
    options: ["happily", "faithfully", "kindly", "honestly"],
    correctAnswer: 1,
  },
  {
    question: "25. I leave ......... work at 7.30 every morning.",
    options: ["for", "to", "in", "from"],
    correctAnswer: 0,
  },
  {
    question: "26. I have a ......... job, so I work from 9 to 5 every day.",
    options: ["part-time", "temporary", "full-time", "shift"],
    correctAnswer: 2,
  },
  {
    question: "27. They live far from the city, so they ......... to work every day.",
    options: ["shift", "clock", "commute", "telecommute"],
    correctAnswer: 2,
  },
  {
    question: "28. My colleague is very good ......... numbers and financial data.",
    options: ["at", "in", "with", "on"],
    correctAnswer: 0,
  },
  {
    question: "29. Chris works only 15 hours per week. He has a ......... job.",
    options: ["temporary", "half-time", "part-time", "full-time"],
    correctAnswer: 2,
  },
  {
    question: "30. Fringe ......... include things like gym memberships or free meals.",
    options: ["wages", "salaries", "benefits", "responsibilities"],
    correctAnswer: 2,
  },
];

function shuffleArray<T>(array: T[]): T[] { const newArray = [...array]; for (let i = newArray.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [newArray[i], newArray[j]] = [newArray[j], newArray[i]] } return newArray }

export default function InglesTest1Quiz() {
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
            <h1 className="text-4xl font-bold"><span className="text-foreground">Ingles</span></h1>
            <h2 className="text-xl text-muted-foreground">Test I</h2>
            <p className="text-muted-foreground text-lg">Ingles tecnico profesional</p>
            <div className="space-y-4 text-left py-6">
              <div className="flex items-start gap-3"><Check className="w-5 h-5 text-rose-500 mt-0.5 shrink-0" /><div><p className="font-semibold text-foreground">{questions.length} Preguntas</p><p className="text-sm text-muted-foreground">Todos los conceptos clave</p></div></div>
              <div className="flex items-start gap-3"><Check className="w-5 h-5 text-rose-500 mt-0.5 shrink-0" /><div><p className="font-semibold text-foreground">Preguntas Aleatorizadas</p><p className="text-sm text-muted-foreground">Cada sesion es diferente</p></div></div>
              <div className="flex items-start gap-3"><Check className="w-5 h-5 text-rose-500 mt-0.5 shrink-0" /><div><p className="font-semibold text-foreground">Retroalimentacion Inmediata</p><p className="text-sm text-muted-foreground">Aprende mientras practicas</p></div></div>
            </div>
            <Button onClick={startQuiz} size="lg" className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold">Comenzar Quiz</Button>
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
            <div className="py-8"><div className="text-6xl font-bold text-rose-500 mb-2">{Math.max(0, percentage)}%</div><p className="text-xl text-muted-foreground">Puntuacion final: {finalScore.toFixed(2)} de {shuffledQuestions.length}</p></div>
            <div className="space-y-2 text-left bg-muted/50 p-4 rounded-lg">
              <p className="text-foreground flex justify-between"><span>Respuestas correctas:</span><span className="text-green-500 font-semibold">{correctCount}</span></p>
              <p className="text-foreground flex justify-between"><span>Respuestas incorrectas:</span><span className="text-red-500 font-semibold">{incorrectCount}</span></p>
              <p className="text-foreground flex justify-between border-t border-border pt-2 mt-2"><span>Penalizacion (x0.25):</span><span className="text-red-500 font-semibold">-{(incorrectCount * 0.25).toFixed(2)}</span></p>
            </div>
            <div className="space-y-3">
              <Button onClick={startQuiz} size="lg" className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold">Intentar de Nuevo</Button>
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
        <div className="text-sm text-muted-foreground">Pregunta {currentQuestionIndex + 1} de {shuffledQuestions.length}{" "}<span className="text-rose-500">{answeredCount} respondidas</span></div>
      </div>
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl p-8 bg-card border-border">
          <div className="space-y-6">
            <div className="flex justify-between items-start"><h2 className="text-2xl font-bold text-foreground text-balance flex-1">{currentQuestion.question}</h2><span className="text-sm text-muted-foreground ml-4">{currentQuestionIndex + 1}/{shuffledQuestions.length}</span></div>
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index; const isCorrect = index === currentQuestion.correctAnswer; const showCorrect = showFeedback && isCorrect; const showIncorrect = showFeedback && isSelected && !isCorrect
                return (<button key={index} onClick={() => handleAnswerClick(index)} disabled={showFeedback} className={`w-full text-left p-4 rounded-lg border-2 transition-all ${!showFeedback && "hover:border-rose-500 hover:bg-accent cursor-pointer"} ${showFeedback && "cursor-not-allowed"} ${isSelected && !showFeedback && "border-rose-500 bg-accent"} ${showCorrect && "border-green-500 bg-green-500/10"} ${showIncorrect && "border-red-500 bg-red-500/10"} ${!isSelected && !showCorrect && !showIncorrect && "border-border bg-card"}`}><div className="flex items-center justify-between gap-3"><span className="text-foreground font-medium">{option}</span>{showCorrect && <Check className="w-5 h-5 text-green-500 shrink-0" />}{showIncorrect && <X className="w-5 h-5 text-red-500 shrink-0" />}</div></button>)
              })}
            </div>
            <div className="flex gap-3 pt-4 border-t border-border"><Button onClick={handlePrevious} variant="outline" className="flex-1" disabled={currentQuestionIndex === 0}>Anterior</Button><Button onClick={handleNext} className="flex-1 bg-rose-500 hover:bg-rose-600 text-white" disabled={!showFeedback}>{currentQuestionIndex < shuffledQuestions.length - 1 ? "Siguiente" : "Ver Resultados"}</Button></div>
          </div>
        </Card>
      </div>
      <div className="p-4"><div className="h-2 bg-muted rounded-full overflow-hidden max-w-2xl mx-auto"><div className="h-full bg-rose-500 transition-all duration-300" style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }} /></div></div>
    </div>
  )
}
