import { obtenerGastosxMes, obtenerIngresosxMes } from "../Apis/Firebase copy"
import {useContext, useEffect, useState} from 'react'
import { async } from "@firebase/util";
import { GastosContext } from "../Contexts/GastosContext";



export default function Gastos2 () {

    const {gastosData, setGastosData} = useContext(GastosContext)

    const mes = "noviembre"
    let TotalGastos = 0;

    const [gastos, setGastos] = useState([])
    const [ingresos, setIngresos] = useState([])

    useEffect(() => {
        async function data () {
            await setGastosData(mes)
            console.log(gastosData)
        }
        data();


    },[])






    return(
        <div className='conteinerGastos' >
            { (gastosData.length > 0)? gastosData.map((item) => {
                return(
                    <h2> Gasto: {item.gasto} / Valor: {item.valor} </h2>
                )
            }) : <></> }
            <input type="button" value="click"></input>
        </div>
    )
}