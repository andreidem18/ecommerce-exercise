import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import 'styles/login.css';
import axios from 'axios';

const Login = () => {

    const { register, handleSubmit } = useForm();
    const [ error, setError ] = useState('');
    const navigate = useNavigate();

    const onSubmit = data => {
        return axios.post('https://ecommerce-exercise-backend.herokuapp.com/login/', data)
            .then(res => localStorage.setItem('token', res.data.access))
            .then(() => navigate("/"))
            .catch(() => setError("Invalid credentials"));
    }


    return (
        <section className='login'>
            <div className="card">
                <h1 className="branch-name">Anise</h1>
                <div className="testing-user">
                    <strong>Test data</strong>
                    <span>
                        <i className="material-icons-sharp"> person_outline </i>
                        admin@admin.com
                    </span>
                    <span>
                        <i className="material-icons-outlined"> lock </i>
                        root
                    </span>
                </div>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <label>
                        Enter your email
                        <input type="text" placeholder='john@anise.com' {...register("email")} required />
                    </label>
                    <label>
                        Enter your password
                        <input type="password" placeholder='••••••••' {...register("password")} required />
                    </label>
                    <span style={{color: "#ff0000"}}>{ error }</span>
                    <button className='login-button link-squared'>Login</button>
                </form>
                <p className="signup-message">Don't have an account? <Link to="/signup">Sign Up</Link></p>
            </div>
        </section>
    );
};

export default Login;
