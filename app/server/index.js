/**
 * Created by Rach on 10/2/2018.
 */
import app from './app';

const port = process.env.PORT || 8080;

app.listen(port);
console.log(`Listening at http://localhost:${port}`);
