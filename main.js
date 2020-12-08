const crossList = document.querySelectorAll("ol li")
const fadeList = document.querySelectorAll("ul li")
const collapseImages = document.querySelectorAll("#row img")
const meteoButton = document.querySelector("#destroy-all") 

for(const crossItem of crossList) {
    crossItem.addEventListener('click', (event) => {
        event.target.style.textDecoration = "line-through"
    })
}

for(const fadeItem of fadeList) {
    fadeItem.addEventListener('click', (event) => {
        event.target.style.opacity = 0;
    })
}

for(const image of collapseImages) {
    image.addEventListener('click', (event) => {
        event.target.style.width = "0px";
    })
}

meteoButton.addEventListener('click', () => {
    for(const crossItem of crossList) {
        crossItem.style.textDecoration = "line-through"
    }
    for(const fadeItem of fadeList) {
       fadeItem.style.opacity = 0;
    }
    for(const image of collapseImages) {
        image.style.width = "0px";
    }
})