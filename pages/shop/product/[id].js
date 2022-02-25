import Layout from '../../../components/layout'
import ShopHeader from '../../../components/shopHeader'
import { getAllProductIds, getProductData } from '../../../lib/shop/product.js'

export function getStaticPaths() {
    const paths = getAllProductIds()


    return { paths, fallback: false }
}

export function getStaticProps({ params }) {
    const productData = getProductData(params.id)

    return { props: { productData } }
}

export default function Product({ productData }) {
    return (
        <Layout>
            <ShopHeader />
            <div>
                {productData.name}
                <br />
                {productData.size}
                <br />
                {productData.price}
            </div>
        </Layout>
    )
}