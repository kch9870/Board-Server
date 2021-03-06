function sendBadRequest(res){
	const response = {}

	response.responseCode = 400
	response.responseMsg = 'bad request'
	res.send(response)
}
function sendSystemError(res){
	const response = {}

	response.responseCode = 401
	response.responseMsg = 'db not connected'
	res.send(response)
}

function sendError(response, res, code, msg){
    response.responseCode = code
    response.responseMsg = msg
    res.send(response)
}


module.exports = {
	sendBadRequest,
	sendSystemError,
	sendError
}