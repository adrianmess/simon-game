import { Color } from './scripts.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

var simonColor = new Color();
console.log(Color);

$(function() {
  // setInterval(function(){
  //   console.log(simonColor.yellow);
  // },1000);
  var blueButton = $("#blueButton").val();
  var redButton = $("#redButton").val();
  var yellowButton = $("#yellowButton").val();
  var greenButton = $("greenButton").val();

  $("#post").submit(function(event) {
    event.preventDefault();
    simonColor.colorPusher();
    $("#colorOut").text(simonColor.startColor[0]);
    simonColor.arrayDump();
  });
});
