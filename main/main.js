//Vbles Globales en localStorage:
localStorage.myInterval=4000; 
let cartObject = { 'escolares': 0, 'profesionales': 0, 'madera': 0, 'ropa':0, 'fechadores':0, 'pocket':0 };
localStorage.setItem('cartObject', JSON.stringify(cartObject));

let menuView=(event) => //
{
    let eventId= event.target.id;
    let elementOrigin= event.target.nodeName;
    if(elementOrigin !== "I"){
        event.preventDefault();//detiene la propagación del evento por defecto, es útil para que los <a> no desplacen la pantalla.
    };     
    if(eventId === 'actMenu'){
        document.getElementById('actMenu').style.display = "none";
        document.getElementById('dropdownMenu').style.display = "block";    
    };
    myTimeout = setTimeout(()=>{
        if (eventId !== 'actMenu'){
            document.getElementById('actMenu').style.display = "block";
            document.getElementById('dropdownMenu').style.display = "none";   
        };
    }, 100);
    
    /*
    console.log("el evento que llega al analizador es: ", event);
    console.log("el id del elemento que generó el evento es: ",event.target.id);
    console.log("el elemento que generó el evento es: "+elementOrigin);
    */
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
            console.log("en este caso cerraría el carrito de compras");
            break;
        case "cartShop":
            modalShopView("block");
            console.log("en este caso dibujaría el carrito de compras");
            break;
    }
    //EVENTOS DE LAS SECCIONES
    switch (eventId) {          
        case "next":
            nextPrevImg("next");
            console.log("en este caso avanzaría la de img actual de carrousel a la prox");
        break;
        case "prev":
            nextPrevImg("prev");
            console.log("en este caso volvería la de img actual de carrousel a la ant");
        break;
        case "modalImgCarrousel":
            modalImgCarrouselView(event,"close");
            console.log("en este caso cerraría el modal de img actual de carrousel");
        break;
        case "imgCarrousel":          
                modalImgCarrouselView(event,"open");
                console.log("en este caso mostraria el modal de img actual de carrousel");                       
        break;
        case "mainPage":
            presentationView();
            console.log("en este caso dibujaría la section Principal");
        break;
        case "preguntasFrecuentes":
            console.log("en este caso dibujaría la section Preguntas Frecuentes");
            preguntasFrecuentesView();
        break;
        case "puntosDeEntrega":
            console.log("en este caso dibujaría la section Puntos de entrega");
            puntosDeEntregaView();
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
    console.log("le estaría enviando por Wapp: \n"+txtWapp); 
    //Para que lo lea Wapp tiene que estar codificado como url, en js se usa la sig función.
    let currentCart=encodeURI("Hola, quería consultar por los sellos que vi en la web: \n"+txtWapp);
    document.getElementById('whatsapp').innerHTML=`<a id="whatsapp" href="https://wa.me/5492236946602?text=`+currentCart+`" target="_blank" style="color: green;"><i class="fa-brands fa-whatsapp"></i></a> `
    document.getElementById('whatsappFooter').innerHTML=`<a id="whatsappFooter" href="https://wa.me/5492236946602?text=`+currentCart+`" target="_blank" style="color: green;"><i class="fa-brands fa-whatsapp"></i></a> `

    
}

let nextPrevImg=(action)=>
{
    let source= document.getElementById("imgCarrousel").attributes[1].textContent;
    let nextsource=source;
    let i=0;
    if (action === "next"){
            while((source === nextsource) && i<10)
            {
                console.log(i.toString(),(i+1).toString());
                nextsource=source.replace(i.toString(),(i+1).toString());
                console.log (source,nextsource);
                if(i === 9){
                    nextsource=source.replace("9","1");
                }
                if (i > 100){
                    break;
                }
                i++;
            }
    }
    if (action === "prev"){
        i=9;
        while((source === nextsource) && i>0)
        {
                console.log(i.toString(),(i-1).toString());
                nextsource=source.replace(i.toString(),(i-1).toString());
                console.log (source,nextsource);
                if(i === 1){
                    nextsource=source.replace("1","9");
                }
                if (i > 100){
                    break;
                }
                i--;
        }
    }
    document.getElementById("imgCarrousel").src=nextsource;   

}

