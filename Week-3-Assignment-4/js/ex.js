// JavaScript Document
document.addEventListener("DOMContentLoaded", function(){
    var shortR =document.querySelector(".short-rect");
    var longR  =document.querySelector(".long-rect");

addEvent( longR, "mouseOver", mouseEnter);
    
addEvent( longR, "mouseOut", mouseLeave);
    
addEvent( shortR, "click", boxClicked); 
    
});

function mouseEnter() {
    var textEdit = document.getElementById("shortRect");
    textEdit.innerHTML= ("Welcome to the box!");  
}

function mouseLeave() {
 var textEdit = document.getElementById("shortRect");
    textEdit.innerHTML = ("Why did you leave me?");
}

function boxClicked(){
 var textEdit = document.getElementById("shortRect");
    if (textEdit.innerHTML === "Welcome to the box!" || "Why did you leave me?");{
        alert("Thanks for clicking me");
    }
}
    



                          

                          
                          
                          
                          function addEvent( tag, evType, func ){
  if( tag.addEventListener ){
    tag.addEventListener( evType, func, false);
    //this works for Firefox, Chrome, Safari, and Opera
  }else if( tag.attachEvent ){
    var r = tag.attachEvent( "on" + evType, func );
    //This works for IE only
    return r;
  }else{
    tag["on" + evType] = func;
    //this works for really old browsers
  }
}