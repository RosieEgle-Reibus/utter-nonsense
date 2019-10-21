const express = require('express')

const picturesApi = require('../models/pictures.js')

const picturesRouter = express.Router()

//get Create Picture Set Form
picturesRouter.get('/picture/new', (req, res) =>{
        res.render('pictures/createPictureSet')
})


//getAll
picturesRouter.get('/picture', (req, res) => {
    picturesApi.getAllPictures()
    .then((allPictures) => {
        //res.json(allPictures)
        res.render('pictures/allPictureSets', {allPictures})
    })
})

//getOne
picturesRouter.get('/picture/:id', (req, res) => {
    picturesApi.getOnePicture(req.params.id)
    .then((singlePicture) => {
        //res.json(singlePicture)
        res.render('pictures/singlePictureSet', singlePicture)
    })
})

//create
picturesRouter.post('/picture', (req, res) => {
    picturesApi.createPicture(req.body)
    .then((createdPicture) => {
        // res.json(createdPicture)
        res.redirect(`/picture/${createdPicture._id}`)
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