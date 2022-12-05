import React, { useEffect, useState } from 'react';
import TableComponent from '../TableComponent/TableComponent';

const MainTable = () => {
    let [data, setData] = useState([])

  useEffect(() => {
    fetch('data.json')
      .then(res =>  res.json())
      .then(data => setData(data))
  }, [])
    const tableConfig = {
        "name": {
            "show": "true",
            "sort": "true",
        },
        "city": {
            "show": "true",
            "sort": "true",
        },
        "email": {
            "show": "true",
            "sort": "true",
        },
        "joiningDate": {
            "show": "true",
            "sort": "true",
        },
        "role": {
            "show": "true",
            "sort": "true",
        }
    }
    
    return (
        <div>
            <TableComponent data={data} setData={setData} tableConfig={tableConfig}></TableComponent>
        </div>
    );
};

export default MainTable;