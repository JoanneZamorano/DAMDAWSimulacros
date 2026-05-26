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
    "question": "1. ¿Qué significa aplicar el enfoque \"security by design\" en el desarrollo de software?",
    "options": [
      "Añadir medidas de seguridad sólo al final del proyecto",
      "Pensar en la seguridad desde la concepción del software",
      "Cifrar todos los archivos del sistema operativo",
      "Sustituir la validación de datos por un antivirus"
    ],
    "correctAnswer": 1
  },
  {
    "question": "2. ¿Por qué no se debe confiar automáticamente en los datos introducidos por un usuario en un formulario, una API o un archivo cargado?",
    "options": [
      "Porque siempre contienen errores de compilación",
      "Porque pueden contener código malicioso diseñado para romper la aplicación",
      "Porque Java no permite recibir datos externos",
      "Porque los datos externos solo sirven para interfaces gráficas"
    ],
    "correctAnswer": 1
  },
  {
    "question": "3. ¿Qué puede prevenir una validación estricta de tipo, longitud, formato y rango?",
    "options": [
      "Únicamente errores de compilación",
      "Ataques como la inyección SQL o el XSS",
      "La pérdida de conexión a internet",
      "Los fallos físicos del disco duro"
    ],
    "correctAnswer": 1
  },
  {
    "question": "4. Según el material, ¿cuál es una práctica adecuada para almacenar contraseñas?",
    "options": [
      "Guardarlas en texto plano para recuperarlas fácilmente",
      "Cifrarlas con la misma clave que todos los archivos del sistema",
      "Aplicar hash con salting, usando técnicas como bcrypt o Argon2",
      "Guardarlas únicamente en una variable temporal del programa"
    ],
    "correctAnswer": 2
  },
  {
    "question": "5. ¿Qué tres propiedades forman la triada CIA mencionada en programación segura?",
    "options": [
      "Compilación, instalación y actualización",
      "Confidencialidad, integridad y disponibilidad",
      "Cliente, interfaz y aplicación",
      "Control, identificación y archivo"
    ],
    "correctAnswer": 1
  },
  {
    "question": "6. ¿Qué caracteristica define a la criptografia simétrica?",
    "options": [
      "Usa una clave pública y otra privada",
      "Emplea una única clave compartida para cifrar y descifrar",
      "No permite cifrar grandes volúmenes de datos",
      "Solo se utiliza en firmas digitales"
    ],
    "correctAnswer": 1
  },
  {
    "question": "7. ¿Qué caracteriza a la criptografia asimétrica?",
    "options": [
      "Usa una única clave compartida entre emisor y receptor",
      "Utiliza una clave pública y una clave privada relacionadas entre si",
      "No puede utilizarse en comunicaciones por Internet",
      "Solo sirve para comprimir archivos grandes"
    ],
    "correctAnswer": 1
  },
  {
    "question": "8. ¿Cuál es la finalidad principal de una función hash en seguridad?",
    "options": [
      "Crear una huella o resumen de datos de forma no reversible",
      "Permitir descifrar cualquier mensaje con una clave privada",
      "Sustituir completamente a los certificados digitales",
      "Aumentar la velocidad de la tarjeta de red"
    ],
    "correctAnswer": 0
  },
  {
    "question": "9. ¿Qué protocolo se presenta en el documento como sustituto seguro de Telnet para conexiones remotas?",
    "options": [
      "FTP",
      "HTTP",
      "SSH",
      "SMTP"
    ],
    "correctAnswer": 2
  },
  {
    "question": "10. ¿Qué protege principalmente HTTPS mediante TLS?",
    "options": [
      "La comunicación en tránsito entre cliente y servidor",
      "La batería del equipo cliente",
      "La estructura física del disco duro",
      "La velocidad de ejecución de los hilos"
    ],
    "correctAnswer": 0
  },
  {
    "question": "11. ¿Qué modelo de control de accesos asigna permisos según roles predefinidos como administrador, editor o lector?",
    "options": [
      "DAC",
      "MAC",
      "RBAC",
      "ABAC"
    ],
    "correctAnswer": 2
  },
  {
    "question": "12. Según el apartado de mitos y realidades, ¿por qué una contraseña fuerte no basta por si sola?",
    "options": [
      "Porque las contraseñas fuertes no pueden almacenarse en servidores",
      "Porque los ataques de phishing o robo de credenciales siguen siendo posibles y conviene añadir medidas como MFA",
      "Porque una contraseña fuerte impide usar cifrado",
      "Porque las contraseñas fuertes solo funcionan en Linux"
    ],
    "correctAnswer": 1
  },
  {
    "question": "13. ¿Qué caracteriza a la concurrencia?",
    "options": [
      "Ejecutar siempre tareas al mismo tiempo en varios núcleos.",
      "Gestionar múltiples tareas cuyos tiempos de ejecución se solapan.",
      "Repartir una tarea entre varias máquinas por red.",
      "Crear únicamente procesos en segundo plano."
    ],
    "correctAnswer": 1
  },
  {
    "question": "14. ¿Qué define mejor el paralelismo?",
    "options": [
      "La espera indefinida de un hilo bloqueado",
      "La ejecución de tareas únicamente en un único núcleo",
      "La ejecución simultánea real en hardware con varios núcleos o CPUs",
      "La traducción de nombres de dominio a direcciones IP"
    ],
    "correctAnswer": 2
  },
  {
    "question": "15. ¿Qué añade la programación distribuida frente a la concurrencia dentro de una sola máquina?",
    "options": [
      "El uso obligatorio de una interfaz gráfica",
      "La eliminación total de la latencia",
      "La coordinación de varias máquinas conectadas por red mediante mensajes",
      "La imposibilidad de que existan fallos parciales"
    ],
    "correctAnswer": 2
  },
  {
    "question": "16. ¿En qué estado está un proceso que está preparado para ejecutarse, pero espera su turno de CPU?",
    "options": [
      "Nuevo",
      "Bloqueado",
      "Listo",
      "Terminado"
    ],
    "correctAnswer": 2
  },
  {
    "question": "17. ¿Cuál es la diferencia esencial entre un proceso y un hilo?",
    "options": [
      "Un proceso siempre comparte memoria y un hilo siempre tiene memoria aislada",
      "Un proceso tiene espacio de memoria propio; un hilo comparte memoria y recursos del proceso",
      "Un proceso solo existe en Windows y un hilo solo en Linux",
      "No existe ninguna diferencia real entre ambos"
    ],
    "correctAnswer": 1
  },
  {
    "question": "18. ¿Qué es un servicio o daemon?",
    "options": [
      "Un hilo que comparte memoria con otros hilos.",
      "Un proceso especial que se ejecuta en segundo plano, sin interfaz gráfica ni intervención del usuario.",
      "Un mecanismo de IPC basado en colas de mensajes.",
      "Un proceso que solo existe en sistemas Windows."
    ],
    "correctAnswer": 1
  },
  {
    "question": "19. ¿Qué mecanismo de IPC conecta la salida de un proceso con la entrada de otro?",
    "options": [
      "Señales",
      "Tuberías (pipes)",
      "Mutex",
      "Barreras"
    ],
    "correctAnswer": 1
  },
  {
    "question": "20. ¿Qué representa el árbol de procesos de un sistema operativo?",
    "options": [
      "Una lista de archivos ordenados alfabéticamente",
      "La relación jerárquica entre procesos padre y procesos hijo",
      "El mapa físico de sectores del disco duro",
      "La tabla de usuarios conectados por SSH"
    ],
    "correctAnswer": 1
  },
  {
    "question": "21. ¿Qué describe mejor un deadlock?",
    "options": [
      "Un hilo de baja prioridad que tarda mucho en ejecutarse.",
      "Dos o más procesos o hilos bloqueados para siempre, esperando un recurso que otro posee.",
      "Una técnica para acelerar tareas con varios núcleos.",
      "Un proceso que ya ha liberado todos sus recursos."
    ],
    "correctAnswer": 1
  },
  {
    "question": "22. ¿Qué se entiende por inanición o starvation en concurrencia?",
    "options": [
      "Que un proceso termina correctamente y libera todos sus recursos",
      "Que un proceso o hilo espera indefinidamente porque otros reciben siempre prioridad o recursos antes que él",
      "Que el sistema operativo elimina todos los hilos de golpe",
      "Que se ejecutan dos tareas exactamente al mismo tiempo"
    ],
    "correctAnswer": 1
  },
  {
    "question": "23. ¿Qué problema se produjo en la misión Mars Pathfinder antes de activar la solución?",
    "options": [
      "Una pérdida de señal por usar DNS incorrecto",
      "Una inversión de prioridades que provocaba bloqueos y reinicios",
      "Un fallo por no usar el puerto 443",
      "Una incompatibilidad entre FTP y HTTP"
    ],
    "correctAnswer": 1
  },
  {
    "question": "24. ¿Qué práctica ayuda a reducir la probabilidad de deadlocks?",
    "options": [
      "Adquirir los bloqueos siempre en cualquier orden aleatorio",
      "Definir un orden global de adquisición de bloqueos y usar timeouts cuando sea adecuado",
      "Eliminar todos los logs de depuración",
      "Crear un número ilimitado de hilos por cada tarea"
    ],
    "correctAnswer": 1
  },
  {
    "question": "25. ¿Por qué suele preferirse implementar Runnable frente a extender Thread?",
    "options": [
      "Porque Runnable permite reiniciar un mismo hilo varias veces.",
      "Porque Java no soporta herencia múltiple y Runnable ofrece más flexibilidad.",
      "Porque Runnable garantiza siempre un orden fijo de ejecución.",
      "Porque Runnable evita por completo el uso del planificador de la JVM."
    ],
    "correctAnswer": 1
  },
  {
    "question": "26. Al crear una subclase de Thread en Java, ¿qué método se sobrescribe normalmente para definir la tarea del hilo?",
    "options": [
      "main()",
      "sleep()",
      "run()",
      "equals()"
    ],
    "correctAnswer": 2
  },
  {
    "question": "27. ¿Qué diferencia hay entre llamar a start() y llamar directamente a run() sobre un objeto Thread?",
    "options": [
      "run() crea un hilo nuevo y start() no ejecuta nada",
      "start() inicia un hilo nuevo; run() llamado directamente se ejecuta como una llamada normal en el hilo actual",
      "Ambos métodos hacen exactamente lo mismo",
      "start() solo puede usarse con DatagramSocket"
    ],
    "correctAnswer": 1
  },
  {
    "question": "28. Cuando en Java un hilo llama a Thread.sleep() o a wait(5000), ¿en qué estado entra?",
    "options": [
      "NEW",
      "BLOCKED",
      "TIMED_WAITING",
      "TERMINATED"
    ],
    "correctAnswer": 2
  },
  {
    "question": "29. ¿Qué significa que el planificador de hilos de la JVM no sea determinista?",
    "options": [
      "Que los hilos no pueden ejecutarse nunca",
      "Que Java prohíbe usar prioridades",
      "Que el orden de ejecución siempre será idéntico",
      "Que el orden final puede variar según el sistema operativo y la carga"
    ],
    "correctAnswer": 3
  },
  {
    "question": "30. ¿Qué ventaja aporta ExecutorService frente a crear hilos manualmente de forma continua?",
    "options": [
      "Impide que existan tareas concurrentes",
      "Permite ejecutar solo un hilo en toda la aplicación",
      "Gestiona un pool de hilos y facilita enviar tareas para su ejecución",
      "Convierte automáticamente UDP en TCP"
    ],
    "correctAnswer": 2
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

export default function PSPSimulacro1Quiz() {
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
            <h2 className="text-xl text-muted-foreground">Simulacro I</h2>
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
