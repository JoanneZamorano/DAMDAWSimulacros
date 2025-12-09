"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, ChevronLeft } from "lucide-react"
import Link from "next/link"

const questions = [
  {
    question:
      "¿Qué ocurre si declaras una variable local sin inicializar e intentas imprimirla?",
    options: [
      "Peta en compilación",
      "Se imprime null",
      "Se imprime 0",
      "Se asigna un valor aleatorio",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "¿Cuál será el resultado de 22 % 7 en Java?",
    options: [
      "22",
      "0",
      "6",
      "1",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "¿Qué valor toma z tras ejecutar: int z=9; z /= 4;?",
    options: [
      "2",
      "4",
      "3",
      "2.25",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "¿Qué operador lógico invierte el valor de una condición?",
    options: [
      "|=",
      "&&",
      "||",
      "!",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "¿Qué tipo primitivo es más adecuado para almacenar un número entero muy grande?",
    options: [
      "short",
      "int",
      "byte",
      "long",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "¿Qué estructura elegirías para ejecutar exactamente uno entre varios bloques?",
    options: [
      "switch",
      "while",
      "do",
      "try",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "¿Qué imprime este código? c=4; while(c>0){c--;} System.out.println(c);",
    options: [
      "1",
      "-1",
      "3",
      "0",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "¿Qué bucle ejecuta su contenido al menos una vez aunque la condición sea falsa?",
    options: [
      "if",
      "while",
      "for",
      "do-while",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "¿Qué ocurre si declaras una variable local sin inicializar e intentas imprimirla?",
    options: [
      "Peta en compilación",
      "Se imprime null",
      "Se imprime 0",
      "Se asigna un valor aleatorio",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "¿Qué instrucción permite abandonar completamente un bucle for?",
    options: [
      "break",
      "return",
      "continue",
      "skip",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "¿Qué comportamiento tiene un switch clásico sin break cuando un case coincide?",
    options: [
      "Solo ejecuta ese case y termina inmediatamente",
      "Ejecuta ese case y continúa ejecutando los siguientes hasta break",
      "Ignora los case posteriores",
      "Lanza una excepción en tiempo de ejecución",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "¿Qué palabra indica que un método debe devolver un valor?",
    options: [
      "return",
      "yield",
      "output",
      "result",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "¿Qué valor imprime este código? fun(5) → return a*a",
    options: [
      "10",
      "25",
      "Error",
      "5",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "¿Cuál de las siguientes declaraciones de método es inválida",
    options: [
      "double calcularArea(double r)",
      "String nombre()",
      "void mostrar()",
      "public int sumar(int x, int x)",
    ],
    correctAnswer: 3,
  },{
    question:
      "¿Qué recibe automáticamente una subclase al heredar de una clase padre?",
    options: [
      "Los import",
      "Los constructores",
      "Los métodos privados",
      "Los atributos públicos o protegidos",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "¿Qué afirmación sobre las interfaces es verdadera?",
    options: [
      "No pueden contener métodos abstractos",
      "Una interfaz define qué debe hacer una clase, pero no cómo",
      "Pueden ser instanciadas",
      "Deben tener constructores",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "Un identificador válido en Java puede...",
    options: [
      "Comenzar con una letra",
      "Contener barras \"/\"",
      "Contener \"$\"",
      "Contener \"*\"",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "¿Qué palbra impide que un método pueda redefinirse en una subclase?",
    options: [
      "final",
      "static",
      "private",
      "protected",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "¿Qué ocurre si un bloque try no tiene catch pero sí finally?",
    options: [
      "finally se ejecuta siempre",
      "No compila",
      "finally nunca se ejecuta",
      "Se ignoran las excepciones",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "¿Qué excepción se produce al dividir entre cero usando enteros?",
    options: [
      "IllegalStateException",
      "ArithmeticException",
      "IndexOutOfBounds",
      "NumberFormatException",
    ],
    correctAnswer: 1,
  },
  {
    question:
      "¿Qué valor muestra un array new int[5] al consultar el índice 4?",
    options: [
      "4",
      "null",
      "0",
      "1",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "¿Qué estructura mantiene el orden de inserción?",
    options: [
      "TreeSet",
      "PriorityQueue",
      "HashSet",
      "TreeMap",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "Qué colección elimina duplicados automáticamente",
    options: [
      "Vector",
      "Queue",
      "ArrayList",
      "HashSet",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "¿Qué sucede si una función recursiva se llama a sí misma y nunca alcanza una condición de parada?",
    options: [
      "Terminación inmediata",
      "Cambia a iteración",
      "No compila",
      "Provoca recursión infinita",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "¿Qué condición debe cumplir toda función recursiva?",
    options: [
      "Tener un caso base",
      "Devolver un entero",
      "Llamar a otro método",
      "Tener un main",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "¿Qué representa este JSON: [{\"id\":1},{\"id\":2}]?",
    options: [
      "Una cadena",
      "Un mapa",
      "Un array de objetos",
      "Un objeto",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "¿Qué ocurre al ejecutar gson.toJson(lista)?",
    options: [
      "Convierte la lista a un String JSON",
      "Lista se vacía",
      "Convierte JSON en objetos",
      "Se escribe un archivo",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "¿Qué método convierte JSON en objetos Java?",
    options: [
      "readAll()",
      "toJson()",
      "fromJson()",
      "parse()",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "¿Qué atributo en FXML conecta un componente con una variable del controlador?",
    options: [
      "bind:id",
      "#id",
      "tag",
      "fx:id",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "¿Qué hace un botón JavaFX con onAction=\"#procesarDatos\"?",
    options: [
      "Abre una escena",
      "Cambia texto",
      "Llama al método procesarDatos()",
      "Desactiva el botón",
    ],
    correctAnswer: 2,
  },
  {
    question:
      "¿Cuál es la relación correcta entre un Stage y una Scene en JavaFX?",
    options: [
      "La Scene contiene al Stage y controla su ciclo de vida",
      "El Stage muestra una ventana, y dentro se coloca la Scene",
      "Una Scene puede mostrar múltiples Stages simultáneamente",
      "Un Stage solo puede tener una Scene de forma permanente, no cambia",
    ],
    correctAnswer: 1,
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
