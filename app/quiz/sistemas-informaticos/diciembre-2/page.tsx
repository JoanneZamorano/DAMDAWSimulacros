"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, ChevronLeft } from "lucide-react"
import Link from "next/link"

const questions = [
  {
    question: "¿Qué elemento se considera parte del hardware físico de un ordenador?",
    options: [
      "Sistema operativo",
      "Procesador",
      "Aplicación web",
      "Editor de texto"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es una función propia del software de sistema?",
    options: [
      "Crear documentos",
      "Gestionar el hardware y coordinar recursos",
      "Navegar por internet",
      "Diseñar interfaces"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué es un sistema informático?",
    options: [
      "Un conjunto de hardware, software y personas que procesan información.",
      "Un conjunto de programas de ofimática.",
      "Un tipo de red de ordenadores.",
      "Un sistema operativo moderno."
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál de los siguientes es un dispositivo de entrada?",
    options: [
      "Monitor",
      "Impresora",
      "Altavoz",
      "Teclado"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué componente realiza operaciones en un ordenador?",
    options: [
      "BIOS",
      "Memoria ROM",
      "ALU",
      "Tarjeta de red"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál NO pertenece al hardware interno?",
    options: [
      "Tarjeta de sonido",
      "Disco duro",
      "Fuente de alimentación",
      "Ratón"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué parte del sistema operativo se encarga de comunicar el hardware con software?",
    options: [
      "El gestor de archivos",
      "El núcleo o kernel",
      "El intérprete de comandos",
      "La interfaz gráfica"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué característica tiene un sistema operativo multitarea?",
    options: [
      "Un único usuario",
      "Acceso solo en modo texto",
      "No usa memoria RAM",
      "Ejecuta varias tareas a la vez"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué comando en Linux sirve para eliminar archivos?",
    options: [
      "del",
      "clear",
      "rm",
      "wipe"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es un sistema operativo propietario?",
    options: [
      "Ubuntu",
      "FreeBSD",
      "Fedora",
      "Windows"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué diferencia al hardware del software?",
    options: [
      "El software son cables y componentes",
      "El hardware es físico y el software son programas",
      "Son equivalentes",
      "El hardware son instrucciones de la CPU"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué beneficio principal aporta la virtualización?",
    options: [
      "Incrementa la velocidad de la CPU.",
      "Reduce el consumo eléctrico.",
      "Permite usar varios sistemas operativos en el mismo equipo.",
      "Sustituye la memoria RAM."
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué significa virtualizar un sistema?",
    options: [
      "Crear copias de seguridad",
      "Simular hardware mediante software",
      "Instalar herramientas gráficas",
      "Dividir un disco duro"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué memoria se usa temporalmente mientras el equipo está encendido?",
    options: [
      "ROM",
      "Memoria óptica",
      "RAM",
      "EEPROM"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué herramienta permite crear máquinas virtuales?",
    options: [
      "GitHub",
      "Postman",
      "VirtualBox",
      "Blender"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué comando lista archivos en Linux?",
    options: [
      "dir",
      "ls",
      "open",
      "files"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué usuario tiene privilegios totales en Linux?",
    options: [
      "admin",
      "superuser",
      "master",
      "root"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué archivo almacena datos de usuarios del sistema?",
    options: [
      "/etc/home",
      "/etc/passwd",
      "/etc/shadowconfig",
      "/usr/bin"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué comando muestra la configuración IP en Windows?",
    options: [
      "ls",
      "configsus",
      "ipconfig",
      "netview"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué componente almacena datos de forma permanente?",
    options: [
      "Memoria RAM",
      "Caché L1",
      "Registros de la CPU",
      "Disco duro o SSD"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué protocolo se usa para transferir archivos entre cliente y servidor?",
    options: [
      "SMTP",
      "FTP",
      "DNS",
      "SSHD"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué tipo de licencia permite usar, modificar y redistribuir software?",
    options: [
      "Propietaria",
      "Libre",
      "Trial",
      "OEM"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cómo se gestiona la creación de usuarios en Windows?",
    options: [
      "Mediante el registro de Windows",
      "En la configuración de cuentas",
      "Desde la consola BIOS",
      "En el directorio C: Program Files"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué dirección IP pertenece a una red privada?",
    options: [
      "172.15.5.1",
      "10.0.0.25",
      "200.10.5.2",
      "145.0.1.1"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué función tiene un firewall?",
    options: [
      "Aumentar la velocidad de la red",
      "Mejorar el rendimiento de la CPU",
      "Filtrar tráfico según reglas de seguridad",
      "Ampliar la memoria"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué comando muestra los procesos activos en Linux?",
    options: [
      "run",
      "tasklist",
      "ps",
      "jobsopen"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué comando se usa en Windows para listar archivos?",
    options: [
      "ls",
      "show",
      "dir",
      "open"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué comando se usa para ver los contenedores activos en Docker?",
    options: [
      "docker start",
      "docker list",
      "docker ps",
      "docker show"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué diferencia principal existe entre un contenedor y una máquina virtual?",
    options: [
      "El contenedor necesita más recursos.",
      "El contenedor comparte el kernel del sistema anfitrión.",
      "La máquina virtual no requiere sistema operativo.",
      "No hay diferencias relevantes."
    ],
    correctAnswer: 1
  },
];

export default function KahootBBDD0212Part1() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(Array(questions.length).fill(false))
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [incorrectCount, setIncorrectCount] = useState(0)

  const handleAnswer = (answerIndex: number) => {
    if (answeredQuestions[currentQuestion]) return

    setSelectedAnswer(answerIndex)

    const newAnswered = [...answeredQuestions]
    newAnswered[currentQuestion] = true
    setAnsweredQuestions(newAnswered)

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    } else {
      setIncorrectCount(incorrectCount + 1)
    }
  }

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(null)
    }
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setIncorrectCount(0)
    setAnsweredQuestions(Array(questions.length).fill(false))
  }

  if (showResult) {
    const correctedScore = score - incorrectCount / 3
    const maxScore = questions.length
    const percentage = ((correctedScore / maxScore) * 100).toFixed(1)

    return (
      <div className="min-h-screen bg-background p-4 md:p-8">
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-card border-border">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Resultados del Simulacro</h2>
              <div className="text-6xl font-bold text-blue-600">{percentage}%</div>
              <p className="text-xl text-muted-foreground">
                Has acertado {score} de {questions.length} preguntas
              </p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  Aciertos: <span className="text-green-500 font-semibold">{score}</span> | Fallos:{" "}
                  <span className="text-red-500 font-semibold">{incorrectCount}</span>
                </p>
                <p className="text-xs italic">
                  Puntuación con fórmula de corrección: {correctedScore.toFixed(2)} / {maxScore}
                </p>
                <p className="text-xs text-muted-foreground/70">(Fórmula: Aciertos - Fallos/3)</p>
              </div>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button onClick={resetQuiz} size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Reintentar
                </Button>
                <Link href="/">
                  <Button variant="outline" size="lg">
                    Volver al inicio
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const isAnswered = answeredQuestions[currentQuestion]

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">
              Pregunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className="text-sm font-medium text-blue-600">
              {answeredQuestions.filter((a) => a).length} respondidas
            </span>
          </div>
        </div>

        <Card className="p-6 md:p-8 bg-card border-border">
          <div className="space-y-6">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-xl md:text-2xl font-semibold text-foreground flex-1">{question.question}</h2>
              <div className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                {score}/{questions.length}
              </div>
            </div>

            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index
                const isCorrect = index === question.correctAnswer
                const showCorrect = isAnswered && isCorrect
                const showIncorrect = isAnswered && isSelected && !isCorrect

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={isAnswered}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      showCorrect
                        ? "border-green-500 bg-green-500/10"
                        : showIncorrect
                          ? "border-red-500 bg-red-500/10"
                          : isSelected
                            ? "border-blue-600 bg-blue-600/10"
                            : "border-border hover:border-blue-600/50 bg-card"
                    } ${isAnswered ? "cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-foreground">{option}</span>
                      {showCorrect && <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 ml-2" />}
                      {showIncorrect && <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 ml-2" />}
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                onClick={previousQuestion}
                disabled={currentQuestion === 0}
                variant="outline"
                className="flex-1 bg-transparent"
              >
                Anterior
              </Button>
              <Button onClick={nextQuestion} disabled={!isAnswered} className="flex-1 bg-blue-600 hover:bg-blue-700">
                {currentQuestion === questions.length - 1 ? "Ver Resultados" : "Siguiente"}
              </Button>
            </div>
          </div>
        </Card>

        <div className="w-full bg-muted rounded-full h-2 mt-4">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  )
}
