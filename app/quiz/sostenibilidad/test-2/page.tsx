"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, X, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Question { question: string; options: string[]; correctAnswer: number }

const questions: Question[] = [
  { question: "Una empresa con alto índice de Gini en su plantilla indica:", options: ["Alta productividad", "Baja rotación", "Desigualdad salarial interna elevada", "Alta formación"], correctAnswer: 2 },
  { question: "¿Qué combinación define mejor la tasa AROPE?", options: ["Ingresos y educación", "Pobreza, carencia material y empleo", "Salud y vivienda", "Producción y consumo"], correctAnswer: 1 },
  { question: "¿Qué pilar NO forma parte de la sostenibilidad social?", options: ["Equidad", "Bienestar", "Producción industrial", "Justicia social"], correctAnswer: 2 },
  { question: "Una empresa que externaliza producción sin controlar condiciones laborales:", options: ["Mejora eficiencia", "Reduce costes", "Asume riesgos extra-financieros", "Mejora reputación"], correctAnswer: 2 },
  { question: "¿Qué organización impulsa el trabajo digno?", options: ["OIT", "FMI", "ONU Mujeres", "Banco Mundial"], correctAnswer: 0 },
  { question: "¿Qué incluye el trabajo digno?", options: ["Solo salario", "Salarios, seguridad y derechos laborales", "Solo empleo", "Solo formación"], correctAnswer: 1 },
  { question: "¿Qué es la equidad salarial?", options: ["Subir salarios", "Igualar beneficios", "Pagar igual por trabajo de igual valor", "Reducir sueldos"], correctAnswer: 2 },
  { question: "¿Qué es la transición justa?", options: ["Cambio tecnológico", "Cambio económico", "Cambio político", "Adaptación laboral en transición ecológica"], correctAnswer: 3 },
  { question: "¿Qué caracteriza la Industria 4.0?", options: ["Digitalización y automatización", "Agricultura", "Comercio", "Turismo"], correctAnswer: 0 },
  { question: "¿Qué es un riesgo extra-financiero?", options: ["Riesgo económico", "Riesgo ambiental o social que afecta a la empresa", "Riesgo bancario", "Riesgo fiscal"], correctAnswer: 1 },
  { question: "¿Qué factor hace fiable una certificación?", options: ["Precio", "Diseño", "Marca", "Verificación independiente"], correctAnswer: 3 },
  { question: "¿Qué significa reporting no financiero?", options: ["Informes contables", "Informes fiscales", "Informes laborales", "Informes sobre impacto social y ambiental"], correctAnswer: 3 },
  { question: "¿Qué estándar es global para informes de sostenibilidad?", options: ["GRI", "ISO 9001", "OIT", "FMI"], correctAnswer: 0 },
  { question: "¿Qué son los ESRS?", options: ["Normas laborales", "Estándares europeos de sostenibilidad", "Normas fiscales", "Normas de calidad"], correctAnswer: 1 },
  { question: "¿Qué evalúa EcoVadis?", options: ["Beneficios", "Producción", "Sostenibilidad de empresas", "Ventas"], correctAnswer: 2 },
  { question: "¿Qué ventaja tiene el etiquetado energético?", options: ["Permite comparar eficiencia de productos", "Reduce precio", "Aumenta consumo", "Mejora publicidad"], correctAnswer: 0 },
  { question: "¿Qué es una certificación?", options: ["Verificación externa de cumplimiento de criterios", "Publicidad", "Etiqueta interna", "Precio"], correctAnswer: 0 },
  { question: "¿Qué certifica ISO 14001?", options: ["Calidad", "Gestión ambiental", "Seguridad", "Finanzas"], correctAnswer: 1 },
  { question: "¿Qué es ISO 26000?", options: ["Normas de calidad", "Certificación ambiental", "Guía de responsabilidad social", "Normas fiscales"], correctAnswer: 2 },
  { question: "¿Qué indicador mide mejor desigualdad estructural?", options: ["PIB", "Inflación", "Índice de Gini", "Exportaciones"], correctAnswer: 2 },
  { question: "¿Qué garantiza Fair Trade?", options: ["Condiciones justas para productores", "Bajo precio", "Alta producción", "Tecnología"], correctAnswer: 0 },
  { question: "¿Qué es el Ecolabel?", options: ["Marca privada", "Etiqueta ecológica europea", "Certificación social", "Norma ISO"], correctAnswer: 1 },
  { question: "¿Qué aporta la Ley Europea de Accesibilidad?", options: ["Mejora producción", "Reduce costes", "Aumenta exportaciones", "Diseño inclusivo de productos y servicios"], correctAnswer: 3 },
  { question: "¿Qué es el greenwashing?", options: ["Producción ecológica", "Reciclaje", "Publicidad engañosa sobre sostenibilidad", "Energía limpia"], correctAnswer: 2 },
  { question: "¿Qué es la compra verde?", options: ["Comprar barato", "Comprar rápido", "Comprar local", "Comprar productos sostenibles"], correctAnswer: 3 },
  { question: "¿Qué es la RSC?", options: ["Integración de compromisos sociales y ambientales", "Marketing", "Producción", "Finanzas"], correctAnswer: 0 },
  { question: "¿Qué riesgo tiene ignorar la salud mental laboral?", options: ["Reducir crecimiento de la empresa", "Reduce costes", "Disminuye rendimiento y retención", "Aumenta beneficios"], correctAnswer: 2 },
  { question: "¿Qué es el Pilar Europeo de Derechos Sociales?", options: ["Ley económica", "Marco de políticas sociales de la UE", "Norma fiscal", "Tratado comercial"], correctAnswer: 1 },
  { question: "¿Qué promueve la Ley Europea de Accesibilidad?", options: ["Producción de medios accesibles", "Control de las Exportaciones", "Acceso universal a la Tecnología", "Acceso universal a productos y servicios"], correctAnswer: 3 },
  { question: "¿Qué define la sostenibilidad empresarial avanzada?", options: ["Solo beneficios", "Solo medio ambiente", "Solo innovación", "Integración ambiental, social y gobernanza"], correctAnswer: 3 }
];

function shuffleArray<T>(array: T[]): T[] { const newArray = [...array]; for (let i = newArray.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [newArray[i], newArray[j]] = [newArray[j], newArray[i]] } return newArray }

export default function SostenibilidadTest2Quiz() {
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
            <h2 className="text-xl text-muted-foreground">Test II</h2>
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
