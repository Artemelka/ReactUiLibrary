import express from 'express';
import os from "os";

export const getUserName = express.Router();

const NOT_FOUND = 'not found';

getUserName.get('/', (request, response) => {
    const { name } = request.query;
    const username = name === 'tim' ? os.userInfo().username : NOT_FOUND;

    return response.json({ username });
});

getUserName.post('/', (request, response) => {
    const { data } = request.body;
    const username = data.userName === 'Tim' ? os.userInfo().username : NOT_FOUND;

    return response.json({ username });
});
