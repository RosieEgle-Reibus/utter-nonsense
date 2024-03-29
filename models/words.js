const mongoose = require('./connection.js')

const WordSchema = new mongoose.Schema({
  setWord: String,
  animal: String,
  thing: String,
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

//delete many
const deleteAllWord = (wordData => {
  return wordCollection.deleteMany(wordData)
})

module.exports = {
  getAllWords,
  getOneWord,
  createWord,
  updateWord,
  deleteWord,
  deleteAllWord
}
