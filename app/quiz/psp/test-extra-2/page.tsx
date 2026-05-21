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
    question: "51. ¿Cuál fue la vulnerabilidad técnica fundamental que permitió la brecha de seguridad de Equifax en 2017?",
    options: [
      "Falta de cifrado de contraseñas en las bases de datos",
      "Uso de contraseñas débiles por parte de los administradores",
      "Explotación de una vulnerabilidad sin parche en un componente de la aplicación web",
      "Robo físico de servidores del centro de datos"
    ],
    correctAnswer: 2
  },
  {
    question: "52. ¿Cuál es la característica fundamental que define la criptografía simétrica?",
    options: [
      "Utiliza dos claves diferentes: una para cifrar y otra para descifrar",
      "Usa la misma clave para tanto cifrar como descifrar los datos",
      "No requiere intercambio previo de claves entre las partes",
      "Implementa algoritmos basados exclusivamente en factorización de números primos"
    ],
    correctAnswer: 1
  },
  {
    question: "53. ¿Qué protocolo proporciona una alternativa segura a Telnet para administración remota de sistemas?",
    options: [
      "FTP (File Transfer Protocol)",
      "SSH (Secure Shell)",
      "HTTP (Hypertext Transfer Protocol)",
      "SMTP (Simple Mail Transfer Protocol)"
    ],
    correctAnswer: 1
  },
  {
    question: "54. ¿Qué modelo de control de acceso asigna permisos basándose en roles predefinidos como administrador, usuario, invitado?",
    options: [
      "DAC (Discretionary Access Control)",
      "RBAC (Role-Based Access Control)",
      "MAC (Mandatory Access Control)",
      "ABAC (Attribute-Based Access Control)"
    ],
    correctAnswer: 1
  },
  {
    question: "55. ¿Qué define fundamentalmente la concurrencia en sistemas operativos?",
    options: [
      "La ejecución simultánea y paralela de procesos, requiriendo obligatoriamente múltiples núcleos",
      "La capacidad de gestionar múltiples tareas en progreso, intercalando su ejecución en uno o varios núcleos",
      "El acceso exclusivo de un proceso a todos los recursos del sistema durante su ejecución",
      "La sincronización perfecta y continua entre todos los hilos del sistema en todo momento"
    ],
    correctAnswer: 1
  },
  {
    question: "56. ¿En qué estado se encuentra un proceso que está listo para ejecutarse pero aguarda que el planificador le asigne tiempo de CPU?",
    options: [
      "Estado Ejecutando",
      "Estado Bloqueado",
      "Estado Listo",
      "Estado Terminado"
    ],
    correctAnswer: 2
  },
  {
    question: "57. ¿Qué es un servicio o daemon en un sistema operativo?",
    options: [
      "Un virus que daña el sistema sin permiso del usuario",
      "Un proceso que se ejecuta en segundo plano de manera continua, independiente de sesión de usuario",
      "Un programa gráfico que siempre debe ejecutarse con privilegios de administrador",
      "Una aplicación que solo se ejecuta durante el booteo del sistema"
    ],
    correctAnswer: 1
  },
  {
    question: "58. ¿Qué mecanismo de comunicación inter-procesos (IPC) permite conectar la salida estándar de un proceso con la entrada estándar de otro?",
    options: [
      "Socket TCP/IP",
      "Tubería (pipe)",
      "Memoria compartida",
      "Cola de mensajes"
    ],
    correctAnswer: 1
  },
  {
    question: "59. ¿Qué describe mejor una situación de deadlock (interbloqueo)?",
    options: [
      "Un proceso que consume demasiados recursos de CPU",
      "Dos o más procesos esperándose mutuamente, cada uno sosteniendo recursos que el otro necesita",
      "Un thread que se ejecuta continuamente sin ceder tiempo a otros threads",
      "Una falta de memoria disponible en el sistema"
    ],
    correctAnswer: 1
  },
  {
    question: "60. ¿Cuál fue el enfoque técnico implementado por NASA para resolver el problema de priority inversion en la misión Mars Pathfinder?",
    options: [
      "Aumentar la velocidad del procesador del rover",
      "Implementar herencia de prioridad para sincronización de threads",
      "Eliminar todos los threads de baja prioridad del sistema",
      "Reemplazar el sistema operativo por uno sin soporte multitarea"
    ],
    correctAnswer: 1
  },
  {
    question: "61. ¿Cuál es la ventaja principal de implementar la interfaz Runnable frente a extender la clase Thread en Java?",
    options: [
      "Permite que la clase herede de múltiples clases simultáneamente",
      "Proporciona mejor rendimiento de ejecución del thread",
      "Permite que la clase extienda otra clase base mientras implementa concurrencia",
      "Elimina automáticamente la necesidad de sincronización"
    ],
    correctAnswer: 2
  },
  {
    question: "62. En Java, cuando un thread ejecuta Thread.sleep(ms) entra en estado TIMED_WAITING, y con wait() sin tiempo entra en WAITING. ¿Cómo se denomina genéricamente este grupo de estados frente a BLOCKED (espera de monitor)?",
    options: [
      "Estado Ejecutando (RUNNING)",
      "Estado Listo (RUNNABLE)",
      "Estado de Espera (WAITING/TIMED_WAITING)",
      "Estado Finalizado (TERMINATED)"
    ],
    correctAnswer: 2
  },
  {
    question: "63. ¿Qué garantiza un método o bloque de código declarado como synchronized cuando es invocado sobre el mismo objeto?",
    options: [
      "Que se ejecuta más rápido que código no sincronizado",
      "Que solo un thread puede ejecutarlo a la vez sobre ese objeto",
      "Que elimina completamente la necesidad de validar datos",
      "Que el código nunca experimentará excepciones"
    ],
    correctAnswer: 1
  },
  {
    question: "64. ¿Qué tipo de amenazas puede prevenirse mediante la validación estricta de entrada en cuanto a tipo, longitud, formato y rango?",
    options: [
      "Únicamente ataques de ingeniería social mediante correo electrónico",
      "Inyección de código, desbordamiento de búfer, falsificación de datos y manipulación de lógica",
      "Solo los ataques de fuerza bruta contra contraseñas débiles",
      "Exclusivamente vulnerabilidades de capa de red en protocolo TCP/IP"
    ],
    correctAnswer: 1
  },
  {
    question: "66. ¿Qué característica fundamental distingue a la criptografía simétrica de la asimétrica?",
    options: [
      "La criptografía simétrica utiliza un par de claves pública-privada mientras que la asimétrica usa una única clave compartida",
      "La criptografía simétrica emplea la misma clave para cifrar y descifrar, mientras que la asimétrica usa claves diferentes para cada operación",
      "La criptografía simétrica es más segura porque requiere mayor poder computacional",
      "La criptografía asimétrica no requiere transmisión segura de claves, a diferencia de la simétrica"
    ],
    correctAnswer: 1
  },
  {
    question: "67. ¿A qué modelo de control de accesos pertenece la asignación de permisos basada en roles predefinidos como administrador, usuario y visitante?",
    options: [
      "DAC (Discretionary Access Control)",
      "RBAC (Role-Based Access Control)",
      "MAC (Mandatory Access Control)",
      "ABAC (Attribute-Based Access Control)"
    ],
    correctAnswer: 1
  },
  {
    question: "68. En un sistema con un único núcleo de procesador, ¿cómo logra el sistema operativo que varios procesos parezcan ejecutarse al mismo tiempo?",
    options: [
      "Ejecutando todos los procesos en paralelo real mediante hipervisión de núcleo único",
      "Alternando rápidamente entre procesos mediante cambios de contexto, creando ilusión de simultaneidad",
      "Suspendiendo todos los procesos excepto uno hasta que este finaliza completamente",
      "Asignando fragmentos de memoria exclusiva a cada proceso para que se autogestionen"
    ],
    correctAnswer: 1
  },
  {
    question: "69. ¿En qué estado se encuentra un proceso que está preparado para ejecutarse pero espera ser asignado al procesador?",
    options: [
      "Ejecutando",
      "Listo (Ready)",
      "Bloqueado",
      "Finalizado"
    ],
    correctAnswer: 1
  },
  {
    question: "70. ¿Qué es un servicio o daemon en un sistema operativo?",
    options: [
      "Un programa que se ejecuta en segundo plano de forma continua, sin interacción directa del usuario",
      "Un archivo de configuración del kernel que define parámetros de red",
      "Un tipo de virus que se propaga automáticamente entre procesos",
      "Un módulo del compilador que optimiza el código en tiempo de ejecución"
    ],
    correctAnswer: 0
  },
  {
    question: "71. ¿Qué mecanismo de comunicación entre procesos (IPC) conecta la salida de un proceso directamente con la entrada de otro?",
    options: [
      "Cola de mensajes",
      "Tubería o pipe",
      "Memoria compartida",
      "Socket de red"
    ],
    correctAnswer: 1
  },
  {
    question: "72. ¿Cuál es la característica más precisa de un deadlock (bloqueo mutuo)?",
    options: [
      "Un proceso que consume el 100% de CPU sin avanzar",
      "Una situación donde dos o más procesos quedan permanentemente bloqueados, cada uno esperando un recurso que otro posee",
      "Un error que ocurre cuando la memoria del sistema se agota",
      "Un fallo de comunicación entre procesos en una red"
    ],
    correctAnswer: 1
  },
  {
    question: "73. En el caso de estudio de la sonda Mars Pathfinder, ¿cuál fue la solución que implementó la NASA para resolver el problema de prioridades entre hilos?",
    options: [
      "Aumentar la velocidad de procesamiento del hardware",
      "Implementar herencia de prioridades (priority inheritance) en el mecanismo de sincronización",
      "Eliminar todos los hilos concurrentes y usar ejecución secuencial",
      "Desactivar el sistema de reintentos automáticos"
    ],
    correctAnswer: 1
  },
  {
    question: "74. ¿Por qué se suele preferir implementar la interfaz Runnable sobre extender la clase Thread en Java?",
    options: [
      "Porque Runnable es más rápido en tiempo de ejecución",
      "Porque permite que la clase herede de otra clase al mismo tiempo, no limitando la herencia",
      "Porque Runnable proporciona métodos de sincronización automática",
      "Porque elimina la necesidad de usar synchronized"
    ],
    correctAnswer: 1
  },
  {
    question: "75. ¿Qué tipo de ataques puede prevenir una validación estricta de entrada en cuanto a tipo, longitud, formato y rango?",
    options: [
      "Solo ataques de denegación de servicio distribuido (DDoS)",
      "Inyección SQL, inyección de comandos, desbordamiento de búfer y manipulación de datos",
      "Únicamente errores de compilación en el código fuente",
      "Problemas de rendimiento en bases de datos"
    ],
    correctAnswer: 1
  },
  {
    question: "76. ¿Qué característica fundamental define a la criptografía simétrica?",
    options: [
      "Utiliza dos claves distintas: una pública para cifrar y otra privada para descifrar",
      "Usa la misma clave secreta para cifrar y descifrar los datos",
      "No requiere clave alguna y utiliza solo funciones matemáticas irreversibles",
      "Genera una clave diferente cada vez que se ejecuta el algoritmo"
    ],
    correctAnswer: 1
  },
  {
    question: "77. ¿Cuál es el modelo de control de accesos que asigna permisos basándose en roles predefinidos del usuario?",
    options: [
      "ACL (Access Control List)",
      "ABAC (Attribute-Based Access Control)",
      "RBAC (Role-Based Access Control)",
      "MAC (Mandatory Access Control)"
    ],
    correctAnswer: 2
  },
  {
    question: "78. ¿Qué caracteriza fundamentalmente a la concurrencia en sistemas operativos y aplicaciones?",
    options: [
      "La ejecución secuencial de procesos en el orden exacto de su creación",
      "La capacidad de que múltiples procesos o hilos aparenten ejecutarse simultáneamente",
      "La necesidad de que cada proceso tenga su propio procesador físico dedicado",
      "La imposibilidad de compartir memoria entre procesos distintos"
    ],
    correctAnswer: 1
  },
  {
    question: "79. ¿En qué estado se encuentra un proceso que está listo para ejecutarse pero espera su turno de ejecución?",
    options: [
      "Estado bloqueado (Blocked)",
      "Estado en espera (Waiting)",
      "Estado preparado o listo (Ready)",
      "Estado terminado (Terminated)"
    ],
    correctAnswer: 2
  },
  {
    question: "80. ¿Qué es un servicio o daemon en sistemas Unix/Linux?",
    options: [
      "Un programa que solo se ejecuta bajo demanda del usuario cuando lo invoca desde terminal",
      "Un proceso que se ejecuta en segundo plano de forma continua e independiente, sin interfaz gráfica",
      "Un archivo de configuración que controla permisos de acceso",
      "Un módulo de kernel que solo se activa durante la compilación del sistema operativo"
    ],
    correctAnswer: 1
  },
  {
    question: "81. ¿Qué mecanismo de IPC (Inter-Process Communication) conecta la salida estándar de un proceso con la entrada estándar de otro?",
    options: [
      "Socket Unix",
      "Cola de mensajes (Message Queue)",
      "Tubería o pipe (|)",
      "Memoria compartida (Shared Memory)"
    ],
    correctAnswer: 2
  },
  {
    question: "82. ¿Qué describe mejor la situación de deadlock o abrazo mortal en sistemas concurrentes?",
    options: [
      "El bloqueo temporal de un proceso mientras espera a que termine su quantum de tiempo",
      "Un estado donde dos o más procesos quedan indefinidamente bloqueados esperándose mutuamente para liberar recursos",
      "La terminación abrupta de un proceso por exceso de memoria",
      "Una condición donde un hilo se convierte en un demonio involuntariamente"
    ],
    correctAnswer: 1
  },
  {
    question: "83. ¿Cuál fue la causa técnica del problema crítico en la misión Mars Pathfinder que fue solucionado por inversión de prioridades?",
    options: [
      "Un problema de desbordamiento de memoria en el almacenamiento de imágenes satelitales",
      "Resets inesperados causados por inversión de prioridades en la planificación de hilos",
      "Falla en los sensores de temperatura del rover marciano",
      "Pérdida de comunicación entre el rover y la estación base terrestre"
    ],
    correctAnswer: 1
  },
  {
    question: "84. ¿Por qué se prefiere implementar la interfaz Runnable en lugar de extender la clase Thread en Java?",
    options: [
      "Porque Runnable es más rápido en ejecución que Thread",
      "Porque Java permite herencia múltiple de interfaces pero no de clases, preservando la arquitectura de la clase",
      "Porque Thread está deprecated desde Java 5",
      "Porque Runnable utiliza menos memoria que Thread"
    ],
    correctAnswer: 1
  },
  {
    question: "85. ¿Qué tipos de vulnerabilidades puede prevenir una validación rigurosa de tipo, longitud, formato y rango en las entradas?",
    options: [
      "Únicamente ataques de denegación de servicio distribuido",
      "Inyección SQL, desbordamiento de búfer, formateo incorrecto de datos y comportamientos inesperados",
      "Solo vulnerabilidades de cifrado débil",
      "Exclusivamente problemas de concurrencia en hilos"
    ],
    correctAnswer: 1
  },
  {
    question: "86. ¿Cuál fue el factor técnico clave que permitió la brecha de seguridad de Equifax en 2017?",
    options: [
      "Falta de validación de entrada en un componente web conocido sin parche disponible",
      "Validación de certificados SSL correctamente implementada pero con falsos positivos",
      "Sobrecarga de la base de datos debido a consultas concurrentes no controladas",
      "Implementación incorrecta de un protocolo de criptografía asimétrica"
    ],
    correctAnswer: 0
  },
  {
    question: "87. ¿Cuál es la característica distintiva de la criptografía simétrica?",
    options: [
      "Utiliza pares de claves pública y privada generadas matemáticamente",
      "Emplea la misma clave secreta tanto para cifrar como para descifrar los datos",
      "Requiere intercambio de claves a través de un tercero de confianza antes de cada comunicación",
      "Solo puede cifrarse información, pero no se puede descifrar sin intervención humana"
    ],
    correctAnswer: 1
  },
  {
    question: "88. ¿Cuál es el modelo de control de accesos que asigna permisos basándose en roles predefinidos como administrador, usuario estándar o invitado?",
    options: [
      "Control de Accesos Discrecional (DAC)",
      "Control de Accesos Basado en Roles (RBAC)",
      "Control de Accesos Basado en Atributos (ABAC)",
      "Control de Accesos Obligatorio (MAC)"
    ],
    correctAnswer: 1
  },
  {
    question: "89. ¿Qué caracteriza fundamentalmente a la concurrencia en la ejecución de procesos?",
    options: [
      "La ejecución simultánea física de múltiples procesos en un único núcleo de procesador",
      "La intercalación aparente de múltiples procesos que comparten recursos, creando ilusión de paralelismo",
      "La ejecución secuencial garantizada de procesos sin compartir ningún recurso",
      "El bloqueo permanente de un proceso mientras otros esperan recursos"
    ],
    correctAnswer: 1
  },
  {
    question: "90. ¿En qué estado se encuentra un proceso que está listo para ejecutarse pero aguarda su turno en el planificador del sistema operativo?",
    options: [
      "Estado de espera o bloqueado",
      "Estado ejecutable o preparado",
      "Estado terminado",
      "Estado zombie"
    ],
    correctAnswer: 1
  },
  {
    question: "91. ¿Qué es un servicio o daemon en el contexto de sistemas operativos?",
    options: [
      "Un programa interactivo que requiere entrada constante del usuario para funcionar",
      "Un proceso de larga duración que ejecuta en segundo plano sin interfaz de usuario, proporcionando servicios al sistema",
      "Un archivo temporal que se elimina automáticamente al reiniciar",
      "Un componente de hardware que gestiona la memoria física"
    ],
    correctAnswer: 1
  },
  {
    question: "92. ¿Qué mecanismo de comunicación entre procesos (IPC) conecta la salida estándar de un proceso con la entrada estándar de otro?",
    options: [
      "Memoria compartida",
      "Colas de mensajes",
      "Tuberías (pipes)",
      "Sockets de dominio Unix"
    ],
    correctAnswer: 2
  },
  {
    question: "93. ¿Qué situación describe un deadlock en la programación concurrente?",
    options: [
      "Un hilo consume el 100% de CPU ejecutando un bucle infinito",
      "Dos o más hilos quedan bloqueados esperándose mutuamente en una cadena circular de dependencias de recursos",
      "Un hilo se ejecuta más lentamente de lo previsto en el algoritmo",
      "Un proceso padre termina antes que sus procesos hijo"
    ],
    correctAnswer: 1
  },
  {
    question: "94. ¿Cuál fue la solución implementada por la NASA para resolver el problema de priority inversion en la misión Mars Pathfinder?",
    options: [
      "Aumentar la frecuencia de reloj del procesador del rover",
      "Implementar herencia de prioridad para los locks, permitiendo que un hilo de baja prioridad que posee un lock sea promovido a la prioridad del hilo de alta prioridad esperando",
      "Eliminar completamente el uso de múltiples hilos en el software",
      "Utilizar exclusivamente memoria compartida en lugar de locks"
    ],
    correctAnswer: 1
  },
  {
    question: "95. ¿Por qué es preferible implementar la interfaz Runnable en lugar de extender la clase Thread en Java?",
    options: [
      "Runnable ofrece mejor rendimiento en máquinas multicores",
      "Java permite herencia múltiple de clases, así que extender Thread da más libertad",
      "Runnable permite que la clase herede de otra clase además, ya que Java solo soporta herencia simple",
      "Thread es una interfaz deprecada desde Java 8"
    ],
    correctAnswer: 2
  },
  {
    question: "96. En Java, cuando un hilo ejecuta Thread.sleep(5000), ¿qué ocurre con dicho hilo durante ese período?",
    options: [
      "Sigue ejecutándose pero reduce su prioridad temporalmente",
      "Entra en estado bloqueado, cede la CPU y mantiene sus locks adquiridos",
      "Finaliza su ejecución y debe reiniciarse manualmente tras el tiempo indicado",
      "Pasa a estado preparado y compite de nuevo por la CPU de inmediato"
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
              <span className="text-foreground">Sistemas de Gestion Empresarial</span>
            </h1>
            <h2 className="text-xl text-muted-foreground">Test Extra II</h2>
            <p className="text-muted-foreground text-lg">ERP, CRM y sistemas empresariales</p>

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
