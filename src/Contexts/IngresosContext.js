import React, { useState } from "react";
import {  obtenerIngresosxMes } from "../Apis/Firebase copy";


export const IngresosContext = React.createContext([]);

export default function IngresosCustomContext ( {children} ) {
    const [ingresos, setIngresos] = useState([]);

    async function setIngresosData(mes){
            const data = await obtenerIngresosxMes(mes)
            await setIngresos(data)
        }
    

    return(
        <IngresosContext.Provider value={{ingresosData: ingresos, setIngresosData}}>
            {children}
        </IngresosContext.Provider>
    )
}
