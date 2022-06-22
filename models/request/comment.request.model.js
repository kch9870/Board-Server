import {BaseRequestModel} from "./base.request.model";

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