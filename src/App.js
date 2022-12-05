import { useEffect } from "react";
import { useState } from "react";
import './App.css'
import MainTable from "./Component/MainTable/MainTable";

function App() {
  let [data, setData] = useState([])

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setData(data))
  }, [])
  return (
    <div>
      <MainTable data={data} setData={setData}></MainTable>
    </div>
  );
}
export default App;
