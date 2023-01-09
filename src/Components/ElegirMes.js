import { useEffect, useState } from "react";
import MostrarIyG from "./MostrarIyG";


export default function ElegirMes () {

    //const{mes, setMes} = useState("")
    let mes;
    useEffect(() => {

    },[mes])
    /*
    Mes.addEventListener('change', event => {
        const mes =  document.getElementById("mes").value
        setMes(mes)
        console.log(mes)
    })*/

    const elegirmes = async () => {
        const Mes = await document.getElementById("mes")
        mes = Mes.value
        console.log(mes)
    }

    return(
        <div id="hola" >
            <select  id="mes">
                    <option value="noviembre">1</option>
                    <option value="diciembre">2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
            </select>
            <button onClick={elegirmes} > Elegir mes </button>
            <MostrarIyG MES={mes} ></MostrarIyG>
        </div>
    )
} 