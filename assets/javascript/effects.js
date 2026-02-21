const tabs=document.querySelectorAll(".tab");
const panels=document.querySelectorAll(".panel");

tabs.forEach(tab=>{
tab.onclick=()=>{
tabs.forEach(t=>t.classList.remove("active"));
panels.forEach(p=>p.classList.remove("active"));

tab.classList.add("active");
document.getElementById(tab.dataset.tab).classList.add("active");
};
});

document.querySelectorAll(".card").forEach(card=>{
card.addEventListener("mousemove",e=>{
let r=card.getBoundingClientRect();
let x=(e.clientX-r.left)/r.width;
let y=(e.clientY-r.top)/r.height;

let rx=(y-.5)*10;
let ry=(x-.5)*-10;
card.style.transform=`rotateX(${rx}deg) rotateY(${ry}deg)`;
});
card.addEventListener("mouseleave",()=>{
card.style.transform="rotateX(0) rotateY(0)";
});
});

document.getElementById("cvTab").addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = "./assets/images/me.HEIC";
    link.download = "Kevin_Kingslin_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});