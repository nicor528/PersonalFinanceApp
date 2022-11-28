
import { useNavigate } from 'react-router-dom';

export default function NavBar2 () {
  const navegar = useNavigate();

  const goCapsulas = () => {
      navegar(`/capsulas`)
  }

  const goVapos = () => {
      navegar(`/vapos`)
  }

  const goCarrito = () => {
      navegar(`/carrito`)
  }

  const goHome = () => {
      navegar(`/`)
    }


  return (
      <div className="NavBar2">
          <img  width="32" height="32" className="logoNavbar"/>
          <input type="button" value="Agregar Ingresos" className="botonNavbar" 
                  onClick={goCapsulas}></input>
          <input type="button" value="Agregar Gastos" className="botonNavbar" 
                  onClick={goHome}></input>
          <input type="button" value="Nuestros Combos" className="botonNavbar" 
                  onClick={goHome}></input>
      </div>
  )
}