const express = require('express');
const bodyParser = require('body-parser');
const expressSession = require('express-session');
const morgan = require('morgan');
const path = require('path');
const app = express();
// const dds =  require("./tests/generateDummyData");
// const {generateDemoData} =  require("./tests/generateDemoData");
const PORT = process.env.PORT || 8000;



// // start up the server
// app.listen(PORT, () => console.log(`Listening on ${PORT}`));

