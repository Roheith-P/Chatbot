let h = new Date()
    let hour = h.getHours()
    let min = h.getMinutes()
    let sec = h.getSeconds()
    let time = hour+":"+min+":"+sec;
    function script(){
       
       if (document.getElementById("text").value == "hello"){
        
           document.getElementById("answer").innerHTML = "Hi Whats up";
           
       }else if (document.getElementById("text").value == "time"){
            document.getElementById("answer").innerHTML = "See the clock";
       }else if (document.getElementById("text").value == "code"){
            document.getElementById("answer").innerHTML = "source code";
       }
       
       else{
           document.getElementById("answer").innerHTML = "Unable to Find Answer!!!"
       }
       
    }