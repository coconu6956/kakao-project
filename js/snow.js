// JavaScript Document

var c = document.getElementById('canv');
var snows = c.getContext("2d");
var w = c.width = window.innerWidth, 
    h = c.height;

/*var w = c.width = window.innerWidth, 
    h = c.height = window.innerHeight;*/


Snowy();
function Snowy() {
	"use strict";
  var snow = [];
  var arr = [];
  var num = 600, tsc = 1, sp = 1;
  var sc = 1.3, mv = 20, min = 1;
  /*var sc = 1.3, mv = 20, min = 1;*/
    for (var i = 0; i < num; ++i) {
      snow = new Flake();
      snow.y = Math.random() * (h + 50);
      snow.x = Math.random() * w;
      snow.t = Math.random() * (Math.PI * 2);
      snow.sz = (100 / (10 + (Math.random() * 100))) * sc;
      snow.sp = (Math.pow(snow.sz * 0.8, 2) * 0.15) * sp;
      snow.sp = snow.sp < min ? min : snow.sp;
      arr.push(snow);
    }
  go();
  function go(){
    window.requestAnimationFrame(go);
      snows.clearRect(0, 0, w, h);
      snows.fillStyle = 'rgba(255,255,255,0)';
      snows.fillRect(0, 0, w, h);
      snows.fill();
        for (var i = 0; i < arr.length; ++i) {
          var f = arr[i];
          f.t += 0.05;
          f.t = f.t >= Math.PI * 2 ? 0 : f.t;
          f.y += f.sp;
          f.x += Math.sin(f.t * tsc) * (f.sz * 0.3);
          if (f.y > h + 50){ f.y = -10 - Math.random() * mv;}
          if (f.x > w + mv){ f.x = - mv;}
          if (f.x < - mv){ f.x = w + mv;}
          f.draw();}
 }
 function Flake() {
   this.draw = function() {
      this.g = snows.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.sz);
      this.g.addColorStop(0, 'hsla(255,255%,255%,1)');
      this.g.addColorStop(1, 'hsla(255,255%,255%,0)');
      snows.moveTo(this.x, this.y);
      snows.fillStyle = this.g;
      snows.beginPath();
      snows.arc(this.x, this.y, this.sz, 0, Math.PI * 2, true);
      snows.fill();};
  }
}
/*________________________________________*/
window.addEventListener('resize', function(){
	"use strict";
  c.width = w = window.innerWidth;
  c.height = h = 630;
	/*c.width = w = window.innerWidth;
  c.height = h = window.innerHeight;*/
}, false);
