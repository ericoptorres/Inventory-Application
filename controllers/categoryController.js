const Category = require('../models/category')
const asyncHandler = require('express-async-handler')

//Display list of all Categories.
exports.category_list = asyncHandler(async (req, res, next) => {
  res.send("To be implemented: categ list")  
})

//Display details of a specific category.
exports.category_detail = asyncHandler(async (req, res, next) => {
    res.send(`To be implemented: categ details ${req.params.id}`)  
  })

  //Display category create form.
exports.category_create_get = asyncHandler(async (req, res, next) => {
    res.send("To be implemented: Categ create GET")  
  })

  //Handle category create on POST.
exports.category_create_post = asyncHandler(async (req, res, next) => {
    res.send("To be implemented: Categ create POST")  
  })


    //Display category delete form on GET
exports.category_delete_get = asyncHandler(async (req, res, next) => {
    res.send("To be implemented: Category delete GET")  
  })

    //Handle category delete on POST.
exports.category_delete_post = asyncHandler(async (req, res, next) => {
    res.send("To be implemented: Categ delete POST")  
  })

     //Handle category update form on GET.
exports.category_update_get = asyncHandler(async (req, res, next) => {
    res.send("To be implemented: Categ update GET")  
  })

    //Handle category update on POST.
exports.category_update_post = asyncHandler(async (req, res, next) => {
      res.send("To be implemented: Categ update POST")  
  })
