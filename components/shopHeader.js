import Link from 'next/link'
import { useEffect, useState } from 'react'
import utils from '../styles/utils.module.css'
import shopHeader from '../styles/shopHeader.module.css'

export default function ShopHeader() {
    const [logged_in, setLoggedIn] = useState()

    useEffect(() => {
        if (sessionStorage.getItem('logged_in') === 'yes') {
            setLoggedIn(true)
        }
    }, [logged_in])

    function handleLogout() {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem('logged_in', 'no')
            setLoggedIn(false)

            alert('Logout successful')
        }
    }

    return logged_in ? (
        <section className={`${shopHeader.section}`}>
             <form className={shopHeader.form}>
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

                <a onClick={handleLogout}>Logout</a>
            </div>
        </section>
    ) : (
        <section className={`${shopHeader.section}`}>
            <form className={shopHeader.form}>
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