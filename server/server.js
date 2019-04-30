const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

const db = require('./queries');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (req, res) => {
    res.json({data: "Nerf the boot"});
});

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUser);
app.post('/users', db.createUser);
app.delete('/users/:id', db.deleteUser);
app.put('/users/:id', db.updateUser);

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));