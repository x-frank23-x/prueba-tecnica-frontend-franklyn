import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <section>
      <nav>
        <ul className="flex justify-center items-center gap-x-[190px] p-10 mb-20 ">
          <li>
            <Link
              to="https://monitoringinnovation.com/"
              className="font-mon font-medium text-[20px] leading-[100%] tracking-normal text-azul2 "
            >
              MONITORINGINNOVATION
            </Link>
          </li>
          <li>
            <Link
              to="https://gpscontrol.co/"
              className="font-mon font-medium text-[20px] leading-[100%] tracking-normal text-azul2 "
            >
              GPS CONTROL
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="font-mon font-medium text-[20px] leading-[100%] tracking-normal text-azul2 "
            >
              Link repo front
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className="font-mon font-medium text-[20px] leading-[100%] tracking-normal text-azul2"
            >
              Link repo back
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Nav
