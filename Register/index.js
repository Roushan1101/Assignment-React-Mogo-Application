var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))

const URI="mongodb+srv://roshan-admin:roshan-admin@cluster0.dn6ff.mongodb.net/moviesDB?retryWrites=true&w=majority"
mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

app.post("/sign_up",(req,res)=>{
    
    var name = req.body.name;
    var cid = req.body.cid;
    var skills = req.body.skills;
    

    var data = {
        "title":name,
        "genre":cid,
        "year":skills
    }

//collection name below mongodb Student->info

    db.collection('movies').insertOne(data,(err,collection)=>{
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('signup_success.html')

})


app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(4001);


console.log("Listening on PORT 4001");