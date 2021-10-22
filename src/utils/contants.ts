import 'dotenv/config';

export const ___prod___ = process.env.NODE_ENV === 'production';
export const API_BASE_URL = process.env.API_BASE_URL;
export const API_KEY_NAME = process.env.API_KEY_NAME;
export const API_KEY_VALUE = process.env.API_KEY_VALUE;

export type RequestMethods = 'delete' | 'patch' | 'post' | 'put';
