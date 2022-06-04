const mysql = require("mysql")
const {connectConst} = require("../common/connectContant.js")

class DbConnection{

    #con

    constructor() {
        this.#connecting().then(r => {
        })

    }
    async #connecting(){
        const con = mysql.createConnection(connectConst)
        await con.connect(err=>{
            if(!err) {
                console.log("DB 연결 성공")
                this.#con = con
            }
            else{

                console.log("DB 연결 실패 \n", err)
                console.log(err)
            }
        })
        // if(!err) return con
        // for(let i=0; i<5; i++){
        //     await con.connect(err=>{
        //         if(!err) return con
        //         console.log(err)
        //     })
        // }
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