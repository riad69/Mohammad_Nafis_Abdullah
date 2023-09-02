import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';

const ChartData = ({datas}) => {
    const [labels, setLabels] = useState([]);

    useEffect(()=>{
        if (datas.length) {
            const all_label = datas.map(d=>`${d.id}`);
            setLabels(all_label);
        }
    },[datas]);

    useEffect(()=>{
        // console.log(labels);
    },[labels])

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Filler,
        Legend
      );
      
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Area Chart',
          },
        },
      };
      
      
      const data = {
        labels,
        datasets: [
          {
            fill: true,
            label: 'Deal Status',
            data: datas.map((d) => d.deal_status),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };

    return (
        <div className='mt-40'>
            <Line options={options} data={data} />
        </div>
    );
}

export default ChartData;