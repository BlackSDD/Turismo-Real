const cnx = {
    user: 'TurismoReal1',
    password: '1234',
    server : 'DESKTOP-CAJFOG6',
    database: 'TurismoReal',
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true, // change to true for local dev / self-signed certs
      },
}

module.exports = cnx;

// server matias: 'MATITA-PC'
// server cristian: 'DESKTOP-CAJFOG6'
// server jesus: 'LAPTOP-ID9I44CE'