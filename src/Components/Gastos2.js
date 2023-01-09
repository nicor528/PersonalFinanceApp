import { obtenerGastosxMes, obtenerIngresosxMes } from "../Apis/Firebase copy"
import {useContext, useEffect, useState} from 'react'
import { GastosContext } from "../Contexts/GastosContext";



export default function Gastos2 ({gastos, mes}) {


    return(
        <div className='conteinerGastos' >
            <h3> Gastos en {mes} </h3>
            { (gastos.length > 0)? gastos.map((item) => {
                return(
                    <h6> Gasto: {item.gasto} / Valor: {item.valor} </h6>
                )
            }) : <></> }
            <input type="button" value="click"></input>
        </div>
    )
}