import axios from "axios";
import { urlBack } from './ConexionBackEnd';

const getall = () =>{
    const request = axios.post(urlBack + 'users');
    return request.then(response => response.data).catch('A ocurrido un error')
}

const getOne = filterID =>{
    const request = axios.post(urlBack + 'credenciales', filterID);
    return request.then(response => response.data).catch('A ocurrido un error')
}

const create = newObject =>{
    console.log('Entre aqui')
    const request = axios.post(urlBack + 'registrar', newObject);
    return request.then(response => response.data).catch('A ocurrido un error')
}

const update = (id, newObject) =>{
    const request = axios.put(`${urlBack + 'credenciales'}/${id}`, newObject);
    return request.then(response => response.data).catch('A ocurrido un error')
}

export { update, create, getall, getOne };