var express = require('express')
  , logger = require('morgan')
  , app = express()
  , template = require('jade').compileFile(__dirname + '/public/index.jade')

var fs=require("fs")
var jsonFile=fs.readFileSync("content-api.json")
var jsonObj=JSON.parse(jsonFile)


app.get('/', function (req, res, next) {
  try {
    var html = template({ title: 'Home',datajson:jsonObj.result.posts })
    res.send(html)
  } catch (e) {
    next(e)
  }
})

app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})