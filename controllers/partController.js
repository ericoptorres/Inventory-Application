const Part = require('../models/part')
const PartInstance = require('../models/partinstance')
const Category = require('../models/category')

const asyncHandler = require('express-async-handler')


exports.index = asyncHandler(async (req, res, next) => {
    //Get details of parts, part instances and categories
    const [
      numParts,
      numPartIntances,
      numInstockPartIntasnces,
      numCategories
    ] = await Promise.all([
      Part.countDocuments({}).exec(),
      PartInstance.countDocuments({}).exec(),
      PartInstance.countDocuments({ status: "In Stock"}).exec(),
      Category.countDocuments({}).exec()
    ]);

    res.render('index', {
      title: "Store Home Page",
      part_count: numParts,
      part_instance_count: numPartIntances,
      part_instance_instock_count: numInstockPartIntasnces,
      category_count: numCategories
    })
})

//Display list of all Parts.
exports.part_list = asyncHandler(async (req, res, next) => {
  const allParts = await Part.find({}, "name category")
    .sort({name: 1})
    .populate("category")
    .exec();

  res.render('part_list', {
    title: "Part List",
    part_list: allParts
  })

})

//Display details of a specific part.
exports.part_detail = asyncHandler(async (req, res, next) => {

  const [part, partInstances] = await Promise.all([
    Part.findById(req.params.id).populate('category').exec(),
    PartInstance.find({part: req.params.id}).exec()
  ])

  if (part === null){
    const err = new Error('No part found')
    err.status = 404
    return next(err)
  }

  res.render('part_detail', {
    title: part.name,
    part: part,
    part_instances: partInstances
  })

 
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
