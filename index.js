const express = require('express');
const Gun = require('gun');

const app = express();
const port = process.env.PORT || 8080;

app.use(Gun.serve);

const server = app.listen(port, () => {
    console.log(`Manoj Sir ka GunDB Server chal raha hai port: ${port} par!`);
});

Gun({ web: server });
