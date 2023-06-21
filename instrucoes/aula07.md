# Aula 07 Página Sobre

## Página Sobre

1. Dentro da pasta `Sobre` crie o arquivo `Sobre.module.css`
2. Dentro da pasta `Sobre` crie a pasta `images`
3. Copie os arquivos de imagem para dentro dessa pasta.
4. Abrir o arquivo `index.jsx`
5. Faça o seguinte código:

~~~javascript

import styles from './Sobre.module.css'
import avatar from './images/avatar.png'
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import react from './images/icon-react.svg'
import node from './images/icon-node.svg'
import sql from './images/icon-sql.svg'

function Sobre() {
    return (
        <section className={styles.sobre}>
            
            <div className={styles.bio}>
                <img src={avatar} alt="Avatar" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>Edson Maia</span> <br />
                    <strong>Dev Full Stack</strong> </p>

                    <p>Trabalho com desenvolvimento Web desde 2000.</p>

                    <p>Sou apaixonado por transformar ideias em realidade digital.</p>

                    <p>Especializado em criação de aplicações dinâmicas e intuitivas, <br />
                    com foco na experiência do usuário.</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do html" />
                    <img src={css} alt="Ícone do css" />
                    <img src={js} alt="Ícone do js" />
                    <img src={react} alt="Ícone do react" />
                    <img src={node} alt="Ícone do node" />
                    <img src={sql} alt="Ícone do sql" />
                </div>
            </div>

        </section>
    )
}

export default Sobre


~~~

6. Salve as alterações.

## CSS da Página Sobre

1. Abra o arquivo Sobre.module.css
2. Faça o seguinte código:

~~~css

.sobre {
    width: 100%;
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.bio {
    display: flex;
    align-items: center;
    gap: 3rem;
    margin-bottom: 1.5rem;
}

.bio span {
    color: var(--red);
    font-weight: bold;
}

.bio strong {
    color: var(--secondary);
    font-weight: bold;
}

.textos h2, p {
    margin-bottom: 1rem;
}

.techs {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.icones {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.icones img {
    height: 50px;
}

~~~

3. Salve as alterações e veja o resultado no browser.
