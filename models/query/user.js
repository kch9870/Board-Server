const {db} = require("../dbConnection.js")
const {checkNull} = require("../../utils/dataUtils");

async function getAllUserInfo(){
    const query = `
        SELECT * FROM user
    `

    return await db.query(query)
}

/**
 * 유저 id로 유저 정보 가져옴
 * @param {Number} userId
 * @returns
 */
async function getUserInfo(userId){
    if(!userId) return false

    const query = `
        SELECT * FROM user WHERE user_id = ${userId}
    `

    return await db.query(query)
}

/**
 * 유저 추가
 * @param userInfo
 * @returns {Promise<unknown>}
 */
async function addUser(userInfo){

    if(!checkNull(userInfo)) return

    const query = `
        INSERT INTO user (user_id, email, password, name, nick_name) 
        VALUES ('${userInfo.userId}', '${userInfo.email}', '${userInfo.password}', '${userInfo.name}', '${userInfo.nickName}');
    `

    return await db.query(query)
}

getUserInfo(0).then(r =>{})

module.exports = {
    getAllUserInfo,
    getUserInfo,

    addUser
}