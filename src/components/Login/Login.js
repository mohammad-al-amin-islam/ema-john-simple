import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    const handleEmailOnBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordOnBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate('/shop');
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h3 className="form-title">Login</h3>
                <form onSubmit={handleFormSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailOnBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Password</label>
                        <input onBlur={handlePasswordOnBlur} type="password" name="password" id="" required />
                    </div>
                    <p>
                        {error?.message}
                    </p>
                    <p>
                        {loading && 'Loading...'}
                    </p>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='signup-area'>New to Ema-john? <Link className='form-link' to='/signup'> Create New Account</Link></p>
                <div className='option-area'>
                    <div className='or-style'>
                    </div>
                    <p>or</p>
                    <div className='or-style'></div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <button >SIgn In With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;