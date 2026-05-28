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
    "question": "1. ¿Qué significa UX?",
    "options": ["Experiencia de usuario", "Base de datos", "Lenguaje de programación", "Sistema operativo"],
    "correctAnswer": 0
  },
  {
    "question": "2. ¿Qué herramienta se usa para desarrollo nativo Android?",
    "options": ["Expo", "Unity", "React Native", "Android Studio"],
    "correctAnswer": 3
  },
  {
    "question": "3. ¿Qué capa representa el estado en Android?",
    "options": ["Bluetooth", "Datos", "UI", "Red"],
    "correctAnswer": 2
  },
  {
    "question": "4. ¿Qué patrón arquitectónico es común en Android moderno?",
    "options": ["MVVM", "JSON", "FTP", "MVC"],
    "correctAnswer": 0
  },
  {
    "question": "5. ¿Qué componente almacena datos en Android?",
    "options": ["Repository", "Button", "ConstraintLayout", "Intent"],
    "correctAnswer": 0
  },
  {
    "question": "6. ¿Qué significa UDF?",
    "options": ["User Data File", "Universal Design Framework", "Unidirectional Data Flow", "Update Data Function"],
    "correctAnswer": 2
  },
  {
    "question": "7. ¿Qué tecnología se usa para DI en Android?",
    "options": ["Hilt", "Photoshop", "Room", "SQLite"],
    "correctAnswer": 0
  },
  {
    "question": "8. ¿Qué ventaja tiene la inyección de dependencias?",
    "options": ["Más acoplamiento", "Facilita pruebas", "Código más difícil", "Menos modularidad"],
    "correctAnswer": 1
  },
  {
    "question": "9. ¿Qué es un GameObject en Unity?",
    "options": ["Una API web", "Un archivo de audio", "La base de los objetos en Unity", "Un compilador"],
    "correctAnswer": 2
  },
  {
    "question": "10. ¿Qué método se ejecuta continuamente en Unity?",
    "options": ["Create()", "Start()", "Update()", "Finish()"],
    "correctAnswer": 2
  },
  {
    "question": "11. ¿Qué panel muestra el juego en Unity?",
    "options": ["Inspector", "Hierarchy", "Project", "Game"],
    "correctAnswer": 3
  },
  {
    "question": "12. ¿Qué lenguaje usa Unity principalmente?",
    "options": ["Swift", "Python", "C#", "Kotlin"],
    "correctAnswer": 2
  },
  {
    "question": "13. ¿Qué permite React Native?",
    "options": ["Diseñar videojuegos", "Solo apps Android", "Crear bases de datos", "Apps multiplataforma"],
    "correctAnswer": 3
  },
  {
    "question": "14. ¿Qué archivo suele ser la entrada principal en React Native?",
    "options": ["Index.xml", "styles.css", "Main.kt", "App.js"],
    "correctAnswer": 3
  },
  {
    "question": "15. ¿Qué herramienta facilita empezar con React Native?",
    "options": ["Photoshop", "Unity Hub", "Room", "Expo CLI"],
    "correctAnswer": 3
  },
  {
    "question": "16. ¿Qué componente muestra texto en React Native?",
    "options": ["Text", "View", "Container", "React"],
    "correctAnswer": 0
  },
  {
    "question": "17. ¿Qué ventaja ofrece la modularización?",
    "options": ["Más errores", "Apps más lentas", "Código más organizado", "Más acoplamiento"],
    "correctAnswer": 2
  },
  {
    "question": "18. ¿Qué busca el bajo acoplamiento?",
    "options": ["Aumentar tamaño APK", "Eliminar interfaces", "Más dependencias", "Reducir relaciones innecesarias"],
    "correctAnswer": 3
  },
  {
    "question": "19. ¿Qué hace un Prefab en Unity?",
    "options": ["Diseñar APIs", "Gestionar internet", "Compilar código", "Guardar plantillas reutilizables"],
    "correctAnswer": 3
  },
  {
    "question": "20. ¿Qué herramienta gestiona proyectos Unity?",
    "options": ["VS Code", "GitHub", "Unity Hub", "Retrofit"],
    "correctAnswer": 2
  },
  {
    "question": "21. ¿Qué componente controla posición y escala en Unity?",
    "options": ["Collider", "Renderer", "Camera", "Transform"],
    "correctAnswer": 3
  },
  {
    "question": "22. ¿Qué tipo de flujo usa UDF?",
    "options": ["Aleatorio", "Circular", "Bidireccional", "Unidireccional"],
    "correctAnswer": 3
  },
  {
    "question": "23. ¿Qué se recomienda para gestionar estado en Android moderno?",
    "options": ["StateFlow", "XML", "Bluetooth", "SQLite"],
    "correctAnswer": 0
  },
  {
    "question": "24. ¿Qué hace un Repository?",
    "options": ["Renderiza gráficos", "Compila APKs", "Dibuja interfaces", "Gestiona datos"],
    "correctAnswer": 3
  },
  {
    "question": "25. ¿Qué es Expo en React Native?",
    "options": ["Una herramienta para facilitar desarrollo", "Una base de datos", "Un lenguaje", "Un motor gráfico"],
    "correctAnswer": 0
  },
  {
    "question": "26. ¿Qué panel contiene assets en Unity?",
    "options": ["Project", "Game", "Scene", "Console"],
    "correctAnswer": 0
  },
  {
    "question": "27. ¿Qué arquitectura separa UI, dominio y datos?",
    "options": ["Por capas", "Peer to peer", "Cliente-servidor", "Monolítica"],
    "correctAnswer": 0
  },
  {
    "question": "28. ¿Qué ventaja tiene MVVM?",
    "options": ["Mayor acoplamiento", "Menos pruebas", "Más errores", "Mejor organización y testeo"],
    "correctAnswer": 3
  },
  {
    "question": "29. ¿Qué componente sirve como contenedor en React Native?",
    "options": ["Text", "View", "Container", "React"],
    "correctAnswer": 1
  },
  {
    "question": "30. ¿Qué hace Android Studio?",
    "options": ["Desarrollar apps Android", "Crear videojuegos", "Editar vídeos", "Gestionar servidores"],
    "correctAnswer": 0
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

export default function PMDMSimulacro2Quiz() {
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
              <span className="text-foreground">PMDM</span>
            </h1>
            <h2 className="text-xl text-muted-foreground">Simulacro III</h2>
            <p className="text-muted-foreground text-lg">Programacion Multimedia y Dispositivos Moviles</p>

            <div className="space-y-4 text-left py-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">{questions.length} Preguntas</p>
                  <p className="text-sm text-muted-foreground">Todos los conceptos clave</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Preguntas Aleatorizadas</p>
                  <p className="text-sm text-muted-foreground">Cada sesion es diferente</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Retroalimentacion Inmediata</p>
                  <p className="text-sm text-muted-foreground">Aprende mientras practicas</p>
                </div>
              </div>
            </div>

            <Button
              onClick={startQuiz}
              size="lg"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold"
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
              <div className="text-6xl font-bold text-emerald-500 mb-2">{Math.max(0, percentage)}%</div>
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
              {percentage >= 90 && <p className="text-lg text-foreground">Excelente. Dominas PMDM.</p>}
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
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold"
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
          <span className="text-emerald-500">{answeredCount} respondidas</span>
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
                      ${!showFeedback && "hover:border-emerald-500 hover:bg-accent cursor-pointer"}
                      ${showFeedback && "cursor-not-allowed"}
                      ${isSelected && !showFeedback && "border-emerald-500 bg-accent"}
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
                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white"
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
            className="h-full bg-emerald-500 transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
