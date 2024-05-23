import React, { useEffect, useState } from 'react';
import './Admin.css';
import axios from 'axios';
import MyModal from '../my modal/MyModal';
import EmpCard from '../emp card/EmpCard';

function Admin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [cards,setCards] = useState([])
    const [flag, setFlag] = useState(false);
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setIsLoggedIn(true);
    // };

    const getCards = async ()=>{
        const url = 'https://back-end-iwii.onrender.com/getAllCards'
        try {
            const response = await axios.get(url)
            setCards(response.data.filter(obj=>obj.is_fav))
        } catch (error) {
            console.error('Login failed:', error);
            setFlag(true);
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://back-end-iwii.onrender.com/admin/login', { password: password });
            if (response.data.success) {
                setIsLoggedIn(true);
                setPassword("")
                console.log("response.data : ",response.data);
            } else {
                setFlag(true);
            }
        } catch (error) {
            console.error('Login failed:', error);
            setFlag(true);
        }
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleCloseModal = () => {
        setFlag(false);
    };

    useEffect(() => {
        getCards();
    }, [cards]);

    return (
        <div className='admin-main'>
            {
                !isLoggedIn && <div className="admin-containar">
                <form onSubmit={handleSubmit} id='login-form'>
                    <label htmlFor="password" id='password-label'>Password:</label><br />
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button
                        type="button"
                        onClick={toggleShowPassword}
                        className="show-password-button"
                    >
                        {showPassword ? "Hide" : "Show"} Password
                    </button>
                    <br /><br />
                    <button className="btn-admin" type="submit">Login</button><br /><br />
                </form>
            </div>
            }

            {
                isLoggedIn && 
                    cards.map(obj=><EmpCard clickedCard={obj} type= '3' />)
                
            }

            <MyModal show={flag} onHide={handleCloseModal} message="Wrong password" heading="Try Again" />
        </div>
    );
}

export default Admin;
