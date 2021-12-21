import React, { useState, useEffect } from 'react';
import { getall } from "../services/User";

export default function Table(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        const resp = await getall();
        console.log(resp);
        setUsers(resp);
    };
    return(
        <>
           <div class="page-content page-container" id="page-content">
        <div class="padding">
            <div class="row container d-flex justify-content-center">
                <div class="col-lg-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Lista de usuarios</h4>
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th> usuario </th>
                                            <th> Nombres completo </th>
                                            <th> Numero de documento </th>
                                            <th> Rol </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        users.map((item) => (

                                            <tr>
                                                <td class="py-1"> <img src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="image"/> </td>
                                                <td> {item.username} </td>
                                                <td> {item.name} </td>
                                                <td> {item.user_id} </td>
                                                <td> {item.rol} </td>
                                            </tr>
                                        ))
                                    }  
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}