//Importar para rutas
import { Route, Routes, Link } from "react-router-dom";

//Importar las paginas
import AuctionP from "../pages/AuctionP";
import EventsP from "../pages/EventsP";
import CowsP from "../pages/CowsP";
import Home from "../pages/Index";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Sign_up from "../pages/Sign_up.js";

//Importar modulos
import SearchB from "./SearchB";

import React from "react";

export default function Navbar() {
  return (
    <>
        <header className="mb-3 bg-success fixed-top ">
            <nav className="navbar navbar-expand-lg navbar-light shadow">
                <div className="container d-flex justify-content-between align-items-center">
                    <a className="d-flex align-items-center mb-2 mb-lg-0  mx-3 text-decoration-none fw-bold fs-4 titulo-cabecera">
                    Suganar S.A
                    </a>
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
                            <Link className="nav-link text-white px-2" to="/">
                            Inicio
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link text-white px-2" to="/subastas">
                            Subastas
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white px-2" to="/eventos">
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
                        <div className="dropdown text-end">
                        <a
                            href={"https://www.youtube.com/watch?v=ZyYCDRAGmkM"}
                            className="d-block link-dark text-decoration-none text-white dropdown-toggle"
                            id="dropdownUser1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                        >
                            <i className="fa fa-fw fa-user text-white mr-3"></i>
                        </a>
                        <ul
                            className=" dropdown-menu dropdown-menu-end  text-small text-white"
                            aria-labelledby="dropdownUser1"
                        >
                            <li>
                            <Link to="/entrar" className="dropdown-item">
                                Entrar
                            </Link>
                            <Link to="/administrativo" className="dropdown-item">
                                temp
                            </Link>
                            </li>
                            <li>
                            <hr className="dropdown-divider" />
                            </li>
                            <li>
                            <Link to="/entrar" className="dropdown-item">
                                Sign out
                            </Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
            </nav>
        </header>

        <SearchB/>
        
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subastas" element={<AuctionP />} />
        <Route path="/eventos" element={<EventsP />} />
        <Route path="/tipo_de_ganado" element={<CowsP />} />
        <Route path="/entrar" element={<Login />} />
        <Route path="/administrativo" element={<Dashboard/>} />
        <Route path="/registrarse" element={<Sign_up/>}/>
      </Routes>
    </>
  );
}
