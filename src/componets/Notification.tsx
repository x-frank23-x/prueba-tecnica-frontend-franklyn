import { useEffect } from "react"

type NotificationProps = {
  message: string
  type: "success" | "error" | "info"
  isVisible: boolean
  onClose: () => void
}

const Notification = ({ message, type, isVisible, onClose }: NotificationProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!isVisible) return null

  const bgColor =
    type === "success"
      ? "bg-green-500"
      : type === "error"
      ? "bg-red-500"
      : "bg-blue-500"

  return (
    <div
      className={`fixed bottom-5 right-5 px-6 py-3 rounded shadow-lg text-white font-semibold z-50 flex items-center gap-4 ${bgColor}`}
      role="alert"
    >
      <p>{message}</p>
      <button
        onClick={onClose}
        className="underline text-white hover:text-gray-200 focus:outline-none"
        aria-label="Cerrar notificación"
      >
        Cerrar
      </button>
    </div>
  )
}
export default Notification