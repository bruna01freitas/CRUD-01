const express = require('express');
const app = express();
app.set('view engine','ejs');
app.get('/',(req,res) =>{
    res.render('index.ejs');
});

app.post('/show', (req,res))

app.listen(3000, function(){
    console.log('server running on port 3000');
});
