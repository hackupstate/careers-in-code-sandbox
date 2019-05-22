// Configure the globally accessible object variable "tinyfef"


// created expression that will be evaluated and immediately evokes that function
var tinyfef = (function(){

  createElement: function(type,[options, children]){
    options = options || {} //this makes options undefined if there are no options passed in to create a default value
  }

  return {
    about: 'tinyFEF 1.0.0'
  };
})(); //these two () are what make it evoked immediately because these parenthesis call the function

