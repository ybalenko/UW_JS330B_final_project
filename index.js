const server = require("./server");
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');



const port = process.env.PORT || 8000;

mongoose.connect('mongodb://127.0.0.1:27017/jscript-330-final-project', {}).then(
    () => {
        server.listen(port, () => {
            console.log(`Server is listening on http://localhost:${port}`);
        });
    },
    err => { console.error("failed to connect to the database: ", err) }
).catch((e) => {
    console.error(`Failed to start server:`, e);
});
mongoose.set('debug', true);