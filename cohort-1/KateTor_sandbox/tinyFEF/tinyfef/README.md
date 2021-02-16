## tinyFEF - A tiny front-end framework for displaying user interfaces.

**Objective:** 

Write a small front-end framework that creates DOM nodes and then renders them in the browser.

### Business Requirements

TBD

### Technical Requirements

The tinyFEF API should be a globally accessible object and implement as its properties the following functions:

**createElement** `createElement(type[, options, children])`
<!-- function createDOMNode(elementType [,options,children]){
  var element = document.createElement(elementType);
  var arrayOfKeys = Object.keys(options);
  arrayOfKeys.forEach(function iterator(key){
    elements.setAttribute(key, options[key]);
  })
  appendChild(children)
  return element;
} -->

Creates an element of the type passed to it.

Parameters:

`type` - A string that represents the element to be created.

`options` - Optional. An object that represents the attributes that will be configured on the element. Defaults to an empty object.

`children` - Optional. An element, string, or array of elements or strings to be rendered as children of the element. If passing an array, only the elements of that array will be rendered, all subsequent elements will be ignored. These children are appended in the order that they are given. Elements should render as elements, and strings should render as text nodes.

**render** `render(element, targetId)`
<!-- function renderElement(element,targetID){
  document.targetID.appendChild(element);
} -->
Renders an element in the browser window as children of the element whose id attribute is given as the second argument.

Parameters:

`element` - The top-level element to be rendered to the DOM.

`targetId` - The `id` of an existing element in the DOM where the `element` argument will be rendered as a child.

All of the above functions should be defined on an object that represents TinyFEF as a whole.

### Optional Features

**updateElement** `updateElement(element, options)`

Updates an element with the attributes passed to it.

Paremeters:

`element` - The element to be updated.

`options` - An object that represents the attributes that will be configured on the element. Any attributes that exist on the element prior will be overwritten with the attributes on the options object. Defaults to an empty object.

**Element Helpers**

The tinyFEF API can optionally provide the following element helpers:

- div() - Creates a `<div>` element
- p() - Creates a `<p>` element
- i() - Creates a `<i>` element
- button() - Creates a `<button>` element