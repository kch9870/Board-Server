const {BaseRequestModel} = require("./base.request.model");

class CommentRequestModel extends BaseRequestModel{

	boardId
	userId
	comment

	constructor() {
		super();
	}
}

module.exports = {
	CommentRequestModel
}