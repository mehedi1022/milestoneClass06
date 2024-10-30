function greeting(geet, name){
    geet(name);
}

// greeting('Halima');
// const number = 45;
// const numbers = [45, 56];
// const laptop = {price: 4500, band: 'levov'}
function geet(name){
    console.log('good',name);
}

function geetEven(name){
    console.log('good even',name);
}
greeting(geet, 'Tom');
greeting(geet, 'breedy');
greeting(geetEven, 'solaiman');

function submit(){
    console.log('submit');
}

document.getElementById('btn-submit').addEventListener('click',submit)