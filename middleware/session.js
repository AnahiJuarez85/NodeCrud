const {verifyToken} = require("../utils/handleJwt")
const {handleHttpError} = require("../utils/handleError")
const{usersModel} = require("../models")
const getProperties = require("../utils/handlePropertiesEngine")
const PropertiesKey = getProperties()

const authMiddleware = async (req, res, next) =>{
    try{
        if(!req.headers.authorization){
            handleHttpError(res, "NEED_SESSION", 401) ;
            return
        }

        const token = req.headers.authorization.split('').pop();
        const dataToken = await verifyToken(token);

        if(!dataToken){
            handleHttpError(res,"not_payload_data", 401);
            return
        }

        const query = {
            [PropertiesKey.id]:dataToken[PropertiesKey.id]
        }

        const user = await usersModel.findOne(query)
        req.user = user
        next()

    }catch(e){
        handleHttpError(res, "NOT_SESSION", 401);
    }
};

module.exports = authMiddleware;