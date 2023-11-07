let getprime = 0;
let moneygeting = 0;
let caffetinening = 0;  
document.getElementById("startprime1").onclick = function(){
    getprime += 1;
    document.getElementById("labelstatusprime").innerHTML = "You Have: " + getprime  + " Prime Points"
    if(getprime>=100){
       getprime = 0;
       moneygeting += 1;
       document.getElementById("money").innerHTML = "Prime money: " + moneygeting; 
    }
    if(moneygeting>=10){
        moneygeting = 0;
      caffetinening += 1;
      document.getElementById("caffetine").innerHTML = "Prime caffeine: " + caffetinening + "%"; 
    }
}
const myprimes = document.querySelector("#myprimes");
const seemyprimes = document.querySelector("#seemyprimes");

myprimes.addEventListener("click", () =>{
    if(seemyprimes.style.display == "none"){
        seemyprimes.style.display = "block";
    }
    else{
        seemyprimes.style.display = "none";
    }
})