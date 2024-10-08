
const getData = () =>{
    fetch('productos.json')
    .then(response => response.json())
    .then(data => {
        //return data

        console.log(data);
        
    })
    .catch(err => console.log("\nError al leer el archivo de productos")
    )
}

console.log("muestro la data del archivo");
console.log(getData());



const root = "./images/products/";

let arrayImages = [
        root + "ajo.webp",
        root + "apio.jpg",
        root + "banana.avif",
        root + "batata boñato.jpg",
        root + "barenjena.jpg",
        root + "brocoli.webp",
        root + "cebolla colorada.webp",
        root + "cebolla.jpg",
        root + "ciruela.jpg",
        root + "banana.avif",
        root + "manzana.jpg",
        root + "pera.jpg",
        root + "mandarina.webp",
        root + "naranja.jfif",
        root + "berenjena.jpg",
        root + "apio.jpg",
        root + "tomate.jpg",
        root + "uva.jpg",
        root + "frutilla.jpg",
        root + "zapallo.jpg",
        root + "sandia.jpg",
        root + "zanahoria.jpg",
        root + "brocoli.webp",
        root + "peregil.jpg",
        root + "tomates cherry.jpg",
        root + "legucha criolla.jpg",
        root + "ciruela.jpg",
        root + "pomelo rosado.jfif",
        root + "limon.jpg",
        root + "puerro.avif",
        root + "espinaca.jpg",
        root + "cebolla.jpg",
        root + "cebolla colorada.webp",
        root + "pepino.jpg",
        root + "mango.jpg",
        root + "batata boñato.jpg",
        root + "kiwi.avif",
        root + "papa blanca.jpg",
        root + "papa colorada.jfif",
        root + "papa negra.jpg",
        root + "ajo.webp",
        root + "remolacha.jpg",
    ]

let arrayTitles = [
    "ajo",
    "apio",
    "banana",
    "batata boñato",
    "barenjena",
    "brocoli",
    "cebolla colorada",
    "cebolla",
    "ciruela",
    "banana",
    "manzana",
    "pera",
    "mandarina",
    "naranja",
    "berenjena",
    "apio",
    "tomate",
    "uva",
    "frutilla",
    "zapallo",
    "sandia",
    "zanahoria",
    "brocoli",
    "peregil",
    "tomates cherry",
    "legucha criolla",
    "ciruela",
    "pomelo rosado",
    "limon",
    "puerro",
    "espinaca",
    "cebolla",
    "cebolla colorada",
    "pepino",
    "mango",
    "batata boñato",
    "kiwi",
    "papa blanca",
    "papa colorada",
    "papa negra",
    "ajo",
    "remolacha",
]

let arrayDescriptions = []
let arrayPrices = []


let arrayProducts = []


for(let i=0; arrayImages.length; i++){

    let obj = {
        image: arrayImages[i],
        title: arrayTitles[i],
        //description: arrayDescriptions[i],
        //price: arrayPrices[i],
    }

    arrayProducts.push(obj);
}




class Product{

    constructor(image, title, description, price){
        this.image = image;
        this.title = title;
        this.description = description;
        this.price = price;
    }

    getTitulo(){return this.title;}
    getDescripcion(){return this.description;}
    getPrecio(){return this.price;}
    
    getInformacion() {
        return this.title+" "+ this.description+" "+ this.price;
    }
}

const productListDOM = document.getElementById('product-list');

const createTitle = (title)=>{
    const titleContainer = document.createElement('div');
    titleContainer.className = 'title';
    let p = document.createElement('p');
    p.innerHTML = title;
    titleContainer.append(p);
    return titleContainer
}

const createImgContainer = (image) =>{
    let imageContainter= document.createElement('div');
    imageContainter.className = 'image-containter';
    let img = document.createElement('img');
    img.className = 'image';
    img.src = image;
    imageContainter.append(img);
    return imageContainter
}

const createPrice = (price) =>{
    let p = document.createElement('h2');
    p.className = 'price';
    p.innerHTML = '$ ' + price;
    return p
}

const createDescription = (description) => {
    let p = document.createElement('p');
    p.className = 'description';
    p.innerHTML = description;
    return  p
}

const createArticle = (title, image, description, price) =>{
    let product = document.createElement('article');
    product.className = 'product';
    product.append(createTitle(title));
    product.append(createImgContainer(image));
    product.append(createDescription(description));
    //product.append(createPrice(price));
    return product;
}

productList.forEach(product =>{
    let productDOM = createArticle(product.title, product.image, product.description, product.price);
    productListDOM.append(productDOM)
})

