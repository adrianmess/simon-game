export function Color(){
  this.colorsTest = ["red", "green", "blue", "yellow"];
  this.colorsStored = [];
  this.colorsInput = [];
}


// Color.prototype.colorPusher = function(color){
//   this.colorsInput.push(color);
// };
Color.prototype.colorPusher = function() {
  this.colorsStored.push(this.colorsTest[0]);
  var color = this.colorsTest.shift();
  this.colorsTest.push(color);
};


Color.prototype.colorUser = function(color) {
  this.colorsInput.push(color);
}


Color.prototype.colorMatch = function(arr1, arr2){
  var sum= 0;
  // var wrong = 0;
  for(var i=0; i < arr1.length; i++){
    if(arr1[i]===arr2[i]){
      sum ++
    } 
  }
  return sum;
};
// export function Color (){
//   this.colors = ["red", "green", "blue", "yellow"];
//   this.startColor = [];
// }
//
// Color.prototype.colorPusher = function() {
//   this.colorsInput.push(this.colorsTest[0]);
//   var color = this.colorsTest.shift();
//   this.colorsTest.push(color);
// }
//
// Color.prototype.arrayDump = function() {
//   this.startColor = [];
// }
