import express from 'express';
const router = express.Router();
import studentsController from './../controllers/studentsController';


router.route('/')
    .get(studentsController.getAllStudents)
    .post(studentsController.createStudent)
    .patch(studentsController.updateStudent)
    .delete(studentsController.deleteStudent)

export default router