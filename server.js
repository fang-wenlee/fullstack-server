const express = require('express');
const cors = require('cors');
const PORT = 3002;

const crmRoutes = require('./routers/crmRoutes');



const app = express();

app.use(express.json());
app.use(cors());


// app.use((req, res, next) => {
//   console.log('Request headers:', req.headers);
//   next();
// });




app.use('/', crmRoutes);






app.listen(PORT, ()=>{
    console.log(`Server is running at port:  ${PORT}`)
})

module.exports =app;