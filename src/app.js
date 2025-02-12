const express = require("express")

const cinemaRoutes = require ("./routes/cinemaRoutes")
const bookRoutes = require ("./routes/bookRoutes")
const orphanageRoutes = require ("./routes/orphanageRoutes")

const appRouter = express()

appRouter.use('/cinemas', cinemaRoutes)
appRouter.use('/library', bookRoutes )
appRouter.use('/orphanage', orphanageRoutes )




module.exports = appRouter