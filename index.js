const  perCent = document.getElementById("percent");
const  container = document.getElementsByClassName("water-container");
const  cups = document.querySelectorAll(".small-cup");
const litre = document.getElementById("litres");
const remained = document.getElementById("remained")

// console.log(height)
updateContainer()
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
        updateContainer()
}

function updateContainer() {
    const fullCups = document.querySelectorAll(".small-cup.full").length;
    const allCups = cups.length
    console.log(fullCups)
    
    if (fullCups===0){
    perCent.style.visibility= "hidden" ;
    perCent.style.height= "0"
    
    }else{
        perCent.style.visibility ="visible";
        perCent.style.height= `${fullCups/ allCups * 300}px`
        perCent.innerHTML =`${fullCups/allCups *100}%`
    }
    if(fullCups==allCups){
        remained.style.visibility ="hidden";
        remained.style.height ="0"
    }else{
        remained.style.visibility ="visible";
        litre.innerHTML = `${2 -( 250*fullCups/1000)}L`
    }

}