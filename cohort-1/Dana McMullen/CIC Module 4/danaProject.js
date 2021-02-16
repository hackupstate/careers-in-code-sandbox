// // Create a button 
// var button = document.createElement('button');
// button.innerText = 'CLICK ME'

// // Inject into document
// document.body.appendChild(button)

// Create a paragraph new <p> element
var para1 = document.createElement('p');
//To add text to the <p> element, you must create a text node first. This code creates a text node:
var node1 = document.createTextNode
("This is a paragraph. We like to keep everything we do simple, including our front-end solutions.You can take comfort in knowing that by using tinyFEF, you're not complicating the rest of your code base.");
//Then you must append the text node to the <p> element:
para1.appendChild(node1);
// Finally you must append the new element to an existing element.This code finds an existing element:
var element = document.getElementById("div1");
// This code appends the new element to the existing element:
element.appendChild(para1);

//Change style of paragraph 1
document.getElementById("div1").style.color = "red";

// Create a paragraph
var para2 = document.createElement('p');
var node2 = document.createTextNode ("TTell tinyFEF what you want to display, and it'll make it happen. There's no need to directly manipulate the DOM step-by-step when we can take care of that for you.");
para2.appendChild(node2);
var element = document.getElementById("div2");
element.appendChild(para2);

//Change style of paragraph 2
document.getElementById("div1").style.color = "yellow";


// Create a paragraph
var para3 = document.createElement('p');
var node3 = document.createTextNode ("It's in our name! No need to worry about code bloat, we've kept everything to the minimum.You can be confident that your users won't have to wait forever for your content to download.");
para3.appendChild(node3);
var element = document.getElementById("div3");
element.appendChild(para3);

//Change style of paragraph 1
document.getElementById("div3").style.color = "blue";
document.getElementById("div3").style.fontFamily = "Arial";
document.getElementById("div3").style.fontSize = "larger";


p.onmouseover = function(event){
  console.log('paragraph hovered over')
}
