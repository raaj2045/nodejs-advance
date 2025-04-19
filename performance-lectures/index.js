// process.env.UV_THREADPOOL_SIZE = 1; // Set the thread pool size to 1
// const cluster = require('cluster');

// if(cluster.isMaster){
//     // cause index.js to be executed *again* 
//     // but in child mode
//     cluster.fork();
// }else{
//     // This is the child mode, where the server will run
//     const express = require('express');
//     const crypto = require('crypto');
//     const app = express();
    
//     app.get('/', (req, res) => {
//         crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', (err, key) => {
//             res.send('Hello World!');
//         });
//     });
    
//     app.listen(3000, () => {
//         console.log('Server is running on http://localhost:3000');
//     });
// }

const express = require('express');
const crypto = require('crypto');
const app = express();

app.get('/', (req, res) => {
    crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', (err, key) => {
        res.send('Hello World!');
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
