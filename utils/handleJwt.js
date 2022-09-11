const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
const getProperties = require("../utils/handlePropertiesEngine");
const PropertiesKey = getProperties()

/**
 * parar el objeto del usuario 
 * @param {*} user 
 */
const tokenSign = async (user) =>{
    const sign = jwt.sign(
        {
            [PropertiesKey.id]: user[PropertiesKey.id],
            role: user.role,
    },
    JWT_SECRET,
    {
        expiresIn:"2h",
    }
    );
    return sign
};

/**
 * debe pasar el token de sesion el jwt
 * @param {*} tokenJwt 
 * @returns 
 */
const verifyToken = async(tokenJwt) =>{
    try{
        return jwt.verify(tokenJwt, JWT_SECRET)
    }catch(e){
        return null
    }
};

module.exports = {tokenSign, verifyToken};

