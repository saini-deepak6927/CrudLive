const mongoose = require('mongoose');
async function dbConn() {
    const conn=await mongoose.connect('mongodb+srv://deepak:root@cluster0.8vxh7ni.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        if(conn){
            console.log('Database connected successfully')
        }
        else{
            console.log('Database connection failed')
        }
}
module.exports=dbConn