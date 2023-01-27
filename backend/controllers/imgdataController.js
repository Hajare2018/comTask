const {connection} = require('../model/connection')

const getApi = async (req,res)=>{
    try{
        await connection.query('SELECT * FROM imagedata',(err,result)=>{
            if(err){
                return res.send({status:400, response:err.sqlMessage})
            }else{
                res.send({status:200, response:result})
            }
        })
    }catch(err){
        res.send({status:400, response:err.sqlMessage})
    }
}

const postApi = async (req,res)=>{
    try{
        const SqlQuery = `INSERT INTO imagedata SET ?`
        const data = {
            image:req.file.path,
            title:req.body.title, 
            description:req.body.description, 
            quantity:req.body.quantity, 
            price:req.body.price, 
            date:req.body.date, 
        }
        await connection.query(SqlQuery,data,(err,result)=>{
            if(err){
                return res.send({status:400, response:err.sqlMessage})
            }else{
                res.send({status:200, response:result})
            }
        })
    }catch(err){
        res.send({status:400, response:err.sqlMessage})
    }
}

module.exports = {getApi,postApi}