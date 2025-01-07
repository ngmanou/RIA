const express = require('express');
const morgan = require('morgan');

const app =express();
app.set('views','./view');
app.set('view engine', 'ejs');
app.get('/', (req, res) =>{
res.render('index',{ message: 'Hello From Node.js'});
});
app.get('/contact', (req, res) => {
res.render('index',{message:'The Contact Page' });
});
app.get('/about', (req, res) => {
res.render('index',{ message: 'The About Page'});
});
app.get('*',(req ,res) =>{
});
res.status(404).render('index',{message:'NOT Found'});
const PORT = 3000;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
}); 