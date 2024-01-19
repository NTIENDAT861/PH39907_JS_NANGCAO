function sayHello(name = 'son',age = 20) {
    console.log("Hello " + name)
    //js template
    console.log(`Helo ${name}. Toi ${age} tuoi`)
    return "okokok"
}

const result = sayHello("Nam")
console.log(result)

//arrow 
 const addNumber = (a,b) => {
    //xu ly logic
        return a + b
 }
 console.log(addNumber(10,8))