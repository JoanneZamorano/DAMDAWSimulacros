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
    question: "1. ¿Cuáles son los componentes tecnológicos fundamentales que sustentan el ecosistema de Industria 4.0?",
    options: [
      "Vapor, mecánica de precisión y sistemas neumáticos",
      "IoT, inteligencia artificial y computación en la nube",
      "Impresoras 3D, drones y sistemas de geolocalización",
      "Energías renovables, redes móviles y bases de datos centralizadas"
    ],
    correctAnswer: 1,
  },
  {
    question: "2. ¿Cuál es el factor diferenciador que introduce Industria 5.0 frente a Industria 4.0?",
    options: [
      "La eliminación de máquinas automatizadas para preservar empleos tradicionales",
      "La reincorporación del ser humano como elemento central, enfatizando sostenibilidad y resiliencia",
      "La adopción de redes 5G como estándar único de comunicación industrial",
      "El reemplazo de Cloud Computing por infraestructuras completamente on-premise"
    ],
    correctAnswer: 1,
  },
  {
    question: "3. ¿A qué clasificación pertenece un sistema SCADA en el ecosistema de tecnologías de automatización?",
    options: [
      "Componente IT que gestiona bases de datos empresariales distribuidas",
      "Tecnología OT dedicada al monitoreo y control de procesos industriales físicos",
      "Sistema de red corporativa para intercambio de información entre departamentos",
      "Plataforma SaaS en la nube para análisis de datos en tiempo real"
    ],
    correctAnswer: 1,
  },
  {
    question: "4. ¿Qué tecnología central permite a la planta de Siemens en Amberg mantener una tasa de calidad del 99,999 % sin defectos?",
    options: [
      "La automatización total con robótica colaborativa sin supervisión humana",
      "El uso integrado de un gemelo digital vinculado a más de 1.000 sensores distribuidos en la línea",
      "La fabricación aditiva de componentes con tolerancias ultraprecisas",
      "La migración de toda la producción a módulos SaaS en servidores cloud"
    ],
    correctAnswer: 1,
  },
  {
    question: "5. Un operario de logística visualiza mediante unas gafas las rutas de recogida, las ubicaciones de artículos e instrucciones interactivas superpuestas en su entorno de trabajo. ¿Qué tecnología implementa esta funcionalidad?",
    options: [
      "Realidad Virtual inmersiva que aísla al usuario del entorno real",
      "Realidad Aumentada que superpone información digital sobre el mundo físico",
      "Gemelo Digital que simula el almacén en un entorno 3D aislado",
      "Visión Artificial que reconoce automáticamente productos mediante cámaras"
    ],
    correctAnswer: 1,
  },
  {
    question: "6. ¿A qué tres atributos fundamentales se refiere la tríada CIA en el contexto de ciberseguridad?",
    options: [
      "Criptografía, Infraestructura e Interoperabilidad",
      "Confidencialidad, Integridad y Disponibilidad",
      "Control de acceso, Identidad digital y Autenticación multifactor",
      "Cloud, IoT y Automatización inteligente"
    ],
    correctAnswer: 1,
  },
  {
    question: "7. ¿Cuál de las siguientes proposiciones describe adecuadamente el potencial técnico de Blockchain en entornos empresariales?",
    options: [
      "Blockchain y Bitcoin son sinónimos y solo funcionan para transacciones monetarias entre particulares",
      "Requiere un nodo central validador que autorice cada operación antes de ser registrada",
      "Es una tecnología de registro distribuido e inmutable aplicable a trazabilidad, contratos inteligentes e identidad digital verificable",
      "Su utilidad queda restringida al sector financiero, sin aplicaciones viables en logística o gestión documental"
    ],
    correctAnswer: 2,
  },
  {
    question: "8. ¿Cómo se define técnicamente un Gemelo Digital en el contexto de manufactura inteligente?",
    options: [
      "Una copia de seguridad redundante en la nube de los archivos de configuración de máquinas",
      "Una réplica virtual dinámica de un activo físico que se sincroniza continuamente con datos de sensores en tiempo real",
      "Un modelo tridimensional estático de una instalación guardado en formatos CAD",
      "Un sistema de supervisión basado únicamente en videovigilancia e inteligencia artificial"
    ],
    correctAnswer: 1,
  },
  {
    question: "9. En la solución Vision Picking de DHL, ¿cuál es la función específica que desempeña la Realidad Aumentada en la operación de picking?",
    options: [
      "Monitorizar la temperatura y humedad relativa del almacén mediante sensores integrados",
      "Automatizar completamente el movimiento de mercancía pesada con brazos robóticos",
      "Guiar al operario hacia la ubicación precisa del artículo, indicar la ruta óptima y confirmar el pedido sin necesidad de dispositivos manuales",
      "Generar replicas virtuales de cada paquete para simular el transporte en la nube"
    ],
    correctAnswer: 2,
  },
  {
    question: "10. ¿Qué característica técnica del 5G lo posiciona como infraestructura crítica para desplegar aplicaciones de IoT industrial y Gemelos Digitales a escala masiva?",
    options: [
      "Su independencia absoluta de infraestructura de antenas y torres terrestres",
      "La combinación de ancho de banda extremadamente alto, latencia ultrabaja (< 10 ms) y capacidad de conectar millones de dispositivos simultáneamente",
      "Su exclusiva compatibilidad con fabricantes europeos de equipos IoT",
      "Su consumo energético ínfimo en comparación con tecnologías 3G y 4G"
    ],
    correctAnswer: 1,
  },
  {
    question: "11. Una empresa requiere plataforma virtualizada donde instalar su propio sistema operativo, aplicaciones custom y gestionar completamente el software de negocio. ¿Qué modelo de servicio cloud se ajusta a esta necesidad?",
    options: [
      "SaaS, que proporciona aplicaciones completas listas para usar",
      "PaaS, que incluye base de datos y frameworks de desarrollo preconfigurados",
      "IaaS, que ofrece infraestructura virtualizada donde alojar SO y aplicaciones propias",
      "FaaS, que ejecuta funciones aisladas bajo demanda sin gestionar servidores"
    ],
    correctAnswer: 2,
  },
  {
    question: "12. Una empresa almacena datos críticos financieros en servidores de propiedad propia dentro de su data center, y simultaneamente usa infraestructura de Amazon Web Services para gestionar picos de tráfico en su portal de e-commerce. ¿Cuál es el modelo de nube que implementa?",
    options: [
      "Nube pública con migración gradual de datos críticos",
      "Nube privada completamente aislada de proveedores externos",
      "Nube comunitaria compartida con competidores del sector",
      "Nube híbrida que integra infraestructura propia con servicios públicos"
    ],
    correctAnswer: 3,
  },
  {
    question: "13. ¿Cuál es el propósito funcional de plataformas internas como Gravity en grandes instituciones financieras?",
    options: [
      "Centralizar la detección de fraudes mediante algoritmos de IA predictiva",
      "Estandarizar la creación, integración y despliegue de aplicaciones en múltiples entornos cloud de forma segura y controlada",
      "Proporcionar servicios bancarios directos a clientes minoristas mediante interfaces SaaS",
      "Gestionar la identidad de clientes utilizando tecnología blockchain descentralizada"
    ],
    correctAnswer: 1,
  },
  {
    question: "14. ¿Cuál es la relación jerárquica entre Machine Learning, Deep Learning y redes neuronales?",
    options: [
      "Son tres tecnologías completamente independientes sin conexión conceptual",
      "El Machine Learning es un subcampo del Deep Learning que requiere supervisión humana constante",
      "El Deep Learning es un subcampo especializado del Machine Learning que utiliza redes neuronales profundas con múltiples capas de procesamiento",
      "Las redes neuronales son anteriores al Machine Learning y han sido reemplazadas por algoritmos más modernos"
    ],
    correctAnswer: 2,
  },
  {
    question: "15. ¿Qué capacidades técnicas de procesamiento de lenguaje permiten que sistemas de IA empresariales ejecuten análisis de sentimiento en medios sociales y mantengan diálogos contextualmente coherentes?",
    options: [
      "Algoritmos de clasificación supervisada con validación cruzada",
      "Procesamiento del Lenguaje Natural (NLP), que comprende semántica, sintaxis y contexto lingüístico",
      "Redes neuronales convolucionales especializadas en imágenes",
      "Modelos estadísticos de regresión lineal multivariable"
    ],
    correctAnswer: 1,
  },
  {
    question: "16. ¿Qué tipo de fallo en sistemas de IA ilustra el caso de Amazon en procesos de selección de personal?",
    options: [
      "Una implementación exitosa de IA que eliminó todos los sesgos históricos de RRHH",
      "Sesgo algorítmico: el modelo aprendió discriminaciones de género presentes en datos históricos y las perpetuó en nuevas predicciones",
      "Un cumplimiento completo de regulaciones XAI que garantizó transparencia total",
      "Una violación de RGPD por uso no autorizado de datos de candidatos protegidos"
    ],
    correctAnswer: 1,
  },
  {
    question: "17. ¿Qué marco regulatorio europeo establece requisitos de trazabilidad, supervisión humana y clasificación de riesgos para sistemas de IA?",
    options: [
      "Una directiva que prohíbe completamente el uso de algoritmos en decisiones automatizadas",
      "El RGPD, centrado exclusivamente en protección de datos personales",
      "El AI Act de la Unión Europea, que classifies sistemas de IA por nivel de riesgo e impone obligaciones de supervisión y documentación",
      "Una normativa que obliga a todas las empresas a contar con un comité ético sin funciones regulatorias"
    ],
    correctAnswer: 2,
  },
  {
    question: "18. ¿Qué combinación de técnicas utiliza Spotify en su función Discover Weekly para generar listas de reproducción personalizadas cada semana?",
    options: [
      "Curación manual por editores especializados que analizan el historial de cada usuario individualmente",
      "Filtrado colaborativo para identificar usuarios con gustos similares, combinado con análisis de contenido musical basado en audio, metadatos y comportamiento",
      "Selección aleatoria del catálogo filtrada por tendencias globales de popularidad semanal",
      "Preferencias declaradas por el usuario mediante cuestionarios periódicos de actualización"
    ],
    correctAnswer: 1,
  },
  {
    question: "19. ¿Cuál es la diferencia fundamental entre un dato bruto y la información derivada de él?",
    options: [
      "Los datos son digitales y la información siempre es analógica",
      "La información es siempre más voluminosa y requiere más almacenamiento que el dato",
      "El dato es un registro sin contexto ni estructura; la información surge al procesar, interpretar y contextualizar ese dato",
      "Los datos provienen exclusivamente de sensores IoT y la información de bases de datos"
    ],
    correctAnswer: 2,
  },
  {
    question: "20. ¿Por qué el ataque WannaCry de 2017 afectó masivamente a organizaciones globales en tan poco tiempo?",
    options: [
      "Explotaba vulnerabilidades exclusivas de sistemas Linux sin opciones de actualización",
      "Los proveedores cloud negaron acceso a parches de seguridad durante meses",
      "Aprovechaba la vulnerabilidad EternalBlue de Windows en sistemas que no habían instalado el parche publicado dos meses antes",
      "Se propagaba mediante correos electrónicos cifrados que los antivirus no podían detectar"
    ],
    correctAnswer: 2,
  },
  {
    question: "21. ¿Qué conjunto de derechos fundamentales reconoce el RGPD a los ciudadanos europeos sobre sus datos personales?",
    options: [
      "Solo el derecho a recibir compensación económica por cada tratamiento de datos",
      "La prohibición absoluta de que empresas almacenen datos sin un contrato específico previo",
      "Derechos de acceso, rectificación, supresión, portabilidad, y derecho a oposición al tratamiento",
      "El derecho exclusivo a acceder a sus datos, sin posibilidad de solicitar su eliminación"
    ],
    correctAnswer: 2,
  },
  {
    question: "22. ¿Qué revolución industrial se caracterizó por la introducción de la energía eléctrica y la mecanización de la producción en cadena?",
    options: [
      "Primera revolución industrial",
      "Segunda revolución industrial",
      "Tercera revolución industrial",
      "Cuarta revolución industrial"
    ],
    correctAnswer: 1,
  },
  {
    question: "23. ¿Cuál es el factor clave que permite a la planta Siemens Amberg mantener la misma área y plantilla mientras multiplica significativamente la producción a lo largo de tres décadas?",
    options: [
      "La reducción del precio de las materias primas en los mercados internacionales",
      "La automatización digital avanzada y la integración inteligente de procesos IT/OT",
      "El aumento del horario laboral sin incremento salarial",
      "La externalización de la mayoría de procesos a proveedores externos"
    ],
    correctAnswer: 1,
  },
  {
    question: "24. Un técnico de agricultura de precisión necesita obtener mapas de índice NDVI y estrés hídrico de 200 hectáreas de cereal en una sola jornada. ¿Qué tecnología es la más adecuada?",
    options: [
      "Satélites de observación terrestre con sensores ópticos multiespectrales",
      "Drones agrícolas equipados con cámaras multiespectrales",
      "Redes de sensores IoT enterrados para medir humedad radicular",
      "Imágenes RGB de cámaras convencionales tratadas con software SIG"
    ],
    correctAnswer: 1,
  },
  {
    question: "25. ¿Qué enfoque empresarial en moda permite diseñar y producir colecciones en ciclos muy cortos, respondiendo en tiempo real a la demanda mediante integración digital de toda la cadena de valor?",
    options: [
      "Producción artesanal local con márgenes muy altos",
      "Modelo de moda ágil basado en la convergencia IT/OT que reduce el tiempo entre diseño y venta a días",
      "Compra de excedentes de stock de temporadas anteriores a proveedores",
      "Venta exclusiva a través de plataformas de comercio electrónico sin tiendas físicas"
    ],
    correctAnswer: 1,
  },
  {
    question: "26. ¿Cuál es la característica fundamental que diferencia un dispositivo IoT de un electrodoméstico electrónico tradicional?",
    options: [
      "El tamaño compacto y el bajo consumo de batería",
      "La capacidad de capturar datos, conectarse a redes, procesarlos y comunicarlos de forma autónoma",
      "El uso exclusivo de materiales reciclados en su fabricación",
      "La imposibilidad de funcionar sin conexión a internet en ningún momento"
    ],
    correctAnswer: 1,
  },
  {
    question: "27. ¿Cuál es el impacto principal de los robots colaborativos en entornos logísticos como el de DHL?",
    options: [
      "Reemplazar completamente al personal humano en todas las operaciones del almacén",
      "Trabajar junto al operario para transportar cargas pesadas, reduciendo fatiga y optimizando tiempos",
      "Sustituir los sistemas de escaneado de códigos de barras por reconocimiento facial",
      "Automatizar únicamente la embalaje final sin intervenir en otras etapas"
    ],
    correctAnswer: 1,
  },
  {
    question: "28. ¿Qué clase de ciberataque se produce cuando un adversario inunda deliberadamente un servidor con tráfico masivo para impedir su funcionamiento y bloquear el acceso a usuarios legítimos?",
    options: [
      "Ataque de fuerza bruta para descifrar contraseñas",
      "Inyección de código malicioso en formularios web",
      "Denegación de servicio distribuido (DDoS) o denegación de servicio (DoS)",
      "Falsificación de certificados SSL para suplantar identidades"
    ],
    correctAnswer: 2,
  },
  {
    question: "29. ¿Qué ventaja ambiental fundamental proporciona la fabricación aditiva en comparación con los métodos sustractivos tradicionales?",
    options: [
      "Elimina la necesidad de mano de obra especializada en talleres",
      "Permite construir piezas tridimensionales agregando material capa por capa, minimizando residuos",
      "Reduce el coste de energía eléctrica de las máquinas herramienta",
      "Facilita el reciclaje automático de todos los materiales sin procesamiento previo"
    ],
    correctAnswer: 1,
  },
  {
    question: "30. ¿Para qué propósito específico implementa McLaren la tecnología Blockchain en sus operaciones de Fórmula 1?",
    options: [
      "Registrar los pagos a pilotos y personal de forma cifrada",
      "Garantizar que los datos de telemetría y resultados de carrera no puedan ser alterados ni manipulados",
      "Sustituir los sistemas de comunicación inalámbrica entre el piloto y el equipo",
      "Automatizar la gestión de repuestos y piezas del vehículo durante la carrera"
    ],
    correctAnswer: 1,
  },
  {
    question: "31. ¿Cuál de las siguientes analogías describe mejor el modelo IaaS en computación en nube?",
    options: [
      "Comprar tu propio edificio pagando todo el coste por adelantado",
      "Alquilar un piso completamente amueblado y listo para usar tal como está",
      "Alquilar el espacio bruto de un edificio vacío donde tú colocas los muebles, instalas los servicios y decides la distribución",
      "Alquilar una oficina con software preinstalado y herramientas listas para trabajar"
    ],
    correctAnswer: 2,
  },
  {
    question: "32. ¿Qué servicio de infraestructura en nube utiliza Netflix para acercar contenido audiovisual a usuarios finales en diferentes regiones geográficas, reduciendo latencia y mejorando la experiencia?",
    options: [
      "Amazon EC2 para ejecutar máquinas virtuales",
      "Amazon S3 para almacenamientos de objetos masivos",
      "Una red de distribución de contenidos (CDN) como CloudFront",
      "Amazon RDS para gestión de bases de datos relacionales"
    ],
    correctAnswer: 2,
  },
  {
    question: "33. ¿Cuál es el estándar internacional de ciberseguridad que especifica requisitos obligatorios para el procesamiento seguro de datos de tarjetas de crédito y débito?",
    options: [
      "ISO 27001 para sistemas de gestión de seguridad de información",
      "SOC 2 para controles de servicios en nube",
      "PCI DSS (Payment Card Industry Data Security Standard)",
      "RGPD para protección de datos personales en la Unión Europea"
    ],
    correctAnswer: 2,
  },
  {
    question: "34. ¿Qué componente esencial del aprendizaje automático permite que un modelo de IA mejore su precisión progresivamente?",
    options: [
      "Algoritmos complejos sin necesidad de información externa",
      "Volúmenes elevados de datos de entrenamiento de calidad que representan el problema",
      "Hardware de última generación con GPUs de alto rendimiento exclusivamente",
      "Conexión en tiempo real con servidores en la nube sin interrupciones"
    ],
    correctAnswer: 1,
  },
  {
    question: "35. ¿Qué plataforma de Google permite entrenar modelos de clasificación de objetos mediante interfaz visual sin código?",
    options: [
      "Google Analytics para análisis de comportamiento de usuarios",
      "Google Sheets con macros de Machine Learning integradas",
      "Teachable Machine para entrenar modelos sin escribir código",
      "Google Drive con sincronización de datos en tiempo real"
    ],
    correctAnswer: 2,
  },
  {
    question: "36. ¿Qué lección crítica demostró el caso del sistema de selección de personal desechado por Amazon?",
    options: [
      "Los algoritmos de IA no pueden reproducir sesgos porque son matemáticos y objetivos",
      "Los sesgos en IA provienen no solo del algoritmo sino de datos de entrenamiento e historiales discriminatorios",
      "La IA es incapaz de procesar información sobre género y debe evitarse en RRHH siempre",
      "Es imposible entrenar sistemas de IA con menos de 50 millones de datos históricos"
    ],
    correctAnswer: 1,
  },
  {
    question: "37. En el contexto del Big Data, ¿cuál de las tres V se refiere a la multiplicidad de formatos y procedencias de los datos?",
    options: [
      "Volumen: la escala masiva de registros capturados constantemente",
      "Velocidad: la cadencia de generación y procesamiento de información",
      "Variedad: datos heterogéneos provenientes de múltiples fuentes y en diferentes formatos",
      "Veracidad: el grado de precisión y confiabilidad de los datos recabados"
    ],
    correctAnswer: 2,
  },
  {
    question: "38. En un sistema de gestión de datos empresarial con procesamiento por lotes (batch), ¿cuál es la secuencia estándar del ciclo de vida del dato según las buenas prácticas de arquitectura de datos?",
    options: [
      "Captura → Almacenamiento → Procesamiento → Análisis → Archivo o destrucción",
      "Procesamiento → Validación → Captura → Almacenamiento → Destrucción",
      "Almacenamiento → Captura → Análisis → Procesamiento → Archivo",
      "Captura → Análisis → Procesamiento → Almacenamiento → Reutilización"
    ],
    correctAnswer: 0,
  },
  {
    question: "39. ¿Qué arquitectura de datos combina la estructura y gobernanza de un Data Warehouse con la escalabilidad y flexibilidad de un Data Lake?",
    options: [
      "Data Pipeline, que conecta múltiples fuentes en tiempo real",
      "Data Lakehouse, que integra almacenamiento masivo con metadatos y transacciones",
      "Data Fabric, que virtualiza todos los datos sin almacenarlos físicamente",
      "Data Mesh, que descentraliza la propiedad de datos por dominios de negocio"
    ],
    correctAnswer: 1,
  },
  {
    question: "40. En la infraestructura de datos de Airbnb, ¿qué rol cumple Amazon S3 diferenciado de Amazon Redshift?",
    options: [
      "S3 gestiona transacciones financieras mientras Redshift almacena datos estructurados",
      "S3 actúa como Data Lake para datos sin procesar y análisis exploratorio; Redshift es el almacén de datos optimizado para consultas BI",
      "S3 ejecuta modelos de Machine Learning en producción y Redshift genera reportes executivos",
      "S3 maneja el caché de datos y Redshift gestiona la autenticación de usuarios"
    ],
    correctAnswer: 1,
  },
  {
    question: "41. ¿Qué principio del RGPD establece que la seguridad de datos debe integrarse desde las fases iniciales del diseño de sistemas?",
    options: [
      "Responsabilidad demostrada: documentar todas las decisiones de tratamiento de datos",
      "Privacidad desde el diseño: incorporar protección de datos como requisito funcional desde el origen",
      "Minimización de datos: recopilar únicamente información estrictamente necesaria",
      "Transparencia absoluta: publicar el código fuente de todos los sistemas de procesamiento"
    ],
    correctAnswer: 1,
  },
  {
    question: "42. ¿Qué herramienta analítica permite clasificar proyectos de digitalización en dos dimensiones para identificar cuáles ofrecen mayor retorno relativo al coste de implementación?",
    options: [
      "Análisis DAFO para evaluación de fortalezas y amenazas internas",
      "Matriz impacto/esfuerzo para priorización según rentabilidad relativa",
      "Modelo de madurez digital para diagnóstico del estado actual de transformación",
      "Balanced Scorecard para alineación estratégica con indicadores financieros"
    ],
    correctAnswer: 1,
  },
  {
    question: "43. ¿Cuál fue el posicionamiento estratégico elegido por BBVA en su transformación digital empresarial?",
    options: [
      "Maximizar el número de oficinas con capacidad de consultoría digital en Europa",
      "Evolucionar de un banco tradicional a una empresa de tecnología que proporciona servicios financieros",
      "Eliminar completamente la banca física y operar únicamente a través de aplicación móvil",
      "Desarrollar su propia red blockchain privada para transferencias internacionales"
    ],
    correctAnswer: 1,
  },
  {
    question: "44. ¿Qué metodología ágil utiliza tableros visuales con columnas para monitorizar el flujo de trabajo y detectar puntos de congestión?",
    options: [
      "Scrum, basado en sprints de iteración fija y reuniones de ceremonia",
      "Kanban, que visualiza el trabajo en progreso y optimiza el flujo continuo",
      "Waterfall, donde cada fase se completa secuencialmente antes de pasar a la siguiente",
      "Lean Startup, enfocado en validación rápida de hipótesis con usuarios reales"
    ],
    correctAnswer: 1,
  },
  {
    question: "45. ¿Qué herramienta de análisis competitivo clasifica a proveedores de software en cuatro cuadrantes: líderes, visionarios, jugadores de nicho y retadores?",
    options: [
      "Matriz DAFO para evaluación comparativa de competidores",
      "Modelo SMART para definición de objetivos medibles en selección de proveedores",
      "Gartner Magic Quadrant para posicionamiento de soluciones según madurez y visión",
      "Capterra para recopilar valoraciones de usuarios finales exclusivamente"
    ],
    correctAnswer: 2,
  },
  {
    question: "46. ¿Qué diferencia esencial introduce Industria 5.0 en relación con Industria 4.0?",
    options: [
      "La eliminación completa de sistemas mecánicos en favor de solo software",
      "La incorporación del factor humano como eje central junto a la tecnología",
      "El aumento exclusivo de la velocidad de procesamiento de datos",
      "La sustitución total de sensores analógicos por digitales"
    ],
    correctAnswer: 1,
  },
  {
    question: "47. En el contexto de sistemas de control industrial, ¿cuál es la función principal de un SCADA?",
    options: [
      "Almacenar exclusivamente datos históricos en bases de datos relacionales",
      "Monitorizar y controlar procesos industriales mediante interfaz gráfica en tiempo real",
      "Generar reportes administrativos para departamentos de contabilidad",
      "Encriptar todas las comunicaciones de red de la planta"
    ],
    correctAnswer: 1,
  },
  {
    question: "48. ¿Qué componente tecnológico es esencial para que un Gemelo Digital funcione correctamente en una línea de producción?",
    options: [
      "Un servidor sin conexión de red que almacene datos del pasado",
      "Sensores que capturen datos en tiempo real del proceso físico",
      "Un sistema de energía renovable exclusivamente",
      "Una base de datos relacional sin capacidad de actualización dinámica"
    ],
    correctAnswer: 1,
  },
  {
    question: "49. ¿Cuál es la característica tecnológica del 5G que lo convierte en habilitador crítico para implementaciones de IoT industrial?",
    options: [
      "La velocidad de descarga máxima teórica de 10 Gbps",
      "La baja latencia (menor a 10 milisegundos) y alta capacidad de conexión simultánea",
      "El incremento en la duración de las baterías de los dispositivos",
      "La eliminación total de la necesidad de direcciones IP"
    ],
    correctAnswer: 1,
  },
  {
    question: "50. ¿Qué modelo de servicio cloud permite que una empresa mantenga control total sobre la infraestructura mientras externaliza la gestión de actualizaciones y parches?",
    options: [
      "SaaS (Software as a Service)",
      "PaaS (Platform as a Service)",
      "IaaS (Infrastructure as a Service)",
      "DaaS (Desktop as a Service)"
    ],
    correctAnswer: 2,
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
            <h2 className="text-xl text-muted-foreground">Test Extra I</h2>
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
