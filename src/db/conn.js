const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/asifwebsite", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => {
    console.log("Connection success");
}).catch( (err) => {
    console.log(`Connection Error: ${err}`);
})