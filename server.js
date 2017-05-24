'use strict';

const fs      = require('fs');

const express = require('express');
const server  = express();

const layout  = fs.readFileSync(__dirname + '/server/templates/layout.html').toString();

server.get('/', (req, res) => {
  res.send(layout);
});

module.exports = server;
