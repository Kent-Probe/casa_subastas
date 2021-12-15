import Button from "@restart/ui/esm/Button";
import React from "react";
import LateralMenu from "../componets/LateralMenu";
import Pagination from "../componets/Pagination";

export default function DashboardInS() {
    return (
        <>
            <LateralMenu
                men1="Subastas"
                men2="Reportes"
                linkDashboard="/usuario_interno"
                linkDashboardMen1="/usuario_interno/subasta"
                linkDashboardMen2="/usuario_interno/reportes"
            />
            <div className="container justify-content-end d-flex">
                <div className="py-5 col-md-8 col-lg-9 border-3">
                    <div className="card mb-3">
                        <img
                            class="card-img-top"
                            src="../assets/img/vaca3.jpg"
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p class="card-text">
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </p>
                            <div className="container d-flex justify-content-end">
                                <button
                                    type="button"
                                    className="btn btn-primary mx-2 btn-lg"
                                >
                                    Editar
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-danger btn-lg"
                                    data-bs-toggle="modal"
                                    data-bs-target="#staticBackdrop"
                                >
                                    Eliminar
                                </button>
                            </div>
                            <p className="card-text">
                                <small className="text-muted">
                                    Last updated 3 mins ago
                                </small>
                            </p>
                        </div>
                    </div>
                    <Pagination />
                </div>
            </div>
            <div
                class="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">
                                Confirmar
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            Si elimina la subasta no podra recuperarse, ¿esta
                            seguro?
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancelar
                            </button>
                            <button type="button" class="btn btn-danger">
                                Eliminar de todas formas
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
