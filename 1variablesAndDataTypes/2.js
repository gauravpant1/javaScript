let fullName = "Guarav Pant";// can't be redeclared but can be updated
console.log(fullName);
const pi = 3.14;// can't be redeclared or updated
var xyz = "hello"; // can be redeclared and updated

console.log(typeof(fullName));

// creating an object

const student = {
    name:"Gaurav Pant",
    age:23,
    isPass:true,
    faculty:"BEI"
};

// accessing the specific key of an object

// Method 1 -> objName.key
// Method 2 -> objName["key"]

console.log(student.name);
console.log(student["faculty"]);

// adding and deleting in object

student.city = "pokhara";
student.phone = 9888023903;

delete student.phone;

