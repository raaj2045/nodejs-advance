const express = require('express');
const app = express();

const { Worker } = require('worker_threads');

app.get('/', (req, res) => {
    const worker = new Worker('./worker.js');

    worker.on('message', (message) => {
        console.log(`Received message from worker: ${message}`);
        res.send(`Hello World! ${message}`);
    });

    worker.postMessage('start');
});

app.get('/fast', (req, res) => {
    res.send('This is a fast response!');
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

