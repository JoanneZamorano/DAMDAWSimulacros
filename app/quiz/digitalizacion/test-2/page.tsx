"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, X, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface Question { question: string; options: string[]; correctAnswer: number }

const questions: Question[] = [
  { question: "¿Qué diferencia principal existe entre Machine Learning (ML) y Deep Learning (DL)?", options: ["ML solo funciona con imágenes y DL solo con texto", "DL es una evolución de ML que utiliza redes neuronales con muchas capas", "No hay diferencia, son sinónimos", "ML usa redes neuronales profundas y DL usa algoritmos simples"], correctAnswer: 1 },
  { question: "¿Qué tipo de IA existe actualmente en el mundo real?", options: ["Superinteligencia Artificial, superior al ser humano en todo", "IA Consciente, que piensa y siente como un humano", "IA General (AGI), capaz de realizar cualquier tarea cognitiva", "IA Estrecha (ANI), diseñada para tareas concretas"], correctAnswer: 3 },
  { question: "Spotify utiliza IA para personalizar la experiencia del usuario. ¿Qué función genera una playlist personalizada cada lunes combinando análisis colaborativo y de contenido?", options: ["Daily Mix", "Radio personalizada", "Descubrimiento Semanal", "Autoplay"], correctAnswer: 2 },
  { question: "¿Cuáles son las 3V que definen el Big Data?", options: ["Volumen, Velocidad, Variedad", "Volumen, Virtualización, Velocidad", "Valor, Veracidad, Visualización", "Variedad, Validación, Valor"], correctAnswer: 0 },
  { question: "¿Qué relación existe entre la IA y el Big Data?", options: ["El Big Data reemplaza a la IA en la toma de decisiones", "La IA necesita datos para aprender y el Big Data necesita IA para generar conocimiento útil", "El Big Data es un tipo de IA especializada en almacenamiento", "Son tecnologías independientes que no se necesitan mutuamente"], correctAnswer: 1 },
  { question: "Amazon utiliza IA y Big Data de forma integrada. ¿Cuál de estas aplicaciones NO es un uso real de Amazon?", options: ["Logística predictiva que mueve productos antes del pedido", "Generación automática de productos físicos mediante impresión 3D", "Precios dinámicos que cambian varias veces al día", "Recomendaciones personalizadas basadas en hábitos de compra"], correctAnswer: 1 },
  { question: "¿Qué es un sesgo algorítmico?", options: ["Un fallo de hardware que afecta al rendimiento del modelo", "Una decisión injusta producida por un algoritmo que aprendió de datos con prejuicios históricos", "Un error de programación en el código fuente del algoritmo", "Una limitación técnica de las redes neuronales que impide el aprendizaje"], correctAnswer: 1 },
  { question: "¿Qué ocurrió con el sistema de selección de personal de Amazon en 2018?", options: ["El algoritmo penalizaba automáticamente los currículums de mujeres porque aprendió de datos históricos con sesgo de género", "Amazon lo vendió a otras empresas como herramienta de RRHH", "El sistema seleccionaba candidatos al azar sin criterio", "El sistema fue hackeado y filtró datos de candidatos"], correctAnswer: 0 },
  { question: "¿Qué es la explicabilidad (XAI) en el contexto de la IA?", options: ["La capacidad de una IA de explicarse a sí misma y tener consciencia", "Un lenguaje de programación para crear modelos de IA", "La posibilidad de comprender y auditar cómo un algoritmo toma sus decisiones", "Un estándar técnico de velocidad de procesamiento en redes neuronales"], correctAnswer: 2 },
  { question: "¿Qué normativa europea, aprobada en 2024, regula el uso de la IA según niveles de riesgo?", options: ["AI Act", "Ley de Servicios Digitales (DSA)", "RGPD", "Directiva NIS2"], correctAnswer: 0 },
  { question: "¿Cuál es la diferencia fundamental entre un dato y una información?", options: ["Son sinónimos, no hay diferencia", "La información es un dato al que se le ha añadido contexto y estructura", "El dato es digital y la información es analógica", "El dato tiene contexto y la información no"], correctAnswer: 1 },
  { question: "¿Cuál es el orden correcto del ciclo de vida del dato?", options: ["Uso → Análisis → Captura → Almacenamiento → Destrucción", "Almacenamiento → Captura → Uso → Procesamiento → Archivo", "Captura → Almacenamiento → Procesamiento → Análisis → Uso → Archivo/Destrucción", "Análisis → Captura → Almacenamiento → Uso → Destrucción"], correctAnswer: 2 },
  { question: "¿Qué diferencia principal hay entre un Data Warehouse y un Data Lee?", options: ["No hay diferencia, son nombres distintos para el mismo sistema", "El Data Warehouse usa schema-on-write con datos estructurados y el Data Lake usa schema-on-read con datos en bruto", "El Data Warehouse almacena datos en bruto y el Data Lake datos estructurados", "El Data Lake es más antiguo y está siendo reemplazado por el Data Warehouse"], correctAnswer: 1 },
  { question: "¿Qué es un Data Lakehouse?", options: ["Una arquitectura híbrida que combina la flexibilidad del Data Lake con la gobernanza del Data Warehouse", "Un sistema de backup automático en la nube", "Un almacén de datos exclusivamente en formato SQL", "Un Data Lake sin gobernanza ni seguridad"], correctAnswer: 0 },
  { question: "En el caso de estudio de Airbnb, ¿qué arquitectura de datos utilizan?", options: ["Solo Data Warehouse con Oracle", "Una arquitectura mixta con Amazon Redshift (Data Warehouse) y Amazon S3 (Data Lake)", "Bases de datos locales sin nube", "Solo Data Lake con Google Cloud Storage"], correctAnswer: 1 },
  { question: "¿Qué tres dimensiones componen la tríada CIA en ciberseguridad?", options: ["Control, Inspección, Auditoría", "Código, Infraestructura, Automatización", "Cifrado, Identificación, Autenticación", "Confidencialidad, Integridad, Disponibilidad"], correctAnswer: 3 },
  { question: "¿Qué tipo de ataque cifra los archivos del equipo infectado y exige un pago para liberarlos?", options: ["Ataque DoS", "Ingeniería social", "Ransomware", "Phishing"], correctAnswer: 2 },
  { question: "El ataque WannaCry de 2017 explotó una vulnerabilidad conocida como EternalBlue. ¿Cuál fue la lección principal?", options: ["Las copias de seguridad no sirven contra ransomware", "Solo los bancos y grandes empresas son vulnerables a ciberataques", "Los antivirus son inútiles contra cualquier tipo de ataque", "Actualizar los sistemas y mantener backups desconectados son las medidas de defensa más eficaces"], correctAnswer: 3 },
  { question: "¿Qué establece la regla 3-2-1 de copias de seguridad?", options: ["3 de acceso, 2 factores de autenticación, 1 administrador", "3 firewalls, 2 antivirus, 1 auditoría anual", "3 copias de los datos, en 2 soportes diferentes, 1 fuera de línea", "3 contraseñas, 2 usuarios, 1 servidor"], correctAnswer: 2 },
  { question: "¿Qué derechos garantiza el RGPD al ciudadano sobre sus datos personales?", options: ["Solo el derecho a crear nuevas cuentas en redes sociales", "Acceso, rectificación, supresión, portabilidad, oposición y limitación del tratamiento", "Únicamente el derecho a eliminar su cuenta de correo electrónico", "El derecho a vender sus datos personales al mejor postor"], correctAnswer: 1 },
  { question: "¿Cuál debe ser el primer paso en un proyecto de transformación digital?", options: ["Seleccionar las tecnologías más innovadoras del mercado", "Contratar una consultora tecnológica externa", "Instalar un ERP y un CRM inmediatamente", "Definir la estrategia digital: visión, objetivos y valor diferenciado"], correctAnswer: 3 },
  { question: "¿Qué cuatro áreas analiza el diagnóstico digital de una empresa?", options: ["Hardware, software, redes y bases de datos", "Servidores, cloud, IA y Big Data", "Marketing, ventas, finanzas y RRHH", "Procesos, personas/cultura, tecnología y clientes"], correctAnswer: 3 },
  { question: "¿Qué criterios deben guiar la selección de Tecnologías Habilitadoras Digitales (THD)?", options: ["Alineamiento estratégico, ROI, escalabilidad y seguridad", "Que sea la tecnología más nueva del mercado, independientemente del contexto", "Recomendación de un influencer tecnológico", "Popularidad en redes sociales y coste mínimo"], correctAnswer: 0 },
  { question: "En el caso de LEGO, ¿qué plataforma digital permitió a los fans proponer nuevos sets de construcción?", options: ["LEGO Digital Designer", "LEGO Mindstorms Hub", "LEGO Store Online", "LEGO Ideas"], correctAnswer: 3 },
  { question: "¿Qué herramienta de análisis estratégico evalúa Fortalezas, Debilidades, Oportunidades y Amenazas?", options: ["Análisis DAFO", "Matriz impacto/esfuerzo", "Gartner Magic Quadrant", "Diagrama de Gantt"], correctAnswer: 0 },
  { question: "¿Cuáles son las cuatro áreas críticas de un plan de implantación digital?", options: ["Gestión de datos, seguridad, recursos humanos/gestión del cambio y medición", "Diseño web, SEO, redes sociales y publicidad", "Marketing, logística, ventas y atención al cliente", "Hardware, software, redes y almacenamiento"], correctAnswer: 0 },
  { question: "¿Qué significa que un objetivo sea SMART?", options: ["Seguro, Monetizable, Ágil, Replicable, Transparente", "Social, Modular, Adaptable, Resiliente, Transformador", "Específico, Medible, Alcanzable, Relevante, con Tiempo definido", "Simple, Medible, Automático, Rápido, Tecnológico"], correctAnswer: 2 },
  { question: "En el caso de BBVA, ¿cuál fue el eje principal de su plan de implantación?", options: ["La transformación cultural y formación del personal (reskilling)", "La externalización completa del departamento de IT", "La compra masiva de servidores propios", "La eliminación total de oficinas físicas"], correctAnswer: 0 },
  { question: "¿Cuál de estos mitos sobre la transformación digital es FALSO?", options: ["Las personas son el motor real del cambio, no solo la tecnología", "La transformación digital es un proyecto exclusivo del departamento de informática", "La transformación digital es un proceso continuo, no un proyecto puntual", "La gestión del cambio requiere comunicación clara y formación"], correctAnswer: 1 },
  { question: "¿Qué metodología ágil organiza el trabajo en sprints con revisiones y retrospectivas?", options: ["Waterfall", "Scrum", "Six Sigma", "PRINCE2"], correctAnswer: 1 }
];

function shuffleArray<T>(array: T[]): T[] { const newArray = [...array]; for (let i = newArray.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [newArray[i], newArray[j]] = [newArray[j], newArray[i]] } return newArray }

export default function DigitalizacionTest2Quiz() {
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
            <h2 className="text-xl text-muted-foreground">Test II</h2>
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
