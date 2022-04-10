import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h3 className="form-title">Login</h3>
                <form className=''>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="" id="email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Password</label>
                        <input type="password" name="" id="password" />
                    </div>
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