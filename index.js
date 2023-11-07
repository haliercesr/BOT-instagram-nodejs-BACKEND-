const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');

/*
const PORT = 443;
const { createCA, createCert } = require("mkcert");
const fs = require('fs');
const https = require('https');

const startServer = async () => {
// Create a CA certificate
const ca = await createCA({
  organization: "Hello CA",
  countryCode: "NP",
  state: "Bagmati",
  locality: "Kathmandu",
  validity: 365
});

// Create a server certificate
const cert = await createCert({
  ca: { key: ca.key, cert: ca.cert },
  domains: ["127.0.0.1", "localhost"],
  validity: 365
});

// Save the certificate and private key to files
fs.writeFileSync('server-cert.pem', cert.cert);
fs.writeFileSync('server-key.pem', cert.key);

const options = {
  key: fs.readFileSync('server-key.pem'),
  cert: fs.readFileSync('server-cert.pem')
};

const httpsServer = https.createServer(options, server);

conn.sync({ force: false }).then(() => {
httpsServer.listen(PORT, () => {
  console.log(`Server with HTTPS listening on port ${PORT}`) ;
})
}).catch(error => console.error(error))
}

startServer()*/

const PORT = 3004
conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`Server with HTTPS listening on port ${PORT}`) ;
  })
  }).catch(error => console.error(error))
  