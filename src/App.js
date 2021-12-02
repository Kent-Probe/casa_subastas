//Modulos de estilos
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './assets/css/templatemo.min.css';
import './assets/css/templatemo.css';

import './assets/css/estilos.css';
import './assets/css/carousel.css';

//Importar Script
import '../node_modules/bootstrap/dist/js/bootstrap';

//Importar componentes
import NavbarC from './componets/NavbarC';


//Importar el manejador de rutas para react
import { BrowserRouter as R } from "react-router-dom";

function App() {
    return (
        <div>
            <R>
                <NavbarC/>
            </R>
        </div>
    );
}

export default App;
