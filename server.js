const express = require("express"); 
const apiRoutes = require('./routes/apiROUT/index'); 
const htmlRoutes = require('./routes/htmlROUT/index');


const PORT = process.env.PORT || 5505; 
const app = express(); 

app.use(express.json()); 
app.use(express.static('public')); 
app.use(express.urlencoded({ extended: true })); 

app.use('/api', apiRoutes); 
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`); 
});