const mongoose = require('mongoose')

class db {

    constructor(){}

    connect() {

        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        }

        let url = "mongodb+srv://Mali:Mali@cluster0.blxgk.mongodb.net/Project1?retryWrites=true&w=majority";
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

