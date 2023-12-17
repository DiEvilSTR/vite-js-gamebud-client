import { Navbar, Footer } from '/src/common'
import { Header } from './components'
import './style.css'

export function SignIn () {
    return (
        <div className="Signin">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Footer />
        </div>
    )
}