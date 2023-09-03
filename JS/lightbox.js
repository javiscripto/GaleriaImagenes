
const imagenes=[
    {
        id:1,
        src:"/imagenes/emprend1.jpg"
    },
    {
        id:2,
        src:"/imagenes/code.jpg" 
    },
    {
        id:3,
        src:"/imagenes/coding-1841550_1920.jpg"
    },
    {
        id:4,
        src:"imagenes/web-design.jpg"
    }
];

const galeriaDOM=document.querySelector(".galeria");



//renderizar imagenes en el dom
imagenes.forEach((imagen)=>{
    const card= document.createElement("div");
    card.classList.add("galeria-card");
    card.innerHTML=`
    <img src=${imagen.src} id="${imagen.id}" class="galeria-img" alt="">
    `;
    galeriaDOM.appendChild(card)
});

const display=document.querySelector(".displayOff");




galeriaDOM.addEventListener("click",(e)=>{
    let ruta= e.target.src;
    display.innerHTML=` 
    <img src="${ruta}" alt="" class="display-img">
    <img src="/imagenes/bx-x.svg" id="close">
    `;
    display.classList.toggle("displayOn");
    const close=document.getElementById("close");
   
    close.addEventListener("click",()=>{
        display.classList.remove("displayOn")
    })
    
})












