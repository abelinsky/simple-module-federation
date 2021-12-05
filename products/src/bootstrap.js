import faker from 'faker';


const mount = (el) => {
    let products = '';

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }
    
    el.innerHTML = products;
};

// Context #1
// We are runnung in dev in isolations
// We are using index.html with '#dev-products'
// Immediately render our app
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');
    if (el) {
        // We are probably running in isolation
        mount(el);
    }
}

// Context #2
// We are running in dev or prod through container app
// No guaratee that index.html with '#dev-products' exist
// We do not try to immediately render the app
export { mount };