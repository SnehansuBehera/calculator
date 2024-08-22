import mongoose from 'mongoose';

const connectdb = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log(`DATABASE CONNECTED SUCCESS`);
    } catch (error) {
        console.log(`ERROR-${error.message}`);
        process.exit();
    }

}
export default connectdb;