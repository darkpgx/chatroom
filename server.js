var app = require('express')();
var chat = [];
app.set('view engine','ejs');
app.get('/', function(req, res){
  res.render('index');
});
app.get('/chat', function(req, res){
  chat.push({username: req.query.username, chat: req.query.chat});
  res.send('success');
});
app.get('/getchat', function(req, res){
  res.send(chat);
});
app.listen('3001');
