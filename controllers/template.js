/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateApi` to something more sensible (e.g:
 * `shopsAPI`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const templateApi = require('../models/template.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const templateRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

/* Step 5
 *
 * TODO: delete this handler; it's just a sample
 */ 
templateRouter.get('/', (req, res) => {
  res.send(templateApi.getHelloWorldString())
})

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  templateRouter
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