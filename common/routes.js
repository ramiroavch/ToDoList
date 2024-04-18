import express from "express"
import fs from 'fs';

const routes = express.Router();

const readData = ()=>{
        const data= fs.readFileSync("./common/db.jsonx")
        return JSON.parse(data);
}

routes.get('/to_do_list',(req,res)=>{
    try{
        const response = readData();
        res.json(response.to_do_list);
    } catch(error){
        res.json(JSON.parse('{"error":"Error on file"}'));
    }
    
})

export default routes;
