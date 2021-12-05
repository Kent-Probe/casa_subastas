import React from 'react'

export default function DataSheet(){

    return(
        <div className="col-md-6 ">
            <h1 className="h2">
                TERNERAS ESPECIALIZADAS TIPO LECHE
            </h1>

            <ul className="list-inline">
                <li className="list-inline-item">
                    <h6>Brand:</h6>
                </li>
                <li className="list-inline-item">
                    <p className="text-muted">
                        <strong>Easy Wear</strong>
                    </p>
                </li>
            </ul>

            <h6>Description:</h6>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod temp incididunt ut labore et
                dolore magna aliqua. Quis ipsum suspendisse. Donec
                condimentum elementum convallis. Nunc sed orci a diam
                ultrices aliquet interdum quis nulla.
            </p>
            <ul className="list-inline">
                <li className="list-inline-item">
                    <h6>Avaliable Color :</h6>
                </li>
                <li className="list-inline-item">
                    <p className="text-muted">
                        <strong>White / Black</strong>
                    </p>
                </li>
            </ul>
        </div>
    );
}