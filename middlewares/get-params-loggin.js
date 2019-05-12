module.exports = function(req, res, next) {
    console.log('GET params: ');
    console.log(req.query);
    next();
}