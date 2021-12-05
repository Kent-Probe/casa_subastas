import React from "react";

export default function Filter() {
  return (
    <>
      <div className="card mb-4 rounded-3 shadow-sm border-success ">
        <h5 className="card-title d-flex justify-content-center py-1">
          Filtros
        </h5>
      </div>
      <div className="card-body card mb-4 rounded-3 shadow-sm border-success">
        <div className=" py-3">
          <div className="card-body ">
            <div className="borderCont d-flex justify-content-center">
              Termina dentro de:
            </div>
            <br />
            <div className="form-check d-flex justify-content-start">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="htmlForm-check-label" for="flexRadioDefault1">
                &nbsp;&nbsp;Un dia
              </label>
            </div>
            <div className="form-check d-flex justify-content-start">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="htmlForm-check-label" for="flexRadioDefault2">
                &nbsp;&nbsp;Una semana
              </label>
            </div>
            <div className="form-check d-flex justify-content-start">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="htmlForm-check-label" for="flexRadioDefault2">
                &nbsp;&nbsp;Un mes
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
