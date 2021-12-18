import { Link } from "react-router-dom";

import React, { Component } from "react";

//Importar cookies
import Cookies from "universal-cookie";


export default class OptionsDropown extends Component {
    
    
    constructor(props) {
        super(props);
        const cookies = new Cookies();
        this.state = {
            username: cookies.get('username'),
            rol: cookies.get('rol') ,
            logger: cookies.get('logger')? true : false,
        };
    }
    
    option(){
        if (this.state.logger) {
            if (this.state.rol === "interno") {
                return (
                    <li>
                        <Link to="/usuario_interno" className="dropdown-item">
                            Dashboard
                        </Link>
                        <hr className="dropdown-divider" />
                        <Link to="/salir" className="dropdown-item">
                            Sign out
                        </Link>
                    </li>
                );
            } else if (this.state.rol === "externo") {
                return (
                    <li>
                        <Link to="/perfil_usuario" className="dropdown-item">
                            {this.state.username}
                        </Link>
                        <hr className="dropdown-divider" />
                        <Link to="/salir" className="dropdown-item">
                            Sign out
                        </Link>
                    </li>
                );
            } else if (this.state.rol === "admin") {
                return (
                    <li>
                        <Link to="/administrativo" className="dropdown-item">
                            Dashboard
                        </Link>
                        <hr className="dropdown-divider" />
                        <Link to="/salir" className="dropdown-item">
                            Sign out
                        </Link>
                    </li>
                );
            }else{
                return (
                    <li>
                        <Link to="/salir" className="dropdown-item">
                            Sign out
                        </Link>
                    </li>
                );
            }
        } else {
            return(
                <div>
                    <li>
                        <Link to="/entrar" className="dropdown-item">
                            Entrar
                        </Link>
                    </li>
                </div>
            );
        }
    }

    render() {
        console.log(this.state.logger)
        try{
            return this.option();
        }catch{
            {window.location.href = '/'};
        }
    }
}