/*
for(let i =0; i < productList.length; i++){
    let productDOM = createArticle(productList[i].title, productList[i].image, productList[i].description, productList[i].price);
    productListDOM.append(productDOM)
}
    */



    /* USANDO DOM VOY CREANDO LOS ELEMNTOS QUE NECESITO Y LOS AGREGO AL BODY DE HTML*/
    /*
    let divProducts = document.createElement('div');
        divProducts.className = 'products';

        for(var i = 0; i < products.length; i++){

            let article = document.createElement('article');
                article.className = 'product';    
            
            let divTitulo = document.createElement('div');
                divTitulo.className = 'titulo';

            let h3titulo = document.createElement('h3');
                h3titulo.innerHTML = `${products[i].titulo}`;


            let containterImage = document.createElement('div');
            containterImage.className = 'containter-image';

            let imagen = document.createElement('img');
                imagen.className = 'imagen'
                imagen.src = `${products[i].URLimage}`;

            containterImage.append(imagen);

            let pDescripcion = document.createElement('p');
                pDescripcion.className = 'descripcion';
                pDescripcion.innerHTML = `${products[i].descripcion}`;  

            let h2Precio = document.createElement('h2');
                h2Precio.className = 'precio';
                h2Precio.innerHTML = `$ ${products[i].precio}`;
                
                divTitulo.appendChild(h3titulo);
                article.append(divTitulo);
                article.append(containterImage);
                article.append(pDescripcion);
                article.append(h2Precio);

                divListaProducts.append(article);
        }

    */

    /* 
    window.onload = function(){

        var contenedor = document.getElementsById('bienvenida');
        var contenedorimagen = document.getElementsById('bienvenida');

        contenedor.style.visibility = 'hidden';
        contenedor.style.opacity = '0';

        contenedorimagen.style.visibility = 'hidden';
        contenedorimagen.style.opacity = '0';

        document.getElementsById('bienvenida').style.display = 'none';
    }

    $(window).on("load", function(){
        $(".bienvenida").fadeOut("slow");
    });
     */

    /*
    let lista = []
    lista = fetch("./products.json").then(response => response.json())
    .then(lista.forEach(verdura => {

        let article = document.createElement('article');
        article.className = 'product';    
    
        let divTitulo = document.createElement('div');
            divTitulo.className = 'titulo';

        let h3titulo = document.createElement('h3');
            h3titulo.innerHTML = `${verdura[Titulo]}`;

        let imagen = document.createElement('img');
            imagen.className = 'imagen'
            imagen.src = `${verdura.URLimage}`;

        let pDescripcion = document.createElement('p');
            pDescripcion.className = 'descripcion';
            pDescripcion.innerHTML = `${verdura.descripcion}`;  

        let h2Precio = document.createElement('h2');
            h2Precio.className = 'precio';
            h2Precio.innerHTML = `$ ${verdura.precio}`;
        
        divTitulo.appendChild(h3titulo);
        article.append(divTitulo);
        article.append(imagen);
        article.append(pDescripcion);
        article.append(h2Precio);

        divListaProducts.append(article)
        document.body.append(divListaProducts);    
    }));

    */


    //let busqueda = document.getElementById('busqueda');

    /*
    const filtrar = ()=>{

        const text = busqueda.value.toLowerCase();

        for(let product of products){

            let nombre = product.titulo.toLowerCase();
            if(nombre.indexOf(texto) !== -1){

                var divListaProducts = document.getElementById('lista-products');
        divListaProducts.innerHTML = ""
        */

        /* USANDO DOM VOY CREANDO LOS ELEMNTOS QUE NECESITO Y LOS AGREGO AL BODY DE HTML*/
        /*
        let divProducts = document.createElement('div');
        divProducts.className = 'products';

        divListaProducts.append(divProducts);

        for(var i = 0; i < list.length; i++){

            let article = document.createElement('article');
                article.className = 'product';    
            
            let divTitulo = document.createElement('div');
                divTitulo.className = 'titulo';

            let h3titulo = document.createElement('h3');
                h3titulo.innerHTML = `${products[i].titulo}`;

            let imagen = document.createElement('img');
                imagen.className = 'imagen'
                imagen.src = `${products[i].URLimage}`;

            let pDescripcion = document.createElement('p');
                pDescripcion.className = 'descripcion';
                pDescripcion.innerHTML = `${products[i].descripcion}`;  

            let h2Precio = document.createElement('h2');
                h2Precio.className = 'precio';
                h2Precio.innerHTML = `$ ${products[i].precio}`;
                
                divTitulo.appendChild(h3titulo);
                article.append(divTitulo);
                article.append(imagen);
                article.append(pDescripcion);
                article.append(h2Precio);
                //article.append(boton);
                divProducts.append(article);

                }
            }
        }
    }
        */

    /*
    busqueda.addEventListener("keyup", function(){

        //console.log("hola", products[1].titulo)

        buscar = busqueda.value.toLowerCase();

        console.log("buscar", buscar)


        let list = products.filter(item =>{
            
            itemName = item.titulo.toLowerCase();
            
            console.log("item => ", itemName)
            
            
            console.log("match ===> ", itemName.match(buscar))
        })

        console.log(list)
    */
        
      //  var divListaProducts = document.getElementById('lista-products');
        //divListaProducts.innerHTML = ""

        /* USANDO DOM VOY CREANDO LOS ELEMNTOS QUE NECESITO Y LOS AGREGO AL BODY DE HTML*/
      /*
        let divProducts = document.createElement('div');
        divProducts.className = 'products';

        divListaProducts.append(divProducts);

        for(var i = 0; i < list.length; i++){

            let article = document.createElement('article');
                article.className = 'product';    
            
            let divTitulo = document.createElement('div');
                divTitulo.className = 'titulo';

            let h3titulo = document.createElement('h3');
                h3titulo.innerHTML = `${products[i].titulo}`;

            let imagen = document.createElement('img');
                imagen.className = 'imagen'
                imagen.src = `${products[i].URLimage}`;

            let pDescripcion = document.createElement('p');
                pDescripcion.className = 'descripcion';
                pDescripcion.innerHTML = `${products[i].descripcion}`;  

            let h2Precio = document.createElement('h2');
                h2Precio.className = 'precio';
                h2Precio.innerHTML = `$ ${products[i].precio}`;
                
                divTitulo.appendChild(h3titulo);
                article.append(divTitulo);
                article.append(imagen);
                article.append(pDescripcion);
                article.append(h2Precio);
                //article.append(boton);
                divProducts.append(article);
        }
    })
    */

    /* 
    import { Product } from "./Models/Product";

    product = new Product();
    product.test= "hola";
    console.log(product.test);
    */
