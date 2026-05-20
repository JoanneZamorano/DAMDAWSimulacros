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
    question: "1 ¿QUÉ ES UN HILO (THREAD)?",
    options: ["Un programa independiente", "Una unidad de ejecución dentro de un proceso", "Un tipo de socket", "Un sistema operativo"],
    correctAnswer: 1,
  },
  {
    question: "2. ¿QUÉ MÉTODO INICIA UN HILO EN JAVA?",
    options: ["run()", "execute()", "start()", "init()"],
    correctAnswer: 2,
  },
  {
    question: "3. DIFERENCIA PRINCIPAL ENTRE PROCESO E HILO",
    options: ["No hay diferencia", "El proceso comparte memoria con otros procesos", "El hilo comparte memoria con otros hilos del mismo proceso", "El hilo es más pesado que el proceso"],
    correctAnswer: 2,
  },
  {
    question: "4. ¿QUÉ OCURRE SI LLAMAS DIRECTAMENTE A RUN() EN LUGAR DE START()?",
    options: ["Se crea un nuevo hilo", "Se ejecuta en paralelo", "Se ejecuta como método normal", "Da error"],
    correctAnswer: 2,
  },
  {
    question: "5. ¿QUÉ MÉTODO PAUSA UN HILO TEMPORALMENTE?",
    options: ["wait()", "sleep()", "stop()", "pause()"],
    correctAnswer: 1,
  },
  {
    question: "6. ¿QUÉ SIGNIFICA CONCURRENCIA?",
    options: ["Ejecutar procesos en orden", "Ejecutar múltiples tareas aparentemente al mismo tiempo", "Ejecutar solo un hilo", "Ejecutar en red"],
    correctAnswer: 1,
  },
  {
    question: "7. ¿QUÉ HACE SYNCHRONIZED EN JAVA?",
    options: ["Ejecuta más rápido", "Evita concurrencia", "Controla acceso exclusivo a un recurso", "Detiene hilos"],
    correctAnswer: 2,
  },
  {
    question: "8. ¿QUÉ MÉTODO SE USA PARA ESPERAR A OTRO HILO?",
    options: ["wait()", "join()", "sleep()", "notify()"],
    correctAnswer: 1,
  },
  {
    question: "9. ¿QUÉ ES UN DEADLOCK?",
    options: ["Un hilo terminado", "Un error de compilación", "Bloqueo mutuo entre hilos", "Un socket cerrado"],
    correctAnswer: 2,
  },
  {
    question: "10. ¿QUÉ INTERFAZ PERMITE CREAR HILOS EN JAVA?",
    options: ["Threadable", "Runnable", "Executable", "Callable Thread"],
    correctAnswer: 1,
  },
  {
    question: "11. UN PROCESO ES",
    options: ["Un hilo", "Un programa en ejecución", "Un socket", "Un puerto"],
    correctAnswer: 1,
  },
  {
    question: "12. ¿QUÉ CLASE PERMITE EJECUTAR PROCESOS EXTERNOS EN JAVA?",
    options: ["Thread", "Process Builder", "Runtime Thread", "Executor"],
    correctAnswer: 1,
  },
  {
    question: "13. ¿QUÉ MÉTODO EJECUTA UN COMANDO DEL SISTEMA?",
    options: ["runCommand()", "exec()", "startProcess()", "execute()"],
    correctAnswer: 1,
  },
  {
    question: "14. ¿QUÉ DEVUELVE UN PROCESO HIJO?",
    options: ["Puerto", "Código de salida", "IP", "Socket"],
    correctAnswer: 1,
  },
  {
    question: "15. TCP ES",
    options: ["No confiable", "Orientado a conexión", "Más rápido siempre", "Sin conexión"],
    correctAnswer: 1,
  },
  {
    question: "16. UDP ES",
    options: ["Orientado a conexión", "Confiable", "No orientado a conexión", "Más seguro"],
    correctAnswer: 2,
  },
  {
    question: "17. ¿QUÉ CLASE SE USA PARA SERVIDOR TCP EN JAVA?",
    options: ["Socket", "ServerSocket", "DatagramSocket", "TCPServer"],
    correctAnswer: 1,
  },
  {
    question: "18. ¿QUÉ CLASE SE USA PARA CLIENTE TCP?",
    options: ["ServerSocket", "Socket", "DatagramPacket", "URL"],
    correctAnswer: 1,
  },
  {
    question: "19. ¿QUÉ PROTOCOLO GARANTIZA ENTREGA DE DATOS?",
    options: ["UDP", "TCP", "IP", "HTTP"],
    correctAnswer: 1,
  },
  {
    question: "20. ¿QUÉ PROTOCOLO ES MÁS RÁPIDO PERO MENOS FIABLE?",
    options: ["TCP", "UDP", "HTTP", "FTP"],
    correctAnswer: 1,
  },
  {
    question: "21. ¿QUÉ CLASE SE USA PARA UDP EN JAVA?",
    options: ["Socket", "ServerSocket", "DatagramSocket", "TCPPacket"],
    correctAnswer: 2,
  },
  {
    question: "22. ¿QUÉ SE ENVÍA EN UDP?",
    options: ["Streams", "DatagramPacket", "Files", "Threads"],
    correctAnswer: 1,
  },
  {
    question: "23. ¿QUÉ MÉTODO DESPIERTA UN HILO EN ESPERA?",
    options: ["wake()", "notify()", "resume()", "interrupt()"],
    correctAnswer: 1,
  },
  {
    question: "24. DIFERENCIA ENTRE NOTIFY() Y NOTIFYALL()",
    options: ["No hay diferencia", "notify despierta todos", "notifyAll despierta todos", "notify bloquea"],
    correctAnswer: 2,
  },
  {
    question: "25. ¿DÓNDE DEBEN USARSE WAIT() Y NOTIFY()?",
    options: ["En cualquier sitio", "Dentro de synchronized", "Solo en main", "En sockets"],
    correctAnswer: 1,
  },
  {
    question: "26. ¿QUÉ ES UN RACE CONDITION?",
    options: ["Carrera de CPU", "Error de red", "Acceso concurrente incorrecto", "Bloqueo total"],
    correctAnswer: 2,
  },
  {
    question: "27. ¿QUÉ HACE YIELD()?",
    options: ["Termina hilo", "Cede CPU", "Bloquea", "Duplica hilo"],
    correctAnswer: 1,
  },
  {
    question: "28. ¿QUÉ INDICA ISALIVE()?",
    options: ["Si el hilo está en espera", "Si el hilo sigue ejecutándose", "Si está bloqueado", "Si terminó correctamente"],
    correctAnswer: 1,
  },
  {
    question: "29. ¿QUÉ ES UN PUERTO EN REDES?",
    options: ["Dirección IP", "Canal lógico de comunicación", "Protocolo", "Socket físico"],
    correctAnswer: 1,
  },
  {
    question: "30. ¿QUÉ ES UN SOCKET?",
    options: ["Un hilo", "Un puerto", "Punto de comunicación entre dos máquinas", "Un proceso"],
    correctAnswer: 2,
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

export default function PSPTest1Quiz() {
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
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold"><span className="text-foreground">PSP</span></h1>
            <h2 className="text-xl text-muted-foreground">Test I</h2>
            <p className="text-muted-foreground text-lg">Programacion de Servicios y Procesos</p>
            <div className="space-y-4 text-left py-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">{questions.length} Preguntas</p>
                  <p className="text-sm text-muted-foreground">Todos los conceptos clave</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Preguntas Aleatorizadas</p>
                  <p className="text-sm text-muted-foreground">Cada sesion es diferente</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-indigo-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Retroalimentacion Inmediata</p>
                  <p className="text-sm text-muted-foreground">Aprende mientras practicas</p>
                </div>
              </div>
            </div>
            <Button onClick={startQuiz} size="lg" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold">Comenzar Quiz</Button>
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
              <div className="text-6xl font-bold text-indigo-500 mb-2">{Math.max(0, percentage)}%</div>
              <p className="text-xl text-muted-foreground">Puntuacion final: {finalScore.toFixed(2)} de {shuffledQuestions.length}</p>
            </div>
            <div className="space-y-2 text-left bg-muted/50 p-4 rounded-lg">
              <p className="text-foreground flex justify-between"><span>Respuestas correctas:</span><span className="text-green-500 font-semibold">{correctCount}</span></p>
              <p className="text-foreground flex justify-between"><span>Respuestas incorrectas:</span><span className="text-red-500 font-semibold">{incorrectCount}</span></p>
              <p className="text-foreground flex justify-between border-t border-border pt-2 mt-2"><span>Penalizacion (x0.25):</span><span className="text-red-500 font-semibold">-{(incorrectCount * 0.25).toFixed(2)}</span></p>
            </div>
            <div className="space-y-3">
              <Button onClick={startQuiz} size="lg" className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold">Intentar de Nuevo</Button>
              <Link href="/" className="block"><Button variant="outline" size="lg" className="w-full bg-transparent">Volver al Inicio</Button></Link>
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
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"><ArrowLeft className="w-4 h-4" />Volver</Link>
        <div className="text-sm text-muted-foreground">Pregunta {currentQuestionIndex + 1} de {shuffledQuestions.length}{" "}<span className="text-indigo-500">{answeredCount} respondidas</span></div>
      </div>
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl p-8 bg-card border-border">
          <div className="space-y-6">
            <div className="flex justify-between items-start">
              <h2 className="text-2xl font-bold text-foreground text-balance flex-1">{currentQuestion.question}</h2>
              <span className="text-sm text-muted-foreground ml-4">{currentQuestionIndex + 1}/{shuffledQuestions.length}</span>
            </div>
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index
                const isCorrect = index === currentQuestion.correctAnswer
                const showCorrect = showFeedback && isCorrect
                const showIncorrect = showFeedback && isSelected && !isCorrect
                return (
                  <button key={index} onClick={() => handleAnswerClick(index)} disabled={showFeedback} className={`w-full text-left p-4 rounded-lg border-2 transition-all ${!showFeedback && "hover:border-indigo-500 hover:bg-accent cursor-pointer"} ${showFeedback && "cursor-not-allowed"} ${isSelected && !showFeedback && "border-indigo-500 bg-accent"} ${showCorrect && "border-green-500 bg-green-500/10"} ${showIncorrect && "border-red-500 bg-red-500/10"} ${!isSelected && !showCorrect && !showIncorrect && "border-border bg-card"}`}>
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
              <Button onClick={handlePrevious} variant="outline" className="flex-1" disabled={currentQuestionIndex === 0}>Anterior</Button>
              <Button onClick={handleNext} className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white" disabled={!showFeedback}>{currentQuestionIndex < shuffledQuestions.length - 1 ? "Siguiente" : "Ver Resultados"}</Button>
            </div>
          </div>
        </Card>
      </div>
      <div className="p-4">
        <div className="h-2 bg-muted rounded-full overflow-hidden max-w-2xl mx-auto">
          <div className="h-full bg-indigo-500 transition-all duration-300" style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }} />
        </div>
      </div>
    </div>
  )
}
