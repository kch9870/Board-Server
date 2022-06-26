const {db} = require("../dbConnection.js")
const {checkNull} = require("../../utils/dataUtils");

async function getAllUserInfo(){
    const query = `
        SELECT user_id as  FROM user
    `

    return await db.query(query)
}

/**
 * user 테이블에 유저 정보 셀렉트
 * @param {String} columnName 컬럼 이름
 * @param {String} value 값
 * @param {String} targetColumn 찾고 싶은 컬럼 (디폴트 all)
 * @returns {Promise<boolean|{Object}>} 해당 유저의 타겟 칼람 정보
 */
async function getUserInfo(columnName ,value, targetColumn="*"){
    if(!columnName) return false
    if(!value) return false

    switch (targetColumn){
        case '*': targetColumn = 'user_id as userID, email, name, nick_name as nickName, password'
            break
        case 'user_id' : targetColumn = 'user_id as userID'
            break
        case 'nick_name' : targetColumn = 'nick_name as nickName'
            break
    }

    const query =  `SELECT ${targetColumn} FROM user WHERE ${columnName} = '${value}'`

    return (await db.query(query))[0]
}

/**
 * 유저 추가 (회원가입)
 * @param email 로그인 아이디
 * @param password 로그인 비밀번호
 * @param name 이름
 * @param nickName 별명
 * @returns {Promise<{userId: {Number}}|boolean>} 유저 pk
 */
async function addUser(email, password, name, nickName){

    if(!email || !password || !name || !nickName) return false

    const query = `
        INSERT INTO user (email, password, name, nick_name) 
        VALUES ('${email}', '${password}', '${name}', '${nickName}');
    `

    const insertResult = await db.query(query)

    if(insertResult["serverStatus"] !== 2) return false

    const selectLastId = `
        SELECT LAST_INSERT_ID();
    `

    const lastIdResult = await db.query(selectLastId)

    return { userId: lastIdResult[0]["LAST_INSERT_ID()"] }
}

module.exports = {
    getAllUserInfo,
    getUserInfo,

    addUser
}