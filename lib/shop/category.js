const categories = [
    { id: 'girls-clothes', name: 'Girls Clothes', img: null, desc: '' },
    { id: 't-shirts', name: 'T-Shirts', img: null, desc: '' },
    { id: 'party',name: 'Party',  img: null, desc: '' },
    { id: 'yard-signs', name: 'Yard Signs', img: null, desc: '' },
    { id: 'foods', name: 'Foods', img: null, desc: '' },
    { id: 'flowers', name: 'Flowers', img: null, desc: '' },
    { id: 'custom', name: 'Custom', img: null, desc: '' },
    { id: 'digital', name: 'Digital', img: null, desc: '' },
]

export function getAllCategoryIds() {
    /*
        Returns an array that looks like this:
        [
            { params: { id: 1 }}
            { params: { id: 2 }}
        ]
    */

    return categories.map(category => {
        return { params: { id: category.id }}
    })
}

export function getCategoryData(category_id) {
    return categories.find(category => category.id === category_id)
}

export function getAllCategoryData() {
    return categories
}