// Panel de solicitudes: encabezado, búsqueda/filtro (solo visuales) y tabla responsive.
function SolicitudesPanel({ solicitudes }) {
  return (
    <section id="solicitudes" className="mt-5">

      {/* Apila en móvil y ordena en fila desde tablet. */}
      <div className="d-flex flex-column flex-md-row
                      justify-content-between gap-2 mb-3">

        <h2 className="h4 mb-0">
          Solicitudes recientes
        </h2>

        <button className="btn btn-primary">
          Nueva solicitud
        </button>
      </div>

      {/* Búsqueda y filtro: todavía no funcionan. */}
      <div className="row g-2 mb-3">

        <div className="col-12 col-md-8">
          <input
            className="form-control"
            placeholder="Buscar candidato..."
          />
        </div>

        <div className="col-12 col-md-4">
          <select className="form-select">
            <option>Todos los estados</option>
            <option>Pendiente</option>
            <option>En proceso</option>
            <option>Finalizada</option>
          </select>
        </div>

      </div>

      {/* table-responsive evita que la tabla rompa la pantalla. */}
      <div className="table-responsive">

        <table className="table table-hover align-middle">
          <thead>
            <tr>
              <th>Candidato</th>
              <th>Cargo</th>
              <th>Estado</th>

              {/* Columna secundaria: solo visible desde escritorio. */}
              <th className="d-none d-lg-table-cell">
                Responsable
              </th>
            </tr>
          </thead>

          <tbody>
            {solicitudes.map((solicitud) => (
              <tr key={solicitud.id}>

                <td>{solicitud.candidato}</td>
                <td>{solicitud.cargo}</td>

                <td>
                  <span className="badge text-bg-secondary">
                    {solicitud.estado}
                  </span>
                </td>

                <td className="d-none d-lg-table-cell">
                  {solicitud.responsable}
                </td>

              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </section>
  );
}

export default SolicitudesPanel;
