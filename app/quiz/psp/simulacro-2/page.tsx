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
    "question": "31. ¿Qué aporta Callable frente a Runnable?",
    "options": [
      "Permite eliminar la necesidad de sincronización",
      "Puede devolver un resultado y lanzar excepciones, integrándose con Future",
      "Hace que todos los hilos tengan prioridad máxima",
      "Evita que el hilo pase por el estado RUNNABLE"
    ],
    "correctAnswer": 1
  },
  {
    "question": "32. ¿Qué es una condición de carrera?",
    "options": [
      "Una técnica para ordenar los hilos por velocidad",
      "Un error de sintaxis en la palabra synchronized",
      "Una situación en la que varios hilos acceden a datos compartidos y el resultado depende del orden de ejecución",
      "Una forma de cifrado basada en certificados"
    ],
    "correctAnswer": 2
  },
  {
    "question": "33. ¿Qué garantiza un método o bloque marcado como synchronized sobre un mismo objeto?",
    "options": [
      "Que todos los hilos se ejecuten en el mismo orden.",
      "Que solo un hilo a la vez pueda ejecutar ese código sincronizado.",
      "Que el hilo pase siempre al estado WAITING antes de continuar.",
      "Que el bloqueo se libere antes de terminar el método."
    ],
    "correctAnswer": 1
  },
  {
    "question": "34. ¿Qué es la sección crítica en un programa concurrente?",
    "options": [
      "La parte del código que accede a un recurso compartido y debe protegerse",
      "El comentario inicial de una clase Java",
      "La zona del disco donde se guarda el bytecode",
      "El conjunto de clases que no tienen método main"
    ],
    "correctAnswer": 0
  },
  {
    "question": "35. ¿Qué ventaja principal ofrece AtomicInteger frente a synchronized para un contador?",
    "options": [
      "Permite reiniciar el hilo que usa el contador.",
      "Evita la visibilidad de cambios entre hilos.",
      "Garantiza la atomicidad sin bloqueos explícitos y resulta más rápido y escalable",
      "Hace innecesario proteger el acceso a datos mutables compartidos."
    ],
    "correctAnswer": 2
  },
  {
    "question": "36. ¿Qué limitación tiene volatile según el material?",
    "options": [
      "No permite que una variable sea leída por varios hilos",
      "Garantiza visibilidad, pero no garantiza atomicidad en operaciones compuestas",
      "Convierte cualquier método en synchronized",
      "Solo puede aplicarse a clases abstractas"
    ],
    "correctAnswer": 1
  },
  {
    "question": "37. ¿Qué capa del modelo TCP/IP se encarga de direccionar y encaminar paquetes entre redes?",
    "options": [
      "La capa de Aplicación",
      "La capa de Enlace",
      "La capa de Internet",
      "La capa de Presentación"
    ],
    "correctAnswer": 2
  },
  {
    "question": "38. ¿En qué capa del modelo TCP/IP se sitúan protocolos como HTTP, FTP, DNS o SMTP?",
    "options": [
      "Aplicación",
      "Enlace",
      "Internet",
      "Física exclusivamente"
    ],
    "correctAnswer": 0
  },
  {
    "question": "39. ¿Qué ofrece TCP en la capa de transporte?",
    "options": [
      "Baja latencia sin garantías de entrega",
      "Comunicación fiable y orientada a conexión, con reordenación y reenvio si hay pérdidas",
      "Traducción de nombres de dominio",
      "Renderizado de interfaces gráficas"
    ],
    "correctAnswer": 1
  },
  {
    "question": "40. En la programación de sockets en Java con TCP, ¿qué clase utiliza normalmente el servidor para escuchar conexiones entrantes?",
    "options": [
      "DatagramPacket",
      "DatagramSocket",
      "ServerSocket",
      "SSLSocket"
    ],
    "correctAnswer": 2
  },
  {
    "question": "41. En un servidor TCP en Java, ¿qué suele devolver el método accept() cuando entra una conexión?",
    "options": [
      "Un objeto String con la IP del cliente",
      "Un DatagramPacket ya cifrado",
      "Un archivo XML con la solicitud",
      "Un Socket asociado al cliente conectado"
    ],
    "correctAnswer": 3
  },
  {
    "question": "42. ¿Qué herramienta se recomienda para ver puertos en escucha y conexiones activas?",
    "options": [
      "Wireshark",
      "ping",
      "netstat o ss",
      "traceroute"
    ],
    "correctAnswer": 2
  },
  {
    "question": "43. ¿Para qué se utiliza Wireshark según las herramientas del tema?",
    "options": [
      "Para capturar y analizar tráfico paquete a paquete",
      "Para compilar clases Java",
      "Para crear usuarios del sistema operativo",
      "Para sustituir automáticamente a TLS"
    ],
    "correctAnswer": 0
  },
  {
    "question": "44. ¿Qué caracteristica define a UDP?",
    "options": [
      "Ordena automáticamente los datos y reenvía lo perdido.",
      "Establece siempre una conexión previa mediante handshake.",
      "Ofrece un flujo fiable orientado a conexión.",
      "Envía datagramas independientes sin comprobar la recepción."
    ],
    "correctAnswer": 3
  },
  {
    "question": "45. ¿En qué tipo de aplicaciones suele ser útil UDP?",
    "options": [
      "En copias bancarias donde cada byte debe llegar siempre en orden",
      "En transferencias de ficheros que no admiten pérdidas",
      "En voz, vídeo o videojuegos, donde importa más la baja latencia que recuperar datos antiguos",
      "En firmas digitales basadas en clave privada"
    ],
    "correctAnswer": 2
  },
  {
    "question": "46. ¿Qué clases se asocian al trabajo con UDP en Java?",
    "options": [
      "ServerSocket y Socket",
      "DatagramSocket y DatagramPacket",
      "SSLSocket y SSLServerSocket",
      "BufferedReader y PrintWriter exclusivamente"
    ],
    "correctAnswer": 1
  },
  {
    "question": "47. ¿Qué añaden SSLSocket y SSLServerSocket sobre los sockets tradicionales?",
    "options": [
      "Una capa de cifrado y autenticación basada en SSL/TLS",
      "Un mecanismo para eliminar todos los hilos",
      "La traducción automática de dominios a IP",
      "La obligación de usar UDP en todas las comunicaciones"
    ],
    "correctAnswer": 0
  },
  {
    "question": "48. En el ejemplo de Apache Tomcat, ¿qué elemento se configura para aceptar conexiones HTTPS seguras?",
    "options": [
      "Una clase Runnable llamada TomcatThread",
      "Un DatagramPacket permanente",
      "Un conector seguro en server.xml con TLS y keystore",
      "Un archivo hosts que sustituye al certificado digital"
    ],
    "correctAnswer": 2
  },
  {
    "question": "49. ¿Qué protocolo estándar se utiliza para transferir archivos entre equipos?",
    "options": [
      "FTP",
      "SMTP",
      "DNS",
      "RMI"
    ],
    "correctAnswer": 0
  },
  {
    "question": "50. ¿Qué protocolo estándar se utiliza para comunicarse con servidores web?",
    "options": [
      "POP3",
      "HTTP",
      "FTP",
      "RPC"
    ],
    "correctAnswer": 1
  },
  {
    "question": "51. ¿Qué protocolo se utiliza principalmente para enviar correos electrónicos?",
    "options": [
      "DNS",
      "IMAP",
      "SMTP",
      "NIO"
    ],
    "correctAnswer": 2
  },
  {
    "question": "52. ¿Cuál es la función principal de DNS?",
    "options": [
      "Cifrar ficheros de forma simétrica",
      "Sincronizar hilos de Java",
      "Enviar datagramas UDP en videojuegos",
      "Traducir nombres de dominio en direcciones IP"
    ],
    "correctAnswer": 3
  },
  {
    "question": "53. ¿Qué ventaja aportan las librerias cliente de alto nivel para protocolos estándar?",
    "options": [
      "Obligan a programar byte a byte todos los sockets",
      "Implementan los detalles complejos del protocolo, reducen errores y facilitan la compatibilidad",
      "Eliminan la necesidad de usar redes",
      "Impiden actualizar los protocolos con el tiempo"
    ],
    "correctAnswer": 1
  },
  {
    "question": "54. ¿Para qué se menciona Apache Commons Net en el tema?",
    "options": [
      "Para diseñar interfaces gráficas con JavaFX",
      "Para sustituir el sistema operativo por un servidor web",
      "Para implementar clientes de red como FTP, SMTP, POP3 o Telnet",
      "Para crear certificados digitales de Let's Encrypt"
    ],
    "correctAnswer": 2
  },
  {
    "question": "55. ¿Qué permite hacer JavaMail API?",
    "options": [
      "Enviar mensajes con adjuntos y conectarse a buzones IMAP/POP3",
      "Dibujar diagramas Mermaid",
      "Crear hilos sin usar Java",
      "Gestionar exclusivamente datagramas UDP"
    ],
    "correctAnswer": 0
  },
  {
    "question": "56. En el caso de Gmail, ¿qué tipo de registro DNS se consulta para localizar el servidor que gestiona el correo de un dominio?",
    "options": [
      "A exclusivamente",
      "PTR de impresora",
      "TXT de color",
      "MX (Mail Exchange)"
    ],
    "correctAnswer": 3
  },
  {
    "question": "57. Según el tema, ¿qué diferencia básica hay entre POP3 e IMAP?",
    "options": [
      "POP3 cifra páginas web e IMAP enruta paquetes IP",
      "POP3 descarga los mensajes y puede eliminarlos del servidor, IMAP los sincroniza entre dispositivos manteniéndolos online",
      "POP3 solo se usa para DNS e IMAP para videojuegos",
      "No hay ninguna diferencia funcional entre ambos"
    ],
    "correctAnswer": 1
  },
  {
    "question": "58. ¿Qué caracteriza a un servidor iterativo?",
    "options": [
      "Atiende siempre a miles de clientes en paralelo con NIO",
      "Crea un hilo nuevo por cada paquete UDP recibido",
      "Atiende a un cliente cada vez y no pasa al siguiente hasta terminar",
      "Usa obligatoriamente SOAP para todas las respuestas"
    ],
    "correctAnswer": 2
  },
  {
    "question": "59. ¿Qué representa RPC en aplicaciones distribuidas?",
    "options": [
      "Un protocolo para colorear interfaces gráficas",
      "La posibilidad de ejecutar una función en otra máquina como si fuera una llamada local",
      "Una técnica para eliminar todos los certificados digitales",
      "Un modelo de almacenamiento de contraseñas en texto plano"
    ],
    "correctAnswer": 1
  },
  {
    "question": "60. ¿Qué persigue la alta disponibilidad en servicios distribuidos?",
    "options": [
      "Que el servicio siga funcionando aunque fallen componentes, usando mecanismos como balanceadores, redundancia y verificación de servicios",
      "Que todos los clientes usen el mismo idioma de programación",
      "Que los hilos se ejecuten siempre en orden alfabético",
      "Que se desactive TLS para aumentar la velocidad"
    ],
    "correctAnswer": 0
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

export default function PSPSimulacro2Quiz() {
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
              <span className="text-foreground">PSP</span>
            </h1>
            <h2 className="text-xl text-muted-foreground">Simulacro II</h2>
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

            <Button
              onClick={startQuiz}
              size="lg"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold"
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
              <div className="text-6xl font-bold text-indigo-500 mb-2">{Math.max(0, percentage)}%</div>
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
              {percentage >= 90 && <p className="text-lg text-foreground">Excelente. Dominas PSP.</p>}
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
                className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold"
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
          <span className="text-indigo-500">{answeredCount} respondidas</span>
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
                      ${!showFeedback && "hover:border-indigo-500 hover:bg-accent cursor-pointer"}
                      ${showFeedback && "cursor-not-allowed"}
                      ${isSelected && !showFeedback && "border-indigo-500 bg-accent"}
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
                className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white"
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
            className="h-full bg-indigo-500 transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
