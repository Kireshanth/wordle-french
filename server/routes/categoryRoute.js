const express = require('express');
const router = express.Router()
const categoryController = require('../controllers/categoryController')

router.get("/", categoryController.getWords)
router.post("/", categoryController.createWord)

module.exports = router;