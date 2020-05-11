const config = {
    server: '.',
    database: 'DB_A1A66B_learning',
    driver: 'msnodesqlv8',
    options: {
        // encrypt: false, // Use this if you're on Windows Azure
        trustedConnection: true
    }
};

module.exports = config;
