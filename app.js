const express = require('express')
const bodyParser = require('body-parser')

var fs = require('fs')

const app = express()

const urlencodedParser = bodyParser.urlencoded({
  extended: false,
})

app.get('/checkuser', urlencodedParser, function (
  request,
  response
) {
  response.sendFile(__dirname + '/checkuser.html')
})
app.post('/checkuser', urlencodedParser, function (
  request,
  response
) {
  if (!request.body) return response.sendStatus(400)
  console.log(request.body)

  const data = fs.readFileSync('C:/Test/list.txt', 'utf8');

  if(data.indexOf(request.body.userName)==-1){
    response.send(`Пользователя ${request.body.userName}  нет`)
  }else
  response.send(`Пользователь ${request.body.userName}  есть`)
})

app.get('/', function (request, response) {
  response.send('Главная страница')
})

app.listen(3000)
