const productContainer = document.querySelector("product-container");

async function fetchListOfProduct() {
  try {
    const response = await fetch("https://dummyjson.com/products", {
      method: "GET",
    });
    const result = await response.json();
    if (result && result.products) displayProducts(result.products);
  } catch (e) {
    console.log(e);
  };
};

function displayProducts(productList){

    productList.forEach(productItem => {
        const productItemWrapper = document.createElement('div');
        const productTitle = document.createElement('p');
        const productThumnail = document.createElement('img');
        const productDescription = document.createElement('p');
        const productPrice = document.createElement('p')

        
    });
}

fetchListOfProduct();
