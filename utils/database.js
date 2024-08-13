import mongoose from 'mongoose';

let connection = false;

export const connect = async () => {
    if(connection){
        console.log('Database already connected');
        return;
    }

    try {
        connection = await mongoose.connect(process.env.DATABASE_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:false,
        });
        connection= true;
        console.log('Database connected');
    } catch (error) {
        console.log('Database connection failed');
        console.log(error);
        
    }

    console.log('Database connected');
}