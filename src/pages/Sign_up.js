import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Sign_up() {
  return (
    <Fragment>
      <div className="container register">
        <div className="row text-center login-page">
          <div className="col-md-12 login-form">
            <form action="./Home.js" method="post">
              <div className="row">
                <div className="col-md-12 login-form-header">
                  <p className="login-form-font-header">
                    <span>R</span>egistro
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 login-from-row ">
                <h6 className='  me-5 ms-5 float-start'>Nombre completo</h6>
                  <input
                    name="nombre"
                    className="w-75 form-control m-auto "
                    type="text"
                    placeholder="ex. John Doe"
                    required
                  />
                </div>
              </div>
              <div className="row mt-0">
                <div className="col-md-12 login-from-row">
                <h6 className='  me-5 ms-5 float-start'>Correo</h6>

                  <input
                    name="correo"
                    className="w-75 form-control m-auto"
                    type="email"
                    placeholder="yourname@mail.com"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 login-from-row">
                <h6 className='  me-5 ms-5 float-start'>Contraseña</h6>

                  <input
                    name="password"
                    className="w-75 form-control m-auto"
                    type="password"
                    placeholder="********"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 login-from-row">
                    <h6 className='  me-5 ms-5 float-start'>Repetir Contraseña</h6>
                  <input
                    name="password"
                    className="w-75 form-control m-auto"
                    type="password"
                    placeholder="********"
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 login-from-row ">
                  <button className="btn btn-primary float-end">Entrar</button>
                </div>
              </div>
            </form>
          </div>
          <div className="row">
            <div className="col-md-12 login-from-row ">
            <Link
                to="/entrar"
                className="text-success text-decoration-none float-end"
              >
                Log in <span className='text-dark'>instead</span>

              </Link>

             
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
