let content1 = document.getElementById("box1");
let content2 = document.getElementById("box2");
let content3 = document.getElementById("box3");
let content4 = document.getElementById("box4");
let content5 = document.getElementById("key");

//Para hacerlo diferente //

content1.addEventListener("click", (background) =>{
    background.target.style.backgroundColor = "black";
    background.target.style.color = "white";
})

content2.addEventListener("click", (background) =>{
    background.target.style.backgroundColor = "gray";
    background.target.style.color = "white";
})

   // ---------------  //

let changeBg = (anotherBg) => {
    anotherBg.target.style.backgroundColor = "black";
    anotherBg.target.style.color = "white";
}

content3.addEventListener("click", changeBg);
content4.addEventListener("click", changeBg);

let content = document.querySelector(".container");

function createContent6(divBg) {
    let content6 = document.createElement("div");
    content6.style.width = "200px";
    content6.style.height = "200px";
    content6.style.backgroundColor = divBg;
    content6.style.border = "solid 2px black";
    content6.style.borderRadius = "1rem"


    let newText = document.createTextNode("I'm another Lorem Ipsum");
    content6.appendChild(newText);
    content6.style.display = "flex"
    content6.style.justifyContent = "center"
    content6.style.alignItems = "center"
    content.appendChild(content6);
}

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    content5.style.color = "pink"
    content5.style.backgroundColor = "purple"
    } else if (event.key === 's') {
    content5.style.color = "orange"
    content5.style.backgroundColor = "gray"
    } else if (event.key === 'd') {
    content5.style.color = "skyblue"
    content5.style.backgroundColor = "pink"
    } else if (event.key === "q") {
    createContent6("skyblue")
    } else if (event.key === "w") {
    createContent6("orange")
    } else if (event.key === "e") {
    createContent6("brown")
    }
})




