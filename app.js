var rect = document.querySelector("#center");

 rect.addEventListener("mousemove",function(details){
    //  console.log('han aya');
    //     // console.log(rect.getBoundingClientRect());
        var rectangleLocation = rect.getBoundingClientRect();  //full location from outsides
         var insiderectval =  details.clientX - rectangleLocation.left; //mouse kha hai 

    
         if (insiderectval<rectangleLocation.width/2){
            //  console.log('left');
         var redcolor =   gsap.utils.mapRange(0,rectangleLocation.width/2,
            255,0, insiderectval);

         gsap.to(rect,{
            backgroundColor : `rgb(${redcolor},0,0)`,
            ease : Power4,
         });
      }
       
         else{
            // console.log('right');
            var bluecolor =   gsap.utils.mapRange(
               rectangleLocation.width/2,
               rectangleLocation.width, //their end width
               0,
               255,
               insiderectval
               );
            gsap.to(rect,{
               backgroundColor : `rgb(0,0,${bluecolor})`,
               ease : Power4,
            });
                  }
               });      

rect.addEventListener("mouseleave",function(){
   gsap.to (rect,{
  backgroundColor : "white"
   })
  
})


