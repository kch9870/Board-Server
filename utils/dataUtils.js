/**
 * 데이터 널 체크
 * @param {Object} data
 */
function checkNull(data){
	for(const item in data){
		if(!item) return false
	}
	return true
}

function toJSON(object){
	return JSON.parse(JSON.stringify(object))
}

module.exports = {
	checkNull,
	toJSON
}