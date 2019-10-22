
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

//getEditForm
wordsRouter.get('/word/edit/:id', (req, res) => {
  wordsApi.getOneWord(req.params.id)
  .then((singleWord) => {
    res.render('words/editSetForm', singleWord)
  })
})

//updateOne
wordsRouter.put('/word/edit/:id', (req, res) => {
  wordsApi.updateWord(req.params.id, req.body)
  .then((updatedWord) => {
    res.redirect(`/word/${req.params.id}`)
  })
})

//deleteOne
wordsRouter.delete('/word/:id', (req, res) => {
  wordsApi.deleteWord(req.params.id)
  .then((deletedWord) => {
    //res.json(deletedWord)
    res.redirect('/word')
  })
})

module.exports = {
  wordsRouter
}

