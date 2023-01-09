import { GastosContext } from "../Contexts/GastosContext";
import { IngresosContext } from "../Contexts/IngresosContext";
import Gastos2 from "./Gastos2";
import Ingresos2 from "./Ingresos2";
import {useContext, useEffect, useState} from 'react'


export default function MostrarIyG ({MES}) {

    const {gastosData, setGastosData} = useContext(GastosContext)
    const {ingresosData, setIngresosData} = useContext(IngresosContext)
    console.log(MES)

    useEffect(() => {
        async function data () {
            await setGastosData(MES)
            console.log(gastosData)
            await setIngresosData(MES)
            console.log(ingresosData)
        }
        data();
    },[MES])

    return(
        <div className="tablasConteiner">
                
            <Gastos2 gastos={gastosData} mes={MES} ></Gastos2>
            <Ingresos2 ingresos={ingresosData} mes={MES} ></Ingresos2>

        </div>
    )
}