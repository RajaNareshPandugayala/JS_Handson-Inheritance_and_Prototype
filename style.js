// Question 1: Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype.

document.write('<p><b>Q1 : "Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype."</b><br><br><i style="color: darkred;"><b>Code : </b><br><i style="color: darkgreen;">// Create a Parent object constructor</i><br>function Parent(name) {<br>        this.name = name;<br>    }<br><br><i style="color: darkgreen;">// Attach a method to the Parent(s) prototype</i > <br>    Parent.prototype.greet = function () {<br>        console.log(`Hello, my name is ${this.name}`);<br>    }<br><br><i style="color: darkgreen;">    // Create a Child object constructor</i><br>    function Child(name, age) {<br><i style="color: darkgreen;">        // Call the Parent constructor to inherit properties</i><br>        Parent.call(this, name);<br>        this.age = age;<br>    }<br><br><i style="color: darkgreen;">    // Inherit the Parent(s) prototype to Child</i><br>    Child.prototype = Object.create(Parent.prototype);<br><br><i style="color: darkgreen;">// Create an instance of the Parent</i><br>const parent = new Parent("John");<br><i style="color: darkgreen;">// Create an instance of the Child</i><br>const child = new Child("Alice", 5);<br><br><i style="color: darkgreen;">// Call the greet method on the parent</i><br>parent.greet();<i style="color: darkgreen;"> // Output: Hello, my name is John</i><br><br><i style="color: darkgreen;">// Call the greet method on the child</i><br>child.greet();<i style="color: darkgreen;"> // Output: Hello, my name is Alice</i></i></p > ');



// Create a Parent object constructor
function Parent(name) {
    this.name = name;
}

// Attach a method to the Parent's prototype
Parent.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
}

// Create a Child object constructor
function Child(name, age) {
    // Call the Parent constructor to inherit properties
    Parent.call(this, name);
    this.age = age;
}

// Inherit the Parent's prototype to Child
Child.prototype = Object.create(Parent.prototype);

// Create an instance of the Parent
const parent = new Parent("John");
// Create an instance of the Child
const child = new Child("Alice", 5);

// Call the greet method on the parent
parent.greet(); // Output: Hello, my name is John

// Call the greet method on the child
child.greet(); // Output: Hello, my name is Alice


document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Hello, my name is John')}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify('Hello, my name is Alice')}</i></pre>`);


document.write(`<p><br><mark><b>Reason for output:</b></mark><br>1.We start by creating a <b>Parent</b> constructor function that takes a <b>name</b> parameter and sets it as a property on the parent object.<br>2.Next, we attach a method <b>greet</b> to the <b>Parent</b>'s prototype. This method allows the parent object to introduce itself.<br>3.We then create a <b>Child</b> constructor function that takes both <b>name</b> and <b>age</b> parameters. To inherit the properties of the <b>Parent</b> object, we call the <b>Parent</b> constructor within the <b>Child</b> constructor using <b>Parent.call(this, name).</b><br>4.To ensure that the <b>Child</b> objects also inherit the methods from the <b>Parent</b> prototype, we set the <b>Child</b> prototype to be an object created from the <b>Parent</b> prototype using <b>Object.create(Parent.prototype).</b><br>5.We create instances of both the <b>Parent</b> and <b>Child</b> objects: <b>parent</b> and <b>child.</b><br>6.Finally, we call the <b>greet</b> method on both the <b>parent</b> and <b>child</b> objects. Both calls produce the expected output because the <b>Child</b> objects inherit the <b>greet</b> method from the <b>Parent</b> prototype. The key here is that the prototype chain allows child objects to access methods defined on their parent's prototype.</p><hr>`);






// Question 2: Write code to explain prototype chaining
document.write('<p><b>Q2 : "Write code to explain prototype chaining"</b><br><br><i style="color: darkred;"><b>Code : </b><br><i style="color: darkgreen;">// Step 1: Create a constructor function</i><br>function Animal(name) {<br>        this.name = name;<br>    }<br><br><i style="color: darkgreen;">// Step 2: Add a method to the Animal prototype</i><br>Animal.prototype.sayHello = function () {<br>        console.log("Hello, I`m ${this.name}");<br>    }<br><br><i style="color: darkgreen;">// Step 3: Create an instance of Animal</i><br>const cat = new Animal("Whiskers");<br><br><i style="color: darkgreen;">// Step 4: Create a new constructor function that inherits from Animal</i><br>function Bird(name, color) {<br>    Animal.call(this, name); // Call the Animal constructor to set the "name" property<br>    this.color = color;<br>}<br><br><i style="color: darkgreen;">// Step 5: Set up prototype chaining by linking Bird(s) prototype to Animal(s) prototype</i><br>Bird.prototype = Object.create(Animal.prototype);<br><br><i style="color: darkgreen;">// Step 6: Add a method to the Bird prototype</i><br>Bird.prototype.fly = function () {<br>    console.log(`${this.name} is flying`);<br>}<br><br><i style="color: darkgreen;">// Step 7: Create an instance of Bird</i><br>const parrot = new Bird("Polly", "green");<br><br><i style="color: darkgreen;">// Testing the objects</i><br>cat.sayHello();   <i style="color: darkblue;">// Output: Hello, Im Whiskers</i><br>parrot.sayHello(); <i style="color: darkblue;">// Output: Hello, Im Polly</i><br>parrot.fly();<i style="color: darkblue;">// Output: Polly is flying</i></i></p>');



