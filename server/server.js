// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const PORT = process.env.PORT || 5001;
// // const pool = require('pool');
// const itemRouter = require('./routes/shopping.list.router');

// /** ---------- MIDDLEWARE ---------- **/
// app.use(bodyParser.json()); // needed for axios requests
// app.use(express.static('build'));

// /** ---------- EXPRESS ROUTES ---------- **/
// // Create your API routes in a separate file
// // and plug them in here with `app.use()`
// app.use('/database', itemRouter);
// //app.use('/treats', treats);
// /** ---------- START SERVER ---------- **/
// app.listen(PORT,  () => {
//     console.log('Listening on port: ', PORT);
// });

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5001;
const itemRouter = require('../server/routes/shopping.list.router');

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
// Create your API routes in a separate file
// and plug them in here with `app.use()`
app.use('/api/shoppingList', itemRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});
