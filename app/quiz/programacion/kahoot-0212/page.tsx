"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, CheckCircle2, XCircle } from "lucide-react"
import Link from "next/link"

interface Question {
  question: string
  options: string[]
  correctAnswer: number
}

const questions: Question[] = [
  {
    question: "¿Qué pasa con el valor de una variable final una vez asignado por primera vez?",
    options: [
      "Puede cambiarse libremente",
      "No puede modificarse",
      "Depende del tipo de dato",
      "Solo cambia dentro de métodos",
    ],
    correctAnswer: 1,
  },
  {
    question: "¿Qué devuelve 27%5?",
    options: ["2", "3", "7", "5"],
    correctAnswer: 0,
  },
  {
    question: 'Si "int x =10;  x-=4;" ¿Cuál es el valor de x?',
    options: ["14", "4", "6", "10"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué operador comprueba si dos valores PRIMITIVOS son iguales?",
    options: ["=", "==", "!=", "equals()"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué tipo de dato usarias para almacenar una temperatura con decimales?",
    options: ["double", "boolean", "long", "char"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué estructura permite ejecutar un bloque u otro según una condición?",
    options: ["switch", "for", "if-else", "while"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué imprime este código?\nint a = 0;\nwhile (a<2){\n  a++;\n}\nSystem.out.print(a)",
    options: ["0", "2", "1", "3"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué bucle se ejecuta mínimo una vez?",
    options: ["for", "do-while", "while", "switch"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué palabra permite saltar la interacción siguiente en un bucle for?",
    options: ["return", "break", "skip", "continue"],
    correctAnswer: 3,
  },
  {
    question: "En un switch CLÁSICO sin break, ¿Qué ocurre?",
    options: ["Nada", "Se lanza un error", "Se ejecutan los casos siguientes", "Se ejecuta default"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué palabra permite devolver un valor en un método?",
    options: ["call", "output", "return", "value"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué imprime este código?\nint f(int a, int b){\n  return a/b;\n}\nSystem.out.println(f(8,2));",
    options: ["2", "8", "4", "Error"],
    correctAnswer: 2,
  },
  {
    question: "Un método sin retorno se declara como:",
    options: ["null", "void", "empty", "none"],
    correctAnswer: 1,
  },
  {
    question: "¿Cuál es un nombre inválido para un método?",
    options: ["procesarDatos", "$guardar", "_iniciar", "2pasos"],
    correctAnswer: 1, // Changed from 3 to 1, correct answer is "$guardar"
  },
  {
    question: 'Salida del siguiente código?\nvoid eco(String t){\n  System.out.println(t+t);\n}\necho("Hi");',
    options: ["Hi", "t", "HiHi", "Error"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué palabra crea un nuevo objeto?",
    options: ["class", "new", "make", "alloc"],
    correctAnswer: 1,
  },
  {
    question: "¿Qué palabra permite heredar una clase?",
    options: ["inherits", "extends", "implements", "copy"],
    correctAnswer: 1,
  },
  {
    question: "La herencia permite...",
    options: ["compartir atributos y métodos", "Crear variables globales", "Eliminar constructores", "Duplicar código"],
    correctAnswer: 0,
  },
  {
    question: "¿Qué debe hacer una clase que implementa una interfaz?",
    options: ["Nada", "Sobreescribir métodos", "Extender otra clase", "Ser abstracta"],
    correctAnswer: 1,
  },
  {
    question: "La sobrecarga de métodos consiste en:",
    options: [
      "Cambiar el retorno",
      "Herencia múltiple",
      "Crear métodos con mismos nombres pero distintos parámetros",
      "Llamar métodos recursivamente",
    ],
    correctAnswer: 2,
  },
  {
    question: "¿Qué palabra captura una excepción?",
    options: ["fail", "throw", "try", "catch"],
    correctAnswer: 3,
  },
  {
    question: "El bloque finally se ejecuta...",
    options: ["Siempre", "Solo si hay excepción", "Nunca", "Solo si no hay excepción"],
    correctAnswer: 0,
  },
  {
    question: "Salida:\nint[] n={5,15,25};\nSystem.out.print(n[1]);",
    options: ["5", "25", "15", "Error"],
    correctAnswer: 2,
  },
  {
    question: "¿Qué colección almacena elementos sin repetición?",
    options: ["List", "Set", "Map", "Array"],
    correctAnswer: 1,
  },
  {
    question: "Diferencia correcta entre HashMap y TreeMap:",
    options: [
      "TreeMap ordena claves, HashMap no",
      "TreeMap es siempre más rápido",
      "HashMap permite duplicados",
      "HashMap solo admite enteros",
    ],
    correctAnswer: 0,
  },
  {
    question: "El caso base en una recursión es:",
    options: ["La condición que detiene la recursión", "El primer valor", "La última llamada", "El máximo valor"],
    correctAnswer: 0,
  },
  {
    question: "gson.toJson(obj)",
    options: ["Convierte JSON a objeto", "Lee archivo", "Convierte objeto a JSON", "Crea variable"],
    correctAnswer: 2,
  },
  {
    question: "Método para convertir JSON a objeto",
    options: ["jsonToObj()", "fromJson()", "parse()", "convert()"],
    correctAnswer: 1,
  },
  {
    question: "Atributo FXML para enlazar con controlador:",
    options: ["id", "control", "fx:id", "ref"],
    correctAnswer: 2,
  },
  {
    question: "onAction en JavaFX:",
    options: ["Cambiar estilo", "Ejecuta un método al pulsar", "Modifica tamaño", "Nada"],
    correctAnswer: 1,
  },
]

export default function ProgramacionKahoot0212Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [wrongAnswers, setWrongAnswers] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([])

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return

    setSelectedAnswer(answerIndex)
    const isCorrect = answerIndex === questions[currentQuestion].correctAnswer

    if (isCorrect) {
      setScore(score + 1)
    } else {
      setWrongAnswers(wrongAnswers + 1)
    }

    setAnsweredQuestions([...answeredQuestions, currentQuestion])
  }

  const handleNext = () => {
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
    setWrongAnswers(0)
    setAnsweredQuestions([])
  }

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100)
    const finalScore = Math.max(0, score - wrongAnswers / 3)
    const finalPercentage = Math.round((finalScore / questions.length) * 100)

    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl p-8 bg-card border-border">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Resultado Final</h2>
            <div className="space-y-4">
              <div>
                <div className="text-6xl font-bold text-primary">{percentage}%</div>
                <p className="text-xl text-muted-foreground">
                  Has acertado {score} de {questions.length} preguntas
                </p>
                <p className="text-lg text-muted-foreground">Respuestas incorrectas: {wrongAnswers}</p>
              </div>
              <div className="border-t border-border pt-4">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Fórmula de Corrección por Aciertos y Errores
                </h3>
                <p className="text-sm text-muted-foreground mb-2">Puntuación Final = Aciertos - (Errores / 3)</p>
                <div className="text-4xl font-bold text-blue-500">{finalScore.toFixed(2)}</div>
                <p className="text-lg text-muted-foreground mt-2">Nota Final: {finalPercentage}%</p>
                <p className="text-xs text-muted-foreground mt-1">
                  ({score} aciertos - {wrongAnswers} errores / 3 = {finalScore.toFixed(2)} puntos)
                </p>
              </div>
            </div>
            {finalPercentage >= 80 && <p className="text-lg text-green-500">Excelente trabajo</p>}
            {finalPercentage >= 60 && finalPercentage < 80 && (
              <p className="text-lg text-blue-500">Buen resultado, sigue practicando</p>
            )}
            {finalPercentage < 60 && <p className="text-lg text-orange-500">Necesitas repasar más</p>}
            <div className="flex gap-4 justify-center">
              <Button onClick={resetQuiz} size="lg">
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
    )
  }

  const question = questions[currentQuestion]
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto py-8">
        <div className="mb-6">
          <Link href="/">
            <Button variant="ghost" size="sm" className="mb-4">
              <ChevronLeft className="w-4 h-4 mr-2" />
              Volver
            </Button>
          </Link>
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold text-foreground">Programación - Kahoot 2/12</h1>
            <span className="text-muted-foreground">
              Pregunta {currentQuestion + 1} de {questions.length}
            </span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div
              className="bg-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 text-right">
            <span className="text-sm text-muted-foreground">Puntuación: {score}</span>
          </div>
        </div>

        <Card className="p-6 bg-card border-border">
          <h2 className="text-xl font-semibold mb-6 text-foreground whitespace-pre-line">{question.question}</h2>
          <div className="space-y-3">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrect = index === question.correctAnswer
              const showCorrect = selectedAnswer !== null && isCorrect
              const showIncorrect = selectedAnswer !== null && isSelected && !isCorrect

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    showCorrect
                      ? "border-green-500 bg-green-500/10"
                      : showIncorrect
                        ? "border-red-500 bg-red-500/10"
                        : isSelected
                          ? "border-purple-500 bg-purple-500/10"
                          : "border-border hover:border-purple-500/50 bg-card"
                  } ${selectedAnswer !== null ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">
                      <span className="font-semibold mr-2">{String.fromCharCode(65 + index)})</span>
                      {option}
                    </span>
                    {showCorrect && <CheckCircle2 className="w-5 h-5 text-green-500" />}
                    {showIncorrect && <XCircle className="w-5 h-5 text-red-500" />}
                  </div>
                </button>
              )
            })}
          </div>

          {selectedAnswer !== null && (
            <div className="mt-6">
              <Button onClick={handleNext} size="lg" className="w-full">
                {currentQuestion < questions.length - 1 ? "Siguiente pregunta" : "Ver resultados"}
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}
