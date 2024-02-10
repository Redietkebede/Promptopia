import mongoose from "mongoose";


let isConnected = false;

export const connectDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('MongoDB connection already established');
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;

        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    }
}