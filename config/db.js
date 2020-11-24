const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect('mongodb+srv://test:test@cluster0.cf4x5.mongodb.net/Project?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
