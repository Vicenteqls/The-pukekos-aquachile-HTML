# 🐟 MVP Web para la Gestión de Evaluaciones Psicolaborales — AquaChile

![Full Stack II](https://img.shields.io/badge/Asignatura-DSY1104%20Full%20Stack%20II-blue)
![Duoc UC](https://img.shields.io/badge/Instituci%C3%B3n-Duoc%20UC%20Puerto%20Montt-navy)
![Estado](https://img.shields.io/badge/Estado-En%20Desarrollo%20%28MVP%29-orange)

## 📌 Contexto del Proyecto
**AquaChile** es una empresa del rubro acuícola que realiza procesos continuos de reclutamiento y selección para diversos cargos. El objetivo de este proyecto es desarrollar un **MVP (Producto Mínimo Viable) web Full Stack** que centralice, ordene y digitalice la gestión de evaluaciones psicolaborales.

Esta solución académica busca reemplazar registros dispersos y planillas manuales mediante una plataforma moderna, clara y responsive[cite: 1, 2].

> **Nota de Privacidad y Ética:** Este proyecto es de carácter estrictamente académico[cite: 1, 2]. Se utilizan únicamente **datos ficticios, simulados o anonimizados**[cite: 1]. No contiene ni almacena antecedentes personales ni corporativos reales de AquaChile[cite: 1].

---

## 🚀 Funcionalidades Principales

- **🔐 Autenticación y Roles Simulados:** Acceso diferenciado por perfiles (Analista de Reclutamiento, Profesional Evaluador, Jefatura y Administrador)[cite: 1].
- **👤 Gestión de Candidatos:** Registro, consulta y edición de antecedentes básicos ficticios de postulantes[cite: 1].
- **📋 Solicitudes de Evaluación:** Creación de solicitudes asociadas a candidatos con control de estado (*Pendiente*, *En proceso*, *Finalizada*)[cite: 1].
- **✏️ Registro de Evaluaciones:** Carga de fechas de atención, observaciones generales y resultado global de la evaluación psicolaboral[cite: 1].
- **📊 Dashboard de Indicadores:** Visualización rápida de métricas del proceso (total de candidatos, solicitudes pendientes, en proceso y finalizadas)[cite: 1].
- **🔍 Búsqueda y Filtros:** Filtrado de solicitudes por cargo, estado, candidato o fecha[cite: 1].

---

## 👥 Roles del Sistema

| Rol | Descripción | Permisos Principales |
| :--- | :--- | :--- |
| **Analista de Reclutamiento** | Encargado de coordinar el proceso inicial[cite: 1]. | Registrar candidatos, crear solicitudes de evaluación y filtrar registros[cite: 1]. |
| **Profesional Evaluador** | Responsable de ejecutar las evaluaciones[cite: 1]. | Consultar solicitudes asignadas, registrar fechas, ingresar observaciones y actualizar estado[cite: 1]. |
| **Jefatura / Contraparte** | Supervisa el avance global[cite: 1]. | Consultar el dashboard de indicadores y reportes en modo lectura[cite: 1]. |
| **Administrador Académico** | Administra el entorno de pruebas[cite: 1]. | Configurar catálogos (cargos/familias) y usuarios de prueba[cite: 1]. |

---

## 🛠️ Arquitectura y Tecnologías

El proyecto se estructura bajo una arquitectura Full Stack monolítica[cite: 1]:

- **Frontend:** React + CSS Framework (Bootstrap 5 / Tailwind CSS)[cite: 1].
- **Backend:** Node.js / Express (o Spring Boot / PHP según corresponda)[cite: 1].
- **Base de Datos:** Relacional / NoRelacional para persistencia de candidatos, solicitudes y evaluaciones[cite: 1].
- **Comunicación:** API RESTful mediante endpoints HTTP/JSON[cite: 1].

---

## 👥 Equipo de Desarrollo

**Sección:** 002D — Duoc UC Sede Puerto Montt[cite: 1, 2]

- **Kevin Vargas**[cite: 2]
- **Vicente Paredes**[cite: 2]
- **Joaquin Alvarado**[cite: 2]
- **Zongjie Wu**[cite: 2]

**Coordinador CITT / Docente:** Marcelo Eduardo Crisóstomo Carrasco[cite: 1]

---

## 📁 Estructura del Repositorio

```text
├── docs/                      # Documentación del proyecto y pautas
│   └── Actividad_Bases_MVP.docx
├── src/                       # Código fuente de la aplicación (Frontend / Backend)
├── public/                    # Archivos estáticos y mockups de diseño
└── README.md                  # Descripción general del repositorio
