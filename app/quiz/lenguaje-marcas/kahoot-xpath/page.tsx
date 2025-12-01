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
    question: "¿Qué es XPath?",
    options: [
      "Un lenguaje para dar estilo",
      "Un lenguaje para seleccionar nodos en XML",
      "Un lenguaje para validar XML",
      "Un lenguaje para transformar XML",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué selecciona la expresión '/' ?",
    options: ["El nodo actual", "El nodo raíz", "Todos los nodos", "Los atributos"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué selecciona '//' libro?",
    options: [
      "Solo libros hijos directos",
      "Todos los elementos libro en todo el documento",
      "Solo libros hermanos",
      "Atributos de libro",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué significa '.' en XPath?",
    options: ["Nodo raíz", "Nodo actual", "Nodo padre", "Atributo"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué selecciona '. . ' ?",
    options: ["Hijo", "Padre", "Raíz", "Atributo"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué selecciona '//@id' ?",
    options: [
      "Atributos id del nodo raíz",
      "Todos los atributos id en el documento",
      "Solo ids del nodo actual",
      "Solo ids de los hijos directos",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué operador selecciona un hijo directo?",
    options: ["'//'", "'/'", "'.'", "'->'"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué selecciona '/biblioteca/libro[1]' ?",
    options: [
      "Todos los libros con atributo 1",
      "El primer elemento libro",
      "El libro cuyo valor sea 1",
      "Todos los libros excepto el primero",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué hace '[last()]' ?",
    options: ["Selecciona todos", "Selecciona el último", "Selecciona el penúltimo", "Filtra los vacíos"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué significa '@precio'?",
    options: ["Un elemento", "Un atributo", "Un nombre de archivo", "Un comentario"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué selecciona '//*' ?",
    options: ["Ningún nodo", "Todos los nodos del documento", "Solo atributos", "Solo comentarios"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué expresa '[position()=2]'?",
    options: ["Devuelve el último", "Devuelve el primero", "Devuelve el segundo", "Devuelve todos menos el segundo"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué hace 'text()' ?",
    options: ["Selecciona atributos", "Selecciona texto de nodos", "Selecciona comentarios", "Selecciona el root"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué significa '//libro[@categoria='ficcion']' ?",
    options: [
      "Libros sin categoría",
      'Libros cuyo texto sea "ficcion"',
      'Libros con atributo categoria="ficcion"',
      "Libros que pertenecen al nodo ficcion",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué selecciona '//*[@id]'?",
    options: ["Todos los nodos sin id", "Todos los nodos con atributo id", "Todos los nodos id", "Solo atributos id"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué es XQuery ?",
    options: [
      "Un lenguaje para dar estilos",
      "Un lenguaje para consultar y transformar XML",
      "Un validador",
      "Un lenguaje para crear esquemas",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Cómo comienza una consulta XQuery típica?",
    options: ["FROM", "SEARCH", "for", "query"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué devuelve normalmente una expresión return ?",
    options: ["Un comentario", "El resultado de la consulta", "Una excepción", "Un atributo"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué palabra clave permite filtrar dentro de un for ?",
    options: ["if", "where", "limit", "reduce"],
    correctAnswer: 1,
  },
  {
    question: "¿Cómo se concatena texto en XQuery ?",
    options: ["concat(a,b)", "a + b", "a . b", "a & b"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué significa la expresión FLWOR ?",
    options: [
      "For, Let, Where, Order by, Return",
      "Flow, Load, Write, Organize, Return",
      "File, List, Work, Order, Rest",
      "For, Loop, Work, Order, Return",
    ],
    correctAnswer: 0,
  },
  {
    question: '¿Qué hace doc("archivo.xml") ?',
    options: ["Valida el XML", "Importa un documento XML", "Convierte XML en JSON", "Aplica transformación XSLT"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué hace order by ?",
    options: ["Ordena los elementos", "Elimina duplicados", "Crea una copia", "Filtra nulos"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué devuelve count() ?",
    options: ["La suma", "El número de nodos", "El número de atributos", "El número de líneas"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué hace distinct-values() ?",
    options: ["Elimina los repetidos", "Crea una tabla", "Ordena alfabéticamente", "Convierte a string"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué permite let en XQuery?",
    options: ["Crear elementos", "Definir variables", "Eliminar contenido", "Convertir formatos"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué devuelve la expresión: 'for $x in doc(\"a.xml\")//precio return $x * 2' ?",
    options: ["Duplica los valores de precio", "Suma 2", "Devuelve los mismos precios", "Divide entre 2"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué significa '$x/@id' ?",
    options: [
      "Selecciona el hijo id",
      "Selecciona el atributo id",
      "Selecciona el texto de id",
      "Selecciona todos los nodos",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué hace la función 'max()' ?",
    options: ["Devuelve el máximo", "Devuelve el mínimo", "Devuelve la media", "Convierte a número"],
    correctAnswer: 0,
  },
  {
    question:
      "¿Qué significa esta consulta? 'for $x in doc(\"libros.xml\")//libro order by $x/precio return $x/titulo'",
    options: [
      "Devuelve todos los títulos sin ordenar",
      "Devuelve los títulos ordenados por precio",
      "Devuelve los títulos más caros solo",
      "Devuelve solo el primer libro",
    ],
    correctAnswer: 1,
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

export default function KahootXPathQuiz() {
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
            <h2 className="text-xl text-muted-foreground">Kahoot XPATH</h2>
            <p className="text-muted-foreground text-lg">XPath y XQuery</p>

            <div className="space-y-4 text-left py-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">30 Preguntas</p>
                  <p className="text-sm text-muted-foreground">XPath y XQuery completos</p>
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
              {percentage >= 90 && <p className="text-lg text-foreground">Excelente. Dominas XPath y XQuery.</p>}
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
