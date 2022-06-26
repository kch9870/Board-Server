const {CommentRequestModel} = require("../models/request/comment.request.model");
const {sendBadRequest} = require("../common/error");
const {insertComment} = require("../models/query/comment");

async function addComment(req, res){

	const requestModel = new CommentRequestModel()

	if(requestModel.checkPrams(req.body)){
		const result = await insertComment(requestModel.boardId, requestModel.userId, requestModel.content)

		if(result){
			const response = {
				responseCode: 200,
				responseMessage: 'success insert comment',
				commentId: result.commentId
			}
			res.send(response)
		}else{
			sendBadRequest(res)
		}

	}else{
		sendBadRequest(res)
	}
}

module.exports = {
	addComment
}