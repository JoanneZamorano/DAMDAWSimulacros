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
    question: "¿Qué es HTML?",
    options: ["Un lenguaje de programación", "Un lenguaje de marcas", "Un framework", "Un compilador"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué elemento NO es semántico en HTML5?",
    options: ["<header>", "<main>", "<section>", "<font>"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué propiedad CSS controla el espacio EXTERIOR de un elemento?",
    options: ["margin", "padding", "border", "spacing"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué hace la propiedad display: flex?",
    options: [
      "Crea un contenedor rígido",
      "Añade estilos automáticos",
      "Crea un contenedor flexible para colocar elementos",
      "Crea un script",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué es XML?",
    options: ["Un lenguaje de estilos", "Un lenguaje de marcas estructurado", "Un motor de BD", "Un navegador"],
    correctAnswer: 1,
  },
  {
    question: "Un DTD sirve principalmente para...",
    options: ["Definir reglas básicas para validar un XML", "Crear estilos", "Ejecutar XML", "Cargar scripts"],
    correctAnswer: 0,
  },
  {
    question: "La declaración correcta de un XML es:",
    options: ['<xml version="1.0">', "<DOCTYPE xml>", '<?xml version="1.0" encoding="UTF-8"?>', "<XML>"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué tipo NO existe en XSD?",
    options: ["xs:string", "xs:integer", "xs:boolean", "xs.word"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué permite hacer un XSD?",
    options: [
      "Validar la estructura y tipos de datos de un XML",
      "Ejecutar consultas",
      "Aplicar estilos",
      "Crear scripts",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Cuál etiqueta define un elemento en XSD?",
    options: ["<xs:define>", "<xs:item>", "<xs:element>", "<tag>"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué etiqueta enlaza una hoja CSS externa?",
    options: ["<style>", "<link>", "<css>", "<import>"],
    correctAnswer: 1,
  },
  {
    question: "El DOM es...",
    options: ["Un editor web", "Un sistema operativo", "Un depurador", "Un modelo de objetos del documento"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué método selecciona un elemento por id en JavaScript?",
    options: ["getElementById()", "selectId()", "query()", "getTag()"],
    correctAnswer: 0,
  },
  {
    question: "Comentario válido en XML:",
    options: ["# comentario", "/* comentario */", "<!-- comentario -->", "// comentario"],
    correctAnswer: 2,
  },
  {
    question: 'XML es "extensible" porque...',
    options: [
      "Se ejecuta en navegador",
      "Permite definir tus propias etiquetas",
      "Es un lenguaje antiguo",
      "Usa estilos",
    ],
    correctAnswer: 1,
  },
  {
    question: "En un DTD, #PCDATA significa:",
    options: ["Contenido compuesto por texto", "Elemento vacío", "Contiene solo elementos", "Contiene atributos"],
    correctAnswer: 0,
  },
  {
    question: "Propiedad CSS para cambiar tipografía:",
    options: ["font-style", "text-type", "font-family", "writing"],
    correctAnswer: 2,
  },
  {
    question: "Un ERP es:",
    options: ["Un navegador", "Una BD", "Un software de mapas", "Un sistema de planificación empresarial"],
    correctAnswer: 3,
  },
  {
    question: "Un CRM sirve para...",
    options: [
      "Gestionar relaciones con clientes",
      "Hacer copias de seguridad",
      "Crear scripts",
      "Configurar servidores",
    ],
    correctAnswer: 0,
  },
  {
    question: "Módulo real de Odoo:",
    options: ["Kernel Manager", "System32", "Recursos Humanos", "Web Packager"],
    correctAnswer: 2,
  },
  {
    question: "En Odoo, la importación se hace mediante:",
    options: [".exe", "CSV / Excel", ".apk", ".bat"],
    correctAnswer: 1,
  },
  {
    question: "Módulo de Odoo para oportunidades comerciales:",
    options: ["Inventario", "Contabilidad", "Sitio Web", "CRM"],
    correctAnswer: 3,
  },
  {
    question: "Atributo HTML para texto alternativo:",
    options: ["alt", "description", "caption", "title"],
    correctAnswer: 0,
  },
  {
    question: "Lenguaje que NO es de marcas:",
    options: ["HTML", "XML", "CSS", "SVG"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué pseudo-clase es correcta?",
    options: [":inside", ":hover", ":rounded", ":middle"],
    correctAnswer: 1,
  },
  {
    question: "Etiqueta para tablas en HTML:",
    options: ["<tbl>", "<grid>", "<tab>", "<table>"],
    correctAnswer: 3,
  },
  {
    question: "En XSD, una secuencia se define con:",
    options: ["<xs:sequence>", "<xs:order>", "<xs:list>", "<xs:next>"],
    correctAnswer: 0,
  },
  {
    question: "Lenguaje de cliente para manipular DOM:",
    options: ["PHP", "SQL", "JavaScript", "XSD"],
    correctAnswer: 2,
  },
  {
    question: "Principal ventaja de un ERP:",
    options: [
      "Aísla la información",
      "Unifica datos y procesos de la empresa",
      "Solo sirve para marketing",
      "Optimiza imágenes",
    ],
    correctAnswer: 1,
  },
  {
    question: "En Odoo, el módulo Inventario permite:",
    options: [
      "Crear oportunidades",
      "Generar facturas",
      "Gestionar productos, almacenes y movimientos",
      "Diseñar páginas",
    ],
    correctAnswer: 2,
  },
]

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export default function LenguajeMarcasDiciembre1Quiz() {
  const [started, setStarted] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [score, setScore] = useState(0)
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([])
  const [finished, setFinished] = useState(false)

  const startQuiz = () => {
    setShuffledQuestions(shuffleArray(questions))
    setStarted(true)
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowFeedback(false)
    setScore(0)
    setFinished(false)
  }

  const handleAnswerClick = (answerIndex: number) => {
    if (showFeedback) return

    setSelectedAnswer(answerIndex)
    setShowFeedback(true)

    if (answerIndex === shuffledQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1)
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
              <span className="text-foreground">Lenguaje de Marcas</span>
            </h1>
            <h2 className="text-xl text-muted-foreground">Simulacro Diciembre I</h2>
            <p className="text-muted-foreground text-lg">HTML, XML, CSS, Odoo y más</p>

            <div className="space-y-4 text-left py-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">30 Preguntas</p>
                  <p className="text-sm text-muted-foreground">Todos los conceptos clave</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Preguntas Aleatorizadas</p>
                  <p className="text-sm text-muted-foreground">Cada sesión es diferente</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Retroalimentación Inmediata</p>
                  <p className="text-sm text-muted-foreground">Aprende mientras practicas</p>
                </div>
              </div>
            </div>

            <Button
              onClick={startQuiz}
              size="lg"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold"
            >
              Comenzar Quiz
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  if (finished) {
    const percentage = Math.round((score / shuffledQuestions.length) * 100)
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-lg p-8 bg-card border-border">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Quiz Completado</h2>
            <div className="py-8">
              <div className="text-6xl font-bold text-orange-500 mb-2">{percentage}%</div>
              <p className="text-xl text-muted-foreground">
                {score} de {shuffledQuestions.length} correctas
              </p>
            </div>

            <div className="space-y-2">
              {percentage >= 90 && <p className="text-lg text-foreground">Excelente. Dominas Lenguaje de Marcas.</p>}
              {percentage >= 70 && percentage < 90 && (
                <p className="text-lg text-foreground">Muy bien. Buen conocimiento.</p>
              )}
              {percentage >= 50 && percentage < 70 && (
                <p className="text-lg text-foreground">Bien hecho. Sigue practicando.</p>
              )}
              {percentage < 50 && <p className="text-lg text-foreground">Sigue aprendiendo. Tú puedes.</p>}
            </div>

            <div className="space-y-3">
              <Button
                onClick={startQuiz}
                size="lg"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold"
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

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8 bg-card border-border">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Salir del examen
        </Link>

        <div className="space-y-6">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>
              Pregunta {currentQuestionIndex + 1} de {shuffledQuestions.length}
            </span>
            <span>Puntuación: {score}</span>
          </div>

          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
            />
          </div>

          <h2 className="text-2xl font-bold text-foreground text-balance">{currentQuestion.question}</h2>

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
                    ${!showFeedback && "hover:border-orange-500 hover:bg-accent cursor-pointer"}
                    ${showFeedback && "cursor-not-allowed"}
                    ${isSelected && !showFeedback && "border-orange-500 bg-accent"}
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

          {showFeedback && (
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="text-sm">
                {selectedAnswer === currentQuestion.correctAnswer ? (
                  <span className="text-green-500 font-semibold">Correcto</span>
                ) : (
                  <span className="text-red-500 font-semibold">Incorrecto</span>
                )}
              </div>
              <Button onClick={handleNext} className="bg-orange-500 hover:bg-orange-600 text-white">
                {currentQuestionIndex < shuffledQuestions.length - 1 ? "Siguiente" : "Ver Resultados"}
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}
