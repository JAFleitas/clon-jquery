console.log("hola")
import {$} from "./index.js"

$("button")
    .css("padding","16px")
    .css("border","1px solid #3566d177")
    .css({color:"#3566d1",borderRadius:"4px",cursor:"pointer"})
    .on("click", () => alert("hello new JQuery") )
 
$("li")
    .each((index,el)=>{
        
        
        if(index===0){
            $(el).css("color","red")
        }
        if(index===1){
            $(el).css("color","yellow")
        }
        if(index===2){
            $(el).css("color","green")
        }
        

    })
    .css("font-size","30px")