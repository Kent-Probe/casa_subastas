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
                        linkDashboard="/usuario_internno"
                        linkDashboardMen1="/usuario_internno/subasta"
                        linkDashboardMen2="/usuario_internno/reportes"
                        men1="Subasta"
                        men2="Reportes"
                    />
                    <DashboardP />
                </div>
            </div>
        </>
    );
}
