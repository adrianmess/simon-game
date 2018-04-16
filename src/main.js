import { Color } from './scripts.js';
import './styles.css';

var simonColor = new Color();
console.log(Color);

$(function() {
  setInterval(function(){
    console.log(simonColor.yellow);
  },1000);
  $("#post").submit(function(event) {
    event.preventDefault();

  });
});
