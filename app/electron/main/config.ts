import 'dotenv/config';

// Environment
export const node_env = process.env.NODE_ENV || 'development';

// API
export const API_URL = process.env.API_URL;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
