import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/home.module.css'
import utils from '../styles/utils.module.css'
import Layout from '../components/layout'
import ShopHeader from '../components/shopHeader'
import { getAllCategoryData } from '../lib/shop/category'

export function getStaticProps() {
	const categories = getAllCategoryData()

	return { props: { categories }}
}

export default function Home({categories}) {
	return (
		<Layout>
		<ShopHeader />
		<h2 style={{textAlign: 'center'}}>Categories</h2>

		<ul className={utils.cardContainer}>
		{categories.map(category => (
			<li className={utils.card} key={category.id}>
			<Link href={`/shop/category/${category.id}`}>
				<a>
				<img className={utils.cardImg} src={category.img} alt={category.name} />
				<div className={utils.cardInfo}>
					<h3>{category.name}</h3>
					<p>{category.desc}</p>
				</div>
				</a>
			</Link>
			</li>
		))}
		</ul>
		</Layout>
	)
}