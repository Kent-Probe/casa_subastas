import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import Cookies from 'universal-cookie';

export const cookies = new Cookies();

export default function Login() {
    const [correo,setCorreo]=useState('');
    const [password,setPassword]=useState('');

    cookies.remove("correo");

    const correoCambio =(event)=>{
      setCorreo(event.target.value);
    }
  
    const passwordCambio =(event)=>{
      setPassword(event.target.value);
    }
  
    function iniciarSesion(){
        axios.get("http://localhost:5000/user")
        .then(response => console.log(response.data));
    }
    
    
    
    const formularioEnviadoLogin = (event)=>{
        event.preventDefault();
    
        if(correo === null || correo ===''){
            alert('ERROR: Introduzca el correo ');
        }
        else if(password === null || password === ''){
            alert('ERROR: Introduzca el password');
        }
    
        else if(correo !=='andres@uni.com' || password !== '123' ){
            console.log('ERROR: El correo o password no validos');
            
            
        }
        else {
            console.log('INFO: Acceso concedido');
            cookies.set("correo", correo, { path: '/' })
            cookies.set("password", password, { path: '/' })
            console.log(cookies.get("correo"));
            //window.location.href="/"
        }
        
    }
    
    return (
        <>
        <div className="container loginsito ">
            <div className="row text-center login-page">
            <div className="col-md-12 login-form">
                <form onSubmit={formularioEnviadoLogin} method="GET">
                <div className="row">
                    <div className="col-md-12 login-form-header">
                    <p className="login-form-font-header">
                        <span className="text-success">L</span>ogin
                    </p>
                    </div>
                </div>
                <div className="row mt-0">
                    <div className="col-md-12 login-from-row">
                    <h6 className='  me-5 ms-5 float-start'>Correo</h6>

                    <input
                        name="correo"
                        className="w-75 form-control m-auto"
                        type="email"
                        value={correo}
                        onChange={correoCambio}
                        placeholder="yourname@mail.com"
                        // required
                    />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 login-from-row">
                    <h6 className='  me-5 ms-5 float-start'>Contraseña</h6>

                    <input
                        name="password"
                        className="w-75 form-control m-auto"
                        type="password"
                        value={password}
                        onChange={passwordCambio}
                        placeholder="********"
                        // required
                    />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 login-from-row ">
                    <button onClick={()=>iniciarSesion()} className="btn btn-primary float-end">Entrar</button>
                    </div>
                </div>
                </form>
            </div>
            <div className="row">
                <div className="col-md-12 login-from-row ">
                <label className="htmlForm-check-label float-center ">
                    ¿No tienes cuenta?
                </label>
                <Link
                    to="/registrarse"
                    className="text-success text-decoration-none ms-2"
                >
                    Registrese
                </Link>
                </div>
            </div>
            </div>
        </div>
            
    </>
  );
}
