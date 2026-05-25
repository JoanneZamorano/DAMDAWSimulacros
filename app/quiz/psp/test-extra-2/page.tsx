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
    question: "44. ¿Qué protocolo proporciona una alternativa segura a Telnet para administración remota de sistemas?",
    options: [
      "FTP (File Transfer Protocol)",
      "SSH (Secure Shell)",
      "HTTP (Hypertext Transfer Protocol)",
      "SMTP (Simple Mail Transfer Protocol)"
    ],
    correctAnswer: 1
  },
  {
    question: "45. En Java, cuando un thread ejecuta Thread.sleep(ms) entra en estado TIMED_WAITING, y con wait() sin tiempo entra en WAITING. ¿Cómo se denomina genéricamente este grupo de estados frente a BLOCKED (espera de monitor)?",
    options: [
      "Estado Ejecutando (RUNNING)",
      "Estado Listo (RUNNABLE)",
      "Estado de Espera (WAITING/TIMED_WAITING)",
      "Estado Finalizado (TERMINATED)"
    ],
    correctAnswer: 2
  },
  {
    question: "46. ¿Qué garantiza un método o bloque de código declarado como synchronized cuando es invocado sobre el mismo objeto?",
    options: [
      "Que se ejecuta más rápido que código no sincronizado",
      "Que solo un thread puede ejecutarlo a la vez sobre ese objeto",
      "Que elimina completamente la necesidad de validar datos",
      "Que el código nunca experimentará excepciones"
    ],
    correctAnswer: 1
  },
  {
    question: "47. ¿Qué característica fundamental distingue a la criptografía simétrica de la asimétrica?",
    options: [
      "La criptografía simétrica utiliza un par de claves pública-privada mientras que la asimétrica usa una única clave compartida",
      "La criptografía simétrica emplea la misma clave para cifrar y descifrar, mientras que la asimétrica usa claves diferentes para cada operación",
      "La criptografía simétrica es más segura porque requiere mayor poder computacional",
      "La criptografía asimétrica no requiere transmisión segura de claves, a diferencia de la simétrica"
    ],
    correctAnswer: 1
  },
  {
    question: "48. En un sistema con un único núcleo de procesador, ¿cómo logra el sistema operativo que varios procesos parezcan ejecutarse al mismo tiempo?",
    options: [
      "Ejecutando todos los procesos en paralelo real mediante hipervisión de núcleo único",
      "Alternando rápidamente entre procesos mediante cambios de contexto, creando ilusión de simultaneidad",
      "Suspendiendo todos los procesos excepto uno hasta que este finaliza completamente",
      "Asignando fragmentos de memoria exclusiva a cada proceso para que se autogestionen"
    ],
    correctAnswer: 1
  },
  {
    question: "49. ¿En qué estado se encuentra un proceso que está listo para ejecutarse pero espera su turno de ejecución?",
    options: [
      "Estado bloqueado (Blocked)",
      "Estado en espera (Waiting)",
      "Estado preparado o listo (Ready)",
      "Estado terminado (Terminated)"
    ],
    correctAnswer: 2
  },
  {
    question: "50. ¿Qué mecanismo de IPC (Inter-Process Communication) conecta la salida estándar de un proceso con la entrada estándar de otro?",
    options: [
      "Socket Unix",
      "Cola de mensajes (Message Queue)",
      "Tubería o pipe (|)",
      "Memoria compartida (Shared Memory)"
    ],
    correctAnswer: 2
  },
  {
    question: "51. ¿Qué describe mejor la situación de deadlock o abrazo mortal en sistemas concurrentes?",
    options: [
      "El bloqueo temporal de un proceso mientras espera a que termine su quantum de tiempo",
      "Un estado donde dos o más procesos quedan indefinidamente bloqueados esperándose mutuamente para liberar recursos",
      "La terminación abrupta de un proceso por exceso de memoria",
      "Una condición donde un hilo se convierte en un demonio involuntariamente"
    ],
    correctAnswer: 1
  },
  {
    question: "52. ¿Por qué se prefiere implementar la interfaz Runnable en lugar de extender la clase Thread en Java?",
    options: [
      "Porque Runnable es más rápido en ejecución que Thread",
      "Porque Java permite herencia múltiple de interfaces pero no de clases, preservando la arquitectura de la clase",
      "Porque Thread está deprecated desde Java 5",
      "Porque Runnable utiliza menos memoria que Thread"
    ],
    correctAnswer: 1
  },
  {
    question: "53. ¿Qué tipos de vulnerabilidades puede prevenir una validación rigurosa de tipo, longitud, formato y rango en las entradas?",
    options: [
      "Únicamente ataques de denegación de servicio distribuido",
      "Inyección SQL, desbordamiento de búfer, formateo incorrecto de datos y comportamientos inesperados",
      "Solo vulnerabilidades de cifrado débil",
      "Exclusivamente problemas de concurrencia en hilos"
    ],
    correctAnswer: 1
  },
  {
    question: "54. ¿Cuál fue el factor técnico clave que permitió la brecha de seguridad de Equifax en 2017?",
    options: [
      "Falta de validación de entrada en un componente web conocido sin parche disponible",
      "Validación de certificados SSL correctamente implementada pero con falsos positivos",
      "Sobrecarga de la base de datos debido a consultas concurrentes no controladas",
      "Implementación incorrecta de un protocolo de criptografía asimétrica"
    ],
    correctAnswer: 0
  },
  {
    question: "55. ¿Qué es un servicio o daemon en el contexto de sistemas operativos?",
    options: [
      "Un programa interactivo que requiere entrada constante del usuario para funcionar",
      "Un proceso de larga duración que ejecuta en segundo plano sin interfaz de usuario, proporcionando servicios al sistema",
      "Un archivo temporal que se elimina automáticamente al reiniciar",
      "Un componente de hardware que gestiona la memoria física"
    ],
    correctAnswer: 1
  },
  {
    question: "56. ¿Cuál fue la solución implementada por la NASA para resolver el problema de priority inversion en la misión Mars Pathfinder?",
    options: [
      "Aumentar la frecuencia de reloj del procesador del rover",
      "Implementar herencia de prioridad para los locks, permitiendo que un hilo de baja prioridad que posee un lock sea promovido a la prioridad del hilo de alta prioridad esperando",
      "Eliminar completamente el uso de múltiples hilos en el software",
      "Utilizar exclusivamente memoria compartida en lugar de locks"
    ],
    correctAnswer: 1
  },
  {
    question: "57. En Java, cuando un hilo ejecuta Thread.sleep(5000), ¿qué ocurre con dicho hilo durante ese período?",
    options: [
      "Sigue ejecutándose pero reduce su prioridad temporalmente",
      "Entra en estado bloqueado, cede la CPU y mantiene sus locks adquiridos",
      "Finaliza su ejecución y debe reiniciarse manualmente tras el tiempo indicado",
      "Pasa a estado preparado y compite de nuevo por la CPU de inmediato"
    ],
    correctAnswer: 1
  },
  {
    question: "58. En el contexto del paralelismo, ¿qué principio describe el límite o 'techo' de la aceleración que se puede conseguir al añadir más núcleos?",
    options: [
      "La condición de carrera (Race condition)",
      "La Ley de Moore",
      "La herencia de prioridades",
      "La Ley de Amdahl"
    ],
    correctAnswer: 3
  },
  {
    question: "59. ¿Qué modelo de control de accesos se caracteriza porque las reglas son centralizadas y no pueden ser modificadas por los usuarios?",
    options: [
      "DAC (Discretionary Access Control)",
      "MAC (Mandatory Access Control)",
      "RBAC (Role-Based Access Control)",
      "ABAC (Attribute-Based Access Control)"
    ],
    correctAnswer: 1
  },
  {
    question: "60. Respecto a la criptografía simétrica (como AES), ¿cuál es su principal ventaja y su mayor debilidad según la teoría?",
    options: [
      "Es muy segura para el intercambio de claves, pero ineficiente para grandes volúmenes de datos",
      "No requiere claves, pero su algoritmo matemático es fácilmente reversible",
      "Es rápida e ideal para grandes volúmenes de datos, pero su debilidad es el intercambio seguro de la clave",
      "Utiliza funciones irreversibles (hash), pero permite colisiones frecuentes"
    ],
    correctAnswer: 2
  },
  {
    question: "61. En el caso de estudio de Linux, ¿qué mecanismo de IPC (Comunicación Entre Procesos) utiliza 'systemd' para permitir que las aplicaciones se comuniquen entre sí?",
    options: [
      "Sockets TCP puros",
      "Tuberías anónimas (pipes)",
      "D-Bus, un sistema moderno de paso de mensajes",
      "Memoria compartida exclusivamente"
    ],
    correctAnswer: 2
  },
  {
    question: "62. ¿Qué modelo de control de acceso se caracteriza porque el propio propietario de un recurso es quien tiene la autoridad para decidir qué otros usuarios pueden acceder a él?",
    options: [
      "DAC (Discretionary Access Control)",
      "MAC (Mandatory Access Control)",
      "RBAC (Role-Based Access Control)",
      "ABAC (Attribute-Based Access Control)"
    ],
    correctAnswer: 0
  },
  {
    question: "63. ¿Qué modelo de control de acceso permite establecer reglas dinámicas analizando variables del entorno y del contexto, tales como la ubicación geográfica o la hora del día en la que se solicita el acceso?",
    options: [
      "DAC (Discretionary Access Control)",
      "MAC (Mandatory Access Control)",
      "RBAC (Role-Based Access Control)",
      "ABAC (Attribute-Based Access Control)"
    ],
    correctAnswer: 3
  },
  {
    question: "64. Al configurar un bloque o método 'synchronized' en Java, ¿sobre qué elemento se adquiere el bloqueo (monitor lock) si el método es estático?",
    options: [
      "Sobre la instancia concreta representada por la palabra clave 'this'",
      "Sobre el hilo actual que está invocando el método (Thread.currentThread())",
      "Sobre el objeto de la propia clase (Clase.class)",
      "Sobre el planificador de hilos de la Máquina Virtual de Java (JVM)"
    ],
    correctAnswer: 2
  },
  {
    question: "65. ¿Qué diferencia fundamental existe entre aplicar una función Hash y un algoritmo de Cifrado sobre un conjunto de datos?",
    options: [
      "El cifrado utiliza claves públicas y el hash solo claves privadas compartidas",
      "El hash transforma los datos en una cadena reversible, mientras que el cifrado es siempre irreversible",
      "El hash es de longitud variable y el cifrado siempre genera bloques de tamaño fijo",
      "A diferencia del cifrado, el hash genera una cadena de longitud fija e irreversible que no se descifra, sino que se compara"
    ],
    correctAnswer: 3
  },
  {
    question: "66. ¿Qué herremienta gráfica open-source se recomienda en el temario para enviar y recibir payloads de red (TCP/UDP) a un puerto concreto sin necesidad de programar el código del cliente?",
    options: [
      "Let's Encrypt",
      "Packet Sender",
      "Wireshark",
      "JMeter"
    ],
    correctAnswer: 1
  },
  {
    question: "67. ¿Cuál es el error conceptual del mito 'Si una variable se declara como volatile en Java, ya no necesito utilizar synchronized o bloques atómicos'?",
    options: [
      "Que 'volatile' está deprecated desde Java 8",
      "Que 'volatile' solo garantiza la visibilidad de los cambios entre las memorias de los hilos, pero no asegura la atomicidad en operaciones compuestas (como un contador++)",
      "Que 'volatile' consume más memoria de CPU que un ReentrantLock",
      "Que 'volatile' solo se puede aplicar a interfaces y no a variables mutables"
    ],
    correctAnswer: 1
  },
  {
    question: "68. En sistemas concurrentes, ¿a qué tipo de errores efímeros, no deterministas y difíciles de replicar se les denomina 'Heisenbugs'?",
    options: [
      "A los errores de compilación causados por una sintaxis JSON incorrecta",
      "A fallos de hardware provocados por la temperatura del procesador",
      "A fallos que dependen de la temporización exacta de los hilos y que pueden desaparecer al intentar observarlos con un depurador o añadir un print",
      "A desbordamientos de búfer provocados exclusivamente por inyecciones SQL"
    ],
    correctAnswer: 2
  },
  {
    question: "69. En la programación multihilo de Java, ¿qué ocurre si intentas invocar el método start() sobre un hilo que ya se encuentra en estado TERMINATED?",
    options: [
      "El hilo se reinicia desde el principio volviendo al estado NEW",
      "El hilo pasa directamente a competir por la CPU en estado RUNNABLE",
      "Lanza una excepción en tiempo de ejecución, ya que los hilos en Java son de un solo uso",
      "El planificador de la JVM ignora la llamada y destruye el objeto de forma asíncrona"
    ],
    correctAnswer: 2
  },
  {
    question: "70. Al diseñar la estrategia de concurrencia en un servidor, ¿qué número óptimo de hilos activos se recomienda si la tarea es puramente computacional e intensiva (CPU-bound)?",
    options: [
      "Un número de hilos igual o cercano al número de núcleos físicos de la CPU",
      "Tantos hilos como clientes concurrentes soliciten acceso, sin límite establecido",
      "Un único hilo que gestione un Selector asíncrono (NIO)",
      "Exactamente el doble del tamaño asignado a la memoria caché del sistema"
    ],
    correctAnswer: 0
  },
  {
    question: "71. Al consumir servicios web orientados a la integración de sistemas distribuidos, ¿qué estilo arquitectónico destaca por ser flexible, no requerir un contrato rígido XML (como el WSDL de SOAP) y representar habitualmente los recursos en formato JSON?",
    options: [
      "RMI (Remote Method Invocation)",
      "RPC (Remote Procedure Call)",
      "REST (Representational State Transfer)",
      "D-Bus"
    ],
    correctAnswer: 3
  },
  {
    question: "72. En el ecosistema de Google Workspace, además del modelo de roles predefinidos (RBAC), ¿qué características del modelo ABAC implementan para robustecer el control de accesos?",
    options: [
      "Permitir que cualquier usuario propietario configure de forma discrecional los permisos",
      "Limitar o denegar los accesos basándose en atributos dinámicos como la ubicación geográfica o la dirección IP del usuario",
      "Delegar el control de accesos a la validación estricta de formularios frontend",
      "Eliminar el uso de la autenticación multifactor (MFA)"
    ],
    correctAnswer: 1
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

export default function SGESimulacro2Quiz() {
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
            <h2 className="text-xl text-muted-foreground">Test Extra II</h2>
            <p className="text-muted-foreground text-lg">Programacion de Servicios y Procesos</p>

            <div className="space-y-4 text-left py-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">{questions.length} Preguntas</p>
                  <p className="text-sm text-muted-foreground">Todos los conceptos clave</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Preguntas Aleatorizadas</p>
                  <p className="text-sm text-muted-foreground">Cada sesion es diferente</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Retroalimentacion Inmediata</p>
                  <p className="text-sm text-muted-foreground">Aprende mientras practicas</p>
                </div>
              </div>
            </div>

            <Button
              onClick={startQuiz}
              size="lg"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold"
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
              <div className="text-6xl font-bold text-amber-500 mb-2">{Math.max(0, percentage)}%</div>
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
              {percentage >= 90 && <p className="text-lg text-foreground">Excelente. Dominas SGE.</p>}
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
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold"
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
          <span className="text-amber-500">{answeredCount} respondidas</span>
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
                      ${!showFeedback && "hover:border-amber-500 hover:bg-accent cursor-pointer"}
                      ${showFeedback && "cursor-not-allowed"}
                      ${isSelected && !showFeedback && "border-amber-500 bg-accent"}
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
                className="flex-1 bg-amber-500 hover:bg-amber-600 text-white"
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
            className="h-full bg-amber-500 transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
