import { useState } from "react"
import Form from "./Form"
import DataTable from "./Table"

type Car = {
  id: number
  brand: string
  branch: string
  applicant_name: string
}

const CarsManager = () => {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null)
  const [refresh, setRefresh] = useState(false)

  // Para refrescar la tabla después de crear/editar/eliminar
  const handleRefresh = () => setRefresh(!refresh)

  return (
    <div className="flex gap-8">
      <Form
        selectedCar={selectedCar}
        clearSelection={() => setSelectedCar(null)}
        onSaved={handleRefresh}
      />
      <DataTable onEdit={(car) => setSelectedCar(car)} refresh={refresh} />
    </div>
  )
}

export default CarsManager
