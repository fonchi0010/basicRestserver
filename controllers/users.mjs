import { request, response } from 'express';

export const usersGet = (request, response) => {

    const {q, nombre, apikey} = request.params;

    response.json({
        msg: 'get API - Controller',
        q,
        nombre,
        apikey
    });
}

export const usersPut = (request, response) => {

    const {id} = request.params; 

    response.json({
        msg: 'put API - Controller',
        id
    });
}

export const usersPost = (request, response) => {

    const {nombre, apellido, edad, estado_civil} = request.body;

    response.json({
        msg: 'post API - Controller',
        nombre,
        apellido,
        edad,
        estado_civil,
    });
}

export const usersDelete = (request, response) => {
    response.json({
        msg: 'delete API - Controller'
    });
}

export const usersPatch = (request, response) => {
    response.json({
        msg: 'patch API - Controller'
    });
}