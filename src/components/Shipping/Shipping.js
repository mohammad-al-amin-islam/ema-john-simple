import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipping = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAdress] = useState('');
    const [number, setNumber] = useState('');



    const handleNameOnBlur = event => {
        setName(event.target.value);
    }

    const handleAddressOnBlur = event => {
        setAdress(event.target.value);
    }
    const handlePhoneOnBlur = event => {
        setNumber(event.target.value);
    }
    const handleFromSubmit = event => {
        event.preventDefault();
        const shipping = { name, email, address, number }
        console.log(shipping);
    }
    return (
        <div className='form-container'>
            <div>
                <h3 className="form-title">Shipping</h3>
                <form onSubmit={handleFromSubmit} >
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameOnBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="name">Your Address</label>
                        <input onBlur={handleAddressOnBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="name">Phone Number</label>
                        <input onBlur={handlePhoneOnBlur} type="text" name="name" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>
            </div>
        </div>
    );
};

export default Shipping;