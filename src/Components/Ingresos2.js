import { useContext, useEffect } from "react"
import { IngresosContext } from "../Contexts/IngresosContext"


export default function Ingresos2 () {

    const {ingresosData, setIngresosData} = useContext(IngresosContext)

    const mes = "noviembre"

    useEffect(() => {
        async function data ( ) {
            await setIngresosData(mes)
        }
        data()
    }, [])

    return(
        <div className='conteinerGastos' >
        { (ingresosData.length > 0)? ingresosData.map((item) => {
            return(
                <h2> Ingreso: {item.ingreso} / Valor: {item.valor} </h2>
            )
        }) : <></> }
        <input type="button" value="click"></input>
    </div>
    )
}