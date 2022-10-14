//JavaScript Objects
var student = {};
student.age = 15
student.grade = 3;
marks = [65,78,69,95,85];
student.marks = marks;

console.log(student);//{ age: 15, grade: 3, marks: [ 65, 78, 69, 95, 85 ] }


//Here is an example of a class in JavaScript

function ExampleCalss(){
    this.name = "JavaScript";
    this.sayName = function(){
        console.log(this.name);
    }
}

var example1 = new ExampleCalss();
example1.sayName();

