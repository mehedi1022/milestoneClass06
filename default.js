// const add = (x = 0, y = 0) => {
//     console.log(x + y);
// }

// add(2, 3)
// add(2)
// add()

const person = {
    name: "mehedi",
    age: 26
}

// const showInfo = (props) => {
//     const {name, age} = props;
//     console.log(name, age);
// }
const showInfo = ({name, age}) => console.log(name, age);


showInfo(person)