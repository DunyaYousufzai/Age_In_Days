function age(){
    var birthyear = prompt("what year were you born?");
    var ageInDay = (2020 - birthyear) * 365;
    var h1 = document.createElement("h1");
    var y = document.createTextNode("you are " + ageInDay + " days old");
    h1.setAttribute('id' , 'age');
    h1.appendChild(y);
    document.getElementById("flex-box-result").appendChild(h1);
    }
    
    function reset(){
        document.getElementById("age").remove();
}
    