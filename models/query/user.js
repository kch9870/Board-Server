const {connect} = require("../dbConnection.js")

async function getUserInfo(){
    const query = `
        SELECT * FROM user
    `

    return await connect.select(query)
}
 
module.exports = {
    getUserInfo
}