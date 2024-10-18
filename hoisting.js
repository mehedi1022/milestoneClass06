
printf5();
printf10();
for(let i = 0; i < 5; i++){
    console.log(i);
}

// console.log('outside', i);

function printf5(){
    console.log('inside ',5);
}

const printf10 = function(){
    console.log('in pri10', 10);
}