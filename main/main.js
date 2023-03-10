//Vbles Globales en localStorage:
localStorage.myInterval=4000; 
let cartObject = { 'escolares': 0, 'profesionales': 0, 'madera': 0, 'ropa':0, 'fechadores':0, 'pocket':0 };
//let cartObject = { 'escolares': 1, 'profesionales': 1, 'madera': 1, 'ropa':1, 'fechadores':1, 'pocket':1 };
localStorage.setItem('cartObject', JSON.stringify(cartObject));

let menuView=(event, action) => //
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
    //EVENTOS DEL CARRITO DE COMPRAS
    switch (eventId) {        
        case "removefechadores":
            cartShopping("fechadores", -1);
            modalShopView("block");
            console.log("en este caso resto 1 al carrito de fechadores");
            break;  
        case "removepocket":
            cartShopping("pocket", -1);
            modalShopView("block");
            console.log("en este caso resto 1 al carrito de pocket");
            break;  
        case "removeropa":
            cartShopping("ropa", -1);
            modalShopView("block");
            console.log("en este caso resto 1 al carrito de ropa");
            break;  
        case "removemadera":
            cartShopping("madera", -1);
            modalShopView("block");
            console.log("en este caso resto 1 al carrito de madera");
            break;  
        case "removeprofesionales":
            cartShopping("profesionales", -1);
            modalShopView("block");
            console.log("en este caso resto 1 al carrito de profesionales");
            break;  
        case "removeescolares":
            cartShopping("escolares", -1);
            modalShopView("block");
            console.log("en este caso resto 1 al carrito de escolares");
            break;        
        case "closex":
            modalShopView("none");
            console.log("en este caso cerrar??a el carrito de compras");
            break;
        case "cartShop":
            modalShopView("block");
            console.log("en este caso dibujar??a el carrito de compras");
            break;
    }
    //EVENTOS DE LAS SECCIONES
    switch (eventId) {  
        case "mainPage":
            startview();
            console.log("en este caso dibujar??a la section Principal");
            break;
        case "sellosNovedosos":
            console.log("en este caso dibujar??a la section Sellos Novedosos");
            break;
        case "sellosMasVendidos":
            console.log("en este caso dibujar??a la section sellos Mas Vendidos");
            break;
        case "sellosPocket":
            sellosPocketView();
            console.log("en este caso dibujar??a la section sellos Pocket");
        break;
        case "sellosFechadores":
            sellosFechadoresView();
            console.log("en este caso dibujar??a la section sellos Fechadores");
        break;
        case "sellosRopa":
            sellosRopaView();
            console.log("en este caso dibujar??a la section sellos Ropa");
        break;
        case "sellosMadera":
            sellosMaderaView();
            console.log("en este caso dibujar??a la section sellos Madera");
        break;
        case "sellosProfesionales":
            sellosProfesionalesView();
            console.log("en este caso dibujar??a la section sellos Profesionales");
        break;
        case "sellosEscolares":
            sellosEscolaresView();            
            console.log("en este caso dibujar??a la section sellos Escolares");
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

let cartShopping=(product, amount) =>{
    let retrievedObject = localStorage.getItem('cartObject');
    let txtWapp="Productos: \n";
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
    for (let x in cartObject){  //recorre el object cartObject y guarda su contenido en una vble de texto       
        if(cartObject[x] !== 0){
            txtWapp+= "Sello: "+x+"   Cantidad: "+cartObject[x]+"\n";//\n es un salto de linea
        }             
    }
    console.log("le estar??a enviando por Wapp: \n"+txtWapp); 
    //Para que lo lea Wapp tiene que estar codificado como url, en js se usa la sig funci??n.
    let currentCart=encodeURI("Hola, quer??a consultar pos los sellos que vi en la web: \n"+txtWapp);
    document.getElementById('whatsapp').innerHTML=`<a id="whatsapp" href="https://wa.me/5492234368578?text=`+currentCart+`" target="_blank" style="color: green;"><i class="fa-brands fa-whatsapp"></i></a> `
    document.getElementById('whatsappFooter').innerHTML=`<a id="whatsappFooter" href="https://wa.me/5492234368578?text=`+currentCart+`" target="_blank" style="color: green;"><i class="fa-brands fa-whatsapp"></i></a> `

    
}

let modalShopView=(action) =>
{
    let cartShop=cartShopping();
    let idLine="";
    let idSello="";
    
    for (let x in cartShop){
        idSello="amount"+x;
        idLine="line"+x;
        if (cartShop[x] !== 0){            
            document.getElementById(idSello).textContent=cartShop[x];
            document.getElementById(idLine).style.display="block";
        }else{
            console.log(idSello+"++++"+cartShop[x]);
            document.getElementById(idLine).style.display="none";
        }
    }    
    document.getElementById("modalShop").style.display=action;
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
    document.getElementById("footerMain").innerHTML= htmlFooter();
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