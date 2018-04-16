export function Color (){
  this.colors = ["red", "green", "blue", "yellow"];
  this.startColor = [];
}

Color.prototype.colorPusher = function() {
  this.startColor.push(this.colors[0]);
  var color = this.colors.shift();
  this.colors.push(color);
}
Color.prototype.arrayDump = function() {
  this.startColor = [];
}
