const express = require('express')

const picturesApi = require('../models/pictures.js')

const picturesRouter = express.Router()

//getAll
picturesRouter.get('/picture', (req, res) => {
    picturesApi.getAllPictures()
    .then((allPictures) => {
        res.json(allPictures)
    })
})

//getOne
picturesRouter.get('/picture/:id', (req, res) => {
    picturesApi.getOnePicture(req.params.id)
    .then((singlePicture) => {
        res.json(singlePicture)
    })
})

//create
picturesRouter.post('/picture/new', (req, res) => {
    picturesApi.createPicture(req.body)
    .then((createdPicture) => {
        res.json(createdPicture)
    })
})

//update
picturesRouter.put('/picture/edit/:id', (req, res) => {
    picturesApi.updatePicture(req.params.id, req.body)
    .then((updatedPicture) => {
        res.json(updatedPicture)
    })
})

//delete
picturesRouter.delete('/picture/:id', (req, res) => {
    picturesApi.deletePicture(req.params.id)
    .then((deletedPicture) => {
        res.json(deletedPicture)
    })
})


module.exports = {
    picturesRouter
  }