import { useContext, useEffect } from "react"
import { IngresosContext } from "../Contexts/IngresosContext"


export default function Ingresos2 ({ingresos, mes}) {


    return(
        <div className='conteinerGastos' >
            <h3> Ingresos en {mes} </h3>
            { (ingresos.length > 0)? ingresos.map((item) => {
                return(
                    <h6> Ingreso: {item.ingreso} / Valor: {item.valor} </h6>
                )
            }) : <></> }
            <input type="button" value="click"></input>
        </div>
    )
}