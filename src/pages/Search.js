import React from "react";
import SearchB from "../componets/SearchB";

import Filter from "../componets/Filter";

export default function Search() {
  return (
    <>
      <div className="container">
        <div className="row py-5">
          <div className="col-3 filterContent">
            <Filter />
          </div>
          <div className="col-9">
            <form action="/buscar" method="get" className="border-0 p-0">
              <div className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  id="inputModalSearch"
                  name="q"
                  placeholder="Search ..."
                />
                <button
                  type="submit"
                  className="input-group-text bg-success text-light"
                >
                  <i className="fa fa-fw fa-search text-white"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <SearchB />
    </>
  );
}
