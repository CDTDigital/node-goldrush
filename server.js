'use strict';

const fs      = require('fs');

const express = require('express');
const server  = express();

const layout  = fs.readFileSync(__dirname + '/server/templates/layout.html').toString();

server.use(express.static('public'));
server.get('/', (req, res) => {
  res.send(layout);
});

module.exports = server;
