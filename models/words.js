const mongoose = require('./connection.js')


/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
const WordSchema = new mongoose.Schema({
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

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
  getAllWords,
  getOneWord,
  createWord,
  updateWord,
  deleteWord
}
