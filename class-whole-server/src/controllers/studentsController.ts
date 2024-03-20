const Student = require('../models/Student');
const Course = require('../models/Course');
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');


//@desc Get all students
//@route Get /students
//@access Private
const getAllStudents = asyncHandler(async (req, res) => {
    const students = await Student.find().select('-password').lean();
    if(!students){
        return res.status(400).json({message: 'No students found'})
    }
    res.json(students);
})


//@desc Create new student
//@route POST /students
//@access Private
const createStudent = asyncHandler(async (req, res) => {
    const {firstName, lastName, email, password, role} = req.body;

    //Confirm data
    if(!firstName || !lastName || email || !password || !role){
        return res.status(400).json({message: 'All fields are required'})
    }

    // Check for duplicate
    const duplicate = await Student.findOne({firstName,email}).lean().exec();
    if(duplicate){
        return res.status(409).json({message: 'Duplicate user'})
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10) //salt rounds

    const studentObject = {
        lastName,
        firstName,
        password: hashedPassword,
        role,
    }

    //Create new student and store
    const createdStudent = await Student.create(studentObject)

    createdStudent ? //created
        res.status(201).json({message: `New user ${lastName} ${firstName} was created`})
        :
        res.status(400).json({message: 'Invalid user data received'})
})

//@desc Update a student
//@route PATCH /students
//@access Private
const updateStudent = asyncHandler(async (req, res) => {
    const {id, firstName, lastName, email, password, isActive} = req.body;

    //Confirm data
    if(!firstName || !lastName || email || !password || typeof isActive !== 'boolean'){
        return res.status(400).json({message: 'All fields are required'})
    }

    const student = await Student.findById(id).exec();

    if(!student){
        return res.status(400).json({message: 'User not found'})
    }

    // Check for duplicate
    const duplicate = await Student.findOne({firstName,email}).lean().exec();

    //Allows update to the original user
    if(duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({message: 'Duplicate username'})
    }

    //Hash password
    student.lastName = lastName;
    student.firstName = firstName;
    student.isActive = isActive;

    if(password){
        student.password = await bcrypt.hash(password, 10); //salt rounds;
    }

    //Create new student and store
    const updatedUser = await student.save();
    res.status(200).json({message: `Updated`});
})

//@desc Delete a student
//@route delete /students
//@access Private
const deleteStudent = asyncHandler(async (req, res) => {
    const {id} = req.body;

    if(!id){
        return  res.status(400).json({message: 'Student id required'})
    }

    const student = Student.findById(id).exec();

    if(!student){
        return res.status(400).json({message: 'Student not found'})
    }

    const result = student.deleteOne();

    res.json({message: `Username ${result.lastName}, ${result.firstName} with id:${id} deleted`})

})

export default  {
    getAllStudents,
    createStudent,
    updateStudent,
    deleteStudent,
}