let element=document.getElementById('element')
let demo=document.getElementById('dem')
var left=0;
let topPx = 0;
var count=0
document.body.onkeydown=(e)=>{
    if(e.keyCode===37)
    {
        left-=5
      
        element.style.left=`${left}%`
    }
    if(e.keyCode===38)
    {
        topPx-=5
       
        element.style.top=`${topPx}%`
    }
    if(e.keyCode===39)
    {
        left+=5
        
        element.style.left=`${left}%`
    }

    if(e.keyCode===40)
    {
        topPx+=5
        element.style.top=`${topPx}%`
    }
    console.log("left"+element.style.left);
    console.log("top"+element.style.top);
    if (element.style.top==="40%" && element.style.left==="40%") {
    demo.style.backgroundColor='yellow'
    demo.style.padding="90px"
    count++
   document.getElementById('span').innerText=`YOU WIN...! ${count}`;

   element.style.top=0
   element.style.left=0 
   topPx=0;
   left=0;
  
    }
    
}

 

