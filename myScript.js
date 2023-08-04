const menu=document.getElementById("menubar");
const navsItem=document.getElementById("navs");


menu.addEventListener("click",function(){
 
    navsItem.style.display="flex"

})
const cross=document.getElementById("cross");

cross.addEventListener("click",function(){

    navsItem.style.display="none"
})
