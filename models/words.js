const mongoose = require('./connection.js')

const WordSchema = new mongoose.Schema({
  set: String,
  mammal: String,
  object: String,
  verb: String,
  adjective: String,
  number: Number
})


const wordCollection = mongoose.model('Word', WordSchema)


//getAll
const getAllWords = () => {
  return wordCollection.find({})
}

//getOne
const getOneWord = (id) => {
  return wordCollection.findById({_id: id})
}

//create
const createWord = (wordData) => {
  return wordCollection.create(wordData)
}

//update
const updateWord = (id, wordData) => {
  return wordCollection.updateOne({_id: id}, wordData)
}

//delete
const deleteWord = (id) => {
  return wordCollection.deleteOne({_id: id})
}

module.exports = {
  getAllWords,
  getOneWord,
  createWord,
  updateWord,
  deleteWord
}
