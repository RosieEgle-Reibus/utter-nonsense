const mongoose = require('./connection.js')

const PictureSchema = new mongoose.Schema({
    set: String,
    destination: String,
    mammal: String,
    object: String,
    dateTaken: Date,
})

const pictureCollection = mongoose.model('Picture', PictureSchema)

//getAll
const getAllPictures = () => {
    return pictureCollection.find({})
}

//getOne
const getOnePicture = (id) => {
    return pictureCollection.findById({_id: id})
}

//create
const createPicture = (pictureData) => {
    return pictureCollection.create(pictureData)
}

//update
const updatePicture = (id, pictureData) => {
    return pictureCollection.update({_id: id}, pictureData)
}

//delete
const deletePicture = (id) => {
    return pictureCollection.deleteOne({_id: id})
}

module.exports = {
    getAllPictures,
    getOnePicture,
    createPicture,
    updatePicture,
    deletePicture
  }