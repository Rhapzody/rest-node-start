var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    let data = [
        {
            id:1,
            name:'dish',
            price:200.00
        },{
            id:2,
            name:'fork',
            price:200.00
        }
    ];
    res.json(data)
});

router.get('/:a/:b/:c', function(req, res, next) {
    res.json(req.params); // url param
})

router.get('/body', function(req, res, next) {
    res.json(req.body); //post param
})

router.get('/query', function(req, res, next) {
    res.json(req.query); //get param
})
  
  
module.exports = router;