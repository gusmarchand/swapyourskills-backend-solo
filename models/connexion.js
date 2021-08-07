var mongoose = require('mongoose');

var options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useUnifiedTopology : true
 }
 mongoose.connect('mongodb+srv://swapadmin:GyXzx0NLI9w0UAzB@cluster0.pjzxn.mongodb.net/sysdatabase?retryWrites=true&w=majority', 
    options,         
    function(err) {
     console.log(err || "MongoDb connecté");
    }
 );