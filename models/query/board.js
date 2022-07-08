const {db} = require("../dbConnection")
const {getTimeNow} = require("../../utils/dateUtils");

/**
 * 게시글 추가
 * @param {String} title 제목
 * @param {String} content 내용
 * @param {Number} userId 등록 유저 아이디
 * @param {String} category 카테고리
 * @param {string} date 날짜
 * @returns {Promise<boolean|{boardId: Number}>} 게시글 pk
 */
async function addBoard(title, content, userId, category, date= getTimeNow()){

	let query = `
INSERT INTO board(user_id, title, content, date, category, views)
VALUES (${userId}, "${title}", "${content}", "${date}", "${category}", 0)
	`

	const insertResult = await db.query(query)

	if(insertResult["serverStatus"] !== 2) return false

	query = `
        SELECT LAST_INSERT_ID();
    `

	const lastIdResult = await db.query(query)

	return { boardId: lastIdResult[0]["LAST_INSERT_ID()"] }
}

/**
 *
 * @param pageNo
 * @param numOfPages
 * @param category
 * @returns {Promise<unknown>}
 */
async function getBoardList(pageNo=1, numOfPages=15, category="all") {

	const where = category === 'all' ? `` :`WHERE category = '${category}'`
	pageNo = (pageNo-1) * numOfPages

	let query =
`SELECT board_id as boardId, title, content, category, date, views, nick_name as nickName, (
			SELECT COUNT(board_id)
			FROM comment
			WHERE board.board_id = comment.board_id
			) AS commentCount
FROM board
LEFT JOIN user ON board.user_id = user.user_id
${where}
ORDER BY board_id desc
LIMIT ${numOfPages} OFFSET ${pageNo}`

	const listResult = await db.query(query)

	query = `SELECT count(board_id) as totalCount FROM board ${where}`

	const totalCount = await db.query(query)

	return {
		totalCount: totalCount[0].totalCount,
		board: listResult
	}
}

async function getBoardDetail(boardId){

	let query =
`SELECT board_id as boardId, title, content, nick_name as nickName, category, date, views, (
			SELECT COUNT(board_id)
			FROM comment
			WHERE board.board_id = comment.board_id
			) AS commentCount
FROM board
LEFT JOIN user ON board.user_id = user.user_id
WHERE board_id = "${boardId}"`

	const resultDetail = await db.query(query)

	if(!resultDetail[0]) return false

	query =
`SELECT comment_id as commentId, nick_name as nickName, date, comment
FROM comment
LEFT JOIN user ON comment.user_id = user.user_id
WHERE board_id = "${boardId}"`

	resultDetail[0].comment = await db.query(query)

	// 상세보기 클릭 시 조회수 증가 +1
	query = 
`UPDATE board set views = views + 1 WHERE board_id = "${boardId}"`

  	const resultView = await db.query(query)

 	if(!resultView) return false

	return resultDetail[0]
}

module.exports = {
	addBoard,
	getBoardList,
	getBoardDetail
}