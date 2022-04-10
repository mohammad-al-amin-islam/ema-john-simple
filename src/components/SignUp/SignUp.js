import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    //move the path if successfully logged in
    if (user) {
        navigate('/shop')
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    //form submit handle
    const handleFormSubmit = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Password did not match');
            return;
        }
        if (password.length < 6) {
            setError('Password must 6 or upper')
            return
        }

        //using react firebase hook to create email and password
        createUserWithEmailAndPassword(email, password)
    }


    return (
        <div className='form-container'>
            <div>
                <h3 className="form-title">Sign Up</h3>
                <form onSubmit={handleFormSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required />
                    </div>
                    <p>{error}</p>

                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p className='signup-area'>Already Have An Acout? <Link className='form-link' to='/login'> Login</Link></p>


                <div className='option-area'>
                    <div className='or-style'>
                    </div>
                    <p>or</p>
                    <div className='or-style'></div>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <button>SIgn In With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;