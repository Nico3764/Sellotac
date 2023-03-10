let htmlFooter=()=>
{
    let footerContacts=`
        <span class="" ><small>Contactos</small></span>
        <a href="https://instagram.com/nicoo_1987?igshid=ZDdkNTZiNTM=" target="_blank" style="color: maroon;"><i class="fa-brands fa-instagram"></i></a>                      
        <a href="https://www.facebook.com/solamente.nico.5?mibextid=ZbWKwL" target="_blank" style="color: #4267B2;"><i class="fa-brands fa-facebook"></i></a>
        <a href="https://ar.linkedin.com/" target="_blank" style="color:#00a0dc;"><i class="fa-brands fa-linkedin"></i></a>  
        <a href="https://twitter.com/?lang=es" target="_blank" style="color:#00acee;"><i class="fa-brands fa-twitter"></i></a>                      
        <a id="whatsappFooter" href="https://wa.me/5492234368578?text=Yo%20interesado%20en%20sellos" target="_blank" style="color: green;"><i class="fa-brands fa-whatsapp"></i></a> 
        <a href="https://www.gmail.com" target="_blank" style="color: black;"><i class="fa-regular fa-envelope"></i></a>`
    let footerDeveloper=`
         <i class="fa-solid fa-code"style="color: red;"></i>
         <span><small>---->Creado por: ISIsoft</small></span>  
         <span><small>Utilizando:</small></span>
         <span class="">
             <i class="fa-brands fa-html5"></i>
             <i class="fa-brands fa-js"></i>
             <i class="fa-brands fa-css3-alt"></i>              
         </span>`

    return drawViewSize(footerContacts,footerDeveloper,"");
}

let htmlPresentation=()=>{

    let presentationDescription=`
    <p>Si tenes una idea, nosotros lo plasmamos en un sello.</p>
    <p>Hace click en el menu para ver nuestros productos, agregá el tipo de sello que te guste 
        al carrito y consultá con nuestros vendedores por tu diseño.</p>
    <p>Te vas a sorprender al ver tu idea materializada en un sello y disponible para utilizarla cuando quieras.
        Animate.!! estas a tiempo.</p>`;

    let presentationCarrousel=`<img id="imgCarrousel"src="./img/CarrouselPortada/Carrousel1.jpeg" alt="Imagen de sello Trodat" style="width: 300px; height: 300px; border-radius: 10%;">`;
    
    //console.log(drawViewSize(pocketDescription,pocketCarrousel,pocketBuyButton));
    return drawViewSize(presentationDescription,presentationCarrousel,""); 
    
}

let htmlSellosEscolares=() =>{

    let escolaresDescription=`<p>ESCOLARES, sit amet consectetur adipisicing elit. Dolor at laboriosam
    tempore molestiae deleniti culpa iusto aut neque corporis libero placeat ea, 
    sequi voluptas nihil ad reprehenderit inventore, nam expedita!
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor at laboriosam 
    tempore molestiae deleniti culpa iusto aut neque corporis libero placeat ea, 
    sequi voluptas nihil ad reprehenderit inventore, nam expedita!</p>
    <p>Hace click en el menu para ver nuestros productos, agregá el tipo de sello que te guste 
        al carrito y consultá con nuestros vendedores por tu diseño.</p>
    <p>Te vas a sorprender al ver tu idea materializada en un sello y disponible para utilizarla cuando quieras.
        Animate.!! estas a tiempo.</p>`;

    let escolaresCarrousel=`<img id="imgCarrousel"src="./img/CarrouselEscolares/Carrousel1.jpeg" alt="Imagen de sello Trodat" style="width: 300px; height: 300px; border-radius: 10%;">`;
    let escolaresBuyButton=`<a href="#" id="buyEscolar" class="buy">Agregar al carrito
    <i class="fa-solid fa-cart-shopping" style=""></i>
    </a> `;
 
    //console.log(drawViewSize(pocketDescription,pocketCarrousel,pocketBuyButton));
    return drawViewSize(escolaresDescription,escolaresCarrousel,escolaresBuyButton); 

}


