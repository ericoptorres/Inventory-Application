const express = require('express')
const router = express.Router()

//Require controller modules.
const part_controller = require('../controllers/partController')
const part_instance_controller = require('../controllers/partInstanceController')
const category_controller = require('../controllers/categoryController')
const category = require('../models/category')

/// PARTS ROUTES ///

//GET catalog home page
router.get('/', part_controller.index)

//GET request for creating a Part. This must come before routes that uses id's.
router.get('/part/create', part_controller.part_create_get)

router.post('/part/create', part_controller.part_create_post)

router.get('/part/:id/delete', part_controller.part_delete_get)

router.post('/part/:id/delete', part_controller.part_delete_post)

router.get('/part/:id/update', part_controller.part_update_get)

router.post('/part/:id/update', part_controller.part_update_post)

//GET request for one Part
router.get('/part/:id', part_controller.part_detail)

//GET request for list of all Parts
router.get('/parts', part_controller.part_list)


/// CATEGORY ROUTES ///

//GET request for creating a Category. This must come before routes that uses id's.
router.get('/category/create', category_controller.category_create_get)

router.post('/category/create', category_controller.category_create_post)

router.get('/category/:id/delete', category_controller.category_delete_get)

router.post('/category/:id/delete', category_controller.category_delete_post)

router.get('/category/:id/update', category_controller.category_update_get)

router.post('/category/:id/update', category_controller.category_update_post)

//GET request for a specific Category
router.get('/category/:id', category_controller.category_detail)

//GET request for list of all Categories
router.get('/categories', category_controller.category_list)


/// PARTINSTANCE ROUTES ///

