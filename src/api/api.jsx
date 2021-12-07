const getURL = (recurso = null) =>
    new URL(`http://localhost:5000/${recurso}`);

export const Listar = async(params) => {
    const recurso = getURL('user')
    //recurso.search = new URLSearchParams(params).toString();  // Creando el querystring
    const resultados = await fetch(recurso);  // fetch instrucción JavaScript para realziar peticiones HTTP
    console.log(resultados.json())
    return resultados.json();
}

export const Detalle = async(recurso) => {
    const resultados = await fetch(recurso);
    return resultados.json();
}