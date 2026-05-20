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
    question: "1. ¿Cuál fue el documento fundacional que estableció la definición moderna de desarrollo sostenible?",
    options: [
      "El Tratado de París sobre cambio climático",
      "La Comisión Brundtland (Nuestro Futuro Común)",
      "La Agenda Global 2030 de las Naciones Unidas",
      "El Protocolo de Kioto sobre emisiones"
    ],
    correctAnswer: 1,
  },
  {
    question: "2. ¿Qué naturaleza tienen los Objetivos de Desarrollo Sostenible (ODS)?",
    options: [
      "Aplicables solo a naciones en vías de desarrollo",
      "De cumplimiento voluntario exclusivamente para multinacionales",
      "De carácter universal, integrados y aplicables a todos los países",
      "Independientes entre sí sin relación causal"
    ],
    correctAnswer: 2,
  },
  {
    question: "3. ¿En qué unidad de medida se expresa cuantitativamente la huella ecológica?",
    options: [
      "Kilogramos de CO₂ equivalente",
      "Hectáreas globales (gha)",
      "Toneladas de residuo anual",
      "Megajulios de energía consumida"
    ],
    correctAnswer: 1,
  },
  {
    question: "4. ¿Qué describe el concepto de \"Sobrecapacidad\" o \"Overshoot\" en el contexto de los recursos naturales del planeta?",
    options: [
      "El nivel máximo de contaminación atmosférica tolerable por los ecosistemas terrestres",
      "El momento en que la humanidad ha agotado la biocapacidad regenerativa anual de la Tierra",
      "El porcentaje de superficie terrestre degradada por la actividad humana cada año",
      "La cantidad total de residuos generados por encima de la capacidad de los vertederos"
    ],
    correctAnswer: 1,
  },
  {
    question: "5. ¿Cuál de las siguientes prácticas forma parte del modelo de las \"5 R\" de sostenibilidad?",
    options: [
      "Reasegurar la rentabilidad",
      "Rechazar productos insostenibles",
      "Revaluar constantemente precios",
      "Restaurar la manufactura tradicional"
    ],
    correctAnswer: 1,
  },
  {
    question: "6. ¿Cuál es la causa predominante del cambio climático que se registra en la actualidad?",
    options: [
      "Las variaciones naturales de los ciclos solares",
      "Las emisiones de gases de efecto invernadero generadas por actividades humanas",
      "La actividad volcánica persistente en zonas tectónicas",
      "Los cambios en las corrientes marinas oceánicas"
    ],
    correctAnswer: 1,
  },
  {
    question: "7. ¿Cómo ha impactado el cambio climático en los patrones de los eventos meteorológicos extremos?",
    options: [
      "Se han vuelto menos frecuentes pero más predecibles",
      "Su frecuencia e intensidad han aumentado significativamente",
      "Han desaparecido de las regiones ecuatoriales",
      "Se han estabilizado en niveles históricos previos"
    ],
    correctAnswer: 1,
  },
  {
    question: "8. ¿Qué implica alcanzar la neutralidad climática en una organización o territorio?",
    options: [
      "Cesar completamente toda emisión de gases invernadero",
      "Aumentar el uso de energías contaminantes para reducir costos",
      "Lograr que las emisiones netas sean cero mediante reducción y compensación",
      "Utilizar exclusivamente fuentes nucleares sin otros recursos"
    ],
    correctAnswer: 2,
  },
  {
    question: "9. ¿Cuáles son las características que define al transporte sostenible?",
    options: [
      "Incrementar la cantidad de vehículos privados en circulación",
      "Depender exclusivamente de combustibles fósiles de bajo costo",
      "Priorizar el transporte público, bicicleta y reducir desplazamientos motorizados",
      "Eliminar completamente todo tipo de movilidad motorizada"
    ],
    correctAnswer: 2,
  },
  {
    question: "10. ¿Cuál es el principio fundamental que promueve la economía circular?",
    options: [
      "Maximizar la velocidad de extracción de recursos naturales",
      "Preservar el valor de materiales y productos en ciclos cerrados",
      "Reducir la calidad de bienes para disminuir costos",
      "Acelerar la obsolescencia programada de productos"
    ],
    correctAnswer: 1,
  },
  {
    question: "11. ¿Qué comprende la práctica del ecodiseño en el desarrollo de productos?",
    options: [
      "Diseñar productos con la estética más atractiva posible",
      "Integrar criterios ambientales para crear productos duraderos, reparables y reciclables",
      "Diseñar minimizando exclusivamente el costo de fabricación",
      "Utilizar la mayor cantidad posible de plásticos en empaques"
    ],
    correctAnswer: 1,
  },
  {
    question: "12. ¿Cuál es la actividad principal de empresas como Back Market dentro del modelo sostenible?",
    options: [
      "Fabricar nuevos dispositivos electrónicos con tecnología de punta",
      "Generar energía renovable para el sector tecnológico",
      "Reacondicionamiento y comercialización de equipos electrónicos usados",
      "Diseño de componentes más pequeños y eficientes energéticamente"
    ],
    correctAnswer: 2,
  },
  {
    question: "13. ¿Cómo se define la biodiversidad desde perspectiva ecológica integral?",
    options: [
      "Exclusivamente el número de especies vegetales en un territorio",
      "Solo la población de fauna silvestre no domesticada",
      "La variabilidad de vida en todos sus niveles: especies, genes y ecosistemas",
      "La cantidad de ecosistemas urbanos y zonas edificadas"
    ],
    correctAnswer: 2,
  },
  {
    question: "14. En el contexto de la sostenibilidad social, ¿cuál de los siguientes elementos NO constituye un pilar fundamental?",
    options: [
      "La redistribución equitativa de recursos",
      "El bienestar y calidad de vida de las personas",
      "La estandarización de procesos de manufactura",
      "La garantía de derechos y justicia social"
    ],
    correctAnswer: 2,
  },
  {
    question: "15. ¿Qué organización internacional es responsable de establecer y promover normativas sobre condiciones laborales y trabajo digno?",
    options: [
      "La Organización Internacional del Trabajo (OIT)",
      "El Banco Mundial",
      "El Fondo Monetario Internacional (FMI)",
      "ONU Mujeres"
    ],
    correctAnswer: 0,
  },
  {
    question: "16. ¿Cuáles son las características distintivas de una cadena de suministro en Industria 4.0?",
    options: [
      "Procesos manuales con documentación en papel y comunicación lenta",
      "Integración digital, automatización inteligente y trazabilidad en tiempo real",
      "Enfoque agrícola con métodos de cultivo intensivo",
      "Modelos de distribución comercial mediante canales de retail tradicional"
    ],
    correctAnswer: 1,
  },
  {
    question: "17. ¿A qué se refiere específicamente el término gobernanza corporativa en una organización?",
    options: [
      "Al conjunto de procedimientos de comercialización y publicidad de productos",
      "Al modelo de generación y distribución de ingresos financieros",
      "Al sistema de reglas, procesos y estructuras que definen cómo se toman decisiones y se asignan responsabilidades",
      "A las estrategias de expansión territorial de la empresa"
    ],
    correctAnswer: 2,
  },
  {
    question: "18. ¿Qué organización desarrolló el estándar GRI como marco de referencia internacional?",
    options: [
      "La Organización Internacional de Normalización (ISO)",
      "El Fondo Monetario Internacional (FMI)",
      "La Global Reporting Initiative",
      "La Organización Internacional del Trabajo (OIT)"
    ],
    correctAnswer: 2,
  },
  {
    question: "19. ¿Cuál es la función principal de plataformas de evaluación como EcoVadis en el ecosistema empresarial?",
    options: [
      "Auditar la rentabilidad y márgenes de beneficio de las empresas",
      "Evaluar y calificar el desempeño en sostenibilidad de organizaciones según criterios ESG",
      "Monitorear exclusivamente la producción y volumen de salida",
      "Registrar y certificar las ventas anuales de cada compañía"
    ],
    correctAnswer: 1,
  },
  {
    question: "20. ¿Cuál es la definición técnica de una certificación en el contexto de sostenibilidad empresarial?",
    options: [
      "Un documento interno emitido por el departamento de calidad sin validación externa",
      "Un procedimiento de aseguramiento de tercera parte que valida el cumplimiento de criterios predefinidos",
      "Una etiqueta comercial de marketing sin requisitos técnicos verificables",
      "Un precio premium asignado a productos según su disponibilidad en el mercado"
    ],
    correctAnswer: 1,
  },
  {
    question: "21. ¿Cuál es el alcance y propósito de la norma ISO 26000 en el contexto empresarial?",
    options: [
      "Una norma de certificación obligatoria para sistemas de gestión de calidad",
      "Una guía que orienta a las organizaciones sobre responsabilidad social y comportamiento ético",
      "Una norma específica para auditoría fiscal y cumplimiento tributario",
      "Una certificación ambiental enfocada exclusivamente en emisiones de carbono"
    ],
    correctAnswer: 1,
  },
  {
    question: "22. ¿Qué mecanismo de garantía implementa Fair Trade para beneficio de los productores?",
    options: [
      "La reducción drástica de precios para aumentar competitividad comercial",
      "La aplicación de tecnología intensiva sin considerar contexto local",
      "La aseguración de precios justos, condiciones laborales dignas y relaciones comerciales equitativas",
      "El aumento ilimitado de volumen de producción sin regulación"
    ],
    correctAnswer: 2,
  },
  {
    question: "23. ¿Qué característica diferencia el etiquetado Energy Star en productos electrónicos?",
    options: [
      "Indica la vida útil máxima del producto en años de funcionamiento",
      "Certifica que el producto cumple estándares internacionales de eficiencia energética",
      "Garantiza el precio más bajo disponible en el mercado",
      "Señala que el producto fue fabricado con método de producción agrícola"
    ],
    correctAnswer: 1,
  },
  {
    question: "24. ¿Cuál es la intención primaria de la práctica de compra verde o green procurement en las organizaciones?",
    options: [
      "Reducir costos operativos mediante compra de productos de menor precio disponible",
      "Adquirir exclusivamente productos fabricados localmente sin importar sostenibilidad",
      "Seleccionar proveedores y productos que minimicen impacto ambiental y social a lo largo de su ciclo de vida",
      "Acelerar el proceso de adquisición mediante automatización sin criterios de evaluación"
    ],
    correctAnswer: 2,
  },
  {
    question: "25. ¿En qué década se estableció formalmente el término 'desarrollo sostenible' a través de un informe internacional?",
    options: [
      "En los años 70",
      "En los años 80",
      "En los años 90",
      "En los años 2000"
    ],
    correctAnswer: 1,
  },
  {
    question: "26. ¿Cuál es la cantidad total de objetivos que integran la Agenda 2030 de la ONU?",
    options: [
      "12 objetivos",
      "15 objetivos",
      "17 objetivos",
      "20 objetivos"
    ],
    correctAnswer: 2,
  },
  {
    question: "27. ¿Qué indicador cuantifica la cantidad de territorio necesario para sostener el consumo de una población?",
    options: [
      "El índice de desarrollo humano",
      "La huella ecológica",
      "El PIB per cápita",
      "El indicador de biodiversidad"
    ],
    correctAnswer: 1,
  },
  {
    question: "28. Si la humanidad actual consumiera un estilo de vida igualitario, ¿cuántos planetas semejantes a la Tierra serían necesarios aproximadamente?",
    options: [
      "0.8 planetas",
      "1.2 planetas",
      "1.7 planetas",
      "2.3 planetas"
    ],
    correctAnswer: 2,
  },
  {
    question: "29. ¿Cuál es la consecuencia más directa del exceso en la huella ecológica global?",
    options: [
      "El aumento del empleo en el sector primario",
      "La sobreexplotación y degradación de recursos naturales",
      "El desarrollo tecnológico acelerado",
      "La reducción de la economía digital"
    ],
    correctAnswer: 1,
  },
  {
    question: "30. ¿Qué gas de efecto invernadero antropogénico representa el mayor porcentaje de las emisiones globales totales en términos de CO₂ equivalente?",
    options: [
      "Dióxido de carbono (CO₂)",
      "Monóxido de carbono (CO)",
      "Óxido nitroso (N₂O)",
      "Metano (CH₄)"
    ],
    correctAnswer: 0,
  },
  {
    question: "31. ¿Cuál es una manifestación observable del calentamiento global en los sistemas naturales terrestres?",
    options: [
      "La congelación de nuevas masas de hielo",
      "El deshielo acelerado de glaciares y polos",
      "La estabilización del nivel del mar",
      "La disminución de tormentas extremas"
    ],
    correctAnswer: 1,
  },
  {
    question: "32. ¿Cuál de las siguientes acciones forma parte de una estrategia de descarbonización industrial?",
    options: [
      "Incrementar la inversión en extracción de combustibles fósiles",
      "Sustituir fuentes energéticas por energías renovables",
      "Aumentar la eficiencia de plantas térmicas de carbón",
      "Expandir la producción de derivados del petróleo"
    ],
    correctAnswer: 1,
  },
  {
    question: "33. ¿Qué significa mejorar la eficiencia energética en un proceso productivo?",
    options: [
      "Consumir una cantidad mayor de energía anual",
      "Obtener el mismo resultado gastando menos energía",
      "Utilizar exclusivamente energía solar",
      "Reducir la producción total de la empresa"
    ],
    correctAnswer: 1,
  },
  {
    question: "34. ¿Cuál es el modelo de producción y consumo basado en extraer recursos, manufacturar productos, usarlos y depositarlos en vertederos?",
    options: [
      "Economía de servicios",
      "Economía lineal",
      "Economía colaborativa",
      "Economía digital"
    ],
    correctAnswer: 1,
  },
  {
    question: "35. ¿Cuál es la secuencia jerárquica correcta de acciones en la economía circular?",
    options: [
      "Tirar → reparar → reutilizar → reducir",
      "Reducir → reutilizar → reparar → reciclar",
      "Reciclar → reparar → reutilizar → reducir",
      "Reutilizar → reducir → tirar → reciclar"
    ],
    correctAnswer: 1,
  },
  {
    question: "36. ¿Qué evalúa el análisis de ciclo de vida (ACV) de un producto manufacturado?",
    options: [
      "Únicamente el costo de venta al consumidor final",
      "Solo los impactos durante la fase de fabricación",
      "El impacto ambiental en todas sus etapas desde materias primas hasta disposición final",
      "Exclusivamente el reciclaje de residuos post-consumo"
    ],
    correctAnswer: 2,
  },
  {
    question: "37. ¿Cuál es la definición técnica de servicios ecosistémicos en el contexto de sostenibilidad?",
    options: [
      "Actividades comerciales de ecoturismo y hoteles verdes",
      "Plataformas digitales de gestión ambiental",
      "Funciones y beneficios que los ecosistemas naturales proporcionan a la sociedad humana",
      "Impuestos ambientales sobre uso de recursos naturales"
    ],
    correctAnswer: 2,
  },
  {
    question: "38. ¿Cuál es el objetivo principal del tratado internacional Kunming-Montreal sobre biodiversidad?",
    options: [
      "Incrementar la inversión global en energías fósiles",
      "Asegurar la protección de al menos el 30% del territorio planetario",
      "Reducir la población mundial",
      "Expandir la infraestructura turística internacional"
    ],
    correctAnswer: 1,
  },
  {
    question: "39. ¿Cuál es la función principal del coeficiente de Gini en el análisis socioeconómico?",
    options: [
      "Medir la concentración de empleos en sectores específicos",
      "Cuantificar la concentración de ingresos y desigualdad económica",
      "Evaluar el nivel absoluto de pobreza en una población",
      "Determinar la calidad de los servicios públicos"
    ],
    correctAnswer: 1,
  },
  {
    question: "40. En el ámbito organizacional, ¿qué persigue principalmente la sostenibilidad social?",
    options: [
      "Maximizar el beneficio económico a corto plazo",
      "Garantizar condiciones laborales dignas, equidad, seguridad y salud ocupacional para todas las personas",
      "Reducir la plantilla para optimizar costes operativos",
      "Automatizar procesos mediante tecnología avanzada"
    ],
    correctAnswer: 1,
  },
  {
    question: "41. ¿Qué elementos son imprescindibles para que un empleo se considere digno?",
    options: [
      "Únicamente una remuneración económica justa",
      "Condiciones de seguridad, derechos laborales garantizados y compensación adecuada",
      "Solo capacitación y desarrollo profesional continuo",
      "Horario flexible y teletrabajo obligatorio"
    ],
    correctAnswer: 1,
  },
  {
    question: "42. ¿Qué comprende el concepto de transición justa en el contexto laboral?",
    options: [
      "La sustitución inmediata de todos los procesos productivos tradicionales",
      "La adaptación ordenada de los trabajadores y sectores hacia una economía sostenible",
      "El cambio de gobierno y políticas económicas sin afectar el empleo",
      "La eliminación de regulaciones laborales para mayor flexibilidad"
    ],
    correctAnswer: 1,
  },
  {
    question: "43. ¿Cómo se define un riesgo extra-financiero en la gestión empresarial moderna?",
    options: [
      "Cualquier exposición a variaciones en tipos de interés o tipos de cambio",
      "Amenaza relacionada con factores ambientales o sociales que impacta en el desempeño organizacional",
      "Riesgo derivado de incumplimiento tributario o fraude fiscal",
      "Exposición a pérdidas por insolvencia de proveedores"
    ],
    correctAnswer: 1,
  },
  {
    question: "44. ¿Cuál es la intención del reporting no financiero en las organizaciones sostenibles?",
    options: [
      "Presentar únicamente los estados de resultados y balances contables",
      "Comunicar el desempeño social, ambiental y de gobernanza de la empresa",
      "Justificar ante hacienda el cumplimiento de obligaciones fiscales",
      "Informar exclusivamente sobre retribuciones salariales"
    ],
    correctAnswer: 1,
  },
  {
    question: "45. ¿Qué representan los ESRS en el marco regulatorio europeo?",
    options: [
      "Estándares para el control de riesgos laborales en la industria",
      "Marco común de estándares europeos para reporting de sostenibilidad",
      "Normas exclusivas para certificación de productos de calidad",
      "Directrices sobre eficiencia fiscal en empresas multinacionales"
    ],
    correctAnswer: 1,
  },
  {
    question: "46. ¿Qué evalúa el análisis de materialidad en la estrategia de sostenibilidad empresarial?",
    options: [
      "El volumen y coste de materias primas utilizadas en producción",
      "La identificación de aspectos relevantes para la empresa y sus stakeholders",
      "El margen de beneficio obtenido en cada línea de negocio",
      "La cantidad de residuos generados en procesos de transformación"
    ],
    correctAnswer: 1,
  },
  {
    question: "47. ¿Cuál es el alcance principal de la certificación ISO 14001?",
    options: [
      "Acreditación de sistemas de calidad total en procesos productivos",
      "Certificación de competencia técnica del personal especializado",
      "Garantía de implementación de un sistema de gestión ambiental",
      "Validación de cumplimiento con regulaciones de seguridad industrial"
    ],
    correctAnswer: 2,
  },
  {
    question: "48. ¿Cuál es la función principal de la Etiqueta Ecológica Europea en el mercado?",
    options: [
      "Acreditar a la empresa como proveedora de energía renovable",
      "Identificar productos con menor impacto ambiental en toda su ciclo de vida",
      "Certificar exclusivamente que la empresa respeta derechos laborales",
      "Validar que un producto es 100% reciclado"
    ],
    correctAnswer: 1,
  },
  {
    question: "49. ¿Cuál es la característica negativa del greenwashing en comunicación empresarial?",
    options: [
      "El aumento de costes de certificación ambiental",
      "La distorsión de información sobre prácticas sostenibles para mejorar imagen",
      "El exceso de producción de energías renovables",
      "La implementación de sistemas de reciclaje obligatorios"
    ],
    correctAnswer: 1,
  },
  {
    question: "50. ¿Cómo se define la Responsabilidad Social Corporativa en el contexto moderno?",
    options: [
      "Una estrategia de reducción de costes operacionales mediante automatización",
      "La incorporación de objetivos sociales y ambientales en la estrategia empresarial",
      "Una iniciativa de marketing enfocada en publicidad de productos",
      "Un departamento administrativo independiente de la dirección"
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
