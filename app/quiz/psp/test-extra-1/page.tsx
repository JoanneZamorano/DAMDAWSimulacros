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
    question: "1. ¿Cuál fue el factor técnico determinante que permitió la exfiltración masiva de datos personales en el incidente de seguridad de 2017 de una agencia crediticia estadounidense?",
    options: [
      "Implementación defectuosa de Multi-Factor Authentication en el acceso administrativo",
      "Falta de aplicación oportuna de una actualización crítica de seguridad en un framework web",
      "Corrupción de los registros de auditoría por un evento de sobrecarga de disco",
      "Cifrado inadecuado basado en algoritmos débiles sin rotación de claves"
    ],
    correctAnswer: 1
  },
  {
    question: "2. ¿Qué característica distintiva define el funcionamiento de la criptografía simétrica?",
    options: [
      "Utiliza dos claves diferentes, una para cifrar y otra para descifrar",
      "Utiliza una única clave compartida tanto para cifrar como para descifrar los datos",
      "No es adecuada para cifrar volúmenes grandes de información",
      "Se emplea exclusivamente en autenticación mediante certificados digitales"
    ],
    correctAnswer: 1
  },
  {
    question: "3. ¿Qué modelo de control de acceso asigna permisos a usuarios basándose en funciones organizacionales predeterminadas?",
    options: [
      "Control de acceso basado en discreción del propietario",
      "Control de acceso basado en roles asignados",
      "Control de acceso obligatorio por etiquetas de seguridad",
      "Control de acceso basado en atributos dinámicos del contexto"
    ],
    correctAnswer: 1
  },
  {
    question: "4. ¿Qué concepto describe la capacidad de un sistema para gestionar múltiples tareas cuya ejecución se intercala en el tiempo compartiendo el procesador, sin necesidad de ejecutarse simultáneamente?",
    options: [
      "Paralelismo, que requiere múltiples núcleos ejecutando tareas al mismo tiempo",
      "Concurrencia, que permite intercalar la ejecución de varias tareas en el tiempo",
      "Distribución de carga entre nodos de un sistema en clúster",
      "Virtualización de procesos mediante hipervisor en sistemas dedicados"
    ],
    correctAnswer: 1
  },
  {
    question: "5. ¿En cuál estado del ciclo de vida de un proceso se encuentra cuando ha sido admitido por el sistema operativo pero aún no dispone de tiempo de CPU?",
    options: [
      "Estado de creación inicial",
      "Estado de espera por recurso o evento externo",
      "Estado de disponibilidad, esperando asignación de CPU",
      "Estado de finalización y liberación de recursos"
    ],
    correctAnswer: 2
  },
  {
    question: "6. ¿Cuál es la definición técnica de un demonio o servicio del sistema operativo?",
    options: [
      "Un segmento de memoria compartida entre múltiples procesos en ejecución",
      "Un proceso en segundo plano sin interfaz visual que proporciona servicios al sistema",
      "Un mecanismo de comunicación entre procesos basado en colas ordenadas",
      "Un programa ejecutable exclusivamente en sistemas operativos Windows"
    ],
    correctAnswer: 1
  },
  {
    question: "7. ¿Qué mecanismo de comunicación entre procesos enlaza directamente la salida estándar de un proceso con la entrada estándar de otro?",
    options: [
      "Sistema de señales del SO",
      "Conductos o tuberías de datos",
      "Variables de exclusión mutua para sincronización",
      "Puntos de sincronización entre hilos"
    ],
    correctAnswer: 1
  },
  {
    question: "8. ¿Cuál es la situación de bloqueo permanente que ocurre cuando dos o más procesos e hilos quedan mutuamente a la espera de recursos que poseen los demás?",
    options: [
      "Una planificación subóptima de tareas de baja prioridad",
      "Un círculo de espera donde ninguna entidad puede progresar",
      "Una técnica de optimización para sistemas multiprocesador",
      "Un proceso que completó su ejecución liberando todos los recursos"
    ],
    correctAnswer: 1
  },
  {
    question: "9. ¿Cuál fue la solución técnica implementada por la NASA para resolver un problema de prioridad inversa en la sonda Mars Pathfinder?",
    options: [
      "Modificación de la herencia de prioridades en el planificador",
      "Cambio del gestor de inicio de sistema operativo",
      "Implementación obligatoria de pipes para IPC",
      "Eliminación completa del hilo ejecutándose en alta prioridad"
    ],
    correctAnswer: 0
  },
  {
    question: "10. ¿Por qué AtomicInteger se considera superior a synchronized en operaciones sobre contadores compartidos?",
    options: [
      "Porque permite suspender y reanudar hilos de forma selectiva.",
      "Porque realiza operaciones atómicas mediante CAS (Compare-And-Swap) sin bloqueos explícitos, mejorando la escalabilidad.",
      "Porque impide que varios hilos lean el mismo contador simultáneamente.",
      "Porque elimina la necesidad de proteger cualquier variable mutable compartida en el programa."
    ],
    correctAnswer: 1
  },
  {
    question: "11. ¿En qué nivel del modelo TCP/IP reside la responsabilidad de determinar la ruta que deben seguir los datos entre dos redes diferentes?",
    options: [
      "En la capa de Aplicación, donde se ejecutan los navegadores y servidores web.",
      "En la capa de Transporte, donde operan TCP y UDP.",
      "En la capa de Internet, mediante protocolos como IP y algoritmos de encaminamiento.",
      "En la capa de Enlace, donde se trabaja con direcciones MAC."
    ],
    correctAnswer: 2
  },
  {
    question: "12. En un servidor de mensajería instantánea con soporte store-and-forward, ¿qué ocurre cuando el receptor está temporalmente desconectado?",
    options: [
      "Se rechaza el mensaje y se notifica al remitente del error.",
      "El servidor almacena el mensaje y lo entrega al reconectarse el receptor.",
      "Se cambia automáticamente de TCP a UDP para reintentar el envío.",
      "El mensaje se reenvía por red local sin pasar por el servidor."
    ],
    correctAnswer: 1
  },
  {
    question: "13. ¿Cuál es la clase fundamental en Java para implementar un servidor que acepte conexiones TCP de múltiples clientes?",
    options: [
      "Socket, que representa una conexión cliente-servidor establecida.",
      "ServerSocket, que escucha en un puerto y acepta conexiones entrantes.",
      "DatagramSocket, que maneja comunicación sin conexión.",
      "SSLServerSocket, que solo funciona con certificados SSL/TLS."
    ],
    correctAnswer: 1
  },
  {
    question: "14. En juegos de acción multijugador, ¿por qué se prefiere UDP frente a TCP para transmitir las posiciones y movimientos de los jugadores?",
    options: [
      "Porque UDP garantiza entrega ordenada y completa de todos los paquetes.",
      "Porque UDP tiene menor latencia al no esperar confirmación, permitiendo experiencia en tiempo real fluida.",
      "Porque UDP es más seguro y cifra automáticamente los datos.",
      "Porque UDP requiere un solo socket mientras que TCP necesita múltiples."
    ],
    correctAnswer: 1
  },
  {
    question: "15. ¿Cuál es el propósito principal de utilizar un ExecutorService o Thread Pool en un servidor que atiende múltiples clientes?",
    options: [
      "Garantizar que todos los clientes reciban respuesta exactamente en el mismo momento.",
      "Reutilizar hilos del pool para manejar diferentes clientes, evitando la creación costosa de hilos nuevos.",
      "Establecer una conexión diferente con cada cliente en paralelo sin sincronización.",
      "Limitar el servidor a atender un único cliente a la vez para evitar problemas de concurrencia."
    ],
    correctAnswer: 1
  },
  {
    question: "16. ¿Cuál es el puerto estándar utilizado por servidores HTTPS para recibir conexiones seguras cifradas?",
    options: [
      "El puerto 80, destinado a tráfico HTTP sin cifrar.",
      "El puerto 8443, usado principalmente en desarrollo local y servidores proxy.",
      "El puerto 443, puerta estándar de HTTPS en producción.",
      "El puerto 8080, alternativa para desarrollo de aplicaciones web."
    ],
    correctAnswer: 2
  },
  {
    question: "17. ¿Cuál es la configuración mínima recomendada para garantizar comunicaciones seguras en aplicaciones modernas?",
    options: [
      "Usar SSL sin validación de certificados para simplificar la configuración.",
      "Activar TLSv1.0 para compatibilidad con sistemas antiguos.",
      "Utilizar TLSv1.2 o versiones superiores con validación de certificados.",
      "Permitir conexiones sin cifrado alternándolas con conexiones cifradas."
    ],
    correctAnswer: 2
  },
  {
    question: "18. ¿Qué conjunto de propiedades define exclusivamente a las funciones hash criptográficas frente a otras funciones de resumen?",
    options: [
      "Salida de longitud variable, reversibles mediante clave pública y resistentes a colisiones",
      "Salida de longitud fija, deterministas, irreversibles y resistentes a colisiones",
      "Requieren clave privada para generarse y producen salidas de longitud fija",
      "Salida de longitud fija y deterministas, pero reversibles con suficiente capacidad de cómputo"
    ],
    correctAnswer: 1
  },
  {
    question: "19. ¿Qué plataforma proporciona certificados X.509 de corta duración sin coste y con renovación automatizada?",
    options: [
      "OpenSSL, un conjunto de herramientas de criptografía",
      "Let's Encrypt, una autoridad certificadora no comercial",
      "Wireshark, un analizador de tráfico de red",
      "DigiCert, una autoridad certificadora comercial premium"
    ],
    correctAnswer: 1
  },
  {
    question: "20. ¿Cuál es la práctica actual de mayor efectividad para aumentar la resistencia de una cuenta de usuario ante robo de credenciales?",
    options: [
      "Aumentar la complejidad de la contraseña cada mes",
      "Implementar autenticación multifactor con segundos factores independientes",
      "Registrar todos los intentos fallidos en el navegador local",
      "Cambiar el nombre de usuario periódicamente sin notificación"
    ],
    correctAnswer: 1
  },
  {
    question: "21. ¿Qué concepto de seguridad establece que los usuarios deben recibir únicamente los permisos imprescindibles para realizar sus funciones?",
    options: [
      "Principio de disponibilidad total",
      "Principio del menor privilegio",
      "Principio de acceso universal",
      "Principio de herencia de roles"
    ],
    correctAnswer: 1
  },
  {
    question: "22. En sistemas distribuidos, ¿cuál es el mecanismo fundamental mediante el cual los nodos independientes intercambian información?",
    options: [
      "Memoria compartida sincronizada en tiempo real",
      "Paso de mensajes entre procesos",
      "Un procesador central que coordina todas las operaciones",
      "Interrupciones hardware del kernel del SO"
    ],
    correctAnswer: 1
  },
  {
    question: "29. ¿Qué anomalía concurrente ocurre cuando dos o más hilos acceden y modifican datos compartidos sin sincronización?",
    options: [
      "Deadlock inevitable entre todos los hilos",
      "Condición de carrera con resultados no deterministas",
      "Fragmentación automática de la memoria heap",
      "Inversión de prioridad en el planificador"
    ],
    correctAnswer: 1
  },
  {
    question: "23. ¿Qué mecanismo de aislamiento utiliza Google Chrome para contener el impacto de vulnerabilidades en componentes del navegador?",
    options: [
      "Proceso único compartido para todas las pestañas y extensiones",
      "Aislamiento mediante procesos separados y sandboxing",
      "Ejecución monolítica con permiso total del kernel",
      "Deshabilitación de JavaScript en todas las pestañas"
    ],
    correctAnswer: 1
  },
  {
    question: "24. ¿Cuál es el sistema de paso de mensajes utilizado por systemd para la comunicación interuproceso en sistemas Linux modernos?",
    options: [
      "FTP para protocolo de transferencia de archivos",
      "D-Bus para comunicación de mensajes de sistema",
      "Telnet para acceso remoto de terminales",
      "SMTP para transferencia de correo"
    ],
    correctAnswer: 1
  },
  {
    question: "25. ¿Qué señal del SO (POSIX) solicita la terminación ordenada de un proceso permitiendo liberar recursos?",
    options: [
      "SIGKILL (señal 9), que fuerza terminación inmediata",
      "SIGTERM (señal 15), que solicita término ordenado",
      "SIGSTOP (señal 19), que pausa indefinidamente",
      "SIGHUP (señal 1), que reinicia el proceso"
    ],
    correctAnswer: 1
  },
  {
    question: "26. ¿Cuál es la situación de inanición (starvation) en un contexto de concurrencia y planificación?",
    options: [
      "Un proceso permanece bloqueado esperando mutuamente a otro proceso indefinidamente",
      "Un hilo nunca recibe los recursos o tiempo de CPU que necesita para ejecutarse",
      "Un servicio se ejecuta en background sin acceso a entrada de usuario",
      "Un proceso falla y deja memoria sin liberar en el sistema"
    ],
    correctAnswer: 1
  },
  {
    question: "27. ¿Por qué en Java es generalmente preferible implementar la interfaz Runnable en lugar de extender la clase Thread?",
    options: [
      "Porque Runnable permite reiniciar el mismo hilo múltiples veces",
      "Porque Java no soporta herencia múltiple, ofreciendo mayor flexibilidad arquitectónica",
      "Porque Runnable garantiza determinismo en el orden de ejecución",
      "Porque Runnable consume menos memoria que Thread"
    ],
    correctAnswer: 1
  },
  {
    question: "28. Cuando un hilo Java invoca Thread.sleep(3000) o wait(3000), ¿en cuál estado del ciclo de vida entra?",
    options: [
      "NEW, estado inicial no iniciado",
      "BLOCKED, esperando adquirir un lock",
      "TIMED_WAITING, bloqueado con tiempo finito de espera",
      "TERMINATED, finalizado"
    ],
    correctAnswer: 2
  },
  {
    question: "29. En la arquitectura de un servidor de juego multijugador con mundo persistente, ¿cuál es la función principal del pool de hilos dedicado al procesamiento de chunks?",
    options: [
      "Gestionar la síntesis y reproducción de audio del servidor",
      "Cargar, generar y descargar fragmentos del mundo según la posición de los jugadores",
      "Reintentar automáticamente operaciones fallidas de red",
      "Monitorizar y ajustar las prioridades de todos los hilos concurrentes"
    ],
    correctAnswer: 1
  },
  {
    question: "30. En una arquitectura cliente-servidor, ¿cuál es el rol del cliente en el establecimiento de la comunicación?",
    options: [
      "Permanece en escucha en un puerto específico aguardando solicitudes entrantes.",
      "Inicia de forma activa la conexión hacia el servidor y envía la petición de servicio.",
      "Administra los puertos del sistema y asigna los recursos disponibles.",
      "Encripta todos los mensajes antes de que salgan de su máquina local."
    ],
    correctAnswer: 1
  },
  {
    question: "31. ¿Cuál es la utilidad principal de la herramienta netstat en el contexto de diagnóstico de conectividad de red?",
    options: [
      "Genera tráfico de red para probar la capacidad de ancho de banda disponible.",
      "Captura y analiza paquetes a nivel de trama Ethernet y protocolo IP.",
      "Muestra los puertos en escucha, las conexiones establecidas y las estadísticas de red del sistema.",
      "Realiza consultas de DNS recursivas para resolver nombres de dominio."
    ],
    correctAnswer: 2
  },
  {
    question: "32. ¿Qué característica fundamental distingue a UDP del protocolo TCP?",
    options: [
      "UDP garantiza la entrega ordenada de todos los paquetes mediante confirmación automática.",
      "UDP envía datagramas independientes sin establecer conexión previa y sin garantizar entrega ni orden.",
      "UDP requiere un handshake de tres vías antes de transmitir cualquier dato.",
      "UDP cifra automáticamente el contenido de los datagramas para mayor seguridad."
    ],
    correctAnswer: 1
  },
  {
    question: "33. Al desarrollar una aplicación que usa DatagramSocket en Java, ¿qué aspecto crítico debe validar el programador?",
    options: [
      "Que el servidor escuche obligatoriamente en el puerto 8080 para compatibilidad global.",
      "Que cada datagrama no exceda el tamaño máximo permitido para evitar fragmentación indeseada.",
      "Que todos los datos se serialicen usando ObjectOutputStream antes de enviarlos.",
      "Que se cree un hilo independiente por cada datagrama que se reciba."
    ],
    correctAnswer: 1
  },
  {
    question: "34. ¿Qué clases de Java proporcionan una abstracción de sockets que incorpora cifrado TLS/SSL de forma transparente?",
    options: [
      "DatagramSocket y DatagramPacket para transporte cifrado.",
      "SSLSocket y SSLServerSocket para conexiones TCP cifradas.",
      "Socket y ServerSocket para proteger automáticamente todas las conexiones.",
      "BufferedReader y PrintWriter para encriptar el flujo de caracteres."
    ],
    correctAnswer: 1
  },
  {
    question: "35. ¿En qué archivo de configuración de Apache Tomcat se especifica un conector HTTPS con certificado digital?",
    options: [
      "web.xml para declarar la configuración de seguridad de la aplicación web.",
      "pom.xml para gestionar las dependencias de seguridad del proyecto.",
      "server.xml donde se definen los conectores (puertos, protocolos y certificados).",
      "hosts para mapear nombres de dominio a direcciones IP locales."
    ],
    correctAnswer: 2
  },
  {
    question: "36. ¿Cuál es el comando SMTP que el cliente debe enviar para especificar quién recibirá el correo?",
    options: [
      "DATA para iniciar la transmisión del cuerpo del mensaje.",
      "MAIL FROM para indicar el remitente del correo.",
      "RCPT TO para indicar el destinatario del correo.",
      "HELO para identificarse ante el servidor SMTP."
    ],
    correctAnswer: 2
  },
  {
    question: "37. ¿Qué protocolo de correo electrónico permite que los mensajes se mantengan sincronizados entre múltiples dispositivos y almacenados en el servidor?",
    options: [
      "POP3 que descarga y elimina los mensajes del servidor.",
      "SMTP que es exclusivamente para envío de correos.",
      "IMAP que sincroniza mensajes entre dispositivos y los almacena en el servidor.",
      "FTP que es un protocolo genérico de transferencia de archivos."
    ],
    correctAnswer: 2
  },
  {
    question: "38. ¿Cuál es la herramienta recomendada para construir y enviar peticiones HTTP manualmente sin escribir código de cliente?",
    options: [
      "Wireshark para capturar y analizar paquetes de red.",
      "Postman para componer y testear peticiones HTTP interactivamente.",
      "Apache Commons Net para desarrollar clientes FTP y telnet.",
      "JavaMail API para gestionar correo electrónico desde Java."
    ],
    correctAnswer: 1
  },
  {
    question: "39. En el patrón de servidor concurrente basado en hilos, ¿qué responsabilidad tiene cada Handler asignado a un cliente?",
    options: [
      "Generar direcciones IP de forma dinámica para nuevos clientes.",
      "Gestionar toda la comunicación con su cliente asignado mientras el hilo principal continúa aceptando nuevas conexiones.",
      "Realizar la traducción de nombres de dominio a direcciones IP.",
      "Aplicar encriptación obligatoria a todas las comunicaciones mediante certificados."
    ],
    correctAnswer: 1
  },
  {
    question: "40. ¿Qué API de Java permite gestionar múltiples canales de comunicación simultáneamente usando un único hilo mediante la clase Selector?",
    options: [
      "java.rmi para invocación remota de métodos.",
      "java.mail para gestión de correo electrónico.",
      "java.nio para entrada/salida no bloqueante y multiplexación.",
      "java.sql para acceso a bases de datos."
    ],
    correctAnswer: 2
  },
  {
    question: "41. En los servicios web SOAP, ¿qué documento XML describe formalmente la interfaz del servicio, incluyendo operaciones y tipos de datos?",
    options: [
      "JSON Schema para validar estructuras de datos en formato JSON.",
      "WSDL (Web Services Description Language) que define operaciones, parámetros y tipos.",
      "MIME para especificar los tipos de contenido en la transmisión.",
      "ServletContext para configurar el contexto de la aplicación web."
    ],
    correctAnswer: 1
  },
  {
    question: "42. ¿Cuál es el objetivo principal de aplicar el principio de 'security by design' en el desarrollo de software?",
    options: [
      "Integrar medidas de seguridad únicamente en la fase de testing del proyecto",
      "Incorporar consideraciones de seguridad desde las fases iniciales del diseño y arquitectura",
      "Aplicar parches de seguridad después de detectar vulnerabilidades en producción",
      "Delegar todas las responsabilidades de seguridad al equipo de operaciones"
    ],
    correctAnswer: 1
  },
  {
    question: "43. ¿Qué conjunto de ataques se mitiga directamente mediante una validación estricta de entrada que controle tipo, longitud, formato y rango de los datos recibidos?",
    options: [
      "Ataques de fuerza bruta, sniffing de red y spoofing de direcciones MAC",
      "Inyección SQL, desbordamiento de búfer, falsificación de parámetros y manipulación de datos",
      "Ataques de ingeniería social, phishing y robo de credenciales por keylogger",
      "Ataques DDoS volumétricos, amplificación DNS y saturación de ancho de banda"
    ],
    correctAnswer: 1
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
              <span className="text-foreground">PSP</span>
            </h1>
            <h2 className="text-xl text-muted-foreground">Test Extra I</h2>
            <p className="text-muted-foreground text-lg">Programacion de Servicios y Procesos</p>

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
