import React from "react";

export default function InfoProfile() {
    return (
        <div className="card mb-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">Johnatan Smith</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">example@example.com</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">(097) 234-5678</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Mobile</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">(098) 765-4321</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm-3">
                        <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                        <p className="text-muted mb-0">
                            Bay Area, San Francisco, CA
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
