// function show(){
//     console.log("mehedi hasan");
// }

// function fun1(age,callback){
//     console.log("my age is: ", age);
//     callback(); 
// }

// fun1(26, show)

// function show(name, age){
//     console.log("first name is: ", name, "age is: ", age);
// }

// function fun1(name,age,callback){
//     console.log("hello from first function");
//     setTimeout(() => {

//         callback(name,age); 
//     },2000)
// }

// fun1("MEHED",26, show)


function a(){
    console.log("hellow from callback");
}
function main(callback){
callback()
}
main(a)