/**
 * Created by Rach on 10/2/2018.
 */
import path from 'path';
import express from 'express';
import cors from 'cors';

import router from './router';

const app = express();

const assets = express.static(path.join(__dirname, '../'));

app.use(cors());
app.use(assets);

app.use('/protected/*', (req,res)=> {
    res.status(500).send("Protected routes! Please login to access this!")
});

app.get('*', router);

export default app;
