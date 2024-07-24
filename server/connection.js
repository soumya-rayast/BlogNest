const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        switch (mongoose.connection.readyState) {
            case 0:
                console.log('Database is Disconnected');
                break;
            case 1:
                console.log('Database is Connected');
                break;
            case 2:
                console.log('Database is Connecting');
                break;
            case 3:
                console.log('Database is Disconnecting');
                break;
            case 4:
                console.log('Database is Uninitialized');
                break;
            default:
                console.log('Unknown database state');
        }
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
        process.exit(1);
    }
};

module.exports = { connectDB };
