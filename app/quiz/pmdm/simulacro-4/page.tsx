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
    "question": "1. ¿Qué objetivo tiene la accesibilidad en apps móviles?",
    "options": ["Reducir batería", "Diseñar para todas las personas", "Mejorar gráficos", "Aumentar animaciones"],
    "correctAnswer": 1
  },
  {
    "question": "2. ¿Qué tecnología se orienta especialmente a experiencias XR y videojuegos?",
    "options": ["Kotlin", "Unity", "Room", "React Native"],
    "correctAnswer": 1
  },
  {
    "question": "3. ¿Qué componente suele observar el estado en MVVM?",
    "options": ["SQLite", "Retrofit", "Activity/Compose", "Repository"],
    "correctAnswer": 2
  },
  {
    "question": "4. ¿Qué ventaja ofrece el flujo unidireccional de datos?",
    "options": ["Reducir clases", "Evitar estados difíciles de reproducir", "Evitar repositorios", "Aumentar dependencias"],
    "correctAnswer": 1
  },
  {
    "question": "5. ¿Qué capa debería permanecer estable aunque cambie la API?",
    "options": ["Dominio", "Datos", "UI", "Navegación"],
    "correctAnswer": 0
  },
  {
    "question": "6. ¿Qué herramienta sustituye SharedPreferences en Android moderno?",
    "options": ["Hilt", "DataStore", "Compose", "RecyclerView"],
    "correctAnswer": 1
  },
  {
    "question": "7. ¿Qué estrategia puede implementar un Repository?",
    "options": ["APK-first", "Cache-first", "XML-first", "GPU-first"],
    "correctAnswer": 1
  },
  {
    "question": "8. ¿Qué representa una sealed class UiState?",
    "options": ["Estados de UI como Loading o Error", "Un motor gráfico", "Una Activity", "Un tipo de sensor"],
    "correctAnswer": 0
  },
  {
    "question": "9. ¿Qué ventaja tiene ocultar dependencias con implementation?",
    "options": ["Reducir recompilaciones innecesarias", "Más recompilaciones", "Eliminar interfaces", "Menos modularidad"],
    "correctAnswer": 0
  },
  {
    "question": "10. ¿Qué beneficio aporta la modularización?",
    "options": ["Menos reutilización", "Más errores", "Menos organización", "Equipos trabajando en paralelo"],
    "correctAnswer": 3
  },
  {
    "question": "11. ¿Qué patrón ayuda a entregar dependencias automáticamente?",
    "options": ["Hilt/Dagger", "Singleton", "Observer", "MVC"],
    "correctAnswer": 0
  },
  {
    "question": "12. ¿Qué problema evita la DI?",
    "options": ["Falta de XML", "Alto acoplamiento", "Bajo rendimiento gráfico", "Ausencia de layouts"],
    "correctAnswer": 1
  },
  {
    "question": "13. ¿Qué ventaja ofrece usar interfaces en DI?",
    "options": ["Eliminan ViewModels", "Facilitan cambiar implementaciones", "Sustituyen Activities", "Impiden pruebas"],
    "correctAnswer": 1
  },
  {
    "question": "14. ¿Qué método de Unity es ideal para cálculos físicos?",
    "options": ["Start()", "Update()", "FixedUpdate()", "Render()"],
    "correctAnswer": 2
  },
  {
    "question": "15. ¿Qué ocurre si modificas un Prefab original?",
    "options": ["Se elimina el proyecto", "Se reinicia Unity", "Cambian sus instancias", "Cambia el compilador"],
    "correctAnswer": 2
  },
  {
    "question": "16. ¿Qué panel organiza GameObjects en Unity?",
    "options": ["Game", "Scene", "Console", "Hierarchy"],
    "correctAnswer": 3
  },
  {
    "question": "17. ¿Qué componente determina colisiones en Unity?",
    "options": ["Renderer", "Collider", "AudioSource", "Camera"],
    "correctAnswer": 1
  },
  {
    "question": "18. ¿Qué ventaja tiene Expo Go?",
    "options": ["Crear videojuegos", "Ejecutar apps rápidamente en móvil", "Sustituir JavaScript", "Gestionar Git"],
    "correctAnswer": 1
  },
  {
    "question": "19. ¿Qué usa React Native para estilos?",
    "options": ["XML", "Kotlin", "StyleSheet.create()", "CSS externo"],
    "correctAnswer": 2
  },
  {
    "question": "20. ¿Qué componente es un contenedor en React Native?",
    "options": ["View", "div", "Text", "Number"],
    "correctAnswer": 0
  },
  {
    "question": "21. ¿Qué ventaja ofrece Hot Reloading?",
    "options": ["Ver cambios instantáneos sin recompilar", "Reducir RAM", "Eliminar bugs", "Sustituir Expo"],
    "correctAnswer": 0
  },
  {
    "question": "22. ¿Qué herramienta sirve para pruebas unitarias en Android?",
    "options": ["Photoshop", "JUnit", "Blender", "Unity Hub"],
    "correctAnswer": 1
  },
  {
    "question": "23. ¿Qué hace LeakCanary?",
    "options": ["Compila APKs", "Detecta fugas de memoria", "Diseña interfaces", "Gestiona APIs"],
    "correctAnswer": 1
  },
  {
    "question": "24. ¿Qué tecnología suele usarse para peticiones HTTP en Android?",
    "options": ["Retrofit", "SQLite", "RecyclerView", "XML"],
    "correctAnswer": 0
  },
  {
    "question": "25. ¿Qué ventaja aporta un estado inmutable?",
    "options": ["Cambios impredecibles", "Mayor estabilidad y trazabilidad", "Menos testabilidad", "Más acoplamiento"],
    "correctAnswer": 1
  },
  {
    "question": "26. ¿Qué ocurre en la Bridge Layer de React Native?",
    "options": ["Controla shaders", "Compila C#", "Gestiona escenas", "Traduce JS a llamadas nativas"],
    "correctAnswer": 3
  },
  {
    "question": "27. ¿Qué herramienta oficial ofrece tutoriales de Unity?",
    "options": ["Unity Learn", "DataStore", "Expo Go", "Crashlytics"],
    "correctAnswer": 0
  },
  {
    "question": "28. ¿Qué significa desacoplar presentación y reglas de negocio?",
    "options": ["Eliminar repositorios", "No usar ViewModels", "Sustituir Activities", "Separar UI y lógica"],
    "correctAnswer": 3
  },
  {
    "question": "29. ¿Qué hace Crashlytics?",
    "options": ["Gestiona prefabs", "Diseña layouts", "Compila código", "Monitoriza errores y fallos"],
    "correctAnswer": 3
  },
  {
    "question": "30. ¿Qué arquitectura organiza features y módulos reutilizables?",
    "options": ["Cliente-servidor", "Peer to peer", "Modular", "Monolítica"],
    "correctAnswer": 2
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
            <h2 className="text-xl text-muted-foreground">Simulacro IV</h2>
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
