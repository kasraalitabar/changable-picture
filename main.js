const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");
const img4 = document.querySelector(".img4");
const img5 = document.querySelector(".img5");


function first(){
    const img1src = img1.getAttribute("src");
    const img2src = img2.getAttribute("src");

    img1.setAttribute("src", img2src)
    img2.setAttribute("src", img1src)
}

function sec(){
    const img1src = img1.getAttribute("src");
    const img3src = img3.getAttribute("src");

    img1.setAttribute("src", img3src)
    img3.setAttribute("src", img1src)
}
function th(){
    const img1src = img1.getAttribute("src");
    const img4src = img4.getAttribute("src");

    img1.setAttribute("src", img4src)
    img4.setAttribute("src", img1src)
}
function four(){
    const img1src = img1.getAttribute("src");
    const img5src = img5.getAttribute("src");

    img1.setAttribute("src", img5src)
    img5.setAttribute("src", img1src)
}