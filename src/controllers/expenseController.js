const Expense = require ("../models/expenseModel")
const Orphanage = require("../models/orphanageModel")


exports.addExpense = async (req, res) => {
    try {
        const { orphanageId, description, amount } = req.body

        const newExpense = new Expense({
            orphanageId,
            description,
            amount
        })

        await newExpense.save()

        const orphanage = await Orphanage.findById(orphanageId)
        orphanage.totalSpent += amount
        await orphanage.save()

        res.status(201).send("Expense Added Successfully")
    } catch (err) {
        console.error(err)
        res.status(500).send("Error adding expense")
    }
}
exports.getExpensesForOrphanage = async (req, res) => {
    try {
        const { orphanageId } = req.params
        const expenses = await Expense.find({ orphanageId })

        res.json(expenses)
    } catch (err) {
        console.error(err)
        res.status(500).send("Error fetching expenses")
    }
}