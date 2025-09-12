const express = require('express');
const cors = require('cors');
const PORT = 3002;

const crmRoutes = require('./routers/crmRoutes');

const validateClaim = require('./routers/crmRoutes');


const fetchExternalApi = require('./routers/crmRoutes');



const app = express();

app.use(express.json());
app.use(cors());



// app.use((req, res, next) => {
//   console.log('Request headers:', req.headers);
//   next();
// });

/* this will display on the browser  on Port : 3002 */
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});




app.use('/', crmRoutes);

app.use('/', validateClaim);

app.use('/github', fetchExternalApi);





app.listen(PORT, ()=>{
    console.log(`Server is running at port:  ${PORT}`)
})

module.exports =app;