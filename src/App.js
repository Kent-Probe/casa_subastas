//Modulos de estilos
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './assets/css/templatemo.min.css';
import './assets/css/templatemo.css';

import './assets/css/estilos.css';
import './assets/css/carousel.css';

//Importar Script
import '../node_modules/bootstrap/dist/js/bootstrap.js';

//Importar componentes
import NavbarC from './componets/NavbarC';
import Carousel from './componets/Carousel';
import Card from './componets/Card';
import AuctionE from './componets/AuctionE';
import SectionInfor from './componets/SectionInfor';
import Footeer from './componets/Footer';

//Importar el manejador de rutas para react
import { BrowserRouter as R } from "react-router-dom";

function App() {
    return (
        <div>
            <R>
                <NavbarC/>
                <Carousel/>
                <Card/>
                <AuctionE/>
                <SectionInfor/>
                <Footeer/>
            </R>
        </div>
    );
}

export default App;
