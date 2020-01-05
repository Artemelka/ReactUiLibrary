import React from 'react';
import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { request } from '../app/utils';
import { HTTP_STATUSES } from '../app/constants';

const GET_URL_RESOLVE = 'https://api.com/success';
const GET_URL_REJECT = 'https://api.com/reject';
const POST_URL = 'https://api.com/post';
const errorData = {
    error: 'SERVER_ERROR',
    error_description: 'error_description'
};
const fakeUser = {
    users: [{
        id: 1,
        name: 'John Smith'
    }]
};
const postConfig = {
    method: 'POST',
    data: { user: fakeUser.users[0] }
};
const callbackStatus = () => ([HTTP_STATUSES.OK, fakeUser]);
const MockAdapter = new AxiosMockAdapter(axios);

describe('Test request', () => {
    beforeAll(() => {
        MockAdapter.onGet(GET_URL_RESOLVE).reply(callbackStatus);
        MockAdapter.onGet(GET_URL_REJECT).reply(HTTP_STATUSES.INTERNAL_ERROR, errorData);
        MockAdapter.onPost(POST_URL).reply(HTTP_STATUSES.OK, {user: fakeUser.users[0]});
    });
    test('Expect correct send GET', (done) => {
        request(GET_URL_RESOLVE)
            .then(response => {
                expect(response).toEqual(fakeUser);
                done();
            });
    });
    test('Expect correct send POST', (done) => {
        request(POST_URL, postConfig)
            .then((response: {[key: string]: any}) => {
                expect(response.user).toEqual(fakeUser.users[0]);
                done();
            });
    });
    test('Expect correct error response', (done) => {
        request(GET_URL_REJECT)
            .catch((error) => {
                expect(error.response.data).toEqual(errorData);
                done();
            });
    });
});
