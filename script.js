const menuBtn = document.getElementById("menu-btn")
const mainNav = document.querySelector(".main-nav")

menuBtn.addEventListener("click", (e)=>{
    let navClass = mainNav.classList
    if(navClass.contains("show")){
        mainNav.classList.remove("show")
    }
    else{
        mainNav.classList.add("show")
    }
})
