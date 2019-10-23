const express = require('express')

const themesApi = require('../models/themes.js')

const themesRouter = express.Router()

//get CreateTheme Form
themesRouter.get('/theme/new', (req, res) => {
    res.render('themes/createThemeForm')
})


//getAll
themesRouter.get('/theme', (req, res) => {
    themesApi.getAllThemes()
    .then((allThemes) => {
        //res.json(allThemes)
        res.render('themes/allThemes', {allThemes})
    })
})

//getOne
themesRouter.get('/theme/:id', (req, res) => {
    themesApi.getOneTheme(req.params.id)
    .then((singleTheme) => {
        //res.json(singleTheme)
        res.render('themes/singleTheme', singleTheme)
    })
})

//create
themesRouter.post('/theme', (req, res) => {
    themesApi.createTheme(req.body)
    .then((createdTheme) => {
        //res.json(createdTheme)
        res.redirect(`/theme/${createdTheme._id}`)
    })
})

//get editTheme Form
themesRouter.get('/theme/edit/:id', (req, res) => {
    themesApi.getOneTheme(req.params.id)
    .then((singleTheme) => {
        res.render('themes/editThemeForm', singleTheme)
    })
})

//update
themesRouter.put('/theme/edit/:id', (req, res) => {
    themesApi.updateTheme(req.params.id, req.body)
    .then((updatedTheme) => {
        //res.json(updatedTheme)
        res.redirect(`/theme/${req.params.id}`)
    })
})

//delete
themesRouter.delete('/theme/:id', (req, res) => {
    themesApi.deleteTheme(req.params.id)
    .then((deletedTheme) => {
        //res.json(deletedTheme)
        res.redirect('/theme')
    })
})

//deleteAll 
themesRouter.delete('/theme', (req, res) => {
    themesApi.deleteAllTheme(req.body)
    .then((deletedThemes) => {
        res.redirect('/theme/new')
    })
})


module.exports = {
    themesRouter
  }