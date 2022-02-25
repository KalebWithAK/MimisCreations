const products = [
    { id: 'dress', name: 'Dress', size: 'small', price: 5, img: null, desc: 'a pretty pink dress', category_id: 'girls-clothes' },
    { id: 't-shirt', name: 'Shirt', size: 'medium', price: 10, img: null, desc: '...', category_id: 'girls-clothes'}
]

export function getAllProductIds() {
    return products.map(product => {
        return { params: { id: product.id }}
    })
}

export function getProductData(id) {
    return products.find(product => product.id === id)
}

export function getProductsByCategory(category_id) {
    //if (categories.find(category => category.id === category_id)) {
        return products.filter(product => product.category_id == category_id)
    //}
    //return false
}

export function getAllProducts() {
    return products
}