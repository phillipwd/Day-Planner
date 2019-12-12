var input = document.getElementsByTagName("textarea");
console.log(input[0].textContent);// works
var save = document.getElementsByClassName("saveButton");
var Time = document.getElementsByClassName("lead");
var hourBlock = document.getElementsByClassName("anHour");
var H = moment().hours();
console.log(H);//works
// console.log(hourBlock[0]);
var key0 = 0;//fixme
var s0 = 0; //fixme


input[0].textContent = localStorage.getItem("8a")

$(".saveButton").on("click", function(){
    // var ind = $(this).attr("id")
    // console.log(ind.val);
    var keyid = $(this).attr("id");
    var sid = $(input[key[keyid]]).val();//fixme
    // console.log(key1);
    localStorage.removeItem(key[keyid]);//fixme
    localStorage.setItem(key[keyid], s[sid]);  //fixme  
})

for(i = 0; i < 10; i++){
    input[i].textContent = localStorage.getItem(key[i]);//fixme
}

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