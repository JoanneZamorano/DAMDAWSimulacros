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
    "question": "¿Qué ventaja aporta SOA en Odoo?",
    "options": [
      "Escalabilidad modular",
      "Código monolitico único",
      "Dependencia entre modulos",
      "Datos aislados"
    ],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué módulo actúa como núcleo lógico en Odoo?",
    "options": [
      "Cliente web",
      "PostgreSQL",
      "Servidor Odoo",
      "Power BI"
    ],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué API usa Odoo para integrar módulos?",
    "options": [
      "SOAP-RMI",
      "XML-RPC y JSON-RPC",
      "REST-SQL",
      "Git Hooks"
    ],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué permite añadir módulos sin rediseñar el sistema?",
    "options": [
      "Escalabilidad",
      "Caché local",
      "Serializacion",
      "Virtualización"
    ],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué componente almacena datos centralizados?",
    "options": [
      "Frontend React",
      "Cliente movil",
      "Servidor Apache",
      "PostgreSQL"
    ],
    "correctAnswer": 3
  },
  {
    "question": "¿Qué representa el frontend de Odoo?",
    "options": [
      "Motor SQL",
      "Interfaz visual",
      "Plan contable",
      "Sistema GPS"
    ],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué ventaja evita duplicar datos en Odoo?",
    "options": [
      "Interoperabilidad",
      "Encapsulación",
      "Integración modular",
      "Compresión binaria"
    ],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué debe hacerse antes de instalar un ERP modular?",
    "options": [
      "Migrar facturas",
      "Configurar Docker",
      "Entender la estructura",
      "Crear APIs externas"
    ],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué herramienta prueba APIs de Odoo?",
    "options": [
      "Instagram",
      "Postman",
      "Odoo Shell",
      "Canva"
    ],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué significa modularidad en Odoo?",
    "options": [
      "Separar servicios independientes",
      "Eliminar bases SQL",
      "Usar varios ERPs",
      "Crear copias locales"
    ],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué ventaja tiene actualizar módulos por fases?",
    "options": [
      "Reduce estabilidad",
      "Evita APIs",
      "Garantiza estabilidad",
      "Elimina integraciones"
    ],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué ocurre al validar una factura en Odoo?",
    "options": [
      "Se borra el pedido",
      "Se crea un asiento",
      "Se reinicia PostgreSQL",
      "Se elimina el IVA"
    ],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué permite la conciliación bancaria?",
    "options": [
      "Borrar balances",
      "Crear módulos",
      "Relacionar movimientos y facturas",
      "Generar menús XML"
    ],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué informe genera Odoo en tiempo real?",
    "options": [
      "Balances financieros",
      "Código Python",
      "Backups Docker",
      "Diagramas UML"
    ],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué módulo sincroniza movimientos bancarios?",
    "options": [
      "Pivot Tables",
      "Bank Synchronization App",
      "Odoo Studio",
      "VS Code"
    ],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué integración garantiza coherencia financiera?",
    "options": [
      "Ventas y Compras",
      "Docker y GitHub",
      "HTML y CSS",
      "Power BI y GPS"
    ],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué minimiza la automatización contable?",
    "options": [
      "Errores humanos",
      "Dependencias XML",
      "Consultas ORM",
      "Campos Many2one"
    ],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué vista usa Odoo CRM para oportunidades?",
    "options": [
      "Árbol AVL",
      "Kanban",
      "Canvas SVG",
      "Bash Shell"
    ],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué convierte un presupuesto en pedido?",
    "options": [
      "Exportarlo a Excel",
      "Eliminar el lead",
      "Confirmarlo",
      "Crear una API"
    ],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué registra el CRM desde el primer contacto?",
    "options": [
      "Solo pagos",
      "Trazabilidad comercial",
      "Código fuente",
      "Claves SSH"
    ],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué automatización ayuda al seguimiento comercial?",
    "options": [
      "Correos y tareas",
      "Copias SQL",
      "Bloqueo XML",
      "Compresión ZIP"
    ],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué fase sigue a captar leads?",
    "options": [
      "Facturación",
      "Cierre fiscal",
      "Calificación de oportunidades",
      "Migración SQL"
    ],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué ofrece integrar CRM y Ventas?",
    "options": [
      "Menos módulos",
      "Datos desconectados",
      "Interfaz monolítica",
      "Trazabilidad completa"
    ],
    "correctAnswer": 3
  },
  {
    "question": "¿Qué identifica la auditoría inicial?",
    "options": [
      "KPIs financieros",
      "Problemas y cuellos de botella",
      "Reglas CSS",
      "Repositorios Git"
    ],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué busca el análisis funcional?",
    "options": [
      "Definir flujos y módulos",
      "Eliminar PostgreSQL",
      "Crear backups locales",
      "Reducir XML"
    ],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué filosofía recomienda Odoo al implantar?",
    "options": [
      "Programar siempre",
      "Separar clientes",
      "Configurar antes que programar",
      "Usar módulos monolíticos"
    ],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué paso importa datos antiguos?",
    "options": [
      "Parametrización",
      "Go-Live",
      "Migración de datos",
      "Auditoría inicial"
    ],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué ocurre en el Go-Live?",
    "options": [
      "Se eliminan APIs",
      "Se capacita a usuarios",
      "Se borra PostgreSQL",
      "Se desinstala CRM"
    ],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué evita implantar toda la empresa de golpe?",
    "options": [
      "Sobrecarga inicial",
      "Código Python",
      "Consultas ORM",
      "Dependencias SQL"
    ],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué perfil enlaza consultora y empresa?",
    "options": [
      "Key User",
      "Frontend Dev",
      "DBA externo",
      "Tester QA"
    ],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué entorno recomienda probar pedidos reales?",
    "options": [
      "Producción",
      "Sandbox",
      "GitLab",
      "Nginx"
    ],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué reduce personalizar demasiado un ERP?",
    "options": [
      "Mantenimiento sencillo",
      "Compatibilidad futura",
      "Escalabilidad API",
      "Automatización bancaria"
    ],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué traduce modelos Python en tablas?",
    "options": [
      "Power BI",
      "QWeb",
      "ORM",
      "Odoo Shell"
    ],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué modelo representa clientes en Odoo?",
    "options": [
      "sale.order",
      "res.partner",
      "account.move",
      "product.template"
    ],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué tipo de campo conecta modelos?",
    "options": [
      "Boolean",
      "Date",
      "Relacional",
      "Float"
    ],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué almacena sale.order?",
    "options": [
      "Facturas",
      "Clientes",
      "Pedidos de venta",
      "Inventarios"
    ],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué herramienta consulta tablas PostgreSQL?",
    "options": [
      "pgAdmin",
      "Trello",
      "Canva",
      "Asana"
    ],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué permite el ORM de Odoo?",
    "options": [
      "Conectar código y datos",
      "Diseñar logos",
      "Editar imágenes",
      "Crear contenedores"
    ],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué evita duplicar información entre modelos?",
    "options": [
      "Campos relacionales",
      "Copias CSV",
      "Código Java",
      "Claves externas manuales"
    ],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué archivo define dependencias del módulo?",
    "options": [
      "views.xml",
      "models.py",
      "manifest.py",
      "static.css"
    ],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué carpeta contiene lógica Python en Odoo?",
    "options": [
      "data/",
      "models/",
      "views/",
      "static/"
    ],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué tecnología usa Odoo para vistas?",
    "options": [
      "QWeb",
      "Python",
      "PostgreSQL",
      "XML"
    ],
    "correctAnswer": 3
  },
  {
    "question": "¿Qué debe hacerse tras añadir un módulo nuevo?",
    "options": [
      "Reiniciar servidor",
      "Borrar PostgreSQL",
      "Cerrar GitHub",
      "Exportar CSV"
    ],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué práctica recomienda ampliar módulos estándar?",
    "options": [
      "Modificar código original",
      "Heredar modelos y vistas",
      "Eliminar dependencias",
      "Usar Excel externo"
    ],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué guarda la carpeta data/?",
    "options": [
      "Registros iniciales",
      "Consultas ORM",
      "Imágenes PNG",
      "Drivers SQL"
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

export default function SGESimulacro1Quiz() {
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
            <h2 className="text-xl text-muted-foreground">Simulacro I</h2>
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
