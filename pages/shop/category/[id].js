import Link from 'next/link'
import Layout from '../../../components/layout'
import ShopHeader from '../../../components/shopHeader'
import utils from '../../../styles/utils.module.css'
import { getAllCategoryIds, getCategoryData } from '../../../lib/shop/category'
import { getProductsByCategory } from '../../../lib/shop/product'

export function getStaticPaths() {
  // returns a list of possible values for id
  const paths = getAllCategoryIds()

  return { paths, fallback: false }
}

export function getStaticProps({ params }) {
    const categoryData = getCategoryData(params.id)
    // fetch necessary data for the category using params.id
    categoryData.items = getProductsByCategory(params.id)

    return { props: { categoryData }}
}

export default function Category({ categoryData }) {
    return (
        <Layout>
            <ShopHeader />
            <h2>{categoryData.name}</h2>
            <ul className={utils.cardContainer}>
                {categoryData.items.map(item => (
                    <li className={utils.card} key={item.id}>
                        <Link href={`/shop/product/${item.id}`}>
                            <a>
                                <img className={utils.cardImg} src={item.img} alt={item.name} />
                                <div className={utils.cardInfo}>
                                    <h3>{item.name}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </Layout>
    )
}