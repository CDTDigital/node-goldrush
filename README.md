# Node.js Substrate

[![Build Status](https://travis-ci.org/CDTDigital/node-substrate.svg?branch=master)](https://travis-ci.org/CDTDigital/node-substrate) [![Code Climate](https://codeclimate.com/github/CDTDigital/node-substrate/badges/gpa.svg)](https://codeclimate.com/github/CDTDigital/node-substrate) [![Test Coverage](https://codeclimate.com/github/CDTDigital/node-substrate/badges/coverage.svg)](https://codeclimate.com/github/CDTDigital/node-substrate/coverage)

This is a base application for quickly building node applications using
our styles, React, JWT authentication for the API, and ...

## Setup

For development and test, the application uses `.env` files to populate
the environmental variables. And we use envars to ensure 12 factor
portability for our apps!

To setup your local environment copy the `.env.sample` file to `.env`:

    cp .env.sample .env

## Start the app

It is just an express app, and runs via a nmp script:

    npm start

## Development

This is meant to be a repository that can be copied and used for your
own starting place as a project:

1. Clone this repo into a new location and name
2. Blow away the `.git` repository so that you can start from scratch
3. Change the name in `package.json`
4. Change this README to reflect your goals and libraries

### CodeClimate

There is already a `.codeclimate.yml` setup that lints, looks for
duplication and complexity. In order to use CodeClimate as a pull
request hook, you need to pay for CodeClimate and add that repository to
the paid section, not the open source section!

As soon as you turn on the repository in CodeClimate you will see it
analyzing the code. Yay! To get the post commit hooks active, you
should follow instructions under in github menu for integrations on
the repositories.

### Travis CI setup

There is already a `.travis.yml` file included in the project. To get
fully up and running:

1. Setup the instance variable required for the app in Travis
2. Add the token from CodeClimate so that test coverage reporting is
   radiated to that dashboard.
3. Change the Travis coverage markup at the top of this README

## Testing

Unit/integration tests are via [mocha](https://mochajs.org/). If using the `assert`
module is too low level. Feel free to add in some `chai` and `sinon`.

These tests can be run via an npm script:

    `npm run test:server`


