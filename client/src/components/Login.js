import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true)
        axiosWithAuth().post('/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                props.history.push("/bubbles-page");
            })
            .catch(err => console.log(err.response))
    }

    return(
      <div className="Form-Container">
        <form onSubmit={handleSubmit}>
            {isLoading && <div>Hang tight...</div>}
            <h3>Log In</h3>
            <label>UserName:</label>
            <input type="text" name="username" value={credentials.username} onChange={handleChange} />
            <label>PassWord:</label>
            <input type="password" name="password" value={credentials.password} onChange={handleChange} />
            <button type="submit" className="btn">Log in</button>
        </form>
      </div>
    )
}

export default Login;
