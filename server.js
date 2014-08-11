var app = require('express')();
var chat = {};
app.set('view engine','ejs');
app.get('/', function(req, res){
  res.render('index');
});
app.get('/r/:rmname', function(req, res) {
  res.render('room',{name: req.params.rmname});
}); 
app.get('/chat', function(req, res){
  console.log(req.query);
  if(typeof req.query.rmname == 'string'){
  if(typeof chat[req.query.rmname] !== 'object'){
    chat[req.query.rmname] = [];
    chat[req.query.rmname].push({username: req.query.username, chat: req.query.chat});
  }
  else{ chat[req.query.rmname].push({username: req.query.username, chat: req.query.chat});};
  console.log(chat);};
  res.send('success');
});
app.get('/getchat', function(req, res){
  res.send(chat[req.query.rmname]);
});
app.listen('3001');
