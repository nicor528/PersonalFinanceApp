import Gastos2 from "../Components/Gastos2";
import GraficBarGastos from "../Components/GraficBarGastos";
import Inicio from "../Components/Inicio";
import Navbar from '../Components/Navbar'

export default function Home (){

    return (
            <div className="main">
                <div className="contentHome">
                    <Navbar></Navbar>
                    <Inicio></Inicio>              
                </div>
            </div>
    )
}