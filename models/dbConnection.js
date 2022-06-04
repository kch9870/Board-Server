const mysql = require("mysql")
const {connectConst} = require("../common/connectContant.js")

class DbConnection{

    #con

    constructor(con) {
        this.#con = mysql.createConnection(connectConst)
        this.#con.connect(err=>{
            if(!err) {
                console.log("DB 연결 성공")
            }
            else{
                console.log("DB 연결 실패 \n", err)
                console.log(err)
            }
        })
    }
    select(query){
        return new Promise(resolve => {

            this.#con.query(query, (err, result)=>{
                if (err) {
                    console.log(err)
                    // throw err;err
                }
                console.log("Result: " + result);
                resolve(result)
            })
        })
    }
    update(){

    }
    delete(){

    }
}
const connect = new DbConnection()

module.exports ={
    connect
}