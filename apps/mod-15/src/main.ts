/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import app from './app/app';

const port = +(process.env.port || 3000);
const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
