const menu = document.getElementById("menu-items")
const menuBtn = document.getElementById("menu-btn")
const menuItemHTMLCollection = document.getElementsByClassName("menu-item")

menuBtn.addEventListener("click",()=>{
    menu.classList.toggle("show-menu")
})

const menuItems= [...menuItemHTMLCollection]

menuItems.forEach(item => {
    item.addEventListener("click", ()=>{
        menu.classList.remove("show-menu")
    })
});