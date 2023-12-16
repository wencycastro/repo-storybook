const express = require('express');
const router = express.Router();

const Story = require("../lib/DB")

router.post('/add', Story.addBook);
router.get('/getAll', Story.getAllBooks);

module.exports = router;
