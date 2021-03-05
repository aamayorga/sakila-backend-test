const db = require('../models/index');

module.exports.getFilms = (req, res, next) => {
  db.film.findAll()
    .then( items => res.send(items))
    .catch(next)
}

module.exports.postFilm = (req, res, next) => {
  db.film.create(req.body)
    .then( items => res.status(201).send(items))
    .catch(next)
}

module.exports.makeFilmActorRelation = (req, res, next) => {
  req.body["film_id"] = parseInt(req.params.id)
  db.film_actor.create(req.body)
    .then( items => {
      res.status(201).send(items)
    })
    .catch(next)
}
