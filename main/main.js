let menuView=(action) =>
{
    if(action === 'slide'){
        document.getElementById('actMenu').style.display = "none";
        document.getElementById('dropdownMenu').style.display = "block";    
    };
    myTimeout = setTimeout(()=>{
        if (action === 'hidden'){
            document.getElementById('actMenu').style.display = "block";
            document.getElementById('dropdownMenu').style.display = "none";   
        };
    }, 100);
    
    console.log(action);
}

let corrouselActualiceView=(route,id) =>
{
    elementSelect= document.getElementById(id);
    currentImgName=elementSelect.getAttribute("src");    
    //console.log("route: "+route+"--->id: "+id);
    //console.log(elementSelect.getAttribute("src"));
    for (let i = 1; i < 10; i++) {
        imgName=route+"Carrousel" + i + ".jpeg";
        //console.log("estoy comparando " + currentImgName + " con "+ imgName)
        if (currentImgName === imgName){
            imgName=route+"Carrousel" + (i+1) + ".jpeg";
            if(imgName === route+"Carrousel10.jpeg"){
                imgName = route+"Carrousel1.jpeg";
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
    myInterval = setInterval(()=>{corrouselActualiceView("./img/CarrouselPortada/", "imgCarrousel")}, 4000);
    document.getElementById('actMenu').addEventListener('mouseover', ()=>{menuView('slide')});
    document.getElementById('body').addEventListener('click', ()=>{menuView('hidden')});
}

let start =() =>
{
	startview();
    console.log("llega hasta aca...");
}
window.addEventListener('DOMContentLoaded', start );