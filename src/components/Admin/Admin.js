import React, { useState } from 'react';
import './Admin.css';
//import EmpCard from '../emp-card/EmpCard.js';

function Admin() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setIsLoggedIn(true);
    // };

    // if (isLoggedIn) {
    //     return <EmpCard />;
    // }

    return (
        <div className="admin-containar">
            <form action="/login" method="post">  {/* <form onSubmit={handleSubmit}> */}
                <label htmlFor="password">Password:</label><br />
                <input type="text" id="password" name="password" required /><br /><br />
                <button className="btn-admin" type="submit">Login</button><br /><br />
            </form>
        </div>
    );
}

export default Admin;
