const express = require('express');
const router = express.Router();
const about = require('./../controllers/about');
const urlToPage = require('./../middlewares/url-to-page');

router.use(urlToPage.base);

/* GET home page. */
router.get('/', about.index);

module.exports = router;
