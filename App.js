/*import { Product } from "./Models/Product.js";*/

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

let product1 = new Product("https://www.suat.com.uy/upcms/thumbs/648x365/novedades/imagen/955_big.jpg","Banana", "banana ecuador", 60);
let product2 = new Product("https://img.huffingtonpost.com/asset/5ef9ffab250000a502c28ec2.jpeg?ops=scalefit_720_noupscale&format=webp", "Manzana", "manzana deliciosa", 90);
let product3 = new Product("https://static9.depositphotos.com/1642482/1148/i/600/depositphotos_11489464-stock-photo-pears.jpg", "Pera", "pera especial", 100);
let product4 = new Product("https://cdn1.frutapasion.es/wp-content/uploads/2019/11/mandarina-0.jpg","Mandarina","mandarina 100% natural", 120);
let product5 = new Product("https://static1.abc.es/media/bienestar/2020/11/06/naranja-kOMF--620x349@abc.jpg", "Naranja","naranja para exprimido", 150);
let product6 = new Product("https://www.gastronomiavasca.net/uploads/image/file/5702/berenjena1.jpg", "Berenjena","berenjena de temporada", 94);
let product7 = new Product("https://i.blogs.es/f466ab/1366_2000-2-/1366_2000.jpg", "Apio","apio de huerta", 40);
let product8 = new Product("https://encolombia.com/wp-content/uploads/2021/11/Tomate-fruto.jpg", "Tomate","tomate para ensalada", 250);
let product9 = new Product("https://fundaciondelcorazon.com/images/stories/corazon-facil/impulso-vital/uvas.jpg", "Uva","uva especial", 300);
let product10 = new Product("https://imagenes.t13.cl/images/original/2018/08/1535055213-frutillas-istock.jpg", "Frutilla","frutilla de campo", 350);
let product11 = new Product("https://biomarket.com.ar/wp-content/uploads/2019/07/2001390010004.jpg", "Zapallo","zapallo calabaza", 100);
let product12 = new Product("https://elpoderdelconsumidor.org/wp-content/uploads/2021/08/sandia.jpg", "Sandia","sandia especial", 50);
let product13 = new Product("https://soycomocomo.es/media/2019/03/zanahorias.jpg", "Zanahoria","zanahoria espacial para ensalada", 60);
let product14 = new Product("https://static3.abc.es/media/salud/2019/05/17/brocoli-kOoH--620x349@abc.jpg", "Brocoli","brocoli de huerta", 45);
let product15 = new Product("https://st.depositphotos.com/1020804/1561/i/450/depositphotos_15616789-stock-photo-parsley.jpg", "Peregil","peregil de huerta", 50);
let product16 = new Product("https://geant.vteximg.com.br/arquivos/ids/252499-1000-1000/410024.jpg?v=637284323379870000", "Cherry","tomates cherry", 500);
let product17 = new Product("https://static1.abc.es/media/bienestar/2020/09/01/lechuga-k7y--1200x630@abc.jpg", "Lechuga","legucha criolla", 70);
let product18 = new Product("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS21OuzKJl3tjFNukpoKKbmkTO9iCNwd6WLg&usqp=CAU", "Ciruela","ciruela de estacion", 40);
let product19 = new Product("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREMekNZrVqLzw-POqGIg7jWu_TYt4BTecjSw&usqp=CAU", "Pomelo","pomelo dulce", 80);
let product20 = new Product("https://sc2.elpais.com.uy/files/article_default_content/uploads/2017/09/11/59b612d1476cf.jpeg", "Limon","limon especial", 90);
let product21 = new Product("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GS14uZuNVbgpuU9tFew8XhI4UOzPLsjLzA&usqp=CAU", "Puerro","puerro de huerta", 15);
let product22 = new Product("http://frutosnaturales.com.ar/wp-content/uploads/2020/04/Espinaca-1.jpg", "Espinaca","espinaca natural", 80);
let product23 = new Product("https://www.lavanguardia.com/files/article_main_microformat/uploads/2018/07/13/5e99856f0b685.jpeg", "Cebolla","cebolla de calidad", 120);
let product24 = new Product("https://www.laprensagrafica.com/__export/1508186157976/sites/prensagrafica/img/2017/10/16/pepinos_2.jpg_1902800913.jpg", "Pepino","pepino de oferta", 100 );
let product25 = new Product("https://www.clikisalud.net/wp-content/uploads/2020/03/maneras-consumo-mango-protege-salud.jpg", "Mango","mango natural", 140 );
let product26 = new Product("https://www.cucinare.tv/wp-content/uploads/2019/04/Batata.jpg", "Batata","batata de estacion", 90);
let product27 = new Product("https://static1.abc.es/media/familia/2018/04/03/kiwi-kC0--620x349@abc.jpg", "Kiwi","kiwi especial", 120);
let product28 = new Product("https://vivanda.vtexassets.com/arquivos/ids/224584/20171835.jpg?v=637417663435230000", "Papa","papa blanca", 80);
let product29 = new Product("https://www.gob.mx/cms/uploads/article/main_image/45428/ajo.jpg","Ajo","ajo de oferta", 110);
let product30 = new Product("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMw182YBiJHbxCqcBuLQ3Q8I2JesUaHB8XXQ&usqp=CAU", "Remolacha","remolacha de oferta", 70);


let productList = [];
productList.push(product1);
productList.push(product2);
productList.push(product3);
productList.push(product4);
productList.push(product5);
productList.push(product6);
productList.push(product7);
productList.push(product8);
productList.push(product9);
productList.push(product10);
productList.push(product11);
productList.push(product12);
productList.push(product13);
productList.push(product14);
productList.push(product15);
productList.push(product16);
productList.push(product17);
productList.push(product18);
productList.push(product19);
productList.push(product20);
productList.push(product21);
productList.push(product22);
productList.push(product23);
productList.push(product24);
productList.push(product25);
productList.push(product26);
productList.push(product27);
productList.push(product28);
productList.push(product29);
productList.push(product30);

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
