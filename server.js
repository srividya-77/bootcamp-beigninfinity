const express = require('express');
const app = express();
const port = 5003;
// webserver
app.use(express.static("frontend"));
app.listen(port,function(){
    console.log("sucessfully running in http://localhost:"+port);
});