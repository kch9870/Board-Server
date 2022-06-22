function sendBadRequest(res){
	const response = {}

	response.responseCode = 400
	response.responseMsg = 'bad request'
	res.send(response)
}
function sendSystemError(res){
	const response = {}

	response.responseCode = 400
	response.responseMsg = 'bad request'
	res.send(response)
}

module.exports = {
	sendBadRequest
}