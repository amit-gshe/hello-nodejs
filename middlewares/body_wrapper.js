var wrapper = function (req, res, next) {
    var oldJson = res.json;
    res.json = function (data) {
        if (!arguments[0].code) {
            arguments[0] = { code: 'OK', data: arguments[0] };
        }
        oldJson.apply(res, arguments);
    }
    next();
}

module.exports = wrapper