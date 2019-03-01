import express from 'express';
import os from "os";

export const getUserName = express.Router();

const NOT_FOUND = 'not found';

getUserName.get('/', (req, res) => {
    const info = os.userInfo();
    const username = req.query.name === 'tim' ? info.username : NOT_FOUND;

    return res.send({ username });
});
