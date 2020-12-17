function increase1(){
    document.onmousedown = function(){
        if(event.button == 0){
            var num = parseInt(document.getElementById("value1").innerHTML);
            num += 1;
            document.getElementById("value1").innerHTML = num;
        }
        else if(event.button == 2){
            var num = parseInt(document.getElementById("value1").innerHTML);
            num -= 1;
            document.getElementById("value1").innerHTML = num;
        }
    }
    
}

function increase2(){
    document.onmousedown = function(){
        if(event.button == 0){
            var num = parseInt(document.getElementById("value2").innerHTML);
            num += 1;
            document.getElementById("value2").innerHTML = num;
        }
        else if(event.button == 2){
            var num = parseInt(document.getElementById("value2").innerHTML);
            num -= 1;
            document.getElementById("value2").innerHTML = num;
        }
    }
}

function btn_click(){
    apple = document.getElementById("value1").innerHTML * 1000;
    orange = document.getElementById("value2").innerHTML * 1500;
    banana = document.getElementById("value3").value * 3000;
    watermelon = document.getElementById("value4").value * 3000;
    
    location.href="buy.html?" + apple + ":" + orange + ":" + banana + ":" + watermelon;
}
