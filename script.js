let url =`	https://api.adviceslip.com/advice`;
let advise = document.querySelector(".advise");
let id = document.querySelector(".heading");
var a;
let button = document.querySelector(".dice")


generate();
button.addEventListener("click",()=>{

generate();
});
function generate(){
    fetch(url).then((res)=>{
   
    
        res.json().then((data)=>{
            let a =data.slip.advice
            // console.log(data);
                        advise.innerText=`"`+data.slip.advice +`"`
            id.innerText=`ADVICE #`+data.slip.id;
        })
        
    })
}