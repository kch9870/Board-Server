
function checkToken(req, res, next){
    console.log("token")

    next()
}

module.exports = {
    checkToken
}