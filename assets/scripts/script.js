/*

- Paradigma
- Estructarado
- Instancia
- Plantilla

Paradigma de programacion
- Paradigma = la forma de hacer algo
- Paradigma de programacion = la forma de programar, la forma de dar soluciones a problemas que se nos presentan.

Paradigmas de programacion (formas de programar):

    - Programacion imperativa
    Basada en instrucciones detalladas a la computadora, ejecutadas en una secuencia determinada (C, C++, Java, Python, Swift, JS)

    - Programacion basada en eventos
    Enfocada en la gestion y respuesta de eventos (JS, C#, Python)

    - Programacion declarativa: Explicar lo que necesitamos obtener, mas que como se hace (HTML, SQL)

    - Programacion Orientada a Objetos: Toma ejemplos del mundo real (objetos), comprende sus caracteristicas (propiedades o atributos) y con base en su comportamiento o acciones (metodos), resolvemos problemas reales.

Clase: Plantillas para crear objetos. Nos ayudan a definir un tipo de objeto y crar instancias (materializacion) de este tipo de objetos.

Objeto: Materialización de la información o los datos con los que cuenta mi plantilla o clase.

// Mostrar un objeto similar a este
let Felipe = {
    nombre: "Felipe",
    apellido: "Maqueda",
    edad: 31,
    email: "felipemaqueda@mail.com",
    telefono: "1234567890",
}

*/

//Creando mi primera clase
class persona {

    //1. Propiedades o atributos de mi clase de forma general
    nombre = "";
    apellido = "";
    edad = 0;
    email = "";
    telefono = "";
    rol = "";
    

    //3. Defino un constructor que tomará los atributos como "material" para la instancia o creación de mis objetos
    //El constructor es una 'función especial', cuya función es la de construir o instanciar objetos
    //Al pasar los atributos como parámetros, es importante cuidar el orden en que fueron declarados
    constructor(nombre, apellido, edad, email, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
        this.telefono = telefono;
    }//Cierre del constructor

    
    //2. Métodos o comportamientos (funciones)
    //Para definir los métodos de mi objeto, ya no utilizo la palabra function
    hablar(){
        console.log("Hola, estoy hablando...");
    }//Cierre del método hablar()

    dormir(){
        console.log("ZzzzZzzz");
    }//Cierre del método dormir()

    mostrarInfo(){
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Teléfono: ", this.telefono);
    }//Cierre del método mostrarInfo()

}//Cierre de mi clase "persona"


/*
Instancia de objetos del tipo persona

Sintaxis básica de una instancia:
variable nombreObjeto = palabra reservada new nombreClase (parametros o atributos)

let nombreObjeto = new nombreClase(parametros);

*/

let persona1 = new persona("Felipe", "Maqueda", 31, "felipemaqueda@mail.com", "1234567890");
let persona2 = new persona("Naruto", "Uzumaki", 22, "naruto@hokae.com", "0987654321");
let brandon = new persona("Brandon", "Palacios", 26, "brandon.palacios@mail.com", "7751856097");
let kratos = new persona("Kratos", "Stitch", 2, "kratos@mail.com", "1122334455");

//Imprimir el objeto completo
console.log(persona1);

//Imprimir un atributo del objeto (apellido)
console.log(persona1.apellido, persona1.edad);

//Invocar un método del objeto
persona1.dormir();
persona2.mostrarInfo();


/*
Existen 4 pilares de la POO que nos permiten ampliar las caracteristicas y dotar de funcionalidades y operaciones a nuestro codigo.

    - Herencia
    - Polimorfismo
    - Encapsulamiento
    - Abstraccion
*/

//Creando una nueva clase para aplicar la herencia (extends)

class paciente extends persona{

    //1. Definición de atributos o propiedades
    doctorAtiende = ""; //Nombre del doctor que atiende
    historialMedico = "";   //si o no cuenta con historial medico
    alergias = "";  //alergias existentes

