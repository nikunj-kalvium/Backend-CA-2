const mongoose = require('mongoose')
const schemaa = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const schema = mongoose.model('schema', schemaa);
module.exports=schema;