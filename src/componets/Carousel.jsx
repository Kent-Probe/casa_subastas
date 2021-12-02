import React from 'react';



export default function Carousel(){

    return (
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" className="active" aria-current="true"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item">
          <img src="https://cdn.pixabay.com/photo/2017/09/26/14/48/cow-2788835__340.jpg" className="bd-placeholder-img img-fluid" width="100%" height="100%" alt="img" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>
  
          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Andres Medrano</h1>
              <p>Some representative placeholder content htmlFor the first slide of the carousel.</p>
              <p><a className="btn btn-lg btn-primary" href={"https://es.reactjs.org/"}>Leer mas</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://cdn.pixabay.com/photo/2016/07/11/08/29/cow-1509258__340.jpg" className="bd-placeholder-img img-fluid" width="100%" height="100%" alt="img" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>
  
          <div className="container">
            <div className="carousel-caption">
              <h1>Kevin Hernandez.</h1>
              <p>Some representative placeholder content htmlFor the second slide of the carousel.</p>
              <p><a className="btn btn-lg btn-primary" href={"https://es.reactjs.org/"}>Leer mas</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item active">
          <img src="https://cdn.pixabay.com/photo/2019/06/24/07/24/animals-4295395__340.jpg" className="bd-placeholder-img  img-fluid" width="100%" height="100%" alt="img" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"/>
  
          <div className="container">
            <div className="carousel-caption text-end">
              <h1>EQUIPO 3:Kevin,Leonardo,Leonel y Andres.</h1>
              <p>Some representative placeholder content htmlFor the third slide of this carousel.</p>
              <p><a className="btn btn-lg btn-primary" href={"https://es.reactjs.org/"}>Leer mas</a></p>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
        
      </button>
    </div>
    );
};