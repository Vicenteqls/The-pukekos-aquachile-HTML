import CandidatoCard from "../components/CandidatoCard";
import SolicitudesPanel from "../components/SolicitudesPanel";

function DashboardPage() {
  // Datos simulados (ficticios).
  const candidatos = [
    { id: 1, nombre: "Ana Torres", cargo: "Analista", estado: "Pendiente" },
    { id: 2, nombre: "Diego Soto", cargo: "Supervisor", estado: "En proceso" },
    { id: 3, nombre: "Camila Rojas", cargo: "Operador", estado: "Finalizada" }
  ];

  const solicitudes = [
    {
      id: 1,
      candidato: "Ana Torres",
      cargo: "Analista",
      estado: "Pendiente",
      responsable: "Laura Pérez"
    },
    {
      id: 2,
      candidato: "Diego Soto",
      cargo: "Supervisor",
      estado: "En proceso",
      responsable: "Carlos Díaz"
    },
    {
      id: 3,
      candidato: "Camila Rojas",
      cargo: "Operador",
      estado: "Finalizada",
      responsable: "Laura Pérez"
    }
  ];

  return (
    <main className="container py-4">

      {/* Encabezado principal del Dashboard. */}
      <section id="inicio" className="mb-4">
        <p className="text-secondary mb-1">
          Proyecto VcM · Full Stack II
        </p>

        <h1 className="h3">
          Gestión de Evaluaciones Psicolaborales
        </h1>

        <p className="text-secondary">
          Resumen general del proceso de evaluación.
        </p>
      </section>

      {/* Indicadores: 2 columnas en móvil, 4 en escritorio. */}
      <section className="row g-3 mb-5">

        <div className="col-6 col-lg-3">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="h3">12</h2>
              <p className="mb-0">Candidatos</p>
            </div>
          </div>
        </div>

        <div className="col-6 col-lg-3">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="h3">5</h2>
              <p className="mb-0">Pendientes</p>
            </div>
          </div>
        </div>

        <div className="col-6 col-lg-3">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="h3">4</h2>
              <p className="mb-0">En proceso</p>
            </div>
          </div>
        </div>

        <div className="col-6 col-lg-3">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="h3">3</h2>
              <p className="mb-0">Finalizadas</p>
            </div>
          </div>
        </div>

      </section>

      {/* Candidatos: cada CandidatoCard aporta su propia columna del Grid. */}
      <section id="candidatos">
        <h2 className="h4 mb-3">Candidatos</h2>

        <div className="row g-3">
          {candidatos.map((candidato) => (
            <CandidatoCard
              key={candidato.id}
              nombre={candidato.nombre}
              cargo={candidato.cargo}
              estado={candidato.estado}
            />
          ))}
        </div>
      </section>

      {/* Solicitudes: búsqueda, filtro y tabla responsive. */}
      <SolicitudesPanel solicitudes={solicitudes} />

    </main>
  );
}

export default DashboardPage;
