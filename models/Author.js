const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    name: String,
    age: String,
    pass: {
        type: String,
        select: false
    }
}, {
    timestamps: true,
});
// trc khi làm gì thì làm gì
authorSchema.pre("save", function() {
    this.name = this.name.toUpperCase();
});

// tạo ra phương thức để thao tác vs 1 document
// Schema.methods.abc = func ()
// authorSchema.methods.toJSON = function() {
//     let author = this;
//     author = author.toObject();
//     delete author.pass;
//     return author;
// };

authorSchema.methods.getName = function() {
    return this.name;
}

module.exports = mongoose.model("author", authorSchema);