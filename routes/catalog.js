const express = require('express')
const router = express.Router()

//Require controller modules.
const part_controller = require('../controllers/partController')
const part_instance_controller = require('../controllers/partInstanceController')
const category_controller = require('../controllers/categoryController')