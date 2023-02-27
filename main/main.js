localStorage.myInterval=4000; 
let menuView=(event, action) =>
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
    
    console.log(event.target.id);
    let eventId= event.target.id;
    switch (eventId) {
        case "sellosNovedosos":
            console.log("en este caso dibujaría la section Sellos Novedosos");
            break;
        case "sellosMasVendidos":
            console.log("en este caso dibujaría la section sellos Mas Vendidos");
            break;
        case "sellosPocket":
            console.log("en este caso dibujaría la section sellos Pocket");
        break;
        case "sellosFechadores":
            console.log("en este caso dibujaría la section sellos Fechadores");
        break;
        case "sellosRopa":
            console.log("en este caso dibujaría la section sellos Ropa");
        break;
        case "sellosMadera":
            console.log("en este caso dibujaría la section sellos Madera");
        break;
        case "sellosProfesionales":
            sellosProfesionalesView();
            console.log("en este caso dibujaría la section sellos Profesionales");
        break;
        case "sellosEscolares":
            sellosEscolaresView();
            console.log("en este caso dibujaría la section sellos Escolares");
        break;
    }
}
let carrouselInterval=(route,id) =>
{
    clearInterval(localStorage.myInterval);
    localStorage.myInterval = setInterval(()=>{corrouselActualiceView(route, id)}, 4000);
}
let corrouselActualiceView=(route,id) =>
{
    elementSelect= document.getElementById(id);
    currentImgName=elementSelect.getAttribute("src");    
    //console.log("route: "+route+"--->id: "+id);
    //console.log(elementSelect.getAttribute("src"));
    for (let i = 1; i < 10; i++) {
        imgName=route+"Carrousel" + i + ".jpeg";
        console.log("estoy comparando " + currentImgName + " con "+ imgName)
        if (currentImgName === imgName){
            imgName=route+"Carrousel" + (i+1) + ".jpeg";
            if(imgName === route+"Carrousel10.jpeg"){
                imgName = route+"Carrousel1.jpeg";
                break;
            }
            //console.log(" currentImgName es: "+typeof(imgName)+ " currentImgName es: "+ typeof(currentImgName)); 
            break;
        };
    };  
    
    elementSelect.setAttribute("src", imgName );
}

let sellosProfesionalesView=() =>
{
    document.getElementById('section').innerHTML= htmlSellosProfesionales();
    carrouselInterval("./img/CarrouselProfesionales/", "imgCarrousel");
}
let sellosEscolaresView=() =>
{
    document.getElementById('section').innerHTML= htmlSellosEscolares();
    carrouselInterval("./img/CarrouselEscolares/", "imgCarrousel");
}

let presentationView=() =>
{    
    document.getElementById('section').innerHTML= htmlPresentation();
    clearInterval(localStorage.myInterval);
    localStorage.myInterval = setInterval(()=>{corrouselActualiceView("./img/CarrouselPortada/", "imgCarrousel")}, 4000);
}

let startview=() =>
{
    document.getElementById('actMenu').addEventListener('mouseover', (event)=>{menuView(event,'slide')});
    document.getElementById('body').addEventListener('click', (event)=>{menuView(event,'hidden')});
    presentationView();
}

let start =() =>
{
	startview();
}
window.addEventListener('DOMContentLoaded', start );