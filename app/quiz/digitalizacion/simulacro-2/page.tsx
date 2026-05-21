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
    question: "31. ¿Qué ocurrió con el sistema de selección de personal de IA desarrollado por Amazon en 2018?",
    options: [
      "Funcionó perfectamente y redujo el tiempo de contratación un 90%",
      "Penalizó automáticamente currículums femeninos por estar entrenado con datos históricos sesgados hacia hombres",
      "Fue hackeado y comprometió datos de candidatos",
      "Rechazó candidatos sin experiencia favoreciendo solo a perfiles senior"
    ],
    correctAnswer: 1,
  },
  {
    question: "32. ¿Qué es el AI Act de la Unión Europea aprobado en 2024?",
    options: [
      "Una ley que prohíbe el uso de IA en entornos empresariales europeos",
      "Un marco legal que clasifica sistemas de IA por nivel de riesgo y obliga a transparencia, trazabilidad y supervisión humana",
      "Una directiva que obliga a todas las empresas a usar IA en sus procesos",
      "Un acuerdo internacional que cede la regulación de IA a Estados Unidos"
    ],
    correctAnswer: 1,
  },
  {
    question: "33. '37 ºC' es un dato. '37 ºC de temperatura corporal de un paciente adulto' es…",
    options: [
      "Sigue siendo un dato sin valor añadido",
      "Información (dato + contexto + estructura)",
      "Conocimiento aplicable para tomar decisiones",
      "Big Data porque tiene muchos decimales"
    ],
    correctAnswer: 1,
  },
  {
    question: "34. ¿Cuál es el orden correcto del ciclo de vida del dato?",
    options: [
      "Análisis → Captura → Almacenamiento → Uso → Destrucción",
      "Captura → Almacenamiento → Procesamiento → Análisis → Uso → Archivo/Destrucción",
      "Uso → Análisis → Captura → Almacenamiento → Destrucción",
      "Destrucción → Captura → Análisis → Almacenamiento → Uso"
    ],
    correctAnswer: 1,
  },
  {
    question: "35. ¿Cuál es la filosofía de almacenamiento de un Data Warehouse?",
    options: [
      "Schema-on-read: la estructura se aplica al leer los datos",
      "Schema-on-write: el formato y validación se definen antes de almacenar los datos",
      "No-schema: acepta cualquier tipo de dato sin estructura",
      "Schema-on-demand: el esquema se crea cuando lo pide el analista"
    ],
    correctAnswer: 1,
  },
  {
    question: "36. ¿Para qué uso es más adecuado un Data Lake?",
    options: [
      "Reporting financiero mensual con datos estructurados",
      "Exploración, Machine Learning y Ciencia de Datos con datos en bruto (estructurados y no estructurados)",
      "Contabilidad y facturación empresarial",
      "Gestión de relaciones con clientes (CRM)"
    ],
    correctAnswer: 1,
  },
  {
    question: "37. ¿Qué es un Data Lakehouse?",
    options: [
      "Un Data Lake ubicado físicamente dentro de un almacén industrial",
      "Una arquitectura que combina la gobernanza del Data Warehouse con la flexibilidad del Data Lake",
      "Un tipo de base de datos NoSQL para startups",
      "Una nube privada exclusiva para gestión de datos empresariales"
    ],
    correctAnswer: 1,
  },
  {
    question: "38. La 'tríada CIA' en ciberseguridad hace referencia a…",
    options: [
      "Central Intelligence Agency, Confidential Information, Access",
      "Confidencialidad, Integridad y Disponibilidad de la información",
      "Cloud, IoT, Automatización: los tres pilares de la Industria 4.0",
      "Contraseña, Identificación y Autenticación"
    ],
    correctAnswer: 1,
  },
  {
    question: "39. El ataque WannaCry de 2017 fue un ejemplo de…",
    options: [
      "Phishing: correo falso para robar contraseñas",
      "Ransomware: cifró archivos en miles de equipos y exigió rescate en Bitcoin",
      "DDoS: saturó servidores con tráfico masivo",
      "Ingeniería social: manipuló empleados para revelar contraseñas"
    ],
    correctAnswer: 1,
  },
  {
    question: "40. ¿Qué principio fundamental establece el RGPD sobre la protección de datos?",
    options: [
      "Las empresas pueden usar datos personales sin restricciones si los anonimiza",
      "Privacidad desde el diseño y por defecto: seguridad incorporada desde el origen del sistema",
      "Solo aplica a empresas de más de 500 empleados en Europa",
      "Los datos personales pueden compartirse libremente entre empresas del mismo sector"
    ],
    correctAnswer: 1,
  },
  {
    question: "41. ¿Cómo usó el Ayuntamiento de Barcelona los datos para mejorar la recogida de residuos?",
    options: [
      "Contratando más camiones y conductores para más frecuencia de recogida",
      "Sensores IoT en contenedores + modelos de optimización de rutas → rutas dinámicas según nivel de llenado real",
      "Instalando contenedores más grandes para reducir la frecuencia",
      "Subcontratando el servicio a empresas privadas con tecnología propia"
    ],
    correctAnswer: 1,
  },
  {
    question: "42. ¿Cuál es el riesgo de 'acumular muchos datos sin estrategia'?",
    options: [
      "Que los datos se dupliquen y ocupen más espacio del necesario",
      "Crear un 'data swamp': pantano de datos inutilizables por falta de gobernanza, calidad y preguntas claras",
      "Que los datos expiren y dejen de ser válidos",
      "Que otros competidores puedan acceder a esos datos fácilmente"
    ],
    correctAnswer: 1,
  },
  {
    question: "43. ¿Cuál es el primer paso correcto para iniciar un proyecto de transformación digital?",
    options: [
      "Seleccionar la tecnología más innovadora del mercado (IA, blockchain, IoT)",
      "Contratar a un consultora tecnológica para que implante soluciones",
      "Definir la estrategia digital: qué objetivos persigue y desde dónde parte la empresa",
      "Migrar toda la infraestructura a la nube inmediatamente"
    ],
    correctAnswer: 2,
  },
  {
    question: "44. ¿Cuáles son las 4 áreas del diagnóstico digital?",
    options: [
      "Hardware, Software, Redes y Almacenamiento",
      "Procesos, Personas/Cultura, Tecnología y Clientes",
      "Marketing, Ventas, Producción y Logística",
      "Finanzas, RRHH, IT y Operaciones"
    ],
    correctAnswer: 1,
  },
  {
    question: "45. Al seleccionar una Tecnología Habilitadora Digital (THD), ¿cuál es el criterio más importante?",
    options: [
      "Que sea la tecnología más mencionada en redes sociales y conferencias",
      "Que sea la más económica del mercado",
      "Que resuelva necesidades estratégicas concretas con ROI, escalabilidad y seguridad",
      "Que la use la competencia directa de la empresa"
    ],
    correctAnswer: 2,
  },
  {
    question: "46. ¿Para qué sirve la 'Matriz Impacto/Esfuerzo' en un proyecto de transformación digital?",
    options: [
      "Para calcular el presupuesto total del proyecto digital",
      "Para clasificar iniciativas en 4 cuadrantes y priorizar: alto impacto/bajo esfuerzo primero",
      "Para medir el impacto ambiental de la digitalización",
      "Para evaluar el rendimiento individual de los empleados en el proceso de cambio"
    ],
    correctAnswer: 1,
  },
  {
    question: "47. ¿Cuáles son las 4 áreas críticas del Plan de Implantación?",
    options: [
      "Marketing, Ventas, IT y Finanzas",
      "Gestión de datos, Seguridad, Recursos Humanos/Cambio y Medición (KPIs SMART)",
      "Hardware, Software, Redes y Formación",
      "Nube, IA, Blockchain y IoT"
    ],
    correctAnswer: 1,
  },
  {
    question: "48. ¿Por qué fracasan muchos proyectos de transformación digital?",
    options: [
      "Por elegir tecnología demasiado avanzada para el mercado actual",
      "Porque la tecnología es demasiado cara y los presupuestos son insuficientes",
      "Por no gestionar el cambio cultural: las personas no adoptan las nuevas herramientas",
      "Porque los reguladores no permiten implementar innovaciones digitales"
    ],
    correctAnswer: 2,
  },
  {
    question: "49. ¿Cómo logró LEGO su transformación digital sin abandonar su producto físico?",
    options: [
      "Vendiendo la empresa a un fabricante de videojuegos",
      "Creando LEGO Ideas (co-creación online), ecosistema de videojuegos y series, manteniendo la esencia creativa",
      "Reduciendo el catálogo de productos para centrarse solo en sets digitales",
      "Externalizando toda la producción y convirtiéndose en empresa puramente digital"
    ],
    correctAnswer: 1,
  },
  {
    question: "50. ¿Qué significa que un objetivo de transformación digital sea 'SMART'?",
    options: [
      "Que use tecnología inteligente (Smart Technology) para medirse automáticamente",
      "Específico, Medible, Alcanzable, Relevante y con límite de Tiempo",
      "Que sea diseñado por consultores externos especializados en digitalización",
      "Simple, Manejable, Adaptable, Repetible y Transferible"
    ],
    correctAnswer: 1,
  },
  {
    question: "51. ¿Cuál de estas afirmaciones es VERDADERA?",
    options: [
      "La RV profesional solo se usa para videojuegos",
      "La ciberseguridad solo afecta a bancos y gobiernos grandes",
      "Blockchain es lo mismo que Bitcoin",
      "La nube bien configurada suele ser más segura que servidores locales propios"
    ],
    correctAnswer: 3,
  },
  {
    question: "52. Waze/Google Maps son ejemplos de IA aplicada a…",
    options: [
      "Visión Artificial para detectar obstáculos en carretera",
      "NLP para interpretar comandos de voz del conductor",
      "ML aplicado a optimización de rutas en tiempo real con millones de datos GPS",
      "Deep Learning para predecir el tiempo meteorológico"
    ],
    correctAnswer: 2,
  },
  {
    question: "53. ¿Qué tecnología es la clave del 'fast fashion' de Inditex para reaccionar en días a las tendencias?",
    options: [
      "Big Data de redes sociales para predecir modas",
      "IA generativa para diseñar ropa automáticamente",
      "RFID + integración en tiempo real entre tiendas, online y cadena de suministro (IT/OT)",
      "Impresión 3D para fabricar prendas bajo demanda"
    ],
    correctAnswer: 2,
  },
  {
    question: "54. Una startup quiere desplegar su app web rápido sin configurar servidores. ¿Qué modelo cloud elige?",
    options: [
      "IaaS con Amazon EC2 y configuración manual del servidor",
      "PaaS con Heroku o Render: sube código y la app queda online en minutos",
      "Nube privada con servidores propios en las oficinas",
      "SaaS: usa Gmail para gestionar la comunicación del equipo"
    ],
    correctAnswer: 1,
  },
  {
    question: "55. ¿Qué garantiza el RGPD a cualquier ciudadano europeo?",
    options: [
      "Que sus datos nunca se almacenen digitalmente",
      "Acceso, rectificación, supresión y portabilidad de sus datos personales (derechos ARCO-POL)",
      "Que no pueda comprarse publicidad personalizada en internet",
      "Que las empresas paguen por usar sus datos personales"
    ],
    correctAnswer: 1,
  },
  {
    question: "56. Un termostato inteligente que enciende la calefacción al recibir una orden de voz es ejemplo de…",
    options: [
      "Inteligencia Artificial General (AGI)",
      "Convergencia IT/OT a pequeña escala: voz (IT) controla sistema físico de calefacción (OT)",
      "Blockchain para registro seguro de la temperatura",
      "Data Warehouse para histórico de temperaturas del hogar"
    ],
    correctAnswer: 1,
  },
  {
    question: "57. Según el temario, ¿por qué las personas se resisten a la transformación digital?",
    options: [
      "Porque son incapaces de aprender nuevas tecnologías a partir de cierta edad",
      "Por incertidumbre y falta de comprensión del porqué: no se resisten al cambio sino a no entenderlo",
      "Porque prefieren el trabajo manual y no valoran la eficiencia",
      "Porque los sindicatos bloquean sistemáticamente cualquier innovación tecnológica"
    ],
    correctAnswer: 1,
  },
  {
    question: "58. ¿Cómo usa McLaren F1 las THD en competición?",
    options: [
      "Solo usa Big Data offline para analizar carreras pasadas",
      "Gemelo Digital (300+ sensores) + Impresión 3D + Blockchain + 5G para optimizar rendimiento en tiempo real",
      "Principalmente IA generativa para diseñar el monoplaza cada temporada",
      "Cobots que realizan los cambios de neumáticos durante las paradas en boxes"
    ],
    correctAnswer: 1,
  },
  {
    question: "59. ¿Qué significa que Amazon use 'logística predictiva'?",
    options: [
      "Que Amazon adivina qué quiere comprar el usuario antes de que lo busque usando magia algorítmica",
      "Que modelos de Big Data + ML predicen qué productos se venderán en cada zona y los preposicionan en almacenes cercanos antes del pedido",
      "Que los precios suben automáticamente cuando hay mucha demanda",
      "Que los repartidores usan GPS inteligente para optimizar su ruta diaria"
    ],
    correctAnswer: 1,
  },
  {
    question: "60. ¿Cuál es el hilo conductor de todas las unidades del curso?",
    options: [
      "La tecnología por sí misma garantiza el éxito empresarial",
      "Los datos son el petróleo del siglo XXI: capturarlos, analizarlos y actuar sobre ellos es la ventaja competitiva real, siempre con personas y ética en el centro",
      "La digitalización es un proceso técnico que solo compete al departamento de IT",
      "Las grandes empresas siempre llevan ventaja sobre las pymes en transformación digital"
    ],
    correctAnswer: 1,
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

export default function DigitalizacionSimulacro2Quiz() {
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
              <span className="text-foreground">Digitalizacion</span>
            </h1>
            <h2 className="text-xl text-muted-foreground">Simulacro II</h2>
            <p className="text-muted-foreground text-lg">Transformacion digital y tecnologias</p>

            <div className="space-y-4 text-left py-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-violet-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">{questions.length} Preguntas</p>
                  <p className="text-sm text-muted-foreground">Todos los conceptos clave</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-violet-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Preguntas Aleatorizadas</p>
                  <p className="text-sm text-muted-foreground">Cada sesion es diferente</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-violet-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Retroalimentacion Inmediata</p>
                  <p className="text-sm text-muted-foreground">Aprende mientras practicas</p>
                </div>
              </div>
            </div>

            <Button
              onClick={startQuiz}
              size="lg"
              className="w-full bg-violet-500 hover:bg-violet-600 text-white font-semibold"
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
              <div className="text-6xl font-bold text-violet-500 mb-2">{Math.max(0, percentage)}%</div>
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
              {percentage >= 90 && <p className="text-lg text-foreground">Excelente. Dominas Digitalizacion.</p>}
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
                className="w-full bg-violet-500 hover:bg-violet-600 text-white font-semibold"
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
          <span className="text-violet-500">{answeredCount} respondidas</span>
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
                      ${!showFeedback && "hover:border-violet-500 hover:bg-accent cursor-pointer"}
                      ${showFeedback && "cursor-not-allowed"}
                      ${isSelected && !showFeedback && "border-violet-500 bg-accent"}
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
                className="flex-1 bg-violet-500 hover:bg-violet-600 text-white"
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
            className="h-full bg-violet-500 transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