let modalImgCarrouselView =(event,action)=>
{
    let elementModalCarrousel=document.getElementById("modalImgCarrousel");    
    if ((event.target.id === "imgCarrousel") && (action === "open")){
        let srcNew=event.target.currentSrc;
        elementModalCarrousel.src=srcNew;
        elementModalCarrousel.style.display="block";
    };
    if (action === "close"){
        elementModalCarrousel.style.display="none";
    }
}
let modalShopView=(action) =>
{
    //localStorage.setItem('lastView', "shop");
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

let preguntasFrecuentesView=()=>{
    localStorage.setItem('lastView', "preguntas");
    document.getElementById('section').innerHTML= htmlPreguntasFrecuentes();
    carrouselInterval("./img/CarrouselPreguntas/", "imgCarrousel");
}
let puntosDeEntregaView=()=>{
    localStorage.setItem('lastView', "puntos");
    document.getElementById('section').innerHTML= htmlPuntosDeEntrega();
    carrouselInterval("./img/CarrouselPuntos/", "imgCarrousel");
}
let sellosPocketView=() =>
{
    localStorage.setItem('lastView', "pocket");
    document.getElementById('section').innerHTML= htmlSellosPocket();
    carrouselInterval("./img/CarrouselPocket/", "imgCarrousel");
}
let sellosFechadoresView=() =>
{
    localStorage.setItem('lastView', "fechadores");
    document.getElementById('section').innerHTML= htmlSellosFechadores();
    carrouselInterval("./img/CarrouselFechadores/", "imgCarrousel");
}
let sellosRopaView=() =>
{
    localStorage.setItem('lastView', "ropa");
    document.getElementById('section').innerHTML= htmlSellosRopa();
    carrouselInterval("./img/CarrouselRopa/", "imgCarrousel");
}
let sellosMaderaView=() =>
{
    localStorage.setItem('lastView', "madera");
    document.getElementById('section').innerHTML= htmlSellosMadera();
    carrouselInterval("./img/CarrouselMadera/", "imgCarrousel");
}
let sellosProfesionalesView=() =>
{
    localStorage.setItem('lastView', "profesionales");
    document.getElementById('section').innerHTML= htmlSellosProfesionales();
    carrouselInterval("./img/CarrouselProfesionales/", "imgCarrousel");
}
let sellosEscolaresView=() =>
{
    localStorage.setItem('lastView', "escolares");
    document.getElementById('section').innerHTML= htmlSellosEscolares();
    carrouselInterval("./img/CarrouselEscolares/", "imgCarrousel");
}
let presentationView=() =>
{    
    localStorage.setItem('lastView', "presentation");
    document.getElementById('section').innerHTML= htmlPresentation();
    document.getElementById("footerMain").innerHTML= htmlFooter();
    clearInterval(localStorage.myInterval);
    localStorage.myInterval = setInterval(()=>{corrouselActualiceView("./img/CarrouselPortada/", "imgCarrousel")}, 4000);
}

let resizeView=()=>
{
    console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
    actualView= localStorage.lastView;
    console.log("vista principal");
    switch (actualView) {
        case "escolares":
            sellosEscolaresView();
            document.getElementById("footerMain").innerHTML= htmlFooter();
            break;
        case "profesionales":
            sellosProfesionalesView();
            document.getElementById("footerMain").innerHTML= htmlFooter();
            break;
        case "madera":
            sellosMaderaView();     
            document.getElementById("footerMain").innerHTML= htmlFooter();
            break;
        case "ropa":
            sellosRopaView();
            document.getElementById("footerMain").innerHTML= htmlFooter();
        break;    
        case "fechadores":
            sellosFechadoresView();
            document.getElementById("footerMain").innerHTML= htmlFooter();
        break;
        case "pocket":
            sellosPocketView();
            document.getElementById("footerMain").innerHTML= htmlFooter();
        break;
        case "shop":
            modalShopView("block");
            document.getElementById("footerMain").innerHTML= htmlFooter();
        break;        
        case "presentation":            
            presentationView();
            document.getElementById("footerMain").innerHTML= htmlFooter();
        break;
        case "puntos":
            puntosDeEntregaView();
            document.getElementById("footerMain").innerHTML= htmlFooter();
        break;
        case "preguntas":
            preguntasFrecuentesView();
            document.getElementById("footerMain").innerHTML= htmlFooter();
        break;
    }        
}
/* 
 let timeoutForMenuView =(event) =>
{
   let myTimeout = setTimeout(()=>{menuView(event)}, 200);
} */

let start =() =>
{
    localStorage.lastView="presentation";
	resizeView();
    window.addEventListener("resize", resizeView );
    document.getElementById('body').addEventListener('click', (event)=>{menuView(event)});
}
window.addEventListener('DOMContentLoaded', start );