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
    question: "51. ¿Qué ventaja operativa proporciona una base de datos centralizada en un sistema ERP?",
    options: ["Garantiza integridad de datos, evita duplicación, facilita reportes unificados y asegura coherencia transversal", "Aumenta el tiempo de respuesta de las consultas en sistemas grandes", "Requiere que cada usuario tenga su propia copia local de la base de datos", "Elimina la necesidad de realizar backups de seguridad"],
    correctAnswer: 0,
  },
  {
    question: "52. ¿Qué permite la interoperabilidad en un sistema ERP respecto a sistemas externos?",
    options: ["Integración con aplicaciones terceras mediante APIs, webservices y estándares de intercambio de datos", "Funcionar completamente aislado sin necesidad de comunicación externa", "Reemplazar completamente los sistemas externos sin necesidad de coexistencia", "Eliminar la necesidad de formatos estándar de datos"],
    correctAnswer: 0,
  },
  {
    question: "53. ¿Cuál es la primera fase crítica en el proceso de implantación de un sistema ERP?",
    options: ["Análisis y planificación: definir objetivos, alcance, recursos, timeline y modelo de implementación", "Instalación inmediata del software en los servidores de producción", "Migración de datos sin evaluación previa", "Capacitación de usuarios sin documentación de procesos"],
    correctAnswer: 0,
  },
  {
    question: "54. ¿Qué se realiza específicamente durante la fase de análisis funcional en una implantación ERP?",
    options: ["Documentar procesos de negocio actuales, identificar gaps con el sistema ERP y definir configuraciones y customizaciones necesarias", "Únicamente instalar el software en servidores", "Escribir código de programación personalizada", "Entrenar usuarios sin previamente mapear procesos"],
    correctAnswer: 0,
  },
  {
    question: "55. ¿Cuál es el objetivo principal de implementar un sistema CRM en una organización?",
    options: ["Optimizar las relaciones con los clientes mediante la gestión centralizada de información y mejora del servicio prestado.", "Reducir exclusivamente los costos operativos de la empresa.", "Automatizar el proceso de fabricación de productos.", "Gestionar únicamente la contabilidad financiera de la empresa."],
    correctAnswer: 0,
  },
  {
    question: "56. ¿Qué característica define principalmente a los ERP modernos en comparación con los ERP tradicionales?",
    options: ["La capacidad de estar basados en la nube, ser escalables, modulares y ofrecer actualizaciones automáticas.", "El uso exclusivo de interfaces en línea de comandos.", "La imposibilidad de conectar aplicaciones externas.", "El requerimiento de estar instalados solo en servidores físicos locales."],
    correctAnswer: 0,
  },
  {
    question: "57. ¿Qué ventaja específica proporciona la arquitectura modular en la implementación de un ERP?",
    options: ["Permite implementar solo los módulos necesarios según las necesidades empresariales, reduciendo costos e incrementando la rapidez de implantación.", "Obliga a implementar todos los módulos simultáneamente sin excepción.", "Aumenta invariablemente la complejidad del sistema para cualquier empresa.", "Elimina la necesidad de una base de datos centralizada."],
    correctAnswer: 0,
  },
  {
    question: "58. ¿Cuál es la principal ventaja de utilizar una base de datos centralizada en un ERP?",
    options: ["Garantiza que toda la información empresarial se almacena en un único lugar, eliminando redundancia y asegurando consistencia de datos.", "Aumenta la probabilidad de pérdida de datos durante operaciones normales.", "Obliga a cada departamento a mantener su propia base de datos independiente.", "Reduce la seguridad de los datos almacenados."],
    correctAnswer: 0,
  },
  {
    question: "59. ¿Qué es la arquitectura SOA en el contexto de los sistemas de gestión empresarial?",
    options: ["Una arquitectura basada en servicios independientes que se comunican entre sí mediante interfaces estandarizadas, permitiendo interoperabilidad y flexibilidad.", "Un tipo de base de datos relacional propietaria.", "Un lenguaje de programación específico para ERP.", "Un protocolo de seguridad para transmisión de datos."],
    correctAnswer: 0,
  },
  {
    question: "60. ¿Qué base de datos utiliza Odoo de forma predeterminada para almacenar sus datos?",
    options: ["PostgreSQL, una base de datos relacional de código abierto.", "MySQL exclusivamente.", "SQL Server de Microsoft obligatoriamente.", "MongoDB como base de datos NoSQL."],
    correctAnswer: 0,
  },
  {
    question: "61. ¿Qué componente es responsable de ejecutar la lógica de negocio en Odoo?",
    options: ["El servidor de aplicaciones (backend), que procesa las reglas de negocio, validaciones y operaciones de datos.", "El navegador web del cliente.", "La base de datos exclusivamente.", "El sistema operativo del servidor."],
    correctAnswer: 0,
  },
  {
    question: "62. ¿Cuál es la función principal del cliente en un ERP como Odoo?",
    options: ["Proporcionar una interfaz gráfica para que los usuarios interactúen con el sistema y envíen solicitudes al servidor.", "Almacenar de forma local toda la base de datos de la empresa.", "Ejecutar la lógica de validación de datos de forma independiente.", "Gestionar directamente los permisos de acceso de usuarios."],
    correctAnswer: 0,
  },
  {
    question: "63. ¿Qué es el ORM (Object-Relational Mapping) en el contexto de Odoo?",
    options: ["Una herramienta que mapea los modelos de datos del sistema a las tablas de la base de datos, permitiendo operaciones sin escribir SQL.", "Un lenguaje de programación específico para Odoo.", "Un protocolo de comunicación entre cliente y servidor.", "Un sistema de copias de seguridad automáticas."],
    correctAnswer: 0,
  },
  {
    question: "64. ¿Qué tipo de campo en un modelo de Odoo se utiliza para conectar dos modelos entre sí?",
    options: ["Los campos relacionales (Many2one, One2many, Many2many) que crean referencias entre modelos.", "Los campos de texto que contienen nombres de otras tablas.", "Los campos booleanos que almacenan referencias binarias.", "Los campos numéricos que almacenan identificadores de tablas."],
    correctAnswer: 0,
  },
  {
    question: "65. ¿Cuál es la primera fase crítica en el proceso de implantación de un ERP?",
    options: ["El análisis de requisitos y planificación del proyecto, donde se definen objetivos, alcance y recursos necesarios.", "La parametrización inmediata del sistema.", "La migración de datos desde sistemas antiguos.", "El lanzamiento a producción (Go-Live)."],
    correctAnswer: 0,
  },
  {
    question: "66. ¿Qué actividades comprende la fase de análisis funcional en una implantación de ERP?",
    options: ["Documentar los procesos actuales, identificar necesidades, definir configuraciones requeridas y gap analysis entre sistema y negocio.", "Instalar el software en servidores de producción.", "Capacitar únicamente a los administradores técnicos.", "Importar directamente todos los datos históricos de la empresa."],
    correctAnswer: 0,
  },
  {
    question: "67. ¿Cuál es el objetivo principal de un sistema CRM dentro de una organización?",
    options: ["Gestionar la relación con los clientes y optimizar el ciclo de vida del cliente desde la prospección hasta la retención", "Reemplazar completamente el departamento de ventas con automatización total", "Eliminar la necesidad de comunicación directa entre empresa y cliente", "Reducir exclusivamente el coste de envío de facturas electrónicas"],
    correctAnswer: 0,
  },
  {
    question: "68. ¿Qué característica define principalmente a los ERP modernos en comparación con los ERP heredados?",
    options: ["La arquitectura modular, la escalabilidad en la nube y la capacidad de integración con aplicaciones terceras mediante APIs", "El uso exclusivo de interfaces de línea de comandos sin gráficos", "La obligatoriedad de instalar en servidores físicos sin opciones de virtualización", "La incompatibilidad total con sistemas operativos Linux"],
    correctAnswer: 0,
  },
  {
    question: "69. ¿Qué ventaja operativa proporciona la modularidad en la arquitectura de un ERP?",
    options: ["Permite implementar solo los módulos necesarios para el negocio, reduciendo complejidad, tiempo de implantación y coste inicial", "Obliga a implementar todos los módulos simultáneamente en una única fase", "Elimina completamente la necesidad de formación del personal en cualquier módulo", "Impide la comunicación de datos entre diferentes áreas de la organización"],
    correctAnswer: 0,
  },
  {
    question: "70. ¿Qué base de datos utiliza Odoo como almacén de datos por defecto?",
    options: ["PostgreSQL", "Oracle Database", "MySQL exclusivamente", "SQL Server de Microsoft"],
    correctAnswer: 0,
  },
  {
    question: "71. ¿Cuál es el propósito principal de la arquitectura SOA en sistemas empresariales?",
    options: ["Dividir el sistema en servicios independientes y reutilizables que se comunican mediante interfaces estándar, facilitando flexibilidad e integración", "Concentrar toda la lógica de negocio en un único servidor monolítico", "Eliminar la necesidad de bases de datos en favor de almacenamiento solo en memoria", "Reemplazar todas las interfaces gráficas con terminales de texto"],
    correctAnswer: 0,
  },
  {
    question: "72. ¿Qué componente en Odoo es responsable de ejecutar la lógica de negocio de la aplicación?",
    options: ["El servidor backend de Odoo, que procesa solicitudes, aplica reglas de negocio y gestiona la base de datos", "El navegador web del cliente, que ejecuta todo el código directamente en JavaScript", "La base de datos PostgreSQL, que ejecuta código Java embebido", "El servidor DNS, que resuelve todas las operaciones de cálculo"],
    correctAnswer: 0,
  },
  {
    question: "73. ¿Cuál es la función principal del cliente en un ERP como Odoo?",
    options: ["Presentar la interfaz de usuario y enviar solicitudes al servidor, mostrando las respuestas de forma visual", "Almacenar todos los datos de la empresa en el equipo local del usuario", "Ejecutar toda la lógica de negocio sin necesidad de conexión al servidor", "Actuar como servidor de base de datos independiente para cada usuario"],
    correctAnswer: 0,
  },
  {
    question: "74. ¿Qué ventaja fundamental proporciona una base de datos centralizada en un ERP?",
    options: ["Garantiza consistencia de datos, única fuente de verdad y elimina redundancia e inconsistencias entre departamentos", "Permite que cada usuario tenga su propia copia local sin sincronización con otros", "Reduce la seguridad al permitir acceso directo a todos sin validaciones", "Obliga a todos los usuarios a trabajar con exactamente los mismos datos sin posibilidad de variación"],
    correctAnswer: 0,
  },
  {
    question: "75. ¿Qué permite la interoperabilidad en un ERP moderno?",
    options: ["Conectar e integrar el ERP con sistemas externos, aplicaciones especializadas y fuentes de datos heterogéneas de forma fluida", "Que el ERP funcione únicamente de forma aislada sin conexión a ningún otro sistema", "Evitar cualquier tipo de automatización o integraciones de procesos", "Obligar a reescribir todo el código del ERP cada vez que cambia un requisito"],
    correctAnswer: 0,
  },
  {
    question: "76. ¿Cuál es la primera fase crítica en la implantación de un ERP en una organización?",
    options: ["El diagnóstico y análisis de la situación actual, incluyendo procesos, requisitos y expectativas de la organización", "Inmediatamente instalar el software en todos los servidores sin planeamiento previo", "Trasladar todos los datos antiguos al nuevo sistema antes de entender los procesos", "Formar a todo el personal en una única sesión intensiva de una semana"],
    correctAnswer: 0,
  },
  {
    question: "77. ¿Qué se realiza durante el análisis funcional en la implantación de un ERP?",
    options: ["Se detallan los procesos empresariales, se documentan los requisitos funcionales y se diseña cómo el ERP soportará esos procesos", "Se escribe código de programación para modificar todo el software del ERP", "Se prueban aleatoriamente funciones sin documentación ni planificación", "Se carga directamente toda la información histórica en el nuevo sistema"],
    correctAnswer: 0,
  },
  {
    question: "78. ¿Qué significa parametrizar un sistema ERP?",
    options: ["Configurar los valores, reglas y comportamientos del ERP mediante opciones predefinidas sin modificar el código fuente", "Reescribir completamente el código fuente del ERP en Python", "Eliminar todas las funcionalidades que no se necesitan instantáneamente", "Crear nuevas bases de datos independientes para cada módulo"],
    correctAnswer: 0,
  },
  {
    question: "79. ¿Qué ventaja proporciona la modularidad en la arquitectura de un ERP moderno?",
    options: ["Permite que las organizaciones implementen solo los módulos necesarios para sus procesos específicos sin necesidad de instalar toda la solución", "Aumenta automáticamente la velocidad de procesamiento de datos", "Elimina completamente la necesidad de mantenimiento y actualizaciones", "Reduce el número de usuarios que pueden acceder al sistema"],
    correctAnswer: 0,
  },
  {
    question: "80. ¿Qué sistema de gestión de bases de datos utiliza Odoo como almacenamiento principal?",
    options: ["PostgreSQL", "MySQL", "MongoDB", "Oracle Database"],
    correctAnswer: 0,
  },
  {
    question: "81. ¿Cuál es el propósito fundamental de la arquitectura SOA en los sistemas empresariales modernos?",
    options: ["Permitir que los servicios funcionen de manera independiente y se comuniquen a través de interfaces estandarizadas, facilitando la integración y reutilización de componentes", "Centralizar toda la lógica de negocio en un único servidor sin distribuir responsabilidades", "Eliminar la necesidad de una base de datos centralizada en favor de almacenamiento local", "Simplificar la interfaz de usuario mediante la eliminación de servicios adicionales"],
    correctAnswer: 0,
  },
  {
    question: "82. En Odoo, ¿qué componente es responsable de ejecutar la lógica de negocio y las reglas aplicables?",
    options: ["El servidor Odoo (backend) que procesa las solicitudes y ejecuta la lógica mediante modelos y controladores", "El navegador del cliente que ejecuta JavaScript para procesar toda la lógica", "La base de datos PostgreSQL que implementa automáticamente las reglas de negocio", "El módulo de interfaz que controla cómo se presentan los datos"],
    correctAnswer: 0,
  },
  {
    question: "83. ¿Cuál es la función principal del cliente en la arquitectura de un ERP como Odoo?",
    options: ["Presentar la interfaz de usuario y enviar solicitudes al servidor, sin procesar lógica de negocio compleja", "Almacenar todos los datos de la empresa en el disco local del usuario", "Ejecutar las validaciones de integridad de la base de datos", "Gestionar completamente los permisos y la seguridad del sistema"],
    correctAnswer: 0,
  },
  {
    question: "84. ¿Qué ventaja específica proporciona utilizar una base de datos centralizada en un ERP?",
    options: ["Garantiza que todos los datos de la empresa sean consistentes, únicos en origen y accesibles por todos los usuarios autorizados de forma sincronizada", "Permite reducir los costes de licencias de software al compartir una única instancia de base de datos por departamento", "Facilita que cada departamento gestione y actualice sus propios datos de forma autónoma sin depender del resto", "Asegura que los datos históricos se archiven automáticamente sin intervención del administrador del sistema"],
    correctAnswer: 0,
  },
  {
    question: "85. ¿Qué capacidad fundamental proporciona la interoperabilidad en un sistema ERP?",
    options: ["Permitir que el ERP se comunique e integre con otros sistemas empresariales externos, intercambiando datos de forma automática y estructurada", "Hacer que el ERP funcione únicamente en modo offline sin conexión a internet", "Duplicar automáticamente todos los datos en varios servidores simultáneamente", "Limitar el acceso del ERP solo a usuarios dentro de la red interna de la empresa"],
    correctAnswer: 0,
  },
  {
    question: "86. ¿Cuál es la primera fase crítica en el proceso de implementación de un ERP?",
    options: ["El análisis y planificación del proyecto, donde se definen objetivos, alcance, recursos y metodología antes de cualquier acción técnica", "La instalación inmediata del software en los servidores de la empresa", "La capacitación de todos los usuarios finales antes de iniciar cualquier evaluación", "La migración de datos históricos a la mayor brevedad posible"],
    correctAnswer: 0,
  },
  {
    question: "87. ¿Qué actividades principales se realizan durante el análisis funcional en la implementación de un ERP?",
    options: ["Se documentan los procesos de negocio actuales, se identifican requisitos funcionales, se mapean a módulos del ERP y se definen configuraciones necesarias", "Se instalan todos los módulos disponibles del ERP sin evaluación previa", "Se comienza inmediatamente la escritura de código personalizado", "Se capacita a los usuarios finales sin evaluación de necesidades"],
    correctAnswer: 0,
  },
  {
    question: "88. ¿Qué significa parametrizar un sistema ERP?",
    options: ["Ajustar las configuraciones y opciones disponibles del ERP sin modificar el código fuente, adaptándolo a los requisitos específicos del negocio", "Escribir nuevo código Java o Python para cambiar completamente el funcionamiento del sistema", "Eliminar módulos que no se utilizan inmediatamente", "Crear múltiples instancias independientes del ERP para cada departamento"],
    correctAnswer: 0,
  },
  {
    question: "89. ¿Qué fase del proceso de implementación implica la importación de datos históricos al ERP?",
    options: ["La migración de datos, donde se transforman, limpian y cargan datos de sistemas antiguos al ERP nuevo", "La fase de análisis funcional donde se definen requisitos", "La fase de capacitación de usuarios", "La fase de post-implementación y optimización"],
    correctAnswer: 0,
  },
  {
    question: "90. ¿Cuál es uno de los riesgos más importantes que debe gestionarse durante la migración de datos en un ERP?",
    options: ["La pérdida o corrupción de datos históricos debido a errores en la transformación, incompatibilidades de formato o procesos de validación insuficientes", "Que el hardware del servidor sea demasiado potente para procesar los datos", "Que todos los usuarios accedan simultáneamente sin causar problemas", "Que la base de datos tenga demasiada capacidad de almacenamiento"],
    correctAnswer: 0,
  },
  {
    question: "91. ¿Cuál de las siguientes actividades es responsabilidad directa de un sistema CRM?",
    options: ["Gestionar la producción y el inventario de almacenes", "Registrar interacciones, preferencias y historial de cada cliente para personalizar el servicio", "Contabilizar automáticamente todos los gastos de la empresa", "Controlar los permisos y plantillas de empleados en nómina"],
    correctAnswer: 1,
  },
  {
    question: "92. ¿Qué ventaja operativa proporciona la modularidad?",
    options: ["Permite adquirir e instalar solo los módulos que la empresa necesita, reduciendo costos y complejidad", "Obliga a implementar todos los módulos sin posibilidad de selección", "Impide la comunicación entre diferentes áreas funcionales de la empresa", "Aumenta la necesidad de múltiples bases de datos independientes"],
    correctAnswer: 0,
  },
  {
    question: "93. ¿Cuál es la base de datos que utiliza Odoo de forma nativa y recomendada?",
    options: ["Microsoft SQL Server", "Oracle Database", "PostgreSQL", "MongoDB"],
    correctAnswer: 2,
  },
  {
    question: "94. ¿Cuál es el principio fundamental de una arquitectura SOA?",
    options: ["Centralizar toda la lógica en un único servidor monolítico sin separación de responsabilidades", "Dividir la funcionalidad empresarial en servicios independientes, reutilizables e interconectados a través de interfaces estándar", "Eliminar toda comunicación entre módulos para aumentar la seguridad", "Usar exclusivamente bases de datos no relacionales para mejor rendimiento"],
    correctAnswer: 1,
  },
  {
    question: "95. En Odoo, la lógica de negocio se distribuye entre diferentes componentes. ¿Qué componente es responsable de ejecutar la lógica de negocio en el servidor?",
    options: ["El navegador web del cliente", "El servidor de aplicación Odoo (backend)", "La base de datos PostgreSQL", "El cliente REST API externo"],
    correctAnswer: 1,
  },
  {
    question: "96. En un ERP como Odoo, el cliente es un componente importante de la arquitectura. ¿Cuál es la función principal del cliente en esta arquitectura?",
    options: ["Procesar toda la lógica de negocio y validaciones de datos", "Presentar la interfaz de usuario y facilitar la interacción del usuario con el servidor", "Almacenar permanentemente todos los datos de la empresa", "Ejecutar copias de seguridad automáticas de la base de datos"],
    correctAnswer: 1,
  },
  {
    question: "97. ¿Cuál es la ventaja más significativa de mantener una única base de datos centralizada para toda la empresa?",
    options: ["Permite que cada departamento gestione sus propios datos sin sincronización", "Garantiza la integridad de datos, evita inconsistencias y facilita reportes unificados con información confiable", "Aumenta la velocidad de procesamiento al multiplicar el número de servidores", "Reduce la necesidad de realizar copias de seguridad"],
    correctAnswer: 1,
  },
  {
    question: "98. ¿Qué permite la interoperabilidad en un ERP?",
    options: ["Que el ERP funcione exclusivamente en modo offline sin conexión a internet", "Que diferentes sistemas y aplicaciones externas intercambien datos y se comuniquen con el ERP de forma integrada", "Que el ERP sea accesible solo desde una ubicación geográfica específica", "Que el servidor rechace automáticamente todas las conexiones externas"],
    correctAnswer: 1,
  },
  {
    question: "99. ¿Cuál es la fase inicial más crítica en una implantación de ERP?",
    options: ["Instalar directamente el software sin preparación previa", "Planificación y análisis: definir objetivos, alcance, recursos y diagnóstico de la situación actual", "Importar inmediatamente todos los datos históricos", "Activar el sistema en producción sin pruebas previas"],
    correctAnswer: 1,
  },
  {
    question: "100. ¿Qué se realiza específicamente durante el análisis funcional?",
    options: ["Se instala el servidor de bases de datos sin necesidad de estudios previos", "Se documentan los procesos empresariales actuales, se identifican requisitos funcionales y se diseña cómo el ERP cubrirá esas necesidades", "Se borran todos los datos antiguos para limpiar el sistema", "Se capacita a los usuarios finales en utilización del software"],
    correctAnswer: 1,
  },
  {
    question: "101. ¿Qué significa parametrizar un sistema ERP?",
    options: ["Escribir código personalizado para modificar el núcleo del software", "Configurar el ERP ajustando opciones, valores, reglas de negocio y flujos de trabajo sin programación, adaptándolo a los procesos específicos de la empresa", "Eliminar módulos innecesarios del sistema", "Cambiar la base de datos por un sistema completamente diferente"],
    correctAnswer: 1,
  },
  {
    question: "102. Durante la implantación de un ERP, la migración de datos es una fase crítica. ¿Cuál es el propósito principal de la fase de migración de datos?",
    options: ["Eliminar todos los datos antiguos sin necesidad de conservarlos", "Transferir datos históricos de sistemas antiguos al ERP nuevo, validando integridad y coherencia de la información", "Crear contraseñas nuevas para todos los usuarios del sistema", "Desconectar completamente los sistemas antiguos"],
    correctAnswer: 1,
  },
];

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

