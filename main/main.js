//Vbles Globales en localStorage:
localStorage.myInterval=4000; 
let cartObject = { 'escolares': 0, 'profesionales': 0, 'madera': 0, 'ropa':0, 'fechadores':0, 'pocket':0 };
localStorage.setItem('cartObject', JSON.stringify(cartObject));

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
        case "mainPage":
            startview();
            console.log("en este caso dibujaría la section Principal");
            break;
        case "sellosNovedosos":
            console.log("en este caso dibujaría la section Sellos Novedosos");
            break;
        case "sellosMasVendidos":
            console.log("en este caso dibujaría la section sellos Mas Vendidos");
            break;
        case "sellosPocket":
            sellosPocketView();
            console.log("en este caso dibujaría la section sellos Pocket");
        break;
        case "sellosFechadores":
            sellosFechadoresView();
            console.log("en este caso dibujaría la section sellos Fechadores");
        break;
        case "sellosRopa":
            sellosRopaView();
            console.log("en este caso dibujaría la section sellos Ropa");
        break;
        case "sellosMadera":
            sellosMaderaView();
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
        case "buyEscolar":
            cartShopping("escolares", 1);
        break;
        case "buyProfecional":
            cartShopping("profesionales", 1);
        break;
        case "buyMadera":
            cartShopping("madera", 1);
        break;
        case "buyRopa":
            cartShopping("ropa", 1);
        break;
        case "buyFechadores":
            cartShopping("fechadores", 1);
        break;        
        case "buyPocket":
            cartShopping("pocket", 1);
        break;        
        case "cartShop":
            cartShopView();
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
        //console.log("estoy comparando " + currentImgName + " con "+ imgName)
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

let cartShopView=() =>{
    console.log(cartShopping());
    //Falta agregar el modal que muestre el carrito y permita editarlo.
}
let cartShopping=(product, amount) =>{
    let retrievedObject = localStorage.getItem('cartObject');
   // console.log("el Object recibido JSON es: "+retrievedObject);
    //console.log("el Object recibido es: ", JSON.parse(retrievedObject));
    cartObject=JSON.parse(retrievedObject);
    console.log("producto: "+product+ "-->cantidad: "+ amount);
    switch (product) {
        case "escolares":
            cartObject[product]+= amount;
            break;
        case "profesionales":
            cartObject[product]+= amount;
            break;
        case "madera":
            cartObject[product]+= amount;     
            break;
        case "ropa":
            cartObject[product]+= amount;
        break;    
        case "fechadores":
            cartObject[product]+= amount;
        break;
        case "pocket":
            cartObject[product]+= amount;
        break;
        default:
            return cartObject;
    }   
    console.log("El Object del carrito es: ", cartObject);
    localStorage.setItem('cartObject', JSON.stringify(cartObject));
    document.getElementById('cartIcon').innerText= Number(document.getElementById('cartIcon').textContent)+ amount;
    //console.log(document.getElementById('cartIcon').textContent);
    let currentCart=encodeURI("Hola, quería consultar pos los sellos que vi en la web: "+localStorage.cartObject);
    document.getElementById('whatsapp').innerHTML=`<a id="whatsapp" href="https://wa.me/5492234368578?text=`+currentCart+`" target="_blank" style="color: green;"><i class="fa-brands fa-whatsapp"></i></a> `
    
}

let sellosPocketView=() =>
{
    document.getElementById('section').innerHTML= htmlSellosPocket();
    carrouselInterval("./img/CarrouselPocket/", "imgCarrousel");
}
let sellosFechadoresView=() =>
{
    document.getElementById('section').innerHTML= htmlSellosFechadores();
    carrouselInterval("./img/CarrouselFechadores/", "imgCarrousel");
}
let sellosRopaView=() =>
{
    document.getElementById('section').innerHTML= htmlSellosRopa();
    carrouselInterval("./img/CarrouselRopa/", "imgCarrousel");
}
let sellosMaderaView=() =>
{
    document.getElementById('section').innerHTML= htmlSellosMadera();
    carrouselInterval("./img/CarrouselMadera/", "imgCarrousel");
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