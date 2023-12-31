class Product {
    title = 'DEFAULT';
    imageUrl;    
    description;
    price;

    constructor(title, image, desc, price){
        this.title = title;
        this.imageUrl = image;
        this.description = desc;
        this.price = price;
    }
}

class ProductList {
    products = [
        new Product(
            'A Pillow', 
            'http://tiny.cc/en48vz', 
            'A Soft Pillow', 
            19.99
        ),
        new Product(
            'A Rug', 
            'http://tiny.cc/co48vz',
            'We Buid To Your Design',
            89.99
        )
    ];
    constructor() {}
    render() {
        const renderHook = document.getElementById('app');
        const prodList = document.createElement('ul');
        prodList.className = 'product-list';
        for (const prod of this.products) {
            const prodEl = document.createElement('li');
            prodEl.className = 'product-item';
            prodEl.innerHTML = `
                <div>
                    <img src='${prod.imageUrl}' alt='${prod.description}'>
                    <div class='product-item__content'>
                        <h2>${prod.title}</h2>
                        <h3>\$${prod.price}</h3>
                        <p>${prod.description}</p>
                        <button>Add To Cart</button>
                    </div>
                </div>
            `;
            prodList.append(prodEl);
        }
        renderHook.append(prodList);
    }
}


const productList = new ProductList
productList.render()