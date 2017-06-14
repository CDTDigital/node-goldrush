'use strict';

const passportJWT = require("passport-jwt");

const ExtractJwt  = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey:    process.env.JWT_SECRET
};

const authorizedUsers = JSON.parse(process.env.JWT_USERS);

function findUser(jwtUsername) {
  return authorizedUsers.find((name) => {
    return name === jwtUser;
  }) || false;
}

module.exports = new JwtStrategy(jwtOptions, function(payload, next) {
  let user = findUser(payload.user);
  next(null, user);
});
