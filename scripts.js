var input = document.getElementsByTagName("textarea");
console.log(input[0].textContent);// works
var save = document.getElementsByClassName("saveButton");
var Time = document.getElementsByClassName("lead");
var now = moment();
Time[0].innerHTML = now;


input[0].textContent = localStorage.getItem("8a")

// console.log(input[0]);
$(save[0]).on("click", function(){
    var s1 = $(input[0]).val();
    console.log(s1);
    localStorage.removeItem("8a");
    localStorage.setItem("8a", s1);    
});

