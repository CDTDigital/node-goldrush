'use strict';

let env  = process.env.APP_ENV || 'development';
let port = process.env.PORT || getPort(env);

function getPort(env) {
  return env === 'development' ? 3000 : 3333;
}

module.exports = {
  env: env,
  port: port
};

