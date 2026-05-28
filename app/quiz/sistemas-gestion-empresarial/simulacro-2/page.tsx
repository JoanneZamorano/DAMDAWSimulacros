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
    "question": "¿Cuál es el principal objetivo de un ERP?",
    "options": [
      "Crear videojuegos",
      "Gestionar redes sociales",
      "Diseñar páginas web",
      "Integrar y gestionar procesos empresariales"
    ],
    "correctAnswer": 3
  },
  {
    "question": "¿Qué significa CRM?",
    "options": [
      "Computer Relationship Module",
      "Central Resource Manager",
      "Customer Resource Machine",
      "Customer Relationship Management"
    ],
    "correctAnswer": 3
  },
  {
    "question": "¿Qué ventaja ofrece la arquitectura SOA en Odoo?",
    "options": [
      "Eliminar bases de datos",
      "Crear videojuegos",
      "Flexibilidad modular",
      "Sustituir APIs"
    ],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué base de datos utiliza Odoo normalmente?",
    "options": [
      "MySQL",
      "PostgreSQL",
      "Oracle",
      "MongoDB"
    ],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué permite la modularidad en Odoo?",
    "options": [
      "Instalar solo funciones necesarias",
      "Eliminar usuarios",
      "Sustituir internet",
      "Evitar actualizaciones"
    ],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué módulo se centra en la relación con clientes?",
    "options": [
      "Inventario",
      "RRHH",
      "CRM",
      "Contabilidad"
    ],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué ocurre al validar una factura en Odoo?",
    "options": [
      "Se elimina",
      "Se genera un asiento automático",
      "Se reinicia el servidor",
      "Se crea un usuario"
    ],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué herramienta permite probar APIs de Odoo?",
    "options": [
      "Photoshop",
      "Blender",
      "Postman",
      "Canva"
    ],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué significa conciliación bancaria?",
    "options": [
      "Diseñar balances",
      "Comparar movimientos bancarios y registros",
      "Crear módulos",
      "Gestionar empleados"
    ],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué vista visual destaca en el CRM de Odoo?",
    "options": [
      "Kanban",
      "Árbol binario",
      "Consola",
      "Terminal"
    ],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué fase del CRM ocurre antes de generar un pedido?",
    "options": [
      "Facturación",
      "Calificación de oportunidades",
      "Conciliación bancaria",
      "Cierre contable"
    ],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué filosofía recomienda Odoo antes de programar?",
    "options": [
      "Programar todo",
      "Configurar antes que programar",
      "Usar solo XML",
      "Eliminar módulos"
    ],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué archivo define dependencias y metadatos de un módulo Odoo?",
    "options": [
      "app.js",
      "config.xml",
      "manifest.py",
      "index.php"
    ],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué lenguaje se usa principalmente para la lógica de negocio en Odoo?",
    "options": [
      "Java",
      "Python",
      "C#",
      "Swift"
    ],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué contiene normalmente la carpeta views/ en un módulo Odoo?",
    "options": [
      "Bases de datos",
      "Archivos XML de interfaz",
      "Archivos APK",
      "Drivers"
    ],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué ventaja ofrece integrar Ventas y Contabilidad?",
    "options": [
      "Más duplicidades",
      "Coherencia entre áreas comerciales y financieras",
      "Menos automatización",
      "Eliminar balances"
    ],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué representa el frontend en Odoo?",
    "options": [
      "La interfaz visual para el usuario",
      "El servidor PostgreSQL",
      "La lógica Python",
      "El sistema operativo"
    ],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué problema suele evitar una buena migración de datos?",
    "options": [
      "Errores e incoherencias",
      "Diseño web",
      "Problemas gráficos",
      "Eliminación de APIs"
    ],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué ventaja aporta la automatización contable?",
    "options": [
      "Más trabajo manual",
      "Reducción de errores humanos",
      "Menos integración",
      "Más duplicidades"
    ],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué herramienta permite crear personalizaciones rápidas sin programar?",
    "options": [
      "Odoo Studio",
      "VS Code",
      "GitHub",
      "pgAdmin"
    ],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué fase del ciclo de implantación analiza procesos actuales?",
    "options": [
      "Formación",
      "Auditoría inicial",
      "Go-Live",
      "Facturación"
    ],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué objetivo tiene el análisis funcional?",
    "options": [
      "Diseñar videojuegos",
      "Traducir procesos de negocio al ERP",
      "Sustituir PostgreSQL",
      "Eliminar APIs"
    ],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué se recomienda hacer antes del Go-Live?",
    "options": [
      "Eliminar usuarios",
      "Realizar pruebas piloto",
      "Desactivar módulos",
      "Reiniciar servidores externos"
    ],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué hace el módulo CRM además de registrar clientes?",
    "options": [
      "Gestiona oportunidades y seguimiento comercial",
      "Diseña hardware",
      "Sustituir contabilidad",
      "Gestiona videojuegos"
    ],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué herramienta visual sirve para documentar procesos?",
    "options": [
      "Miro",
      "Spotify",
      "VLC",
      "Steam"
    ],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué ventaja tiene una arquitectura modular?",
    "options": [
      "Escalabilidad y adaptación",
      "Menos integración",
      "Más redundancia",
      "Menos flexibilidad"
    ],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué aplicación sincroniza movimientos bancarios en Odoo?",
    "options": [
      "Odoo Dashboard",
      "Bank Synchronization App",
      "Odoo Shell",
      "Pivot Tables"
    ],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué sucede cuando un presupuesto es confirmado en CRM?",
    "options": [
      "Se convierte en pedido de venta",
      "Se elimina automáticamente",
      "Se reinicia el sistema",
      "Se genera un empleado"
    ],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué característica tienen los módulos en una arquitectura SOA?",
    "options": [
      "Son totalmente aislados",
      "Son independientes pero se comunican",
      "Solo funcionan offline",
      "No usan APIs"
    ],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué lenguaje define formularios y vistas en Odoo?",
    "options": [
      "XML",
      "Kotlin",
      "SQL",
      "Bash"
    ],
    "correctAnswer": 0
  }
]

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
            <h2 className="text-xl text-muted-foreground">Simulacro II</h2>
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
