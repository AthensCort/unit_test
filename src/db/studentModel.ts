//Carolina de Jesus Ortega Cepeda
//A01282386
import {} from "module"; //aparentemente lo tengo que fozar a se run modulo
//esto me ayudo chat ps de plano no me lo identificaba como modulos
class StudentService {
    private students = [
        //Poniendo 3 ejemplos que son los que vamos a usar
      { matricula: "A001", nombre: "Juan Pérez", calificacion: 95, adeudos: false },
      { matricula: "A002", nombre: "María López", calificacion: 85, adeudos: true },
      { matricula: "A003", nombre: "Carlos Gómez", calificacion: 60, adeudos: false },
    ];
  
    getAllStudents() {
      return this.students;
    }
  }
  
  export default new StudentService();
  