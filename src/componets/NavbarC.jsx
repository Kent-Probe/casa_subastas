//Importar para rutas
import { Route, Routes, Link } from "react-router-dom";

//Importar las paginas
import AuctionP from "../pages/AuctionP";
import EventsP from "../pages/EventsP";
import CowsP from "../pages/CowsP";
import Home from "../pages/Index";
import Login from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import DashboardIn from "../pages/DashboardIn";
import Sign_up from "../pages/RegisterPage";
import Profile from "../pages/Profile";
import Search from "../pages/Search";

//Importar Conponentes
import SearchB from "./SearchB";

import React from "react";
import DashboardInS from "../pages/DashboardInS";
import DropownMenu from "./DropownMenu";

export default function Navbar() {
    return (
        <>
            <header className="mb-3 bg-success fixed-top ">
                <nav className="navbar navbar-expand-lg navbar-light shadow">
                    <div className="container d-flex justify-content-between align-items-center">
                        <Link
                            to="/"
                            className="d-flex align-items-center mb-2 mb-lg-0  mx-3 text-decoration-none fw-bold fs-4 titulo-cabecera"
                        >
                            Suganar S.A
                        </Link>
                        <button
                            className="navbar-toggler border-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#templatemo_main_nav"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
                            id="templatemo_main_nav"
                        >
                            <div className="flex-fill">
                                <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link text-white px-2"
                                            to="/"
                                        >
                                            Inicio
                                        </Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link
                                            className="nav-link text-white px-2"
                                            to="/subastas"
                                        >
                                            Subastas
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link text-white px-2"
                                            to="/eventos"
                                        >
                                            Eventos
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            className="nav-link text-white px-2"
                                            to="/tipo_de_ganado"
                                        >
                                            Tipo de Ganado
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="navbar align-self-center d-flex">
                                <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputMobileSearch"
                                            placeholder="Search ..."
                                        />
                                        <div className="input-group-text">
                                            <i className="fa fa-fw fa-search"></i>
                                        </div>
                                    </div>
                                </div>
                                <a
                                    className="nav-icon d-none d-lg-inline"
                                    data-bs-toggle="modal"
                                    data-bs-target="#templatemo_search"
                                >
                                    <i className="fa fa-fw fa-search text-white mr-2"></i>
                                </a>
                                <DropownMenu />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

            <SearchB />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/subastas" element={<AuctionP />} />
                <Route path="/eventos" element={<EventsP />} />
                <Route path="/tipo_de_ganado" element={<CowsP />} />
                <Route path="/entrar" element={<Login />} />
                <Route path="/buscar" element={<Search />} />
                <Route path="/administrativo" element={<Dashboard />} />
                <Route path="/usuario_internno" element={<DashboardIn />} />
                <Route path="/registrarse" element={<Sign_up />} />
                <Route path="/perfil_usuario" element={<Profile />} />
                <Route
                    path="/usuario_internno/subasta"
                    element={<DashboardInS />}
                />
                <Route
                    path="/usuario_internno/reportes"
                    element={<DashboardIn />}
                />
            </Routes>
        </>
    );
}
