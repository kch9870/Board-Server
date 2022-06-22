import {CommentRequestModel} from "../models/request/comment.request.model";
import {sendBadRequest} from "../common/error";
import {insertComment} from  "../models/query/comment"

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

		}

	}else{
		sendBadRequest(res)
	}
}

module.exports = {
	addComment
}