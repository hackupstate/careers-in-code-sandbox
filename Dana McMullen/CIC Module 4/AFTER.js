// Abstract away filter test logic
function greaterThan49(element, index){
  if (element > 49) {
  	return true;
  } else {
   	return false   
  }
}

// Call Array.prototype.filter and use test logic above in multiple places
var arr = [1,2,3,50,100,150];
var filteredArr = arr.filter(greaterThan49);
var arr2 = [5,6,7,900,46,49];
var filteredArr2 = arr2.filter(greaterThan49);