const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const mongoose = require ("mongoose")

// for express
const app = express();
// for ejs
app.set('view engine', 'ejs');
//for bodyparser
app.use(bodyParser.urlencoded({
    extended:true
}))
//to use static files
app.use(express.static("public"));

// creating connection with mongoose
mongoose.connect("mongodb://127.0.0.1:27017/firstdb");

const articaleSchema={
    title: String,
    content : String
};

const Article=mongoose.model("Article", articaleSchema);


// app.get("/articles", function(req, res){

//     Atricle.find(function(err, getArticles){
//         if(!err){
//            // res.send(getArticles);
//            console.log(getArticles);
//         }
//         else{
//             res.send("there is error in your code"+ err);
//         }
//     });
// });

 //in above api mongoose 6 does not allowed to use callback
//function with find() method hence we are useing promises



// //GET
// //===================================================================
// app.get("/articles", function(req, res){
//     Article.find()// first it will create a query and then we can send the data
//     .then(getArticles =>{
//         console.log(getArticles);
//         res.send(getArticles);
//      })

//      .catch(err =>{
//         res.status(500).send("There is error" + err);
//      });
// });


// //POST
// //===================================================================

// app.post("/articles", function(req, res){
//     // console.log(req.body.title);
//     // console.log(req.body.content);

//     const saveArticles = new Article({
//         title: req.body.title,
//         content: req.body.content
//     });
//     // used .save() method and did not use callback function to handle exception as its depricated 
//     //used promises insted
//     saveArticles.save()
//         .then (() =>{
//             res.send("data added succesfully");
//         })
//         .catch(err=>{
//             res.send(err);
//         })
    
// });


// //DELETE Many()
// //===================================================================

// app.delete("/articles", function(req, res){

//     Article.deleteMany()

//     .then(()=>{
//         res.send("all data deleted successfully");
//     })
//     .catch((err=>{
//         res.status(500).send(err);
//     }))

// });


//DELETE single entry
//===================================================================

// app.delete("/articles/:id", function(req, res) {
//     const articleId = req.params.id;

//     console.log("Attempting to delete article with ID:", articleId);

//     Article.deleteOne({ _id: articleId })
//         .then(() => {
//             console.log("Article deleted successfully");
//             res.send("Article deleted successfully");
//         })
//         .catch((err) => {
//             console.error("Error deleting article:", err);
//             res.status(500).send(err);
//         });
// });



// using route app.route().get().post().delete()
//=====================================================================

app.route("/articles").get(function(req, res){
    Article.find()// first it will create a query and then we can send the data
    .then(getArticles =>{
        console.log(getArticles);
        res.send(getArticles);
     })

     .catch(err =>{
        res.status(500).send("There is error" + err);
     });
})
.post(function(req, res){
    // console.log(req.body.title);
    // console.log(req.body.content);

    const saveArticles = new Article({
        title: req.body.title,
        content: req.body.content
    });
    // used .save() method and did not use callback function to handle exception as its depricated 
    //used promises insted
    saveArticles.save()
        .then (() =>{
            res.send("data added succesfully");
        })
        .catch(err=>{
            res.send(err);
        })
    
})
.delete(function(req, res){

    Article.deleteMany()

    .then(()=>{
        res.send("all data deleted successfully");
    })
    .catch((err=>{
        res.status(500).send(err);
    }))

});


//=====================operation on perticular entry===================================

app.route("/articles/:titleName")

.get(function(req, res){
    Article.findOne({title : req.params.titleName})

    .then((requestedData)=>{
        if(!requestedData){
            res.status(404).send("No entry found");
        }
        else{
            res.send(requestedData);
        }
    })

    .catch((err=>{
        res.status(500).send(err);
    }));
})

.delete(function(req, res){
    Article.deleteOne({title: req.params.titleName})

    .then((requestedToDelete)=>{
        //in deleteOne() method does not throw error when it does not found the key
        // hence we are using deletedCount() method 
        if(requestedToDelete.deletedCount ==0){
            res.status(404).send("No entry found");
        }
        else{
            res.send("This entry has been deleted Successfully");
        }
    })

    .catch(( err=>{
        console.error("Error deleting article:", err);
        res.status(500).send("Error deleting article");
    }));
})

.put(function(req, res){
    
    const updateArticle={
        title: req.body.title,
        content: req.body.content
    };
   Article.findOneAndUpdate({title: req.params.titleName }, updateArticle)

   .then((updatedValue)=>{
        if(!updatedValue){
            res.status(404).send("entry not found");
        }
        else{
            console.log(updatedValue);
            res.send("entry updated successfully");
        }
   })

   .catch((err =>{
        res.status(500).send(err);
   }))


})

.patch(function(req, res){
        Article.updateOne({ title: req.params.titleName}, {$set: req.body})
   
    .then(() =>{
         res.send("article update successfully");
    })
    .catch((err)=>{
    res.status(500).send(err);
    })
});









app.listen(3000, function(){
    console.log("server is running");
})








