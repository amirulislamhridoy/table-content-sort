import React, { useEffect, useState } from 'react';
import TableComponent from '../TableComponent/TableComponent';

const SubTablesFirst = () => {
    const [firstTable, setFirstTable] = useState([])
    const [secondTable, setSecondTable] = useState([])
    const [thirdTable, setThirdTable] = useState([])
    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => {
            setFirstTable(data)
            setSecondTable(data)
            setThirdTable(data)
        })
    }, [])

    const tableConfigFirst = {
        "name": {
            "show": "true",
            "sort": "true",
        },
        "email": {
            "show": "true",
            "sort": "false",
        },
        "role": {
            "show": "true",
            "sort": "false",
        }
    }
    const tableConfigSecond = {
        "email": {
            "show": "true",
            "sort": "false",
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
    const tableConfigThird = {
        "name": {
            "show": "true",
            "sort": "false",
        },
        "city": {
            "show": "true",
            "sort": "true",
        },
        "joiningDate": {
            "show": "true",
            "sort": "false",
        },
        "role": {
            "show": "true",
            "sort": "true",
        }
    }
    return (
        <div>
            <TableComponent data={firstTable} setData={setFirstTable} tableConfig={tableConfigFirst}></TableComponent>
            <TableComponent data={secondTable} setData={setSecondTable} tableConfig={tableConfigSecond}></TableComponent>
            <TableComponent data={thirdTable} setData={setThirdTable} tableConfig={tableConfigThird}></TableComponent>
        </div>
    );
};

export default SubTablesFirst;