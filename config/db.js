// Do not expose your credentials in the code for Production Environment.
let atlasDB = "mongodb+srv://appuser:xhFYadTL1HYRH1tU@cluster004m2022.aydiv.mongodb.net/inventory?retryWrites=true&w=majority";

// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongoDb = mongoose.connection;

    mongoDb.on('error', console.error.bind(console, 'Connection Error:'));
    mongoDb.once('open', ()=>{
        console.log('Connected to MongoDB...');
    });

    return mongoDb;
}