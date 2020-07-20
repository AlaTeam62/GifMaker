const express = require('express');

const GifMakerController = require('../controller/gifMaker');

const router = express.Router();

router.get('/gifMakers', GifMakerController.getAll);

module.exports = router;
