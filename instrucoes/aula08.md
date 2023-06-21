# Aula 08 Componente Card de Projetos

## Criar Componente Card

1. Dentro da pasta `components` crie a pasta Card
2. Dentro de `Card` crie os arquivos `index.jsx` e `Card.module.css`
3. Abra o arquivo `index.jsx` de Card
4. Faça o seguinte código:

~~~javascript

import styles from './Card.module.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'

function Card() {
    return (
        <section className={styles.card}>
            <h3>Título do projeto</h3>
            <p>Texto descritivo do projeto.</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaJs />
                    <FaReact />
                </div>
                <button className={styles.botao}>
                    <BsArrowRight />
                </button>
            </div>
        </section>
    )
}

export default Card

~~~

5. Salve as alterações.

## Como usar o Card na Página Projetos

1. Abrir o arquivo `index.jsx`
2. Abaixo do título h3 adicione o componente Card:

~~~javascript

import Card from '../../components/Card'

function Projetos() {
    return (
        <>
            <h2>Projetos</h2>
            <Card />
            <Card />
            <Card />
        </>
    )
}

export default Projetos

~~~
3. Não se esqueça de fazer o import do componente Card
4. Salve as alterações e veja o resultado no browser.


## CSS de Card dos Projetos

1. Abra o arquivo Card.module.css
2. Faça o seguinte código:

~~~css

.card {
    width: 300px;
    height: 300px;
    background-color: var(--soft-white);
    color: var(--gray);
    border-radius: 8px;
    box-shadow: 5px 5px 10px #22222270;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.card h3 {
    color: var(--primary);
}

.card p {
    color: #555;
}

.card_footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.card_icones {
    display: flex;
    gap: 10px;
    color: var(--red);
    font-size: 1.5rem;
}

.botao {
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 8px;
    background-color: var(--primary);
    color: var(--white);
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.botao:hover {
    background-color: var(--red);
    transition: all .5s;
}

~~~

Salve as alterações e veja o resultado no browser.

> Nas próximas aulas vamos organizar a página Projetos para exibir melhor a lista de Card de projetos.

Salve Devs, até a próxima aula
