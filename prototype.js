function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  var myFather = new Person("John", "Doe", 50, "blue");
  var myMother = new Person("Sally", "Rally", 48, "green");
console.log("My father is " + myFather.age + ". My mother is " + myMother.age); 


const Person = function(name){
    this.name = name;
    this.canTalk = true;

}
Person.prototype.greet() {
    if (this.canTalk)
    console.log(`Hi, i am + ${name}`);
    
}
let salamu = newPerson("ken");
salamu.greet();
