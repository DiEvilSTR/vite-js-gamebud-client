import { Navbar, Footer } from '/src/common'
import { Header } from './components'
import './style.css'

const Main = () => {
    return (
        <div className="Main">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Footer />
        </div>
    )
}

export default Main