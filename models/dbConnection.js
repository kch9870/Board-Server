const mysql = require("mysql")
const {connectConst} = require("../common/connectContant.js")

class DbConnection{

    #con

    constructor(con) {
        this.#con = con
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

async function connectionDB(){
    const con = mysql.createConnection(connectConst)
    await con.connect(err=>{
        if(!err) {
            console.log("DB 연결 성공")
            return new DbConnection(con)
        }
        else{

            console.log("DB 연결 실패 \n", err)
            console.log(err)
        }
    })
}

const connect = connectionDB()


module.exports ={
    connect
}