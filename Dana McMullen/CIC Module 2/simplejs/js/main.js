console.log("loaded!");

var menuBtn=document.getElementById('menuBtn')
console.log(menuBtn);

var closeBtn=document.getElementById('closeBtn')
console.log(closeBtn);
var overlay=document.getElementById('overlay');

menuBtn.addEventListener("click", function(){
//find the #overlay and add a class
console.log("clicked the button");
overlay.classList.add("active");
})//click end

closeBtn.addEventListener("click", function(){
    //find the #overlay and add a class
    console.log("Closed the button");
    overlay.classList.remove("active");
    })//click end
