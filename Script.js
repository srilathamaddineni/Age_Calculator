const btnEl=document.querySelector(".btn");
const bdydt=document.getElementById("birthday");
const resEl=document.getElementById("result");
btnEl.addEventListener("click",calculateAge);
function calculateAge(){
    
    const bdydtvalue=bdydt.value;
    var currdate=new Date();
    var brddate=new Date(bdydtvalue);
    if(bdydtvalue==="")
    {
        alert("Enter your birthday date");
    }
    else{
        let age=currdate.getFullYear()-brddate.getFullYear();
        const month=currdate.getMonth()-brddate.getMonth();
        if(month<0 || month===0 && currdate.getDate()<brddate.getDate()) {
            age--;
        }

         resEl.innerText=`Your age is ${age}`;
    }
}
  
   
   