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
    question: "55. ¿Qué representa una colección en MongoDB?",
    options: [
      "Un campo de datos individual dentro de un documento",
      "Un equivalente a una tabla que contiene documentos",
      "Una copia de seguridad de la base de datos",
      "Un índice que optimiza las búsquedas"
    ],
    correctAnswer: 1,
  },
  {
    question: "56. ¿Qué significan las letras CRUD en el contexto de operaciones sobre bases de datos?",
    options: [
      "Cifrado de Registros Únicos y Datos",
      "Create, Read, Update, Delete (Crear, Leer, Actualizar, Eliminar)",
      "Compresión de Registros Unificados Digitales",
      "Cálculo de Resúmenes Únicos y Detalles"
    ],
    correctAnswer: 1,
  },
  {
    question: "57. ¿Cuál es la función principal de una API REST en el contexto de acceso a datos?",
    options: [
      "Compilar código Java en máquina virtual",
      "Proporcionar una interfaz basada en HTTP para operaciones CRUD sobre recursos",
      "Encriptar la comunicación entre cliente y servidor",
      "Crear índices automáticos en las tablas de la base de datos"
    ],
    correctAnswer: 1,
  },
  {
    question: "58. ¿Cuál es la principal función del JDK en el desarrollo de aplicaciones Java?",
    options: [
      "Proporcionar un entorno gráfico para diseñar interfaces de usuario",
      "Suministrar las herramientas y librerías necesarias para compilar y ejecutar código Java",
      "Gestionar automáticamente las conexiones a bases de datos",
      "Reemplazar la funcionalidad de los drivers JDBC"
    ],
    correctAnswer: 1,
  },
  {
    question: "59. ¿Cuál es la función principal de un driver JDBC en una aplicación Java?",
    options: [
      "Compilar el código Java antes de ejecutarlo",
      "Actuar como intermediario entre la aplicación Java y la base de datos",
      "Validar la sintaxis SQL antes de enviarla a la base de datos",
      "Encriptar todos los datos que se transmiten a la base de datos"
    ],
    correctAnswer: 1,
  },
  {
    question: "60. ¿Qué tipo de base de datos es PostgreSQL?",
    options: [
      "Base de datos NoSQL orientada a documentos",
      "Base de datos relacional de código abierto",
      "Base de datos en memoria para cachés distribuidos",
      "Base de datos en tiempo real para análisis de flujos"
    ],
    correctAnswer: 1,
  },
  {
    question: "61. En el modelo relacional, ¿qué representa una tabla?",
    options: [
      "Un conjunto de documentos sin estructura definida",
      "Una estructura bidimensional de filas y columnas que almacena información sobre una entidad",
      "Un árbol jerárquico de datos relacionados",
      "Un conjunto de procedimientos almacenados en la base de datos"
    ],
    correctAnswer: 1,
  },
  {
    question: "62. ¿Cuál es el propósito principal de una clave primaria (PK) en una tabla?",
    options: [
      "Acelerar las búsquedas ordenando alfabéticamente los registros",
      "Identificar de forma única cada registro dentro de la tabla",
      "Encriptar los datos sensibles de la tabla",
      "Establecer automáticamente relaciones con otras tablas"
    ],
    correctAnswer: 1,
  },
  {
    question: "63. ¿Cuál es la función de una clave foránea (FK) en el modelo relacional?",
    options: [
      "Identificar de forma única los registros de una tabla",
      "Crear una referencia a la clave primaria de otra tabla para establecer relaciones",
      "Ordenar automáticamente los datos de una tabla",
      "Prevenir que se eliminen registros de la base de datos"
    ],
    correctAnswer: 1,
  },
  {
    question: "64. ¿Cuál es la relación más común en bases de datos relacionales?",
    options: [
      "Uno a Uno (1:1)",
      "Uno a Muchos (1:N)",
      "Muchos a Muchos (N:M)",
      "Ninguna relación es más común que otra"
    ],
    correctAnswer: 1,
  },
  {
    question: "65. ¿Cuál es la función principal de la cláusula WHERE en una consulta SQL?",
    options: [
      "Ordenar los resultados de la consulta",
      "Filtrar registros basándose en condiciones especificadas",
      "Agrupar registros por valores comunes",
      "Limitar el número de filas devueltas"
    ],
    correctAnswer: 1,
  },
  {
    question: "66. ¿Qué operación realiza la cláusula ORDER BY en una consulta SQL?",
    options: [
      "Elimina registros duplicados del resultado",
      "Agrupa registros por un atributo específico",
      "Ordena los resultados de forma ascendente o descendente según un campo",
      "Filtra registros que cumplan una condición"
    ],
    correctAnswer: 2,
  },
  {
    question: "67. ¿Cuál es la función de la palabra clave DISTINCT en SQL?",
    options: [
      "Ordenar los registros de mayor a menor valor",
      "Eliminar filas duplicadas de los resultados de una consulta",
      "Filtrar registros según una condición específica",
      "Agrupar registros por un campo determinado"
    ],
    correctAnswer: 1,
  },
  {
    question: "68. ¿Qué operación realiza la cláusula LIMIT en SQL?",
    options: [
      "Restringe los valores que pueden insertarse en una columna",
      "Limita el número de filas devueltas por una consulta",
      "Define el tamaño máximo de la base de datos",
      "Filtra registros que no cumplan un criterio"
    ],
    correctAnswer: 1,
  },
  {
    question: "69. ¿Cuál es el resultado de ejecutar un INNER JOIN entre dos tablas?",
    options: [
      "Devuelve todos los registros de la tabla izquierda",
      "Devuelve solo los registros que tienen coincidencias en ambas tablas",
      "Devuelve todos los registros de ambas tablas sin importar coincidencias",
      "Devuelve todos los registros de la tabla derecha"
    ],
    correctAnswer: 1,
  },
  {
    question: "70. ¿Cuál es el resultado de ejecutar un LEFT JOIN entre dos tablas?",
    options: [
      "Devuelve todos los registros de la tabla derecha y coincidencias de la izquierda",
      "Devuelve solo registros con coincidencias en ambas tablas",
      "Devuelve todos los registros de la tabla izquierda y las coincidencias de la derecha",
      "Devuelve registros alternos de ambas tablas"
    ],
    correctAnswer: 2,
  },
  {
    question: "71. ¿Qué es MongoDB y cuál es su modelo de almacenamiento de datos?",
    options: [
      "Una base de datos relacional que almacena datos en tablas normalizadas",
      "Una base de datos NoSQL orientada a documentos que almacena datos en formato BSON",
      "Un sistema de gestión de archivos para almacenamiento en la nube",
      "Una base de datos en tiempo real para análisis de datos masivos"
    ],
    correctAnswer: 1,
  },
  {
    question: "72. ¿Qué es una colección en MongoDB?",
    options: [
      "Un archivo que contiene múltiples documentos de respaldo",
      "Un conjunto de documentos BSON agrupados bajo un mismo nombre",
      "Un índice que optimiza las búsquedas en la base de datos",
      "Una copia de seguridad automática de la base de datos"
    ],
    correctAnswer: 1,
  },
  {
    question: "73. ¿Cuál es el propósito principal de un driver JDBC en una aplicación Java?",
    options: [
      "Proporcionar una interfaz normalizada para conectarse a bases de datos relacionales",
      "Compilar el código Java a bytecode ejecutable",
      "Gestionar la memoria dinámica del sistema operativo",
      "Encriptar las contraseñas de acceso a la base de datos"
    ],
    correctAnswer: 0,
  },
  {
    question: "74. En el modelo relacional, ¿qué restricción de integridad se define al establecer una clave primaria en una tabla?",
    options: [
      "Que todos los valores de la columna deben ser positivos",
      "Que cada fila debe ser únicamente identificable y no puede contener valores nulos",
      "Que la columna debe almacenar solo números enteros",
      "Que la columna debe tener un índice secundario automático"
    ],
    correctAnswer: 1,
  },
  {
    question: "75. ¿Cuál es la relación más común en el diseño de bases de datos relacionales?",
    options: [
      "Relación de muchos a muchos (N:N)",
      "Relación de uno a uno (1:1)",
      "Relación de uno a muchos (1:N)",
      "Relación de reflexiva (autorreferencia)"
    ],
    correctAnswer: 2,
  },
  {
    question: "76. ¿Qué diferencia existe entre una clave primaria y una clave foránea?",
    options: [
      "La clave primaria identifica únicamente un registro en su tabla, mientras que la clave foránea referencia una clave primaria en otra tabla",
      "La clave foránea siempre es más pequeña en tamaño de datos que la clave primaria",
      "La clave primaria se puede repetir en una tabla, pero la clave foránea no",
      "No hay diferencia, son términos sinónimos en bases de datos"
    ],
    correctAnswer: 0,
  },
  {
    question: "77. ¿Cuál es el tipo de dato de PostgreSQL más apropiado para almacenar un identificador único que se genera automáticamente?",
    options: [
      "VARCHAR(100)",
      "SERIAL",
      "BOOLEAN",
      "TIMESTAMP"
    ],
    correctAnswer: 1,
  },
  {
    question: "78. ¿Cuál es la función de la cláusula WHERE en una consulta SQL?",
    options: [
      "Ordenar los resultados en orden alfabético",
      "Filtrar filas según condiciones especificadas",
      "Limitar el número de filas devueltas",
      "Agrupar resultados por columnas"
    ],
    correctAnswer: 1,
  },
  {
    question: "79. ¿Qué hace la palabra clave DISTINCT en SQL?",
    options: [
      "Elimina valores duplicados del resultado de la consulta",
      "Ordena los resultados en forma descendente",
      "Agrupa los registros según una columna",
      "Cuenta el número total de filas"
    ],
    correctAnswer: 0,
  },
  {
    question: "80. ¿Cuál es el propósito de un INNER JOIN en SQL?",
    options: [
      "Devuelve solo las filas que tienen coincidencias en ambas tablas",
      "Devuelve todas las filas de la tabla izquierda, aunque no tengan coincidencia",
      "Devuelve todas las filas de ambas tablas",
      "Elimina filas que contengan valores nulos"
    ],
    correctAnswer: 0,
  },
  {
    question: "81. ¿Qué es una colección en MongoDB?",
    options: [
      "Un conjunto de bases de datos relacionadas",
      "Un equivalente a una tabla en bases de datos relacionales, que contiene documentos",
      "Una copia de seguridad de los datos",
      "Un índice que acelera búsquedas"
    ],
    correctAnswer: 1,
  },
  {
    question: "82. ¿Qué significa el acrónimo CRUD en el contexto de acceso a datos?",
    options: [
      "Crear, Recopilar, Unir, Datos",
      "Conectar, Recuperar, Usar, Desconectar",
      "Crear, Leer, Actualizar, Eliminar",
      "Comprimir, Replicar, Unificar, Distribuir"
    ],
    correctAnswer: 2,
  },
  {
    question: "83. ¿Cuál es el verbo HTTP utilizado en una API REST para obtener datos de un recurso?",
    options: [
      "POST",
      "GET",
      "DELETE",
      "PUT"
    ],
    correctAnswer: 1,
  },
  {
    question: "84. ¿Qué función cumple la cláusula ORDER BY en una consulta SQL?",
    options: [
      "Filtra los registros según una condición",
      "Ordena los resultados según el valor de una o más columnas",
      "Agrupa filas que comparten el mismo valor",
      "Elimina filas duplicadas del resultado"
    ],
    correctAnswer: 1,
  },
  {
    question: "85. ¿Cuál es la función de la cláusula LIMIT en SQL?",
    options: [
      "Especifica el número máximo de filas a devolver",
      "Establece un tamaño máximo para la base de datos",
      "Limita el acceso a usuarios sin permisos",
      "Restringe las columnas visibles en la consulta"
    ],
    correctAnswer: 0,
  },
  {
    question: "86. ¿Cuál es la diferencia principal entre un INNER JOIN y un LEFT JOIN?",
    options: [
      "INNER JOIN devuelve solo coincidencias, mientras que LEFT JOIN devuelve todas las filas de la tabla izquierda más coincidencias de la derecha",
      "LEFT JOIN es más rápido que INNER JOIN",
      "INNER JOIN devuelve todas las filas, LEFT JOIN solo coincidencias",
      "No hay diferencia, son sinónimos en SQL"
    ],
    correctAnswer: 0,
  },
  {
    question: "87. ¿Cuál es la función principal de un driver JDBC en una aplicación Java?",
    options: [
      "Traducir las instrucciones SQL en lenguaje de máquina",
      "Proporcionar la interfaz de comunicación entre la aplicación Java y la base de datos",
      "Compilar el código Java antes de ejecutar consultas",
      "Optimizar automáticamente todas las consultas SQL"
    ],
    correctAnswer: 1,
  },
  {
    question: "88. En el modelo relacional, ¿cuál es la característica principal de una clave primaria?",
    options: [
      "Identifica de forma única cada fila de una tabla y no puede contener valores nulos",
      "Almacena valores duplicados para mejorar el rendimiento de búsquedas",
      "Establece la conexión entre dos tablas diferentes",
      "Ordena los registros automáticamente en orden alfabético"
    ],
    correctAnswer: 0,
  },
  {
    question: "89. ¿Qué operación SQL es la más apropiada para filtrar registros que cumplan una o varias condiciones?",
    options: [
      "ORDER BY",
      "WHERE",
      "GROUP BY",
      "LIMIT"
    ],
    correctAnswer: 1,
  },
  {
    question: "90. Una empresa tiene tablas \"Empleados\" y \"Departamentos\". Al ejecutar un LEFT JOIN entre ellas, aparecen empleados con NULL en la columna departamento. ¿Qué indica esto?",
    options: [
      "Existe un error de sintaxis en la consulta SQL",
      "Esos empleados no están asignados a ningún departamento registrado",
      "Los departamentos no tienen empleados asociados",
      "El LEFT JOIN solo devuelve filas con valores NULL"
    ],
    correctAnswer: 1,
  },
  {
    question: "91. ¿Cuál es el propósito de la cláusula DISTINCT en una consulta SQL?",
    options: [
      "Elimina registros duplicados del resultado de la consulta",
      "Ordena los resultados en orden ascendente",
      "Limita el número de filas retornadas",
      "Agrupa registros según criterios específicos"
    ],
    correctAnswer: 0,
  },
  {
    question: "92. En MongoDB, ¿cómo se denomina al equivalente de una tabla en bases de datos relacionales?",
    options: [
      "Documento",
      "Campo",
      "Colección",
      "Base de datos"
    ],
    correctAnswer: 2,
  },
  {
    question: "93. ¿Cuál es el significado del acrónimo CRUD en el contexto de acceso a datos?",
    options: [
      "Compilación, Revisión, Uso, Depuración",
      "Crear, Leer, Actualizar, Eliminar",
      "Conexión, Resultado, Uso, Datos",
      "Consulta, Recuperación, Unificación, Distribución"
    ],
    correctAnswer: 1,
  },
  {
    question: "94. ¿Qué verbo HTTP se utiliza en una API REST para obtener datos sin modificar el estado del servidor?",
    options: [
      "POST",
      "PUT",
      "GET",
      "DELETE"
    ],
    correctAnswer: 2,
  },
  {
    question: "95. ¿Cuál es la característica principal de una clave foránea en el modelo relacional?",
    options: [
      "Identifica de forma única cada registro dentro de una tabla",
      "Establece una relación entre dos tablas haciendo referencia a la clave primaria de otra tabla",
      "Mejora automáticamente la velocidad de todas las búsquedas",
      "Ordena los registros según el valor de la clave"
    ],
    correctAnswer: 1,
  },
  {
    question: "96. ¿Qué tipo de relación es la más común en las bases de datos relacionales?",
    options: [
      "Uno a uno",
      "Uno a muchos",
      "Muchos a muchos",
      "Sin relaciones"
    ],
    correctAnswer: 1,
  },
  {
    question: "97. ¿Cuál es la función de la cláusula LIMIT en una consulta SQL?",
    options: [
      "Filtra registros según una condición específica",
      "Restringe el número máximo de filas retornadas en el resultado",
      "Ordena los registros de forma descendente",
      "Agrupa registros por un atributo específico"
    ],
    correctAnswer: 1,
  },
  {
    question: "98. ¿Cuál es el propósito principal de la cláusula ORDER BY en SQL?",
    options: [
      "Organiza los resultados en un orden específico según uno o más atributos",
      "Elimina registros duplicados",
      "Agrupa registros según criterios de agrupación",
      "Aplica condiciones para filtrar filas"
    ],
    correctAnswer: 0,
  },
  {
    question: "99. ¿Qué componentes incluye el JDK y qué lo diferencia del JRE en el desarrollo de aplicaciones Java?",
    options: [
      "Solo la máquina virtual Java (JVM) para interpretar el bytecode en tiempo de ejecución",
      "Incluye el compilador javac, herramientas de desarrollo, bibliotecas estándar y la JVM para compilar y ejecutar programas",
      "Únicamente las bibliotecas estándar y la JVM necesarias para ejecutar aplicaciones ya compiladas",
      "Un entorno gráfico integrado con depurador visual y gestor automático de dependencias"
    ],
    correctAnswer: 1,
  },
  {
    question: "101. ¿Cuál es la clasificación de PostgreSQL como sistema de gestión de base de datos?",
    options: [
      "Base de datos NoSQL documental",
      "Base de datos relacional de código abierto",
      "Base de datos en tiempo real para IoT",
      "Base de datos clave-valor distribuida"
    ],
    correctAnswer: 1,
  },
  {
    question: "102. En el modelo relacional, ¿qué representa una tabla?",
    options: [
      "Un documento JSON con pares clave-valor",
      "Una estructura bidimensional compuesta por filas y columnas que almacena datos de una entidad",
      "Un índice que acelera las búsquedas en la base de datos",
      "Un tipo de relación que solo puede conectarse con otra tabla"
    ],
    correctAnswer: 1,
  },
  {
    question: "103. ¿Cuál es la función principal de una clave primaria (PK) en una tabla relacional?",
    options: [
      "Establecer una relación con otra tabla mediante una clave foránea",
      "Identificar de forma única cada fila en la tabla e impedir valores duplicados o nulos",
      "Mejorar el rendimiento de las consultas en tablas grandes",
      "Ordenar automáticamente los datos de la tabla en forma ascendente"
    ],
    correctAnswer: 1,
  },
  {
    question: "104. ¿Qué representa una clave foránea (FK) en el modelo relacional?",
    options: [
      "Una columna que identifica únicamente los registros dentro de su tabla",
      "Un atributo que establece una relación con la clave primaria de otra tabla, asegurando integridad referencial",
      "Una restricción que prohíbe insertar valores nulos en una columna",
      "Un índice especial que optimiza las búsquedas por criterios múltiples"
    ],
    correctAnswer: 1,
  },
  {
    question: "105. ¿Cuál es el tipo de relación más común en bases de datos relacionales?",
    options: [
      "Relación uno-a-muchos (1:N)",
      "Relación muchos-a-muchos (N:M)",
      "Relación uno-a-uno (1:1)",
      "Relación cíclica (N:N inverso)"
    ],
    correctAnswer: 0,
  },
  {
    question: "106. ¿Cuál es la función de la cláusula WHERE en una sentencia SQL?",
    options: [
      "Ordenar los resultados de la consulta según una o más columnas",
      "Filtrar filas que cumplen condiciones específicas en la consulta",
      "Agrupar registros según valores comunes en una columna",
      "Limitar el número de filas devueltas por la consulta"
    ],
    correctAnswer: 1,
  },
  {
    question: "107. ¿Qué operación realiza ORDER BY en una consulta SQL?",
    options: [
      "Elimina filas duplicadas en los resultados",
      "Ordena los resultados según una o más columnas en orden ascendente o descendente",
      "Agrupa los datos por categorías antes de aplicar funciones de agregación",
      "Restringe el resultado a un número máximo de filas"
    ],
    correctAnswer: 1,
  },
  {
    question: "108. ¿Para qué sirve la palabra clave DISTINCT en SQL?",
    options: [
      "Para seleccionar solo las filas que cumplen una condición específica",
      "Para eliminar filas duplicadas del resultado de una consulta",
      "Para ordenar los resultados de forma descendente",
      "Para contar el número total de registros en una tabla"
    ],
    correctAnswer: 1,
  },
  {
    question: "109. ¿Cuál es el comportamiento del operador INNER JOIN al combinar dos tablas?",
    options: [
      "Devuelve todas las filas de ambas tablas, independientemente de si hay coincidencia",
      "Devuelve solo las filas que tienen coincidencia en ambas tablas según la condición de unión",
      "Devuelve todas las filas de la tabla izquierda más las coincidencias de la derecha",
      "Devuelve solo las filas de la tabla izquierda que no tienen coincidencia en la derecha"
    ],
    correctAnswer: 1,
  },
  {
    question: "110. ¿Cuál es la diferencia principal entre INNER JOIN y LEFT JOIN?",
    options: [
      "INNER JOIN es más rápido que LEFT JOIN",
      "LEFT JOIN incluye todas las filas de la tabla izquierda aunque no tengan coincidencia en la derecha",
      "LEFT JOIN solo devuelve coincidencias exactas entre las tablas",
      "INNER JOIN incluye valores nulos en los resultados"
    ],
    correctAnswer: 1,
  },
  {
    question: "111. ¿Qué significa el acrónimo CRUD en el contexto del acceso a datos?",
    options: [
      "Consulta, Remoción, Uso y Deleción de registros",
      "Crear, Leer, Actualizar y Eliminar datos",
      "Compresión, Rastreo, Uso y Distribución de información",
      "Compilación, Registro, Unificación y Despliegue de aplicaciones"
    ],
    correctAnswer: 1,
  },
  {
    question: "112. ¿Cuál es el verbo HTTP que se utiliza para obtener datos de un recurso en una API REST?",
    options: [
      "POST",
      "PUT",
      "GET",
      "DELETE"
    ],
    correctAnswer: 2,
  },
];

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
            <h2 className="text-xl text-muted-foreground">Test Extra II</h2>
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
