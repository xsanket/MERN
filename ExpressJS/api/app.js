const express = require('express')
const https = require('https')
const app = express();
const port=3000


app.get("/", function(req, res){
   res.send("Hello");
    const url ="https://v2.jokeapi.dev/joke/Programming?blacklistFlags=religious,political,racist,sexist,explicit";

        https.get(url, function(response){
            console.log(response.statusCode);


            response.on("data", function(data){
                const joke = JSON.parse(data);
                console.log(joke);
                // const set= joke;
                // console.log(set);
                res.send(joke);
            })
            // const object={
            //     name:"sanket",
            //     age: 23

            // }

            // console.log(JSON.stringify(object));
            
        })

        



})





app.listen(3000, function(){
    console.log("running")
})