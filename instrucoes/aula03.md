# Aula 03 Criar Rotas, Páginas e Links no React JS [28:00]

> O nosso projeto terá o seguinte modelo do figma
> https://www.figma.com/file/qJ2Z3P3U7899IgAiovag65/portfolio?type=design&node-id=1-35&t=dbRx0ccLmY7xrepP-0

## Criar página Home

1. Abra o arquivo `App.jsx`
2. Selecione da linha 8 até a 26, toda a área do fragment, recorte esse código.
3. Na linha 2 digite apenas `<h1>Home</h1>`
4. Apague as duas linhas de import do Header e Footer
5. Salve o arquivo.
6. Dentro da pasta pages crie a pasta `Home`
7. Dentro de `Home` crie os arquivos `index.jsx` e `Home.module.css`
8. Abra o arquivo index.jsx
9. Faça o seguinte código:

> Observação, dentro do return cole o código que recortamos lá de App.jsx

~~~javascript
import Footer from './components/Footer'
import Header from './components/Header'

function Home() {
    return {
       <>
          <Header />
          <section className='container'>
            <div className='apresentacao'>
              <p>
                Olá, sou <br/>
                <span>Edson Maia</span> <br/>
                Dev Full Stack
              </p>
              <button className='btn btn-red'>
                Saiba mais sobre mim
              </button>
            </div>
            <figure>
              <img className='img-home' src="/developer-red.svg" alt="Imagem de Home" />
            </figure>
          </section>
          <Footer />
        </> 
    }
}

~~~

10. Salve as alterações e feche.

## Criar rotas no React JS

1. No terminal digite o seguinte comando:
`npm install react-router-dom`

2. Em `src` crie o arquivo `routes.jsx`

> O Vite e o ESList exigem que você mantenha um padrão nos nomes dos arquivos. Por isso, estamos usando a extensão .jsx

~~~javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} ></Route>
            </Routes>
    </BrowserRouter>
    )
}

export default AppRoutes

~~~

3. Editar App.jsx

~~~javascript
import AppRoutes from './routes'

function App() {

  return (
    <AppRoutes />
  )
}

export default App

~~~

4. Editar o `index.jsx` do componente `Header`

> Vamos substituir as tags a pelo componente Link do react-router-dom

Veja como deve fica o código do arquivo

~~~javascript
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>edsonMaia.dev</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/contatos">Contatos</Link>
            </nav>
        </header>
    )    
}

export default Header

~~~

5. Salve as alterações e faça os testes de navegação com os links do Header no browser.

## Ajuste no link do botão Saiba mais sobre mim

1. Abra o arquivo index.jsx de Home
2. Mude a tag button por Link

~~~javascript
<Link to="/sobre" className='btn btn-red'>
    Saiba mais sobre mim
</Link>

~~~

3. Faça o importe do componente Link do react-router-dom
`import { Link } from 'react-router-dom'`

4. Salve as alterações e faça os testes no browser

5. Ele perdeu a formatação CSS, mas, vamos ajustar. [24:29]

## Ajuste no botão Saiba mais [24:43]

1. Abra o arquivo `App.css`
2. No seletor .btn adicione as seguintes propriedades:

~~~css
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
~~~

3. Salve as alterações e veja o resultado no browser.

## Dicas finais

1. Acesse o nosso repositório do projeto no GitHub
https://github.com/edsonmaia/portfolio

2. Acesse o layout do projeto no Figma
https://www.figma.com/file/qJ2Z3P3U7899IgAiovag65/portfolio?type=design&node-id=1-35&t=dbRx0ccLmY7xrepP-0

3. Acessem meu instagram
https://www.instagram/professoredsonmaia

4. Canal Professor Edson Maia no YouTube
https://www.youtube.com/professoredsonmaia

5. Acesse meu canal no Discord
https://discord.gg/cHN77Mbb

Salve Devs, até a próxima!
