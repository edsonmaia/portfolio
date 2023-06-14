# Aula 05 Ícones no React JS, React Icons e criar página Contatos [18:50]

## Instalar o react-icons

1. Abra um novo terminal e digite o seguinte comando:

`npm install react-icons --save`

## Ícones em projetos React JS

1. Acesse o repositório de ícones no seguinte endereço

https://react-icons.github.io/react-icons/

2. Escolha os ícones que irá utilizar. Com base neles você irá fazer os imports

3. Abra o arquivo onde deseja usar os ícones.

4. Faça os imports deles.


## Usar ícones na página Contatos

1. Abra o arquivo `index.jsx` de `Contatos`

2. Faça os seguintes imports:
~~~javascript
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'

~~~

3. Crie o arquivo `Contatos.module.css`

4. Organize o seu arquivo para que fique da seguinte forma:

~~~javascript
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'
import styles from './Contatos.module.css'
import { BsGithub, BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'


function Contatos() {
    return (
        <>
            <Header />
            <Container>
                <section className={styles.contatos}>
                    <h2>Contatos</h2>

                    <h3>Entre em contato</h3>
                    <p>Para que possamos conversar mais sobre</p>

                    <div className={styles.icones}>
                        
                        <a href='mailto:edsonmaiap@gmail.com' target='_blank' rel='noopener noreferrer'>
                            <GoMail className={styles.icone} />
                        </a>

                        <a href='https://' target='_blank' rel='noopener noreferrer'>
                            <BsInstagram className={styles.icone} />
                        </a>

                        <a href='' target='_blank' rel='noopener noreferrer'>
                            <BsYoutube className={styles.icone} />
                        </a>

                        <a href='' target='_blank' rel='noopener noreferrer'>
                            <BsGithub className={styles.icone} />
                        </a>

                        <a href='' target='_blank' rel='noopener noreferrer'>
                            <BsLinkedin className={styles.icone} />
                        </a>

                    </div>

                </section>
            </Container>
            <Footer />
        </>
    )
}

export default Contatos

~~~

## CSS da página Contatos

1. Abra o arquivo `Contatos.module.css`
2. Faça o seguinte código:

~~~css
.contatos {
    width: 90%;
    height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
}

.icones {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding-block: 1rem;
}

.icone {
    font-size: 3rem;
    color: var(--red);
}

~~~

3. Salve as alterações e teste no browser.
