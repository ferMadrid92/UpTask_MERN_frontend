import { useEffect } from "react"
import useProyectos from "../hooks/useProyectos"
import PreviewProyecto from "../components/PreviewProyecto"
import Alerta from "../components/Alerta"

const Proyectos = () => {

  const { proyectos, alerta, cargando } = useProyectos()

  const { msg } = alerta

  if (cargando) {
    return (
      <div className="p-4 max-w-4xl w-full">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-300 rounded"></div>
            <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-300 rounded col-span-2"></div>
              <div className="h-2 bg-slate-300 rounded col-span-1"></div>
            </div>      
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-300 rounded col-span-2"></div>
              <div className="h-2 bg-slate-300 rounded col-span-1"></div>
            </div>       
          </div>
          </div>
        </div>
      </div>
    )
  }


  return (
    <>
      <h1 className="text-4xl font-black">Proyectos</h1>
      {msg && <Alerta alerta={alerta} />}
      <div className="bg-white mt-10 shadow rounded-lg">
          {proyectos.length ? 
            proyectos.map(proyecto => (
              <PreviewProyecto
                key={proyecto._id}
                proyecto={proyecto}
              />
            )) : <p className="text-center text-gray-600 uppercase p-5">No hay proyectos aún</p>}
      </div>
    </>
  )
}

export default Proyectos
