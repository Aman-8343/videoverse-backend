const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.get('/hero',(req,res)=>{
    res.send('heroo is here');
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening on port 3000');
});
