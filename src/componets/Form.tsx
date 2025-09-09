import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { AnimatePresence, motion } from "framer-motion"

import Car from "../assets/icons/Car"
import Location from "../assets/icons/Location"
import People from "../assets/icons/People"
import Car2 from "../assets/icons/Car2"
import Location2 from "../assets/icons/Location2"
import People2 from "../assets/icons/People2"
import Create from "../assets/icons/Create"

import FormButtons from "./FormButtons"
import Notification from "./Notification"

const API_URL = import.meta.env.VITE_URL_PROD;

type FormData = {
  vehiculo: string
  ubicacion: string
  conductor: string
}

type CarType = {
  id: number
  brand: string
  branch: string
  applicant_name: string
}

type Props = {
  selectedCar: CarType | null
  clearSelection: () => void
  onSaved: () => void
}

const Form = ({ selectedCar, clearSelection, onSaved }: Props) => {
  const [showButtons, setShowButtons] = useState(false)
  const [loading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      vehiculo: "",
      ubicacion: "",
      conductor: "",
    },
  })

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

  // Cargar valores cuando selectedCar cambia
  useEffect(() => {
    if (selectedCar) {
      // Usar reset para setear valores y evitar problemas con valores no controlados
      reset({
        vehiculo: selectedCar.brand,
        ubicacion: selectedCar.branch,
        conductor: selectedCar.applicant_name,
      })
      setShowButtons(true)
    } else {
      reset({
        vehiculo: "",
        ubicacion: "",
        conductor: "",
      })
      setShowButtons(false)
    }
  }, [selectedCar, reset])
const onSubmit = async (data: FormData) => {
  setLoading(true)
  try {
    let res: Response
    if (selectedCar) {
      res = await fetch(`${API_URL}/cars/${selectedCar.id}`, {
        method: "PATCH", // Cambiado de PUT a PATCH
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          brand: data.vehiculo,
          branch: data.ubicacion,
          applicant_name: data.conductor,
        }),
      })
    } else {
      res = await fetch(`${API_URL}/cars/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          brand: data.vehiculo,
          branch: data.ubicacion,
          applicant_name: data.conductor,
        }),
      })
    }

    if (!res.ok) {
      let errorMessage = "Error desconocido"
      try {
        const errorData = await res.json()
        errorMessage = errorData.message || JSON.stringify(errorData)
      } catch {
        const errorText = await res.text()
        errorMessage = errorText
      }
      throw new Error(errorMessage)
    }

    showNotification(
      selectedCar ? "Auto actualizado con éxito" : "Auto creado con éxito",
      "success"
    )

    reset({
      vehiculo: "",
      ubicacion: "",
      conductor: "",
    })
    clearSelection()
    onSaved()
    setShowButtons(false)
  } catch (error: any) {
    console.error("Error en onSubmit:", error)
    showNotification(`Error al guardar el auto: ${error.message || error}`, "error")
  } finally {
    setLoading(false)
  }
}



  const handleCancel = () => {
    clearSelection()
    reset({
      vehiculo: "",
      ubicacion: "",
      conductor: "",
    })
    setShowButtons(false)
  }

  return (
    <>
      <motion.form
        key={selectedCar ? selectedCar.id : "new"} // Forzar remount si cambia selectedCar
        onSubmit={handleSubmit(onSubmit)}
        className="shadow-lg rounded-xl p-8 w-[543px] flex flex-col justify-center gap-6 bg-white overflow-hidden"
        animate={{ height: showButtons ? 435 : 335 }}
        transition={{ duration: 0.3 }}
      >
        {/* Mostrar botón crear solo si no estamos editando ni creando */}
        {!showButtons && (
          <div className="flex items-center">
            <button type="button" onClick={() => setShowButtons(true)}>
              <Create className="text-azul2 w-[34px] h-[34px]" />
            </button>
          </div>
        )}

        {/* Vehículo */}
        <div className="flex items-center gap-4">
          {showButtons ? (
            <Car2 className="w-[47px] h-[49px] mx-10" />
          ) : (
            <Car className="text-gris w-[47px] h-[49px] mx-10" />
          )}
          <input
            type="text"
            placeholder="Mazda"
            {...register("vehiculo", { required: "El vehículo es obligatorio" })}
            className="flex-1 border-2 border-gris h-[52px] rounded-xl focus:outline-none focus:border-blue-500 text-gris placeholder-gris px-4"
            disabled={!showButtons}
          />
        </div>
        {errors.vehiculo && (
          <p className="text-red-500 text-xs">{errors.vehiculo.message}</p>
        )}

        {/* Ubicación */}
        <div className="flex items-center gap-4">
          {showButtons ? (
            <Location2 className="w-[47px] h-[49px] mx-10" />
          ) : (
            <Location className="text-gris w-[47px] h-[49px] mx-10" />
          )}
          <input
            type="text"
            placeholder="Chapinero"
            {...register("ubicacion", { required: "La ubicación es obligatoria" })}
            className="flex-1 border-2 border-gris h-[52px] rounded-xl focus:outline-none focus:border-blue-500 text-gris placeholder-gris px-4"
            disabled={!showButtons}
          />
        </div>
        {errors.ubicacion && (
          <p className="text-red-500 text-xs">{errors.ubicacion.message}</p>
        )}

        {/* Conductor */}
        <div className="flex items-center gap-4">
          {showButtons ? (
            <People2 className="w-[47px] h-[49px] mx-10" />
          ) : (
            <People className="text-gris w-[47px] h-[49px] mx-10" />
          )}
          <input
            type="text"
            placeholder="David Sandoval"
            {...register("conductor", { required: "El conductor es obligatorio" })}
            className="flex-1 border-2 border-gris h-[52px] rounded-xl focus:outline-none focus:border-blue-500 text-gris placeholder-gris px-4"
            disabled={!showButtons}
          />
        </div>
        {errors.conductor && (
          <p className="text-red-500 text-xs">{errors.conductor.message}</p>
        )}

        {/* Botones con animación */}
        <AnimatePresence>
          {showButtons && (
            <FormButtons
              onCancel={handleCancel}
              loading={loading}
              mode={selectedCar ? "edit" : "create"}
              selectedCar={!!selectedCar}
            />
          )}
        </AnimatePresence>
      </motion.form>

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

export default Form
