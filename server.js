const express = require('express');

const app = express();

app.get('/', (req,res) => {
    res.send('Hello from node');
});

const PORT = process.env.PORT ||5000;

app.listen(PORT, ()=> console.log(`Server runs on port ${PORT}`));