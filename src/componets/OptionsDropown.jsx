import { Link } from "react-router-dom";

import React, { Component } from "react";

export default class OptionsDropown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "Kevin",
            rol: "admin",
            logger: true,
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
                        <Link to="/entrar" className="dropdown-item">
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
                        <Link to="/entrar" className="dropdown-item">
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
                        <Link to="/entrar" className="dropdown-item">
                            Sign out
                        </Link>
                    </li>
                );
            }else{
                return (
                    <li>
                        <Link to="/entrar" className="dropdown-item">
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
        console.log(this.state)
        try{
            return this.option();
        }catch{
            return this.option();
        }
    }
}
