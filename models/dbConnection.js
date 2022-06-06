const mysql = require("mysql")
const {mysqlConfig} = require("../common/mysplConfig.js")
const {toJSON} = require("../utils/dataUtils");

class DbConnection{

    #con

    constructor() {
        this.#con = mysql.createConnection(mysqlConfig)
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
    query(query){
        return new Promise(resolve => {
            this.#con.query(query, (err, result)=>{
                console.log("DB query \n", query)

                if (err) console.log(err)

                const _result = toJSON(result)

                console.log("DB result \n", _result);
                resolve(_result)
            })
        })
    }
}

const db = new DbConnection()

module.exports ={
    db
}