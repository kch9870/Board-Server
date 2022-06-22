const {BaseRequestModel} = require("./base.request.model");

class CommentRequestModel extends BaseRequestModel{

	boardId
	userId
	content

	constructor() {
		super();
	}
}

module.exports = {
	CommentRequestModel
}