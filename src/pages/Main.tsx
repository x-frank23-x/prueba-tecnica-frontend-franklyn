import { useState } from "react"
import Form from "../componets/Form"
import DataTable from "../componets/Table"
import Logo from "../assets/icons/Logo"

type Car = {
  id: number
  brand: string
  branch: string
  applicant_name: string
}

const Main = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null)
  const [refresh, setRefresh] = useState(false)

  // Para refrescar la tabla después de crear/editar/eliminar
  const handleRefresh = () => setRefresh(!refresh)

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Contenedor padre relativo para posicionar hijos absolute */}
      <div className="relative w-full h-[600px]"> {/* Ajusta altura según contenido */}
        {/* Formulario con posición absoluta */}
        <div className="absolute top-[82px] left-[130px]">
          <Form
            selectedCar={selectedCar}
            clearSelection={() => setSelectedCar(null)}
            onSaved={handleRefresh}
          />
        </div>

        {/* Tabla con posición absoluta */}
        <div className="absolute top-[82px] left-[745px]">
          <DataTable onEdit={(car) => setSelectedCar(car)} refresh={refresh} />
        </div>
      </div>

      {/* Logo pegado abajo */}
      <div className="flex justify-center py-6 mt-auto">
        <Logo className="w-[290px] h-[64px]" />
      </div>
    </div>
  )
}

export default Main
