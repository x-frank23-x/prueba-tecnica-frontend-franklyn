import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Nav from "../componets/Nav"
import Imagologo from "../assets/icons/Imagelogo"
import celular from "../assets/Telefono-01.png"
import Animation from "../functions/Animation"

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/main")
    }, 10000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <section className="flex flex-col min-h-screen">
      {/* Logo */}
      <div className="flex-none p-10 z-50 object-contain">
        <Imagologo className="w-[56px] h-[55] stroke-2" />
      </div>

      {/* Contenido central */}
      <div className="flex-grow flex items-center justify-center relative">
        {/* Texto detrás */}
        <h1 className="absolute top-[30%] text-[140px] font-bold  text-azul1 z-6 ">
          BIENVENIDO A
        </h1>

        {/* Imagen */}
        <img
          src={celular}
          alt="Teléfono"
          className="relative z-10 w-[667px] h-[807px]"
        />

        {/* Texto delante */}
        <h1 className="absolute mt-28 text-[90px] text-stroke-white font-bold text-azul1 z-20">
          MONITORING INNOVATION
        </h1>
      </div>

      {/* Navegación */}
      <div className="flex-none w-full z-20">
        
        <Nav />
      </div>
      <Animation />
    </section>
  )
}

export default Home
