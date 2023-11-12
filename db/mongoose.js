import mongoose from "mongoose";
// import {DB_NAME} from '../constants.js'
mongoose.connect(`mongodb://0.0.0.0:27017/jio1`);
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"))


db.once('open', function(){
    
    console.log('Connected to Database :: MongoDB');
});

export default db