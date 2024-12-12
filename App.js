let arrayProductsJSON = [
    {
        "image": "./images/products/banana.avif",
        "title": "Banana",
        "description": "banana ecuador",
        "price": 60
    },
    {
        "image": "./images/products/manzana.jpg",
        "title": "Manzana",
        "description": "manzana deliciosa",
        "price": 90
    },
    {
        "image": "./images/products/manzana_verde.jpg",
        "title": "Manzana verde",
        "description": "manzana verde deliciosa",
        "price": 90
    },
    {
        "image": "./images/products/pera.jpg",
        "title": "Pera",
        "description": "pera especial",
        "price": 100
    },
    {
        "image": "./images/products/mandarina.webp",
        "title": "Mandarina",
        "description": "mandarina 100% natural",
        "price": 120
    },
    {
        "image": "./images/products/naranja.jfif",
        "title": "Naranja",
        "description": "naranja para exprimido",
        "price": 150
    },
    {
        "image": "./images/products/berenjena.jpg",
        "title": "Berenjena",
        "description": "berenjena de temporada",
        "price": 94
    },
    {
        "image": "./images/products/apio.jpg",
        "title": "Apio",
        "description": "apio de huerta",
        "price": 40
    },
    {
        "image": "./images/products/tomate.jpg",
        "title": "Tomate",
        "description": "tomate para ensalada",
        "price": 250
    },
    {
        "image": "./images/products/tomate_perita.webp",
        "title": "Tomate perita",
        "description": "tomate perita para ensalada",
        "price": 250
    },
    {
        "image": "./images/products/tomates_cherry.jpg",
        "title": "Tomate cherry",
        "description": "tomates cherry",
        "price": 500
    },
    {
        "image": "./images/products/uva.jpg",
        "title": "Uva",
        "description": "uva especial",
        "price": 300
    },
    {
        "image": "./images/products/frutilla.jpg",
        "title": "Frutilla",
        "description": "frutilla de campo",
        "price": 350
    },
    {
        "image": "./images/products/zapallo.jpg",
        "title": "Zapallo",
        "description": "zapallo calabaza",
        "price": 100
    },
    {
        "image": "./images/products/sandia.jpg",
        "title": "Sandia",
        "description": "sandia especial",
        "price": 50
    },
    {
        "image": "./images/products/zanahoria.jpg",
        "title": "Zanahoria",
        "description": "zanahoria espacial para ensalada",
        "price": 60
    },
    {
        "image": "./images/products/brocoli.webp",
        "title": "Brocoli",
        "description": "brocoli de huerta",
        "price": 45
    },
    {
        "image": "./images/products/peregil.jpg",
        "title": "Peregil",
        "description": "peregil de huerta",
        "price": 50
    },
    
    {
        "image": "./images/products/legucha_criolla.jpg",
        "title": "Lechuga",
        "description": "legucha criolla",
        "price": 70
    },
    {
        "image": "./images/products/ciruela.jpg",
        "title": "Ciruela",
        "description": "ciruela de estacion",
        "price": 40
    },
    {
        "image": "./images/products/pomelo_rosado.jfif",
        "title": "Pomelo",
        "description": "pomelo dulce",
        "price": 80
    },
    {
        "image": "./images/products/limon.jpg",
        "title": "Limon",
        "description": "limon especial",
        "price": 90
    },
    {
        "image": "./images/products/puerro.avif",
        "title": "Puerro",
        "description": "puerro de huerta",
        "price": 15
    },
    {
        "image": "./images/products/espinaca.jpg",
        "title": "Espinaca",
        "description": "espinaca natural",
        "price": 80
    },
    {
        "image": "./images/products/cebolla.jpg",
        "title": "Cebolla",
        "description": "cebolla de calidad",
        "price": 120
    },
    {
        "image": "./images/products/cebolla_colorada.webp",
        "title": "Cebolla colorada",
        "description": "cebolla de calidad",
        "price": 120
    },
    {
        "image": "./images/products/pepino.jpg",
        "title": "Pepino",
        "description": "pepino de oferta",
        "price": 100
    },
    {
        "image": "./images/products/mango.jpg",
        "title": "Mango",
        "description": "mango natural",
        "price": 140
    },
    {
        "image": "./images/products/batata_boñato.jpg",
        "title": "Batata",
        "description": "batata de estacion",
        "price": 90
    },
    {
        "image": "./images/products/kiwi.avif",
        "title": "Kiwi",
        "description": "kiwi especial",
        "price": 120
    },
    {
        "image": "./images/products/papa_blanca.jpg",
        "title": "Papa blanca",
        "description": "papa blanca",
        "price": 80
    },
    {
        "image": "./images/products/papa_colorada.jfif",
        "title": "Papa colorada",
        "description": "papa colorada",
        "price": 80
    },
    {
        "image": "./images/products/papa_negra.jpeg",
        "title": "Papa negra",
        "description": "papa negra",
        "price": 80
    },
    {
        "image": "./images/products/ajo.webp",
        "title": "Ajo",
        "description": "ajo de oferta",
        "price": 110
    },
    {
        "image": "./images/products/remolacha.jpg",
        "title": "Remolacha",
        "description": "remolacha de oferta",
        "price": 70
    }
]

arrayProductsJSON.sort((a, b) => {
        return a.title - b.title
    }
)

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

arrayProductsJSON.forEach(product =>{
    let productDOM = createArticle(product.title, product.image, product.description, product.price);
    productListDOM.append(productDOM)
})


const client = document.getElementById('nameClient');
const mesagge = `Hola! mi nombre es ${client}, quisiera saber el precio total de este pedido `;