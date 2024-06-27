const express = require('express');
const { saveDocument } = require('../controllers/editorController');

const router = express.Router();

router.post('/save', saveDocument);

module.exports = router;