// Step 1: Create a constructor function
function Animal(name) {
    this.name = name;
}

// Step 2: Add a method to the Animal prototype
Animal.prototype.sayHello = function () {
    console.log(`Hello, I'm ${this.name}`);
}

// Step 3: Create an instance of Animal
const cat = new Animal("Whiskers");

// Step 4: Create a new constructor function that inherits from Animal
function Bird(name, color) {
    Animal.call(this, name); // Call the Animal constructor to set the 'name' property
    this.color = color;
}

// Step 5: Set up prototype chaining by linking Bird's prototype to Animal's prototype
Bird.prototype = Object.create(Animal.prototype);

// Step 6: Add a method to the Bird prototype
Bird.prototype.fly = function () {
    console.log(`${this.name} is flying`);
}

// Step 7: Create an instance of Bird
const parrot = new Bird("Polly", "green");

// Testing the objects
cat.sayHello();   // Output: Hello, I'm Whiskers
parrot.sayHello(); // Output: Hello, I'm Polly
parrot.fly();      // Output: Polly is flying



document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify("Hello, I'm Whiskers")}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify("Hello, I'm Polly")}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify("Polly is flying")}</i></pre>`);



document.write(`<p><br><mark><b>Reason for output:</b></mark><br>1.We start by creating a constructor function <b>Animal</b> that takes a <b>name</b> parameter and sets it as an instance property.<br>2.We add a method <b>sayHello</b> to the <b>Animal.prototype.</b> This method allows any instance of <b>Animal</b> to say hello.<br>3.We create an instance of <b>Animal</b> called <b>cat.</b><br>4.Next, we create a new constructor function <b>Bird</b> that also takes a <b>name</b> parameter, but in addition, it takes a <b>color</b> parameter. We call the <b>Animal</b> constructor within <b>Bird</b> using <b>Animal.call(this, name)</b> to set the <b>name</b> property for instances of <b>Bird.</b> This is an example of how you can reuse code between constructor functions in JavaScript.<br>5.To establish prototype chaining, we set <b>Bird.prototype</b> to a new object created with <b>Object.create(Animal.prototype).</b> This creates a new object whose prototype is set to the <b>Animal.prototype.</b> This means that any instances of <b>Bird</b> will have access to properties and methods defined on <b>Animal.prototype.</b><br>6.We add a <b>fly</b> method to <b>Bird.prototype</b> to give instances of <b>Bird</b> the ability to fly.<br>7.We create an instance of <b>Bird</b> called <b>parrot.</b><br><br>Now, when we call <b>sayHello</b> on <b>cat</b>, it can access the method from its own prototype <b>(Animal.prototype).</b> Similarly, when we call <b>sayHello</b> on <b>parrot</b>, it can also access the method from its own prototype <b>(Animal.prototype)</b> even though <b>parrot</b> is an instance of <b>Bird.</b> This is possible due to prototype chaining.<br><br>Additionally, <b>parrot</b> can call the <b>fly</b> method because it inherits it from its prototype chain.</p><hr>`);







// Question 3: Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays


document.write('<p><b>Q3 : "Add a method to calculate sum of all elements in Array in array(s) protype, use that method to calculate sum for multiple arrays"</b><br><br><i style="color: darkred;"><b>Code : </b><br><i style="color: darkgreen;">// Step 1: Add a method to the Array prototype</i><br>Array.prototype.sum = function () {<br>        let sum = 0;<br>        for (let i = 0; i < this.length; i++) {<br>            sum += this[i];<br>        }<br>        return sum;<br>    };<br><br><i style="color: darkgreen;">// Step 2: Use the method to calculate the sum for multiple arrays</i><br>const array1 = [1, 2, 3, 4, 5];<br>const array2 = [10, 20, 30];<br>const array3 = [5, 10, 15, 20];<br><br>const sum1 = array1.sum();<i style="color: darkgreen;"> // Calculates sum of array1</i><br>const sum2 = array2.sum();<i style="color: darkgreen;"> // Calculates sum of array2</i><br>const sum3 = array3.sum();<i style="color: darkgreen;"> // Calculates sum of array3</i><br><br>console.log(`Sum of array1: ${sum1}`);<br>console.log(`Sum of array2: ${sum2}`);<br>console.log(`Sum of array3: ${sum3}`);</i></p> ');




// Step 1: Add a method to the Array prototype
Array.prototype.sum = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum;
};

// Step 2: Use the method to calculate the sum for multiple arrays
const array1 = [1, 2, 3, 4, 5];
const array2 = [10, 20, 30];
const array3 = [5, 10, 15, 20];

const sum1 = array1.sum(); // Calculates sum of array1
const sum2 = array2.sum(); // Calculates sum of array2
const sum3 = array3.sum(); // Calculates sum of array3

console.log(`Sum of array1: ${sum1}`);
console.log(`Sum of array2: ${sum2}`);
console.log(`Sum of array3: ${sum3}`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify(`Sum of array1: ${sum1}`)}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify(`Sum of array1: ${sum2}`)}</i></pre>`);
document.write(`<pre><i style="color: darkblue;"><b>Output: </b>${JSON.stringify(`Sum of array1: ${sum3}`)}</i></pre>`);



