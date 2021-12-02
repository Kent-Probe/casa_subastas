import React from 'react';

import AuctionI from './AuctionI';

export default function Card(){

    return (
        <div className="titulo">
        <div className="container">
            <div className="pricing-header pb-md-4 mx-auto text-center">
                <h1 className="display-4 fw-light text-success mb-4  ">Nuestros Servicios</h1>
                <p className="fs-5 text-muted mb-5">Somos Subastas Ganaderas Del Uraba Grande Suganar S A una compañia 
                                        responsable que presta un servicio de comercialización justo, eficaz, 
                                        transparente y sostenible de ganado.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <AuctionI/>
                <AuctionI/>
                <AuctionI/>
            </div>
        </div>
      </div>
    );
};



