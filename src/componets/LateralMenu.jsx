import React from "react";

//Importar para rutas
import { Link } from "react-router-dom";

export default function LateralMenu(props) {
    function addAuctions(params) {
        if (params) {
            return (
                <>
                    <li className="nav-item">
                        <Link className="nav-link" to={props.linkAddAuct}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeLinejoin="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-plus-square"
                                aria-hidden="true"
                            >
                                <rect
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="3"
                                    y="3"
                                    width="18"
                                    height="18"
                                    rx="2"
                                    ry="2"
                                />{" "}
                                <line
                                    xmlns="http://www.w3.org/2000/svg"
                                    x1="12"
                                    y1="8"
                                    x2="12"
                                    y2="16"
                                />
                                <line
                                    xmlns="http://www.w3.org/2000/svg"
                                    x1="8"
                                    y1="12"
                                    x2="16"
                                    y2="12"
                                />
                            </svg>
                            {props.addAuct}
                        </Link>
                    </li>
                    <hr className="dropdown-divider" />
                </>
            );
        } else {
            return <hr className="dropdown-divider" />;
        }
    }
    return (
        <>
            <nav
                id="sidebarMenu"
                className="col-md-3 col-lg-2 d-md-block bg-success  sidebar collapse"
            >
                <div className="position-sticky pt-3">
                    <ul className="nav flex-column ">
                        <li className="nav-item">
                            <Link
                                className="nav-link active "
                                aria-current="page"
                                to={props.linkDashboard}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinejoin="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-home"
                                    aria-hidden="true"
                                >
                                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                </svg>
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to={props.linkDashboardMen1}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinejoin="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-shopping-cart"
                                    aria-hidden="true"
                                >
                                    <circle cx="9" cy="21" r="1"></circle>
                                    <circle cx="20" cy="21" r="1"></circle>
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                </svg>
                                {props.men1}
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to={props.linkDashboardMen2}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinejoin="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-bar-chart-2"
                                    aria-hidden="true"
                                >
                                    <line
                                        x1="18"
                                        y1="20"
                                        x2="18"
                                        y2="10"
                                    ></line>
                                    <line x1="12" y1="20" x2="12" y2="4"></line>
                                    <line x1="6" y1="20" x2="6" y2="14"></line>
                                </svg>
                                {props.men2}
                            </Link>
                        </li>
                        {addAuctions(props.addAuct)}
                    </ul>
                </div>
            </nav>
        </>
    );
}
