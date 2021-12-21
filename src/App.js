//Modulos de estilos
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./assets/css/templatemo.min.css";
import "./assets/css/templatemo.css";


import "./assets/css/index.css";
import "./assets/css/estilos.css";
import "./assets/css/carousel.css";
import "./assets/css/custom.css";
import "./assets/css/dashboard.css"


//Importar Script
import "../node_modules/bootstrap/dist/js/bootstrap";

//Importar componentes
import NavbarC from "./componets/NavbarC";
import React from "react";

export default class App extends React.Component{

    render(){
        return (
            <>
            <div>
                <NavbarC />
            </div>
            </>
        );
    }
}
