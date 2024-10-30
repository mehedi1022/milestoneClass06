class Owner{
    ownerName = "mehedi";
    ownerAge = 26;

    
    constructor(name, age){
        this.ownerName = name;
        this.ownerAge = age;
    }

    ownerInfo(){
        console.log(`ownerName: ${this.ownerName}. ownerAge: ${this.ownerAge}`);
    }
}

class Animal {
    name;
    color;
    constructor(petName, petColor){
        // super("mehedi", age)
        super(wName, wAge)
        this.name = petName;
        this.color = petColor;
    }
    showInfo(){
        console.log(`my pet name is ${this.name}. color is ${this.color}`);
    }
}

const cat = new Animal("travis", "white");
cat.showInfo()
cat.ownerInfo()