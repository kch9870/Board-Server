class BaseRequestModel{

	checkPrams(data){
		for(const key in this){
			if(!data[key]) return false
			else this[key] = data[key]
		}

		return true
	}
}

module.exports = {
	BaseRequestModel
}