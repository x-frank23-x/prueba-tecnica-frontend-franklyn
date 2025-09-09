import { motion } from "framer-motion"
import Confirm from "../assets/icons/Confirma"
import Cancel from "../assets/icons/Cancelar"  

type FormButtonsProps = {
  onCancel: () => void
  loading: boolean
  mode?: "create" | "edit"  
  selectedCar?: boolean // para diferenciar entre Crear y Actualizar
}

const FormButtons = ({ onCancel, loading, mode = "create", selectedCar }: FormButtonsProps) => {
  // Animación para botones con texto (de izquierda a derecha)
  const textButtonAnimation = {
    initial: { x: -200, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -200, opacity: 0 },
    transition: { duration: 1 },
  }

  // Animación para botones con íconos (de arriba hacia abajo)
  const iconButtonAnimation = {
    initial: { y: -200, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -200, opacity: 0 },
    transition: { duration: 0.3 },
  }

  return (
    <div className="flex justify-center gap-6">
      {mode === "create" ? (
        <>
          {/* Botón Cancelar (texto) */}
          <motion.button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="rounded-lg border-2 border-rojo1 text-rojo1 px-8 py-2 font-bold"
            {...textButtonAnimation}
          >
            Cancelar
          </motion.button>

          {/* Botón Crear/Actualizar (texto) */}
          <motion.button
            type="submit"
            disabled={loading}
            className="rounded-lg border-2 border-azul2 text-azul2 px-8 py-2 font-bold"
            {...textButtonAnimation}
          >
            {loading ? "..." : selectedCar ? "Actualizar" : "Crear"}
          </motion.button>
        </>
      ) : (
        <>
          {/* Cancelar edición con ícono */}
          <motion.button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="ml-64 rounded-full bg-gray-100 hover:bg-gray-200 transition flex justify-end  "
            {...iconButtonAnimation}
          >
            <Cancel className="w-[48px] h-[48px] text-rojo1" />
          </motion.button>

          {/* Confirmar edición con ícono */}
          <motion.button
            type="submit"
            disabled={loading}
            className=" rounded-full bg-gray-100 hover:bg-gray-200 transition flex justify-end  "
            {...iconButtonAnimation}
          >
            {loading ? (
              <span className="text-sm text-azul2">...</span>
            ) : (
              <Confirm className="w-[48px] h-[48px] text-azul2" />
            )}
          </motion.button>
        </>
      )}
    </div>
  )
}

export default FormButtons
