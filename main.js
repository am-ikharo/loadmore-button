const productContainer = document.querySelector('product-container');


async function fetchListOfProduct() {
    try {
        const response = await fetch('https://dummyjson.com/products', {method: 'GET'});
        const result = await response.json();
        console.log(result);
        
    } catch (e) {
        console.log(e);
        
    }
}



fetchListOfProduct();