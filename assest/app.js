
"use strict";
  function Heyvan() {
    this.renk = ["Qara", "Ag", "Sarı"];
  }
  Heyvan.prototype.rengiNe = function() {
    return this.renk;
  }
  function Dog(){
    this.ad="Rotveller"
  }
  Dog.prototype=new Heyvan();
  function Piwik() {
    this.ad = "Britaniya";
    
  }

  Piwik.prototype = new Heyvan(); 

  var Britaniya = new Piwik();
  Britaniya.renk.push("qehveyi")
  
  function Catsearch(){
    var piwik =document.getElementById('piwiksrc').value;
    var ekran=document.getElementById('catconcole');

    if(piwik=="britaniya")
    {
        ekran.innerHTML=`${Britaniya.rengiNe()}${Britaniya.ad}`
    }
    
    
  }
   