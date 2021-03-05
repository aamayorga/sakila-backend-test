const { expect } = require('chai')
const db = require('../models/index')
const syncAndSeed = require('../syncAndSeed')
const app = require('supertest')(require('../app'))

describe('sakila Test', ()=> {
  let seed

  beforeEach( async function() {
    seed = await syncAndSeed()
  })

  describe('Routes', ()=> {
    it('Server returns films', ()=> {
      return app.get('/api/film')
        .expect(200)
        .then( response => {
          expect(response.body.length).to.equal(3)
        })
    })
    it('Server returns actors', ()=> {
      return app.get('/api/actor')
        .expect(200)
        .then( response => {
          expect(response.body.length).to.equal(3)
        })
    })
    it('Server post actor', ()=> {
      return app.post('/api/actor')
        .send({ first_name: "Adam", last_name:"Driver" })
        .expect(201)
        .then( response => {
          expect(response.body.first_name).to.equal("ADAM")
          expect(response.body.last_name).to.equal("DRIVER")
        })
    })
    it('Server post film', ()=> {
      return app.post('/api/film')
        .send( { title: "Star Wars Episode VII", description:"A spherical-shaped robot gets caught up in an intergalactic war", release_year: "2015", language_id: 1, original_language_id: null, rental_duration: 4, rental_rate: 0.89, length: 135, replacement_cost: 12.99, rating: "PG", special_features: "Trailers" } )
        .expect(201)
        .then( response => {
          expect(response.body.title).to.equal("Star Wars Episode VII")
          expect(response.body.release_year).to.equal("2015")
        })
    })
    it('Assign actor to film', ()=> {
      return app.post(`/api/actor/${seed.actors.actor1.actor_id}`)
        .send( { film_id: 2 } )
        .expect(201)
        .then( response => {
          expect(response.body.actor_id).to.equal(1)
          expect(response.body.film_id).to.equal(2)
        })
    })
    it('Assign film to actor', ()=> {
      return app.post(`/api/film/${seed.films.film1.film_id}`)
        .send( { actor_id: 2 } )
        .expect(201)
        .then( response => {
          expect(response.body.actor_id).to.equal(2)
          expect(response.body.film_id).to.equal(1)
        })
    })
  })

  describe('Model Validation', ()=> {
    describe('Actor', ()=> {
      it('First and Last name is all caps', async ()=> {
        const actor = await db.actor.create({ first_name: "bob", last_name: "bill" })
        expect(actor.first_name).to.equal("BOB")
        expect(actor.last_name).to.equal("BILL")
      })
    })
  })

})
