import Link from "next/link"
import { Card } from "@/components/ui/card"
import { BookOpen, Code, Database, Hammer, Server, Terminal, Briefcase, MonitorSmartphone, Layout, Cpu, Smartphone, Building2, Leaf, Globe, GraduationCap } from "lucide-react"

// Segundo Curso
const secondYearSubjects = [
  {
    id: "acceso-datos",
    title: "Acceso a Datos",
    description: "Persistencia, JDBC, Hibernate y ficheros",
    icon: Database,
    color: "bg-cyan-500",
    hoverBorder: "hover:border-cyan-500/50",
    simulacros: {
      simulacroI: "/quiz/acceso-datos/simulacro-1",
      simulacroII: "/quiz/acceso-datos/simulacro-2",
    },
    tests: {
      testI: "/quiz/acceso-datos/test-1",
      testII: "/quiz/acceso-datos/test-2",
    },
    extraSimulacros: [
    { label: "Test Extra 1", link: "/quiz/acceso-datos/test-extra-1" },
    { label: "Test Extra 2", link: "/quiz/acceso-datos/test-extra-2" },
  ],
  },
  {
    id: "desarrollo-interfaces",
    title: "Desarrollo de Interfaces",
    description: "Interfaces de usuario y usabilidad",
    icon: Layout,
    color: "bg-pink-500",
    hoverBorder: "hover:border-pink-500/50",
    simulacros: {
      //simulacroI: "/quiz/desarrollo-interfaces/simulacro-1",
      //simulacroII: "/quiz/desarrollo-interfaces/simulacro-2",
    },
    tests: {
      testI: "/quiz/desarrollo-interfaces/test-1",
      testII: "/quiz/desarrollo-interfaces/test-2",
    },
    extraSimulacros: [
    { label: "Test Extra 1", link: "/quiz/desarrollo-interfaces/test-extra-1" },
    { label: "Test Extra 2", link: "/quiz/desarrollo-interfaces/test-extra-2" },
  ],
  },
  {
    id: "psp",
    title: "PSP",
    description: "Programacion de Servicios y Procesos",
    icon: Cpu,
    color: "bg-indigo-500",
    hoverBorder: "hover:border-indigo-500/50",
    simulacros: {
      //simulacroI: "/quiz/psp/simulacro-1",
      //simulacroII: "/quiz/psp/simulacro-2",
    },
    tests: {
      testI: "/quiz/psp/test-1",
      //testII: "/quiz/psp/test-2",
    },
  },
  {
    id: "pmdm",
    title: "PMDM",
    description: "Programacion Multimedia y Dispositivos Moviles",
    icon: Smartphone,
    color: "bg-emerald-500",
    hoverBorder: "hover:border-emerald-500/50",
    simulacros: {
      //simulacroI: "/quiz/pmdm/simulacro-1",
      //simulacroII: "/quiz/pmdm/simulacro-2",
    },
    tests: {
      testI: "/quiz/pmdm/test-1",
      testII: "/quiz/pmdm/test-2",
    },
  },
  {
    id: "sistemas-gestion-empresarial",
    title: "Sistemas de Gestion Empresarial",
    description: "ERP, CRM y sistemas empresariales",
    icon: Building2,
    color: "bg-amber-500",
    hoverBorder: "hover:border-amber-500/50",
    simulacros: {
      //simulacroI: "/quiz/sistemas-gestion-empresarial/simulacro-1",
      //simulacroII: "/quiz/sistemas-gestion-empresarial/simulacro-2",
    },
    tests: {
      testI: "/quiz/sistemas-gestion-empresarial/test-1",
      testII: "/quiz/sistemas-gestion-empresarial/test-2",
    },
  },
  {
    id: "digitalizacion",
    title: "Digitalizacion",
    description: "Transformacion digital y tecnologias",
    icon: MonitorSmartphone,
    color: "bg-violet-500",
    hoverBorder: "hover:border-violet-500/50",
    simulacros: {
      //simulacroI: "/quiz/digitalizacion/simulacro-1",
      //simulacroII: "/quiz/digitalizacion/simulacro-2",
    },
    tests: {
      testI: "/quiz/digitalizacion/test-1",
      testII: "/quiz/digitalizacion/test-2",
    },
      extraSimulacros: [                                          
    { label: "Test Extra 1", link: "/quiz/digitalizacion/test-extra-1" },
    { label: "Test Extra 2", link: "/quiz/digitalizacion/test-extra-2" },
  ],
  },
  {
    id: "sostenibilidad",
    title: "Sostenibilidad",
    description: "Desarrollo sostenible y medioambiente",
    icon: Leaf,
    color: "bg-lime-500",
    hoverBorder: "hover:border-lime-500/50",
    simulacros: {
      //simulacroI: "/quiz/sostenibilidad/simulacro-1",
      //simulacroII: "/quiz/sostenibilidad/simulacro-2",
    },
    tests: {
      testI: "/quiz/sostenibilidad/test-1",
      testII: "/quiz/sostenibilidad/test-2",
    },
    extraSimulacros: [ 
    { label: "Test Extra 1", link: "/quiz/sostenibilidad/test-extra-1" },
    { label: "Test Extra 2", link: "/quiz/sostenibilidad/test-extra-2" },
  ],
  },
  {
    id: "ingles",
    title: "Ingles",
    description: "Ingles tecnico profesional",
    icon: Globe,
    color: "bg-rose-500",
    hoverBorder: "hover:border-rose-500/50",
    simulacros: {
      //simulacroI: "/quiz/ingles/simulacro-1",
      //simulacroII: "/quiz/ingles/simulacro-2",
    },
    tests: {
      testI: "/quiz/ingles/test-1",
      testII: "/quiz/ingles/test-2",
    },
     extraSimulacros: [
    { label: "Test Extra 1", link: "/quiz/ingles/test-extra-1" },
    { label: "Test Extra 2", link: "/quiz/ingles/test-extra-2" },
  ],
  },
  {
    id: "ipe-2",
    title: "IPE II",
    description: "Itinerario para la empleabilidad II",
    icon: GraduationCap,
    color: "bg-teal-500",
    hoverBorder: "hover:border-teal-500/50",
    simulacros: {
      simulacroI: "/quiz/ipe-2/simulacro-1",
      simulacroII: "/quiz/ipe-2/simulacro-2",
    },
    customLabels: {          
    simulacroI: "Kahoot 1",
    simulacroII: "Kahoot 2",
  },
    tests: {
      testI: "/quiz/ipe-2/test-1",
      testII: "/quiz/ipe-2/test-2",
    },
  },
]

