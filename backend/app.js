const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    const timestamp = new Date().toLocaleString();
    res.send(`${timestamp}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});