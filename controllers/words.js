
const express = require('express')

const wordsApi = require('../models/words.js')

const wordsRouter = express.Router()

//getCreateForm
wordsRouter.get('/word/new', (req, res) => {
  res.render('words/createSet')
})


//getAll
wordsRouter.get('/word', (req, res) => {
  wordsApi.getAllWords()
  .then((allWords) => {
    // res.json(allWords)
    res.render('words/allWords', {allWords})
  })
})

//getOne
wordsRouter.get('/word/:id', (req, res) => {
  wordsApi.getOneWord(req.params.id)
  .then((singleWord) => {
    //res.json(singleWord)
    res.render('words/singleSet', singleWord)
  })
})

//createOne 
wordsRouter.post('/word', (req, res) => {
  wordsApi.createWord(req.body)
  .then((createdWord) => {
    res.redirect(`/word/${createdWord._id}`)
  })
})

//updateOne
wordsRouter.put('/word/edit/:id', (req, res) => {
  wordsApi.updateWord(req.params.id, req.body)
  .then((updatedWord) => {
    res.json(updatedWord)
  })
})

//deleteOne
wordsRouter.delete('/word/:id', (req, res) => {
  wordsApi.deleteWord(req.params.id)
  .then((deletedWord) => {
    res.json(deletedWord)
  })
})

module.exports = {
  wordsRouter
}

// Words to place in the paragraph/story
// const wordsSchema {
//   mammal: String,
//   object: String,
//   verb: String,
//   adjective: String,
//   number: Number
// }
// Pictures- the user will paste the url in and the images will become the illustrations for the story
// const pictureSchema {
//   destination: String,
//   mammal: String,
//   object: String,
//   dateTaken: Date,
// }
// Theme will be a drop down that will select between three different stories/paragraphs to insert the above data into
// const themeSchema {
//   type: String,
//   enum: ['Nature', 'Breakfast', 'Murder-y' ]
// }