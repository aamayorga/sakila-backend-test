const express = require('express')
const router = express.Router()
const actor = require('../controllers/actor')

router.get('/api/actor', actor.getActors)
router.post('/api/actor', actor.postActor)
router.post('/api/actor/:id', actor.makeFilmActorRelation)

module.exports = router

