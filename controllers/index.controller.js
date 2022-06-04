const {TestResponseModel} = require("../models/response/test.response.model");

function test(req, res, next){

    //db connection test

    const testResponse = new TestResponseModel(req.body)

    console.log(testResponse)

    if(testResponse.isSuccess()){
        res.send({
                test1: "test1",
                test2: "test2",
                test3: {
                    test: "test",
                    test1: "test"
                }
            })
    }else{
        res.send("FAIL")
    }


}

module.exports = {
    test,
    
}