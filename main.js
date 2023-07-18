// Desafio Entregable BackEnd Claudio Coronel 

class ProductManager {
    constructor() {
        this.products = [];
        this.nextProductId = 1;
    }

    // Agregando nuevo producto
    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.error("Todos los campos son obligatorios.");
            return;
        }

        // Validar que no se repita el campo "code"
        const existingProduct = this.products.find(product => product.code === code);
        if (existingProduct) {
            console.error("Ya existe un producto con el mismo código.");
            return;
        }

        const newProduct = {
            id: this.nextProductId,
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock,
        };
        this.products.push(newProduct);
        this.nextProductId++;
    }

    // Obteniendo todos los productos
    getProducts() {
        return this.products;
    }

    // Buscando un producto por su id
    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            console.error("Product not found.");
        }
        return product;
    }
}

const productManager = new ProductManager();

productManager.addProduct("AMD 6700XT", "Placa de Video Dedicada", 300, "https://www.asrock.com/Graphics-Card/photo/Radeon%20RX%206700%20XT%20Challenger%20D%2012GB(M1).png", "code001", 7);
productManager.addProduct("AMD Ryzen 5", "Microprocesador AMD", 250, "https://http2.mlstatic.com/D_NQ_NP_640131-MLA43492851343_092020-O.webp", "code002", 15);

console.log(productManager.getProducts());

const productById = productManager.getProductById(1);
console.log(productById);

const productByIdNotFound = productManager.getProductById(3); // Arrojar mensaje de "Product not found"
