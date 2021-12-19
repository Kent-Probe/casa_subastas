import axios from "axios";
import { urlBack } from './ConexionBackEnd';

const getall = () =>{
    const request = axios.post(urlBack + 'productos');
    return request.then(response => response.data).catch('A ocurrido un error')
}

const getOne = filterID =>{
    const request = axios.post(urlBack + 'producto', filterID);
    return request.then(response => response.data).catch('A ocurrido un error')
}

const create = newObject =>{
    console.log('Entre aqui')
    const request = axios.post(urlBack + 'producto', newObject);
    return request.then(response => response.data).catch('A ocurrido un error')
}

const update = (id, newObject) =>{
    const request = axios.put(`${urlBack + 'producto'}/${id}`, newObject);
    return request.then(response => response.data).catch('A ocurrido un error')
}

export { update, create, getall, getOne };