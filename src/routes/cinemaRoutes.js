const express = require ("express")
const cinemaRoutes = express.Router()
const CinemaController = require ("../controllers/cinemaController")
  
  cinemaRoutes.post('/', CinemaController.addCinema);
  
  cinemaRoutes.get('/', CinemaController.getAllCinemas);
  
  cinemaRoutes.get('/:id', CinemaController.getCinemaById);

module.exports = cinemaRoutes