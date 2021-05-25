import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    regNo: Number,
    studentName: String,
    grade: String,
    section: {
        type: String,
    }
});

const student = mongoose.model('student', studentSchema);

export default student;