import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/layout'
import ShopHeader from '../../components/shopHeader'
import registerStyle from '../../styles/loginRegister.module.css'
import utilsStyle from '../../styles/utils.module.css'

export default function Register() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const router = useRouter()

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    function handleAddressChange(e) {
        setAddress(e.target.value)
    }

    function handleRegister(e) {
        e.preventDefault()

        // TODO - api request to add new customer

        if (typeof window !== 'undefined') {
            sessionStorage.setItem('logged_in', 'yes')
            router.push('/')
        }
    }

    return (
        <Layout>
            <ShopHeader />
            <h2 style={{textAlign: 'center'}}>Create an Account</h2>
            <form className={registerStyle.form} onSubmit={handleRegister}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" onChange={handleNameChange} />
                <label htmlFor="email">Email</label>
                <input id="email" type="email" onChange={handleEmailChange} />
                <label htmlFor="password">Password</label>
                <input id="password" type="password" onChange={handlePasswordChange} />
                <label htmlFor="address">Address</label>
                <input id="address" type="address" onChange={handleAddressChange} />
                <button typ="submit">Register</button>
            </form>
        </Layout>
    )
}