        const mongoose=require('mongoose');


        const mongoURI="mongodb://localhost:27017/ebooks?readPreference=primary&appname=MongoDB%20Compass&ssl=false" 
        
        const connectToMongo=()=>{
            mongoose.connect(mongoURI,()=>{
                console.log("Successfully Connected to MongoDB!")
            })
        }
        module.exports=connectToMongo;
        