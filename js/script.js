var display = document.querySelector(".display");
var num = document.querySelectorAll("button");




num.forEach(function(button) {
    button.addEventListener("click", keisan);
});

function keisan(event) {
    var clicked = event.target.value;
    var hantei = display.value.slice(-1);
    var zero = display.value.slice(0 , 1);

    if(clicked === "="){
        if(display.value !== ""){
            display.value = eval(display.value);}
        }else if(clicked === "C"){
            display.value = "";
        }else if(isNaN(hantei) && isNaN(clicked)){
            return;
        }else{
            if(display.value == ""){
                if(isNaN(clicked)){
                    return;
                }
            }
            if(display.value.indexOf(".") != -1){
                if(clicked ==="."){
                    return;

                }
            }
            if(zero === "0"){
                if(clicked ==="0"){
                    return;
                }
            }
            display.value += clicked;
        }
    }
  
    