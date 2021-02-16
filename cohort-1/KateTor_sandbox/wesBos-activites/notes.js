// creates a <div> element with attributes
// 
function createDiv(attrOptions){
  var div = document.createElement('div');
//	var arrayOfKeys = Object.keys(attrOptions);
//  arrayOfKeys.forEach(function(key){
//    div.setAttribute(key, attrOptions[key]);
//  });
Object.keys(attrOptions).forEach (function(key){
  div.setAttribute(key,attrOptions[key]);
  });
  return div;
};


// creates a generic element with attributes
function createDOMNode(elementType,options){
  var element = document.createElement(elementType);
  var arrayOfKeys = Object.keys(options);
  arrayOfKeys.forEach(function iterator(key){
    elements.setAttribute(key, options[key]);
  })
  return element;
}


// Creates a <p> element with child text node
function createP(options,text){
  var p = document.createElement(elementType);
  var arrayOfKeys = Object.keys(options);
  arrayOfKeys.forEach(function iterator(key){
    p.setAttribute(key, options[key]);
  });
  var pText = document.createTextNode(text);
  p.appendChild(pText);
  return p;
}


// Injects an element into the DOM
function renderElement(element){
  document.body.appendChild(element);
}
  
// reverses a string and returns it  
function reverseString(str){
  return str.split("").reverse().join("")
} 




//create a testimony - need to create text node and add it to page
function createTestimony (options,text){
  var p = document.createElement("p");
  var arrayOfKeys = Object.keys(options);
  	arrayOfKeys.forEach(function(keys){
    	p.setAttribute(keys, options[keys]);
 	  })
  var testimony = document.createTextNode(text);
  p.appendChild(testimony);
 	return p;
}


// create function that inserts a <ul> plus children <li> elements
function createList(options,text){
  var ol = document.createElement("ol");
  var arrayOfKeys = Object.keys(options);
  arrayOfKeys.forEach(function iterator(key){
    ol.setAttribute(key, options[key]);
  });
  var listItems = document.create("li");
  	for (let i=0; i<arrayOfList.length; i++){
      ol.appendChild(i);
    }
  return ol;
}






