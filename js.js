function changeColor() {
  document.getElementById("redDiv").style.height="200px";
  document.getElementById("redDiv").style.width="200px";
  document.getElementById("redDiv").style.background="blue";
  console.log("BIG");

  setTimeout(function(){
    document.getElementById("redDiv").style.height="100px";
    document.getElementById("redDiv").style.width="100px";
    document.getElementById("redDiv").style.background="red";
    console.log("little");
  }, 3000);
  
};
