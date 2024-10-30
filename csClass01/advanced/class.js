// class Animal{
//     name = "travis"
//     color = "black"

//     show(){
//         console.log("hello from class");
//     }
// }

// const cat new Animal()
// console.log(cat.name);
// cat.show()

class Animal {
    // name;
    // color;
    constructor(petName, petColor){
        this.name = petName;
        this.color = petColor;
    }
    showInfo(){
        console.log(`my pet name is ${this.name}. color is ${this.color}`);
    }
}

const cat = new Animal("travis", "white");
const dog = new Animal("tom", "black");
const cow = new Animal("tom", "black");
// console.log(cat.color);
// console.log(dog.color);

cat.showInfo()
cow.showInfo()