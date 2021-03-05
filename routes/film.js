const express = require('express')
const router = express.Router()
const film = require('../controllers/film')

router.get('/api/film', film.getFilms)
router.post('/api/film', film.postFilm)
router.post('/api/film/:id', film.makeFilmActorRelation)

module.exports = router
