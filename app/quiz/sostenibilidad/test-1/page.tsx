"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, X, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Question { question: string; options: string[]; correctAnswer: number }

const questions: Question[] = [
  { question: "¿Qué busca el desarrollo sostenible?", options: ["Aumentar solo el crecimiento económico", "Proteger únicamente el medio ambiente", "Equilibrar economía, sociedad y medio ambiente", "Reducir la producción industrial"], correctAnswer: 2 },
  { question: "¿En qué año se formalizó el concepto de desarrollo sostenible?", options: ["1972", "1987", "1992", "2000"], correctAnswer: 1 },
  { question: "¿Qué documento definió el desarrollo sostenible?", options: ["Agenda 2030", "Protocolo de Kioto", "Informe Brundtland", "Tratado de París"], correctAnswer: 2 },
  { question: "¿Cuántos Objetivos de Desarrollo Sostenible existen?", options: ["10", "12", "15", "17"], correctAnswer: 3 },
  { question: "¿Qué caracteriza a los ODS?", options: ["Son solo para países pobres", "Se aplican solo a empresas", "Son independientes entre sí", "Son universales e interconectados"], correctAnswer: 3 },
  { question: "¿Qué mide la huella ecológica?", options: ["El crecimiento económico", "El impacto del consumo de recursos humanos", "La calidad de vida", "La biodiversidad"], correctAnswer: 1 },
  { question: "¿En qué unidad se mide la huella ecológica?", options: ["Toneladas", "Kilómetros", "Hectáreas globales (gha)", "Grados"], correctAnswer: 2 },
  { question: "Actualmente, ¿cuántos planetas consume la humanidad aproximadamente?", options: ["1", "1.2", "1.7", "2.5"], correctAnswer: 2 },
  { question: "¿Qué es el Día de la Sobrecapacidad de la Tierra?", options: ["El día más caluroso del año", "El día con más emisiones", "El día de mayor consumo energético", "El momento en que se agotan los recursos anuales del planeta"], correctAnswer: 3 },
  { question: "¿Qué problema global está relacionado con la huella ecológica?", options: ["Solo el desempleo", "La sobreexplotación de recursos", "El turismo", "La digitalización"], correctAnswer: 1 },
  { question: "¿Cuál es una de las “5 R”?", options: ["Rentabilizar", "Reprogramar", "Rechazar", "Reinvertir"], correctAnswer: 2 },
  { question: "Cuál es el principal gas de efecto invernadero?", options: ["Oxígeno", "Nitrógeno", "Hidrógeno", "Dióxido de carbono (CO2)"], correctAnswer: 3 },
  { question: "¿Cuál es la causa principal del cambio climático actual?", options: ["Actividad volcánica", "Ciclos solares", "Actividad humana", "Corrientes marinas"], correctAnswer: 2 },
  { question: "¿Qué efecto provoca el calentamiento global?", options: ["Disminución del nivel del mar", "Menos fenómenos extremos", "Derretimiento de glaciares", "Menos lluvias"], correctAnswer: 2 },
  { question: "¿Qué ocurre con los fenómenos meteorológicos?", options: ["Disminuyen", "Desaparecen", "Se estabilizan", "Aumentan en frecuencia e intensidad"], correctAnswer: 3 },
  { question: "Cuál es una estrategia clave de descarbonización?", options: ["Uso de carbón", "Energías renovables", "Aumento del petróleo", "Reducción de tecnología"], correctAnswer: 1 },
  { question: "¿Qué significa neutralidad climática?", options: ["No emitir gases", "Emitir más gases", "Equilibrar emisiones y absorción", "Usar solo energía nuclear"], correctAnswer: 2 },
  { question: "¿Qué mejora la eficiencia energética?", options: ["Consumir más energía", "Usar energía fósil", "Usar menos energía para el mismo resultado", "Reducir población"], correctAnswer: 2 },
  { question: "¿Qué caracteriza al transporte sostenible?", options: ["Más coches privados", "Uso exclusivo de gasolina", "Fomento del transporte público y bicicleta", "Eliminación de transporte"], correctAnswer: 2 },
  { question: "¿Qué es la economía lineal?", options: ["Reciclar continuamente", "Reutilizar materiales", "Extraer, producir, usar y tirar", "Compartir productos"], correctAnswer: 2 },
  { question: "¿Qué propone la economía circular?", options: ["Aumentar residuos", "Reducir calidad", "Producir más rápido", "Mantener el valor de los productos"], correctAnswer: 3 },
  { question: "¿Cuál es el orden correcto de prioridades en la economía circular?", options: ["Reciclar → reducir → reutilizar", "Reducir → reutilizar → reparar → reciclar", "Reparar → tirar → reciclar", "Reutilizar → desechar"], correctAnswer: 1 },
  { question: "¿Qué es el ecodiseño?", options: ["Diseñar rápido", "Diseñar barato", "Diseñar productos duraderos y reparables", "Diseñar con plástico"], correctAnswer: 2 },
  { question: "¿Qué analiza el ciclo de vida de un producto?", options: ["Solo su venta", "Solo su uso", "Solo su reciclaje", "Todas sus fases desde producción hasta fin de vida"], correctAnswer: 3 },
  { question: "Qué hace Back Market?", options: ["Vende productos nuevos", "Produce energía", "Reacondiciona dispositivos electrónicos", "Fabrica ropa"], correctAnswer: 2 },
  { question: "¿Qué sector genera más residuos electrónicos?", options: ["Alimentación", "Moda", "Tecnología", "Turismo"], correctAnswer: 2 },
  { question: "¿Qué es la biodiversidad?", options: ["Solo plantas", "Solo animales", "Ecosistemas urbanos", "Variedad de vida en el planeta incluyendo todo tipo de especies"], correctAnswer: 3 },
  { question: "¿Qué son los servicios ecosistémicos?", options: ["Servicios turísticos", "Beneficios que obtenemos de la naturaleza", "Servicios digitales", "Recursos económicos"], correctAnswer: 1 },
  { question: "¿Cuál es una threat para la biodiversidad?", options: ["Agricultura sostenible", "Energías renovables", "Destrucción de hábitats", "Reciclaje"], correctAnswer: 2 },
  { question: "¿Qué objetivo tiene el marco Kunming-Montreal?", options: ["Aumentar emisiones", "Reducir población", "Mejorar turismo", "Proteger al menos el 30% del planeta"], correctAnswer: 3 }
];

