import mongoose from "mongoose";

try {
    await mongoose.connect(process.env.MONGO_CLOUD_DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
} catch (error) {
    console.log(error);
}

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('database is connected successfully');
});

connection.on('disconnected', () => {
    console.log('database is disconnected successfully');
})

connection.on('error', console.error.bind(console, 'connection error:'));

export { connection };