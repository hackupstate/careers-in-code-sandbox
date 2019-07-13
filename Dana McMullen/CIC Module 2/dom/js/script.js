// console.log("loaded");
//     var listHolder= document.createElement('ul');//ul equals unordered list
//     // var listHolder2= document.createElement('ul');//ul equals unordered list
//     var firstList=document.createElement('li');
//     var secondList=document.createElement('li');
//     var thirdList=document.createElement('li');

//     var tomato = document.createTextNode('tomato');
//     var onions = document.createTextNode('onions');
//     var makeup = document.createTextNode('lipgloss');

//     listHolder.appendChild(firstList);
//     listHolder.appendChild(secondList);
//     listHolder.appendChild(thirdList);
//     // listHolder2.appendChild(thirdList);
//     firstList.appendChild(tomato);
//     secondList.appendChild(onions);
//     thirdList.appendChild(makeup);

  

//     console.log(listHolder);
//     // console.log(firstList);
//     console.log(listHolder);
//     // console.log(secondList);
//     console.log(listHolder);
//      // console.log(secondList);
//     var theList = document.getElementById('grocery-list');
//     var theList = document.getElementById('sephora-list');
//     theList.appendChild(listHolder);
//     // theList.appendChild(listHolder2);
//     //console.log(thelist);

var paragraph= document.createElement('p');
var textnode = document.createTextNode('This is a paragraph');
var change_paragraph_color =document.getElementById('paragraph-container');
change_paragraph_color.appendChild(textnode);
    var redbutton=document.getElementById('red');
    var bluebutton=document.getElementById('blue');
redbutton.addEventListener('click',function(){
    change_paragraph_color.style.color="red"
})
bluebutton.addEventListener('click' ,function(){
    change_paragraph_color.style.color="blue"
})




