const Category = require('../models/category')
const Part = require('../models/part')
const asyncHandler = require('express-async-handler')
const {body, validationResult } = require('express-validator')

//Display list of all Categories.
exports.category_list = asyncHandler(async (req, res, next) => {
  
  const allCategories = await Category.find().sort({name: 1}).exec()

  res.render('category_list', {
    title: 'Categories List',
    category_list: allCategories,
  })
  
})

//Display details of a specific category.
exports.category_detail = asyncHandler(async (req, res, next) => {

  const [category, partsInCategory] = await Promise.all([
    Category.findById(req.params.id).exec(),
    Part.find({category: req.params.id}, "name description").exec()
  ])

  if (category == null){
    const err = new Error('Category not found')
    err.status = 404
    return next(err)
  }

  res.render('category_detail', {
    title: 'Category Detail',
    category: category,
    category_parts: partsInCategory
  })

  })

  //Display category create form.
  exports.category_create_get = (req, res, next) => {
    res.render('category_form', {
      title: "Create Category",
      category: {},
      errors: []
    })
  }

  //Handle category create on POST.

  exports.category_create_post = [
    //Validate and sanitize name field.
    body('name', 'Category name must contain at least 2 characters')
      .trim()
      .isLength({min: 2})
      .escape(),

    //Process request after validation and sanitization
    asyncHandler(async (req, res, next) => {
      //Extract the validation errors from a request.
      const errors = validationResult(req)

      //Create a category object with escaped and trimmed data
      const category = new Category({ name: req.body.name })

      if (!errors.isEmpty()) {
        //There are errors. Render the form again with sanitized values/error messages
        res.render('category_form', {
          title: 'Create Category',
          category: category,
          errors: errors.array()
        })
        return
      } else {
        // Data from form is valid.
        // Check if Category with the same name already exists.
        const categoryExists = await Category.findOne({ name: req.body.name })
          .collation({ locale: 'en', strength: 2})
          .exec();
        if (categoryExists) {
          // Category exists, redirect to its detail page.
          res.redirect(categoryExists.url)
        } else {
          await category.save()
          // New Category saved. Redirect to category detail page
          res.redirect(category.url)
        }
      }
    }),
  ]


  



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
