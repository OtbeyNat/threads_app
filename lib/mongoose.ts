import mongoose, { mongo } from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
    // prevent unknown field queries
    mongoose.set('strictQuery',true);

    // mongodb url
    if(!process.env.MONGODB_URL) return console.log('MONGODB_URL not found');
    if(isConnected) return console.log('Already Connected to MongoDB')

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        isConnected = true;
    } catch (error) {
        console.log(error);
    }
}