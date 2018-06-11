const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/form', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});

console.log('Server is running on', process.env.PORT || 3000, process.env.IP || '0.0.0.0');

app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0' );