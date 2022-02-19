import Link from 'next/link'
import utils from '../styles/utils.module.css'
import shopHeader from '../styles/shopHeader.module.css'

export default function ShopHeader({logged_in}) {
    return logged_in ? (
        <section className={`${utils.flex} ${shopHeader.section}`}>
             <form class={shopHeader.form}>
                <input placeholder="Search for products" type="text" />
                <button onClick={handleSearch}>Search</button>
            </form>
            <div>
                <Link href="/customer/cart" >
                    <a className={shopHeader.link}>Cart</a>
                </Link>

                <Link href="/customer/orders" >
                    <a className={shopHeader.link}>Orders</a>
                </Link>
            </div>
        </section>
    ) : (
        <section className={`${utils.flex} ${shopHeader.section}`}>
            <form class={shopHeader.form}>
                <input placeholder="Search for products" type="text" />
                <button onClick={handleSearch}>Search</button>
            </form>
            <div>
                <Link href="/customer/login" >
                    <a className={shopHeader.link}>Login</a>
                </Link>

                <Link href="/customer/register">
                    <a className={shopHeader.link}>Create an Account</a>
                </Link>
            </div>
        </section>
    )
}

function handleSearch(e) {
    e.preventDefault()
}