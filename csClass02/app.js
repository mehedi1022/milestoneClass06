// async topic

// async function test(){
//     return "Gias"
// }

// const result = test();
// console.log(result);

// const a = 10;
// const b = 20;

// console.log("hello from 5");
// const sum = a + b;

// const test = async() => {
// const response = await fetch("https://openapi.programming-hero.com/api/news/category/01")

// const data = await response.json();
// console.log(data);
// }
// test();

// console.log(sum);

//project start from here

const loadCategory = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await response.json();

    // for(const item of data.data.news_category){
    //     console.log(item);
    // }
const categoryContainer = document.getElementById("category-bar-container");
    data.data.news_category.forEach((item) => {
        const div = document.createElement("div");
        div.innerHTML = `<button>${item.category_name}</button>`;
        categoryContainer.appendChild(div);
    })
}



const loadNews = async() => {
    const response = await fetch('https://openapi.programming-hero.com/api/news/category/01');
    const data = await response.json();

    // const allData = data.data;
    // allData.forEach((item) => {
    //     console.log(item);
    // })

    data.data.forEach((item) => {
        console.log(item);
    })
}

loadNews()



loadCategory();