let htmlSellosProfesionales=() =>{

    let profesionalesDescription=`<p>PROFESIONALES, sit amet consectetur adipisicing elit. Dolor at laboriosam
    tempore molestiae deleniti culpa iusto aut neque corporis libero placeat ea, 
    sequi voluptas nihil ad reprehenderit inventore, nam expedita!
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor at laboriosam 
    tempore molestiae deleniti culpa iusto aut neque corporis libero placeat ea, 
    sequi voluptas nihil ad reprehenderit inventore, nam expedita!</p>
    <p>Hace click en el menu para ver nuestros productos, agregá el tipo de sello que te guste 
        al carrito y consultá con nuestros vendedores por tu diseño.</p>
    <p>Te vas a sorprender al ver tu idea materializada en un sello y disponible para utilizarla cuando quieras.
        Animate.!! estas a tiempo.</p>`;

    let profesionalesCarrousel=`<img id="imgCarrousel"src="./img/CarrouselProfesionales/Carrousel1.jpeg" alt="Imagen de sello Trodat" style="width: 300px; height: 300px; border-radius: 10%;">`;
    let profesionalesBuyButton=`<a href="#" id="buyProfecional" class="buy">Agregar al carrito
    <i class="fa-solid fa-cart-shopping" style=""></i>
    </a> `;
 
    //console.log(drawViewSize(pocketDescription,pocketCarrousel,pocketBuyButton));
    return drawViewSize(profesionalesDescription,profesionalesCarrousel,profesionalesBuyButton); 
}

let htmlSellosMadera=() =>{
    
    let maderaDescription=`<p>MADERA, sit amet consectetur adipisicing elit. Dolor at laboriosam
    tempore molestiae deleniti culpa iusto aut neque corporis libero placeat ea, 
    sequi voluptas nihil ad reprehenderit inventore, nam expedita!
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor at laboriosam 
    tempore molestiae deleniti culpa iusto aut neque corporis libero placeat ea, 
    sequi voluptas nihil ad reprehenderit inventore, nam expedita!</p>
    <p>Hace click en el menu para ver nuestros productos, agregá el tipo de sello que te guste 
        al carrito y consultá con nuestros vendedores por tu diseño.</p>
    <p>Te vas a sorprender al ver tu idea materializada en un sello y disponible para utilizarla cuando quieras.
        Animate.!! estas a tiempo.</p>`;

    let maderaCarrousel=`<img id="imgCarrousel"src="./img/CarrouselMadera/Carrousel1.jpeg" alt="Imagen de sello Trodat" style="width: 300px; height: 300px; border-radius: 10%;">`;
    let maderaBuyButton=`<a href="#" id="buyMadera" class="buy">Agregar al carrito
    <i class="fa-solid fa-cart-shopping" style=""></i>
    </a> `;
 
    //console.log(drawViewSize(pocketDescription,pocketCarrousel,pocketBuyButton));
    return drawViewSize(maderaDescription,maderaCarrousel,maderaBuyButton); 
}
let htmlSellosRopa=() =>{

    let ropaDescription=`<p>Ropa, sit amet consectetur adipisicing elit. Dolor at laboriosam
                            tempore molestiae deleniti culpa iusto aut neque corporis libero placeat ea, 
                            sequi voluptas nihil ad reprehenderit inventore, nam expedita!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor at laboriosam 
                            tempore molestiae deleniti culpa iusto aut neque corporis libero placeat ea, 
                            sequi voluptas nihil ad reprehenderit inventore, nam expedita!</p>
                            <p>Hace click en el menu para ver nuestros productos, agregá el tipo de sello que te guste 
                                al carrito y consultá con nuestros vendedores por tu diseño.</p>
                            <p>Te vas a sorprender al ver tu idea materializada en un sello y disponible para utilizarla cuando quieras.
                                Animate.!! estas a tiempo.</p>`;

    let ropaCarrousel=`<img id="imgCarrousel"src="./img/CarrouselRopa/Carrousel1.jpeg" alt="Imagen de sello Trodat" style="width: 300px; height: 300px; border-radius: 10%;">`;
    let ropaBuyButton=`<a href="#" id="buyRopa" class="buy">Agregar al carrito
                            <i class="fa-solid fa-cart-shopping" style=""></i>
                         </a> `;
                         
    //console.log(drawViewSize(pocketDescription,pocketCarrousel,pocketBuyButton));
    return drawViewSize(ropaDescription,ropaCarrousel,ropaBuyButton); 
}
let htmlSellosFechadores=() =>{
    
    let fechadoresDescription=`<p>FECHADORES, sit amet consectetur adipisicing elit. Dolor at laboriosam
                            tempore molestiae deleniti culpa iusto aut neque corporis libero placeat ea, 
                            sequi voluptas nihil ad reprehenderit inventore, nam expedita!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor at laboriosam 
                            tempore molestiae deleniti culpa iusto aut neque corporis libero placeat ea, 
                            sequi voluptas nihil ad reprehenderit inventore, nam expedita!</p>
                            <p>Hace click en el menu para ver nuestros productos, agregá el tipo de sello que te guste 
                                al carrito y consultá con nuestros vendedores por tu diseño.</p>
                            <p>Te vas a sorprender al ver tu idea materializada en un sello y disponible para utilizarla cuando quieras.
                                Animate.!! estas a tiempo.</p>`;

    let fechadoresCarrousel=`<img id="imgCarrousel"src="./img/CarrouselFechadores/Carrousel1.jpeg" alt="Imagen de sello Trodat" style="width: 300px; height: 300px; border-radius: 10%;">`;
    let fechadoresBuyButton=`<a href="#" id="buyFechadores" class="buy">Agregar al carrito
                            <i class="fa-solid fa-cart-shopping" style=""></i>
                         </a> `;
                         
    //console.log(drawViewSize(pocketDescription,pocketCarrousel,pocketBuyButton));
    return drawViewSize(fechadoresDescription,fechadoresCarrousel,fechadoresBuyButton); 
}
let htmlSellosPocket=() =>{
    let pocketDescription=`<p>POCKET, sit amet consectetur adipisicing elit. Dolor at laboriosam
                            tempore molestiae deleniti culpa iusto aut neque corporis libero placeat ea, 
                            sequi voluptas nihil ad reprehenderit inventore, nam expedita!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor at laboriosam 
                            tempore molestiae deleniti culpa iusto aut neque corporis libero placeat ea, 
                            sequi voluptas nihil ad reprehenderit inventore, nam expedita!</p>
                            <p>Hace click en el menu para ver nuestros productos, agregá el tipo de sello que te guste 
                                al carrito y consultá con nuestros vendedores por tu diseño.</p>
                            <p>Te vas a sorprender al ver tu idea materializada en un sello y disponible para utilizarla cuando quieras.
                                Animate.!! estas a tiempo.</p>`;

    let pocketCarrousel=`<img id="imgCarrousel"src="./img/CarrouselPocket/Carrousel1.jpeg" alt="Imagen de sello Trodat" style="width: 300px; height: 300px; border-radius: 10%;">`;
    let pocketBuyButton=`<a href="#" id="buyPocket" class="buy">Agregar al carrito
                            <i class="fa-solid fa-cart-shopping" style=""></i>
                         </a> `;
                         
    //console.log(drawViewSize(pocketDescription,pocketCarrousel,pocketBuyButton));
    return drawViewSize(pocketDescription,pocketCarrousel,pocketBuyButton); 
}

