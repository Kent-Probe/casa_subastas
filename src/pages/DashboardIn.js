import React from "react";

import { Route, Routes, Link } from "react-router-dom";

//Importar Componentes
import LateralMenu from "../componets/LateralMenu";
import DashboardP from "../componets/DashboardP";

export default function Dashboard() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <LateralMenu
                        men1="Subastas"
                        men2="Reportes"
                        linkDashboard="/usuario_interno"
                        linkDashboardMen1="/usuario_interno/subasta"
                        linkDashboardMen2="/usuario_interno/reportes"
                    />
                    <DashboardP />
                </div>
            </div>
        </>
    );
}
