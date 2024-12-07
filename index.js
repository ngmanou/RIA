const express = require('express');
const app = express();
app.get('/', (req, res) => {
res.send('Hello From Node.js');
});
app.get('/contact', (req, res) =git init> {
res.send('The Contact Page');
});
app.get('/about', (req, res) => {
res.send('The About Page');
});
const PORT = 3000;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
}); .