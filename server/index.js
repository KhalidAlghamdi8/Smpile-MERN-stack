import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';


const app = express();
app.use(cors());

app.use('/students', studentRoutes);
app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));



const CONNECTION_URL = 'mongodb+srv://khalidDB:6223817Kk@cluster0.s9xbi.mongodb.net/students?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;


mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => app.listen(PORT, () =>
    console.log(PORT)
)).catch((err) => console.log(err.message))


mongoose.set('useFindAndModify', false);