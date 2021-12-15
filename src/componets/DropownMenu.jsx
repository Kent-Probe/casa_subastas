import React from "react";

import { Link } from "react-router-dom";
import OptionsDropown from "./OptionsDropown";



export default function DropownMenu() {
    return (
        <div className="dropdown text-end">
            <a
                href={"https://www.youtube.com/watch?v=ZyYCDRAGmkM"}
                className="d-block link-dark text-decoration-none text-white dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                <i className="fa fa-fw fa-user text-white mr-3"></i>
            </a>
            <ul
                className=" dropdown-menu dropdown-menu-end  text-small text-white"
                aria-labelledby="dropdownUser1"
            >
                <OptionsDropown/>
            </ul>
        </div>
    );
}
