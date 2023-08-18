/* This express server is used to serve the files from the /build folder. */
const express = require( 'express' );
const serveStatic = require( 'serve-static' );

const PORT = 3000;
const app = express();
app.use( serveStatic( __dirname + '/src' ) );


app.listen( PORT, '0.0.0.0' );
module.exports = app;