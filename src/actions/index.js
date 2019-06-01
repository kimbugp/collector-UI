import requests from 'axios' ;

export const BASE_URL = 'https://collector-staging.herokuapp.com';
export const SOCIAL_LOGIN_URL = `${BASE_URL}/api/users/social/`;
export const LOGIN_URL = `${BASE_URL}/api/users/login`;
export const HOUSES_URL = `${BASE_URL}/api/houses/`
export const TENANTS_URL = `${BASE_URL}/api/users/tenants`
export const USERS_URL = `${BASE_URL}/api/users/`



const axios = () => {
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    // Create instance
    let instance = requests.create(defaultOptions);

    // Set the AUTH token for any request
    instance.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access_token');
        config.headers.Authorization =`Bearer ${token}`;
        return config;
    });

    return instance;
};
export default axios()