const express = require('express');
// const res = require('express/lib/response');
// const async = require('hbs/lib/async');
// const { response } = require('../app');
const router = express.Router();
const MovieModel = require('../models/Movie.model');


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));



/*LISTAR PELICULAS*/

router.get("/movies", (req, res, next) => {


/*BUSCAR PELICULAS*/

    MovieModel.find()
    .then((moviesArr) => {
        console.log(moviesArr)

/*RENDERIZAR VISTA*/

    res.render("movies" , {
        movies: moviesArr
    });

    })
    .catch((err) => {
        console.log(err)

    })
});


//LISTAR y RENDERIZAR FICHA

router.get("/movie/:movieId", (req, res, next) => {

const {movieId} = req.params

MovieModel.findById(movieId)

    .then((movieFichas) => {

        console.log(movieFichas)

res.render("movie-fichas" , {

    movie : movieFichas
});

})
.catch((err) => {
    console.log(err)

    })
})






module.exports = router;
