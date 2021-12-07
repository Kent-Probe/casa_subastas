import React from "react";

export default function AuctionWin() {
    return (
        <div className="col-md-6">
            <div className="card mb-4 mb-md-0 overflow-auto">
                <div className="card-body list-wrapper pt-2">
                    <p className="mb-4">
                        <span className="text-primary font-italic me-1">
                            assigment
                        </span>
                        Project Status
                    </p>4
                    <p className="mb-1" style={{ fontsize: ".77rem" }}>
                        Web Design
                    </p>
                    <div className="progress rounded" style={{ height: 5 }}>
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "80%" }}
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontsize: ".77rem" }}>
                        Website Markup
                    </p>
                    <div className="progress rounded" style={{ height: 5 }}>
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "72%" }}
                            aria-valuenow="72"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontsize: ".77rem" }}>
                        One Page
                    </p>
                    <div className="progress rounded" style={{ height: 5 }}>
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "89%" }}
                            aria-valuenow="89"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontsize: ".77rem" }}>
                        Mobile Template
                    </p>
                    <div className="progress rounded" style={{ height: 5 }}>
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "55%" }}
                            aria-valuenow="55"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                    <p className="mt-4 mb-1" style={{ fontsize: ".77rem" }}>
                        Backend API
                    </p>
                    <div
                        className="progress rounded mb-2"
                        style={{ height: 5 }}
                    >
                        <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "66%" }}
                            aria-valuenow="66"
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
