const mongoose = require('mongoose');

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    } catch (err) {
        throw err;
    }
}

export default connectDb;