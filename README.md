# Node.js Substrate

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
