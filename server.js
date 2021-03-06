//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(path.join('./dist/new-H-LLS')));

app.get('/*', (req, res) =>
    res.sendFile(path.join('index.html', {root: 'dist/new-H-LLS/'})),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
