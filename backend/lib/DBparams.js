require('dotenv').config();

async function getParams() {
    const params = {
        user: 'root',
        password: '1234',
        database: 'storybook',
        host: 'localhost',
        dialect: 'mysql'
    };


    return params;
}

module.exports = { getParams };