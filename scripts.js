var input = document.getElementsByTagName("textarea");
console.log(input[0].textContent);// works
var save = document.getElementsByClassName("saveButton");
var Time = document.getElementsByClassName("lead");
var hourBlock = document.getElementsByClassName("anHour");
var H = moment().hours();
console.log(H);//works
// console.log(hourBlock[0]);


input[0].textContent = localStorage.getItem("8a")

// only works for first hour
// $(save[0]).on("click", function(){
//     var s1 = $(input[0]).val();
//     console.log(s1);
//     localStorage.removeItem("8a");
//     localStorage.setItem("8a", s1);    
// });
$(".saveButton").on("click", function(){
    // var ind = $(this).attr("id")
    // console.log(ind.val);
    var key1 = $(this).attr("id")//.parent()//.child[1]().attr("id");
    console.log(key1);
    
    
})

var setTime = function (){
    Time[1].innerHTML = moment().format("MMMM Do YYYY, h:mm:ss a");
}
setInterval(setTime,1000);

for(i = 0; i < 10 ; i++){ // change i < 1 to 10 when rows populated
    if(i < (H-8)){
        hourBlock[i].classList.add("past");
    }
    else if(i > (H-8)){
        hourBlock[i].classList.add("future");
    }
    else{
        hourBlock[i].classList.add("present");
    }
}