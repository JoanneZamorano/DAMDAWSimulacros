"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, ChevronLeft } from "lucide-react"
import Link from "next/link"

const questions = [
  {
    question: "¿Qué hace la restricción UNIQUE?",
    options: ["Permite valores vacíos", "Evita valores repetidos", "Permite duplicados"],
    correctAnswer: 1,
    explanation: "UNIQUE asegura que todos los valores en una columna sean únicos.",
  },
  {
    question: "¿Qué palabra clave se usa junto a DELETE para definir qué registros eliminar?",
    options: ["FROM", "SET", "WHERE"],
    correctAnswer: 2,
    explanation: "Se utiliza WHERE para especificar qué filas deben ser eliminadas.",
  },
  {
    question: "¿Qué resultado da un RIGHT JOIN?",
    options: ["Todas las de la derecha y coincidencias de la izquierda", "Filas duplicadas", "Solo filas coincidentes"],
    correctAnswer: 0,
    explanation: "RIGHT JOIN devuelve todas las filas de la tabla derecha y las coincidencias de la izquierda.",
  },
  {
    question: "¿Qué hace el operador AND en una cláusula WHERE?",
    options: ["Combina resultados de tablas", "Invierte una condición", "Evalúa si ambas condiciones son verdaderas"],
    correctAnswer: 2,
    explanation: "AND permite combinar múltiples condiciones que deben cumplirse todas.",
  },
  {
    question: "¿Qué hace la sentencia DELETE?",
    options: ["Elimina filas", "Elimina columnas", "Elimina bases de datos"],
    correctAnswer: 0,
    explanation: "DELETE elimina una o más filas de una tabla según una condición.",
  },
  {
    question: "¿Qué se necesita especificar en un JOIN para que sea correcto?",
    options: ["La cláusula IF", "La condición ORDER BY", "La condición ON"],
    correctAnswer: 2,
    explanation: "Una condición ON que indique cómo se relacionan las tablas.",
  },
  {
    question: "¿Qué hace AUTO_INCREMENT en una columna?",
    options: ["Evita duplicados", "Elimina valores nulos", "Asigna valores crecientes"],
    correctAnswer: 2,
    explanation: "AUTO_INCREMENT asigna automáticamente un valor numérico creciente.",
  },
  {
    question: "¿Qué hace la restricción CHECK?",
    options: ["Modifica una tabla", "Agrupa columnas", "Impone una condición"],
    correctAnswer: 2,
    explanation: "CHECK impone una condición que debe cumplirse para que el valor sea insertado.",
  },
  {
    question: "¿Qué condición se debe cumplir al usar UNION?",
    options: ["Mismo número y tipo de columnas", "Solo misma tabla", "Solo columnas numéricas"],
    correctAnswer: 0,
    explanation: "Ambas consultas deben tener el mismo número y tipo de columnas.",
  },
  {
    question: "¿Qué es un DBMS?",
    options: [
      "Un sistema de archivos",
      "Un programa para conectarse a una base de datos",
      "Un sistema para gestionar bases de datos",
    ],
    correctAnswer: 2,
    explanation:
      "DBMS significa Database Management System (sistema para gestionar bases de datos) y se encarga de administrar y gestionar bases de datos.",
  },
  {
    question:
      "¿Qué tipo de relación es más adecuada entre tabla usuarios y tabla direcciones si cada usuario tiene una dirección única?",
    options: ["Relación 1:1", "Relación N:M", "Relación 1:N"],
    correctAnswer: 0,
    explanation: "Una relación 1:1 es adecuada cuando un usuario tiene una única dirección.",
  },
  {
    question: "¿Dónde se coloca la clave foránea en una relación 1:N?",
    options: ["En la tabla del lado 'uno'", "En la tabla del lado 'muchos'", "En una tabla extra"],
    correctAnswer: 1,
    explanation: "En una relación 1:N, la tabla del lado 'muchos' contiene la clave foránea.",
  },
  {
    question: "¿Qué resultado se obtiene al usar WHERE con LIKE '%abc%'?",
    options: ["Registros que terminan en 'abc'", "Registros que empiezan con 'abc'", "Registros que contienen 'abc'"],
    correctAnswer: 2,
    explanation: "Se seleccionan los registros que contienen 'abc' en cualquier parte del texto.",
  },
  {
    question: "¿Cuál es una diferencia entre UNION y UNION ALL?",
    options: ["UNION ALL los elimina", "UNION transforma los resultados", "UNION elimina duplicados"],
    correctAnswer: 2,
    explanation: "UNION elimina duplicados, UNION ALL no los elimina.",
  },
  {
    question: "¿Qué combinación de operadores devuelve registros que sean distintos y además cumplan una condición?",
    options: ["LIMIT y OR", "DISTINCT y WHERE", "ORDER BY y LIKE"],
    correctAnswer: 1,
    explanation: "DISTINCT junto con WHERE permite obtener registros únicos que además cumplen una condición.",
  },
  {
    question: "¿Qué hace la función MIN en SQL?",
    options: ["Devuelve el promedio", "Devuelve la suma", "Devuelve el valor mínimo"],
    correctAnswer: 2,
    explanation: "MIN devuelve el valor mínimo de una columna numérica o de fecha.",
  },
  {
    question: "¿Cuál es un ejemplo de uso de autoreferencia?",
    options: [
      "Una tabla intermedia entre empleados",
      "Un campo 'jefe_id' apuntando al mismo empleado",
      "Una relación 1:N entre departamentos",
    ],
    correctAnswer: 1,
    explanation: "Una columna 'jefe_id' en la tabla empleados que apunta al ID de otro empleado.",
  },
  {
    question: "¿Qué hace la sentencia CREATE DATABASE?",
    options: ["Crea una nueva base de datos", "Modifica una base de datos existente", "Conecta a una base de datos"],
    correctAnswer: 0,
    explanation: "CREATE DATABASE crea una nueva base de datos con el nombre especificado.",
  },
  {
    question: "¿Qué comando inicia una transacción en SQL?",
    options: ["START TRANSACTION", "INIT TRANS", "BEGIN SESSION"],
    correctAnswer: 0,
    explanation: "El comando START TRANSACTION se utiliza para iniciar una transacción.",
  },
  {
    question: "¿Qué representa una relación de autoreferencia?",
    options: ["Relaciona dos bases de datos", "Se relaciona consigo misma", "Es una relación externa"],
    correctAnswer: 1,
    explanation: "Es cuando una tabla tiene una clave foránea que apunta a su propia clave primaria.",
  },
  {
    question: "¿Cómo se almacena una relación 1:1 en las tablas?",
    options: ["Con una clave foránea única", "Con múltiples claves primarias", "Usando una tabla intermedia"],
    correctAnswer: 0,
    explanation:
      "Se almacena mediante una clave foránea única en una de las tablas que apunta a la clave primaria de la otra.",
  },
  {
    question: "¿Qué palabra clave se usa para evitar errores si la base ya existe al crearla?",
    options: ["IF NOT EXISTS", "TRY CREATE", "EXISTS OR NOT"],
    correctAnswer: 0,
    explanation: "IF NOT EXISTS evita que se genere un error si la base de datos ya existe.",
  },
  {
    question: "¿Qué permite hacer la sentencia ALTER TABLE?",
    options: ["Insertar filas", "Modificar la estructura", "Eliminar datos"],
    correctAnswer: 1,
    explanation: "ALTER TABLE permite modificar la estructura de una tabla existente.",
  },
  {
    question: "¿Qué clave suele tener una tabla intermedia en relación N:M?",
    options: ["Una clave textual", "Una clave AUTO_INCREMENT", "Una clave compuesta"],
    correctAnswer: 2,
    explanation: "Una clave compuesta formada por las dos claves foráneas.",
  },
  {
    question: "¿Qué estructura principal contiene los datos en una base de datos relacional?",
    options: ["Una tabla", "Un archivo", "Un fila"],
    correctAnswer: 0,
    explanation: "Las tablas son la estructura fundamental que almacena los datos en una base de datos relacional.",
  },
  {
    question: "¿Cuál es la sintaxis correcta para insertar un valor en todas las columnas?",
    options: ["ADD ROW TO tabla (...);", "INSERT INTO tabla VALUES (...);", "INSERT tabla ALL (...);"],
    correctAnswer: 1,
    explanation: "Se debe usar INSERT INTO seguido del nombre de la tabla y los valores entre paréntesis.",
  },
  {
    question: "¿Qué es un TRIGGER en MySQL?",
    options: [
      "Un tipo de índice especial",
      "Instrucciones automáticas al ocurrir un evento",
      "Una función de suma automática",
    ],
    correctAnswer: 1,
    explanation:
      "Es un conjunto de instrucciones que se ejecutan automáticamente en respuesta a ciertos eventos en una tabla.",
  },
  {
    question: "¿Qué hace la palabra clave DISTINCT en una consulta SQL?",
    options: ["Limita la cantidad de filas", "Ordena los resultados", "Devuelve solo valores únicos"],
    correctAnswer: 2,
    explanation: "DISTINCT elimina los registros duplicados y devuelve solo valores únicos.",
  },
  {
    question: "¿Qué necesitas para conectarte a una base de datos en Workbench?",
    options: ["Host, usuario, contraseña", "Nombre de la tabla", "Nombre del archivo"],
    correctAnswer: 0,
    explanation: "Se necesita host, usuario, contraseña y nombre de base de datos para establecer una conexión.",
  },
]

