const mongoose = require("mongoose")
const mongooseDelete = require("mongoose-delete");
const StorageScheme = new mongoose.Schema(
    {
        url:{
            type:String
        },
        filename:{
            type:Number
        }
    
    },
    {
        timestamps:true,  //TODO cretedAT, updatedAt
        versionkey:false,
    }
);
StorageScheme.plugin(mongooseDelete, {overrideMethods:"all"})
module.exports = mongoose.model("storage", StorageScheme)