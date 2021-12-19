import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";

//importar conexion con back end
import { create } from '../services/User'

const RegisterPage = () => {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    return (
        <>
            <div className="p-2 py-2 container">
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        username: "",
                        tipoDoc: "",
                        id: "",
                        password: "",
                    }}
                    validate={(valores) => {
                        let errores = {};

                        // Validacion name
                        if (!valores.name) {
                            errores.name = "Por favor ingresa name completo";
                        } else if (!/^[a-zA-ZÀ-ÿ\s]{8,40}$/.test(valores.name)) {
                            errores.name =
                                "name invalido";
                        }

                        if (!valores.username) {
                            errores.username = "Por favor ingresa usuario";
                        } else if (!/^[a-zA-ZÀ-ÿ]{1,40}$/.test(valores.username)) {
                            errores.username =
                                "name invalido";
                        }
                        
                        if (!valores.email) {
                            errores.email = 'Por favor ingrese un email valido';
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(valores.email)) {
                            errores.email = 'Por favor ingrese un email valido';
                        }

                        if (!valores.id) {
                            errores.id = "Por favor ingresa nit valido";
                        } else if (!/^[0-9]{1,40}$/.test(valores.id)) {
                            errores.id = "El nit solo puede contener numeros";
                        }

                        return errores;
                    }}
                    onSubmit={async (valores, { resetForm }) => {
                        resetForm();
                        console.log("Formulario enviado");
                        cambiarFormularioEnviado(true);
                        setTimeout(() => cambiarFormularioEnviado(false), 5000);

                        const respon = await create({
                            name: valores.name,
                            email: valores.email,
                            username: valores.username,
                            id: valores.id,
                            password: valores.password
                        })
                        if (respon){
                            window.location.href='/login'
                        }
                    }}
                >
                    {({ errors }) => (
                        <Form className=" mt-5 container shadow-lg p-2 mb-5 bg-white rounded col-md-6">
                            <h1 className="p-2 mt-2"><span className="text-success">R</span>egistro</h1>
                            <div className="form-group mt-5 p-2">
                                <label
                                    htmlFor="name"
                                    className="labelform blockquote"
                                >
                                    name
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
                                    htmlFor="email"
                                    className="labelform blockquote"
                                >
                                    email
                                </label>
                                <Field
                                    className="form-control blockquote"
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="JohnDoe@gmail.com"
                                />
                                <ErrorMessage
                                    className="text-danger"
                                    name="email"
                                    component={() => (
                                        <div className="error">{errors.email}</div>
                                    )}
                                />
                            </div>
                            
                            <div className="form-group p-2">
                                <label
                                    htmlFor="username"
                                    className="labelform blockquote"
                                >
                                    name de usuario
                                </label>
                                <Field
                                    className="form-control blockquote"
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="JohnDoe"
                                />
                                <ErrorMessage
                                    className="text-danger"
                                    name="username"
                                    component={() => (
                                        <div className="error">{errors.username}</div>
                                    )}
                                />
                            </div>

                            <div className="form-group p-2">
                                <label
                                    htmlFor="password"
                                    className="labelform blockquote"
                                >
                                    contraseña
                                </label>
                                <Field
                                    className="form-control blockquote"
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="*********"
                                />
                                <ErrorMessage
                                    className="text-danger"
                                    name="password"
                                    component={() => (
                                        <div className="error">{errors.email}</div>
                                    )}
                                />
                            </div>

                            <div className="form-group p-2">
                                <label
                                    htmlFor="tipoDoc"
                                    className="labelform blockquote"
                                >
                                    tipo documento
                                </label>
                                <Field
                                    name="tipoDoc"
                                    as="select"
                                    className="inp form-control blockquote"
                                >
                                    <option value="CC">CC</option>
                                    <option value="PS">PS</option>
                                    <option value="CE">CE</option>
                                </Field>
                            </div>

                            <div className="form-group p-2">
                                <label
                                    htmlFor="id"
                                    className="labelform blockquote"
                                >
                                    Nit
                                </label>
                                <Field
                                    className="form-control blockquote"
                                    type="number"
                                    id="id"
                                    name="id"
                                    min="100000"
                                    placeholder="102300129"
                                />
                                <ErrorMessage
                                    className="text-danger"
                                    name="id"
                                    component={() => (
                                        <div className="error">{errors.id}</div>
                                    )}
                                />
                            </div>
                            
                            <div className="pb-3 d-flex justify-content-end mt-4">
                                <input
                                    type="submit"
                                    className="btn col-4 btn-success justify-content-center"
                                    value="Registro"
                                />
                                {formularioEnviado && (
                                    <p className="exito">
                                        Formulario enviado con exito!
                                    </p>
                                )}
                            </div>
                            <div className="row float-end">
                                <div className="col-md-12 login-from-row ">
                                    <Link
                                        to="/entrar"
                                        className="text-success text-decoration-none float-end"
                                    >
                                        Inicia sesion <span className='text-dark'>aqui</span>

                                    </Link>                                
                                </div>
                            </div>                
                        </Form>
                    )}

                    {}
                </Formik>
            </div>
        </>
    );
};

export default RegisterPage;
