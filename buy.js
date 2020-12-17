temp = location.href.split("?");
data = temp[1].split(":");
apple = data[0];
orange = data[1];
banana = data[2];
watermelon = data[3];
total = parseInt(apple) + parseInt(orange) + parseInt(banana) + parseInt(watermelon);
document.getElementById("value1").innerHTML = apple;
document.getElementById("value2").innerHTML = orange;
document.getElementById("value3").innerHTML = banana;
document.getElementById("value4").innerHTML = watermelon;
document.getElementById("total").innerHTML = total;

function btn_click(){
    sname = document.getElementById("name").value;
    snum = document.getElementById("number").value;
    total = document.getElementById("total").innerHTML;
    radio = document.getElementsByName("radio_btn");
    for(var i = 0; i < radio.length; i++){
        if(radio[i].checked == true){
            radio = radio[i].value;
            location.href="order.html?" + sname + ":" + snum + ":" + total + ":" + radio;

        }
    }
}
