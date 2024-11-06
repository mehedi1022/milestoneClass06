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
        div.innerHTML = `<button onclick="loadNews('${item.category_id}')">${item.category_name}</button>`;
        categoryContainer.appendChild(div);
    })
}


// function getId(catid){
//     console.log(catid);
// }


const loadNews = async (catId) => {
    // console.log(catId);
    document.getElementById("loading-spiner").style.display = "block";
    const response = await fetch(`https://openapi.programming-hero.com/api/news/category/${catId}`);
    const data = await response.json();

    // const allData = data.data;
    // allData.forEach((item) => {
    //     console.log(item);
    // })
const newsContainer = document.getElementById("news-container");

newsContainer.innerHTML = '';

if(data.data.length > 0){
console.log("data ache");
}

    data.data.forEach((item) => {
        document.getElementById("loading-spiner").style.display = "none";

        const div = document.createElement("div");
        div.classList.add("singleNews");
        div.innerHTML = `
        <div class="singleNews">
            <div class="news-photo">
                <img src=${item.image_url} alt="">
            </div>
            <div class="news-info">
                <div class="news-header">
                    <h4>${item.title}</h4>
                    <p class="news-badge">
                        ${item.rating.badge} <sup>
                            <h6 class="news-rating">${item.rating.number}</h6>
                        </sup>
                    </p>
                </div>
                <p>
                   ${item.details.slice(0, 200)}
                </p>
                <div class="news-footer">
                    <div class="author">
                        <div class="">
                            <img src="./img/author.jpg" alt="">
                        </div>
                        <div class="author-info">
                            <h6>MD DAVID</h6>
                            <p>Date: 12-12-2004</p>
                        </div>
                    </div>
                    <div class="Views author">
                        <img class="view-img"
                            src="https://uxwing.com/wp-content/themes/uxwing/download/health-sickness-organs/view-icon.png"
                            alt="">
                            <p>450</p>
                    </div>
                    <div class="details-btn-container">
                    <button onclick="check('${item.title}')" class="details-btn">Details</button>
                    </div>
                </div>
            </div>
        </div>
        `
        newsContainer.appendChild(div);
    })
}

const check = (text) => {
    console.log(text);
}




const handleSearch = () => {
    const value = document.getElementById("search-box").value;
    if(value){
loadNews(value)
    }else{
        alert("Please enter a valid catId");
    }
}




loadNews("01")



loadCategory();


// const name = "gias udddin";
// console.log(name.slice(0,3));


const obj = {
    status: true,
    data: [
        {name: "hero", age: "25", status: true},
        {name: "Alom", age: "22", status: true},
        {name: "JKR", age: "00"},
    ]    
}


if (obj.data[4]?.status){
console.log("achee");
}
else{
    console.log("etai ami likhsi");
}
// console.log(obj.data[2].status);
// console.log(obj.data[2].status?obj.data[0].status:"eta ami likhsi");
// console.log(obj.data[0].status?"achee":"eta ami likhsi");