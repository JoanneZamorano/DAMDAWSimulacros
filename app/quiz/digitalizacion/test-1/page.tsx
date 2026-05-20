"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, X, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Question { question: string; options: string[]; correctAnswer: number }

const questions: Question[] = [
  { question: "¿Qué define mejor la digitalización?", options: ["Uso de redes sociales", "Sustitución del papel por PDFs", "Transformación del modelo de negocio mediante tecnología", "Uso de ordenadores en la empresa"], correctAnswer: 2 },
  { question: "¿Qué caracteriza a la Industria 4.0?", options: ["Producción manual", "Interconexión and automatización inteligente", "Uso exclusivo de robots", "Eliminar de humanos"], correctAnswer: 1 },
  { question: "¿Cuál es el foco principal de la Industria 5.0?", options: ["Automatización total", "Reducción de costes", "Eliminación de errores humanos", "Persona en el centro del proceso"], correctAnswer: 3 },
  { question: "¿Qué es IT?", options: ["Control de máquinas industriales", "Sistemas de información y gestión de datos", "Sensores físicos", "Automatización mecánica"], correctAnswer: 1 },
  { question: "¿Qué es OT?", options: ["Software de oficina", "Redes sociales", "Tecnología que controla procesos físicos", "Bases de datos"], correctAnswer: 2 },
  { question: "¿Qué ocurre en la convergencia IT/OT?", options: ["Separación de sistemas", "Eliminación de datos", "Conexión entre sistemas digitales y físicos", "Sustitución de OT"], correctAnswer: 2 },
  { question: "¿Qué es IoT?", options: ["Red social", "Dispositivos conectados que generan datos", "Software de oficina", "Lenguaje de programación"], correctAnswer: 1 },
  { question: "¿Cuál es la clave del IoT?", options: ["El hardware", "El diseño", "El dato y su análisis", "La estética"], correctAnswer: 2 },
  { question: "¿Qué caracteriza a los cobots?", options: ["Trabajan aislados", "No son programables", "Sustituyen humanos totalmente", "Colaboran con personas"], correctAnswer: 3 },
  { question: "¿Para qué sirve la RA?", options: ["Crear mundos virtuales", "Superponer información sobre el mundo real", "Programar robots", "Analizar datos"], correctAnswer: 1 },
  { question: "¿Para qué sirve la RV?", options: ["Mostrar datos reales", "Simular entornos digitales", "Gestionar bases de datos", "Controlar sensores"], correctAnswer: 1 },
  { question: "¿Qué papel tiene la ciberseguridad en la Industria 4.0?", options: ["Es opcional", "Solo para bancos", "Pilar transversal", "Solo para servidores"], correctAnswer: 2 },
  { question: "¿Qué es Cloud Computing?", options: ["Comprar servidores", "Usar recursos bajo demanda", "Programar software", "Crear redes"], correctAnswer: 1 },
  { question: "¿Qué ofrece IaaS?", options: ["Software completo", "Infraestructura virtualizada", "Aplicaciones listas", "Interfaces de usuario"], correctAnswer: 1 },
  { question: "¿Qué ofrece PaaS?", options: ["Hardware físico", "Plataforma de desarrollo", "Redes privadas", "Dispositivos IoT"], correctAnswer: 1 },
  { question: "¿Qué es SaaS?", options: ["Infraestructura virtualizada", "Sistema operativo", "Software listo para usar", "Red privada"], correctAnswer: 2 },
  { question: "¿Qué es nube híbrida?", options: ["Solo pública", "Solo privada", "Mezcla de nube pública y privada", "Infraestructura local"], correctAnswer: 2 },
  { question: "¿Cuál es la ventaja principal del cloud?", options: ["Mayor hardware propio", "Pago por uso", "Más infraestructura física", "Menos capacidad de datos"], correctAnswer: 1 },
  { question: "¿Qué permite la escalabilidad en el cloud?", options: ["Reducir datos almacenados", "Ajustar recursos según demanda", "Eliminar usuarios del sistema", "Crear software automáticamente"], correctAnswer: 1 },
  { question: "¿Qué es la Inteligencia Artificial?", options: ["Hardware specialized", "Software básico de oficina", "Sistemas que imitan inteligencia humana", "Red física de computadoras"], correctAnswer: 2 },
  { question: "¿Qué es ANI?", options: ["IA general", "IA actual especializada en tareas concretas", "IA futura hipotética", "IA con consciencia humana"], correctAnswer: 1 },
  { question: "¿Qué es AGI?", options: ["IA actual disponible", "IA muy limitada", "IA general hipotética", "IA de procesamiento de datos"], correctAnswer: 2 },
  { question: "¿Qué hace el Machine Learning?", options: ["Crear redes de comunicación", "Aprender de datos automáticamente", "Diseñar hardware", "Controlar robots industriales"], correctAnswer: 1 },
  { question: "¿Qué caracteriza al Deep Learning?", options: ["Uso de bases de datos relacionales", "Redes neuronales artificiales profundas", "Redes físicas de comunicación", "Lenguajes de programación específicos"], correctAnswer: 1 },
  { question: "¿Qué hace el NLP?", options: ["Controlar robots industriales", "Analizar e interpretar lenguaje humano", "Crear sensores físicos", "Programar hardware de red"], correctAnswer: 1 },
  { question: "¿Qué hace la visión artificial?", options: ["Generar texto automáticamente", "Analizar e interpretar imágenes", "Generar sonido sintetizado", "Diseñar redes físicas"], correctAnswer: 1 },
  { question: "¿Por cuántas 'V' se define Big Data?", options: ["2V", "3V", "4V", "5V"], correctAnswer: 3 },
  { question: "¿Qué relación hay entre IA y Big Data?", options: ["Son tecnologías independientes", "La IA usa datos para aprender y mejorar", "Big Data no aporta valor a la IA", "La IA no necesita datos externos"], correctAnswer: 1 },
  { question: "¿Qué combinación genera mayor valor en Industria 4.0?", options: ["Una sola tecnología aislada", "Solo Inteligencia Artificial", "Orquestación de varias tecnologías", "Solo IoT"], correctAnswer: 2 },
  { question: "¿Qué permite la IA en las empresas?", options: ["Reducir el hardware necesario", "Tomar decisiones más inteligentes", "Eliminar todos los datos", "Crear redes de comunicación"], correctAnswer: 1 }
];
function shuffleArray<T>(array: T[]): T[] { const newArray = [...array]; for (let i = newArray.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [newArray[i], newArray[j]] = [newArray[j], newArray[i]] } return newArray }

