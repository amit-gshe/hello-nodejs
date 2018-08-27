var express = require('express');
var router = express.Router();
var db = require('../mongo')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  var result = await db.inventory.find({}).toArray();
  console.log(result)
  res.json(result);
});

module.exports = router;
