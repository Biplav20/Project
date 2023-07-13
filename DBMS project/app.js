const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const dbService = require('./dbService');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//create
app.post('/insert', (request, response)=>{
    const { address } = request.body;
    const { name } = request.body;
    const { roll } = request.body;
    const db = dbService.getDbServiceInstance();
    const result = db.insertNewName(roll, name, address);

  result.then(data=>response.json({success:true}))
  .catch(error=>console.log(error));

});
//read
app.get('/getAll', (request, response)=>{
    const db = dbService.getDbServiceInstance();
    const result = db.getAllData();
    result.then(data => response.json({
        data:data
    }))
    .catch(error=>console.log(error));
});
//update
//delete


app.listen(process.env.PORT, ()=> console.log('app is running'));