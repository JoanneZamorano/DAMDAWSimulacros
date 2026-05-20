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
    question: "1. ¿Qué método de Connection permite comprobar si la conexión sigue abierta?",
    options: ["checkConnection()", "isClosed()", "connectionState()", "isOpen()"],
    correctAnswer: 1,
  },
  {
    question: "2. ¿Qué devuelve isClosed() cuando la conexión está activa?",
    options: ["true", "false", "null", "SQLException"],
    correctAnswer: 1,
  },
  {
    question: "3. ¿Qué método JDBC crea consultas preparadas con parámetros?",
    options: ["executeQuery()", "prepareStatement()", "createQuery()", "buildSQL()"],
    correctAnswer: 1,
  },
  {
    question: "4. ¿Qué ventaja tiene usar parámetros en PreparedStatement?",
    options: ["Elimina conexiones", "Mejora seguridad y legibilidad", "Evita ResultSet", "Sustituye SQL"],
    correctAnswer: 1,
  },
  {
    question: "5. ¿Qué método de PreparedStatement se usa para valores decimales?",
    options: ["getDouble()", "putDouble()", "setDouble()", "readDouble()"],
    correctAnswer: 2,
  },
  {
    question: "6. ¿Qué método de PreparedStatement se usa para valores enteros?",
    options: ["getInt()", "setInt()", "putint()", "nextInt()"],
    correctAnswer: 1,
  },
  {
    question: "7. ¿Qué método de PreparedStatement se usa para texto?",
    options: ["getString()", "putString()", "setString()", "readString()"],
    correctAnswer: 2,
  },
  {
    question: "8. ¿Qué método permite recuperar un valor String desde ResultSet?",
    options: ["readString()", "nextString()", "setString()", "getString()"],
    correctAnswer: 3,
  },
  {
    question: "9. ¿Qué método permite recuperar un valor entero desde ResultSet?",
    options: ["readint()", "getint()", "setInt()", "nextInt()"],
    correctAnswer: 1,
  },
  {
    question: "10. ¿Qué ocurre si next() no encuentra más registros?",
    options: ["Devuelve null", "Devuelve false", "Reinicia ResultSet", "Lanza IOException"],
    correctAnswer: 1,
  },
  {
    question: "11. ¿Qué método JDBC suele utilizarse para cerrar ResultSet?",
    options: ["destroy()", "finish()", "close()", "stop()"],
    correctAnswer: 2,
  },
  {
    question: "12. ¿Qué excepción controla errores relacionados con SQL?",
    options: ["IOException", "SQLException", "EOFException", "ParseException"],
    correctAnswer: 1,
  },
  {
    question: "13. ¿Qué método confirma definitivamente una transacción?",
    options: ["rollback()", "close()", "execute()", "commit()"],
    correctAnswer: 3,
  },
  {
    question: "14. ¿Qué método deshace operaciones pendientes?",
    options: ["rollback()", "commit()", "restart()", "undo()"],
    correctAnswer: 0,
  },
  {
    question: "15. ¿Qué patrón desacopla persistencia y lógica de negocio?",
    options: ["MVC", "DAO", "Factory", "Singleton"],
    correctAnswer: 1,
  },
  {
    question: "16. ¿Qué ventaja principal tiene DAO?",
    options: ["Elimina SQL", "Facilita mantenimiento", "Evita conexiones", "Sustituye JDBC"],
    correctAnswer: 1,
  },
  {
    question: "17. ¿Qué interfaz permite serializar objetos Java?",
    options: ["Runnable", "Serializable", "Cloneable", "Readable"],
    correctAnswer: 1,
  },
  {
    question: "18. ¿Qué palabra clave evita serializar atributos?",
    options: ["static", "transient", "volatile", "final"],
    correctAnswer: 1,
  },
  {
    question: "19. ¿Qué flujo permite guardar objetos serializados?",
    options: ["BufferedReader", "Scanner", "FileReader", "ObjectOutputStream"],
    correctAnswer: 3,
  },
  {
    question: "20. ¿Qué flujo permite recuperar objetos serializados?",
    options: ["BufferedWriter", "ObjectInputStream", "PrintWriter", "FileWriter"],
    correctAnswer: 1,
  },
  {
    question: "21. ¿Qué excepción puede aparecer al llegar al final de un stream binario?",
    options: ["SQLException", "EOFException", "DOMException", "MongoException"],
    correctAnswer: 1,
  },
  {
    question: "22. ¿Qué clase permite leer texto carácter a carácter?",
    options: ["Scanner", "ObjectInputStream", "BufferedOutputStream", "FileReader"],
    correctAnswer: 3,
  },
  {
    question: "23. ¿Qué clase permite escribir texto en archivos?",
    options: ["FileInputStream", "BufferedReader", "FileWriter", "Scanner"],
    correctAnswer: 2,
  },
  {
    question: "24. ¿Qué ventaja aporta BufferedReader?",
    options: ["Elimina excepciones", "Usa BSON", "Reduce accesos físicos", "Serializa objetos"],
    correctAnswer: 2,
  },
  {
    question: "25. ¿Qué ventaja aporta BufferedWriter?",
    options: ["Evita SQL", "Mejora eficiencia de escritura", "Elimina buffers", "Usa XML"],
    correctAnswer: 1,
  },
  {
    question: "26. ¿Qué API XML representa documentos mediante nodos?",
    options: ["SAX", "JSON", "DOM", "DTD"],
    correctAnswer: 2,
  },
  {
    question: "27. ¿Qué API XML funciona mediante eventos?",
    options: ["SAX", "DOM", "JDBC", "JSON"],
    correctAnswer: 0,
  },
  {
    question: "28. ¿Qué ventaja tiene SAX en XML extensos?",
    options: ["Permite modificar nodos", "Consume menos memoria", "Carga todo el documento", "Usa BSON"],
    correctAnswer: 1,
  },
  {
    question: "29. ¿Qué representa un nodo en DOM?",
    options: ["Consulta SQL", "Elemento XML", "Documento BSON", "Transacción"],
    correctAnswer: 1,
  },
  {
    question: "30. ¿Qué formato usa etiquetas de apertura y cierre?",
    options: ["JSON", "CSV", "XML", "BSON"],
    correctAnswer: 2,
  },
  {
    question: "31. ¿Qué formato usa pares clave-valor?",
    options: ["XML", "DTD", "JSON", "DOM"],
    correctAnswer: 2,
  },
  {
    question: "32. ¿Qué símbolo delimita objetos JSON?",
    options: ["[] (Corchetes)", "{} (Llaves)", "<> (Signos de mayor y menor)", "() (Paréntesis)"],
    correctAnswer: 1,
  },
  {
    question: "33. ¿Qué símbolo delimita arrays JSON?",
    options: ["{} (Llaves)", "[] (Corchetes)", "() (Paréntesis)", "<> (Signos de mayor y menor)"],
    correctAnswer: 1,
  },
  {
    question: "34. ¿Qué librería Java suele utilizarse con JSON?",
    options: ["Swing", "JDBC", "Gson", "SAX"],
    correctAnswer: 2,
  },
  {
    question: "35. ¿Qué característica distingue MongoDB?",
    options: ["Usa tablas", "Depende de joins", "Es orientada a documentos", "Solo guarda XML"],
    correctAnswer: 2,
  },
  {
    question: "36. ¿Qué estructura almacena MongoDB?",
    options: ["Filas", "Documentos BSON", "Columnas", "Tuplas"],
    correctAnswer: 1,
  },
  {
    question: "37. ¿Qué operación inserta documentos en MongoDB?",
    options: ["find()", "insertOne()", "deleteOne()", "drop()"],
    correctAnswer: 1,
  },
  {
    question: "38. ¿Qué operación consulta documentos en MongoDB?",
    options: ["insertOne()", "updateOne()", "find()", "drop()"],
    correctAnswer: 2,
  },
  {
    question: "39. ¿Qué operación modifica documentos existentes?",
    options: ["find()", "insertOne()", "updateOne()", "deleteOne()"],
    correctAnswer: 2,
  },
  {
    question: "40. ¿Qué operación elimina documentos?",
    options: ["find()", "deleteOne()", "insertOne()", "drop()"],
    correctAnswer: 1,
  },
  {
    question: "41. ¿Qué ventaja tiene BSON respecto a JSON?",
    options: ["Más etiquetas", "Menor velocidad", "Mejor soporte de tipos", "Usa XML"],
    correctAnswer: 2,
  },
  {
    question: "42. ¿Qué ventaja tienen algunas bases NoSQL?",
    options: ["Dependencia relacional", "Uso obligatorio de SQL", "Escalabilidad horizontal", "Rigidez estructural"],
    correctAnswer: 2,
  },
  {
    question: "43. ¿Qué método JDBC ejecuta consultas SELECT?",
    options: ["executeUpdate()", "runSelect()", "executeQuery()", "executeSQL()"],
    correctAnswer: 2,
  },
  {
    question: "44. ¿Qué método JDBC ejecuta INSERT  UPDATE?",
    options: ["executeQuery()", "executeUpdate()", "runUpdate()", "executeSelect()"],
    correctAnswer: 1,
  },
  {
    question: "45. ¿Qué devuelve executeUpdate()?",
    options: ["ResultSet", "Número de filas afectadas", "Connection", "Documento BSON"],
    correctAnswer: 1,
  }
];

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export default function AccesoDatosSimulacro2Quiz() {
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
              <span className="text-foreground">Acceso a Datos</span>
            </h1>
            <h2 className="text-xl text-muted-foreground">Simulacro II</h2>
            <p className="text-muted-foreground text-lg">Persistencia, JDBC, Hibernate y ficheros</p>

            <div className="space-y-4 text-left py-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">{questions.length} Preguntas</p>
                  <p className="text-sm text-muted-foreground">Todos los conceptos clave</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Preguntas Aleatorizadas</p>
                  <p className="text-sm text-muted-foreground">Cada sesion es diferente</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyan-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Retroalimentacion Inmediata</p>
                  <p className="text-sm text-muted-foreground">Aprende mientras practicas</p>
                </div>
              </div>
            </div>

            <Button
              onClick={startQuiz}
              size="lg"
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold"
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
              <div className="text-6xl font-bold text-cyan-500 mb-2">{Math.max(0, percentage)}%</div>
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
              {percentage >= 90 && <p className="text-lg text-foreground">Excelente. Dominas Acceso a Datos.</p>}
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
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold"
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
          <span className="text-cyan-500">{answeredCount} respondidas</span>
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
                      ${!showFeedback && "hover:border-cyan-500 hover:bg-accent cursor-pointer"}
                      ${showFeedback && "cursor-not-allowed"}
                      ${isSelected && !showFeedback && "border-cyan-500 bg-accent"}
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
                className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white"
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
            className="h-full bg-cyan-500 transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
