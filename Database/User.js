const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    id :{
        type : String,
        require : true
    },
    pw :{
        type : String,
        require : true
    },
    name :{
        type : String,
        require : true
    },
    email :{
        type : String,
        require : true
    },
    phone :{
        type : Number,
        require : true
    }
});

//userSchema를 외부로 내보내줌(사용 가능)
module.exports = mongoose.model('User', userSchema);