// Primer Curso
const subjects = [
  {
    id: "lenguaje-marcas",
    title: "Lenguaje de Marcas",
    description: "HTML, CSS y fundamentos del desarrollo web",
    icon: Code,
    color: "bg-orange-500",
    hoverBorder: "hover:border-orange-500/50",
    simulacros: {
      junio: "/quiz/lenguaje-marcas",
      diciembreI: "/quiz/lenguaje-marcas/diciembre-1",
      diciembreII: "/quiz/lenguaje-marcas/diciembre-2",
    },
    extraSimulacros: [
      { label: "Kahoot XPATH", link: "/quiz/lenguaje-marcas/kahoot-xpath" },
      { label: "simulacro HTML", link: "/quiz/lenguaje-marcas/simulacro_HTML" },
      { label: "simulacro CSS", link: "/quiz/lenguaje-marcas/simulacro_CSS" },
      { label: "simulacro XPATH", link: "/quiz/lenguaje-marcas/simulacro_XPATH" },
    ],
  },
  {
    id: "programacion",
    title: "Programación",
    description: "Conceptos de programación y algoritmos",
    icon: Terminal,
    color: "bg-purple-500",
    hoverBorder: "hover:border-purple-500/50",
    simulacros: {
      junio: "/quiz/programacion/junio",
      diciembreI: "/quiz/programacion/diciembre-1",
      diciembreII: "/quiz/programacion/diciembre-2",
    },
    extraSimulacros: [
      { label: "Kahoot 2/12", link: "/quiz/programacion/kahoot-0212" },
      { label: "Kahoot 9/12", link: "/quiz/programacion/kahoot-0912" },
    ],
  },
  {
    id: "entornos-desarrollo",
    title: "Entornos de Desarrollo",
    description: "IDEs, control de versiones y herramientas",
    icon: Hammer,
    color: "bg-red-500",
    hoverBorder: "hover:border-red-500/50",
    simulacros: {
      junio: "/quiz/entornos-desarrollo/junio",
      diciembreI: "/quiz/entornos-desarrollo/diciembre-1",
      diciembreII: "/quiz/entornos-desarrollo/diciembre-2",
    },
    extraSimulacros: [
      { label: "Kahoot UML", link: "/quiz/entornos-desarrollo/kahoot-uml" },
      { label: "Kahoot IDE y Lenguajes", link: "/quiz/entornos-desarrollo/kahoot-ide" },
      { label: "Kahoot GIT", link: "/quiz/entornos-desarrollo/kahoot-git" },
    ],
  },
  {
    id: "bases-datos",
    title: "Bases de Datos",
    description: "SQL, diseño y gestión de bases de datos",
    icon: Database,
    color: "bg-blue-600",
    hoverBorder: "hover:border-blue-600/50",
    simulacros: {
      junio: "/quiz/bases-datos/unidad-1",
      diciembreI: "/quiz/bases-datos/unidad-2", // Enabled U2: Modelo E/R link
      diciembreII: "/quiz/bases-datos/unidad-3",
    },
    customLabels: {
      junio: "U1: Sistemas de almacenamiento",
      diciembreI: "U2: Modelo E/R",
      diciembreII: "U3: Modelo Relacional y Normalización",
    },
    extraSimulacros: [
      { label: "U4: Introducción a SQL: DDL", link: "/quiz/bases-datos/unidad-4" },
      { label: "U5: Lenguaje SQL: DML", link: "/quiz/bases-datos/unidad-5" },
      { label: "Kahoot 2/12 parte 1", link: "/quiz/bases-datos/kahoot-0212-1" },
      { label: "Kahoot 2/12 parte 2", link: "/quiz/bases-datos/kahoot-0212-2" },
      { label: "Simulacro Diciembre I", link: "/quiz/bases-datos/simulacro-diciembre-1" },
      { label: "REPASO Test 2", link: "/quiz/bases-datos/REPASO_Test2" },
      { label: "REPASO Test 3", link: "/quiz/bases-datos/REPASO_Test3" },
      { label: "REPASO Test 4", link: "/quiz/bases-datos/REPASO_Test4" },
      { label: "REPASO Test 5", link: "/quiz/bases-datos/REPASO_Test5" },
      { label: "REPASO Test 6", link: "/quiz/bases-datos/REPASO_Test6" },      
      { label: "Simulacro Diciembre II", link: "/quiz/bases-datos/simulacro-diciembre-2" },
      { label: "TEST EXTRA", link: "/quiz/bases-datos/test-extra", color: "text-green-500 hover:text-green-400" },
    ],
  },
  {
    id: "python",
    title: "Python",
    description: "Programación en Python y sus librerías",
    icon: BookOpen,
    color: "bg-green-500",
    hoverBorder: "hover:border-green-500/50",
    simulacros: {
      junio: "/quiz/python/junio-1",
      diciembreI: "/quiz/python/diciembre-1",
      diciembreII: "/quiz/python/diciembre-2",
    },
  },
  {
    id: "sistemas-informaticos",
    title: "Sistemas Informáticos",
    description: "Sistemas operativos y arquitectura",
    icon: Server,
    color: "bg-blue-500",
    hoverBorder: "hover:border-blue-500/50",
    simulacros: {
      junio: "/quiz/sistemas-informaticos",
      diciembreI: "/quiz/sistemas-informaticos/diciembre-1", // Enabled link to Simulacro Diciembre I
      diciembreII: "/quiz/sistemas-informaticos/diciembre-2",
    },
    // specialLabel: "Proyecto II",
    extraSimulacros: [{ label: "Kahoot Linux", link: "/quiz/sistemas-informaticos/kahoot-linux" }],
  },
  {
    id: "ipe-1",
    title: "IPE I: Itinerario para la empleabilidad",
    description: "Desarrollo profesional y competencias laborales",
    icon: Briefcase,
    color: "bg-yellow-500",
    hoverBorder: "hover:border-yellow-500/50",
    simulacros: {
      junio: "/quiz/ipe-1/junio",
      diciembreI: "/quiz/ipe-1/diciembre-1",
      diciembreII: null,
    },
    customLabels: {
      diciembreI: "Simulacro Diciembre I",
    },
    extraSimulacros: [
      { label: "Test Unidades 1-5", link: "/quiz/ipe-1/unidades-1-5" },
      { label: "Test Unidades 6-10", link: "/quiz/ipe-1/unidades-6-10" },
    ],
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl font-bold text-foreground">
            DAM/DAW <span className="text-blue-500">SIMULACROS</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Examenes interactivos de todas las asignaturas
          </p>
        </div>

        {/* SEGUNDO CURSO */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 border-b border-border pb-2">
            Segundo Curso DAM
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondYearSubjects.map((subject) => {
              const Icon = subject.icon
              const hasAnySimulacro = Object.values(subject.simulacros).some((link) => link !== null)

              return (
                <Card
                  key={subject.id}
                  className={`h-full p-6 bg-card border-border ${subject.hoverBorder} transition-all`}
                >
                  <div className="flex flex-col h-full space-y-4">
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-lg ${subject.color} text-white`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      {!hasAnySimulacro && (
                        <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                          Proximamente
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{subject.title}</h3>
                      <p className="text-sm text-muted-foreground">{subject.description}</p>
                    </div>

                    <div className="pt-2 space-y-2 border-t border-border">
                      {/* Simulacro I */}
                      {subject.simulacros.simulacroI ? (
                        <Link
                          href={subject.simulacros.simulacroI}
                          className="block text-sm text-blue-500 hover:text-blue-400 hover:underline transition-colors"
                        >
                          → {subject.customLabels?.simulacroI || "Simulacro I"}
                        </Link>
                      ) : (
                        <div className="text-sm text-muted-foreground/50">
                          → {subject.customLabels?.simulacroI || "Simulacro I"}: Proximamente
                        </div>
                      )}
                      
                      {/* Simulacro II */}
                      {subject.simulacros.simulacroII ? (
                        <Link
                          href={subject.simulacros.simulacroII}
                          className="block text-sm text-blue-500 hover:text-blue-400 hover:underline transition-colors"
                        >
                          → {subject.customLabels?.simulacroII || "Simulacro II"}
                        </Link>
                      ) : (
                        <div className="text-sm text-muted-foreground/50">
                          → {subject.customLabels?.simulacroII || "Simulacro II"}: Proximamente
                        </div>
                      )}

                      {/* Test I */}
                      {subject.tests.testI ? (
                        <Link
                          href={subject.tests.testI}
                          className="block text-sm text-blue-500 hover:text-blue-400 hover:underline transition-colors"
                        >
                          → Test I
                        </Link>
                      ) : (
                        <div className="text-sm text-muted-foreground/50">
                          → Test I: Proximamente
                        </div>
                      )}

                      {/* Test II */}
                      {subject.tests.testII ? (
                        <Link
                          href={subject.tests.testII}
                          className="block text-sm text-blue-500 hover:text-blue-400 hover:underline transition-colors"
                        >
                          → Test II
                        </Link>
                      ) : (
                        <div className="text-sm text-muted-foreground/50">
                          → Test II: Proximamente
                        </div>
                      )}
                      
                      {/* ExtraSimulacros*/}
                        {subject.extraSimulacros &&
                          subject.extraSimulacros.map((extra, index) =>
                            extra.link ? (
                              <Link
                                key={index}
                                href={extra.link}
                                className={`block text-sm ${extra.color || "text-blue-500 hover:text-blue-400"} hover:underline transition-colors`}
                              >
                                → {extra.label}
                              </Link>
                            ) : (
                              <div key={index} className="text-sm text-muted-foreground/50">
                                → {extra.label}: Proximamente
                              </div>
                            )
                          )}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* PRIMER CURSO */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 border-b border-border pb-2">
            Primer Curso DAM/DAW
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject) => {
              const Icon = subject.icon
              const hasAnySimulacro = Object.values(subject.simulacros).some((link) => link !== null)

              return (
                <Card
                  key={subject.id}
                  className={`h-full p-6 bg-card border-border ${subject.hoverBorder} transition-all`}
                >
                  <div className="flex flex-col h-full space-y-4">
                    <div className="flex items-start justify-between">
                      <div className={`p-3 rounded-lg ${subject.color} text-white`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      {!hasAnySimulacro && (
                        <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                          Proximamente
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{subject.title}</h3>
                      <p className="text-sm text-muted-foreground">{subject.description}</p>
                    </div>

                    <div className="pt-2 space-y-2 border-t border-border">
                      {/* Simulacro Junio */}
                      {subject.simulacros.junio ? (
                        <Link
                          href={subject.simulacros.junio}
                          className="block text-sm text-blue-500 hover:text-blue-400 hover:underline transition-colors"
                        >
                          →{" "}
                          {subject.customLabels?.junio ||
                            `Simulacro Junio${subject.specialLabel ? ` (${subject.specialLabel})` : ""}`}
                        </Link>
                      ) : (
                        <div className="text-sm text-muted-foreground/50">
                          → {subject.customLabels?.junio || "Simulacro Junio"}: Proximamente
                        </div>
                      )}

                      {/* Simulacro Diciembre I */}
                      {subject.simulacros.diciembreI ? (
                        <Link
                          href={subject.simulacros.diciembreI}
                          className="block text-sm text-blue-500 hover:text-blue-400 hover:underline transition-colors"
                        >
                          →{" "}
                          {subject.customLabels?.diciembreI ||
                            `Simulacro Diciembre I${subject.specialLabel ? ` (${subject.specialLabel})` : ""}`}
                        </Link>
                      ) : (
                        <div className="text-sm text-muted-foreground/50">
                          → {subject.customLabels?.diciembreI || "Simulacro Diciembre I"}: Proximamente
                        </div>
                      )}

                      {/* Simulacro Diciembre II */}
                      {subject.simulacros.diciembreII ? (
                        <Link
                          href={subject.simulacros.diciembreII}
                          className="block text-sm text-blue-500 hover:text-blue-400 hover:underline transition-colors"
                        >
                          → {subject.customLabels?.diciembreII || "Simulacro Diciembre II"}
                        </Link>
                      ) : (
                        <div className="text-sm text-muted-foreground/50">
                          → {subject.customLabels?.diciembreII || "Simulacro Diciembre II"}: Proximamente
                        </div>
                      )}

                      {/* Extra Simulacros */}
                      {subject.extraSimulacros &&
                        subject.extraSimulacros.map((extraSimulacro, index) =>
                          extraSimulacro.link ? (
                            <Link
                              key={index}
                              href={extraSimulacro.link}
                              className={`block text-sm ${extraSimulacro.color || "text-blue-500 hover:text-blue-400"} hover:underline transition-colors`}
                            >
                              → {extraSimulacro.label}
                            </Link>
                          ) : (
                            <div key={index} className="text-sm text-muted-foreground/50">
                              → {extraSimulacro.label}: Proximamente
                            </div>
                          ),
                        )}
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-block p-6 bg-card border-border">
            <p className="text-sm text-muted-foreground">Mas simulacros se anadiran proximamente</p>
          </Card>
        </div>
      </div>
    </div>
  )
}