function shuffleArray<T>(array: T[]): T[] { const newArray = [...array]; for (let i = newArray.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [newArray[i], newArray[j]] = [newArray[j], newArray[i]] } return newArray }

export default function SostenibilidadTest1Quiz() {
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
            <h1 className="text-4xl font-bold"><span className="text-foreground">Sostenibilidad</span></h1>
            <h2 className="text-xl text-muted-foreground">Test I</h2>
            <p className="text-muted-foreground text-lg">Desarrollo sostenible y medioambiente</p>
            <div className="space-y-4 text-left py-6">
              <div className="flex items-start gap-3"><Check className="w-5 h-5 text-lime-500 mt-0.5 shrink-0" /><div><p className="font-semibold text-foreground">{questions.length} Preguntas</p><p className="text-sm text-muted-foreground">Todos los conceptos clave</p></div></div>
              <div className="flex items-start gap-3"><Check className="w-5 h-5 text-lime-500 mt-0.5 shrink-0" /><div><p className="font-semibold text-foreground">Preguntas Aleatorizadas</p><p className="text-sm text-muted-foreground">Cada sesion es diferente</p></div></div>
              <div className="flex items-start gap-3"><Check className="w-5 h-5 text-lime-500 mt-0.5 shrink-0" /><div><p className="font-semibold text-foreground">Retroalimentacion Inmediata</p><p className="text-sm text-muted-foreground">Aprende mientras practicas</p></div></div>
            </div>
            <Button onClick={startQuiz} size="lg" className="w-full bg-lime-500 hover:bg-lime-600 text-white font-semibold">Comenzar Quiz</Button>
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
            <div className="py-8"><div className="text-6xl font-bold text-lime-500 mb-2">{Math.max(0, percentage)}%</div><p className="text-xl text-muted-foreground">Puntuacion final: {finalScore.toFixed(2)} de {shuffledQuestions.length}</p></div>
            <div className="space-y-2 text-left bg-muted/50 p-4 rounded-lg">
              <p className="text-foreground flex justify-between"><span>Respuestas correctas:</span><span className="text-green-500 font-semibold">{correctCount}</span></p>
              <p className="text-foreground flex justify-between"><span>Respuestas incorrectas:</span><span className="text-red-500 font-semibold">{incorrectCount}</span></p>
              <p className="text-foreground flex justify-between border-t border-border pt-2 mt-2"><span>Penalizacion (x0.25):</span><span className="text-red-500 font-semibold">-{(incorrectCount * 0.25).toFixed(2)}</span></p>
            </div>
            <div className="space-y-3">
              <Button onClick={startQuiz} size="lg" className="w-full bg-lime-500 hover:bg-lime-600 text-white font-semibold">Intentar de Nuevo</Button>
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
        <div className="text-sm text-muted-foreground">Pregunta {currentQuestionIndex + 1} de {shuffledQuestions.length}{" "}<span className="text-lime-500">{answeredCount} respondidas</span></div>
      </div>
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl p-8 bg-card border-border">
          <div className="space-y-6">
            <div className="flex justify-between items-start"><h2 className="text-2xl font-bold text-foreground text-balance flex-1">{currentQuestion.question}</h2><span className="text-sm text-muted-foreground ml-4">{currentQuestionIndex + 1}/{shuffledQuestions.length}</span></div>
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index; const isCorrect = index === currentQuestion.correctAnswer; const showCorrect = showFeedback && isCorrect; const showIncorrect = showFeedback && isSelected && !isCorrect
                return (<button key={index} onClick={() => handleAnswerClick(index)} disabled={showFeedback} className={`w-full text-left p-4 rounded-lg border-2 transition-all ${!showFeedback && "hover:border-lime-500 hover:bg-accent cursor-pointer"} ${showFeedback && "cursor-not-allowed"} ${isSelected && !showFeedback && "border-lime-500 bg-accent"} ${showCorrect && "border-green-500 bg-green-500/10"} ${showIncorrect && "border-red-500 bg-red-500/10"} ${!isSelected && !showCorrect && !showIncorrect && "border-border bg-card"}`}><div className="flex items-center justify-between gap-3"><span className="text-foreground font-medium">{option}</span>{showCorrect && <Check className="w-5 h-5 text-green-500 shrink-0" />}{showIncorrect && <X className="w-5 h-5 text-red-500 shrink-0" />}</div></button>)
              })}
            </div>
            <div className="flex gap-3 pt-4 border-t border-border"><Button onClick={handlePrevious} variant="outline" className="flex-1" disabled={currentQuestionIndex === 0}>Anterior</Button><Button onClick={handleNext} className="flex-1 bg-lime-500 hover:bg-lime-600 text-white" disabled={!showFeedback}>{currentQuestionIndex < shuffledQuestions.length - 1 ? "Siguiente" : "Ver Resultados"}</Button></div>
          </div>
        </Card>
      </div>
      <div className="p-4"><div className="h-2 bg-muted rounded-full overflow-hidden max-w-2xl mx-auto"><div className="h-full bg-lime-500 transition-all duration-300" style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }} /></div></div>
    </div>
  )
}
