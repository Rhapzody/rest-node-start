var express = require('express');
var router = express.Router();
var user = require('../services/user-service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  user.getAllUsers().then((result)=>{
    res.json(result);
  }).catch(err=>{
    console.log(err);
    res.status(500);
  });
});

router.get('/:id', async function(req, res, next) {
  result = await user.getUserById(req.params.id);
  res.json(result);
});

module.exports = router;
