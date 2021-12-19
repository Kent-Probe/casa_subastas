import React from 'react';

import { Link } from "react-router-dom";

import { getall } from '../services/Auction';

export default function AuctionI (props){

    const respon = async () => {
        await getall();
    }
    
    console.log(respon);

    return(
        <div className="col">
            <Link to="/subastas" className="text-decoration-none">
                <div className="card mb-4 rounded-3 shadow-sm border-success">
                    <div className="card-header py-3">
                        <img src="../assets/img/vaca3.jpg" className="card-img-top w-100" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title ">TERNERAS ESPECIALIZADAS TIPO LECHE</h5>
                        </div>
                        <ul className="list-group list-group-flush d-flex flex-row gap-1">
                            <li className="list-group-item col martillo col d-flex justify-content-center"><h6 className="text-success ">Current bid <br/><span className="text-dark">$876.000</span></h6></li>
                        </ul>
                        <div className="card-body">
                            <a className="card-link text-success">0d:4h:35m:02s</a>
                            <a className="card-link text-danger">30 Bids</a>
                        </div>
                        <button type="button" className="w-100 btn btn-lg btn-primary">Submit A Bid</button>
                    </div>
                </div>
            </Link>

        </div>
    );
}