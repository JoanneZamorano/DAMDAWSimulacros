"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, ChevronLeft } from "lucide-react"
import Link from "next/link"

const questions = [
  {
    question: "¿Qué tipo de dato devuelve siempre input(), aunque el usuario escriba un número?",
    options: [
      "int",
      "float",
      "str",
      "bool"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué operador realiza una división cuyo resultado es solo la parte entera?",
    options: [
      "%",
      "//",
      "/",
      "**"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál de los siguientes nombres de variable es válido en Python?",
    options: [
      "hola-mundo",
      "3dibuio",
      "hola_mundo",
      "hola.mundo"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué imprime este código? print(17 % 5)",
    options: [
      "2",
      "5",
      "20",
      "0"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué función se usa para mostrar un valor por pantalla?",
    options: [
      "echo()",
      "print()",
      "show()",
      "display()"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué resultado produce esta operación? 2 ** 4",
    options: [
      "6",
      "12",
      "2*4",
      "16"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Cuál de estas comparaciones es verdadera?",
    options: [
      "\"a\" in \"b\"",
      "4 == \"4\"",
      "10 > 3",
      "7 != 7"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué muestra el siguiente código? if 0: print(\"Sí\") else: print (\"No\")",
    options: [
      "Error",
      "Sí",
      "No",
      "0"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué imprime este bucle? for n in [3, 6, 9]: if n == 6: break; print(n)",
    options: [
      "3 6",
      "3",
      "6 9",
      "369"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué función permite obtener el número de elementos de una lista?",
    options: [
      "count()",
      "len()",
      "length()",
      "items()"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué extensión se usa para archivos de código Python?",
    options: [
      ".pt",
      ".pyc",
      ".py",
      ".p"
    ],
    correctAnswer: 2
  },
  {
    question: "Python es un lenguaje de tipado...",
    options: [
      "estático",
      "dinámico",
      "mixto",
      "fijo"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es el resultado de este cálculo? print(4 + 3 * 3)",
    options: [
      "21",
      "9",
      "13",
      "7"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué módulo se utiliza para generar números aleatorios?",
    options: [
      "math",
      "os",
      "random",
      "time"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cómo se hace un comentario de una línea en Python?",
    options: [
      "-- comentario",
      "# comentario",
      "// comentario",
      "/* comentario */"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué estructura permite repetir código mientras se cumple una condición?",
    options: [
      "for",
      "while",
      "if",
      "def"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál de estos es un ejemplo válido de tupla?",
    options: [
      "[1, 2, 3]",
      "(1, 2, 3)",
      "{1, 2, 3}",
      "<1, 2, 3>"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué imprime este código? datos = [10, 20, 30]; copia = datos; copia.append(40); print(datos)",
    options: [
      "[10,20,30]",
      "[10,20,30,40]",
      "[40]",
      "Error"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué palabra clave permite devolver un valor desde una función?",
    options: [
      "output",
      "send",
      "return",
      "give"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué modo de apertura borra el contenido previo del archivo?",
    options: [
      "r",
      "w",
      "a",
      "rw"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué hace este código al ejecutarse? print(\"hola\".upper())",
    options: [
      "hola",
      "HOLA hola",
      "HOLA",
      "No es válido"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué tipo de dato se obtiene al ejecutar esto? type((5,))",
    options: [
      "int",
      "tuple",
      "list",
      "set"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué imprime este código? nombre = \"Python\"; print(nombre[-1])",
    options: [
      "P",
      "py",
      "0",
      "n"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué método añade un elemento al final de una lista?",
    options: [
      "insert()",
      "pop()",
      "extend()",
      "append()"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué sucede al intentar convertir \"hola\" con int()? int(\"hola\")",
    options: [
      "Devuelve 0",
      "Devuelve None",
      "Lanza ValueError",
      "Devuelve \"hola\""
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué módulo permite obtener la hora actual?",
    options: [
      "sys",
      "math",
      "time",
      "format"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué imprime este código? print(list(range(2, 8, 2)))",
    options: [
      "[2,3,4,5,6,7]",
      "[2,4,6]",
      "[2,8]",
      "[4,8]"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál de estas estructuras puede modificar su contenido?",
    options: [
      "tuple",
      "str",
      "int",
      "list"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué hace este código? with open(\"archivo.txt\",\"a\") as f: f.write(\"Hola\")",
    options: [
      "Elimina el archivo",
      "Añade \"Hola\" al final",
      "Reemplaza todo el archivo con \"Hola\"",
      "Produce error"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué resultado produce este código? import math; print(math.pow(2, 3))",
    options: [
      "6",
      "8.0",
      "16",
      "pow no existe"
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
