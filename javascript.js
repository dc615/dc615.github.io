const shirts = document.getElementById("shirts");
const proj = document.getElementById("projects");
const header = document.querySelector("header");
const res = document.getElementById("resources");
const newborder = document.getElementById("newborder");
const remchild = function(el){
    if(el.firstElementChild){
        el.removeChild(el.firstElementChild)}
}
const goHome = function(){
    let cal = document.getElementById("calendar");
    window.scrollTo(0,0);
    remchild(cal);    
    shirts.classList.add("hidden");
    shirts.classList.add("hidden");
    proj.classList.add("hidden");
    res.classList.add("hidden");
}
const showCal = function(){
    res.classList.add("hidden");
    shirts.classList.add("hidden");
    proj.classList.add("hidden");
    if(!document.getElementById("calendar").firstElementChild){
    let cal = document.createElement("iframe");
    cal.src = "src/calhtml.html";
    cal.classList.add("calendar");
    document.getElementById("calendar").appendChild(cal);}
    let nnewborder = document.getElementById("newborder").offsetTop;
    let nheader = document.querySelector("header").offsetHeight;
    window.scroll(0,newborder.offsetTop-header.offsetHeight)
}

const showRes = function(){
    window.scroll(0,newborder.offsetTop-header.offsetHeight)
    let cal = document.getElementById("calendar");
    remchild(cal);
    res.classList.remove("hidden");
    proj.classList.add("hidden");
    shirts.classList.add("hidden");
}

const showProj = function(){
    window.scroll(0,newborder.offsetTop-header.offsetHeight)
    let cal = document.getElementById("calendar");
    remchild(cal);
    shirts.classList.add("hidden");
    res.classList.add("hidden");
    proj.classList.remove("hidden");
}

const showShirt = function(){
    window.scroll(0,newborder.offsetTop-header.offsetHeight)
    let cal = document.getElementById("calendar");
    remchild(cal);
    proj.classList.add("hidden");
    shirts.classList.remove("hidden");
}
document.getElementById("homelink").addEventListener("click",goHome);
document.getElementById("callink").addEventListener("click",showCal);
document.getElementById("projlink").addEventListener("click",showProj);
document.getElementById("shirtlink").addEventListener("click",showShirt);
document.getElementById("reslink").addEventListener("click",showRes);
