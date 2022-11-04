import React, { useState } from "react";


export const GastosContext = React.createContext([]);

export default function GastosCustomContext ( {children} ) {
    const [gastos, setGastos] = useState([]);

    

    return(
        <GastosContext.Provider value={{gastosData: gastos}}>
            {children}
        </GastosContext.Provider>
    )

}