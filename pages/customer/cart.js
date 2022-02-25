import Layout from '../../components/layout'
import ShopHeader from '../../components/shopHeader'
import shopHeader from '../../components/shopHeader'

const items = [
    { id: 0, name: 'Shirt', price: 1.5, img: '', variations: [], discount: 0 },
    { id: 1, name: 'Shoe', price: 1.5, img: '', variations: [], discount: 0 },
    { id: 2, name: 'Hat', price: 1.5, img: '', variations: [], discount: 0 }
]

export default function Cart() {
    

    return (
        <Layout>
            <ShopHeader />
            {items.map(item => (
                <div>
                    <h3>{item.name}</h3>
                    <p>Price: ${item.price}</p>
                    <ul>
                        {item.variations.map(variation => (
                            <li>{variation.name} - {variation.price}</li>
                        ))}
                    </ul>
                    <p>Discount: {item.discount * 100}%</p>
                </div>
            ))}
        </Layout>
    )
}