const crypto = require('crypto');

const { parentPort } = require('worker_threads');

parentPort.on('message', (message) => {
    if (message === 'start') {
        crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', (err, key) => {
            parentPort.postMessage('done');
        });
    }
});