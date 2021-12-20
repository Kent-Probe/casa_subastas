import React, { useState } from 'react';
import LateralMenu from '../componets/LateralMenu';

import { Formik, Form, Field, ErrorMessage } from "formik";


export default function AddAucts(){
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

    return(
        <>
            <LateralMenu
                men1="Subastas"
                men2="Reportes"
                linkDashboard="/usuario_interno"
                linkDashboardMen1="/usuario_interno/subasta"
                linkDashboardMen2="/usuario_interno/reportes"
                addAuct= "Agregar subasta"
                linkAddAuct = "/usuario_interno/agregar_subasta"
            />
            <div className="container justify-content-end d-flex">
            <div className="p-2 py-2 container">
                <Formik
                    initialValues={{
                        name: "",
                        start_mount: "",
                        img: "",
                        date_end: ''
                    }}
                    validate={(valores) => {
                        let errores = {};

                        // Validacion name
                        if (!valores.name) {
                            errores.name = "Por favor ingresa name completo";
                        } else if (!/^[a-zA-ZÀ-ÿ\s]{8,40}$/.test(valores.name)) {
                            errores.name =
                                "Nombre no valido";
                        }

                        if (!valores.start_mount) {
                            errores.start_mount = "Por favor ingresa nit valido";
                        } else if (!/^[0-9]{5,40}$/.test(valores.start_mount)) {
                            errores.start_mount = "Ingrese un monto valido, minimo 50.000";
                        }

                        return errores;
                    }}
                    onSubmit={async (valores, { resetForm }) => {
                        resetForm();
                        console.log("Formulario enviado");
                        cambiarFormularioEnviado(true);

                        console.log(valores.name)
                        console.log(valores.start_mount)
                        console.log(valores.img)
                        console.log(valores.date_end)


                    }}
                >
                    {({ errors }) => (
                        <Form className=" mt-5 container shadow-lg p-2 mb-5 bg-white rounded col-md-6">
                            <h1 className="p-2 mt-2"><span className="text-success">A</span>gregar subasta</h1>
                            <div className="form-group mt-5 p-2">
                                <label
                                    htmlFor="name"
                                    className="labelform blockquote"
                                >
                                    Nombre
                                </label>
                                <Field
                                    className="inp form-control blockquote"
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                />
                                <ErrorMessage
                                    className="text-danger"
                                    name="name"
                                    component={() => (
                                        <div className="error">{errors.name}</div>
                                    )}
                                />
                            </div>

                            <div className="form-group p-2">
                                <label
                                    htmlFor="start_mount"
                                    className="labelform blockquote"
                                >
                                    Momto inicial
                                </label>
                                <Field
                                    className="form-control blockquote"
                                    type="number"
                                    id="start_mount"
                                    name="start_mount"
                                    min="50000"
                                    placeholder="200000"
                                />
                                <ErrorMessage
                                    className="text-danger"
                                    name="start_mount"
                                    component={() => (
                                        <div className="error">{errors.start_mount}</div>
                                    )}
                                />
                            </div>

                            <div className="form-group p-2">
                                <label
                                    htmlFor="img"
                                    className="labelform blockquote"
                                >
                                    Imagen
                                </label>
                                <Field
                                    className="form-control blockquote"
                                    type="file"
                                    id="img"
                                    name="img"
                                />
                                <ErrorMessage
                                    className="text-danger"
                                    name="img"
                                    component={() => (
                                        <div className="error">{errors.img}</div>
                                    )}
                                />
                            </div>

                            <div className="form-group p-2">
                                <label
                                    htmlFor="date_end"
                                    className="labelform blockquote"
                                >
                                    Fecha de cierre
                                </label>
                                <Field
                                    className="form-control blockquote"
                                    type="Date"
                                    id="date_end"
                                    name="date_end"
                                    min="50000"
                                    placeholder="200000"
                                />
                                <ErrorMessage
                                    className="text-danger"
                                    name="date_end"
                                    component={() => (
                                        <div className="error">{errors.date_end}</div>
                                    )}
                                />
                            </div>

                            <div className="pb-3 d-flex justify-content-end mt-4">
                                <input
                                    type="submit"
                                    className="btn col-4 btn-success justify-content-center"
                                    value="Agregar"
                                />
                            </div>               
                        </Form>
                    )}

                    {}
                </Formik>
            </div>
            </div>
        </>
    );
}