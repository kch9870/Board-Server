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

	const query = `
INSERT INTO board(user_id, title, content, date, category, views)
VALUES (${userId}, "${title}", "${content}", "${date}", "${category}", 0)
	`

	const insertResult = await db.query(query)

	if(insertResult["serverStatus"] !== 2) return false

	const selectLastId = `
        SELECT LAST_INSERT_ID();
    `

	const lastIdResult = await db.query(selectLastId)

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

	const query =
`SELECT board_id, title, content, category, date, views, nick_name
FROM board
LEFT JOIN user ON board.user_id = user.user_id
${where}
ORDER BY board_id desc
LIMIT ${numOfPages} OFFSET ${pageNo}`

	const listResult = await db.query(query)

	return await db.query(query)
}

function getBoardDetail(bordId){

}

module.exports = {
	addBoard,
	getBoardList
}