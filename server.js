const express = require('express');
const htmlRoute = require('./routes/htmlRoute');
const apiRoute = require('./routes/apiRoute')


const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', htmlRoute);
app.use('/api', apiRoute);


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

