const mongoose = require('./connection.js')

const ThemeSchema = new mongoose.Schema({
 dropDownTheme: String,
 writeInTheme: String
})

const themeCollection = mongoose.model('Theme', ThemeSchema)


//getAll
const getAllThemes = () => {
   return themeCollection.find({})
}

//getOne
const getOneTheme = (id) => {
    return themeCollection.findById({_id: id})
}

//create
const createTheme = (themeData) => {
    return themeCollection.create(themeData)
}

//update
const updateTheme = (id, themeData) => {
    return themeCollection.updateOne({_id: id}, themeData)
}

//delete
const deleteTheme = (id) => {
    return themeCollection.deleteOne({_id: id})
}

//deleteAll
const deleteAllTheme = (themeData) => {
    return themeCollection.deleteMany(themeData)
}




module.exports = {
   getAllThemes,
   getOneTheme,
   createTheme,
   updateTheme,
   deleteTheme,
   deleteAllTheme
  }