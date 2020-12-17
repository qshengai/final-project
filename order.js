temp = location.href.split("?");
data = temp[1].split(":");
sname = data[0];
snum = data[1];
total = data[2];
radio = data[3];

document.getElementById("name").innerHTML = sname;
document.getElementById("number").innerHTML = snum;
document.getElementById("total").innerHTML = total;
document.getElementById("payment").innerHTML = radio;
