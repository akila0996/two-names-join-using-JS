function joinedName(){

    var firstname = document.getElementById("frstname");
    var lastname = document.getElementById("surname");
    var submit = document.getElementById("result");

   submit.innerHTML += firstname.value + lastname.value;

   submit.style.color ="#6e370b";

   firstname.value = "";
   lastname.value = "";
}