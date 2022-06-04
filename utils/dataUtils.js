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

module.exports = {
	checkNull
}