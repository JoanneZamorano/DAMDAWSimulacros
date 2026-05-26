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
    "question": "¿Cuál de los siguientes elementos NO pertenece a una interfaz gráfica de usuario?",
    "options": ["Etiquetas", "Ventanas", "Métodos de búsqueda", "Botones"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué framework se utiliza principalmente para aplicaciones de escritorio en Java?",
    "options": ["JavaFX", "Flutter", "React Native", ".NET MAUI"],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué tecnología está basada en el lenguaje C#?",
    "options": ["React", "Flutter", ".NET MAUI", "JavaFX"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué herramienta de desarrollo emplea el lenguaje Dart?",
    "options": ["React", ".NET", "JavaFX", "Flutter"],
    "correctAnswer": 3
  },
  {
    "question": "¿Qué ventaja ofrecen los editores visuales de interfaces?",
    "options": ["Gestionar bases de datos", "Diseñar mediante arrastrar y soltar", "Reducir el uso de RAM", "Crear servidores"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué tipo de archivo suele generar JavaFX para las interfaces?",
    "options": ["JSON", "FXML", "HTML", "TXT"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué formato utiliza Android para definir interfaces gráficas?",
    "options": ["FXML", "XML", "CSS", "CSV"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué beneficio tiene separar la lógica del diseño?",
    "options": ["Mayor dificultad", "Más líneas de código", "Mejor mantenimiento del proyecto", "Menor reutilización"],
    "correctAnswer": 2
  },
  {
    "question": "¿Cuál es la función de FXMLLoader en JavaFX?",
    "options": ["Aplicar animaciones", "Cargar archivos FXML", "Optimizar memoria", "Compilar código"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué representa la estructura jerárquica en XML?",
    "options": ["La conexión de red", "La organización de la interfaz", "El sistema operativo", "La base de datos"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué permite la vista previa en un editor visual?",
    "options": ["Ejecutar consultas SQL", "Visualizar la interfaz sin ejecutar", "Detectar virus", "Mejorar el rendimiento"],
    "correctAnswer": 1
  },
  {
    "question": "En plataformas como Netflix, ¿qué puede representar el XML?",
    "options": ["El diseño de los carruseles", "El motor de búsqueda", "Las contraseñas", "El almacenamiento"],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué puede contener un archivo JAR?",
    "options": ["Únicamente imágenes", "Clases y recursos del proyecto", "Sólo hojas de estilo", "Archivos XML únicamente"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué herramienta se usa habitualmente para gestionar dependencias?",
    "options": ["Git", "Docker", "Maven o Gradle", "VirtualBox"],
    "correctAnswer": 2
  },
  {
    "question": "¿Cuál es una función principal de Maven?",
    "options": ["Crear animaciones", "Gestionar bibliotecas y dependencias", "Diseñar interfaces", "Configurar redes"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué aporta una librería interna bien diseñada?",
    "options": ["Mayor coherencia y productividad", "Más errores", "Duplicidad de código", "Menos reutilización"],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué significa la visibilidad del estado del sistema en UX?",
    "options": ["Que el usuario entienda lo que sucede", "Usar muchos colores", "Reducir ventanas", "Mostrar gráficos 3D"],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué implica la correspondencia con el mundo real en diseño?",
    "options": ["Utilizar lenguaje cercano al usuario", "Aplicar inteligencia artificial", "Usar efectos visuales", "Emplear animaciones complejas"],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué principio de usabilidad facilita revertir acciones?",
    "options": ["Minimalismo", "Consistencia", "Control y libertad del usuario", "Seguridad"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué define la consistencia en una interfaz?",
    "options": ["Uso continuo de patrones similares", "Cambios constantes de diseño", "Animaciones avanzadas", "Uso exclusivo de iconos"],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué problema aparece cuando no existe consistencia?",
    "options": ["La interfaz es más clara", "El usuario debe aprender de nuevo", "Mejora la experiencia", "Disminuyen los errores"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué suelen utilizar compañías como Google para mantener uniformidad visual?",
    "options": ["Sistemas de diseño", "Servidores dedicados", "Bases de datos", "Máquinas virtuales"],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué separa JasperReports en los informes?",
    "options": ["La lógica y la seguridad", "Los datos y el diseño visual", "El frontend y el backend", "El código y el hardware"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué determina la plantilla de un informe?",
    "options": ["El comportamiento del servidor", "La estructura visual del documento", "La conexión a internet", "Los permisos de usuario"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué representa un DataSource en programación?",
    "options": ["Una hoja de estilos", "Una fuente de datos", "Un botón", "Un controlador gráfico"],
    "correctAnswer": 1
  },
  {
    "question": "¿Cómo debe ser normalmente la documentación para usuarios?",
    "options": ["Muy técnica", "Extensa y compleja", "Breve y comprensible", "Sólo visual"],
    "correctAnswer": 2
  },
  {
    "question": "¿Qué es la ayuda contextual en una aplicación?",
    "options": ["Un tutorial externo", "Ayuda integrada dentro de la aplicación", "Un archivo ejecutable", "Un compilador"],
    "correctAnswer": 1
  },
  {
    "question": "¿Qué ventaja tiene una ayuda integrada adecuada?",
    "options": ["Reduce la curva de aprendizaje", "Consume menos CPU", "Elimina errores de compilación", "Reduce la memoria RAM"],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué describe la documentación de una API?",
    "options": ["Aspectos técnicos para desarrolladores", "Diseños gráficos", "Tutoriales de usuario final", "Archivos multimedia"],
    "correctAnswer": 0
  },
  {
    "question": "¿Qué información suele incluir un archivo README?",
    "options": ["Sólo ejemplos de código", "Instalación y funcionamiento básico", "Bases de datos completas", "Diseños CSS"],
    "correctAnswer": 1
  }
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
              <span className="text-foreground">Desarrollo de Interfaces</span>
            </h1>
            <h2 className="text-xl text-muted-foreground">Simulacro I</h2>
            <p className="text-muted-foreground text-lg">Interfaces de usuario y usabilidad</p>

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
