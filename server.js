var express = require("express")
const ejs=require('ejs')
var mongoose = require("mongoose")
const app=express();

app.set('view engine', 'ejs');


const URI="mongodb+srv://roshan-admin:roshan-admin@cluster0.dn6ff.mongodb.net/moviesDB?retryWrites=true&w=majority"
mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
    
});

const moviesSchema = {
    title: String,
    genre: String,
    year: String
}

const Movie = mongoose.model('Movie', moviesSchema);

app.get('/', (req, res) => {
    Movie.find({}, function(err, movies) {
        res.render('index', {
            moviesList: movies
        })
    })
})

app.listen(4000, function() {
    console.log('server is running on port 4000');
})