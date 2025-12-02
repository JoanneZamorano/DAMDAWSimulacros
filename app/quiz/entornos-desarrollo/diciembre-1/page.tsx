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
    question: "¿Qué papel cumple un lenguaje de alto nivel?",
    options: [
      "Ofrecer una sintaxis más cercana al lenguaje humano.",
      "Permitir que el procesador ejecute instrucciones binarias directamente.",
      "Convertir código máquina en instrucciones legibles.",
      "Administrar la memoria del sistema operativo.",
    ],
    correctAnswer: 0,
  },
  {
    question: "Un compilador realiza principalmente:",
    options: [
      "Optimización y traducción del programa completo antes de ejecutarlo.",
      "Conversión de imágenes a binario.",
      "Pruebas automáticas del software.",
      "Ejecución dinámica del código a medida que se lee.",
    ],
    correctAnswer: 0,
  },
  {
    question: "¿Qué lenguaje se ejecuta habitualmente sobre una máquina virtual?",
    options: ["Rust", "C", "Bash", "Java"],
    correctAnswer: 3,
  },
  {
    question: "El lenguaje ensamblador se caracteriza por:",
    options: [
      "Requerir máquina virtual para ejecutarse.",
      "Estar formado por instrucciones simbólicas muy próximas al código máquina.",
      "Ser el más rápido de programar.",
      "No permitir acceso al hardware.",
    ],
    correctAnswer: 1,
  },
  {
    question: "En POO, una clase se considera una plantilla porque:",
    options: [
      "Ejecuta automáticamente todo el código del programa.",
      "Es una copia exacta de un objeto existente.",
      "Permite almacenar datos sin métodos.",
      "Define la estructura y comportamiento de los objetos creados a partir de ella.",
    ],
    correctAnswer: 3,
  },
  {
    question: "¿Qué característica describe mejor el polimorfismo?",
    options: [
      "Una clase solo puede almacenar números, textos o valores booleanos.",
      "Todas las clases deben tener los mismos atributos.",
      "Cada objeto solo puede tener un método.",
      "Métodos con el mismo nombre pueden actuar distinto según el contexto.",
    ],
    correctAnswer: 3,
  },
  {
    question: "¿Cuál es el objetivo principal del encapsulamiento?",
    options: [
      "Aumentar la velocidad de compilación sacrificando parte de la legibilidad.",
      "Crear objetos sin constructores.",
      "Garantizar que los atributos solo se cambien mediante métodos controlados.",
      "Permitir heredar de múltiples clases.",
    ],
    correctAnswer: 2,
  },
  {
    question: "Una ventaja de las metodologías ágiles es:",
    options: [
      "No requieren retroalimentación.",
      "Eliminan reuniones.",
      "Entregas frecuentes y mejora continua.",
      "Obligan a terminar el proyecto antes de mostrarlo al cliente.",
    ],
    correctAnswer: 2,
  },
  {
    question: "En Scrum, ¿quién maximiza el valor del producto?",
    options: ["Jefe de diseño", "Product Owner", "Stakeholder", "Scrum Master"],
    correctAnswer: 1,
  },
  {
    question: "El modelo en cascada se caracteriza por:",
    options: [
      "Uso exclusivo en proyectos ágiles.",
      "Fases rígidas y secuenciales.",
      "Ausencia de documentación.",
      "Iteraciones constantes sin fases.",
    ],
    correctAnswer: 1,
  },
  {
    question: "Componente habitual de un IDE:",
    options: ["Editor con sintaxis", "Controlador de GPU", "Antivirus", "Motor de bases de datos"],
    correctAnswer: 0,
  },
  {
    question: "La asistencia de código sirve para:",
    options: ["Ejecutar pruebas", "Generar ejecutables", "Sugerir instrucciones y métodos", "Renombrar proyectos"],
    correctAnswer: 2,
  },
  {
    question: "Un depurador permite:",
    options: [
      "Analizar paso a paso y ver valores",
      "Instalar librerías",
      "Ejecutar en modo seguro.",
      "Convertir código en lenguaje máquina que permite ver el valor de los datos.",
    ],
    correctAnswer: 0,
  },
  {
    question: "Un gestor de dependencias facilita:",
    options: ["Depurar errores", "Modificar RAM", "Crear interfaces", "Instalar y actualizar librerías"],
    correctAnswer: 3,
  },
  {
    question: "git add se utiliza para:",
    options: [
      "Preparar archivos para commit",
      "Crear rama",
      "Descargar cambios",
      "Añadir los archivos del commit al push.",
    ],
    correctAnswer: 0,
  },
  {
    question: "git commit sirve para:",
    options: ["Crear repositorio", "Eliminar archivos", "Guardar cambios preparados", "Subir al remoto"],
    correctAnswer: 2,
  },
  {
    question: "git push:",
    options: ["Une ramas", "Borra archivos", "Sincroniza remoto → local", "Sube commits al remoto"],
    correctAnswer: 3,
  },
  {
    question: "Un conflicto aparece cuando:",
    options: [
      "Nunca hubo commit",
      "El remoto está vacío",
      "Se clonó mal el repositorio en tu PC.",
      "Dos ramas cambian la misma zona",
    ],
    correctAnswer: 3,
  },
  {
    question: "git checkout permite:",
    options: ["Commits automáticos", "Subir cambios", "Ver historial", "Cambiar de rama o restaurar archivo"],
    correctAnswer: 3,
  },
  {
    question: "Archivo .gitignore:",
    options: ["Indica qué no rastrear", "Config remota", "Eliminar metadatos", "Oculta archivos"],
    correctAnswer: 0,
  },
  {
    question: "Markdown se usa para:",
    options: ["Videojuegos", "Compilar código", "Documentación simple", "Animaciones 3D"],
    correctAnswer: 2,
  },
  {
    question: "Paradigma de programación:",
    options: ["Binario", "Imperativo", "Factorial", "Textual"],
    correctAnswer: 1,
  },
  {
    question: "Qué son las pruebas unitarias?:",
    options: ["Evaluar UI", "Validar módulos pequeños", "Analizar seguridad", "Medir CPU"],
    correctAnswer: 1,
  },
  {
    question: "Las pruebas de regresión verifican:",
    options: [
      "Que el Hardware funciona correctamente",
      "El diseño gráfico de la aplicación",
      "Que los cambios futuros no van a romper la aplicación",
      "Que los cambios no rompen funciones previas",
    ],
    correctAnswer: 3,
  },
  {
    question: "La función de JUnit assertTrue es:",
    options: [
      "Crear clase de prueba",
      "Afirmar que una condición es verdadera",
      "Afirmar que una condición es igual a otra",
      "Afirma que una condición es falsa",
    ],
    correctAnswer: 1,
  },
  {
    question: "Un diagrama de casos de uso representa:",
    options: [
      "La interacción de los usuarios con el sistema.",
      "Los servidores de despliegue de los distintos módulos del sistema.",
      "Estructura clases con sus atributos, métodos y relaciones entre ellas.",
      "El sistema de empaquetado de las clases.",
    ],
    correctAnswer: 0,
  },
  {
    question: "La relación extend:",
    options: [
      "Indica que el caso es obligatorio.",
      "Depende del actor",
      "Se ejecutan a la vez",
      "Amplía comportamiento opcional",
    ],
    correctAnswer: 3,
  },
  {
    question: "La multiplicidad 1..*:",
    options: [
      "Indica una o varias instancias en una relación.",
      "Indica que la relación es opcional.",
      "Indica que solo puede existir una instancia en dicha relación.",
      "Indica que las clases son idénticas.",
    ],
    correctAnswer: 0,
  },
  {
    question: "La composición en UML se representa con:",
    options: ["Línea simple", "Triángulo vacío", "Rombo negro", "Rombo blanco"],
    correctAnswer: 2,
  },
  {
    question: "El mensaje asíncrono en un diagrama de secuencia se representa con:",
    options: ["Rombo", "Flecha discontinua", "Triángulo relleno", "Flecha rellena con espera"],
    correctAnswer: 1,
  },
]

export default function EntornosDiciembreIQuiz() {
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
            <h1 className="text-2xl font-bold text-foreground">Entornos de Desarrollo - Simulacro Diciembre I</h1>
            <span className="text-muted-foreground">
              Pregunta {currentQuestion + 1} de {questions.length}
            </span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div
              className="bg-red-500 h-2 rounded-full transition-all duration-300"
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
                          ? "border-red-500 bg-red-500/10"
                          : "border-border hover:border-red-500/50 bg-card"
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
