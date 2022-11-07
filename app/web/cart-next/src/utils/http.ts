import axios from 'axios';

const serverURL = 'http://web:8000';
const clientURL = 'http://localhost:3001';
const baseUrl = typeof window === 'undefined' ? serverURL : clientURL;

export const http = axios.create({
    baseURL: baseUrl
});