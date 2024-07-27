var rect = document.querySelector("#center");
rect.addEventListener("mousemove",function(details){
  var rectlocation = rect.getBoundingClientRect();
  var insideRectValue = details.clientX - rectlocation.left;
  if(insideRectValue < rectlocation.width/2){
     var redColor = gsap.utils.mapRange(0, rectlocation.width/2, 255, 0, insideRectValue);
    gsap.to(rect,{
         backgroundColor:`rgb(${redColor}, 0 , 0)`,
         ease: Power4
    });
    }else{
        var blueColor = gsap.utils.mapRange(rectlocation.width/2, rectlocation.width, 0, 255, insideRectValue);
        gsap.to(rect,{
             backgroundColor:`rgb(0, 0 , ${blueColor})`,
             ease: Power4
        });
  }
});
rect.addEventListener("mouseleave", function(){
   gsap.to(rect,{
    backgroundColor:"white"
   })
});