import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebasedb from '../firebasedb';
import { toast } from 'react-toastify'
const Signup = () => {
    const navigation = useNavigate();
    const [input, setInput] = useState({
        email: "",
        password: ""
    });

    const Treact = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };
    const auth = getAuth(firebasedb);
    const creat = () => {
        createUserWithEmailAndPassword(auth, input.email, input.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigation('./login')
                toast.success("Login success")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage)
                // ..
            });
    }

    return (
        <div>
            <button className='btn-transparent Boder' onClick={() => navigation(-1)}>
                <h2><i style={{ padding: "10px" }} className="fa-solid fa-angle-left"></i>Back</h2>
            </button>
            <div className='mix'>
                <h1 className='login_h'>Signup</h1>
                <input className='Boder' onChange={Treact} type='email' name='email' placeholder='Set Email' />
                <input className="Boder" onChange={Treact} type="password" name="password" placeholder="Set Password" />
                <div className='Btn_style Signup-class' >
                    <h3>
                        <button onClick={creat} className='link Signup-btn  btn-transparent'> Signup </button>
                    </h3>
                    <a href='/login'>Login</a>
                </div>
                <div className='row'>
                    <div className='so_mide'>
                        <i className="fa-brands fa-google google"></i>
                    </div>
                    <div className='so_mide'>
                        <i className="fa-brands fa-facebook-f fb"></i>
                    </div>
                    <div className='so_mide'>
                        <i className="fa-brands fa-apple apple"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;