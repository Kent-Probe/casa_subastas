import { Route, Routes, Link } from "react-router-dom";

import AuctionP from '../pages/AuctionP';
import EventsP from '../pages/EventsP';
import CowsP from '../pages/CowsP';

import React from 'react';


export default function Navbar(){

    return (
      <>
        <header className="p-3 mb-3  bg-success fixed-top ">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a href={"https://www.youtube.com/watch?v=ZyYCDRAGmkM"} className="d-flex align-items-center mb-2 mb-lg-0  mx-3 text-decoration-none fw-bold fs-4 titulo-cabecera">
                Suganar S A
              </a>
      
              
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">

                  <li><Link to="/" className=" px-2 text-decoration-none">Inicio</Link></li>
                  <li><Link to='/subastas' className=" px-2 text-decoration-none">Subastas</Link></li>
                  <li><Link to='/eventos' className=" px-2 text-decoration-none">Eventos</Link></li>
                  <li><Link to='/tipo_de_ganado' className=" px-2 text-decoration-none">Tipo de ganado</Link></li>

                </ul>
              
              <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input type="search" className="form-control" placeholder="search..." aria-label="Search"/>
              </form>
      
              <div className="dropdown text-end">
                <a href={"https://www.youtube.com/watch?v=ZyYCDRAGmkM"} className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                  <img src={"https://cdn.pixabay.com/photo/2014/12/06/16/52/smiley-559124__340.png"} alt="mdo" width="32" height="32" className="rounded-circle"/>
                </a>
                <ul className="dropdown-menu text-small text-white" aria-labelledby="dropdownUser1">
                  <li><a className="dropdown-item " href={"https://www.youtube.com/watch?v=ZyYCDRAGmkM"}>Andres</a></li>
                  <li><a className="dropdown-item" href={"https://www.youtube.com/watch?v=ZyYCDRAGmkM"}>Kevin</a></li>
                  <li><a className="dropdown-item" href={"https://www.youtube.com/watch?v=ZyYCDRAGmkM"}>leonardo</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href={"https://www.youtube.com/watch?v=ZyYCDRAGmkM"}>Sign out</a></li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <Routes>
          <Route path="/subastas" element={<AuctionP />} />
          <Route path="/eventos" element={<EventsP />} />
          <Route path="/tipo_de_ganado" element={<CowsP />} />
        </Routes>
      </>
    );
};
