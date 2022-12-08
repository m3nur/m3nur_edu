import mongoose from 'mongoose';

function dbConnect() {
  mongoose.connect(
    process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      writeConcern: {
        w: 'majority',
        j: true,
        wtimeout: 1000,
      },
    },
    (err) => {
      if (err) return console.log('Atlas DB connection failed...', err);
      console.log('Atlas DB Connected Successfully');
    }
  );
}

export default dbConnect;
