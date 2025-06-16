const productContainer = document.querySelector('product-container');


async function fetchListOfProduct() {
    try {
        const response = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,pri');
    } catch (e) {
        console.log(e);
        
    }
}



fetchListOfProduct();