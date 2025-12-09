"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, ChevronLeft } from "lucide-react"
import Link from "next/link"

const questions = [
  {
    question: "En el proceso de diseño de bases de datos, ¿qué diferencia existe entre el diseño conceptual y el diseño lógico?",
    options: [
      "El conceptual es más específico que el lógico",
      "El conceptual representa la realidad sin considerar el SGBD específico, mientras que el lógico se adapta a un SGBD concreto",
      "No existe diferencia entre ambos términos",
      "El lógico siempre precede al conceptual"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuándo es recomendable usar agregación en lugar de una relación ternaria?",
    options: [
      "Siempre que tengamos 3 entidades",
      "Cuando la relación entre dos entidades tiene atributos propios, y esta relación se relaciona con otras entidades",
      "Si tenemos tres entidades, siempre usaremos una relación ternaria",
      "Solo en bases de datos NoSQL"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es la diferencia entre un atributo multivaluado y un atributo compuesto en el MER?",
    options: [
      "No existe diferencia entre ambos tipos",
      "Los multivaluados tienen múltiples valores del mismo tipo, los compuestos se dividen en subatributos",
      "Los compuestos siempre son claves primarias",
      "Los multivaluados solo pueden ser atributos derivados"
    ],
    correctAnswer: 1
  },
  {
    question: "En el modelo relacional, ¿qué significa que un atributo sea \"atómico\"?",
    options: [
      "Que pertenece a la clave primaria",
      "Que no puede tomar el valor NULL",
      "Que no puede dividirse en partes más pequeñas con significado dentro del modelo",
      "Que es único en toda la tabla"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué problema principal busca resolver la normalización de bases de datos?",
    options: [
      "Mejorar la velocidad de las consultas exclusivamente",
      "Reducir la redundancia de datos y evitar anomalías de inserción, actualización y borrado",
      "Aumentar el tamaño de almacenamiento",
      "Simplificar las consultas SQL"
    ],
    correctAnswer: 1
  },
  {
    question: "En las jerarquías ISA, ¿qué significa que una especialización sea \"total con exclusividad\"?",
    options: [
      "Solo algunas instancias del supertipo pertenecen a algún subtipo, y pueden pertenecer a múltiples subtipos",
      "Todas las instancias del supertipo deben pertenecer a exactamente un subtipo",
      "Es equivalente a una especialización parcial con solapamiento",
      "Solo se puede implementar usando triggers en la base de datos"
    ],
    correctAnswer: 1
  },
  {
    question: "SELECT IDsuperFK, COUNT(*) AS total_pedidos FROM PEDIDOS GROUP BY IDsuperFK ORDER BY total_pedidos DESC LIMIT 1;",
    options: [
      "Ver el supermercado con más pedidos",
      "Mostrar todos los pedidos del supermercado con menos actividad",
      "Mostrar todos los pedidos ordenados por fecha de entrega",
      "Agrupar los pedidos por producto y mostrar el más vendido"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuándo se debe aplicar una restricción de \"inclusión\" entre dos relaciones en el MERE?",
    options: [
      "Cuando dos entidades no pueden relacionarse bajo ninguna circunstancia",
      "Cuando para que dos instancias específicas se asocien por una relación, esas mismas instancias deben haber estado asociadas previamente por otra relación",
      "Cuando queremos que una entidad participe en todas las relaciones disponibles",
      "Solo en relaciones de cardinalidad 1:1"
    ],
    correctAnswer: 1
  },
  {
    question: "En el MER, ¿qué diferencia hay entre participación total y participación parcial en una relación?",
    options: [
      "La participación total significa que todas las instancias de la entidad deben participar en la relación, la parcial que es opcional",
      "La participación total solo se da en relaciones 1:1, la parcial en relaciones M:N",
      "No existe diferencia práctica entre ambas",
      "La participación total requiere claves compuestas, la parcial no"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cuál es el propósito principal de las restricciones (constraints) en una tabla?",
    options: [
      "Acelerar las consultas automáticamente",
      "Reducir el tamaño de almacenamiento",
      "Garantizar la integridad y validez de los datos",
      "Facilitar la programación de aplicaciones"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cómo se clasifican los SUB-lenguajes SQL?",
    options: [
      "Son sinónimos del mismo concepto",
      "DDL: estructura, DML: datos, DCL: acceso, TCL: transacciones",
      "Solo DDL y DML son importantes",
      "Se usan únicamente en NoSQL"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál de los siguientes tipos de datos es más apropiado para almacenar un precio que pueda reflejar céntimos de euro?",
    options: [
      "INT",
      "FLOAT",
      "DECIMAL(10,2)",
      "VARCHAR(20)"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cómo se escriben comentarios en SQL?",
    options: [
      "Solo se permiten con //",
      "Línea: --, Bloque: /* */",
      "Afectan el rendimiento de consultas",
      "SQL no permite comentarios"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué ocurre si ejecutas UPDATE sin la cláusula WHERE?",
    options: [
      "Se produce un error de sintaxis",
      "Solo se actualiza el primer registro",
      "Se actualizan TODAS las filas de la tabla",
      "Se actualiza solo la última fila insertada"
    ],
    correctAnswer: 2
  },
  {
    question: "SELECT A.IDarticulo, A.nombre FROM ARTICULOS A LEFT JOIN PEDIDO_CONSTA_DE P ON A.IDarticulo = P.IDarticuloFK WHERE P.IDarticuloFK IS NULL;",
    options: [
      "Mostrar todos los artículos que han sido pedidos al menos una vez",
      "Mostrar los artículos nunca pedidos",
      "Eliminar los artículos que no tienen pedidos registrados",
      "Agrupar los artículos por nombre y contar cuántas veces han sido pedidos"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué comando es más eficiente para eliminar TODOS los datos de una tabla manteniendo su estructura?",
    options: [
      "DELETE FROM tabla",
      "TRUNCATE TABLE tabla",
      "DROP TABLE tabla",
      "UPDATE tabla SET columna = NULL"
    ],
    correctAnswer: 1
  },
  {
    question: "SELECT * FROM articulos WHERE precio = (SELECT MAX(precio) FROM articulos);",
    options: [
      "Muestra los artículos cuyo precio es igual al precio medio de todos los artículos",
      "Muestra los artículos con precio más bajo",
      "Muestra los artículos agrupados por precio y elimina los duplicados",
      "Muestra los artículos cuyo precio es igual al precio máximo de todos los artículos"
    ],
    correctAnswer: 3
  },
  {
    question: "En el comando INSERT INTO, ¿qué sucede si no se especifican las columnas en la lista?",
    options: [
      "Se produce un error automáticamente",
      "Se deben proporcionar valores para todas las columnas en el orden de creación de la tabla",
      "Solo se insertan valores NULL",
      "Se ignoran los valores proporcionados"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué patrón LIKE filtra nombres con \"a\" en segunda posición y \"e\" en penúltima?",
    options: [
      "'%a%e%'",
      "'_a%e_'",
      "'_a%e'",
      "'a%e'"
    ],
    correctAnswer: 1
  },
  {
    question: "En una consulta con GROUP BY, ¿qué sucede si se incluye una columna en SELECT que no está en GROUP BY ni es una función agregada?",
    options: [
      "La consulta funciona perfectamente",
      "Se obtienen datos duplicados",
      "Genera un error (habitualmente en modo strict: \"only_full_group_by\")",
      "La consulta se ejecuta más lentamente"
    ],
    correctAnswer: 2
  },
  {
    question: "Si tengo una tabla T1 con 10 filas y una tabla T2 con 5 filas, ¿cuántas filas devuelve un CROSS JOIN entre ellas?",
    options: [
      "15 filas",
      "50 filas",
      "10 filas",
      "5 filas"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es el propósito principal de las consultas multitabla con JOIN?",
    options: [
      "Aumentar la velocidad de las consultas",
      "Combinar datos de múltiples tablas relacionadas para obtener información más completa",
      "Reducir el tamaño de la base de datos",
      "Crear copias de seguridad automáticas"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es la sintaxis correcta para un INNER JOIN?",
    options: [
      "SELECT * FROM tabla1 INNER tabla2 ON condicion",
      "SELECT * FROM tabla1 INNER JOIN tabla2 ON condicion",
      "SELECT * FROM tabla1 JOIN INNER tabla2 WHERE condicion",
      "SELECT * FROM tabla1, tabla2 INNER JOIN condicion"
    ],
    correctAnswer: 1
  },
  {
    question: "¿En qué casos es útil un SELF JOIN?",
    options: [
      "Para mejorar el rendimiento de las consultas",
      "Para relaciones jerárquicas o cuando una tabla se relaciona consigo misma",
      "Para eliminar registros duplicados",
      "Para crear índices automáticamente"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Cuál es el propósito principal del DCL (Data Control Language) en SQL?",
    options: [
      "Crear y modificar la estructura de las tablas",
      "Manipular datos mediante INSERT, UPDATE y DELETE",
      "Controlar el acceso a los datos gestionando permisos y roles",
      "Gestionar transacciones en la base de datos"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es la sintaxis correcta en MySQL para crear un usuario que solo pueda conectarse desde localhost y cuya contraseña es 'password'?",
    options: [
      "CREATE USER 'usuario'@'localhost' IDENTIFIED BY 'password';",
      "CREATE USER 'usuario' FROM 'localhost' WITH PASSWORD 'password';",
      "ADD USER 'usuario'@'localhost' PASSWORD 'password';",
      "INSERT USER 'usuario' HOST 'localhost' PASS 'password';"
    ],
    correctAnswer: 0
  },
  {
    question: "SELECT * FROM articulos a WHERE precio = ( SELECT MIN(precio) FROM articulos WHERE categoria = a.categoria );",
    options: [
      "Muestra los artículos con el precio más bajo de toda la tabla",
      "Muestra los artículos de una categoría determinada",
      "Agrupa los artículos por categoría y muestra el promedio de precios",
      "Muestra los artículos cuyo precio es igual al precio mínimo de su categoría"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Cuál es la principal característica de una vista en cuanto al almacenamiento de datos?",
    options: [
      "Almacena datos de forma permanente en disco",
      "Crea una copia temporal de los datos",
      "No almacena físicamente los datos, solo muestra el resultado en tiempo real",
      "Comprime los datos para optimizar el espacio"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué es un bloqueo (lock) en bases de datos?",
    options: [
      "Un error que impide el acceso a la base de datos",
      "Un mecanismo que controla el acceso a los datos evitando modificaciones simultáneas",
      "Una función para encriptar datos",
      "Un comando para eliminar registros"
    ],
    correctAnswer: 1
  },
  {
    question: "SELECT IDarticuloFK, SUM(cantidad_vendida) as cantidad_total FROM Tabla_Detalle_Pedidos GROUP BY IDarticuloFK ORDER BY cantidad_total DESC LIMIT 5;",
    options: [
      "Obtener la cantidad total vendida de cada artículo, y mostrar sólo los 5 más vendidos.",
      "Obtener la cantidad total vendida de cada artículo, y mostrar sólo los 5 menos vendidos.",
      "Agrupar los artículos por categoría y mostrar los menos vendidos",
      "Mostrar todos los artículos sin importar la cantidad, ordenados alfabéticamente"
    ],
    correctAnswer: 0
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
