# Aula 10 Ajustes no projeto + Deploy do Projeto React na Vercel

> Primeiro, vamos ajustar para nossa listagem de projetos exibir mais de 30 repositórios da api do github

## index.jsx da page Projetos

1. Abra o arquivo `index.jsx` da page `Projetos`
2. Dentro do useEffect na linha que fazemos o fetch, adicione o seguinte no final `?page=1&per_page=50`

~~~javascript
const response = await fetch('https://api.github.com/users/edsonmaia/repos?page=1&per_page=50')

~~~

3. Adicione os query params `page` e `per_page`
4. Salve as alterações e veja o resultado no browser

> No caso teremos uma página com até 50 resultados por página.

## index.jsx do componente Card

> Agora, para resolver um problema de UI/UX que temos porque usamos o componente Link ao invés de uma tag a para acessar links externos.

1. Abra o arquivo `index.jsx` do componente `Card`
2. Mude o componente `Link` pela tag `a`
3. Adicione os atributos `href`, `target` e `rel`
4. Apague o import do componente `Link` do `react-router-dom`

~~~javascript

import styles from './Card.module.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'

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
                <a href={html_url} target="_blank" rel="nopenner noreferrer" className={styles.botao}>
                    <BsArrowRight />
                </a>
            </div>
        </section>
    )
}

export default Card

~~~

5. Salve as alterações e tester no browser

## Deploy da aplicação na Vercel

1. O seu projeto precisa estar em um repositório público, preferencialmente no Github
2. Acesse o site da vercel

https://vercel.com

3. Se não tiver uma conta, clique no botão `Sign Up` e faça o login com a sua conta do github ou clique no botão Start Deploy.
4. Eu, cliquei no botão `Sign in` para fazer o login.
5. Em seguida no botão `Continue with GitHub`
6. No Dashboard eu cliquei no botão `Add New...` e na opção `Project`


### Import GitRepository

1. Clique na opção Add Github Account
2. Se aparecer tela para login faça, e tela de permissão pode escolher `All repositories` e Salve
3. Senão, clique no link Adjust GitHub App Permissions
4. Na área de Permissions, em Repository access escolha a opção desejada:
4.1. All repositoryes (todos repositórios)
4.2. Only select repositories (somente repositórios selecionados)
4.2.1 Depois em Select repositories, escolha o repositório `portfolio2023`
5. Confirme no botão Save
6. Ainda na tela de Import Git Repository, agora clique no botão `Import` do projeto `portfolio2023`
7. Informe o project name, ex.: portfolio2023. Será o nome da sua url, use minúsculas, sem espaços, sem acento e sem ç.
8. Framework Preset, a Vercel já escolhe.
9. Clique no botão `Deploy`. Em poucos minutos sua aplicação estará no ar.
10. Você será redirecionado para uma página de Congratulations! Clique no botão `Continue to dashboard`.

> Para abrir o seu projeto para clicar no link de Domain 

Parabéns, nossa aplicação está no ar.

## Observações

1. Cada alteração que você ficar no seu repositório, dentro de alguns minutos será atualizada na Vercel e na sua aplicação.
2. O deploy é feito com base no que está na branche main.
3. Iremos fazer mais alguns ajustes extras nesse projeto para explorarmos mais do React JS.

Salve Devs, até a próxima!
