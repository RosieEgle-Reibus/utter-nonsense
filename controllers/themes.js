const express = require('express')

const themesApi = require('../models/themes.js')

const themesRouter = express.Router()


//getAll
themesRouter.get('/theme', (req, res) => {
    themesApi.getAllThemes()
    .then((allThemes) => {
        res.json(allThemes)
    })
})

//getOne
themesRouter.get('/theme/:id', (req, res) => {
    themesApi.getOneTheme(req.params.id)
    .then((singleTheme) => {
        res.json(singleTheme)
    })
})

//create
themesRouter.post('/theme/new', (req, res) => {
    themesApi.createTheme(req.body)
    .then((createdTheme) => {
        res.json(createdTheme)
    })
})

//update
themesRouter.put('/theme/edit/:id', (req, res) => {
    themesApi.updateTheme(req.params.id, req.body)
    .then((updatedTheme) => {
        res.json(updatedTheme)
    })
})

//delete
themesRouter.delete('/theme/:id', (req, res) => {
    themesApi.deleteTheme(req.params.id)
    .then((deletedTheme) => {
        res.json(deletedTheme)
    })
})

module.exports = {
    themesRouter
  }