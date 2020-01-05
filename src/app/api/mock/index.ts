import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import { mockLocalizationRequest } from './localization';

export const mockAllRequest = () => {
    const MockAdapter = new AxiosMockAdapter(axios);

    mockLocalizationRequest(MockAdapter);
    console.warn('=== server starting in mock mode ===', process.env.MOCK);
};
