import { getBlogPosts } from "./data";
import "./style.css";
import "./test/date/prinDate"
// 导入的testImage是打包后的图片路径
import TestImage from "./assets/images/test.png";


const blogs = getBlogPosts()


const ul = document.createElement("ul");

blogs.forEach(blog => {
    const li = document.createElement("li");
    li.innerText = blog;
    ul.appendChild(li);
})


document.body.appendChild(ul);


const image = document.createElement("img");

image.src = TestImage;

document.body.prepend(image);


const h1 = document.createElement("h1");

h1.innerText = "webpack Learing";

document.body.prepend(h1);


