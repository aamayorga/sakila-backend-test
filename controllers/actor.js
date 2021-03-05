const db = require('../models/index');

module.exports.getActors = (req, res, next) => {
  db.actor.findAll()
    .then( items => res.send(items))
    .catch(next)
}

module.exports.postActor = (req, res, next) => {
  console.log(req.body)
  db.actor.create(req.body)
    .then( items => res.status(201).send(items))
    .catch(next)
}

module.exports.makeFilmActorRelation = (req, res, next) => {
  req.body["actor_id"] = parseInt(req.params.id)
  db.film_actor.create(req.body)
    .then( items => {
      res.status(201).send(items)
    })
    .catch(next)
}
