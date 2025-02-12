const Orphanage = require ("../models/orphanageModel")
const Expense = require ("../models/expenseModel")

exports.addOrphanage = async (req, res) => {
    try {
        const { orphanageName, location, itemsDonated } = req.body
        const newOrphanage = new Orphanage({
            orphanageName,
            location,
            itemsDonated

        })
        await newOrphanage.save()
        res.status(201).send("Orphanage Added Successfully")


    } catch (err) {
        console.log("An error has occured")
        res.status(500).json({ message: err.message })
    }
}
exports.getAllOrphanages = async (req, res) => {
    try {
        const orphanages = await Orphanage.find({})
        res.json(orphanages);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error fetching orphanages")
    }
}
exports.getOrphanageDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const orphanage = await Orphanage.findById(id).populate('itemsDonated');

        if (!orphanage) {
            return res.status(404).send("Orphanage not found");
        }

        // Get total expenses
        const expenses = await Expense.find({ orphanageId: id });
        const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0)

        res.json({
            orphanage,
            totalSpent,
            expenses
        });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving orphanage details")
    }
}