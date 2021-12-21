import React, { useEffect, useState } from "react";
import { getall } from "../services/Auction";

import { useLocation, useSearchParams } from "react-router-dom";

import AuctionI from "./AuctionI";

export default function Card() {
    let {search} = useLocation();
    let query = new URLSearchParams(search);

    let start = query.get('inicio');
    let end = query.get('fin');

    

    console.log(start, end)

    const [auctios, setAuctios] = useState([]);

    useEffect(() => {
        getAuctios();
    }, []);

    const getAuctios = async () => {
        const resp = await getall();
        setAuctios(resp);
    };
    return (
        <div className="titulo">
            <div className="container">
                <div className="pricing-header pb-md-4 mx-auto text-center">
                    <h1 className="display-4 fw-light text-success mb-4  ">
                        Nuestros Servicios
                    </h1>
                    <p className="fs-5 text-muted mb-5">
                        Somos Subastas Ganaderas Del Uraba Grande Suganar S A
                        una compañia responsable que presta un servicio de
                        comercialización justo, eficaz, transparente y
                        sostenible de ganado.
                    </p>
                </div>
                <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                    {auctios.map((item) => (
                        <AuctionI
                            key={item._id}
                            title={item.auction_name}
                            countBids={item.bids}
                            timeRest="53:20:002Z"
                            amount={item.start_Amount}
                            id={item._id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
