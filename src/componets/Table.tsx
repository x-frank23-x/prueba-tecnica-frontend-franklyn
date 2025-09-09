import { useEffect, useState } from "react"
import { AnimatePresence, motion, Reorder } from "framer-motion"
import EditIcon2 from "../assets/icons/Edit2"
import EditIcon from "../assets/icons/Edit"
import DeleteIcon2 from "../assets/icons/Delete2"
import Notification from "./Notification"

type TableData = {
  id: number
  brand: string
  branch: string
  applicant_name: string
}

type Props = {
  onEdit: (car: TableData) => void
  refresh: boolean
}
const API_URL = import.meta.env.DEV;

const DataTable = ({ onEdit, refresh }: Props) => {
  const [cars, setCars] = useState<TableData[]>([])
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [removingIds, setRemovingIds] = useState<Set<number>>(new Set())

  // Estado para notificación
  const [notification, setNotification] = useState<{
    message: string
    type: "success" | "error" | "info"
    isVisible: boolean
  }>({ message: "", type: "info", isVisible: false })

  const showNotification = (message: string, type: "success" | "error" | "info") => {
    setNotification({ message, type, isVisible: true })
  }

  const hideNotification = () => {
    setNotification((prev) => ({ ...prev, isVisible: false }))
  }

  useEffect(() => {
    fetch(`${API_URL}/cars`)
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => {
        console.error("Error cargando autos:", err)
        showNotification("Error cargando autos", "error")
      })
  }, [refresh])

  const handleDelete = async (id: number) => {
    setRemovingIds((prev) => new Set(prev).add(id))

    setTimeout(async () => {
      try {
        const res = await fetch(`${API_URL}/cars/${id}`, {
          method: "DELETE",
        })
        if (!res.ok) throw new Error("Error al eliminar")

        setCars((prev) => prev.filter((car) => car.id !== id))
        setRemovingIds((prev) => {
          const newSet = new Set(prev)
          newSet.delete(id)
          return newSet
        })
        if (selectedId === id) setSelectedId(null)
        showNotification("Auto eliminado con éxito", "success")
      } catch (error) {
        console.error("Error eliminando auto:", error)
        showNotification("Error al eliminar el auto", "error")
        setRemovingIds((prev) => {
          const newSet = new Set(prev)
          newSet.delete(id)
          return newSet
        })
      }
    }, 600)
  }

  const handleEditClick = (car: TableData) => {
    setSelectedId(car.id)
    onEdit(car)
  }

  return (
    <>
      <div className="bg-white shadow-lg overflow-hidden border-gris w-[762px] ">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="py-3 px-6 text-left text-[30px] font-bold border-r-8 border-white text-white bg-rojo2">
                Marca
              </th>
              <th className="py-3 px-6 text-left text-[30px] font-bold border-r-8 border-white text-white bg-rojo2">
                Sucursal
              </th>
              <th className="py-3 px-6 text-[30px] font-bold text-white bg-rojo2">
                Aspirante
              </th>
            </tr>
          </thead>

          {/* Reorder.Group como tbody */}
          <Reorder.Group
            as="tbody"
            axis="y"
            values={cars}
            onReorder={setCars}
            className="divide-y divide-azul2 text-gray-700"
          >
            <AnimatePresence>
              {cars.map((row) => {
                const isRemoving = removingIds.has(row.id)
                return (
                  <Reorder.Item
                    key={row.id}
                    value={row}
                    as="tr" // string "tr" para fila válida
                    className="hover:bg-gray-100 transition"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <motion.td
                      className="text-[28px] px-2 text-gris"
                      exit={{
                        x: isRemoving ? -50 : 0,
                        y: isRemoving ? -20 : 0,
                        rotate: isRemoving ? -45 : 0,
                        opacity: 0,
                        transition: { duration: 0.6 },
                      }}
                    >
                      {row.brand}
                    </motion.td>
                    <motion.td
                      className="text-[28px] px-6 text-gris"
                      exit={{
                        x: isRemoving ? 50 : 0,
                        y: isRemoving ? -20 : 0,
                        rotate: isRemoving ? 45 : 0,
                        opacity: 0,
                        transition: { duration: 0.6 },
                      }}
                    >
                      {row.branch}
                    </motion.td>
                    <motion.td
                      className="text-[28px] px-6 text-gris"
                      exit={{
                        y: isRemoving ? 50 : 0,
                        opacity: 0,
                        transition: { duration: 0.6 },
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{row.applicant_name}</span>
                        <div className="flex">
                          <button
                            onClick={() => handleEditClick(row)}
                            className="p-2 hover:bg-gray-200 rounded-full transition"
                          >
                            {selectedId === row.id ? (
                              <EditIcon2 className="w-[38px] h-[38px]" />
                            ) : (
                              <EditIcon className="w-[38px] h-[38px]" />
                            )}
                          </button>
                          <button
                            onClick={() => handleDelete(row.id)}
                            className="hover:bg-gray-200 rounded-full transition"
                          >
                            <DeleteIcon2 className="w-[38px] h-[38px] text-rojo1" />
                          </button>
                        </div>
                      </div>
                    </motion.td>
                  </Reorder.Item>
                )
              })}
            </AnimatePresence>
          </Reorder.Group>
        </table>
      </div>

      {/* Notificación */}
      <Notification
        message={notification.message}
        type={notification.type}
        isVisible={notification.isVisible}
        onClose={hideNotification}
      />
    </>
  )
}

export default DataTable
