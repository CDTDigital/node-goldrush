'use strict';

const fs    = require('fs');
const path  = require('path');
const Mocha = require('mocha');
let mocha   = new Mocha();
let server  = require('./');

let dir = path.resolve(__dirname + '/acceptance');

function loadTestFiles(currentDir) {
  let files = fs.readdirSync(currentDir);

  files.forEach(function(file) {
    let fullPath = path.join(currentDir,file);
    if (fs.statSync(fullPath).isDirectory()) {
      getTestFiles(fullPath);
    }
    else if (file.match(/test\.js$/)) {
      mocha.addFile(fullPath);
    }
  });
}

loadTestFiles(dir);

// start and stop the server
mocha.run(function(failures){
  process.exit(failures);  // exit with non-zero status if there were failures
});