    //3. Generación del constructor
    constructor(nombre, apellido, edad, email, telefono, doctorAtiende, historialMedico, alergias) {
        super(nombre, apellido, edad, email, telefono); //super indica que traemos cosas de la clase superior (padre)
        this.doctorAtiende = doctorAtiende;
        this.historialMedico = historialMedico;
        this.alergias = alergias;
    }

    //2. Métodos
    mostrarInfo(){
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Teléfono: ", this.telefono);
        console.log("Doctor que atiende: ", this.doctorAtiende);
        console.log("Historial médico: ", this.historialMedico);
        console.log("Alergias: ", this.alergias);
    }//Cierre del método mostrarInfo()
}

//Instancia de un paciente
let paciente1 = new paciente("Jesús", "González", 31, "jesusgonzalez@mail.com", "1234567890", "Dr. House", "No tiene", "Penicilina");

//Imprimir objeto paciente
console.log(paciente1);

//Uso del método mostrarInfo()
paciente1.mostrarInfo();

paciente1.dormir();


//Diferencias entre un objeto literal (normal), y un objeto tipo JSON

//Todas las claves y los valores van dentro de comillas
//Envío de información a servidores
let objetoJSON = {
    "nombre": "Jesus",
    "apellido": "Gonzalez",
    "edad": 31,
    "email": "jesusgonzalez@mail.com",
    "telefono": "55987654321",
    "doctorAtiende": "Doctor Simi",
    "historialMedico": "No tiene",
    "alergias": "Penicilina"
}

//Tratar la información y sacar datos específicos para DOM
let objetoLiteral = {
    nombre: "Jesus",
    apellido: "Gonzalez",
    edad: 31,
    email: "jesusgonzalez@mail.com",
    telefono: "55987654321",
    doctorAtiende: "Doctor Simi",
    historialMedico: "No tiene",
    alergias: "Penicilina"
}

let objetoJSONSerializado = '{"nombre":"Jesus","apellido":"Gonzalez","edad":31,"email":"jesusgonzalez@mail.com","telefono":"55987654321","doctorAtiende":"Doctor Simi","historialMedico":"No tiene","alergias":"Penicilina"}'


///////////////////////////////////////////////////////////////////////////////////


/*
Realizar un programa que conste de una clase llamada Alumno, que tena como atributos el nombre y la nota del alumno. Definir metodos para inicizializar sus atributos (metodo constructor), imprimirlos y mostar un mensaje con el resultado de la nota si ha aprobado o no.

    Atributos:
        - nombre
        - nota (calificación)

    Metodos:
        - constructor
        - Método evaluación (imprimir si aprobó o no)
        - Método imprimirInfo (imprimir nombre y nota)

    Lógica del negocio:
        - If para evaluar la nota (si la nota es menor a 6, está reprobado)
        - Recuperamos la información por medio de un prompt
        - Generamos 3 instancias para probar mi código (la nota sea igual a 6, la nota sea menor a 6, la nota sea mayor a 6)
*/

//Creación de la clase (3 pasos)
class alumno {

    // 1. Atributos o propiedades
    nombre;
    nota;

    // 3. Constructor donde le dí identidad a mi objeto (this)
    constructor(nombre, nota){
        this.nombre = nombre;
        this.nota = nota;
    }

    // 2. Métodos
    //Método general, un método que no requiere personalización porque aplica para cualquier objeto
    evaluacion(nota){
        if (nota >= 6) {
            console.log("Aprobado");
        } else {
            console.log("Reprobado");
        }
    }
    //
    imprimirInfo(){
        console.log("Nombre del alumno:", this.nombre);
        console.log("Nota del alumno:", this.nota);
    }

}

//Instancias de alumnos (3 escenarios)
let alumno1 = new alumno("Felipe", 3);
let alumno2 = new alumno("Felipe", 8);
let alumno3 = new alumno("Felipe", 6);

//Invocando métodos
alumno1.imprimirInfo();
alumno1.evaluacion(alumno1.nota);   //Reprobado
alumno2.imprimirInfo();
alumno2.evaluacion(alumno2.nota);   //Aprobado
alumno3.imprimirInfo();
alumno3.evaluacion(alumno3.nota);   //Aprobado