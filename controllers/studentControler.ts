import StudentService from "../db/studentModel";

class StudentController {
  private studentService;

  constructor(studentService: typeof StudentService) {
    this.studentService = studentService;
  }

  getAllStudents() {
    const estudiantes = this.studentService.getAllStudents();

    return estudiantes.map((alumno) => {
      let mensaje = "";

      if (alumno.calificacion > 90) {
        mensaje = alumno.adeudos
          ? "Tenías honores pero tienes un adeudo."
          : "Te graduaste con honores.";
      } else if (alumno.calificacion >= 70) {
        mensaje = "Pasaste muy apenas.";
      } else {
        mensaje = alumno.adeudos
          ? "Expulsado."
          : "Como no tienes adeudo, tienes derecho a un examen de recuperación.";
      }

      return { ...alumno, mensaje };
    });
  }
}

export default StudentController;
