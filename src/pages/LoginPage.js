import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

import { update, create, getall, getOne } from '../services/user'

import Cookies from "universal-cookie";

const LoginPage = () => {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    const cookies = new Cookies();
    return (
        <>
            <Formik
                initialValues={{
                    nombreu: "",
                    password: "",
                }}
                validate={(valores) => {
                    let errores = {};

                    // Validacion nombre

                    if (valores.nombreu === "") {
                        errores.nombreu = "campo nombre no puede estar vacìo";
                    }

                    if (valores.password === "") {
                        errores.password = "campo nombre no puede estar vacìo";
                    }

                    return errores;
                }}
                onSubmit={(valores, { resetForm }) => {
                    resetForm();
                    console.log("Formulario enviado");
                    cambiarFormularioEnviado(true);
                    setTimeout(() => cambiarFormularioEnviado(false), 5000);
                    const respon = getOne({nombreu: valores.nombreu, password: valores.password})
                    console.log(respon)
                    //cookies.set('username', valores.nombreu, {path:'/'});
                    //cookies.set('rol', 'externo', {path:'/'});
                    //cookies.set('logger', false, {path:'/'});
                    //window.location.href='/'
                }}
            >
                {({ errors }) => (
                    <section className="mt-5">
                        <Form className="shadow-lg p-2 mb-5 bg-white rounded login-page ">
                            <h1 className="p-2 login-form-font-header mt-3">
                                <span className="text-success">E</span>ntrar
                            </h1>
                            <div className="form-group p-2">
                                <label
                                    htmlFor="nombreu"
                                    className="labelform blockquote"
                                >
                                    Nombre usuario
                                </label>
                                <Field
                                    className=" form-control"
                                    type="text"
                                    id="nombreu"
                                    name="nombreu"
                                    placeholder="John Doe"
                                />
                                <ErrorMessage
                                    className="text-danger"
                                    name="nombreu"
                                    component={() => (
                                        <div className="error">
                                            {errors.nombreu}
                                        </div>
                                    )}
                                />
                            </div>
                            <div className="form-group p-2">
                                <label
                                    htmlFor="password"
                                    className="labelform blockquote mt-4"
                                >
                                    contraseña
                                </label>
                                <Field
                                    className="inp form-control"
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="ingrese contraseña"
                                />
                                <ErrorMessage
                                    className="text-danger"
                                    name="password"
                                    component={() => (
                                        <div className="error">
                                            {errors.password}
                                        </div>
                                    )}
                                />
                            </div>
                            <div className="p-2 d-flex justify-content-end mt-4">
                                <input
                                    type="submit"
                                    className="btn col-4 btn-success justify-content-center"
                                    value="entrar"
                                />
                                {formularioEnviado}
                            </div>
                            <div className="row float-end">
                                <div className="col-md-12 login-from-row ">
                                    <label className="htmlForm-check-label float-center ">
                                        ¿No tienes cuenta?
                                    </label>
                                    <Link
                                        to="/registrarse"
                                        className="text-success text-decoration-none ms-2"
                                    >
                                        Registrese
                                    </Link>
                                </div>
                            </div>
                        </Form>
                    </section>
                )}

                {}
            </Formik>
        </>
    );
};

export default LoginPage;