let drawViewSize =(sectionText,carrouselImg,buyButton)=>
{
    //console.log ("entra y muestra" +sectionText+carrouselImg+buyButton)
    let size= windowsSize();
    switch (size) {
        case "sm":
            return `
            <table>
                <tr>
                    <td style="text-align: center; opacity: 80%;">`+carrouselImg+`</td>    
                </tr>
                <tr>
                    <td>`+sectionText+`</td>   
                </tr>
                <tr>
                    <td>`+buyButton+`</td>    
                </tr>
            </table>`;
            
            break;
        case "m":
            return `
            <table>
                <tr>
                    <td style="text-align: center; opacity: 80%;">`+carrouselImg+`</td>    
                </tr>
                <tr>
                    <td>`+sectionText+`</td>   
                </tr>
                <tr>
                    <td>`+buyButton+`</td>    
                </tr>
            </table>`;
            
            break;
        case "l":
            return `
            <table>
            <tr>
                <td style="text-align: left; ">`+sectionText+`</td>
                <td rowspan="2" style="text-align: center; opacity: 80%;">`+carrouselImg+`</td>
            </tr>
            <tr style="text-align: center; ">
                <td>`+buyButton+`</td>   
            </tr>  
            </table>`;

            break;
        case "lg":
            return `
            <table>
            <tr>
                <td style="text-align: left; ">`+sectionText+`</td>
                <td rowspan="2" style="text-align: center; opacity: 80%;">`+carrouselImg+`</td>
            </tr>
            <tr style="text-align: center; ">
                <td>`+buyButton+`</td>   
            </tr>  
            </table>`;

            break;    
        default:
            alert ("Tamaño de pantalla incompatible");
    }   

}

let windowsSize=()=>
{
    if (window.matchMedia("(max-width: 420px)").matches){
        return "sm";
    }
    if (window.matchMedia("(max-width: 650px)").matches){
        return "m";
    }
    if (window.matchMedia("(max-width: 1500px)").matches){
        return "l";
    }
    if (window.matchMedia("(min-width: 1500px)").matches){
        return "lg";
    }
}
    
