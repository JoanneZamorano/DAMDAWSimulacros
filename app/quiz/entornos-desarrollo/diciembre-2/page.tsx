"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, ChevronLeft } from "lucide-react"
import Link from "next/link"

const questions = [
  {
    question: "¿Qué afirmación es correcta sobre los lenguajes de alto nivel?",
    options: [
      "No pueden ejecutarse en ningún sistema operativo.",
      "Son equivalentes al lenguaje máquina.",
      "Se centran en facilitar la comprensión humana del código.",
      "Son más difíciles de mantener que los lenguajes de bajo nivel."
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es una ventaja propia de la interpretación frente a la compilación?",
    options: [
      "El código siempre se ejecuta más rápido.",
      "No existen errores en tiempo de ejecución.",
      "Permite probar cambios sin recompilar todo el programa.",
      "Genera ejecutables portables automáticamente."
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué elemento es indispensable en un entorno de desarrollo integrado (IDE)?",
    options: [
      "Editor de texto sin resaltado.",
      "Panel de control del hardware.",
      "Depurador integrado.",
      "Sistema de archivos propio."
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál es la función principal de un gestor de dependencias?",
    options: [
      "Convertir código en binario.",
      "Controlar el uso de memoria RAM.",
      "Instalar bibliotecas necesarias para el proyecto.",
      "Crear interfaces gráficas automáticamente."
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué comando de Git se utiliza para revisar los cambios registrados en el repositorio?",
    options: [
      "git clone",
      "git history",
      "git push",
      "git log"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué describe mejor un conflicto de fusión (merge conflict)?",
    options: [
      "Dos ramas han eliminado el mismo archivo.",
      "Git no puede descargar el repositorio remoto.",
      "Dos modificaciones afectan la misma parte del fichero.",
      "El repositorio está vacío."
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué extensión identifica un archivo escrito en Markdown?",
    options: [
      ".md",
      ".mk",
      ".txtm",
      ".mdk"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué paradigma se basa en modificar el estado mediante instrucciones secuenciales?",
    options: [
      "Declarativo",
      "Funcional",
      "Visual",
      "Imperativo"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué comprueban las pruebas funcionales?",
    options: [
      "El rendimiento de los componentes hardware.",
      "La estética del diseño.",
      "Que el sistema cumple lo que el usuario necesita.",
      "La calidad de la documentación."
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué representa un diagrama de casos de uso?",
    options: [
      "El flujo de datos interno.",
      "La interacción entre actores y el sistema.",
      "Los atributos de cada clase.",
      "Las pruebas automatizadas del sistema."
    ],
    correctAnswer: 1
  },
  {
    question: "En Java, el código fuente se transforma en:",
    options: [
      "Código máquina directamente ejecutable.",
      "Un script de Python.",
      "Bytecode para la JVM.",
      "Un archivo .exe universal."
    ],
    correctAnswer: 2
  },
  {
    question: "¿Cuál de los siguientes lenguajes pertenece al paradigma funcional?",
    options: [
      "Assembly",
      "Go",
      "Prolog",
      "Haskell"
    ],
    correctAnswer: 3
  },
  {
    question: "En la fase de análisis del software se debe:",
    options: [
      "Programar los módulos principales.",
      "Identificar los requisitos del sistema.",
      "Aumentar el rendimiento del hardware.",
      "Crear las pruebas unitarias."
    ],
    correctAnswer: 1
  },
  {
    question: "En Scrum, el rol encargado de priorizar el Product Backlog es:",
    options: [
      "Scrum Master",
      "Analista QA",
      "Stakeholder",
      "Product Owner"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué herramienta integra normalmente un IDE para detectar errores?",
    options: [
      "Gestor de paquetes",
      "Depurador",
      "Editor de imágenes",
      "Servidor web"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué permite realizar el comando git init?",
    options: [
      "Crear un repositorio nuevo en local.",
      "Subir cambios al remoto.",
      "Fusionar ramas.",
      "Eliminar commits del historial."
    ],
    correctAnswer: 0
  },
  {
    question: "Una prueba unitaria se caracteriza por:",
    options: [
      "Medir el rendimiento general de la aplicación.",
      "Verificar pequeños componentes aislados del programa.",
      "Analizar conexiones de red.",
      "Comprobar la experiencia del usuario."
    ],
    correctAnswer: 1
  },
  {
    question: "En UML, un actor representa:",
    options: [
      "Una clase interna del sistema.",
      "Un recurso del hardware.",
      "Una entidad externa que interactúa con el sistema.",
      "Un proceso del sistema operativo."
    ],
    correctAnswer: 2
  },
  {
    question: "La relación «include» en un diagrama de casos de uso indica:",
    options: [
      "Que el caso de uso es opcional.",
      "Que un caso de uso sustituye al otro.",
      "Que ambos no pueden ejecutarse juntos.",
      "Que un caso reutiliza el comportamiento de otro."
    ],
    correctAnswer: 3
  },
  {
    question: "La composición en UML expresa que:",
    options: [
      "Las partes existen independientemente del todo.",
      "Las clases no tienen relación entre sí.",
      "La destrucción del todo implica la destrucción de las partes.",
      "Es una relación de herencia."
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué ventaja ofrece el tipado estático?",
    options: [
      "Evita cualquier error lógico.",
      "Detecta errores de tipo antes de ejecutar el programa.",
      "Permite cambiar el tipo de una variable en tiempo real.",
      "Hace el código más corto."
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué comando de Git permite traer cambios del remoto sin fusionar automáticamente?",
    options: [
      "git fetch",
      "git clone",
      "git revert",
      "git reset"
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué representa el signo “+” en un diagrama de clases UML?",
    options: [
      "Atributo protegido",
      "Atributo privado",
      "Método abstracto",
      "Atributo o método público"
    ],
    correctAnswer: 3
  },
  {
    question: "¿Qué caracteriza al paradigma declarativo?",
    options: [
      "Describe cómo resolver un problema paso a paso.",
      "Obliga a especificar cada instrucción en orden.",
      "Define qué se quiere obtener sin detallar cómo lograrlo.",
      "Está limitado a lenguajes de consulta"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué representa la activación en un diagrama de secuencia?",
    options: [
      "El tiempo en que un objeto ejecuta una operación.",
      "La creación de una clase.",
      "La elección entre dos caminos.",
      "El fin del programa."
    ],
    correctAnswer: 0
  },
  {
    question: "¿Qué permite el uso de pruebas de integración?",
    options: [
      "Verificar que los módulos funcionan correctamente entre sí.",
      "Comprobar únicamente la interfaz gráfica.",
      "Validar la documentación.",
      "Medir las capacidades del hardware."
    ],
    correctAnswer: 0
  },
  {
    question: "¿Cómo se representa la herencia en UML?",
    options: [
      "Rombo relleno",
      "Línea punteada",
      "Triángulo vacío apuntando a la superclase",
      "Flecha discontinua bidireccional"
    ],
    correctAnswer: 2
  },
  {
    question: "¿Qué comando Git crea una copia exacta del repositorio remoto?",
    options: [
      "git branch",
      "git clone",
      "git fetch",
      "git merge"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué ventaja aporta la programación orientada a objetos?",
    options: [
      "Evita escribir funciones",
      "Permite organizar el código mediante clases reutilizables",
      "Elimina por completo los errores de ejecución",
      "Obliga a usar bases de datos"
    ],
    correctAnswer: 1
  },
  {
    question: "¿Qué elemento es propio del ciclo de vida iterativo?",
    options: [
      "Las fases no se repiten nunca",
      "Se entregan versiones sucesivas del producto mejorado",
      "El cliente no participa hasta el final",
      "La planificación no existe"
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
