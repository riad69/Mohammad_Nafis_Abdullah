import { useEffect, useState } from "react";
import Table from "./table/table"
import ChartData from "./chart/ChartData";

function App() {
  const [data, setData] = useState([]);

  useEffect(()=>{
      fetch('/data.json').then(res => res.json()).then(d => setData(d.data));
  },[])

  return (
    <div className="p-3">
      <Table data={data}/>
      <ChartData datas={data.slice(0,100)}/>
    </div>
  )
}

export default App
