import React, { useEffect, useState } from 'react';

const MainTable = () => {
    let [data, setData] = useState([])

    useEffect(() => {
      fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    const nameF = () => {
        const a = data.sort((a, b) => a.city.toLowerCase() > b.city.toLowerCase() ? 1 : -1);
        setData([...a])
    }
    const roleF = () => {
        const a = data.sort((a, b) => a.role.toLowerCase() > b.role.toLowerCase() ? 1 : -1);
        setData([...a])
    }
    return (
        <div>
            <tr>
                <th onClick={nameF}>city</th>
                <th>......</th>
                <th onClick={roleF}>role</th>
            </tr>
            {data.map(d => <tr>
                <td>{d.city}</td>
                <br />
                <td>{d.role}</td>
            </tr>)}
        </div>
    );
};

export default MainTable;