import React from "react";

export default function ProfileP (props){
    
    return(
    <div className="card mb-4">
        <div className="card-body text-center">
            <img
                src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-chat/ava3.png"
                alt="avatar"
                className="rounded-circle img-fluid"
                style={{ width: 150 }}
            />
            <h5 className="my-3">{ props.nameuser }</h5>
            <p className="text-muted mb-1">{ props.rol}</p>
            <p className="text-muted mb-4">{ props.name }</p>
            <div className="d-flex justify-content-center mb-2">
                <button type="button" className="btn btn-primary">
                    Editar
                </button>
            </div>
        </div>
    </div>
);
    }
