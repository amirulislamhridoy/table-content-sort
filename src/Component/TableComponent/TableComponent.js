import React, { useState } from 'react';
import './TableComponent.css'

const TableComponent = ({ setData, data, tableConfig }) => {
    const [sort, setSort] = useState('')
    
    const nameF = (title) => {
        if (title === sort) {
            return setData([...data.reverse()])
        }
        setSort(title)
        const newData = data.sort((a, b) => a.person.name.toLowerCase() > b.person.name.toLowerCase() ? 1 : -1);
        setData([...newData])
    }
    const cityF = (title) => {
        if (title === sort) {
            return setData([...data.reverse()])
        }
        setSort(title)
        const newData = data.sort((a, b) => a.city.toLowerCase() > b.city.toLowerCase() ? 1 : -1);
        setData([...newData])
    }
    const emailF = (title) => {
        if (title === sort) {
            return setData([...data.reverse()])
        }
        setSort(title)
        const newData = data.sort((a, b) => a.email.toLowerCase() > b.email.toLowerCase() ? 1 : -1);
        setData([...newData])
    }
    const joiningDateF = (title) => {
        if (title === sort) {
            return setData([...data.reverse()])
        }
        setSort(title)
        const newData = data.sort((a, b) => {
            a = a.joiningDate.split('/')
            b = b.joiningDate.split('/')
            return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
        })
        setData([...newData])
    }
    const roleF = (title) => {
        if (title === sort) {
            return setData([...data.reverse()])
        }
        setSort(title)
        const newData = data.sort((a, b) => a.role.toLowerCase() > b.role.toLowerCase() ? 1 : -1);
        setData([...newData])
    }
    return (
        <div>
            <table cellSpacing={0}>
                <thead>
                    <tr>
                        {(tableConfig?.name?.show === 'true') &&
                            <th><div>
                                <span>Name</span> 
                                {(tableConfig?.name?.sort === 'true') && <svg onClick={() => nameF('name')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                                </svg>}
                            </div>
                            </th>
                        }
                        {(tableConfig?.city?.show === 'true') && <th><div>
                            <span>City</span> 
                            {(tableConfig?.city?.sort === 'true') && <svg onClick={() => cityF('city')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                            </svg>}
                        </div>
                        </th>}
                        {(tableConfig?.email?.show === 'true') && <th><div>
                            <span>Email Address</span> 
                            {(tableConfig?.email?.sort === 'true') && <svg onClick={() => emailF('email')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                            </svg>}
                        </div>
                        </th>}
                        {(tableConfig?.joiningDate?.show === 'true') && <th><div>
                            <span>Joining Date</span> 
                            {(tableConfig?.joiningDate?.sort === 'true') && <svg onClick={() => joiningDateF('joiningDate')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                            </svg>}
                        </div>
                        </th>}
                        {(tableConfig?.role?.show === 'true') && <th><div>
                            <span>Role</span> 
                            {(tableConfig?.joiningDate?.sort === 'true') && <svg onClick={() => roleF('role')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                            </svg>}
                        </div>
                        </th>}
                    </tr>
                </thead>
                <tbody>
                    {data.map((d, i) => <tr key={i}>
                    {(tableConfig?.name?.show === 'true') &&
                        <td>
                            <div>
                                <img src='https://png.pngitem.com/pimgs/s/130-1300253_female-user-icon-png-download-user-image-color.png' alt=''></img>
                                <span>
                                    {d.person.name}
                                </span>
                            </div>
                        </td>}
                        {(tableConfig?.city?.show && <td>{d.city}</td>)}
                        {(tableConfig?.email?.show && <td>{d.email}</td>)}
                        {(tableConfig?.joiningDate?.show && <td>{d.joiningDate}</td>)}
                        {(tableConfig?.role?.show && <td>{d.role}</td>)}
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default TableComponent;