"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, ChevronLeft } from "lucide-react"
import Link from "next/link"

const questions = [
  {
    question: "¿Qué tipo de relación ISA permite que un tipo pertenezca a varios subtipos?",
    options: ["ISA Parcial", "ISA Total", "ISA Exclusiva", "ISA Solapada"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué comando DCL se utiliza para revocar permisos de un usuario en una base de datos?",
    options: ["DENY", "REVOKE", "REMOVE", "DELETE"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué comando DDL se utiliza para eliminar todos los datos de una tabla sin eliminar la tabla en sí?",
    options: ["DELETE TABLE", "CLEAR TABLE", "TRUNCATE TABLE", "REMOVE TABLE"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué efecto tiene un bloqueo exclusivo (exclusive lock) en una tabla?",
    options: [
      "Permite solo lecturas simultáneas",
      "Impide que otros usuarios lean o escriban en la tabla",
      "Permite solo escrituras simultáneas",
      "No tiene ningún efecto",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué estrategia de mapeo en herencia evita columnas vacías pero puede ser más lenta para consultas?",
    options: [
      "Tabla Unica por Jerarquía completa",
      "Tablas directas del diagrama MER",
      "Tablas Orientadas a Objetos",
      "Tablas para cada subtipo",
    ],
    correctAnswer: 3,
  },
  {
    question: "¿Qué tipo de relación ISA permite que un tipo no pertenezca a ningún subgrupo?",
    options: ["ISA Parcial", "ISA Total", "ISA Exclusiva", "ISA Solapada"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué cláusula se utiliza para ordenar los resultados de una consulta SELECT?",
    options: ["SORT BY", "ORDER BY", "GROUP BY", "FILTER BY"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué tipo de relación ISA establece que un tipo solo puede pertenecer a un subgrupo?",
    options: ["ISA Parcial", "ISA Total", "ISA Exclusiva", "ISA Solapada"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué comando DDL se utiliza para crear una nueva base de datos en SQL?",
    options: ["CREATE DATABASE", "NEW DATABASE", "ADD DATABASE", "MAKE DATABASE"],
    correctAnswer: 0,
  },
  {
    question:
      "¿Qué tipo de restricción en MERE se utiliza para representar que una entidad puede participar en solo una relación de las posibles, pero no al mismo tiempo?",
    options: ["Exclusión", "Inclusión", "Exclusividad", "Inclusividad"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué comando DQL se utiliza para seleccionar datos de una tabla?",
    options: ["FETCH", "SELECT", "GET", "QUERY"],
    correctAnswer: 1,
  },
  {
    question:
      "¿Qué tipo de restricción en MERE se utiliza para representar que una entidad solo podrá participar en una única relación de un conjunto, siempre?",
    options: ["Exclusión", "Inclusión", "Exclusividad", "Inclusividad"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué comando se utiliza para crear una vista en una base de datos?",
    options: ["CREATE VIEW", "MAKE VIEW", "NEW VIEW", "BUILD VIEW"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué comando se utiliza para eliminar todos los registros de una tabla rápidamente?",
    options: ["DELETE", "TRUNCATE", "DROP", "CLEAR"],
    correctAnswer: 1,
  },
  {
    question:
      "¿Qué tipo de restricción en MERE se utiliza para representar que para que una entidad participe en la relación R2, debe haber participado previamente en la relación R1?",
    options: ["Exclusión", "Inclusión", "Exclusividad", "Inclusividad"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué comando se utiliza para mostrar la estructura de una tabla?",
    options: ["SHOW STRUCTURE", "DESCRIBE", "DISPLAY STRUCTURE", "VIEW STRUCTURE"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué comando DDL se utiliza para eliminar una tabla completa de una base de datos?",
    options: ["DELETE TABLE", "DROP TABLE", "REMOVE TABLE", "ERASE TABLE"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué tipo de restricción en MERE se representa con una flecha discontinua entre relaciones?",
    options: ["Exclusión", "Inclusión", "Exclusividad", "Inclusividad"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué comando se utiliza para eliminar un usuario de una base de datos?",
    options: ["DELETE USER", "DROP USER", "REMOVE USER", "ERASE USER"],
    correctAnswer: 1,
  },
  {
    question:
      "¿Qué estrategia de mapeo en herencia crea una tabla para cada subtipo, incluida toda la información común?",
    options: [
      "Tabla Unica por Jerarquía completa",
      "Tablas directas del diagrama MER",
      "Tablas Orientadas a Objetos",
      "Tablas para cada subtipo",
    ],
    correctAnswer: 3,
  },
  {
    question: "¿Cómo se delimitan las instrucciones dentro de un procedimiento almacenado en SQL?",
    options: [
      "Con paréntesis ()",
      "Mediante las palabras BEGIN y END",
      "Solo con punto y coma ;",
      "No es necesario delimitarlas",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué comando DDL se utiliza para mostrar todas las tablas en una base de datos?",
    options: ["SHOW TABLES", "LIST TABLES", "DISPLAY TABLES", "VIEW TABLES"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué tipo de restricción se utiliza para asegurar que un campo no puede tener valores nulos?",
    options: ["PRIMARY KEY", "FOREIGN KEY", "NOT NULL", "UNIQUE"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué tipo de relación en MERE se utiliza para representar relaciones circulares o reflexivas?",
    options: ["ISA", "M:N", "1:N", "Recursiva"],
    correctAnswer: 3,
  },
  {
    question: "¿Qué comando se utiliza para combinar verticalmente los resultados de dos consultas?",
    options: ["JOIN", "UNION", "MERGE", "COMBINE"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué tipo de restricción en MERE se representa con una línea discontinua entre relaciones?",
    options: ["Exclusión", "Inclusión", "Exclusividad", "Inclusividad"],
    correctAnswer: 0,
  },
  {
    question: "¿Cuál es la principal diferencia entre una vista y una tabla base en SQL?",
    options: [
      "Una vista es una consulta guardada, una tabla base almacena datos físicamente",
      "Ambas almacenan datos",
      "No hay diferencia",
      "Una vista no puede usarse en consultas",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué establece la restricción de Inclusión en MERE?",
    options: [
      "Que una entidad debe participar en todas las relaciones posibles.",
      "Que para que dos ocurrencias de entidades se asocien en R2, deben haber estado asociadas previamente a través de R1.",
      "Que una entidad no puede participar en ninguna relación.",
      "Que una entidad puede participar en cualquier relación sin restricciones.",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué comando se utiliza para seleccionar una base de datos específica para trabajar en ella?",
    options: ["SELECT DATABASE", "USE", "CHOOSE DATABASE", "SET DATABASE"],
    correctAnswer: 1,
  },
]

export default function KahootBBDD0212Part2() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [answeredQuestions, setAnsweredQuestions] = useState<boolean[]>(Array(questions.length).fill(false))
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [incorrectCount, setIncorrectCount] = useState(0)
  const [shuffledQuestions, setShuffledQuestions] = useState(questions)

  useEffect(() => {
    const shuffled = [...questions]
      .map((q) => ({
        ...q,
        options: q.options
          .map((option, index) => ({ option, index }))
          .sort(() => Math.random() - 0.5)
          .map((item, newIndex) => {
            if (item.index === q.correctAnswer) {
              q.correctAnswer = newIndex
            }
            return item.option
          }),
      }))
      .sort(() => Math.random() - 0.5)
    setShuffledQuestions(shuffled)
  }, [])

  const handleAnswer = (answerIndex: number) => {
    if (answeredQuestions[currentQuestion]) return

    setSelectedAnswer(answerIndex)

    const newAnswered = [...answeredQuestions]
    newAnswered[currentQuestion] = true
    setAnsweredQuestions(newAnswered)

    if (answerIndex === shuffledQuestions[currentQuestion].correctAnswer) {
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
    if (currentQuestion < shuffledQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      setShowResult(true)
    }
  }

  const resetQuiz = () => {
    const shuffled = [...questions]
      .map((q) => ({
        ...q,
        options: q.options
          .map((option, index) => ({ option, index }))
          .sort(() => Math.random() - 0.5)
          .map((item, newIndex) => {
            if (item.index === q.correctAnswer) {
              q.correctAnswer = newIndex
            }
            return item.option
          }),
      }))
      .sort(() => Math.random() - 0.5)
    setShuffledQuestions(shuffled)
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

  const question = shuffledQuestions[currentQuestion]
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
