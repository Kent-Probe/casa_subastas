import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";


const RegisterPage = () => {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    return (
        <>
            <div className="p-2 py-2 container">
                <Formik
                    initialValues={{
                        nombre: "",
                        correo: "",
                        nombreu: "",
                        tipoDoc: "",
                        id: "",
                        fecha: "",
                        fechae: "",
                    }}
                    validate={(valores) => {
                        let errores = {};

                        // Validacion nombre
                        if (!valores.nombre) {
                            errores.nombre = "Por favor ingresa nombre completo";
                        } else if (!/^[a-zA-ZÀ-ÿ\s]{8,40}$/.test(valores.nombre)) {
                            errores.nombre =
                                "Nombre invalido";
                        }

                        if (!valores.nombreu) {
                            errores.nombreu = "Por favor ingresa usuario";
                        } else if (!/^[a-zA-ZÀ-ÿ]{1,40}$/.test(valores.nombreu)) {
                            errores.nombreu =
                                "Nombre invalido";
                        }
                        
                        if (!valores.correo) {
                            errores.correo = 'Por favor ingrese un correo valido';
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(valores.correo)) {
                            errores.correo = 'Por favor ingrese un correo valido';
                        }

                        if (!valores.id) {
                            errores.id = "Por favor ingresa nit valido";
                        } else if (!/^[0-9]{1,40}$/.test(valores.id)) {
                            errores.id = "El nit solo puede contener numeros";
                        }

                        return errores;
                    }}
                    onSubmit={(valores, { resetForm }) => {
                        resetForm();
                        console.log("Formulario enviado");
                        cambiarFormularioEnviado(true);
                        setTimeout(() => cambiarFormularioEnviado(false), 5000);
                    }}
                >
                    {({ errors }) => (
                        <Form className=" mt-5 container shadow-lg p-2 mb-5 bg-white rounded col-md-6">
                            <h1 className="p-2 mt-2"><span className="text-success">R</span>egistro</h1>
                            <div className="form-group mt-5 p-2">
                                <label
                                    htmlFor="nombre"
                                    className="labelform blockquote"
                                >
                                    Nombre
                                </label>
                                <Field
                                    className="inp form-control blockquote"
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    placeholder="John Doe"
                                />
                                <ErrorMessage
                                    className="text-danger"
                                    name="nombre"
                                    component={() => (
                                        <div className="error">{errors.nombre}</div>
                                    )}
                                />
                            </div>
                            
                            <div className="form-group p-2">
                                <label
                                    htmlFor="nombreu"
                                    className="labelform blockquote"
                                >
                                    Nombre de usuario
                                </label>
                                <Field
                                    className="form-control blockquote"
                                    type="text"
                                    id="nombreu"
                                    name="nombreu"
                                    placeholder="JohnDoe"
                                />
                                <ErrorMessage
                                    className="text-danger"
                                    name="nombreu"
                                    component={() => (
                                        <div className="error">{errors.nombreu}</div>
                                    )}
                                />
                            </div>
                            
                            <div className="form-group p-2">
                                <label
                                    htmlFor="correo"
                                    className="labelform blockquote"
                                >
                                    Correo
                                </label>
                                <Field
                                    className="form-control blockquote"
                                    type="text"
                                    id="correo"
                                    name="correo"
                                    placeholder="JohnDoe@gmail.com"
                                />
                                <ErrorMessage
                                    className="text-danger"
                                    name="correo"
                                    component={() => (
                                        <div className="error">{errors.correo}</div>
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
                                        <div className="error">{errors.correo}</div>
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
