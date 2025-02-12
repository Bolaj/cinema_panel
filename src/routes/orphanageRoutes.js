const express = require ("express")
const orphanageRoutes = express.Router()
const orphanageController = require ("../controllers/orphanageController")

orphanageRoutes.post('/orphanage', orphanageController.addOrphanage)
orphanageRoutes.get('/orphanages', orphanageController.getAllOrphanages)
orphanageRoutes.get('/orphanages/:id', orphanageController.getOrphanageDetails)

module.exports = orphanageRoutes