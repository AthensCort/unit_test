import { Request, Response, NextFunction } from "express";
//me marcaba error desde hace rato por que taia controller con 2 ll y enrealidad yo lo hice con 1
import StudentController from "../controllers/studentControler";
import studentService from "../db/studentModel";

const studentController = new StudentController(studentService);

class StudentHttpHandler {
  async getStudents(request: Request, response: Response, next: NextFunction) {
    try {
      const students = await studentController.getAllStudents();
      response.json(students);
    } catch (error) {
      next(error);
    }
  }
}

export default StudentHttpHandler;
