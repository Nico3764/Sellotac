let htmlFooter=()=>
{
    let footerContacts=`
        <span class="" style="text-align: center;" ><small>Contactos</small></span>
        <a href="https://instagram.com/innovet2022?igshid=ZDdkNTZiNTM=" target="_blank" style="color: maroon;"><i class="fa-brands fa-instagram"></i></a>                      
        <a href="https://www.facebook.com/gabiyeuge.manzzeti?mibextid=ZbWKwL" target="_blank" style="color: #4267B2;"><i class="fa-brands fa-facebook"></i></a>
        <a id="whatsappFooter" href="https://wa.me/5492236946602?text=Hola,%20quería%20consultar%20por%20los%20sellos:" target="_blank" style="color: green;"><i class="fa-brands fa-whatsapp"></i></a> 
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

    return drawViewSize(footerContacts,footerDeveloper,"footer");
}

let htmlPresentation=()=>{

    let presentationDescription=`
        <h2 style="font-family: Shantell Sans, serif;">Nuestra Propuesta en Sellos:</h2>
        <table style="width:100%">
            <tr>
              <td>
                <img class="ico" src="./img/Ico/ico1.jpeg" alt="Imagen de persona con una idea">
              </td>
              <td>
                Si tenes una idea,  nosotros lo plasmamos en un sello.
              </td>
            </tr>
            <tr>
              <td>
                <img class="ico" src="./img/Ico/ico2.png" alt="Imagen de un carrito de compras">
              </td>
              <td>
                Hace click en el menu para ver nuestros productos, agregá el tipo de sello que te guste 
                al carrito y consultá con nuestros vendedores por tu diseño.
              </td>
            </tr>
            <tr>
              <td>
                <img class="ico" src="./img/Ico/ico3.png" alt="Imagen de persona festejando">
              </td>
              <td>
                Te vas a sorprender al ver tu idea materializada en un sello y disponible para utilizarla cuando quieras.
                Animate.!! estas a tiempo.
              </td>
            </tr>        
            <tr>
              <td>
                <img class="ico" src="./img/Ico/ico4.jpeg" alt="Imagen de tarjeta de credito">
              </td>
              <td>
                Formas de pago: Podes abonar en efectivo ,tranferencia bancaria o cuenta DNI.
              </td>
            </tr>
            <tr>
              <td colspan="2" style="padding-top: 20px;">
                Trabajamos con seña del 50 % y el 50 % restante cuando se entrega.
              </td>         
            </tr>        
        </table>`;

    let presentationCarrousel=`
        <div class="container">
            <img id="imgCarrousel"src="./img/CarrouselPortada/Carrousel1.jpeg" alt="Imagen de sello Trodat">
            <a id="next" href="#imgCarrousel">></a>
            <a id="prev" href="#imgCarrousel"><</a>
        </div>`;
    //console.log(drawViewSize(pocketDescription,pocketCarrousel,pocketBuyButton));
    return drawViewSize(presentationDescription,presentationCarrousel,""); 
    
}
let htmlSellosEscolares=() =>{

    let escolaresDescription=`
        <h2 style="font-family: Shantell Sans, serif;">Nuestros Sellos ESCOLARES:</h2>
        <p>Sellos Escolares ideal para rotular los margenes de las 
        hojas de los chicos para el cole.</p>
        <p>También hacemos sellos Profesionales, para Docentes, Personales..!</p>
        <p>Hace click en el menu para ver nuestros productos, agregá el tipo de sello que te guste 
            al carrito y consultá con nuestros vendedores por tu diseño.</p>
        <p>Te vas a sorprender al ver tu idea materializada en un sello y disponible para utilizarla cuando quieras.
            Animate.!! estas a tiempo.</p>`;

    let escolaresCarrousel=`
        <div class="container">
            <img id="imgCarrousel"src="./img/CarrouselEscolares/Carrousel1.jpeg" alt="Imagen de sello Trodat">
            <a id="next" href="#imgCarrousel">></a>
            <a id="prev" href="#imgCarrousel"><</a>
        </div>`;
    let escolaresBuyButton=`
        <a href="#" id="buyEscolar" class="buy">Agregar al carrito
            <i class="fa-solid fa-cart-shopping" style=""></i>
        </a> `;
 
    //console.log(drawViewSize(pocketDescription,pocketCarrousel,pocketBuyButton));
    return drawViewSize(escolaresDescription,escolaresCarrousel,escolaresBuyButton); 

}
let htmlSellosProfesionales=() =>{

    let profesionalesDescription=`
        <h2 style="font-family: Shantell Sans, serif;">Nuestros Sellos PROFESIONALES:</h2>
        <p>PROFESIONALES, sit amet consectetur adipisicing elit. Dolor at laboriosam
        tempore molestiae deleniti culpa iusto aut neque corporis libero placeat ea, 
        sequi voluptas nihil ad reprehenderit inventore, nam expedita!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor at laboriosam 
        tempore molestiae deleniti culpa iusto aut neque corporis libero placeat ea, 
        sequi voluptas nihil ad reprehenderit inventore, nam expedita!</p>
        <p>Hace click en el menu para ver nuestros productos, agregá el tipo de sello que te guste 
            al carrito y consultá con nuestros vendedores por tu diseño.</p>
        <p>Te vas a sorprender al ver tu idea materializada en un sello y disponible para utilizarla cuando quieras.
            Animate.!! estas a tiempo.</p>`;

    let profesionalesCarrousel=`
        <div class="container">
            <img id="imgCarrousel"src="./img/CarrouselProfesionales/Carrousel1.jpeg" alt="Imagen de sello Trodat">
            <a id="next" href="#imgCarrousel">></a>
            <a id="prev" href="#imgCarrousel"><</a>
        </div>`;
    let profesionalesBuyButton=`
        <a href="#" id="buyProfecional" class="buy">Agregar al carrito
            <i class="fa-solid fa-cart-shopping" style=""></i>
        </a> `;
 
    //console.log(drawViewSize(pocketDescription,pocketCarrousel,pocketBuyButton));
    return drawViewSize(profesionalesDescription,profesionalesCarrousel,profesionalesBuyButton); 
}
let htmlSellosMadera=() =>{
    
    let maderaDescription=`
        <h2 style="font-family: Shantell Sans, serif;">Nuestros Sellos de MADERA:</h2>
        <p>Tradicional, sellos de madera.</p> 
        <p>Con base en madera  y perilla plástica.</p>

        <p>Vienen en varias medidas y sirven para sellar documentos</p>

        <p>El precio no incluye almohadilla ni tinta.</p>
        <p>Hace click en el menu para ver nuestros productos, agregá el tipo de sello que te guste 
            al carrito y consultá con nuestros vendedores por tu diseño.</p>
        <p>Te vas a sorprender al ver tu idea materializada en un sello y disponible para utilizarla cuando quieras.
            Animate.!! estas a tiempo.</p>`;

    let maderaCarrousel=`
            <div class="container">
                <img id="imgCarrousel"src="./img/CarrouselMadera/Carrousel1.jpeg" alt="Imagen de sello Trodat">
                <a id="next" href="#imgCarrousel">></a>
                <a id="prev" href="#imgCarrousel"><</a>
            </div>`;
    let maderaBuyButton=`
        <a href="#" id="buyMadera" class="buy">Agregar al carrito
            <i class="fa-solid fa-cart-shopping" style=""></i>
        </a> `;
 
    //console.log(drawViewSize(pocketDescription,pocketCarrousel,pocketBuyButton));
    return drawViewSize(maderaDescription,maderaCarrousel,maderaBuyButton); 
}
let htmlSellosRopa=() =>{

    let ropaDescription=`
        <h2 style="font-family: Shantell Sans, serif;">Nuestros Sellos para ROPA:</h2>
        <p>Ropa, sit amet consectetur adipisicing elit. Dolor at laboriosam
            tempore molestiae deleniti culpa iusto aut neque corporis libero placeat ea, 
            sequi voluptas nihil ad reprehenderit inventore, nam expedita!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor at laboriosam 
            tempore molestiae deleniti culpa iusto aut neque corporis libero placeat ea, 
            sequi voluptas nihil ad reprehenderit inventore, nam expedita!</p>
            <p>Hace click en el menu para ver nuestros productos, agregá el tipo de sello que te guste 
                al carrito y consultá con nuestros vendedores por tu diseño.</p>
            <p>Te vas a sorprender al ver tu idea materializada en un sello y disponible para utilizarla cuando quieras.
                Animate.!! estas a tiempo.
        </p>`;

    let ropaCarrousel=`
            <div class="container">
                <img id="imgCarrousel"src="./img/CarrouselRopa/Carrousel1.jpeg" alt="Imagen de sello Trodat">
                <a id="next" href="#imgCarrousel">></a>
                <a id="prev" href="#imgCarrousel"><</a>
            </div>`;
    let ropaBuyButton=`
        <a href="#" id="buyRopa" class="buy">Agregar al carrito
            <i class="fa-solid fa-cart-shopping" style=""></i>
        </a> `;
                         
    //console.log(drawViewSize(pocketDescription,pocketCarrousel,pocketBuyButton));
    return drawViewSize(ropaDescription,ropaCarrousel,ropaBuyButton); 
}
let htmlSellosFechadores=() =>{
    
    let fechadoresDescription=`
        <h2 style="font-family: Shantell Sans, serif;">Nuestros Sellos FECHADORES:</h2>
        <p>FECHADORES, sit amet consectetur adipisicing elit. Dolor at laboriosam
                            tempore molestiae deleniti culpa iusto aut neque corporis libero placeat ea, 
                            sequi voluptas nihil ad reprehenderit inventore, nam expedita!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor at laboriosam 
                            tempore molestiae deleniti culpa iusto aut neque corporis libero placeat ea, 
                            sequi voluptas nihil ad reprehenderit inventore, nam expedita!</p>
                            <p>Hace click en el menu para ver nuestros productos, agregá el tipo de sello que te guste 
                                al carrito y consultá con nuestros vendedores por tu diseño.</p>
                            <p>Te vas a sorprender al ver tu idea materializada en un sello y disponible para utilizarla cuando quieras.
                                Animate.!! estas a tiempo.</p>`;

    let fechadoresCarrousel=`
            <div class="container">
                <img id="imgCarrousel"src="./img/CarrouselFechadores/Carrousel1.jpeg" alt="Imagen de sello Trodat">
                <a id="next" href="#imgCarrousel">></a>
                <a id="prev" href="#imgCarrousel"><</a>
            </div>`;
    let fechadoresBuyButton=`
        <a href="#" id="buyFechadores" class="buy">Agregar al carrito
            <i class="fa-solid fa-cart-shopping" style=""></i>
        </a> `;
                         
    //console.log(drawViewSize(pocketDescription,pocketCarrousel,pocketBuyButton));
    return drawViewSize(fechadoresDescription,fechadoresCarrousel,fechadoresBuyButton); 
}
let htmlSellosPocket=() =>{
    let pocketDescription=`
        <h2 style="font-family: Shantell Sans, serif;">Nuestros Sellos POCKET:</h2>
        <p>POCKET, sit amet consectetur adipisicing elit. Dolor at laboriosam
                            tempore molestiae deleniti culpa iusto aut neque corporis libero placeat ea, 
                            sequi voluptas nihil ad reprehenderit inventore, nam expedita!
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor at laboriosam 
                            tempore molestiae deleniti culpa iusto aut neque corporis libero placeat ea, 
                            sequi voluptas nihil ad reprehenderit inventore, nam expedita!</p>
                            <p>Hace click en el menu para ver nuestros productos, agregá el tipo de sello que te guste 
                                al carrito y consultá con nuestros vendedores por tu diseño.</p>
                            <p>Te vas a sorprender al ver tu idea materializada en un sello y disponible para utilizarla cuando quieras.
                                Animate.!! estas a tiempo.</p>`;

    let pocketCarrousel=`
            <div class="container">
                <img id="imgCarrousel"src="./img/CarrouselPocket/Carrousel1.jpeg" alt="Imagen de sello Trodat">
                <a id="next" href="#imgCarrousel">></a>
                <a id="prev" href="#imgCarrousel"><</a>
            </div>`;
    let pocketBuyButton=`
        <a href="#" id="buyPocket" class="buy">Agregar al carrito
            <i class="fa-solid fa-cart-shopping" style=""></i>
        </a> `;
                         
    //console.log(drawViewSize(pocketDescription,pocketCarrousel,pocketBuyButton));
    return drawViewSize(pocketDescription,pocketCarrousel,pocketBuyButton); 
}
let htmlPuntosDeEntrega=()=>
{
    let puntosDeEntregaDescription=`
                                    <h2 style="font-family: Shantell Sans, serif;">Nuestros PUNTOS DE ENTREGA:</h2>
                                    <p>La entrega se realiza sin costo en zona centro/macrocentro o en los siguientes puntos de entrega:</p>
                                    <p><b style="font-size:20px">--></b> Independencia y Castelli.</p>
                                    <p><b style="font-size:20px">--></b> Independencia y Gascon.</p>
                                    <p><b style="font-size:20px">--></b> Independencia y Avellaneda.</p>
                                    <p><b style="font-size:20px">--></b> Constitución y Carballo.</p>
                                    <p><b style="font-size:20px">--></b> Constitución y la costa-->Shell.</p>
                                    <p><b style="font-size:20px">--></b> Constitución y Ruta 2-->Carrefour.</p>
                                    <p><b style="font-size:20px">--></b> Independencia y Juan B. Justo.</p>
                                    <p><b style="font-size:20px">--></b> Juan B. Justo y Buenos Aires.</p>
                                    <p><b style="font-size:20px">--></b> Alem y Quintana.</p>
                                    <p>Consulte con nuestros vendedores disponibilidad y costos por entregas en otros puntos.</p>                         
                                    `;


    let puntosDeEntregaCarrousel=`
            <div class="container">
                <img id="imgCarrousel"src="./img/CarrouselPuntos/Carrousel1.jpeg" alt="Imagen de sello Trodat">
                <a id="next" href="#imgCarrousel">></a>
                <a id="prev" href="#imgCarrousel"><</a>
            </div>`;
    let puntosDeEntregaBuyButton=` `;
                         
    return drawViewSize(puntosDeEntregaDescription,puntosDeEntregaCarrousel,puntosDeEntregaBuyButton);

}
let htmlPreguntasFrecuentes=()=>
{
    let preguntasFrecuentesDescription=`
                                        <h2 style="font-family: Shantell Sans, serif;">Preguntas Frescuentes:</h2>
                                        <p><b>¿Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit temporibus labore eligendi 
                                            quaerat sed perspiciatis ut commodi porro blanditiis officiis explicabo, 
                                            cupiditate reiciendis velit ab ipsam soluta aspernatur sapiente sit?</b>
                                        </p>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit temporibus labore eligendi 
                                            quaerat sed perspiciatis ut commodi porro blanditiis officiis explicabo, cupiditate reiciendis 
                                            velit ab ipsam soluta aspernatur sapiente sit.
                                        </p>
                                        <p><b>¿Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit temporibus labore eligendi 
                                            quaerat sed perspiciatis ut commodi porro blanditiis officiis explicabo, 
                                            cupiditate reiciendis velit ab ipsam soluta aspernatur sapiente sit?</b>
                                        </p>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit temporibus labore eligendi 
                                            quaerat sed perspiciatis ut commodi porro blanditiis officiis explicabo, cupiditate reiciendis 
                                            velit ab ipsam soluta aspernatur sapiente sit.
                                        </p>
                                        <p><b>¿Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit temporibus labore eligendi 
                                            quaerat sed perspiciatis ut commodi porro blanditiis officiis explicabo, 
                                            cupiditate reiciendis velit ab ipsam soluta aspernatur sapiente sit?</b>
                                        </p>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit temporibus labore eligendi 
                                            quaerat sed perspiciatis ut commodi porro blanditiis officiis explicabo, cupiditate reiciendis 
                                            velit ab ipsam soluta aspernatur sapiente sit.
                                        </p>
                                        <p><b>¿Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit temporibus labore eligendi 
                                            quaerat sed perspiciatis ut commodi porro blanditiis officiis explicabo, 
                                            cupiditate reiciendis velit ab ipsam soluta aspernatur sapiente sit?</b>
                                        </p>
                                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit temporibus labore eligendi 
                                            quaerat sed perspiciatis ut commodi porro blanditiis officiis explicabo, cupiditate reiciendis 
                                            velit ab ipsam soluta aspernatur sapiente sit.
                                        </p>`;


    let preguntasFrecuentesCarrousel=`
            <div class="container">
                <img id="imgCarrousel"src="./img/CarrouselPreguntas/Carrousel1.jpeg" alt="Imagen de sello Trodat">
                <a id="next" href="#imgCarrousel">></a>
                <a id="prev" href="#imgCarrousel"><</a>
            </div>`;
    let preguntasFrecuentesBuyButton=` `;
                         
    return drawViewSize(preguntasFrecuentesDescription,preguntasFrecuentesCarrousel,preguntasFrecuentesBuyButton);

}
let drawViewSize =(sectionText,carrouselImg,buyButton)=>
{
    //console.log ("entra y muestra" +sectionText+carrouselImg+buyButton)
    let size= windowsSize();
    if ((buyButton === "footer") && (size === "sm") ||(buyButton === "footer") && (size === "m"))
    {
        return `
        <div style="font-size: 5vw;">`+sectionText+`</div>
        <div style="margin: 10px"></div>
        <div style="font-size: 2vw; text-align: right;padding-right: 2vw;">`+carrouselImg+`</div>`;
    } else {
        if ((buyButton === "footer") && (size === "l") ||(buyButton === "footer") && (size === "lg"))
        return `
        <span style="font-size: 4vw;">`+sectionText+`</span>
        <span style="font-size: 1.5vw; text-align: right;padding-left: 16vw;">`+carrouselImg+`</span>`;
    };
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