import express from 'express';
import os from "os";

export const getUserName = express.Router();

const NOT_FOUND = 'not found';

getUserName.get('/', (request, response) => {
    const info = os.userInfo();
    const username = request.query.name === 'tim' ? info.username : NOT_FOUND;

    return response.send({ username });
});

getUserName.post('/', (request, response) => {
    const { data } = request.body;

    return response.send({status: 'OK'})
});
