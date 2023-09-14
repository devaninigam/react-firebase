import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebasedb from '../firebasedb';
import { toast } from 'react-toastify'; 


const Login = () => {
  const navigation = useNavigate();
  const [input, setInput] = useState({ 
    email: "",
    password: ""
  });

  const Treact = (e) => {
    setInput({...input , [e.target.name]: e.target.value,
    });
  }; 
  const auth = getAuth(firebasedb);
  const sem = () =>{
    signInWithEmailAndPassword(auth, input.email, input.password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigation('/home') 
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
        <h1 className='login_h'>Login</h1> 
        <input className='Boder' onChange={Treact} type='email' name='email' placeholder='Email' /> 
        <input className="Boder" onChange={Treact} type="password" name="password" placeholder="Password" />  
        <div className='Btn_style Green frant' >
          <h3>
            <button onClick={sem} className='link btn-transparent'> Login </button>
          </h3>
          <a href='/'>sign up</a>
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

export default Login;