import Link from 'next/link'
import Head from 'next/head'
import layout from '../styles/layout.module.css'

export default function Layout({ children, home }) {
    const siteTitle = `Mimi's Creations`

    return (
        <>
            <Head>
                <link rel="icon" href="favicon.ico" />
                <meta
                    name="description"
                    content="An e-commerce site to sell crafts."
                />
            </Head>
            <header className={layout.header}>
                <Link href="/">
                    <a><img src="/mimisLogo.png" alt={`${siteTitle} Logo`} /></a>
                </Link>

                <div className={layout.h1}>
                    <h1>{siteTitle}</h1>
                    <p>I love to create beautiful things</p>
                </div>

                <div>Nav</div>
            </header>

            <main>{children}</main>

            <footer>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>

                <h2>Shop Policies</h2>
            </footer>
        </>
    )
}