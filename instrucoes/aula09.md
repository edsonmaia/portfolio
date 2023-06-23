# Aula 09 Consumir API do Github + Página Projetos

## Página de Projetos com dados do Github

1. Dentro de `pages`, na pasta `Projetos` crie o arquivo `Projetos.module.css`
2. Faça o seguinte código css:

~~~css
.projetos h2 {
    text-align: center;
}

.lista {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin-block: 1rem;
}

~~~

3. Abra o arquivo `index.jsx` de `Projetos` e faça o seguinte código:

> Crie um useState e um useEffect dentro da função Projetos, antes do return
> Faça os imports necessários
> Dentro do return faça os ajustes para exibir os Cards condicionamente

~~~javascript
import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import styles from './Projetos.module.css'

function Projetos() {

    const [ repositories, setRepositories ] = useState([])

    useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch('https://api.github.com/users/edsonmaia/repos')
            const data = await response.json()
            setRepositories(data)
        }
        buscarRepositorios()
    }, [])

    return (
        <section className={styles.projetos}>
            <h2>Projetos</h2>
            {
                repositories.length > 0 ? (
                    <section className={styles.lista}>
                        {
                            repositories.map((repo) => (
                                <Card
                                    key={repo.id}
                                    name={repo.name}
                                    description={repo.description}
                                    html_url={repo.html_url}
                                />
                            ))
                        }
                    </section>
                ) : (
                    <p>Carregando repositórios...</p>
                )
            }
        </section>
    )
}

export default Projetos

~~~

4. Salve as alterações.

> Não se esqueça de fazer os imports do useState e useEffect do react.
> A section lista só irá aparecer e gerar Card se tivermos algum repositório.


## Refatorar o Card para exibir props

1. Abra o arquivo `index.jsx` de `Card`
2. Faça o seguinte ajuste no código:

> Ajustes para o componente Card receber props
> Usar as props para preencher os Cards

~~~javascript
import styles from './Card.module.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
function Card({ name, description, html_url }) {
    return (
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaJs />
                    <FaReact />
                </div>
                <Link to={html_url} className={styles.botao}>
                    <BsArrowRight />
                </Link>
            </div>
        </section>
    )
}

export default Card

~~~

3. Salve as alterações e veja o resultado no browser.

> Para links externos é mais recomendável o uso da tag a com href={html_url}, target='_blank' e rel='noopener noreferrer'
> O trecho do código do Card deveria ficar assim:

~~~javascript
    <a
        href={html_url}
        className={styles.botao}
        target="_blank"
        rel="noopener noreferrer">
        <BsArrowRight />
    </a>
~~~

## E os ícones das linguagens?

Na requisição que fazemos para a API do Github temos acesso às linguagens que foram usadas em cada projeto, por meio da url:

> https://api.github.com/repos/edsonmaia/{nome_do_repositorio}/languages

Se criarmos uma constante e armazenar as chaves delas podemos ter acesso aos nomes das linguagens:

`const languages = Object.keys(data)`

Mas, precisamos criar um componente que pegue essa listagem e crie o ícones correspondente.
Isto fica como um desafio para as próximas aulas.

Salve Devs, até a próxima!
