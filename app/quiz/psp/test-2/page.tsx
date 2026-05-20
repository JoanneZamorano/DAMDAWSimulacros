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
    question: "1. ¿Qué capa del modelo TCP/IP gestiona cómo se mueve la información entre procesos finales?",
    options: ["La capa de Enlace", "La capa de Transporte", "La capa de Aplicación", "La capa de sesión"],
    correctAnswer: 1,
  },
  {
    question: "2. ¿Qué protocolo ofrece comunicación fiable y orientada a conexión?",
    options: ["UDP", "IP", "TCP", "ICMP"],
    correctAnswer: 2,
  },
  {
    question: "3. En la arquitectura cliente-servidor, ¿qué caracteriza al servidor?",
    options: ["Es un proceso pasivo que escucha en un puerto", "Es un proceso pasivo que escucha en un puerto", "Se encarga de traducir nombres DNS", "Solo funciona con HTTP"],
    correctAnswer: 0,
  },
  {
    question: "4. Según el caso de WhatsApp, ¿qué hace el servidor si el destinatario está offline?",
    options: ["Descarta el mensaje", "Lo cifra por segunda vez", "Lo almacena temporalmente", "Lo envía por UDP"],
    correctAnswer: 2,
  },
  {
    question: "5. ¿Qué herramienta se recomienda para comprobar alcanzabilidad y latencia (RTT)?",
    options: ["Wireshark", "ping", "curl", "netstat"],
    correctAnswer: 1,
  },
  {
    question: "6. ¿Qué herramienta permite capturar y analizar tráfico paquete a paquete?",
    options: ["traceroute", "ping", "Wireshark", "ss"],
    correctAnswer: 2,
  },
  {
    question: "7. En Java, ¿qué clase usa normalmente el lado servidor TCP para escuchar en un puerto?",
    options: ["Socket", "DatagramPacket", "ServerSocket", "SSLSocketFactory"],
    correctAnswer: 2,
  },
  {
    question: "8. ¿Qué protocolo envía datagramas sin establecer conexión ni comprobar la recepción?",
    options: ["TCP", "UDP", "TLS", "HTTP"],
    correctAnswer: 1,
  },
  {
    question: "9. Antes de enviar datos con TCP, ¿qué se establece entre cliente y servidor?",
    options: ["Un registro MX", "Un handshake", "Un balanceador de carga", "Un túnel SSH obligatorio"],
    correctAnswer: 1,
  },
  {
    question: "10. En videojuegos online, ¿qué tipo de información se envía normalmente por UDP?",
    options: ["Pagos y compras de ítems", "Posiciones, rotaciones e inputs en tiempo real", "Certificados digitales", "Archivos persistentes del usuario"],
    correctAnswer: 1,
  },
  {
    question: "11. Cuando se trabaja con UDP, ¿qué debe vigilar la aplicación para evitar fragmentación?",
    options: ["El tamaño de cada datagrama", "El número de hilos del sistema operativo", "La versión de Java del cliente", "La memoria caché del navegador"],
    correctAnswer: 0,
  },
  {
    question: "12. En un servidor multicliente clásico, ¿qué suele hacerse cuando un cliente se conecta?",
    options: ["Se cierra el ServerSocket", "Se crea un hilo trabajador para atenderlo", "Se cambia automáticamente a UDP", "Se reinicia el servicio"],
    correctAnswer: 1,
  },
  {
    question: "13. ¿Qué se usa para evitar que los datos viajen en texto claro por la red?",
    options: ["ARP", "SSL/TLS", "FTP", "ICMP"],
    correctAnswer: 1,
  },
  {
    question: "14. ¿Qué clases de Java añaden una capa de cifrado transparente sobre los sockets tradicionales?",
    options: ["Socket y ServerSocket", "DatagramSocket y DatagramPacket", "SSLSocket y SSLServerSocket", "BufferedReader y PrintWriter"],
    correctAnswer: 2,
  },
  {
    question: "15. En Apache Tomcat, ¿en qué archivo se muestra el ejemplo de configuración de un conector seguro?",
    options: ["web.xml", "pom.xml", "server.xml", "hosts"],
    correctAnswer: 2,
  },
  {
    question: "16. ¿Qué protocolo se utiliza para transferir archivos entre equipos?",
    options: ["SMTP", "DNS", "FTP", "HTTP"],
    correctAnswer: 2,
  },
  {
    question: "17. ¿Qué librería Java se propone para conectarse a un servidor FTP y subir archivos?",
    options: ["JavaMail API", "Apache Commons Net", "JAX-WS", "Spring Boot"],
    correctAnswer: 1,
  },
  {
    question: "18. ¿Qué API se menciona para enviar correos desde una aplicación Java?",
    options: ["JavaMail API", "HttpClient", "VisualVM", "Kubernetes"],
    correctAnswer: 0,
  },
  {
    question: "19. En el caso de Gmail, ¿qué comando SMTP indica el destinatario del correo?",
    options: ["DATA", "HELO", "RCPT TO", "QUIT"],
    correctAnswer: 2,
  },
  {
    question: "20. ¿Qué tipo de registro DNS se usa para localizar el servidor de correo del dominio destinatario?",
    options: ["A", "CNAME", "PTR", "MX"],
    correctAnswer: 3,
  },
  {
    question: "21. ¿Qué protocolo sincroniza los mensajes entre dispositivos manteniéndolos almacenados online?",
    options: ["POP3", "IMAP", "TP", "SMTP"],
    correctAnswer: 1,
  },
  {
    question: "22. ¿Qué herramienta gráfica se recomienda para crear y probar peticiones HTTP sin escribir código?",
    options: ["Apache Commons Net", "Postman", "JavaMail API", "Whois"],
    correctAnswer: 1,
  },
  {
    question: "23. En un servidor iterativo, ¿qué ocurre mientras se atiende a un cliente?",
    options: ["Los demás clientes deben esperar", "Se crean automáticamente varios hilos", "Se distribuye la carga entre servidores", "El servicio cambia a modo asíncrono"],
    correctAnswer: 0,
  },
  {
    question: "24. ¿Qué modelo utiliza Nginx para manejar miles de conexiones con pocos hilos?",
    options: ["Un hilo por conexión", "Arquitectura asíncrona basada en eventos", "Procesamiento secuencial estricto", "Bloqueo permanente por socket"],
    correctAnswer: 1,
  },
  {
    question: "25. ¿Qué API de Java permite manejar múltiples conexiones con un solo hilo mediante un Selector?",
    options: ["java.sql", "java.io", "java.nio", "java.rmi"],
    correctAnswer: 2,
  },
  {
    question: "26. ¿Qué permite RMI en Java?",
    options: ["Convertir automáticamente XML en JSON", "Invocar métodos de un objeto en otra JVM como si fuera locales", "Crear sockets UDP sin puertos", "Sustituir HTTP por FTP"],
    correctAnswer: 1,
  },
  {
    question: "27. ¿Qué tecnología de servicios web está basada en XML y requiere un contrato formal WSDL?",
    options: ["REST", "SOAP", "NIO", "SMTP"],
    correctAnswer: 1,
  },
  {
    question: "28. En un entorno de alta disponibilidad, ¿qué ocurre si un servidor falla?",
    options: ["El servicio se detine hasta reiniciar manualmente", "Otro servidor toma el relevo automáticamente", "Se eliminan las réplicas restantes", "Se cambia el protocolo a RPC"],
    correctAnswer: 1,
  },
  {
    question: "29. ¿Qué herramienta interna de Netflix apaga servidores aleatoriamente para probar la resiliencia?",
    options: ["VisualVM", "Chaos Monkey", "Postman Runner", "Swagger"],
    correctAnswer: 1,
  },
  {
    question: "30. ¿Qué conjunto de herramientas se menciona para recopilar métricas y visualizarlas en dashboards interactivos?",
    options: ["Nagios y Datadog", "Nginx y HAProxy", "Spring Boot y JAX-WS", "Prometheus y Grafana"],
    correctAnswer: 3,
  }
];

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export default function PSPTest2Quiz() {
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
            <h2 className="text-xl text-muted-foreground">Test II</h2>
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
