"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, X, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Question { question: string; options: string[]; correctAnswer: number }

const questions: Question[] = [
  {
    question: "1. In an email, the phrase 'Just a quick note to...' is typically used in",
    options: ["complaints", "legal documents", "very formal emails", "informal or friendly emails"],
    correctAnswer: 3,
  },
  {
    question: "2. At the end of a phone call, the phrase ......... is used to end the conversation in a friendly way.",
    options: ["I'll call again", "Talk to you soon", "Yours sincerely", "Dear Sir or Madam"],
    correctAnswer: 1,
  },
  {
    question: "3. Can you ......... a second? I need to check if she's available.",
    options: ["hang on", "pick up", "call back", "put through"],
    correctAnswer: 0,
  },
  {
    question: "4. If someone says 'Could you repeat that, please?' it means",
    options: ["they understood everything", "they want to end the call", "they didn't hear or understand clearly", "they are taking notes"],
    correctAnswer: 2,
  },
  {
    question: "5. In a phone call, the phrase \"Who's calling, please?\" is used when",
    options: ["you want to transfer the call", "you are ending the conversation", "you are taking a message", "you want to know the caller's identity"],
    correctAnswer: 3,
  },
  {
    question: "6. In an email, the phrase ......... is used as a friendly informal closing.",
    options: ["All the best", "Yours faithfully", "Yours sincerely", "Yours truly"],
    correctAnswer: 0,
  },
  {
    question: "7. In an email, the phrase ......... is used to make a formal request.",
    options: ["Would it be possible to...?", "One more time, please?", "Sorry, what did you say your name was?", "Can I take a message?"],
    correctAnswer: 0,
  },
  {
    question: "8. In a phone call, the phrase ......... is used to introduce yourself.",
    options: ["It's John McCarthy here", "Good morning", "I'm John McCarthy", "Hi there"],
    correctAnswer: 0,
  },
  {
    question: "9. In an email, the phrase 'Please find attached' is used when",
    options: ["you include a file or document", "you forgot to attach something", "you are requesting a meeting", "you are confirming attendance"],
    correctAnswer: 0,
  },
  {
    question: "10. Please don't ......... I'll be with you in a moment.",
    options: ["call back", "pick up", "hold", "hang up"],
    correctAnswer: 3,
  },
  {
    question: "11. In a phone call, the phrase \"Would you like to leave a message?\" is used when",
    options: ["the line is disconnected", "the person is not available", "the call is ending", "the number is wrong"],
    correctAnswer: 1,
  },
  {
    question: "12. In an email, the abbreviation ......... is used to include extra information for reference.",
    options: ["FYI", "ASAP", "EOD", "000"],
    correctAnswer: 0,
  },
  {
    question: "13. In a phone call, the phrase ......... is used to ask the reason for the call.",
    options: ["Who's calling?", "Can you hold?", "Can you repeat that?", "Can I ask what it's about?"],
    correctAnswer: 3,
  },
  {
    question: "14. In an email, the abbreviation 'NRN' is used to mean",
    options: ["Needs Review Now", "New Reading Notice", "No Reply Necessary", "Next Road North"],
    correctAnswer: 2,
  },
  {
    question: "15. In a phone call, the phrase 'Hold on, please' is used when",
    options: ["you want to finish the call", "you ask the caller to wait for a moment", "you don't understand", "you are leaving a message"],
    correctAnswer: 1,
  },
  {
    question: "16. In an email, the phrase ......... means that you expect a response.",
    options: ["I look forward to hear from you soon", "I am looking forward to hear from you soon", "I look forward for hearing from you soon", "I look forward to hearing from you soon"],
    correctAnswer: 3,
  },
  {
    question: "17. In an email, the phrase ......... is used when you don't know the name of the recipient.",
    options: ["Dear Sir or Madam", "Best wishes", "Hi Mary", "All the best"],
    correctAnswer: 0,
  },
  {
    question: "18. In a phone call, the phrase ......... is used when you want the other person to speak more slowly.",
    options: ["Would you like to leave a message?", "Who shall I say is calling?", "Can you spell it?", "Can you slow down, please?"],
    correctAnswer: 3,
  },
  {
    question: "19. In an email, the phrase 'Yours sincerely' is used when",
    options: ["you are writing informally", "you don't know the recipient's name", "you know the recipient's name", "you expect a quick reply"],
    correctAnswer: 2,
  },
  {
    question: "20. In an email, the phrase ......... is used when you don't know the recipient's name.",
    options: ["Best regards", "Hello everyone", "Yours faithfully", "Yours sincerely"],
    correctAnswer: 2,
  },
  {
    question: "21. Can you ......... me through to Sally Jones, please?",
    options: ["send", "take", "put", "pass"],
    correctAnswer: 2,
  },
  {
    question: "22. In a phone call, the phrase ......... is used to ask if a day is convenient for the other person.",
    options: ["Would Monday suit you?", "Does Monday come well to you?", "Is Monday coming good to you?", "Would Monday be suit?"],
    correctAnswer: 0,
  },
  {
    question: "23. In an email, the phrase 'Best regards' is used when",
    options: ["you open the email", "you attach a file", "you close the email", "you ask for information"],
    correctAnswer: 2,
  },
  {
    question: "24. In a phone call, the phrase ......... is used when you are not available at a specific time.",
    options: ["I won't be able to make Thursday", "I'll make Thursday", "I go on Thursday", "I attend Thursday"],
    correctAnswer: 0,
  },
  {
    question: "25. In a phone call, the phrase 'I'll call back later' is used when",
    options: ["you want to leave a message", "you will phone again at another time", "you are confirming a meeting", "you want to finish the call"],
    correctAnswer: 1,
  },
  {
    question: "26. I tried to call him, but he didn't ......... the phone.",
    options: ["put through", "hold on", "pick up", "hang on"],
    correctAnswer: 2,
  },
  {
    question: "27. When someone says 'I'm afraid the line is busy', it means that",
    options: ["the person is not in the office", "the phone is broken", "the person is already on another call", "the call has ended"],
    correctAnswer: 2,
  },
  {
    question: "28. In an email, the abbreviation 'ASAP' is used when something should be done",
    options: ["eventually", "at the end of the day", "right away", "without confirmation"],
    correctAnswer: 2,
  },
  {
    question: "29. I'm afraid Mr. Brown is not available at the moment. Can you ......... later?",
    options: ["hang up", "put through", "hold on", "call back"],
    correctAnswer: 3,
  },
  {
    question: "30. In an email, the phrase 'I would be grateful if you could...' is used to",
    options: ["give an order", "make a polite request", "complain strongly", "refuse a request"],
    correctAnswer: 1,
  },
];

function shuffleArray<T>(array: T[]): T[] { const newArray = [...array]; for (let i = newArray.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [newArray[i], newArray[j]] = [newArray[j], newArray[i]] } return newArray }

export default function InglesTest2Quiz() {
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
            <h2 className="text-xl text-muted-foreground">Test II</h2>
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
