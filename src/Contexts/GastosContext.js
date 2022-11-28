import React, { useState } from "react";
import { obtenerGastosxMes } from "../Apis/Firebase copy";


export const GastosContext = React.createContext([]);

export default function GastosCustomContext ( {children} ) {
    const [gastos, setGastos] = useState([]);

    async function setGastosData(mes){
            const data = await obtenerGastosxMes(mes)
            await setGastos(data)
        }
    

    return(
        <GastosContext.Provider value={{gastosData: gastos, setGastosData}}>
            {children}
        </GastosContext.Provider>
    )

}