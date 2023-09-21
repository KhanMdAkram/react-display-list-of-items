import React, { useState } from 'react';

function App() {
    const [users, setUsers] = useState([
        { id: 1, firstName: 'Iphone', mac_add: '00-B0-D0-63-C2-26', trusted: 'Yes' },
        { id: 2, firstName: 'Verizon Mac', mac_add: 'C8:G8:73:95:A6:DF', trusted: 'No' },
        { id: 3, firstName: 'Samsung s23', mac_add: 'A8:R8:L3:15:N6:FC', trusted: 'No' },
        { id: 4, firstName: 'Verizon Win', mac_add: '2C:54:91:88:C9:E3', trusted: 'Yes' },
        { id: 5, firstName: 'One Plus Android', mac_add: '1A-2B-3C-D4-E5-F6', trusted: 'Yes' }
    ]);

    return (
        <div className="container">
            <h3 className="p-3 text-center">React - Display a list of items</h3>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Device</th>
                        <th>Mac Address</th>
                        <th>Trusted</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user =>
                        <tr key={user.id}>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.mac_add}</td>
                            <td>{user.trusted}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export { App }; 