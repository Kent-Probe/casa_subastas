import React from 'react';


export default function Footer(){
    return (
        <footer className="container-fluid p-4 bg-success d-flex flex-row  justify-content-between" >
        <p className=" float-start text-white bd-highlight">© 2021 <a href={"https://es.reactjs.org/"} className="fw-bold text-decoration-none text-white">Suganar SA.</a> <a href={"https://es.reactjs.org/"} >Privacy</a> · <a href={"https://es.reactjs.org/"}>Terms</a></p>
        <div className='sociales'>
        <p className="float-end m-1 icon-facebook"><i className="fa fa-facebook-f text-white"></i></p>
        <p className="float-end m-1 icon-instagram"><i className="fa fa-instagram text-white"></i></p>
        <p className="float-end m-1 icon-twitter"><i className="fa fa-twitter text-white"></i></p>
        </div>

      </footer>
    );
};