const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// newController.index

router.get('/', newsController.index);
router.get('/:slug', newsController.show);

module.exports = router;
