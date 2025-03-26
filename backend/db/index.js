const mongoose = require('mongoose');
//mongoose driver for connecting to databse

//cooncetion path(conncetion string) to the DataBase
mongoose
  .connect(
    'mongodb+srv://nittothomas94:Nitto123@cluster0.guv3w.mongodb.net/mini-ecom?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => console.log('DB Connected'))
  .catch(e => console.log(e));

module.exports = mongoose;
