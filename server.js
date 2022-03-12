const express = require('express');
const apiRoute = require('./routes/apiRoute')
const htmlRoute = require('./routes/htmlRoute');


const app = express();

//const PORT = process.env.PORT || 5000;
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoute);
app.use('/', htmlRoute);


//app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));