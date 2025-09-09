import type { UseFormRegister, FieldValues, Path } from "react-hook-form"

type Props<T extends FieldValues> = {
  name: Path<T>
  placeholder: string
  icon: React.ReactNode
  activeIcon?: React.ReactNode   // 👈 icono alternativo si está activo
  register: UseFormRegister<T>
  error?: string
  active?: boolean               // 👈 control externo para cambiar el icono
}

function FormInput<T extends FieldValues>({
  name,
  placeholder,
  icon,
  activeIcon,
  register,
  error,
  active = false,
}: Props<T>) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-4">
        {/* Cambiar entre icono normal y activo */}
        {active && activeIcon ? (
          <span className="mx-10">{activeIcon}</span>
        ) : (
          <span className="mx-10">{icon}</span>
        )}

        <input
          type="text"
          placeholder={placeholder}
          {...register(name, { required: "Este campo es obligatorio" })}
          className="flex-1 border-2 border-gris h-[52px] rounded-xl 
                     focus:outline-none focus:border-blue-500
                     text-gris placeholder-gris px-4"
        />
      </div>

      {/* Mensaje de error */}
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  )
}

export default FormInput