export default function SGESimulacro2Quiz() {
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
              <span className="text-foreground">Sistemas de Gestion Empresarial</span>
            </h1>
            <h2 className="text-xl text-muted-foreground">Test Extra II</h2>
            <p className="text-muted-foreground text-lg">ERP, CRM y sistemas empresariales</p>

            <div className="space-y-4 text-left py-6">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">{questions.length} Preguntas</p>
                  <p className="text-sm text-muted-foreground">Todos los conceptos clave</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Preguntas Aleatorizadas</p>
                  <p className="text-sm text-muted-foreground">Cada sesion es diferente</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">Retroalimentacion Inmediata</p>
                  <p className="text-sm text-muted-foreground">Aprende mientras practicas</p>
                </div>
              </div>
            </div>

            <Button
              onClick={startQuiz}
              size="lg"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold"
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
              <div className="text-6xl font-bold text-amber-500 mb-2">{Math.max(0, percentage)}%</div>
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
              {percentage >= 90 && <p className="text-lg text-foreground">Excelente. Dominas SGE.</p>}
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
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold"
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
          <span className="text-amber-500">{answeredCount} respondidas</span>
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
                      ${!showFeedback && "hover:border-amber-500 hover:bg-accent cursor-pointer"}
                      ${showFeedback && "cursor-not-allowed"}
                      ${isSelected && !showFeedback && "border-amber-500 bg-accent"}
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
                className="flex-1 bg-amber-500 hover:bg-amber-600 text-white"
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
            className="h-full bg-amber-500 transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}
