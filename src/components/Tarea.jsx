import { formatearFecha } from "../helpers/formatearFecha"
import useAdmin from "../hooks/useAdmin"
import useProyectos from "../hooks/useProyectos"

const Tarea = ({tarea}) => {

    const { handleModalEditarTarea, handleModalEliminarTarea, completarTarea } = useProyectos()
    const { nombre, descripcion, fechaEntrega, prioridad, estado, _id } = tarea

    const admin = useAdmin()

  return (
    <div className="border-b p-5 flex justify-between items-center">
      <div className="flex flex-col items-start">
        <p className="mb-1 text-xl font-bold">{nombre}</p>
        <p className="mb-1 text-sm text-gray-500 uppercase">{descripcion}</p>
        <p className="mb-1 text-sm">{formatearFecha(fechaEntrega)}</p>
        <p className="mb-1 text-gray-600">Prioridad: {prioridad}</p>
        { estado && <p className="text-xs bg-green-600 uppercase p-1 rounded-lg text-white">Completada por: {tarea.completado.nombre}</p>}
      </div>

      <div className="flex flex-col gap-2 lg:flex-row">
        {admin && (
          <button
              className="bg-indigo-600 px-4 py-3 text-white uppercase font-bold text-sm md:mb-0 mb-1 rounded-lg"
              onClick={() => handleModalEditarTarea(tarea)}
          >Editar</button>
        )}

        <button
          className={`${estado ? 'bg-sky-600' : 'bg-gray-600'} px-4 py-3 text-white uppercase font-bold text-sm rounded-lg md:mb-0 mb-2`}
          onClick={() => completarTarea(_id)}
        >{estado ? 'Completa' : 'Incompleta'}</button>

        {admin && (
          <button
              className="bg-red-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg md:mb-0 mb-2 "
              onClick={() => handleModalEliminarTarea(tarea)}
          >Eliminar</button>
        )}
      </div>
    </div>
  )
}

export default Tarea
