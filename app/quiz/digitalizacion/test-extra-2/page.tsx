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
    question: "45. ¿Cuál es la función específica de una plataforma de desarrollo interno como Gravity en una entidad financiera?",
    options: [
      "Sustituir completamente los sistemas operativos de todas las máquinas",
      "Facilitar la creación de aplicaciones y servicios digitales propios sin dependencia total de proveedores externos",
      "Eliminar la necesidad de ciberseguridad en la organización",
      "Reemplazar exclusivamente los sistemas de contabilidad manual"
    ],
    correctAnswer: 1,
  },
  {
    question: "46. ¿Qué tecnología de IA permite que un chatbot empresarial mantenga conversaciones coherentes considerando el contexto histórico de la interacción?",
    options: [
      "Un árbol de decisión estático programado manualmente",
      "Procesamiento del Lenguaje Natural (NLP) con redes neuronales recurrentes o Transformers",
      "Una base de datos SQL simple con consultas predeterminadas",
      "Computación cuántica combinada con encriptación"
    ],
    correctAnswer: 1,
  },
  {
    question: "47. ¿Qué modelo de servicio en la nube es más apropiado para una empresa que requiere máxima flexibilidad para instalar sus propios sistemas operativos, bases de datos y aplicaciones?",
    options: [
      "Software as a Service (SaaS)",
      "Infrastructure as a Service (IaaS)",
      "Platform as a Service (PaaS)",
      "Database as a Service (DBaaS)"
    ],
    correctAnswer: 1,
  },
  {
    question: "48. ¿Cuál de las siguientes tácticas es la más efectiva para mitigar la principal fuente de brechas de seguridad en entornos cloud, según informes de ciberseguridad?",
    options: [
      "Utilizar exclusivamente encriptación simétrica en todas las comunicaciones",
      "Implementar autenticación multifactor, gestión de identidades y control de accesos estrictos",
      "Deshabilitar todos los puertos de red excepto el puerto 443",
      "Usar únicamente proveedores de cloud locales sin presencia internacional"
    ],
    correctAnswer: 1,
  },
  {
    question: "49. En términos de ciberseguridad, ¿a qué se refiere la tríada CIA?",
    options: [
      "Central Intelligence Agency; una agencia de seguridad informática",
      "Confidentiality (Confidencialidad), Integrity (Integridad), Availability (Disponibilidad); los pilares de la seguridad de la información",
      "Cloud Infrastructure Assessment; un método de auditoría de seguridad",
      "Cryptographic Integration Authentication; un protocolo de cifrado"
    ],
    correctAnswer: 1,
  },
  {
    question: "50. ¿Cuál es la relación jerárquica correcta entre Machine Learning y Deep Learning?",
    options: [
      "Deep Learning es independiente de Machine Learning; son disciplinas paralelas sin conexión",
      "Machine Learning es una rama de inteligencia artificial; Deep Learning es un subcampo especializado de Machine Learning basado en redes neuronales profundas",
      "Deep Learning es anterior a Machine Learning y constituye el fundamento teórico de todos los sistemas ML",
      "Machine Learning y Deep Learning son sinónimos; se utilizan indistintamente"
    ],
    correctAnswer: 1,
  },
  {
    question: "51. ¿Cuál es la aplicación principal de la Realidad Aumentada en el caso de DHL Vision Picking?",
    options: [
      "Proyectar entretenimiento en la pantalla del operario durante descansos",
      "Guiar al operario mostrando rutas óptimas, flechas direccionales y alertas sobre artículos específicos a recoger",
      "Reemplazar completamente la visión natural del operario con datos virtuales",
      "Registrar video de vigilancia del almacén para control administrativo"
    ],
    correctAnswer: 1,
  },
  {
    question: "52. En un modelo de nube privada, ¿quién asume la responsabilidad de mantenimiento, actualizaciones de seguridad y gestión de la infraestructura?",
    options: [
      "Exclusivamente el proveedor de la nube",
      "Solo el cliente, sin apoyo técnico externo",
      "El cliente o su equipo interno, ya que es infraestructura propia",
      "Una tercera parte reguladora del gobierno"
    ],
    correctAnswer: 2,
  },
  {
    question: "53. ¿Por qué el caso del sistema de reclutamiento de Amazon representa un fracaso en la aplicación de IA?",
    options: [
      "Porque utilizaba excesiva automatización en el análisis de CV",
      "Porque el algoritmo reproducía sesgos históricos del conjunto de entrenamiento, discriminando candidatas mujeres",
      "Porque era demasiado caro de implementar",
      "Porque se negó a utilizar Machine Learning en la selección"
    ],
    correctAnswer: 1,
  },
  {
    question: "54. ¿Cuál es la diferencia fundamental entre Industria 4.0 e Industria 5.0?",
    options: [
      "La Industria 5.0 incorpora el factor humano como elemento central y propicia la sostenibilidad y la resiliencia, además de la eficiencia",
      "La Industria 5.0 utiliza exclusivamente inteligencia artificial sin participación de operarios",
      "La Industria 5.0 reemplaza completamente la nube con computación edge",
      "La Industria 5.0 abandona los sistemas IoT en favor de comunicación inalámbrica 5G"
    ],
    correctAnswer: 0,
  },
  {
    question: "55. En una arquitectura de sistemas de control industrial, ¿cuál es la función principal de un sistema SCADA?",
    options: [
      "Realizar cálculos matemáticos complejos para optimización de procesos",
      "Supervisar, controlar y adquirir datos de procesos industriales en tiempo real",
      "Almacenar exclusivamente información histórica en bases de datos centralizadas",
      "Gestionar la seguridad física de instalaciones mediante cámaras de vigilancia"
    ],
    correctAnswer: 1,
  },
  {
    question: "56. ¿Cuál de los siguientes es el pilar tecnológico que permite la latencia ultrabaja y la alta velocidad de transferencia de datos esencial para IoT y Gemelos Digitales?",
    options: [
      "Tecnología 4G LTE con procesamiento cloud tradicional",
      "Tecnología 5G con capacidad de baja latencia (< 10 ms) y ancho de banda aumentado",
      "Conexiones Ethernet cableadas exclusivamente en redes locales cerradas",
      "Bluetooth de largo alcance para comunicación entre dispositivos IoT remotos"
    ],
    correctAnswer: 1,
  },
  {
    question: "57. ¿Qué es un Gemelo Digital en el contexto de Industria 4.0?",
    options: [
      "Un segundo equipo físico idéntico que duplica exactamente las funciones del primero",
      "Una réplica virtual y dinámica de un proceso, máquina o sistema físico que simula su comportamiento en tiempo real",
      "Un software de contabilidad que duplica registros financieros de operaciones",
      "Un protocolo de comunicación que crea conexiones redundantes entre servidores"
    ],
    correctAnswer: 1,
  },
  {
    question: "58. ¿Cuál de las siguientes afirmaciones sobre Blockchain es técnicamente correcta?",
    options: [
      "Blockchain es más rápido que bases de datos SQL porque no registra transacciones",
      "Blockchain garantiza trazabilidad e inmutabilidad mediante encriptación criptográfica y consenso distribuido",
      "Blockchain reemplaza completamente a la computación en la nube en entornos empresariales",
      "Blockchain solo funciona con criptomonedas y no tiene aplicaciones en procesos productivos"
    ],
    correctAnswer: 1,
  },
  {
    question: "59. ¿Cuál es la característica principal que diferencia a la computación en nube privada de la pública en términos de responsabilidad y seguridad?",
    options: [
      "La nube privada es siempre más rápida porque está geográficamente más cercana",
      "La nube privada es infraestructura dedicada controlada por la empresa, mientras que la pública comparte recursos con otros usuarios",
      "La nube pública no permite ningún tipo de cifrado de datos sensibles",
      "La nube privada no requiere mantenimiento ni actualizaciones de seguridad"
    ],
    correctAnswer: 1,
  },
  {
    question: "60. ¿Qué establece el modelo de responsabilidad compartida en la computación en la nube pública?",
    options: [
      "El proveedor es responsable únicamente de mantener los servidores físicos; el cliente de todo lo demás",
      "El cliente es responsable exclusivamente de los datos; el proveedor de infraestructura, SO y seguridad física",
      "La responsabilidad depende del modelo de servicio (IaaS, PaaS, SaaS) y se distribuye entre proveedor y cliente de forma diferente",
      "Todas las responsabilidades de seguridad recaen en el cliente, sin intervención del proveedor"
    ],
    correctAnswer: 2,
  },
  {
    question: "61. ¿Cuál es el principal origen de las brechas de seguridad en infraestructuras cloud según informes de ciberseguridad?",
    options: [
      "Fallos en hardware de almacenamiento que el proveedor no puede controlar",
      "Configuraciones incorrectas de acceso y permisos, así como credenciales débiles del cliente",
      "Ataques DDoS que afectan únicamente a la nube pública y no a la privada",
      "Virus residentes en el código abierto de los sistemas operativos"
    ],
    correctAnswer: 1,
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

export default function DigitalizacionSimulacro1Quiz() {
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
              <span className="text-foreground">Digitalizacion</span>
            </h1>
            <h2 className="text-xl text-muted-foreground">Test Extra II</h2>
            <p className="text-muted-foreground text-lg">Transformacion digital y tecnologias</p>

            <div className="space-y-4 text-left py-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-violet-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">{questions.length} Preguntas</p>
                  <p className="text-sm text-muted-foreground">Todos los conceptos clave</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-violet-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Preguntas Aleatorizadas</p>
                  <p className="text-sm text-muted-foreground">Cada sesion es diferente</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-violet-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Retroalimentacion Inmediata</p>
                  <p className="text-sm text-muted-foreground">Aprende mientras practicas</p>
                </div>
              </div>
            </div>

            <Button
              onClick={startQuiz}
              size="lg"
              className="w-full bg-violet-500 hover:bg-violet-600 text-white font-semibold"
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
              <div className="text-6xl font-bold text-violet-500 mb-2">{Math.max(0, percentage)}%</div>
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
              {percentage >= 90 && <p className="text-lg text-foreground">Excelente. Dominas Digitalizacion.</p>}
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
                className="w-full bg-violet-500 hover:bg-violet-600 text-white font-semibold"
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
          <span className="text-violet-500">{answeredCount} respondidas</span>
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
                      ${!showFeedback && "hover:border-violet-500 hover:bg-accent cursor-pointer"}
                      ${showFeedback && "cursor-not-allowed"}
                      ${isSelected && !showFeedback && "border-violet-500 bg-accent"}
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
                className="flex-1 bg-violet-500 hover:bg-violet-600 text-white"
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
            className="h-full bg-violet-500 transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
