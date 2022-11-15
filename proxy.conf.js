const PROXY_CONFIG = [
  {
    context: ['/crud-angular-api/cursos'],
    target: 'http://localhost:8080/',
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;
