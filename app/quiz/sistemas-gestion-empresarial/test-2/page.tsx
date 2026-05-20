"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, X, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Question { question: string; options: string[]; correctAnswer: number }

const questions: Question[] = [
  { question: "¿Qué objetivo principal tiene un ERP?", options: ["Servir como entorno de programación", "Diseñar webs", "Integrar áreas de la empresa", "Editar vídeo"], correctAnswer: 2 },
  { question: "¿Qué significa CRM?", options: ["Customer Relationship Management", "Control Resource Machine", "Central Report Module", "Client Router Manager"], correctAnswer: 0 },
  { question: "¿Qué ventaja aporta un ERP frente a hojas Excel aisladas?", options: ["Información unificada", "Más duplicidad", "Más errores", "Menos trazabilidad"], correctAnswer: 0 },
  { question: "¿Qué área suele cubrir un CRM?", options: ["BIOS", "Redes físicas", "Ventas y clientes", "Drivers"], correctAnswer: 2 },
  { question: "¿Qué beneficio aporta automatizar procesos?", options: ["Más tareas manuales", "Menor eficiencia", "Ahorro de tiempo", "Más duplicados"], correctAnswer: 2 },
  { question: "¿Qué empresa se beneficia especialmente de ERP?", options: ["Solo multinacionales", "Solo bancos", "Solo startups", "Pymes y grandes empresas"], correctAnswer: 3 },
  { question: "¿Qué problema resuelve un ERP al integrar departamentos?", options: ["Aumenta silos", "Elimina usuarios", "Mejora coordinación", "Reduce backups"], correctAnswer: 2 },
  { question: "¿Qué indicador ayuda a medir éxito de implantación?", options: ["FPS", "GHz", "USB", "ROI"], correctAnswer: 3 },
  { question: "¿Qué riesgo común existe sin gestión del cambio?", options: ["Más adopción", "Más ventas directas", "Más licencias", "Rechazo de usuarios"], correctAnswer: 3 },
  { question: "¿Qué enfoque suele ser mejor al implantar ERP?", options: ["Todo de golpe", "Sin formación", "Por fases", "Sin análisis"], correctAnswer: 2 },
  { question: "¿Qué ERP open source aparece en el temario?", options: ["SAP", "Odoo", "Oracle EBS", "Dynamics"], correctAnswer: 1 },
  { question: "¿Qué módulo Odoo ayuda a ventas comerciales?", options: ["Kernel", "Firewall", "BIOS", "CRM/Ventas"], correctAnswer: 3 },
  { question: "¿Qué módulo controla stock y almacén?", options: ["Calendario", "Chat", "Notas", "Inventario"], correctAnswer: 3 },
  { question: "¿Qué módulo registra facturas y contabilidad?", options: ["Contabilidad", "Editor", "Navegador", "Backup"], correctAnswer: 0 },
  { question: "¿Qué herramienta no-code permite personalizar Odoo?", options: ["Power BI", "Odoo Studio", "Photoshop", "pgAdmin"], correctAnswer: 1 },
  { question: "¿Qué vista muestra tareas por etapas?", options: ["BIOS", "Kanban", "RAW", "CLI"], correctAnswer: 1 },
  { question: "¿Qué vista muestra una ficha individual?", options: ["Mapa", "Formulario", "Pivot físico", "Socket"], correctAnswer: 1 },
  { question: "¿Qué vista muestra múltiples registros en tabla?", options: ["Canvas", "Kernel", "Lista", "Audio"], correctAnswer: 2 },
  { question: "¿Qué fase importa clientes y productos antiguos?", options: ["Marketing", "Migración de datos", "Rollback", "Licenciamiento"], correctAnswer: 1 },
  { question: "¿Qué significa Go-Live?", options: ["Borrar servidor", "Puesta en producción", "Crear backup", "Cambiar logo"], correctAnswer: 1 },
  { question: "¿Qué conviene hacer antes de personalizar en producción?", options: ["Probar en sandbox", "Cambiar todo directo", "Eliminar usuarios", "Ignorar copias"], correctAnswer: 0 },
  { question: "¿Qué práctica mejora mantenimiento futuro?", options: ["Sobrecustomizar", "Ocultar ajustes", "Documentar cambios", "Duplicar menús"], correctAnswer: 2 },
  { question: "¿Qué error común ocurre al crear demasiados campos?", options: ["Interfaz confusa", "Mejor UX", "Más velocidad", "Menos errores"], correctAnswer: 0 },
  { question: "¿Qué criterio debe seguir un menú ERP?", options: ["Decoración", "Orden aleatorio", "Nombres técnicos", "Lógica funcional"], correctAnswer: 3 },
  { question: "¿Qué ventaja tienen dashboards?", options: ["Indicadores rápidos", "Más clics", "Menos datos", "Sin filtros"], correctAnswer: 0 },
  { question: "¿Qué módulo suele usar RRHH?", options: ["GPU", "DNS", "XML", "Human Resources"], correctAnswer: 3 },
  { question: "¿Qué significa parametrizar Odoo?", options: ["Programar desde cero", "Borrar módulos", "Formatear servidor", "Configurar opciones del sistema"], correctAnswer: 3 },
  { question: "¿Qué suele requerir un upgrade mayor?", options: ["Nada", "Pruebas y compatibilidad", "Solo cambiar color", "Apagar ratón"], correctAnswer: 1 },
  { question: "¿Qué beneficio aporta trazabilidad en ERP?", options: ["Menos control", "Seguir operaciones y cambios", "Más caos", "Menos información"], correctAnswer: 1 },
  { question: "¿Qué define mejor un proyecto ERP exitoso?", options: ["Tecnología + procesos + personas", "Solo tecnología", "Solo hardware", "Solo licencias"], correctAnswer: 0 }
];

