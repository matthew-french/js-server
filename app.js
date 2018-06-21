//  https://codeelegant.github.io/2017/03/16/Vanilla-Node-js-Webserver/

"use strict";

class app {
     constructor() {
          this.loadServer();
     }

     loadServer() {
          const HTTP = require('http');
          const PORT = 8000;

          HTTP.createServer((request, response) => {
               response.writeHead(200, {'Content-Type': 'text/plain'});
               response.write(`Look at my website!`);
               response.end();
          }).listen(PORT);
     }
}

module.exports = app;
