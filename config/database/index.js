module.exports = {
    development: {
        database: 'starter',
        username:'root',
        password:'root',
        options: {
            port: 3306,
            adaptor: 'mysql',
            host: '127.0.0.1'
        }
    },
    staging: {
        database: 'ngo',
        username:'root',
        password:'root',
        port: 3306,
        adaptor: 'mysql',
        host: '127.0.0.1'
    },
    production: {
        database: 'ngo',
        username:'root',
        password:'root',
        port: 3306,
        adaptor: 'mysql',
        host: '127.0.0.1'
    }
}
