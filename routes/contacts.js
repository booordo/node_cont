const express = require('express');
const router = express.Router();
const contacts = require('./../controllers/contacts');
const urlToPage = require('./../middlewares/url-to-page');

router.use(urlToPage.base);

/* GET home page. */
router.get('/', contacts.index);

module.exports = router;
