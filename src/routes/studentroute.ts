//Gereal route (base templeate de tweet)
//Carolina Ortega A01282386
import {} from "module";
import { Router } from "express";
import StudentHttpHandler from "../handlers/studentHandler";

const studentHandler = new StudentHttpHandler();
const router = Router();

router.get("/students", studentHandler.getStudents.bind(studentHandler));

export default router;
