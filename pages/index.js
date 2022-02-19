import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/home.module.css'
import utils from '../styles/utils.module.css'
import Layout from '../components/layout'
import ShopHeader from '../components/shopHeader'

const logged_in = false
const categories = [
  { id: 0, name: 'Girls Clothes', link: 'girls-clothes', img: null, desc: '' },
  { id: 1, name: 'T-Shirts', link: 't-shirts', img: null, desc: '' },
  { id: 2, name: 'Party', link: 'party', img: null, desc: '' },
  { id: 3, name: 'Yard Signs', link: 'yard-signs', img: null, desc: '' },
  { id: 4, name: 'Foods', img: null, link: 'foods', desc: '' },
  { id: 5, name: 'Flowers', link: 'flowers', img: null, desc: '' },
  { id: 6, name: 'Custom', link: 'custom', img: null, desc: '' },
  { id: 7, name: 'Digital', link: 'digital', img: null, desc: '' },
]

export default function Home() {
  console.log(categories)
  return (
    <Layout>
      <ShopHeader logged_in={logged_in} />

      <h2 style={{textAlign: 'center'}}>Categories</h2>

      <section className={utils.cardContainer}>
      {categories.map(category => (
        <div className={utils.card} key={category.id}>
          <img src={category.img} alt={category.name} />
          <div className={utils.cardInfo}>
            <h3>{category.name}</h3>
            <p>{category.desc}</p>
          </div>
        </div>
      ))}
      
      </section>
    </Layout>
  )
}