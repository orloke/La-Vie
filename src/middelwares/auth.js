const jwt = require("jsonwebtoken");
const {promissefy} = require("util");
const authConfig = require("../config/auth");


export default async (req,res,next)=>{
    const authHeaders = req.headers.authorization;

    if(!authHeaders){
        return res.status(401).json({message: "Faça a autenticação antes de usar as rotas"});
    }

    const[bearer , token] = authHeaders.split(" ");

    try{
        
        const decoded = await jwt.verify(jwt.verify, token, authConfig);
        req.userID = decoded.id;
        next();

    }catch(error){
        return res.status(401).json({error: {message: "Token inválido"}});
    }
    console.log(authHeader);
    
}
