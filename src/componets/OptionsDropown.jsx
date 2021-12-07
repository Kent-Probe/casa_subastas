import React from "react";
import { cookies } from "../pages/Login";
import { Link } from "react-router-dom";

export default function OptionsDropown() {
    console.log(cookies.get("correo"));
    if (cookies.get("correo"))
        return (
            <li>
                <Link to="/administrativo" className="dropdown-item">
                    Dashboard
                </Link>
                <Link to="/usuario_internno" className="dropdown-item">
                    Dashboard Interno
                </Link>
                <Link to="/perfil_usuario" className="dropdown-item">
                    perfil usuario
                </Link>
            </li>
        );
    return (
        <li>
            <Link to="/entrar" className="dropdown-item">
                Entrar
            </Link>
        </li>
    );
}
