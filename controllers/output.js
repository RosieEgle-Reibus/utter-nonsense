const express = require('express')

const picturesApi = require('../models/pictures.js')
const themesApi = require('../models/themes.js')
const wordsApi = require('../models/words.js')

const outputRouter = express.Router()

//get master create form
outputRouter.get('/', (req, res) => {
    res.render('output/createAllSchemasForm')
})

//get the murder theme output
outputRouter.get('/output/murder', (req, res) => {
    Promise.all([
        wordsApi.getAllWords(),
        picturesApi.getAllPictures()
    ])
        .then(([allWords, allPictures]) => {
            //console.log( allWords, allPictures)
            res.render('output/murder', { allWords, allPictures })
        })
})

//get the nature theme output
outputRouter.get('/output/nature', (req, res) => {
    Promise.all([
        wordsApi.getAllWords(),
        picturesApi.getAllPictures()
    ])
        .then(([allWords, allPictures]) => {
            //console.log( allWords, allPictures)
            res.render('output/nature', { allWords, allPictures })
        })
})

//get the breakfast theme output
outputRouter.get('/output/breakfast', (req, res) => {
    Promise.all([
        wordsApi.getAllWords(),
        picturesApi.getAllPictures()
    ])
        .then(([allWords, allPictures]) => {
            //console.log( allWords, allPictures)
            res.render('output/breakfast', { allWords, allPictures })
        })
})

outputRouter.get('/output/writein', (req, res) => {
    Promise.all([
        wordsApi.getAllWords(),
        picturesApi.getAllPictures(),
        themesApi.getAllThemes()
    ])
        .then(([allWords, allPictures, allThemes]) => {
            allItems = { allWords, allPictures, allThemes }
            //console.log( allWords, allPictures)
            res.render('output/writeInTheme', { allWords, allPictures, allThemes })
        })
})

//create All schemas with master form
outputRouter.post('/output', (req, res) => {
    Promise.all([
        wordsApi.createWord(req.body),
        picturesApi.createPicture(req.body),
        themesApi.createTheme(req.body)
    ])
        .then(([createdWord, createdPicture, createdTheme]) => {
            if (createdTheme.dropDownTheme === "murder-y") {
                res.redirect('/output/murder')
            } else if (createdTheme.dropDownTheme === "nature") {
                res.redirect('/output/nature')
            } else if (createdTheme.dropDownTheme === "breakfast") {
                res.redirect('/output/breakfast')
            } else {
                res.redirect('/output/writein')
            }

        })
})

outputRouter.get('/master/edit', (req, res) => {
    res.render('output/updateAllSchemaForm')
})

outputRouter.delete('/output', (req, res) => {
 Promise.all([
     wordsApi.deleteAllWord(req.body),
     picturesApi.deleteAllPicture(req.body),
     themesApi.deleteAllTheme(req.body)
 ])
 .then(([deletedAllWord, deletedAllPicture, deletedAllTheme]) => {
     res.redirect('/')
 })
  
})



module.exports = {
    outputRouter
}