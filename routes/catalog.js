const express = require('express')
const router = express.Router()

//Require controller modules.
const part_controller = require('../controllers/partController')
const part_instance_controller = require('../controllers/partInstanceController')
const category_controller = require('../controllers/categoryController')

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

