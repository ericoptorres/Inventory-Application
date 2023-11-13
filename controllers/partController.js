const Part = require('../models/part')
const asyncHandler = require('express-async-handler')

//Display list of all Part.
exports.part_list = asyncHandler(async (req, res, next) => {
  res.send("To be implemented: part list")  
})

//Display details of a specific part.
exports.part_detail = asyncHandler(async (req, res, next) => {
    res.send(`To be implemented: part details ${req.params.id}`)  
  })

  //Display part create form.
exports.part_create_get = asyncHandler(async (req, res, next) => {
    res.send("To be implemented: part create GET")  
  })

  //Handle part create on POST.
exports.part_create_post = asyncHandler(async (req, res, next) => {
    res.send("To be implemented: part create POST")  
  })


    //Display part delete form on GET
exports.part_delete_get = asyncHandler(async (req, res, next) => {
    res.send("To be implemented: part delete GET")  
  })

    //Handle part delete on POST.
exports.part_delete_post = asyncHandler(async (req, res, next) => {
    res.send("To be implemented: part delete POST")  
  })

     //Handle part update form on GET.
exports.part_update_get = asyncHandler(async (req, res, next) => {
    res.send("To be implemented: part update GET")  
  })

    //Handle part update on POST.
exports.part_update_post = asyncHandler(async (req, res, next) => {
      res.send("To be implemented: Part update POST")  
  })
