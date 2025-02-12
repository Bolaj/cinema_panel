const express = require ("express")
const orphanageRoutes = express.Router()
const orphanageController = require ("../controllers/orphanageController")
const expenseController = require ("../controllers/expenseController")


orphanageRoutes.post('/', orphanageController.addOrphanage)
orphanageRoutes.get('/', orphanageController.getAllOrphanages)
orphanageRoutes.get('/:id', orphanageController.getOrphanageDetails)
orphanageRoutes.post('/expenses', expenseController.addExpense)
orphanageRoutes.get('/expenses/:orphanageId', expenseController.getExpensesForOrphanage)



module.exports = orphanageRoutes