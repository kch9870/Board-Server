const {db} = require("../dbConnection")
const {getTimeNow} = require("../../utils/dateUtils");

async function insertComment(boardId, userId, comment){
	let query =
` INSERT INTO comment (board_id, user_id, comment, date) 
        VALUES (${boardId}, ${userId}, '${comment}', '${getTimeNow()}');
`
	try{
		const insertResult = await db.query(query)

		if(insertResult["serverStatus"] !== 2) return false

		query = `
        SELECT LAST_INSERT_ID();
    `

		const lastIdResult = await db.query(query)

		return { commentId: lastIdResult[0]["LAST_INSERT_ID()"] }
	}catch (e) {
		return false
	}


}

module.exports = {
	insertComment
}