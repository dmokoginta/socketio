
const express = require('express');
const app = express();
const io = require('socket.io')(app.listen(3000),{cors:{origin:'*'}});

// io.on('connection', socket=> {
  // console.log('connection received')
  // socket.emit('message', 'Hellow world')

  // socket.on('reply', (msg)=> {
  //   console.log(msg);
  // });
// })

// To get the JSON from request body
app.use(express.json());

app.use(function(req,res,next){
  req.io = io
  next();
});

app.get('/', (req, res) => {
  res.send('<h1>Quinos POS</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About page</h1>');
});

// For testing connection
app.get('/test', (req, res) => {
  res.send({success:true});
});

app.post('/broadcast/:token/:outlet', (req,res)=>{
  console.log(req.params.token + '_' + req.params.outlet);
  console.log(req.body);
  res.send(req.body);
  req.io.sockets.emit(req.params.token + '_' + req.params.outlet, req.body);
});




