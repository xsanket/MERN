const express = require('express')
const bodyParser = require ('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({extended:true}))

app.get('/', function(req, res){
    res.sendFile(__dirname + "/calculator.html")
})


app.post('/', function(req, res){
    //res.send("hellowedfcwsdefc")
    let n1= Number(req.body.n1)
    let n2=Number(req.body.n2)
    let result = n1 + n2;
    res.send("addition is "+ result)

})


app.get('/about', function(req, res){
    res.send("<h3> Hello this is my first express project about me. Hopefully i beacome a good backend dev. :)</h3>")
});








app.listen(3000 ,function(){
    console.log('server is running')
});




