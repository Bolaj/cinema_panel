const express = require("express")

const cinemaRoutes = require ("./routes/cinemaRoutes")
const bookRoutes = require ("./routes/bookRoutes")

const appRouter = express()

appRouter.use('/cinemas', cinemaRoutes)
appRouter.use('/library', bookRoutes )



module.exports = appRouter