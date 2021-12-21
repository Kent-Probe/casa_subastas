import React from 'react';

import { Link } from "react-router-dom";

export default function AuctionI (props){
    return(
        <div className="col">
            <Link to="/subastas" className="text-decoration-none">
                <div className="card mb-4 rounded-3 shadow-sm border-success">
                    <div className="card-header py-3">
                        <img src="../assets/img/vaca3.jpg" className="card-img-top w-100" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title ">{props.title}</h5>
                        </div>
                        <ul className="list-group list-group-flush d-flex flex-row gap-1">
                            <li className="list-group-item col martillo col d-flex justify-content-center"><h6 className="text-success ">precio de puja <br/><span className="text-dark">${props.amount}</span></h6></li>
                        </ul>
                        <div className="card-body">
                            <a className="card-link text-success">{props.timeRest} time</a>
                            <a className="card-link text-danger">{props.countBids} Pujas</a>
                        </div>
                        <button type="button" className="w-100 btn btn-lg btn-primary" name='id' value={props.id}>Hacer una puja</button>
                    </div>
                </div>
            </Link>

        </div>
    );
}