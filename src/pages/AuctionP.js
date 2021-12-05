import React from "react";
import { Formik } from "formik";
import DataSheet from "../componets/DataSheet";

export default function AuctionP() {
  return (
    <>
      <section className="bg-light py-5">
        <div className="container pb-5">
          <div className="row">
            <ul>
              <div className="mt-5">
                <div className="card mb-3">
                  <img
                    className="card-img img-fluid"
                    src="assets/img/vaca1.jpg"
                    alt="Card image cap"
                    id="product-detail"
                  />
                </div>
              </div>
              <div className="mt-5">
                <div className="card">
                  <div className="card-body">
                    <div className="row">

                      <DataSheet/>

                      <div className="col-md-6">
                        <div className="card mb-4 rounded-3 shadow-sm border-success">
                          <div className="card-header py-3">
                            <div className="card-body borderCont">
                              <h6 className="d-flex justify-content-center">
                                Terminara en
                              </h6>
                              <h2 className="text-danger justify-content-center d-flex">0d:4h:35m:02s</h2>
                            </div>
                            <br />
                            <ul className="list-group list-group-flush d-flex flex-row gap-1"></ul>
                            <div className="card-body">
                              <h6 className="d-flex justify-content-center">
                                Inicio el
                              </h6>
                              <h2 className="card-link card-title col mb-3 d-flex text-success justify-content-center">
                                2/12/2021
                              </h2>
                            </div>
                            <div className="card-body">
                              <li className="list-group-item col martillo col d-flex justify-content-center">
                                <h6 className="text-success ">
                                  Current bid <br />
                                  <span className="text-dark">$876.000</span>
                                </h6>
                              </li>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Formik
                      initialValues={{
                        valueBid: 50,
                      }}
                      onSubmit={() => console.log("aaaaaaaaaa")}
                    >
                      {(values, handleSubmit, handleChange, handleBlur) => (
                        <form
                          className="row"
                          method="GET"
                          onSubmit={handleSubmit}
                        >
                          <div className="col input-group mb-3">
                            <span className="input-group-text bg">$</span>
                            <input
                              type="number"
                              min="20"
                              className="form-control "
                              value={values.valueBid}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              aria-label="Amount (to the nearest dollar)"
                            />
                            <span className="input-group-text">.00</span>
                          </div>
                          <div className="col-md-2">
                            <div className="row pb-3">
                              <div className="col d-grid">
                                <button
                                  type="submit"
                                  className="btn btn-primary btn-lg"
                                  name="submit"
                                  value="buy"
                                >
                                  Pujar
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      )}
                    </Formik>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
