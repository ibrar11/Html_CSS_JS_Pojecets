
  function myDispaly(){
    
   let elems = document.getElementsByClassName("resumeButton");
   for (let i = 0; i < 1; i++){
          let l = elems[i].getElementsByTagName("button")[0];
          l.innerHTML = "Click to view resume";
   }
      
}