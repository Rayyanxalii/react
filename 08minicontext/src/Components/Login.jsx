import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../Context/UserContext'

function login() {
    const [name, setname] = useState(null);
    const [password, setpassword] = useState(null);

    const { setuser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setuser({ name, password });
    }

    return (
        <div>
            <h2>Enter Login Details</h2>
            <input type="text" placeholder='Your Name' value={name} onChange={(e) => setname(e.target.value)} />
            <input type="text" placeholder='Your Password' value={password} onChange={(e) => setpassword(e.target.value)} />
            <button onClick={handleSubmit}>Submit</button>
        </div>

    )
}

export default login