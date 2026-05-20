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
    question: "1. ¿Cuál es la función principal de un sistema ERP en una organización?",
    options: ["Integrar y centralizar la gestión de todos los recursos y procesos empresariales", "Crear contenido multimedia para marketing", "Compilar código fuente en aplicaciones ejecutables", "Actuar como interfaz gráfica del escritorio"],
    correctAnswer: 0,
  },
  {
    question: "2. ¿Cuál es la misión principal de implementar una solución CRM?",
    options: ["Optimizar la relación y el seguimiento con los clientes", "Administrar direcciones IP en redes corporativas", "Controlar niveles de stock en almacén", "Desarrollar interfaces de usuario responsivas"],
    correctAnswer: 0,
  },
  {
    question: "3. ¿Cuál es la característica distintiva que diferencia a los ERP actuales de sistemas heredados?",
    options: ["La capacidad de integrar procesos en tiempo real entre departamentos", "El funcionamiento completamente desconectado entre módulos", "La necesidad obligatoria de trabajar sin conexión a internet", "La dependencia total de aplicaciones externas como hojas de cálculo"],
    correctAnswer: 0,
  },
  {
    question: "4. ¿Qué beneficio proporciona el diseño modular de un ERP?",
    options: ["Permite adaptar la solución seleccionando e instalando solo los módulos necesarios", "Obliga a contratar e instalar todas las funcionalidades disponibles", "Disminuye significativamente la flexibilidad del sistema", "Incrementa obligatoriamente los costes de operación y mantenimiento"],
    correctAnswer: 0,
  },
  {
    question: "5. ¿Qué motor de base de datos es la opción por defecto en Odoo?",
    options: ["PostgreSQL", "SQLite para entornos empresariales", "SQL Server en todas las instalaciones", "MongoDB para mejor escalabilidad"],
    correctAnswer: 0,
  },
  {
    question: "6. ¿Qué define a la arquitectura SOA en contexto de sistemas empresariales?",
    options: ["Una estructura basada en servicios independientes y reutilizables que se comunican entre sí", "Un componente de almacenamiento centralizado de archivos", "Un paradigma de programación orientado a objetos", "Una metodología de diseño de interfaces de usuario"],
    correctAnswer: 0,
  },
  {
    question: "7. ¿En qué componente de Odoo se ejecuta la lógica de negocio y las reglas de procesamiento?",
    options: ["En el servidor de aplicación", "En el navegador web del cliente", "En la base de datos relacional", "En los scripts del lado del cliente"],
    correctAnswer: 0,
  },
  {
    question: "8. ¿Cuál es la responsabilidad principal del componente cliente en una solución ERP?",
    options: ["Presentar la interfaz gráfica y permitir la interacción del usuario", "Gestionar endpoints y peticiones de API internas", "Procesar toda la lógica de validación de negocio", "Almacenar permanentemente toda la información empresarial"],
    correctAnswer: 0,
  },
  {
    question: "9. ¿Qué ventaja principal aporta el uso de una base de datos centralizada en un ERP?",
    options: ["Garantiza la consistencia de datos y evita duplicidades e inconsistencias", "Provoca la replicación automática de información en múltiples copias", "Reduce la coherencia al permitir datos independientes por departamento", "Distribuye el almacenamiento en servidores sin sincronización"],
    correctAnswer: 0,
  },
  {
    question: "10. ¿Qué capacidad proporciona la interoperabilidad en un sistema ERP?",
    options: ["Conectarse e intercambiar información con otros sistemas externos", "Desactivar módulos innecesarios del sistema", "Limitar el acceso a un número máximo de usuarios simultáneos", "Funcionar sin necesidad de ingerir o procesar datos"],
    correctAnswer: 0,
  },
  {
    question: "11. ¿Cuál es el punto de partida en la metodología de implantación de un ERP?",
    options: ["Realizar una auditoría y diagnóstico del estado actual de la organización", "Proceder directamente a la migración de datos históricos", "Iniciar la formación intensiva del personal", "Comenzar la parametrización de módulos"],
    correctAnswer: 0,
  },
  {
    question: "12. ¿Qué actividades se desarrollan durante el análisis funcional en una implantación ERP?",
    options: ["Documentar flujos de negocio y requisitos funcionales de cada departamento", "Escribir código de programación personalizado", "Eliminar datos obsoletos de sistemas antiguos", "Instalar servidores y configurar red"],
    correctAnswer: 0,
  },
  {
    question: "13. ¿Qué significa parametrizar un ERP?",
    options: ["Configurar el sistema mediante opciones disponibles sin modificar código fuente", "Desarrollar programación personalizada desde cero", "Borrar o resetear todas las configuraciones previas", "Crear nuevas estructuras de bases de datos"],
    correctAnswer: 0,
  },
  {
    question: "14. ¿Qué proceso empresarial se ejecuta durante la fase de migración en una implantación ERP?",
    options: ["La transferencia y transformación de datos históricos del sistema anterior al nuevo", "La capacitación intensiva de todos los usuarios finales", "El diagnóstico de procesos y necesidades organizacionales", "El ajuste de parámetros de configuración"],
    correctAnswer: 0,
  },
  {
    question: "15. ¿Cuál es un riesgo significativo que debe controlarse durante la migración de datos en un ERP?",
    options: ["La pérdida o degradación de calidad de los datos transferidos", "Un incremento excesivo en el número de usuarios con acceso al sistema", "La aparición de nuevas funcionalidades no previstas en el sistema destino", "La mejora espontánea del rendimiento del sistema tras la migración"],
    correctAnswer: 0,
  },
  {
    question: "16. ¿Cuál es el propósito principal de la fase de Go-Live en la implementación de un ERP?",
    options: ["Transferir el sistema desde el entorno de prueba al entorno operativo", "Realizar copias de seguridad de todos los datos", "Desactivar los módulos innecesarios", "Capacitar a los usuarios finales"],
    correctAnswer: 0,
  },
  {
    question: "17. En Odoo, ¿cuál es la naturaleza técnica de un modelo?",
    options: ["Un archivo de configuración XML", "Una clase de Python que define la estructura y comportamiento de un objeto de negocio", "Un conjunto de macros para automatizar tareas", "Un documento visual de diseño de interfaz"],
    correctAnswer: 1,
  },
  {
    question: "18. ¿Cuál es la función principal del ORM (Object-Relational Mapping) en Odoo?",
    options: ["Convertir consultas en lenguaje natural", "Abstrae la base de datos y permite operaciones sin escribir SQL directo", "Crear automáticamente informes en PDF", "Gestionar permisos de acceso a usuarios"],
    correctAnswer: 1,
  },
  {
    question: "19. En Odoo, ¿qué tipo de campo relacional vincula varios registros de un modelo con un único registro de otro modelo (por ejemplo, varias facturas con un mismo cliente)?",
    options: ["Many2one", "Text", "Float", "Selection"],
    correctAnswer: 0,
  },
  {
    question: "20. ¿Qué representa una vista en la arquitectura de Odoo?",
    options: ["Un módulo de programación backend", "La presentación visual de datos al usuario a través de diferentes formatos", "Un servidor de base de datos", "Un protocolo de comunicación"],
    correctAnswer: 1,
  },
  {
    question: "21. ¿Qué capacidad proporciona la funcionalidad de filtros en Odoo?",
    options: ["Clasificar registros por colores automáticamente", "Seleccionar y visualizar subconjuntos de datos basados en criterios específicos", "Crear automáticamente nuevos campos en un modelo", "Exportar datos a formatos incompatibles"],
    correctAnswer: 1,
  },
  {
    question: "22. ¿Cuál es el resultado de aplicar la función Group By sobre un conjunto de registros?",
    options: ["Ordena los registros en orden alfabético", "Agrupa y resume datos según los valores de un campo determinado", "Crea registros duplicados para análisis comparativo", "Elimina registros según un criterio automático"],
    correctAnswer: 1,
  },
  {
    question: "23. ¿Qué utilidad tienen los favoritos en las búsquedas de Odoo?",
    options: ["Marcar usuarios como preferentes para tareas", "Guardar criterios de búsqueda frecuentes para acceso rápido", "Bloquear módulos del sistema", "Duplicar bases de datos automáticamente"],
    correctAnswer: 1,
  },
  {
    question: "24. ¿Cuál es la característica principal de la vista de Lista en Odoo?",
    options: ["Representa datos en tarjetas organizadas por columnas de estado", "Muestra registros en formato de tabla con filas y columnas", "Visualiza datos en un calendario interactivo", "Presenta información mediante gráficos estadísticos"],
    correctAnswer: 1,
  },
  {
    question: "25. ¿Para qué tipo de procesos es más adecuada la vista Kanban en Odoo?",
    options: ["Para mostrar datos numéricos en gráficos de barras", "Para visualizar flujos de trabajo organizados por etapas o estados", "Para editar directamente los datos de múltiples registros", "Para generar reportes en formato impreso"],
    correctAnswer: 1,
  },
  {
    question: "26. ¿Qué ventaja principal ofrece Odoo Studio en el desarrollo empresarial?",
    options: ["Permite escribir código en lenguajes de programación compilados", "Facilita la personalización de procesos sin requerir conocimientos de programación", "Gestiona exclusivamente bases de datos NoSQL", "Genera automáticamente empleados virtuales"],
    correctAnswer: 1,
  },
  {
    question: "27. ¿Cuál es el impacto positivo de automatizar los procesos contables en un ERP?",
    options: ["Aumenta la dependencia del trabajo manual", "Disminuye la precisión de los registros financieros", "Minimiza errores derivados de la intervención manual y acelera operaciones", "Elimina la necesidad de auditoría externa"],
    correctAnswer: 2,
  },
  {
    question: "28. ¿Qué proceso automático se desencadena al validar una factura de venta en Odoo?",
    options: ["Se envía inmediatamente al cliente por correo electrónico", "Se genera automáticamente el asiento contable correspondiente", "Se crea una orden de compra de los proveedores", "Se bloquea temporalmente el acceso de otros usuarios"],
    correctAnswer: 1,
  },
  {
    question: "29. ¿Cuál es el objetivo principal de la conciliación bancaria en un ERP?",
    options: ["Crear nuevas cuentas bancarias de inversión", "Comparar y validar que los movimientos del banco coincidan con los registros internos", "Aumentar artificialmente el saldo de tesorería", "Eliminar transacciones no autorizadas automáticamente"],
    correctAnswer: 1,
  },
  {
    question: "30. ¿Cuál es la principal ventaja empresarial de integrar módulos ERP y CRM en una única plataforma?",
    options: ["Duplicar los procesos de forma paralela para mayor seguridad", "Proporcionar una vista 360º del cliente desde oportunidad hasta post-venta", "Reducir significativamente la cantidad de clientes activos", "Separar completamente las operaciones comerciales de las financieras"],
    correctAnswer: 1,
  },
  {
    question: "31. ¿Cuál es el objetivo principal de un sistema CRM dentro de una organización?",
    options: ["Automatizar procesos de manufactura y control de inventario", "Gestionar las relaciones con clientes y mejorar la experiencia del cliente", "Centralizar todos los datos financieros contables de la empresa", "Sustituir completamente el correo electrónico corporativo"],
    correctAnswer: 1,
  },
  {
    question: "32. ¿Qué ventaja aporta la arquitectura modular en un sistema ERP empresarial?",
    options: ["Reduce el costo de licencias de software a la mitad", "Permite a las organizaciones implementar solo los módulos que necesitan y escalarlos posteriormente", "Garantiza que no haya nunca conflictos entre departamentos", "Elimina la necesidad de mantener una base de datos centralizada"],
    correctAnswer: 1,
  },
  {
    question: "33. ¿Qué base de datos utiliza Odoo como su almacén de datos principal?",
    options: ["MongoDB", "PostgreSQL", "Oracle Database", "Microsoft SQL Server"],
    correctAnswer: 1,
  },
  {
    question: "34. ¿Qué es la arquitectura SOA (Service-Oriented Architecture) en el contexto de sistemas ERP modernos?",
    options: ["Un enfoque que organiza el sistema como un conjunto de servicios independientes e interoperables que se comunican entre sí", "Un método para reducir el número de trabajadores en el departamento de IT", "Una técnica exclusivamente para optimizar interfaces de usuario", "Un protocolo de seguridad que cifra todas las comunicaciones de datos"],
    correctAnswer: 0,
  },
  {
    question: "35. ¿Qué componente ejecuta la lógica de negocio en un ERP como Odoo?",
    options: ["El servidor web y la base de datos conjuntamente", "El servidor de aplicaciones o backend, que contiene toda la lógica empresarial", "Exclusivamente el navegador del cliente mediante JavaScript", "El protocolo HTTP de comunicación entre cliente y servidor"],
    correctAnswer: 1,
  },
  {
    question: "36. ¿Cuál es la función principal del cliente en un ERP como Odoo?",
    options: ["Ejecutar las reglas de negocio y validaciones de datos", "Presentar la interfaz de usuario y capturar las peticiones del usuario final", "Gestionar directamente la base de datos sin pasar por el servidor", "Realizar copias de seguridad automáticas de la información"],
    correctAnswer: 1,
  },
  {
    question: "37. ¿Qué ventaja proporciona el uso de una base de datos centralizada en un ERP?",
    options: ["Permite que cada usuario tenga su propia copia local de datos sin sincronización", "Evita cualquier necesidad de respaldos o copias de seguridad", "Garantiza consistencia de datos, un único punto de verdad y facilita la integridad de la información", "Reduce completamente la necesidad de permisos y control de acceso"],
    correctAnswer: 2,
  },
  {
    question: "38. ¿Qué permite la interoperabilidad en un sistema ERP moderno?",
    options: ["Que el ERP solo funcione con un tipo de base de datos específico", "Que el ERP se comunique e intercambie datos con otros sistemas, aplicaciones y plataformas externas", "Que los usuarios cambien de contraseña de forma autónoma", "Que la interfaz sea idéntica en todos los idiomas soportados"],
    correctAnswer: 1,
  },
  {
    question: "39. ¿Cuál es la primera fase crítica en la implantación de un ERP en una organización?",
    options: ["La instalación física de todos los servidores y hardware", "El análisis y planificación de requisitos empresariales y procesos actuales", "La transferencia inmediata de todos los datos al nuevo sistema", "La capacitación de usuarios después de la implantación completa"],
    correctAnswer: 1,
  },
  {
    question: "40. ¿Qué se realiza durante el análisis funcional en la implantación de un ERP?",
    options: ["Se revisan y escriben todos los códigos fuente del ERP", "Se identifican y documentan los procesos empresariales, roles, permisos y configuraciones necesarias", "Se prueba la velocidad de procesamiento de la base de datos bajo carga máxima", "Se capacita a los técnicos informáticos en programación avanzada"],
    correctAnswer: 1,
  },
  {
    question: "41. ¿Qué significa parametrizar un sistema ERP?",
    options: ["Escribir código personalizado para cambiar el comportamiento del sistema", "Configurar el sistema mediante variables, opciones y tablas de datos sin modificar el código fuente", "Realizar una copia de seguridad de toda la información", "Traducir la interfaz a diferentes idiomas"],
    correctAnswer: 1,
  },
  {
    question: "42. ¿Qué fase de implantación de un ERP implica importar y validar datos históricos del sistema anterior?",
    options: ["La fase de diseño técnico", "La fase de migración de datos", "La fase de pruebas unitarias", "La fase de soporte post-implementación"],
    correctAnswer: 1,
  },
  {
    question: "43. ¿Cuál es un riesgo importante que debe gestionarse cuidadosamente durante la migración de datos a un ERP?",
    options: ["Que el nuevo sistema sea demasiado rápido en sus procesamientos", "La pérdida, corrupción o inconsistencia de datos históricos críticos para el negocio", "Que los usuarios prefieran seguir usando el sistema antiguo", "Que el servidor no tenga suficiente memoria RAM"],
    correctAnswer: 1,
  },
  {
    question: "44. ¿Cuál es el propósito principal de un sistema CRM dentro de una estrategia empresarial?",
    options: ["Gestionar la relación con clientes mediante automatización de ventas, servicio y análisis de datos", "Reemplazar completamente el departamento de ventas humano", "Almacenar exclusivamente documentos contractuales en formato digital", "Controlar los inventarios de productos en almacén"],
    correctAnswer: 0,
  },
  {
    question: "45. ¿Qué característica distingue a los sistemas ERP modernos en comparación con generaciones anteriores?",
    options: ["Arquitectura basada en servicios (SOA), modularidad, computación en la nube y actualizaciones continuas", "Uso exclusivo de tecnología cliente-servidor sin opciones de nube", "Obligatoriedad de datos almacenados exclusivamente en servidores locales", "Eliminar completamente la necesidad de parametrización de usuarios"],
    correctAnswer: 0,
  },
  {
    question: "46. ¿Qué ventaja estratégica aporta la modularidad en la arquitectura de un sistema ERP?",
    options: ["Permite activar y personalizar solo los módulos necesarios, reducir costos iniciales y adaptar el sistema al crecimiento empresarial", "Simplifica que todos los usuarios accedan a todas las funcionalidades sin restricciones", "Elimina la necesidad de cualquier formación en el sistema", "Garantiza que el sistema nunca requiera mantenimiento posterior"],
    correctAnswer: 0,
  },
  {
    question: "47. ¿Cuál es la base de datos que utiliza Odoo como su motor de almacenamiento por defecto?",
    options: ["PostgreSQL", "MySQL", "Oracle Database", "Microsoft SQL Server"],
    correctAnswer: 0,
  },
  {
    question: "48. ¿Qué es la arquitectura SOA y cómo se aplica en sistemas ERP modernos?",
    options: ["Una arquitectura que descompone el sistema en servicios independientes y reutilizables que se comunican mediante interfaces estándar", "Un modelo monolítico donde todos los módulos comparten el mismo código base sin separación", "Un sistema que solo permite comunicación local entre componentes sin acceso remoto", "Una arquitectura que elimina la necesidad de bases de datos centralizadas"],
    correctAnswer: 0,
  },
  {
    question: "49. ¿Qué componente en Odoo es responsable de ejecutar la lógica de negocio y aplicar reglas de validación?",
    options: ["El servidor Odoo (motor de negocio) que procesa modelos, campos y reglas de negocio", "Únicamente el cliente web en navegador", "La base de datos PostgreSQL", "El sistema operativo del servidor"],
    correctAnswer: 0,
  },
  {
    question: "50. ¿Cuál es la función principal del cliente en un sistema ERP como Odoo?",
    options: ["Presentar la interfaz de usuario, capturar datos, enviar solicitudes al servidor y mostrar resultados", "Almacenar datos de forma permanente en la máquina del usuario", "Ejecutar toda la lógica de validación y negocio del sistema", "Gestionar conexiones directas a la base de datos sin pasar por el servidor"],
    correctAnswer: 0,
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
            <h2 className="text-xl text-muted-foreground">Test Extra I</h2>
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
