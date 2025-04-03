class StudentService {
    private students = [
      { matricula: "A001", nombre: "Juan Pérez", calificacion: 95, adeudos: false },
      { matricula: "A002", nombre: "María López", calificacion: 85, adeudos: true },
      { matricula: "A003", nombre: "Carlos Gómez", calificacion: 60, adeudos: false },
    ];
  
    getAllStudents() {
      return this.students;
    }
  }
  
  export default new StudentService();
  