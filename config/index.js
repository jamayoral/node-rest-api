return process.env.NODE_ENV ? require('dotenv').config({ path: './environment/.env.' + env }) : require('dotenv').config({ path: './environment/.env.dev' });