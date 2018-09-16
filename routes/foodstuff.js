const express = require("express")
const router = express.Router()

const queries = require("../db/queries")

router.get('/', (req,res,next) => {
    queries.list('foodstuff')
    .then(food => {
        res.json({food})
    })
})

router.get('/:id', function(request,response){
  queries.read('foodstuff', request.params.id).then(food => {
      food.length>=1
          ? response.json({food})
          : response.status(404).json({message: 'Not found'})
  })
})

router.post('/', function(request,response,next){
  queries.post('foodstuff', request.body)
  .then(newFood => {
    response.status(201).json({newFood})
  })
})

router.put('/:id', function(request,response,next){
  queries.update('foodstuff', request.params.id, request.body)
  .then(updatedFood => response.json(updatedFood))
})

router.delete('/:id', function(request,response,next){
  queries.deleteOne('foodstuff', request.params.id)
  .then(() => {
    response.status(204).json()
  })
})

router.use(function(error,request,response,next){
  console.error(error.stack)
  response.status(400).send('Error Something Went Wrong')
})

module.exports = router