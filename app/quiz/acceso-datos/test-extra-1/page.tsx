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
    question: "1. ¿Cuál es el propósito fundamental del acceso a datos en aplicaciones Java?",
    options: [
      "Establecer la conexión e intercambio de información entre la aplicación y repositorios de datos",
      "Ejecutar procesos de servidor en máquinas remotas",
      "Diseñar componentes visuales de la interfaz de usuario",
      "Limitar el uso de bases de datos a sistemas relacionales exclusivamente"
    ],
    correctAnswer: 0,
  },
  {
    question: "2. ¿Cuál es el rol principal del JDK en el desarrollo de aplicaciones Java?",
    options: [
      "Proporcionar los componentes y utilidades necesarios para compilar, depurar y ejecutar programas Java",
      "Administrar exclusivamente las conexiones con bases de datos remotas",
      "Compilar código SQL para optimizar consultas",
      "Construir interfaces gráficas complejas sin necesidad de bibliotecas adicionales"
    ],
    correctAnswer: 0,
  },
  {
    question: "3. ¿Qué función desempeña un driver JDBC en la arquitectura de acceso a datos?",
    options: [
      "Actúa como intermediario que posibilita la interacción entre código Java y sistemas gestores de bases de datos",
      "Proporciona un almacén persistente de objetos Java serializados",
      "Ofrece una capa de presentación gráfica para visualizar datos",
      "Define la sintaxis y semántica del lenguaje de programación Java"
    ],
    correctAnswer: 0,
  },
  {
    question: "4. ¿Cuál es la clasificación de PostgreSQL dentro de los sistemas de gestión de bases de datos de codigo abierto?",
    options: [
      "Sistema relacional que organiza los datos en tablas con esquema definido",
      "Base de datos NoSQL centrada en el almacenamiento de documentos JSON",
      "Sistema distribuido sin esquema fijo que prioriza la escalabilidad horizontal",
      "Base de datos jerárquica con estructura de árbol de nodos"
    ],
    correctAnswer: 0,
  },
  {
    question: "5. En el modelo relacional, ¿qué concepto del mundo real representa una tabla?",
    options: [
      "Una entidad o tipo de objeto del dominio, cuyos atributos son las columnas y cada fila es una instancia",
      "Un índice físico que acelera el acceso a los registros almacenados en disco",
      "Un procedimiento almacenado que agrupa sentencias SQL precompiladas",
      "Un log transaccional que registra los cambios realizados sobre los datos"
    ],
    correctAnswer: 0,
  },
  {
    question: "6. ¿Cuál es la función específica de la cláusula WHERE en una sentencia SQL?",
    options: [
      "Especificar las condiciones lógicas que deben cumplir los registros recuperados",
      "Determinar el orden secuencial de las filas en el resultado",
      "Enumerar y seleccionar los campos a mostrar",
      "Agrupar filas según criterios de agregación"
    ],
    correctAnswer: 0,
  },
  {
    question: "7. ¿Cuál es la característica distintiva de un LEFT JOIN en comparación con otros tipos de uniones?",
    options: [
      "Preserva la totalidad de registros de la tabla izquierda, incluyendo aquellos sin correspondencia en la tabla derecha",
      "Devuelve exclusivamente las filas con coincidencia entre ambas tablas",
      "Prioriza los registros de la tabla derecha sobre la izquierda",
      "Filtra y elimina todos los valores NULL del resultado"
    ],
    correctAnswer: 0,
  },
  {
    question: "8. ¿Cuál es la función principal de una colección dentro de una base de datos MongoDB?",
    options: [
      "Indexar campos para mejorar búsquedas",
      "Agrupar un conjunto de documentos relacionados",
      "Definir restricciones de integridad referencial",
      "Ejecutar operaciones de respaldo automático"
    ],
    correctAnswer: 1,
  },
  {
    question: "9. El acrónimo CRUD en desarrollo de aplicaciones se refiere a:",
    options: [
      "Componentes de Recursos Únicos Distribuidos",
      "Operaciones fundamentales de manipulación de datos",
      "Capas de Respuesta Universal de Datos",
      "Configuraciones de Rutas Específicas de URLs"
    ],
    correctAnswer: 1,
  },
  {
    question: "10. ¿Cuál es la característica distintiva de una arquitectura REST frente a otros estilos de servicios web?",
    options: [
      "Expone recursos identificables por URIs mediante comunicación sin estado sobre HTTP",
      "Mantiene una sesión persistente en el servidor entre peticiones del cliente",
      "Requiere un contrato WSDL previo para definir las operaciones disponibles",
      "Utiliza exclusivamente XML como formato de intercambio de datos"
    ],
    correctAnswer: 0,
  },
  {
    question: "11. ¿Qué método HTTP se emplea cuando se desea recuperar información de un servidor?",
    options: [
      "GET",
      "POST",
      "PATCH",
      "DELETE"
    ],
    correctAnswer: 0,
  },
  {
    question: "12. ¿Cuál es el propósito del verbo HTTP POST en el contexto de APIs REST?",
    options: [
      "Eliminar recursos existentes",
      "Obtener información del servidor",
      "Añadir nuevos recursos al servidor",
      "Validar la integridad de datos"
    ],
    correctAnswer: 2,
  },
  {
    question: "13. ¿Cuál es la función principal de Node.js en el desarrollo de aplicaciones web?",
    options: [
      "Compilar y transpilar código TypeScript a JavaScript nativo",
      "Actuar como entorno de ejecución de JavaScript en el lado del servidor",
      "Renderizar componentes de interfaz de usuario en el navegador",
      "Gestionar el enrutamiento de peticiones en el protocolo HTTP"
    ],
    correctAnswer: 1,
  },
  {
    question: "14. ¿Cuál es la función de Express en un proyecto Node.js?",
    options: [
      "Compilador de módulos JavaScript",
      "Marco de trabajo para construir servidores y APIs",
      "Gestor de versiones de dependencias",
      "Herramienta de empaquetamiento de aplicaciones"
    ],
    correctAnswer: 1,
  },
  {
    question: "15. ¿Qué información se debe proteger almacenándola en un archivo .env?",
    options: [
      "Código fuente comentado",
      "Rutas públicas accesibles",
      "Credenciales, claves API y datos sensibles",
      "Archivos de documentación técnica"
    ],
    correctAnswer: 2,
  },
  {
    question: "16. ¿Cuál es la consecuencia de no implementar un manejo adecuado de excepciones en una API?",
    options: [
      "Incrementa significativamente la velocidad de respuesta",
      "Optimiza automáticamente las consultas a base de datos",
      "Expone fallos no controlados que degradan experiencia y seguridad",
      "Reduce la carga de procesamiento del servidor"
    ],
    correctAnswer: 2,
  },
  {
    question: "17. ¿Cuál es el efecto de ejecutar una consulta SQL con una cláusula WHERE en los resultados?",
    options: [
      "Ordena los registros según columna especificada",
      "Aplica condiciones lógicas para seleccionar registros específicos",
      "Agrupa registros por categoría automáticamente",
      "Calcula valores agregados como suma o promedio"
    ],
    correctAnswer: 1,
  },
  {
    question: "18. ¿Qué operación realiza GROUP BY en una consulta SQL?",
    options: [
      "Elimina filas duplicadas de los resultados",
      "Agrupa filas compartiendo valores comunes en columnas especificadas",
      "Ordena resultados de forma descendente",
      "Limita el número de registros devueltos"
    ],
    correctAnswer: 1,
  },
  {
    question: "19. ¿Cuál es la diferencia fundamental entre las cláusulas WHERE y HAVING en SQL?",
    options: [
      "WHERE filtra registros tras el agrupamiento; HAVING antes",
      "WHERE actúa antes del agrupamiento; HAVING después",
      "HAVING solo funciona con datos numéricos",
      "No existe diferencia práctica entre ambas"
    ],
    correctAnswer: 1,
  },
  {
    question: "20. ¿Qué formato de serialización utilizan mayoritariamente las APIs REST para intercambiar datos?",
    options: [
      "XML con esquemas complejos",
      "JSON por su ligereza y estructura jerárquica",
      "CSV para compatibilidad con hojas de cálculo",
      "Binario comprimido para optimización"
    ],
    correctAnswer: 1,
  },
  {
    question: "21. ¿Cuál es la herramienta específicamente diseñada para realizar pruebas y depuración de APIs REST?",
    options: [
      "Git para control de versiones",
      "Postman para enviar solicitudes y analizar respuestas",
      "Visual Studio Code como editor de texto",
      "MongoDB Compass para gestión de bases de datos"
    ],
    correctAnswer: 1,
  },
  {
    question: "22. ¿Cuál es el propósito de una clave primaria (PK) en una tabla?",
    options: [
      "Optimizar la velocidad de búsqueda en todas las consultas",
      "Identificar de forma única cada fila en la tabla y garantizar integridad",
      "Permitir que una tabla tenga múltiples copias de los mismos datos",
      "Establecer la conexión entre dos tablas diferentes"
    ],
    correctAnswer: 1,
  },
  {
    question: "23. ¿Qué función cumple una clave foránea (FK) en la base de datos?",
    options: [
      "Almacenar datos cifrados que solo el administrador puede ver",
      "Crear una referencia a la clave primaria de otra tabla estableciendo relaciones",
      "Duplicar automáticamente filas entre tablas relacionadas",
      "Permitir que una tabla acceda a todas las columnas de otra tabla"
    ],
    correctAnswer: 1,
  },
  {
    question: "24. En el diseño de bases de datos relacionales, ¿qué tipo de relación entre tablas se implementa colocando la clave primaria de una tabla como clave foránea en otra, y es la más habitual en sistemas reales?",
    options: [
      "Relación uno a uno",
      "Relación uno a muchos",
      "Relación muchos a muchos",
      "Relación reflexiva o autoreferencial"
    ],
    correctAnswer: 1,
  },
  {
    question: "25. ¿Cuál es el propósito de la cláusula WHERE en una sentencia SQL?",
    options: [
      "Ordenar los resultados de forma ascendente o descendente",
      "Filtrar las filas que cumplen una condición específica",
      "Agrupar registros por un atributo determinado",
      "Limitar el número de filas devueltas por la consulta"
    ],
    correctAnswer: 1,
  },
  {
    question: "26. ¿Qué función desempeña la cláusula ORDER BY en SQL?",
    options: [
      "Selecciona solo las filas que tienen valores únicos",
      "Ordena los resultados de la consulta según una o más columnas en orden ascendente o descendente",
      "Agrupa registros por una columna y aplica funciones de agregación",
      "Combina datos de dos tablas basándose en una condición de igualdad"
    ],
    correctAnswer: 1,
  },
  {
    question: "27. ¿Cuál es el objetivo de la palabra clave DISTINCT en una consulta SQL?",
    options: [
      "Eliminar filas que no cumplen la condición WHERE",
      "Eliminar duplicados del resultado de la consulta",
      "Crear una nueva tabla con los resultados únicos",
      "Separar los resultados en diferentes particiones"
    ],
    correctAnswer: 1,
  },
  {
    question: "28. ¿Qué efecto produce la cláusula LIMIT en una consulta SQL?",
    options: [
      "Filtra registros basándose en condiciones lógicas",
      "Restringe el número máximo de filas que devuelve la consulta",
      "Agrupa registros y aplica funciones de agregación",
      "Ordena automáticamente los resultados de forma ascendente"
    ],
    correctAnswer: 1,
  },
  {
    question: "29. ¿Cuál es el comportamiento de un INNER JOIN entre dos tablas?",
    options: [
      "Devuelve todas las filas de la primera tabla y las filas coincidentes de la segunda",
      "Devuelve solo las filas que tienen coincidencias en ambas tablas",
      "Devuelve todas las filas de ambas tablas, coincidan o no",
      "Devuelve las filas de la primera tabla que no tienen coincidencia en la segunda"
    ],
    correctAnswer: 1,
  },
  {
    question: "30. ¿Qué diferencia principal existe entre LEFT JOIN e INNER JOIN?",
    options: [
      "LEFT JOIN ordena los resultados de forma ascendente",
      "LEFT JOIN incluye todas las filas de la tabla izquierda, incluso sin coincidencia en la derecha",
      "LEFT JOIN es más rápido que INNER JOIN",
      "LEFT JOIN elimina los duplicados automáticamente"
    ],
    correctAnswer: 1,
  },
  {
    question: "31. ¿Cuál es la principal característica de MongoDB como base de datos?",
    options: [
      "Es una base de datos relacional que usa tablas y SQL",
      "Es una base de datos NoSQL orientada a documentos que almacena datos en formato JSON",
      "Es un motor de búsqueda especializado en indexación de texto",
      "Es un sistema de almacenamiento en caché distribuido"
    ],
    correctAnswer: 1,
  },
  {
    question: "32. ¿Qué operación del estándar CRUD se asocia con el verbo HTTP GET?",
    options: [
      "Create (crear nuevos datos)",
      "Read (leer u obtener datos existentes)",
      "Update (actualizar datos existentes)",
      "Delete (eliminar datos)"
    ],
    correctAnswer: 1,
  },
  {
    question: "33. En el diseño de bases de datos relacionales, ¿qué tipo de relación entre tablas se considera la más habitual en sistemas de gestión empresarial como ERPs o tiendas online?",
    options: [
      "Relación uno a uno (1:1)",
      "Relación uno a muchos (1:N)",
      "Relación muchos a muchos (N:M)",
      "Relación cíclica"
    ],
    correctAnswer: 1,
  },
  {
    question: "34. Una consulta LEFT JOIN entre la tabla \"clientes\" y \"pedidos\" devuelve 150 registros, pero solo 90 clientes tienen pedidos registrados. ¿Qué contienen los campos de \"pedidos\" para los 60 clientes restantes?",
    options: [
      "Se eliminan automáticamente del resultado final",
      "Se rellenan con el valor 0 por defecto del sistema",
      "Contienen valores NULL al no existir correspondencia",
      "Se duplican con los datos del último pedido encontrado"
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

export default function DesarrolloInterfacesSimulacro1Quiz() {
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
            <h2 className="text-xl text-muted-foreground">Test Extra 1</h2>
            <p className="text-muted-foreground text-lg">Persistencia, JDBC, Hibernate y ficheros</p>

            <div className="space-y-4 text-left py-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-pink-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">{questions.length} Preguntas</p>
                  <p className="text-sm text-muted-foreground">Todos los conceptos clave</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-pink-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Preguntas Aleatorizadas</p>
                  <p className="text-sm text-muted-foreground">Cada sesion es diferente</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-pink-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Retroalimentacion Inmediata</p>
                  <p className="text-sm text-muted-foreground">Aprende mientras practicas</p>
                </div>
              </div>
            </div>

            <Button
              onClick={startQuiz}
              size="lg"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold"
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
              <div className="text-6xl font-bold text-pink-500 mb-2">{Math.max(0, percentage)}%</div>
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
              {percentage >= 90 && <p className="text-lg text-foreground">Excelente. Dominas Desarrollo de Interfaces.</p>}
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
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold"
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
          <span className="text-pink-500">{answeredCount} respondidas</span>
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
                      ${!showFeedback && "hover:border-pink-500 hover:bg-accent cursor-pointer"}
                      ${showFeedback && "cursor-not-allowed"}
                      ${isSelected && !showFeedback && "border-pink-500 bg-accent"}
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
                className="flex-1 bg-pink-500 hover:bg-pink-600 text-white"
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
            className="h-full bg-pink-500 transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
