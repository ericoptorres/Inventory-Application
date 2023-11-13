const PartInstance = require('../models/partinstance')
const asyncHandler = require('express-async-handler')

//Display list of all Part Instances.
exports.partinstance_list = asyncHandler(async (req, res, next) => {
  res.send("To be implemented: PartInstance list")  
})

//Display details of a specific partinstance.
exports.partinstance_detail = asyncHandler(async (req, res, next) => {
    res.send(`To be implemented: PartInstance details ${req.params.id}`)  
  })

  //Display partinstance create form.
exports.partinstance_create_get = asyncHandler(async (req, res, next) => {
    res.send("To be implemented: PartInstance create GET")  
  })

  //Handle partinstance create on POST.
exports.partinstance_create_post = asyncHandler(async (req, res, next) => {
    res.send("To be implemented: PartInstance create POST")  
  })


    //Display partinstance delete form on GET
exports.partinstance_delete_get = asyncHandler(async (req, res, next) => {
    res.send("To be implemented: partinstance delete GET")  
  })

    //Handle partinstance delete on POST.
exports.partinstance_delete_post = asyncHandler(async (req, res, next) => {
    res.send("To be implemented: PartInstance delete POST")  
  })

     //Handle partinstance update form on GET.
exports.partinstance_update_get = asyncHandler(async (req, res, next) => {
    res.send("To be implemented: PartInstance update GET")  
  })

    //Handle partinstance update on POST.
exports.partinstance_update_post = asyncHandler(async (req, res, next) => {
      res.send("To be implemented: Categ update POST")  
  })
