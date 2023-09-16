const mongoose = require('mongoose')

async function run() {  
    // Connect to database  
    const uri = "mongodb+srv://user1:password1123@cluster0.hqcwe3e.mongodb.net/task-manager-api?retryWrites=true&w=majority";
    await mongoose.connect(uri);
}
run().catch(console.dir);