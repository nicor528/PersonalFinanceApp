import { GastosContext } from "../Contexts/GastosContext";
import {useContext, useEffect, useState} from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);  

export default function GraficBarGastos ({gastos, labels, ejeY}) {

 
    useEffect(() => {
        console.log(labels)
    },[gastos])

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'Grafico de gastos',
          },
        },
      };

    const datas = {
        datasets: [
          {
            label: 'Gastos',
            data: ejeY,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
        labels,
      };

    return (
        <div  className='conteinerGrafico'>
            <Bar options={options} data={datas}/>
        </div>
    )
}