document.write(`<p><br><mark><b>Reason for output:</b></mark><br>1.We add a new method <b>sum</b> to the <b>Array</b> prototype.This method iterates through the elements of the array and calculates their sum.<br>2.We create three arrays: <b>array1, array2, and array3,</b> each containing different sets of numbers.<br>3.We use the <b>sum</b> method on each of these arrays to calculate their respective sums:<br><b>sum1</b> calculates the sum of elements in <b>array1.</b><br><b>sum2</b> calculates the sum of elements in <b>array2.</b><br><b>sum3</b> calculates the sum of elements in <b>array3.</b><br>4.Finally, we print out the sums of these arrays using console.log().<br><br> the sums of the elements in each of the three arrays, as calculated by the sum method added to the Array prototype.</p><hr>`);





// Question 4: Write a JavaScript function to retrieve all the names of object's own and inherited properties.

document.write('<p><b>Q3 : "Write a JavaScript function to retrieve all the names of object(s) own and inherited properties."</b><br><br><i style="color: darkred;"><b>Code : </b><br>function getAllPropertyNames(obj) {<br>    let properties = [];<br><br><i style="color: darkgreen;">// Loop through the object and its prototype chain</i><br>while (obj) {<br>    properties = properties.concat(Object.getOwnPropertyNames(obj));<br>    obj = Object.getPrototypeOf(obj);<br>}<br><br><i style="color: darkgreen;">// Remove duplicates and return the result</i><br>return Array.from(new Set(properties));<br>}<br><br>const obj1 = {<br>    a: 1,<br>    b: 2,<br>};<br><br>const obj2 = Object.create(obj1);<br>obj2.c = 3;<br><br>const obj3 = Object.create(obj2);<br>obj3.d = 4;<br><br>console.log(getAllPropertyNames(obj3));</i></p> ');



function getAllPropertyNames(obj) {
    let properties = [];

    // Loop through the object and its prototype chain
    while (obj) {
        properties = properties.concat(Object.getOwnPropertyNames(obj));
        obj = Object.getPrototypeOf(obj);
    }

    // Remove duplicates and return the result
    return Array.from(new Set(properties));
}

const obj1 = {
    a: 1,
    b: 2,
};

const obj2 = Object.create(obj1);
obj2.c = 3;

const obj3 = Object.create(obj2);
obj3.d = 4;

console.log(getAllPropertyNames(obj3));
document.write(`<p><i style="color: darkblue;"><b>Output: </b>${JSON.stringify(getAllPropertyNames(obj3))}</i></p>`);


document.write(`<p><br><mark><b>Reason for output:</b></mark><br>1.<b>function getAllPropertyNames(obj)</b> declares a function that takes an object as its parameter.<br>2.<b>let properties = [];</b> initializes an empty array called <b>properties</b> to store the property names.<br>3.<b>while (obj)</b> is a loop that iterates as long as <b>obj</b> is truthy(not null or undefined).This loop is used to traverse the prototype chain of the object.<br>4.Inside the loop:<br><b>properties = properties.concat(Object.getOwnPropertyNames(obj));</b> retrieves and concatenates the property names of the current object<b>(obj)</b> and adds them to the <b>properties</b> array.<b>Object.getOwnPropertyNames(obj)</b> returns an array of all the own property names of <b>obj.</b><br><b>obj = Object.getPrototypeOf(obj);</b> updates <b>obj</b> to its prototype object(the object it inherits from) by using <b>Object.getPrototypeOf(obj).</b><br>5.After the loop, the <b>properties</b> array will contain all the property names of the original object and its prototype chain.<br>6.<b>Array.from(new Set(properties));</b> is used to remove any duplicate property names by converting the array to a Set(which automatically removes duplicates) and then back to an array.<br><br>In this example, we have three objects: <b>obj1, obj2, and obj3,</b> with a prototype chain: <b>obj3</b> inherits from <b>obj2,</b> which in turn inherits from <b>obj1.</b><br><br><b>obj3</b> has an own property <b>d.</b><br>
<b>obj2</b> has an own property <b>c</b> and inherits <b>a</b> and <b>b</b> from <b>obj1.</b><br>
<b>obj1</b> has own properties <b>a</b> and <b>b.</b></p><hr>`);
