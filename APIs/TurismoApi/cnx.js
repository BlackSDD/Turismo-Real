const cnx = {
    user: 'TurismoReal1',
    password: '1234',

    server : 'MATITA-PC',

    database: 'TurismoReal',
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
      },
}

module.exports = cnx;

// server matias: 'MATITA-PC'
// server cristian: 'MATITA-PC'