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
    question: "1. ¿Qué interfaz JDBC representa una conexión activa con la base de datos?",
    options: ["Connection", "Statement", "ResultSet", "DriverManager"],
    correctAnswer: 0,
  },
  {
    question: "2. ¿Qué método de ResultSet permite obtener valores de tipo String?",
    options: ["getText()", "readString()", "getString()", "nextString()"],
    correctAnswer: 2,
  },
  {
    question: "3. ¿Qué objeto JDBC se usa normalmente tras crear una conexión?",
    options: ["Driver", "Statement", "SQLException", "Serializable"],
    correctAnswer: 1,
  },
  {
    question: "4. ¿Qué sucede si executeQuery() se usa con un INSERT?",
    options: ["Devuelve filas afectadas", "Produce error", "Cierra la conexión", "Ignora la consulta"],
    correctAnswer: 1,
  },
  {
    question: "5. ¿Qué tipo de consultas suele ejecutar PreparedStatement?",
    options: ["Consultas parametrizadas", "Consultas XML", "Consultas sin SQL", "Consultas BSON"],
    correctAnswer: 0,
  },
  {
    question: "6. ¿Qué componente JDBC traduce llamadas Java al SGBD?",
    options: ["Connection", "Driver JDBC", "ResultSet", "Statement"],
    correctAnswer: 1,
  },
  {
    question: "7. ¿Qué método de ResultSet suele utilizarse antes de leer datos?",
    options: ["forward()", "next()", "move()", "read()"],
    correctAnswer: 1,
  },
  {
    question: "8. ¿Qué excepción puede producirse al trabajar con ResultSet?",
    options: ["SQLException", "DOMException", "IOException", "EOFException"],
    correctAnswer: 0,
  },
  {
    question: "9. ¿Qué ventaja tiene reutilizar PreparedStatement?",
    options: ["Reduce compilación repetida de consultas", "Elimina transacciones", "Evita ResultSet", "Sustituye commit()"],
    correctAnswer: 0,
  },
  {
    question: "10. ¿Qué flujo pertenece a serialización de objetos?",
    options: ["Scanner", "BufferedReader", "ObjectInputStream", "FileWriter"],
    correctAnswer: 2,
  },
  {
    question: "11. ¿Qué ocurre si un atributo es transient?",
    options: ["Se almacena dos veces", "No se serializa", "Se convierte en XML", "Se cifra automáticamente"],
    correctAnswer: 1,
  },
  {
    question: "12. ¿Qué interfaz Java permite marcar objetos serializables?",
    options: ["Runnable", "Cloneable", "Serializable", "Closable"],
    correctAnswer: 2,
  },
  {
    question: "13. ¿Qué API XML basada en eventos consume menos memoria?",
    options: ["DOM", "JAXB", "SAX", "DTD"],
    correctAnswer: 2,
  },
  {
    question: "14. ¿Qué formato de datos usa llaves y pares clave-valor?",
    options: ["XML", "JSON", "CSV", "DTD"],
    correctAnswer: 1,
  },
  {
    question: "15. ¿Qué librería Java permite convertir JSON fácilmente?",
    options: ["Gson", "JDBC", "SAX", "NIO"],
    correctAnswer: 0,
  },
  {
    question: "16. ¿Qué base de datos del temario es NoSQL?",
    options: ["MySQL", "Oracle", "MongoDB", "PostgreSQL"],
    correctAnswer: 2,
  },
  {
    question: "17. ¿Qué estructura almacena MongoDB?",
    options: ["Filas", "Documentos", "Tablas", "Columnas"],
    correctAnswer: 1,
  },
  {
    question: "18. ¿Qué operación MongoDB borra un documento?",
    options: ["insertOne()", "findOne()", "updateOne()", "deleteOne()"],
    correctAnswer: 3,
  },
  {
    question: "19. ¿Qué operación MongoDB modifica documentos?",
    options: ["insertOne()", "updateOne()", "deleteOne()", "find()"],
    correctAnswer: 1,
  },
  {
    question: "20. ¿Qué ventaja suele tener JSON frente a XML?",
    options: ["Mayor tamaño", "Más etiquetas", "Parseo más ligero", "Uso obligatorio de DTD"],
    correctAnswer: 2,
  },
  {
    question: "21. ¿Qué paquete Java moderno sustituye parte de java.io?",
    options: ["java.awt", "java.nio.file", "java.sql", "java.net"],
    correctAnswer: 1,
  },
  {
    question: "22. ¿Qué clase de NIO representa archivos y rutas?",
    options: ["Files", "Directory", "Path", "Scanner"],
    correctAnswer: 2,
  },
  {
    question: "23. ¿Qué clase de NIO contiene métodos utilitarios sobre archivos?",
    options: ["Files", "Path", "Directory", "Route"],
    correctAnswer: 0,
  },
  {
    question: "24. ¿Qué ventaja aporta NIO respecto a IO clásica?",
    options: ["Acceso no bloqueante", "Elimina excepciones", "Evita buffers", "Sustituye JDBC"],
    correctAnswer: 0,
  },
  {
    question: "25. ¿Qué método JDBC confirma cambios de transacción?",
    options: ["rollback()", "commit()", "close()", "flush()"],
    correctAnswer: 1,
  },
  {
    question: "26. ¿Qué método JDBC revierte cambios pendientes?",
    options: ["rollback()", "commit()", "restart()", "undo()"],
    correctAnswer: 0,
  },
  {
    question: "27. ¿Qué patrón mejora separación entre persistencia y negocio?",
    options: ["DAO", "Factory", "Singleton", "MVC"],
    correctAnswer: 0,
  },
  {
    question: "28. ¿Qué método de ResultSet obtiene números enteros?",
    options: ["getNumber()", "readint()", "getString()", "getInt()"],
    correctAnswer: 3,
  },
  {
    question: "29. ¿Qué tecnología representa datos mediante etiquetas?",
    options: ["JSON", "XML", "CSV", "BSON"],
    correctAnswer: 1,
  },
  {
    question: "30. ¿Qué método JDBC se usa para cerrar conexiones?",
    options: ["finish()", "stop()", "close()", "destroy()"],
    correctAnswer: 2,
  },
  {
    question: "31. ¿Qué problema intenta evitar el pool de conexiones?",
    options: ["Creación constante de conexiones", "Uso de SQL", "Errores XML", "Serialización"],
    correctAnswer: 0,
  },
  {
    question: "32. ¿Qué excepción pertenece al acceso a archivos?",
    options: ["SQLException", "IOException", "MongoException", "ParseException"],
    correctAnswer: 1,
  },
  {
    question: "33. ¿Qué característica tienen las bases NoSQL?",
    options: ["Escalabilidad horizontal", "Uso obligatorio de tablas", "Dependencia total de SQL", "Rigidez estructural"],
    correctAnswer: 0,
  },
  {
    question: "34. ¿Qué método de MongoDB inserta un documento?",
    options: ["insertOne()", "updateOne()", "deleteOne()", "findOne()"],
    correctAnswer: 0,
  },
  {
    question: "35. ¿Qué método de MongoDB consulta documentos?",
    options: ["insertOne()", "find()", "deleteOne()", "drop()"],
    correctAnswer: 1,
  },
  {
    question: "36. ¿Qué API XML carga el documento completo antes de procesarlo?",
    options: ["SAX", "DOM", "JSON", "DTD"],
    correctAnswer: 1,
  },
  {
    question: "37. ¿Qué API XML procesa secuencialmente el documento?",
    options: ["DOM", "JDBC", "SAX", "JSON"],
    correctAnswer: 2,
  },
  {
    question: "38. ¿Qué objeto JDBC ejecuta sentencias SQL simples?",
    options: ["Connection", "Statement", "PreparedStatement", "ResultSet"],
    correctAnswer: 1,
  },
  {
    question: "39. ¿Qué método de PreparedStatement asigna enteros?",
    options: ["setString()", "setInt()", "getint()", "putint()"],
    correctAnswer: 1,
  },
  {
    question: "40. ¿Qué método de PreparedStatement asigna texto?",
    options: ["setString()", "getString()", "putString()", "readString()"],
    correctAnswer: 0,
  },
  {
    question: "41. ¿Qué tecnología del temario usa documentos BSON?",
    options: ["XML", "JDBC", "MongoDB", "JSON"],
    correctAnswer: 2,
  },
  {
    question: "42. ¿Qué método JDBC suele utilizarse con consultas parametrizadas?",
    options: ["prepareStatement()", "executeUpdate()", "executeQuery()", "createStatement()"],
    correctAnswer: 0,
  },
  {
    question: "43. ¿Qué ventaja tiene DAO en aplicaciones grandes?",
    options: ["Separar persistencia de negocio", "Eliminar SQL", "Evitar conexiones", "Sustituir ResultSet"],
    correctAnswer: 0,
  },
  {
    question: "44. ¿Qué característica tiene JSON frente a XML?",
    options: ["Mayor verbosidad", "Menor ligereza", "Parseo más ligero", "Uso obligatorio de etiquetas"],
    correctAnswer: 2,
  },
  {
    question: "45. ¿Qué método elimina documentos en MongoDB según el temario?",
    options: ["removeDocument()", "deleteOne()", "dropDocument()", "deleteRow()"],
    correctAnswer: 1,
  },
  {
    question: "46. ¿Qué clase JDBC se usa para consultas parametrizadas?",
    options: ["Connection", "PreparedStatement", "ResultSet", "DriverManager"],
    correctAnswer: 1,
  },
  {
    question: "47. ¿Qué propiedad garantiza persistencia tras fallo del sistema en transacciones?",
    options: ["Atomicidad", "Consistencia", "Durabilidad", "Aislamiento"],
    correctAnswer: 2,
  },
  {
    question: "48. ¿Qué hace ResultSet.next() cuando no quedan registros?",
    options: ["Devuelve false", "Lanza excepción", "Cierra conexión", "Reinicia ResultSet"],
    correctAnswer: 0,
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

export default function AccesoDatosSimulacro1Quiz() {
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
            <h2 className="text-xl text-muted-foreground">Simulacro I</h2>
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
