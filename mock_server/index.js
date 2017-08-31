const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencodeds

app.use("/rest/session", require('./session/rest'));

app.use(function (req, res, next) {
    next({status: 404});
});
app.use(function (err, req, res, next) {
    if (err) {
        let message = 'something went wrong';
        let code = err.status;
        if (err.status === 404) {
            message = 'Seite nicht gefunden';
            code = 404;
        }
        res.status(code).send(message);
    }
    else {
        next(err);
    }
});

const hostname = 'localhost';
const port = 9001;
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});