import { ResponseError } from "../error/response-error.js";

const ErrorMiddleware = (err,req,res,next)=>{
    if(!err){
        next();
        return
    }

    /* Silahkan tambahkan jika ada custom error yang baru */

    if(err instanceof ResponseError){
        return res.status(err.status).json({
            message: err.message
        }).end();
    } else {
        res.status(err.status).json({
            message : err.message
        }).end()
    }

}

export {
    ErrorMiddleware
}