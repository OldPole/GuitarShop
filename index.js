function render() {
    const productsStore = localStorageUtil.getProducts();
    
    headerPage.render(productsStore.length);
    productsPage.render();
}

spinnerPage.render();

let CATALOG = [];

//  https://www.myjsons.com/v/23754068
fetch('server/catalog.json')
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        spinnerPage.handleClear();
        render();
    })
    .catch(error => {
        console.log(error);
    });