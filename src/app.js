const express = require("express")

const cinemaRoutes = require ("./routes/cinemaRoutes")

const appRouter = express()

appRouter.use('/', cinemaRoutes);



module.exports = appRouter