export default function TestExtra() {
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
              <h2 className="text-3xl font-bold text-foreground">Resultados del Test</h2>
              <div className="text-6xl font-bold text-green-600">{percentage}%</div>
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
                <Button onClick={resetQuiz} size="lg" className="bg-green-600 hover:bg-green-700">
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
          <h1 className="text-2xl font-bold text-foreground">Bases de Datos - TEST EXTRA</h1>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-muted-foreground">
            Pregunta {currentQuestion + 1} de {questions.length}
          </span>
          <span className="text-sm font-medium text-muted-foreground">Puntuación: {score}</span>
        </div>

        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-green-600 h-2 rounded-full transition-all duration-300"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          />
        </div>

        <Card className="p-6 md:p-8 bg-card border-border">
          <div className="space-y-6">
            <h2 className="text-xl md:text-2xl font-semibold text-foreground">{question.question}</h2>

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
                            ? "border-green-600 bg-green-600/10"
                            : "border-border hover:border-green-600/50 bg-card"
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

            {isAnswered && (
              <div className="mt-4 p-4 rounded-lg bg-muted/50 border border-border">
                <p className="text-sm font-semibold text-foreground mb-2">Explicación:</p>
                <p className="text-sm text-muted-foreground">{question.explanation}</p>
              </div>
            )}

            <div className="flex gap-3 pt-4">
              <Button
                onClick={previousQuestion}
                disabled={currentQuestion === 0}
                variant="outline"
                className="flex-1 bg-transparent"
              >
                Anterior
              </Button>
              <Button onClick={nextQuestion} disabled={!isAnswered} className="flex-1 bg-green-600 hover:bg-green-700">
                {currentQuestion === questions.length - 1 ? "Ver Resultados" : "Siguiente pregunta"}
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
