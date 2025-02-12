const Cinema = require("../models/cinemaModel")

exports.addCinema = async (req, res) => {
  console.log(req.body); 
  try {
    const { name, location, screenings, attendees, revenue } = req.body

    const newCinema = new Cinema({
      name,
      location,
      screenings,
      attendees,
      revenue
    })

    const savedCinema = await newCinema.save()
    res.status(201).json(savedCinema)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.getAllCinemas = async (req, res) => {
  try {
    const cinemas = await Cinema.find()
    res.status(200).json(cinemas)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.getCinemaById = async (req, res) => {
  try {
    const cinema = await Cinema.findById(req.params.id)
    if (!cinema) {
      return res.status(404).json({ message: 'Cinema not found' })
    }
    res.status(200).json(cinema)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
