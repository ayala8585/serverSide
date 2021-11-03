
const mongoose = require('mongoose')
autoIncrement = require('mongoose-auto-increment');

class db {

    constructor(){}

    connect() {

        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        }

        let url = "mongodb+srv://Ayala:aylhe@substitutesystem.lwf0k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
        
        mongoose.connect(url, connectionParams).then((connection) => {
            autoIncrement.initialize(connection);

            console.log("db Connected");
        }
        ).catch((err) => {
            console.log("error connecting!");
        })
    }

}
module.exports = new db();

