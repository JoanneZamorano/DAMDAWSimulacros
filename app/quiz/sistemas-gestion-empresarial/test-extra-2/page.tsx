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
    question: "32. ¿Qué es la arquitectura SOA y cómo se aplica en sistemas ERP modernos?",
    options: ["Una arquitectura que descompone el sistema en servicios independientes y reutilizables que se comunican mediante interfaces estándar", "Un modelo monolítico donde todos los módulos comparten el mismo código base sin separación", "Un sistema que solo permite comunicación local entre componentes sin acceso remoto", "Una arquitectura que elimina la necesidad de bases de datos centralizadas"],
    correctAnswer: 0,
  },
  {
    question: "33. ¿Qué permite la interoperabilidad en un sistema ERP respecto a sistemas externos?",
    options: ["Integración con aplicaciones terceras mediante APIs, webservices y estándares de intercambio de datos", "Funcionar completamente aislado sin necesidad de comunicación externa", "Reemplazar completamente los sistemas externos sin necesidad de coexistencia", "Eliminar la necesidad de formatos estándar de datos"],
    correctAnswer: 0,
  },
  {
    question: "34. ¿Cuál es la principal ventaja de utilizar una base de datos centralizada en un ERP?",
    options: ["Garantiza que toda la información empresarial se almacena en un único lugar, eliminando redundancia y asegurando consistencia de datos.", "Aumenta la probabilidad de pérdida de datos durante operaciones normales.", "Obliga a cada departamento a mantener su propia base de datos independiente.", "Reduce la seguridad de los datos almacenados."],
    correctAnswer: 0,
  },
  {
    question: "35. ¿Qué es el ORM (Object-Relational Mapping) en el contexto de Odoo?",
    options: ["Una herramienta que mapea los modelos de datos del sistema a las tablas de la base de datos, permitiendo operaciones sin escribir SQL.", "Un lenguaje de programación específico para Odoo.", "Un protocolo de comunicación entre cliente y servidor.", "Un sistema de copias de seguridad automáticas."],
    correctAnswer: 0,
  },
  {
    question: "36. ¿Qué tipo de campo en un modelo de Odoo se utiliza para conectar dos modelos entre sí?",
    options: ["Los campos relacionales (Many2one, One2many, Many2many) que crean referencias entre modelos.", "Los campos de texto que contienen nombres de otras tablas.", "Los campos booleanos que almacenan referencias binarias.", "Los campos numéricos que almacenan identificadores de tablas."],
    correctAnswer: 0,
  },
  {
    question: "37. ¿Cuál es el objetivo principal de un sistema CRM dentro de una organización?",
    options: ["Gestionar la relación con los clientes y optimizar el ciclo de vida del cliente desde la prospección hasta la retención", "Reemplazar completamente el departamento de ventas con automatización total", "Eliminar la necesidad de comunicación directa entre empresa y cliente", "Reducir exclusivamente el coste de envío de facturas electrónicas"],
    correctAnswer: 0,
  },
  {
    question: "38. ¿Qué característica define principalmente a los ERP modernos en comparación con los ERP heredados?",
    options: ["La arquitectura modular basada en servicios (SOA), la escalabilidad en la nube y la capacidad de integración con aplicaciones terceras mediante APIs", "El uso exclusivo de interfaces de línea de comandos sin gráficos", "La obligatoriedad de instalar en servidores físicos sin opciones de virtualización", "La incompatibilidad total con sistemas operativos Linux"],
    correctAnswer: 0,
  },
  {
    question: "39. ¿Qué ventaja operativa proporciona la modularidad en la arquitectura de un ERP?",
    options: ["Permite implementar solo los módulos necesarios para el negocio, reduciendo complejidad, tiempo de implantación y coste inicial", "Obliga a implementar todos los módulos simultáneamente en una única fase", "Elimina completamente la necesidad de formación del personal en cualquier módulo", "Impide la comunicación de datos entre diferentes áreas de la organización"],
    correctAnswer: 0,
  },
  {
    question: "40. ¿Cuál es la función principal del cliente en un ERP como Odoo?",
    options: ["Presentar la interfaz de usuario y enviar solicitudes al servidor, mostrando las respuestas de forma visual", "Almacenar todos los datos de la empresa en el equipo local del usuario", "Ejecutar toda la lógica de negocio sin necesidad de conexión al servidor", "Actuar como servidor de base de datos independiente para cada usuario"],
    correctAnswer: 0,
  },
  {
    question: "41. En Odoo, ¿qué componente es responsable de ejecutar la lógica de negocio y las reglas aplicables?",
    options: ["El servidor Odoo (backend) que procesa las solicitudes y ejecuta la lógica mediante modelos y controladores", "El navegador del cliente que ejecuta JavaScript para procesar toda la lógica", "La base de datos PostgreSQL que implementa automáticamente las reglas de negocio", "El módulo de interfaz que controla cómo se presentan los datos"],
    correctAnswer: 0,
  },
  {
    question: "42. ¿Cuál es uno de los riesgos más importantes que debe gestionarse durante la migración de datos en un ERP?",
    options: ["La pérdida o corrupción de datos históricos debido a errores en la transformación, incompatibilidades de formato o procesos de validación insuficientes", "Que el hardware del servidor sea demasiado potente para procesar los datos", "Que todos los usuarios accedan simultáneamente sin causar problemas", "Que la base de datos tenga demasiada capacidad de almacenamiento"],
    correctAnswer: 0,
  },
  {
    question: "43. Un CRM empresarial tiene como objetivo principal optimizar la relación con clientes. ¿Cuál de las siguientes actividades es responsabilidad directa de un sistema CRM?",
    options: ["Gestionar la producción y el inventario de almacenes", "Registrar interacciones, preferencias y historial de cada cliente para personalizar el servicio", "Contabilizar automáticamente todos los gastos de la empresa", "Controlar los permisos y plantillas de empleados en nómina"],
    correctAnswer: 1,
  },
  {
    question: "44. Odoo es una plataforma ERP de código abierto ampliamente utilizada ¿Cuál es la base de datos que utiliza Odoo de forma nativa y recomendada?",
    options: ["Microsoft SQL Server", "Oracle Database", "PostgreSQL", "MongoDB"],
    correctAnswer: 2,
  },
  {
    question: "45. La arquitectura SOA (Arquitectura Orientada a Servicios) es un patrón arquitectónico importante en sistemas empresariales modernos. ¿Cuál es el principio fundamental de una arquitectura SOA?",
    options: ["Centralizar toda la lógica en un único servidor monolítico sin separación de responsabilidades", "Dividir la funcionalidad empresarial en servicios independientes, reutilizables e interconectados a través de interfaces estándar", "Eliminar toda comunicación entre módulos para aumentar la seguridad", "Usar exclusivamente bases de datos no relacionales para mejor rendimiento"],
    correctAnswer: 1,
  },
  {
    question: "46. La implantación de un ERP es un proceso estructurado que requiere múltiples fases. ¿Cuál es la fase inicial más crítica en una implantación de ERP?",
    options: ["Instalar directamente el software sin preparación previa", "Planificación y análisis: definir objetivos, alcance, recursos y diagnóstico de la situación actual", "Importar inmediatamente todos los datos históricos", "Activar el sistema en producción sin pruebas previas"],
    correctAnswer: 1,
  },
  {
    question: "47. El análisis funcional es una etapa clave en la implantación de un ERP ¿Qué se realiza específicamente durante el análisis funcional?",
    options: ["Se instala el servidor de bases de datos sin necesidad de estudios previos", "Se documentan los procesos empresariales actuales, se identifican requisitos funcionales y se diseña cómo el ERP cubrirá esas necesidades", "Se borran todos los datos antiguos para limpiar el sistema", "Se capacita a los usuarios finales en utilización del software"],
    correctAnswer: 1,
  },
  {
    question: "48. Parametrizar un ERP es una actividad fundamental durante su implantación ¿Qué significa parametrizar un sistema ERP?",
    options: ["Escribir código personalizado para modificar el núcleo del software", "Configurar el ERP ajustando opciones, valores, reglas de negocio y flujos de trabajo sin programación, adaptándolo a los procesos específicos de la empresa", "Eliminar módulos innecesarios del sistema", "Cambiar la base de datos por un sistema completamente diferente"],
    correctAnswer: 1,
  },
  {
    question: "49. Durante la implantación de un ERP, la migración de datos es una fase crítica. ¿Cuál es el propósito principal de la fase de migración de datos?",
    options: ["Eliminar todos los datos antiguos sin necesidad de conservarlos", "Transferir datos históricos de sistemas antiguos al ERP nuevo, validando integridad y coherencia de la información", "Crear contraseñas nuevas para todos los usuarios del sistema", "Desconectar completamente los sistemas antiguos"],
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
