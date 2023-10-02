const mongoose = require('mongoose')

async function run() {  
    // Connect to database  
    await mongoose.connect(process.env.MONGODB_URL);
}
run().catch(console.dir);