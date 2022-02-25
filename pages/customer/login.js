import { Router, useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Layout from '../../components/layout'
import ShopHeader from '../../components/shopHeader'
import loginStyle from '../../styles/loginRegister.module.css'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [logged_in, setLogged_in] = useState(false)
    const router = useRouter()


    function handleLogin(e) {
        e.preventDefault()
    
        // TODO: validate credentials

        if (typeof window !== 'undefined') {
            sessionStorage.setItem('logged_in', 'yes')
            router.push('/')
        }
    }
    
    function handleEmailChange(e) {
        setEmail(e.target.value)
    }
    
    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }


    return (
        <Layout>
            <ShopHeader />
            <h2 style={{textAlign: 'center'}}>Login</h2>
            <form className={loginStyle.form} onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" onChange={handleEmailChange} />
                <label htmlFor="password">Password</label>
                <input id="password" type="password" onChange={handlePasswordChange} />

                <button type="submit">Login</button>
            </form>
        </Layout>
    )
}