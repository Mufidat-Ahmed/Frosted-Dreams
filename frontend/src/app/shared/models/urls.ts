import { environment } from '../../../environments/environment';
//const BASE_URL = 'http://localhost:5000';
export const BASE_URL = environment.baseUrl;

export const DATA_URL = BASE_URL + '/api/data';
export const SEARCH_URL = (searchTerm: string) => `${DATA_URL}/search/${searchTerm}`;

export const BAKE_BY_ID_URL = DATA_URL + '/';


export const LOGIN_URL = BASE_URL + '/api/users/login';
export const REGISTER_URL = BASE_URL + '/api/users/register';

export const ORDER_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDER_URL + '/create';