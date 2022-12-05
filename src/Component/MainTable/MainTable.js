import React from 'react';

const MainTable = ({ data, setData }) => {

    const nameF = () => {
        const newData = data.sort((a, b) => a.person.name.toLowerCase() > b.person.name.toLowerCase() ? 1 : -1);
        setData([...newData])
    }
    const cityF = () => {
        const newData = data.sort((a, b) => a.city.toLowerCase() > b.city.toLowerCase() ? 1 : -1);
        setData([...newData])
    }
    const emailF = () => {
        const newData = data.sort((a, b) => a.email.toLowerCase() > b.email.toLowerCase() ? 1 : -1);
        setData([...newData])
    }
    const joiningDateF = () => {
        const newData = data.sort((a, b) => {
            a = a.joiningDate.split('/')
            b = b.joiningDate.split('/')
            return a[2] - b[2] || a[1] - b[1] || a[0] - b[0];
        })
        setData([...newData])
    }
    const roleF = () => {
        const newData = data.sort((a, b) => a.role.toLowerCase() > b.role.toLowerCase() ? 1 : -1);
        setData([...newData])
    }
    return (
        <div>
            <table cellSpacing={0}>
                <thead>
                    <tr>
                        <th><div>
                            <span>Name</span> <svg onClick={nameF} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                            </svg>
                        </div>
                        </th>
                        <th><div>
                            <span>City</span> <svg onClick={cityF} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                            </svg>
                        </div>
                        </th>
                        <th><div>
                            <span>Email Address</span> <svg onClick={emailF} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                            </svg>
                        </div>
                        </th>
                        <th><div>
                            <span>Joining Date</span> <svg onClick={joiningDateF} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                            </svg>
                        </div>
                        </th>
                        <th><div>
                            <span>Role</span> <svg onClick={roleF} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                            </svg>
                        </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d,i) => <tr key={i}>
                        <td>
                            <div>
                                <img src='https://png.pngitem.com/pimgs/s/130-1300253_female-user-icon-png-download-user-image-color.png' alt=''></img>
                                <span>
                                    {d.person.name}
                                </span>
                            </div>
                        </td>
                        <td>{d.city}</td>
                        <td>{d.email}</td>
                        <td>{d.joiningDate}</td>
                        <td>{d.role}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default MainTable;