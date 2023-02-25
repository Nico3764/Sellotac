let menuView=() =>
{
    document.getElementById('actMenu').style.display = "none";
    document.getElementById('dropdownMenu').style.display = "block";
    
}
let corrouselActualiceView=() =>
{
    elementSelect= document.getElementById('imgCarrousel');
    currentImgName=elementSelect.getAttribute("src");    
    //console.log(elementSelect.getAttribute("src"));
    for (let i = 1; i < 10; i++) {
        imgName="./img/Carrousel" + i + ".jpeg";
        //console.log("estoy comparando " + currentImgName + " con "+ imgName)
        if (currentImgName === imgName){
            imgName="./img/Carrousel" + (i+1) + ".jpeg";
            if(imgName === "./img/Carrousel10.jpeg"){
                imgName = "./img/Carrousel1.jpeg";
                break;
            }
            //console.log("entra en el if "+i);
            //console.log(" currentImgName es: "+typeof(imgName)+ " currentImgName es: "+ typeof(currentImgName)); 
            break;
        };
    };  
    
    elementSelect.setAttribute("src", imgName );
}
let startview=() =>
{
    myInterval = setInterval(corrouselActualiceView, 4000);
    document.getElementById('actMenu').addEventListener('mouseover', menuView);

}
let start =() =>
{
	startview();
    console.log("llega hasta aca...");
}
window.addEventListener('DOMContentLoaded', start );