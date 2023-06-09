import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <Header />
            <section className='container'>
                <div className='apresentacao'>
                <p>
                    Olá, sou <br/>
                    <span>Edson Maia</span> <br/>
                    Dev Full Stack
                </p>
                <Link to="/sobre" className='btn btn-red'>
                    Saiba mais sobre mim
                </Link>
                </div>
                <figure>
                <img className='img-home' src="/developer-red.svg" alt="Imagem de Home" />
                </figure>
            </section>
            <Footer />
        </>
    )
}

export default Home
