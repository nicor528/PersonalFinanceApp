import React, { useState } from "react";
import { obtenerGastosxMes } from "../Apis/Firebase copy";


export const GastosContext = React.createContext([]);

export default function GastosCustomContext ( {children} ) {
    const [gastos, setGastos] = useState([]);
    const [ejeX, setEjeX] = useState([]);
    const [ejeY, setEjeY] = useState([])

    async function setGastosData(mes){
            const data = await obtenerGastosxMes(mes)
            await setGastos(data)
            await graficoGastos(data)
        }

    async function graficoGastos (data) {
        let datax = []; let datay = [];
        data.map( async (item) => {
            await datax.push(item.gasto)
            await datay.push(item.valor)
        })
        await setEjeX(datax)
        await setEjeY(datay)
        console.log(ejeX, ejeY)
    }
    

    return(
        <GastosContext.Provider value={{gastosData: gastos, gastosX: ejeX, gastosY: ejeY, setGastosData}}>
            {children}
        </GastosContext.Provider>
    )

}