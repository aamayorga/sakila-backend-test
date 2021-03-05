const db = require('./models/index')

module.exports = async () => {
  await db.sequelize.sync({ force: true })

  const actors = [
    { actor_id: 1, first_name: "Mark", last_name:"Hamill" },
    { actor_id: 2, first_name: "Carrie", last_name: "Fisher" },
    { actor_id: 3, first_name: "Harrison", last_name: "Ford" }
  ]
  const [ actor1, actor2, actor3 ] = await Promise.all(actors.map(actor => db.actor.create(actor)))

  const films = [
    { film_id: 1, title: "Star Wars Episode IV", description:"Two peaceful bots get caught up in an intergalactic war", release_year: "1977", language_id: 1, original_language_id: null, rental_duration: 4, rental_rate: 0.89, length: 121, replacement_cost: 12.99, rating: "PG", special_features: "Trailers" },
    { film_id: 2, title: "Star Wars Episode V", description:"Two peaceful bots get caught up in an intergalactic war", release_year: "1980", language_id: 1, original_language_id: null, rental_duration: 5, rental_rate: 0.99, length: 125, replacement_cost: 14.99, rating: "PG", special_features: "Trailers" },
    { film_id: 3, title: "Star Wars Episode VI", description:"Two peaceful bots get caught up in an intergalactic war", release_year: "1983", language_id: 1, original_language_id: null, rental_duration: 6, rental_rate: 0.99, length: 131, replacement_cost: 11.99, rating: "PG", special_features: "Trailers" }
  ]
  const [ film1, film2, film3 ] = await Promise.all(films.map(film => db.film.create(film)))

  const film_actor = [
    { actor_id: 1, film_id: 3 },
    { actor_id: 1, film_id: 1 },
    { actor_id: 3, film_id: 3 },
    { actor_id: 3, film_id: 2 },
  ]
  const [ film_actor1, film_actor2, film_actor3 ] = await Promise.all(film_actor.map(f_a => db.film_actor.create(f_a)))


  return {
    actors: {
      actor1,
      actor2,
      actor3
    },
    films: {
      film1,
      film2,
      film3
    },
    film_actor: {
      film_actor1,
      film_actor2,
      film_actor3
    }
  }
}

