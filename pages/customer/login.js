import Layout from '../../components/layout'
import ShopHeader from '../../components/shopHeader'
import { useState } from 'react'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin(e) {
        e.preventDefault()
    
        //console.log(`email: ${email}, password: ${password}`)
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
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" onChange={handleEmailChange} />
                <label htmlFor="password">Password</label>
                <input id="password" type="password" onChange={handlePasswordChange} />

                <button type="submit">Login</button>
            </form>
        </Layout>
    )
}