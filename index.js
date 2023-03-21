console.log("hello world");

let popUpImg = document.querySelector(".popUpImg");
console.log(popUpImg)


let images = document.querySelector(".readMoreImg");
images.addEventListener("click",()=>{
    // console.log(images);
    popUpImg.classList.remove("active");
});

let closeIcon = document.querySelector('.closeImg');
closeIcon.addEventListener("click", ()=>{
    popUpImg.classList.add("active")
})

