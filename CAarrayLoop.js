// Our Person constructor
function Person(name, age) {
    this.name = name;
    this.age = age;
    }

// Now we can make an array of people
var family = new Array;

// loop through our new array
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person("timmy", 6);
var timer = family.length;

for (i = 0; i < timer; i++) {
    console.log(family[i].name);
    }

