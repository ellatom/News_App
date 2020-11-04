let express = require('express');
let app = express();
let bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json())
app.use(cors());
 
require('./routes/users.routes.js')(app);
 
// Create a Server
app.listen(3030, function () {
 
  let host = 'localhost';
  let port = process.env.PORT || 3030;
 
  console.log("App listening at http://%s:%s", host, port)
 
});
//home/ellatom/Desktop/mongodb/mongodb-org-server_4.4.1_amd64/data/usr/bin/mongod --dbpath=
///home/ellatom/Desktop/mongodb-data