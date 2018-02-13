/**
 * Created by Rach on 10/2/2018.
 */
import { renderToString,ReactDOMServer } from 'react-dom/server'
import React from 'react';
import { StaticRouter } from 'react-router'
import { matchPath } from 'react-router-dom';

import routes from './routes';
import renderFullPage from './renderFullPage';
import App from '../components/App';

export default function router(req, res) {

    const match = routes.reduce((acc, route) => matchPath(req.url, { path: route, exact: true }) || acc, null);

    if (!match) {
        res.status(404).send('page not found');
        return;
    }

    const context = {}

    const html = renderToString(
        <StaticRouter location={req.url} context={context}>
            <App />
        </StaticRouter>
    )

    return   res.status(200).send(renderFullPage(html));

};
