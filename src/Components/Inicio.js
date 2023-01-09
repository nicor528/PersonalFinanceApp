import Gastos2 from "./Gastos2";
import Ingresos2 from "./Ingresos2";
import { GastosContext } from "../Contexts/GastosContext";
import {useContext, useEffect, useState} from 'react'
import GraficBarGastos from "./GraficBarGastos";
import {logg} from '../Apis/Firebase copy';
import { IngresosContext } from "../Contexts/IngresosContext";
import ElegirMes from './ElegirMes'

export default function Inicio () {

    //const {mes, setMes} = useState("noviembre")
    //const Mes = document.getElementById("elegirMes")

    let mes = "diciembre"
    const {gastosData, setGastosData} = useContext(GastosContext)
    const {ingresosData, setIngresosData} = useContext(IngresosContext)

    /*useEffect(() => {
        async function data () {
            await setGastosData(mes)
            console.log(gastosData)
            await setIngresosData(mes)
            console.log(ingresosData)
        }
        data();
    },[])*/

    /*
    Mes.addEventListener('change', event => {
        mes = Mes.value
        console.log(mes)
    })
    */
    
        
    

    return(
        <div className="inicioConteiner">
             <button onClick={logg} > Logg con Gmail </button>
             <button onClick={logg} > Logg con Gmail </button>
            {/*
            <div className="tablasConteiner">
                
                <Gastos2 gastos={gastosData} mes={mes} ></Gastos2>
                <Ingresos2 ingresos={ingresosData} mes={mes} ></Ingresos2>

            </div>*/}

            <ElegirMes></ElegirMes>

            <button onClick={logg} > Logg con Gmail </button>
                <GraficBarGastos    gastos={gastosData} 
                                    labels={gastosData.map((item) => {
                                        if(item.gasto != 'Total'){
                                        return (item.gasto)
                                        }
                                    })}
                                    ejeY={gastosData.map((item) => {
                                        if(item.gasto != 'Total'){
                                            return (item.valor)
                                        }
                                    })}
                ></GraficBarGastos>
        </div>
    )
}