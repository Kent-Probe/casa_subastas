import React from 'react';
import AuctionI from './AuctionI';

export default function AuctionE(){

return (
    <div className="container-grid">
        <div className="p-4 p-md-5 mb-4 text-white rounded bg" id="fondo_finalizar" >
			<div className="col-md-6 mx-auto px-0 text-center">
				<h1 className="display-4 fst-italic">Subastas por finalizar</h1>
				<p className="lead my-3 mb-5">Oferte y gane grandes ofertas.Nuestro proceso de subasta es simple, eficiente y transparente..</p>
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