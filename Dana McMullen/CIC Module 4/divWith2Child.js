//This HTML document contains a <div> element with two child nodes (two <p> elements):

<div id="div1">
  <p id="p1">This is a paragraph.</p>
  <p id="p2">This is another paragraph.</p>
</div>

<script>
var parent = document.getElementById("div1");
var child = document.getElementById("p1");
parent.removeChild(child);
</script>



// Create <p> element:

var para = document.createElement("p");
//1. Add text to the <p> element, create a text node first
var node = document.createTextNode("This is new.");
//2. Append the text node to the <p> element:
para.appendChild(node);
//3. Find existing element div1
var element = document.getElementById("div1");
//4. and append to end of the new para element to the existing div1 element:
element.appendChild(para);
//5. or append before the para element as child of div
element.insertBefore(para, child);

// Create a div
function createDiv(){
     var div = document.createElement ('div');
     return div;
}

// Create a paragraph
var p = document.createElement('p');
p.innerText = "This is a paragraph";
document.body.appendChild(p);

// Create a button 
var button = document.createElement('button');
button.innerText = 'CLICK ME'

//example code
<!DOCTYPE html>
<html>
<body>

<div id="div1">
<p id="p1">This is a paragraph.</p>
<p id="p2">This is another paragraph.</p>
</div>

<script>
var para = document.createElement("p");
var node = document.createTextNode("This is old.");
para.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(para);
</script>

</body>
</html>
