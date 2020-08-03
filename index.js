const express = require ('express')
const app = express();
const parkingTicket = require('./routes/parkingticket');
require('dotenv').config();
const { builtinModules } = require('module');
app.use(express.json());

const router = require('./routes/unparkcar');
//var s = []
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening on  ${port}`));






app.use('/parkingticket', parkingTicket)

module.exports = router