"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, X, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Question { question: string; options: string[]; correctAnswer: number }

const questions: Question[] = [
  {
    question: "1. In a formal business email to an unknown recipient, which greeting is most appropriate when you specifically know the recipient is an individual person but do not have their name?",
    options: ["Hi there,", "To Whom It May Concern:", "Hello everyone,", "Dear Sir or Madam,"],
    correctAnswer: 3
  },
  {
    question: "2. In formal email communication, when should you use the greeting 'Dear Sir or Madam'?",
    options: ["When you do not know the specific recipient's name.", "When writing to international companies only.", "When the email is informal or among colleagues.", "When writing to your direct supervisor."],
    correctAnswer: 0
  },
  {
    question: "3. ¿Cuál es la expresión correcta para solicitar que alguien espere durante una llamada telefónica en inglés profesional?",
    options: ["Stop calling, please", "Pause the line, please", "Wait a minute, please", "Hold on, please"],
    correctAnswer: 3
  },
  {
    question: "4. The software development company hired several _______ workers for the summer project.",
    options: ["shifting", "temporary", "permanent", "casual"],
    correctAnswer: 1
  },
  {
    question: "5. When a manager asks 'Can you fill me in on the project status?', what action are they requesting?",
    options: ["Submit a written report by end of day.", "Complete the remaining project work immediately.", "Provide detailed information about the current state of the project.", "Schedule a follow-up meeting about the project."],
    correctAnswer: 2
  },
  {
    question: "6. Al dejar un mensaje telefónico en una empresa y no poder hablar con el destinatario, ¿qué acción garantiza mejor que el mensaje llegue correctamente?",
    options: ["Dejar únicamente su nombre sin más información", "Confiar en que los compañeros le informarán del asunto", "Verificar que quien anota el mensaje lo transmitirá e indicar que se espera respuesta", "Llamar repetidamente en distintos momentos hasta contactar directamente"],
    correctAnswer: 2
  },
  {
    question: "7. In a meeting context, what does the phrase 'Let's get down to business' mean?",
    options: ["Let's stop talking and get to the main topics we need to address.", "Let's sit down at our desks and work quietly.", "Let's arrange a business lunch for later.", "Let's discuss social matters and build rapport."],
    correctAnswer: 0
  },
  {
    question: "8. In a formal business email to an unknown recipient, which greeting is most appropriate when you specifically know the recipient is an individual person but do not have their name?",
    options: ["To Whom It May Concern:", "Hello everyone,", "Dear Sir or Madam,", "Hi there,"],
    correctAnswer: 2
  },
  {
    question: "9. What is the defining characteristic of a 'team player' in professional environments?",
    options: ["Someone who collaborates effectively with colleagues and contributes to collective goals.", "Someone who avoids participating in group discussions.", "Someone who prefers individual recognition over group success.", "Someone who always works independently without input from others."],
    correctAnswer: 0
  },
  {
    question: "10. Which verb correctly describes the daily transportation activity of workers who live distant from the city center?",
    options: ["relocate", "commute", "travel", "journey"],
    correctAnswer: 1
  },
  {
    question: "11. Which phrase is considered the MOST professional and polite way for a receptionist to ask a caller to wait while locating information?",
    options: ["Just a second.", "Wait a moment.", "Hang on, will you?", "Hold on, please."],
    correctAnswer: 3
  },
  {
    question: "12. In professional email correspondence, which phrase should you use when attaching a document or file to your message?",
    options: ["The file is now inside this email.", "I'm sending you a file together with this message.", "Please find attached the document you requested.", "I have pasted the file below."],
    correctAnswer: 2
  },
  {
    question: "13. Which statement correctly describes someone who is responsible for a specific project or deliverable in the workplace?",
    options: ["I am managing the company's responsibilities.", "I am responsible for developing new features for our web application.", "I am in charge of all team projects.", "I am supervising the development department."],
    correctAnswer: 1
  },
  {
    question: "14. ¿Qué frase utiliza el verbo frasal correcto Y el registro apropiado para transferir una llamada en un entorno profesional?",
    options: ["I'll put you through to the finance department, please hold.", "I'll connect you through for the finance department.", "I'll pass you over with the finance department.", "I'll transfer you with the finance department."],
    correctAnswer: 0
  },
  {
    question: "15. When a receptionist says 'Hold on, please' during a phone call, she is",
    options: ["ending the conversation", "asking the caller to wait briefly", "requesting personal information", "transferring to another line"],
    correctAnswer: 1
  },
  {
    question: "16. En una llamada telefónica profesional, no puedes atender en este momento. ¿Qué expresión usas para pedir al interlocutor que vuelva a llamarte más tarde?",
    options: ["Can you return later?", "Can you wait later?", "Can you come back later?", "Can you call back later?"],
    correctAnswer: 3
  },
  {
    question: "17. In a professional email, the abbreviation 'ASAP' indicates that something should be completed",
    options: ["as soon as possible", "within business hours", "at the end of the day", "without further notice"],
    correctAnswer: 0
  },
  {
    question: "18. In a professional email, you need to direct the reader's attention to a PDF report you have included. Which is the MOST concise and standard phrase used in British and American business English for this purpose?",
    options: ["You will find that I have added the file somewhere in this email.", "I am enclosing herewith the requested documentation for your perusal.", "Kindly be advised that a document has been appended to this correspondence.", "Please see the attached file."],
    correctAnswer: 3
  },
  {
    question: "19. ¿Cuál es el significado de la frase 'Hold on, please' en una conversación telefónica profesional?",
    options: ["Repetir lo que se ha dicho", "Hablar más lentamente", "Terminar la llamada inmediatamente", "Esperar mientras se procesa la llamada a otra línea"],
    correctAnswer: 3
  },
  {
    question: "20. The developer worked _______ last month to meet the project deadline.",
    options: ["part-time", "overtime", "full-time", "flexitime"],
    correctAnswer: 1
  },
  {
    question: "21. When you wish to express disagreement with a proposal during a formal meeting, which phrase allows you to do so respectfully?",
    options: ["I don't agree at all.", "That's completely wrong.", "That idea doesn't work.", "I respectfully disagree with that approach."],
    correctAnswer: 3
  },
  {
    question: "22. En el ámbito de recursos humanos, ¿qué término describe específicamente a un trabajador que establece sus propias metas y gestiona su aprendizaje sin depender de instrucciones externas?",
    options: ["Autonomous", "Self-directed", "Dependent", "Subordinate"],
    correctAnswer: 1
  },
  {
    question: "23. ¿Cuál es el significado de la expresión 'Let's get down to business' en una reunión profesional?",
    options: ["Comencemos con los temas importantes", "Vamos a hablar de dinero", "Terminemos esta reunión", "Vamos a sentarnos en el suelo"],
    correctAnswer: 0
  },
  {
    question: "24. In professional email closing statements, which phrase indicates that you are expecting a response from the recipient?",
    options: ["Best regards.", "Have a good day.", "I look forward to hearing from you.", "Thank you for your time."],
    correctAnswer: 2
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
            <h2 className="text-xl text-muted-foreground">Test Extra I</h2>
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
