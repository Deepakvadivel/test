let toggle =document.querySelector(".toggle");
let navbar =document.querySelector("nav ul")

toggle.onclick=()=>{
    navbar.classList.toggle("show");
}
let typed= new Typed(".auto-input",{
    strings:[ ,"Developer","Freelancer"],
    typeSpeed:90,
    backSpeed:90,
    loop:true
   })