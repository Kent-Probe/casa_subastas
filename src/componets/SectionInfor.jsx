import React from 'react';

export default function SectionInfor(){

    return (
        <div className='container-grid'>

        <hr className="featurette-divider "/>
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fst-italic text-success">TERNERO DE LEVANTE.</h2>
            <p className="lead">Some great placeholder content htmlFor the first featurette here. Imagine some exciting prose here.</p>
          </div>
          <div className="col-md-5">
            <img src='../assets/img/vaca3.jpg' alt="img"  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500"  />
    
          </div>
        </div>
    
        <hr className="featurette-divider"/>
    
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fst-italic text-success">NOVILLAS HOLSTEIN POR GYR</h2>
            <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
          </div>
          <div className="col-md-5 order-md-1">
            <img src="../assets/img/vaca3.jpg" alt="img" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" />
    
          </div>
        </div>
    
        <hr className="featurette-divider"/>
    
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fst-italic text-success">NOVILLA BRAHMAN ROJO CON REGISTRO </h2>
            <p className="lead">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem adipisci laudantium minima commodi id omnis magni fugit ut sint laboriosam?</p>
          </div>
          <div className="col-md-5">
            <img src="../assets/img/vaca3.jpg" alt="img" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" />
    
          </div>
        </div>
        <hr className="featurette-divider"/>

    </div>
        
    
        
    );
};