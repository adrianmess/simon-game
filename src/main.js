import { Color } from './scripts.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var blueButton = $("#blueButton").val();
var redButton = $("#redButton").val();
var yellowButton = $("#yellowButton").val();
var greenButton = $("#greenButton").val();

var simonColor = new Color();
$(document).ready(function(){
  $("#post").submit(function(event) {
    event.preventDefault();
    // simonColor.colorPusher();
    simonColor.colorPusher();
    $("#colorOut").text(simonColor.colorsStored);
  });
  var colorStash = simonColor.colorsStored
  var colorUserInput = simonColor.colorsInput
  $("#redButton").click(function(){
    simonColor.colorUser(redButton);
    $("#matchOut").append(redButton);
  });
  $("#blueButton").click(function(){
    simonColor.colorUser(blueButton);
    $("#matchOut").append(blueButton);
  });
  $("#yellowButton").click(function(){
    simonColor.colorUser(yellowButton);
    $("#matchOut").append(yellowButton);
  });
  $("#greenButton").click(function(){
    simonColor.colorUser(greenButton);
    $("#matchOut").append(greenButton);
  });
  $("#show").click(function(){
    $("#results").text(simonColor.colorsStored);
    $("#results2").text(simonColor.colorsInput);
    $("#score").text(simonColor.colorMatch(colorStash, colorUserInput));
    $("#outOf").text(colorStash.length);
  });

  console.log(simonColor);
});
// $(function() {
  // setInterval(function(){
  //   console.log(simonColor.yellow);
  // },1000);


// });