export default function DigitalizacionTest1Quiz() {
  const [started, setStarted] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [incorrectCount, setIncorrectCount] = useState(0)
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([])
  const [finished, setFinished] = useState(false)

  const startQuiz = () => { setShuffledQuestions(shuffleArray(questions)); setStarted(true); setCurrentQuestionIndex(0); setSelectedAnswer(null); setShowFeedback(false); setCorrectCount(0); setIncorrectCount(0); setFinished(false) }
  const handleAnswerClick = (answerIndex: number) => { if (showFeedback) return; setSelectedAnswer(answerIndex); setShowFeedback(true); if (answerIndex === shuffledQuestions[currentQuestionIndex].correctAnswer) { setCorrectCount(correctCount + 1) } else { setIncorrectCount(incorrectCount + 1) } }
  const handleNext = () => { if (currentQuestionIndex < shuffledQuestions.length - 1) { setCurrentQuestionIndex(currentQuestionIndex + 1); setSelectedAnswer(null); setShowFeedback(false) } else { setFinished(true) } }
  const handlePrevious = () => { if (currentQuestionIndex > 0) { setCurrentQuestionIndex(currentQuestionIndex - 1); setSelectedAnswer(null); setShowFeedback(false) } }

  if (!started) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-lg p-8 bg-card border-border">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"><ArrowLeft className="w-4 h-4" />Volver al inicio</Link>
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold"><span className="text-foreground">Digitalizacion</span></h1>
            <h2 className="text-xl text-muted-foreground">Test I</h2>
            <p className="text-muted-foreground text-lg">Transformacion digital y tecnologias</p>
            <div className="space-y-4 text-left py-6">
              <div className="flex items-start gap-3"><Check className="w-5 h-5 text-violet-500 mt-0.5 shrink-0" /><div><p className="font-semibold text-foreground">{questions.length} Preguntas</p><p className="text-sm text-muted-foreground">Todos los conceptos clave</p></div></div>
              <div className="flex items-start gap-3"><Check className="w-5 h-5 text-violet-500 mt-0.5 shrink-0" /><div><p className="font-semibold text-foreground">Preguntas Aleatorizadas</p><p className="text-sm text-muted-foreground">Cada sesion es diferente</p></div></div>
              <div className="flex items-start gap-3"><Check className="w-5 h-5 text-violet-500 mt-0.5 shrink-0" /><div><p className="font-semibold text-foreground">Retroalimentacion Inmediata</p><p className="text-sm text-muted-foreground">Aprende mientras practicas</p></div></div>
            </div>
            <Button onClick={startQuiz} size="lg" className="w-full bg-violet-500 hover:bg-violet-600 text-white font-semibold">Comenzar Quiz</Button>
          </div>
        </Card>
      </div>
    )
  }

  if (finished) {
    const finalScore = correctCount - (incorrectCount * 0.25); const percentage = Math.round((finalScore / shuffledQuestions.length) * 100)
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-lg p-8 bg-card border-border">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Quiz Completado</h2>
            <div className="py-8"><div className="text-6xl font-bold text-violet-500 mb-2">{Math.max(0, percentage)}%</div><p className="text-xl text-muted-foreground">Puntuacion final: {finalScore.toFixed(2)} de {shuffledQuestions.length}</p></div>
            <div className="space-y-2 text-left bg-muted/50 p-4 rounded-lg">
              <p className="text-foreground flex justify-between"><span>Respuestas correctas:</span><span className="text-green-500 font-semibold">{correctCount}</span></p>
              <p className="text-foreground flex justify-between"><span>Respuestas incorrectas:</span><span className="text-red-500 font-semibold">{incorrectCount}</span></p>
              <p className="text-foreground flex justify-between border-t border-border pt-2 mt-2"><span>Penalizacion (x0.25):</span><span className="text-red-500 font-semibold">-{(incorrectCount * 0.25).toFixed(2)}</span></p>
            </div>
            <div className="space-y-3">
              <Button onClick={startQuiz} size="lg" className="w-full bg-violet-500 hover:bg-violet-600 text-white font-semibold">Intentar de Nuevo</Button>
              <Link href="/" className="block"><Button variant="outline" size="lg" className="w-full bg-transparent">Volver al Inicio</Button></Link>
            </div>
          </div>
        </Card>
      </div>
    )
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex]; const answeredCount = currentQuestionIndex + (showFeedback ? 1 : 0)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-border">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"><ArrowLeft className="w-4 h-4" />Volver</Link>
        <div className="text-sm text-muted-foreground">Pregunta {currentQuestionIndex + 1} de {shuffledQuestions.length}{" "}<span className="text-violet-500">{answeredCount} respondidas</span></div>
      </div>
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl p-8 bg-card border-border">
          <div className="space-y-6">
            <div className="flex justify-between items-start"><h2 className="text-2xl font-bold text-foreground text-balance flex-1">{currentQuestion.question}</h2><span className="text-sm text-muted-foreground ml-4">{currentQuestionIndex + 1}/{shuffledQuestions.length}</span></div>
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index; const isCorrect = index === currentQuestion.correctAnswer; const showCorrect = showFeedback && isCorrect; const showIncorrect = showFeedback && isSelected && !isCorrect
                return (<button key={index} onClick={() => handleAnswerClick(index)} disabled={showFeedback} className={`w-full text-left p-4 rounded-lg border-2 transition-all ${!showFeedback && "hover:border-violet-500 hover:bg-accent cursor-pointer"} ${showFeedback && "cursor-not-allowed"} ${isSelected && !showFeedback && "border-violet-500 bg-accent"} ${showCorrect && "border-green-500 bg-green-500/10"} ${showIncorrect && "border-red-500 bg-red-500/10"} ${!isSelected && !showCorrect && !showIncorrect && "border-border bg-card"}`}><div className="flex items-center justify-between gap-3"><span className="text-foreground font-medium">{option}</span>{showCorrect && <Check className="w-5 h-5 text-green-500 shrink-0" />}{showIncorrect && <X className="w-5 h-5 text-red-500 shrink-0" />}</div></button>)
              })}
            </div>
            <div className="flex gap-3 pt-4 border-t border-border"><Button onClick={handlePrevious} variant="outline" className="flex-1" disabled={currentQuestionIndex === 0}>Anterior</Button><Button onClick={handleNext} className="flex-1 bg-violet-500 hover:bg-violet-600 text-white" disabled={!showFeedback}>{currentQuestionIndex < shuffledQuestions.length - 1 ? "Siguiente" : "Ver Resultados"}</Button></div>
          </div>
        </Card>
      </div>
      <div className="p-4"><div className="h-2 bg-muted rounded-full overflow-hidden max-w-2xl mx-auto"><div className="h-full bg-violet-500 transition-all duration-300" style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }} /></div></div>
    </div>
  )
}
