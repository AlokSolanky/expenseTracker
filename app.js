const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require("./utils/database");
const router = require('./routes/user_routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
// app.use(cors());


app.use('/api/expense',router);

// app.put('/api/expense/:id',(req,res)=>
// {
//   let id = req.params.id;
//   const {amount,name,type} = req.body;
//   Expense.update({amount,name,type},{where:{id:id}}).then(data=>
//     {
//       res.json(data);
//     })

// })
sequelize.sync().then(()=>
{
    app.listen(3000, () => {
      console.log("listening on 3000");
    });
})
