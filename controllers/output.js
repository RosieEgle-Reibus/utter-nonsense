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
// outputRouter.get('/output', (req, res) => {
//     Promise.all([
//         wordsApi.getAllWords(),
//         picturesApi.getAllPictures()
//     ])
//     .then(allWordsAndPics => {
//         res.json(
//             allWordsAndPics[1].values()
//         )
//     })
// })
// outputRouter.get('/output', (req, res) => {
//     Promise.all([
//         wordsApi.getAllWords(),
//         picturesApi.getAllPictures()
//     ])
//     .then(([allWords, allPictures]) => {
//         res.json({
//             allWords: allWords[0].mammal,
//             allPictures
//         })
//     })
// })
outputRouter.get('/output', (req, res) => {
    Promise.all([
        wordsApi.getAllWords(),
        picturesApi.getAllPictures()
    ])
    .then(([allWords, allPictures]) => {
        res.json([
            allWords[0].object,
            allPictures[0].mammal
        ])
    })
})


//{{allWordsAndPics[0].mammal}}





module.exports = {
    outputRouter
  }