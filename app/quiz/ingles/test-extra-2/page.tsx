"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, X, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Question { question: string; options: string[]; correctAnswer: number }

const questions: Question[] = [
  {
    question: "1. I leave _______ work at 7.30 every morning.",
    options: ["for", "in", "to", "from"],
    correctAnswer: 0
  },
  {
    question: "2. My manager is _______ work today because she is ill.",
    options: ["on", "out of", "off", "in"],
    correctAnswer: 2
  },
  {
    question: "3. My total _______ includes my salary and bonuses.",
    options: ["wage", "income", "overtime", "benefit"],
    correctAnswer: 1
  },
  {
    question: "4. Employees can _______ in at any time between 8 and 10.",
    options: ["shift", "sign", "clock", "log"],
    correctAnswer: 2
  },
  {
    question: "5. We need someone who is a real _______ the job requires constant collaboration.",
    options: ["social player", "lone worker", "hard worker", "team player"],
    correctAnswer: 3
  },
  {
    question: "6. Computer programming is an example of _______ skill.",
    options: ["difficult", "digital", "soft", "hard"],
    correctAnswer: 3
  },
  {
    question: "7. Fringe _______ include things like gym memberships or free meals.",
    options: ["benefits", "salaries", "wages", "responsibilities"],
    correctAnswer: 0
  },
  {
    question: "8. I have a _______ job, so I work from 9 to 5 every day.",
    options: ["shift", "part-time", "full-time", "temporary"],
    correctAnswer: 2
  },
  {
    question: "9. A _______ employee is very enthusiastic and wants to succeed.",
    options: ["numerate", "methodical", "motivated", "flexible"],
    correctAnswer: 2
  },
  {
    question: "10. Kerstin is _______ of the design department at a European car company.",
    options: ["responsible", "confident", "the manager for", "in charge"],
    correctAnswer: 3
  },
  {
    question: "11. Employers look for candidates who are _______ and can work independently.",
    options: ["managers", "commuters", "self-starters", "team players"],
    correctAnswer: 2
  },
  {
    question: "12. Chris works only 15 hours per week. He has a _______ job.",
    options: ["part-time", "temporary", "half-time", "full-time"],
    correctAnswer: 0
  },
  {
    question: "13. You usually end a cover letter with 'I look forward to _______ from you'.",
    options: ["hears", "heard", "hearing", "hear"],
    correctAnswer: 2
  },
  {
    question: "14. Many people are _______ work due to the economic crisis.",
    options: ["off", "in", "on", "out of"],
    correctAnswer: 3
  },
  {
    question: "15. My colleague is very good _______ numbers and financial data.",
    options: ["with", "on", "at", "in"],
    correctAnswer: 0
  },
  {
    question: "16. She is very skilled _______ using Excel and data analysis.",
    options: ["on", "at/in", "with", "to"],
    correctAnswer: 1
  },
  {
    question: "17. A polite ending for a formal letter or email is 'Yours _______'",
    options: ["honestly", "happily", "kindly", "faithfully"],
    correctAnswer: 3
  },
  {
    question: "18. If you work more hours than usual, you do _______",
    options: ["overtime", "commission", "flexitime", "part-time"],
    correctAnswer: 0
  },
  {
    question: "19. I graduated _______ Oxford University _______ a degree _______ engineering.",
    options: ["in/with / of", "from / with / in", "at/on/ of", "on/in/ with"],
    correctAnswer: 1
  },
  {
    question: "20. He works _______ the IT department of a large company.",
    options: ["on", "in", "for", "at"],
    correctAnswer: 1
  },
  {
    question: "21. I work _______ a multinational company in the tech sector.",
    options: ["at", "for", "in", "with"],
    correctAnswer: 1
  },
  {
    question: "22. Good communication is an example of _______ skill.",
    options: ["financial", "legal", "soft", "technical"],
    correctAnswer: 2
  },
  {
    question: "23. Many students find _______ jobs during the holidays.",
    options: ["permanent", "fixed", "temporary", "regular"],
    correctAnswer: 2
  },
  {
    question: "24. A _______ person works in a very organized and systematic way.",
    options: ["numerate", "motivated", "methodical", "talented"],
    correctAnswer: 2
  },
  {
    question: "25. They live far from the city, so they _______ to work every day.",
    options: ["telecommute", "commute", "shift", "clock"],
    correctAnswer: 1
  },
  {
    question: "26. Factory workers often work in _______ day, night...",
    options: ["rounds", "clocks", "routines", "shifts"],
    correctAnswer: 3
  },
  {
    question: "27. Harry is very good _______ communicating with customers.",
    options: ["in", "at", "with", "on"],
    correctAnswer: 1
  },
  {
    question: "28. I'm _______ the budget for new car models.",
    options: ["responsibility for", "responsible of", "responsible for", "responsible at"],
    correctAnswer: 2
  },
  {
    question: "29. A polite way to start a letter when you don't know the name is 'Dear _______'",
    options: ["Friend", "Mr or Mrs", "All", "Sir or Madam"],
    correctAnswer: 3
  },
  {
    question: "30. A CV usually includes your education, skills, and _______",
    options: ["salary", "address", "hobbies", "work experience"],
    correctAnswer: 3
  }
]

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
            <h2 className="text-xl text-muted-foreground">Test Extra 2</h2>
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
