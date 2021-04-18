const  perCent = document.getElementsByClassName("percent");
const  container = document.getElementsByClassName("water-container");
const  cups = document.querySelectorAll(".small-cup");
const litre = document.getElementById("litres");



cups.forEach( (cup,index) =>{
    cup.addEventListener("click",()=> highlightCup(index))
})



function highlightCup(index){



    cups.forEach((singleCup, index2)=>{
if (index2<=index) {
    singleCup.classList.add("full")
}else{
    singleCup.classList.remove("full")
}
    })
}