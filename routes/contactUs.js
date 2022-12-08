const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const contactcontroller=require('../controllers/contactus');

// /admin/add-product => GET
router.get('/contactpage',contactcontroller.contact);

module.exports=router;