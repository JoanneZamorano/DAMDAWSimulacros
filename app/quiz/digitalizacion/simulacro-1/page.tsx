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
    question: "1. ¿Qué describe mejor la 'digitalización' de una empresa?",
    options: [
      "Tener página web y redes sociales",
      "Sustituir papel por archivos PDF",
      "Reorganización del modelo de negocio usando tecnología digital como catalizador",
      "Comprar ordenadores nuevos para todos los empleados"
    ],
    correctAnswer: 2,
  },
  {
    question: "2. ¿Cuál es el pilar tecnológico principal de la Industria 4.0?",
    options: [
      "Electricidad y producción en masa",
      "IoT + IA + Cloud = interconexión inteligente",
      "Vapor y mecanización",
      "Impresión offset y fax"
    ],
    correctAnswer: 1,
  },
  {
    question: "3. ¿Qué distingue a la Industria 5.0 de la 4.0?",
    options: [
      "Mayor automatización y eliminación del factor humano",
      "Énfasis en la persona, sostenibilidad y resiliencia frente a crisis",
      "Uso exclusivo de inteligencia artificial sin intervención humana",
      "Producción en masa a bajo coste en países emergentes"
    ],
    correctAnswer: 1,
  },
  {
    question: "4. ¿Qué representa la 'OT' en la convergencia IT/OT?",
    options: [
      "Online Technology: sistemas de comunicación por internet",
      "Operational Technology: tecnología de control físico (PLCs, SCADA, sensores)",
      "Output Technology: sistemas de impresión y salida de datos",
      "Open Technology: software de código abierto"
    ],
    correctAnswer: 1,
  },
  {
    question: "5. ¿A qué sector pertenece la 'AgroTech' o Agricultura de Precisión?",
    options: [
      "Sector Secundario (Industria)",
      "Sector Terciario (Servicios)",
      "Sector Primario (Agricultura, Ganadería, Pesca)",
      "Sector Cuaternario (Conocimiento)"
    ],
    correctAnswer: 2,
  },
  {
    question: "6. La fábrica de Siemens en Amberg lleva 30 años multiplicando su producción. ¿En qué factor clave se basa?",
    options: [
      "Incorporación de miles de trabajadores nuevos cada año",
      "Fusión perfecta IT/OT: gemelo digital + 1.000+ sensores + código único por producto",
      "Subcontratación de producción a países con mano de obra barata",
      "Reubicación de la planta a zonas de menor coste energético"
    ],
    correctAnswer: 1,
  },
  {
    question: "7. ¿Cuál de estas afirmaciones sobre la Industria 4.0 es FALSA?",
    options: [
      "La IA puede automatizar tareas repetitivas liberando tiempo creativo a las personas",
      "La Industria 4.0 destruye masivamente empleos sin crear nuevos perfiles",
      "La digitalización es accesible también para pymes gracias al Cloud y el SaaS",
      "Los cobots trabajan junto a personas de forma colaborativa y segura"
    ],
    correctAnswer: 1,
  },
  {
    question: "8. ¿Qué tecnología usa Inditex/Zara para tener control de inventario en tiempo real?",
    options: [
      "Códigos QR en cada prenda",
      "Etiquetas RFID con identificador único en cada prenda",
      "Cámaras de visión artificial en todas las tiendas",
      "Escáneres láser de código de barras tradicional"
    ],
    correctAnswer: 1,
  },
  {
    question: "9. ¿Cuál es la clave real del IoT, más allá del dispositivo físico?",
    options: [
      "La velocidad de conexión a internet del dispositivo",
      "El dato en contexto: leerlo, almacenarlo, analizarlo y actuar sobre él",
      "El precio del hardware del sensor",
      "La marca del fabricante del dispositivo conectado"
    ],
    correctAnswer: 1,
  },
  {
    question: "10. ¿Qué son los 'cobots' y en qué se diferencian de robots tradicionales?",
    options: [
      "Robots de combate militar autónomos",
      "Robots colaborativos diseñados para trabajar junto a personas de forma segura y flexible",
      "Robots de alta velocidad que sustituyen completamente al operario",
      "Ordenadores de control de procesos industriales (PLCs)"
    ],
    correctAnswer: 1,
  },
  {
    question: "11. ¿Cuál es la diferencia clave entre Realidad Aumentada (RA) y Realidad Virtual (RV)?",
    options: [
      "RA crea un entorno 100% digital; RV superpone info digital sobre el mundo real",
      "RA superpone capas digitales sobre el mundo real; RV crea un entorno 100% digital inmersivo",
      "Son lo mismo, solo cambia el nombre según el fabricante",
      "RA es para uso médico y RV es exclusivamente para videojuegos"
    ],
    correctAnswer: 1,
  },
  {
    question: "12. ¿Por qué se dice que la ciberseguridad es un 'pilar transversal' de las THD?",
    options: [
      "Porque solo afecta a los departamentos de IT",
      "Porque IoT, RA, robótica y cloud generan superficies de ataque que deben protegerse",
      "Porque es obligatoria solo en grandes empresas con más de 250 empleados",
      "Porque reemplaza a los firewalls tradicionales"
    ],
    correctAnswer: 1,
  },
  {
    question: "13. ¿Qué característica hace al Blockchain diferente de una base de datos tradicional?",
    options: [
      "Es más rápido que cualquier base de datos relacional",
      "Es distribuido, encriptado e inmutable: no puede modificarse sin consenso de toda la red",
      "Solo puede almacenar transacciones de criptomonedas",
      "Requiere un servidor central que valide todas las operaciones"
    ],
    correctAnswer: 1,
  },
  {
    question: "14. ¿Qué permite hacer un Gemelo Digital que no permite un plano técnico tradicional?",
    options: [
      "Mostrar el diseño en 3D con colores",
      "Actualizarse con datos reales en tiempo real para simular, predecir fallos y optimizar sin intervenir el sistema físico",
      "Calcular el coste de fabricación del producto",
      "Compartir documentos de diseño entre varios ingenieros"
    ],
    correctAnswer: 1,
  },
  {
    question: "15. ¿Qué ventaja principal aporta la Impresión 3D frente a la fabricación tradicional?",
    options: [
      "Produce piezas más baratas en cualquier cantidad",
      "Añade solo el material necesario capa a capa, reduciendo residuos y permitiendo piezas personalizadas",
      "Es el único método para fabricar piezas de metal",
      "Elimina la necesidad de diseñadores y ingenieros"
    ],
    correctAnswer: 1,
  },
  {
    question: "16. ¿Cuál es la característica del 5G más crítica para el IoT industrial?",
    options: [
      "Mayor resolución de pantalla en smartphones",
      "Latencia ultrabaja + velocidad ultraalta + conectividad masiva de dispositivos",
      "Mejor cobertura en zonas rurales remotas",
      "Reducción del consumo de batería en teléfonos móviles"
    ],
    correctAnswer: 1,
  },
  {
    question: "17. Un equipo de TI quiere máximo control sobre el sistema operativo y las aplicaciones. ¿Qué modelo cloud elige?",
    options: [
      "SaaS (Software as a Service)",
      "PaaS (Platform as a Service)",
      "IaaS (Infrastructure as a Service)",
      "DaaS (Desktop as a Service)"
    ],
    correctAnswer: 2,
  },
  {
    question: "18. ¿Cuál de estas herramientas es un ejemplo de SaaS?",
    options: [
      "Amazon EC2",
      "Google App Engine",
      "Heroku",
      "Salesforce CRM"
    ],
    correctAnswer: 3,
  },
  {
    question: "19. Un banco quiere guardar datos sensibles en infraestructura exclusiva pero usar la nube pública para picos de demanda. ¿Qué tipo de nube usa?",
    options: [
      "Nube pública",
      "Nube privada",
      "Nube híbrida",
      "Nube comunitaria"
    ],
    correctAnswer: 2,
  },
  {
    question: "20. La mayoría de brechas de datos en la nube se deben a…",
    options: [
      "Fallos de hardware de los proveedores cloud",
      "Errores de configuración por parte del usuario (contraseñas débiles, permisos incorrectos)",
      "Ataques físicos a los centros de datos",
      "Virus transmitidos por el aire en salas de servidores"
    ],
    correctAnswer: 1,
  },
  {
    question: "21. ¿Qué modelo de servicio cloud adoptó Netflix principalmente tras migrar a AWS?",
    options: [
      "SaaS: usaron Google Workspace para gestionar su contenido",
      "IaaS + algunos componentes PaaS, con arquitectura autoscalable",
      "PaaS exclusivamente con Heroku",
      "Nube privada propia sin proveedores externos"
    ],
    correctAnswer: 1,
  },
  {
    question: "22. En el 'Modelo de Responsabilidad Compartida' del cloud, ¿qué protege el cliente (no el proveedor)?",
    options: [
      "La seguridad física de los centros de datos",
      "El hardware de servidores y la red de fibra óptica",
      "Los accesos, contraseñas, permisos y configuración de sus datos",
      "La disponibilidad y redundancia de la infraestructura cloud"
    ],
    correctAnswer: 2,
  },
  {
    question: "23. ¿Qué analogía describe mejor a PaaS?",
    options: [
      "Alquilar un terreno donde tú construyes la casa a tu medida (IaaS)",
      "Alquilar un coche para usarlo directamente sin preocuparte del mantenimiento",
      "Alquilar un taller con herramientas listas para usar: tú solo desarrollas",
      "Comprar tu propio terreno y construir desde cero"
    ],
    correctAnswer: 2,
  },
  {
    question: "24. ¿Cuál de estas afirmaciones sobre el cloud es VERDADERA?",
    options: [
      "La nube solo sirve para almacenar archivos como Dropbox o Google Drive",
      "La nube es siempre más cara que mantener servidores propios",
      "La nube permite desplegar IA, Big Data, IoT, videojuegos online y fábricas conectadas",
      "Migrar a la nube garantiza automáticamente el éxito del proyecto digital"
    ],
    correctAnswer: 2,
  },
  {
    question: "25. ¿Qué tipo de IA existe actualmente en el mercado de forma real y funcional?",
    options: [
      "AGI (Inteligencia General Artificial) capaz de razonar en cualquier contexto",
      "ANI (Inteligencia Estrecha) diseñada para tareas concretas con alta precisión",
      "Superinteligencia que supera las capacidades humanas en todos los campos",
      "IA cuántica que procesa información a nivel de partículas subatómicas"
    ],
    correctAnswer: 1,
  },
  {
    question: "26. ¿En qué se basa el Machine Learning?",
    options: [
      "En reglas explícitas programadas por el desarrollador para cada situación",
      "En algoritmos que identifican patrones en datos sin que el programador especifique cada regla",
      "En copiar el comportamiento humano paso a paso mediante scripts",
      "En buscar información en internet en tiempo real"
    ],
    correctAnswer: 1,
  },
  {
    question: "27. ¿Qué diferencia al Deep Learning del Machine Learning clásico?",
    options: [
      "El DL requiere menos datos para entrenarse",
      "El DL usa redes neuronales profundas con muchas capas que aprenden representaciones abstractas por sí solas",
      "El DL solo funciona con imágenes, no con texto o audio",
      "El DL es más lento y menos preciso que el ML tradicional"
    ],
    correctAnswer: 1,
  },
  {
    question: "28. ¿Qué tecnología hace posible que un asistente virtual entienda y responda en lenguaje humano natural?",
    options: [
      "Computer Vision (Visión Artificial)",
      "Natural Language Processing (NLP)",
      "Robotic Process Automation (RPA)",
      "Business Intelligence (BI)"
    ],
    correctAnswer: 1,
  },
  {
    question: "29. Las '3V del Big Data' son…",
    options: [
      "Velocidad, Virtualización, Verificación",
      "Volumen, Velocidad, Variedad",
      "Valor, Veracidad, Virtualización",
      "Volumen, Visualización, Validación"
    ],
    correctAnswer: 1,
  },
  {
    question: "30. ¿Cómo se relacionan Big Data e IA?",
    options: [
      "Son tecnologías opuestas que no pueden usarse juntas",
      "Big Data alimenta a la IA con datos; la IA los convierte en conocimiento accionable formando un ciclo virtuoso",
      "El Big Data reemplaza a la IA haciendo innecesario el aprendizaje automático",
      "La IA genera Big Data de forma automática sin necesidad de recopilar datos reales"
    ],
    correctAnswer: 1,
  },
]

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export default function DigitalizacionSimulacro1Quiz() {
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
            <h2 className="text-xl text-muted-foreground">Simulacro I</h2>
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
