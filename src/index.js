const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;

app.use(morgan('combined'));

// rout
app.get('/', (req, res) => {
  res.send(    
    `<h1 style="color:red;">Hello world!</h1>`
  )
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});