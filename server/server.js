import express from 'express';

import path from 'path';
import config from 'config';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from "react-router";
import App from '../src/App';

const app = express();
const port = 3200;
const appName = "Express GOV UK React";

app.get('*', (req, res) => {
    const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
        <App />
    </StaticRouter> );
    const indexFile = path.resolve('./build/index.html');

    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Something went wrong');
        }

        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
        );
    });
});

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.listen(port, (err) => {
    if (err) throw err
    logger.info('Listening on port :port :appName', { port, appName })
});

