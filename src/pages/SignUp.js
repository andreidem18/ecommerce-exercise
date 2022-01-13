import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { signUpThunk } from 'redux/actions';

import 'styles/login.css';

const SignUp = () => {

    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = data => {
        dispatch(signUpThunk(data))
            .then(() => navigate('/login'));
    }

    return (
        <section className='login signup'>
            <div className="card">
                <h1 className="branch-name">Anise</h1>
                <form action="" onSubmit={handleSubmit(onSubmit)} >
                    <div className="names">
                        <label>
                            First name
                            <input type="text" placeholder='John' {...register("first_name")}  />
                        </label>
                        <label>
                            Last name
                            <input type="text" placeholder='Doe' {...register("last_name")}  />
                        </label>
                    </div>
                    <label>
                        Email
                        <input type="text" placeholder='john@anise.com' {...register("email")}  />
                    </label>
                    <label>
                        Password
                        <input type="password" placeholder='••••••••' {...register("password")}  />
                    </label>
                    <button className='login-button link-squared'>Signup</button>
                </form>
                <p className="signup-message">Already have an account? <Link to="/login">Log In</Link></p>
            </div>
        </section>
    );
};

export default SignUp;