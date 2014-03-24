var config = {
    development: {
        mode: 'development',
        port: 9000
    },
    staging: {
        mode: 'staging',
        port: 4000
    },
    production: {
        mode: 'production',
        port: 8080
    }
}
module.exports = function(mode) {
    return config[mode || process.argv[2] || 'development'] || config.development;
}