import mongoose from 'mongoose';

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://usingmasai121:AiUIaAnMoXY6Qyxh@cluster0.fkm8r3l.mongodb.net/airo-ticket').then(() => console.log("DB connected"))
};


export default connectDB;