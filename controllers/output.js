const express = require('express')


const picturesApi = require('../models/pictures.js')
const themesApi = require('../models/themes.js')
const wordsApi = require('../models/words.js')

const outputRouter = express.Router()


// outputRouter.get('/output', (req, res) => {
//     wordsApi.getAllWords()
//     .then((allWords) => {
//         res.json(allWords)
//     })
// })
// outputRouter.get('/output', (req, res) => {
//     picturesApi.getAllPictures()
//     .then((allPictures) => {
//         res.json(allPictures)
//     })
// })
// outputRouter.get('/output', (req, res) => {
//     wordsApi.getAllWords()
//     .then((allWords) => {
//         res.json(allWords)  
//     })
//     picturesApi.getAllPictures()
//         .then((allPictures) => {
//             res.json(allPictures)
//         })
    
// })

outputRouter.get('/output', (req, res) => {
    Promise.all([
        wordsApi.getAllWords(),
        picturesApi.getAllPictures()
    ])
    .then(([allWords, allPictures]) => {
        res.json({
            allWords,
            allPictures
        })
    })
})





module.exports = {
    outputRouter
  }