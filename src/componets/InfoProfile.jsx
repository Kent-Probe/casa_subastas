import React from "react";

export default function InfoProfile(props) {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Nombre</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">{props.name}</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">{props.email}</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">contraseña</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">{props.password}</p>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
}