function shuffleArray<T>(array: T[]): T[] { const newArray = [...array]; for (let i = newArray.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [newArray[i], newArray[j]] = [newArray[j], newArray[i]] } return newArray }

export default function SGETest2Quiz() {
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
            <h1 className="text-4xl font-bold"><span className="text-foreground">Sistemas de Gestion Empresarial</span></h1>
            <h2 className="text-xl text-muted-foreground">Test II</h2>
            <p className="text-muted-foreground text-lg">ERP, CRM y sistemas empresariales</p>
            <div className="space-y-4 text-left py-6">
              <div className="flex items-start gap-3"><Check className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" /><div><p className="font-semibold text-foreground">{questions.length} Preguntas</p><p className="text-sm text-muted-foreground">Todos los conceptos clave</p></div></div>
              <div className="flex items-start gap-3"><Check className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" /><div><p className="font-semibold text-foreground">Preguntas Aleatorizadas</p><p className="text-sm text-muted-foreground">Cada sesion es diferente</p></div></div>
              <div className="flex items-start gap-3"><Check className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" /><div><p className="font-semibold text-foreground">Retroalimentacion Inmediata</p><p className="text-sm text-muted-foreground">Aprende mientras practicas</p></div></div>
            </div>
            <Button onClick={startQuiz} size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold">Comenzar Quiz</Button>
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
            <div className="py-8"><div className="text-6xl font-bold text-amber-500 mb-2">{Math.max(0, percentage)}%</div><p className="text-xl text-muted-foreground">Puntuacion final: {finalScore.toFixed(2)} de {shuffledQuestions.length}</p></div>
            <div className="space-y-2 text-left bg-muted/50 p-4 rounded-lg">
              <p className="text-foreground flex justify-between"><span>Respuestas correctas:</span><span className="text-green-500 font-semibold">{correctCount}</span></p>
              <p className="text-foreground flex justify-between"><span>Respuestas incorrectas:</span><span className="text-red-500 font-semibold">{incorrectCount}</span></p>
              <p className="text-foreground flex justify-between border-t border-border pt-2 mt-2"><span>Penalizacion (x0.25):</span><span className="text-red-500 font-semibold">-{(incorrectCount * 0.25).toFixed(2)}</span></p>
            </div>
            <div className="space-y-3">
              <Button onClick={startQuiz} size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold">Intentar de Nuevo</Button>
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
        <div className="text-sm text-muted-foreground">Pregunta {currentQuestionIndex + 1} de {shuffledQuestions.length}{" "}<span className="text-amber-500">{answeredCount} respondidas</span></div>
      </div>
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl p-8 bg-card border-border">
          <div className="space-y-6">
            <div className="flex justify-between items-start"><h2 className="text-2xl font-bold text-foreground text-balance flex-1">{currentQuestion.question}</h2><span className="text-sm text-muted-foreground ml-4">{currentQuestionIndex + 1}/{shuffledQuestions.length}</span></div>
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => {
                const isSelected = selectedAnswer === index; const isCorrect = index === currentQuestion.correctAnswer; const showCorrect = showFeedback && isCorrect; const showIncorrect = showFeedback && isSelected && !isCorrect
                return (<button key={index} onClick={() => handleAnswerClick(index)} disabled={showFeedback} className={`w-full text-left p-4 rounded-lg border-2 transition-all ${!showFeedback && "hover:border-amber-500 hover:bg-accent cursor-pointer"} ${showFeedback && "cursor-not-allowed"} ${isSelected && !showFeedback && "border-amber-500 bg-accent"} ${showCorrect && "border-green-500 bg-green-500/10"} ${showIncorrect && "border-red-500 bg-red-500/10"} ${!isSelected && !showCorrect && !showIncorrect && "border-border bg-card"}`}><div className="flex items-center justify-between gap-3"><span className="text-foreground font-medium">{option}</span>{showCorrect && <Check className="w-5 h-5 text-green-500 shrink-0" />}{showIncorrect && <X className="w-5 h-5 text-red-500 shrink-0" />}</div></button>)
              })}
            </div>
            <div className="flex gap-3 pt-4 border-t border-border"><Button onClick={handlePrevious} variant="outline" className="flex-1" disabled={currentQuestionIndex === 0}>Anterior</Button><Button onClick={handleNext} className="flex-1 bg-amber-500 hover:bg-amber-600 text-white" disabled={!showFeedback}>{currentQuestionIndex < shuffledQuestions.length - 1 ? "Siguiente" : "Ver Resultados"}</Button></div>
          </div>
        </Card>
      </div>
      <div className="p-4"><div className="h-2 bg-muted rounded-full overflow-hidden max-w-2xl mx-auto"><div className="h-full bg-amber-500 transition-all duration-300" style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }} /></div></div>
    </div>
  )
}
