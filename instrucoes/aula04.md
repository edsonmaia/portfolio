# Aula 03 Criar componente Container e Página 404 [24:15]

> O nosso projeto terá o seguinte modelo do figma
> https://www.figma.com/file/qJ2Z3P3U7899IgAiovag65/portfolio?type=design&node-id=1-35&t=dbRx0ccLmY7xrepP-0

## Criar componente Container

1. Dentro da pasta `components` já tem a pasta `Container`
2. Dentro dela temos 2 arquivos `index.jsx` e `Container.module.css`, se não tiver crie os dois.
3. Abra o arquivo `index.jsx` e faça o seguinte código:

~~~javascript
import styles from './Container.module.css'

// eslint-disable-next-line react/prop-types
function Container({ children }) {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}

export default Container

~~~

> O comentário //eslint-disable-next-line react/prop-types
> serve para ignorar a necessidade de declarar as Props Types de children
> Se, você quiser declarar elas, faça o import de PropTypes na parte de cima do componente:
~~~javascript
import PropTypes from 'prop-types'

~~~
> Depois, fora do return e antes do export default faça a declaração de propTypes:
~~~javascript
Container.propTypes = {
  children: PropTypes.any
}.isRequired

~~~

### Referência de PropTypes
https://legacy.reactjs.org/docs/typechecking-with-proptypes.html

## CSS do componente Container

1. Abra o arquivo Container.module.css
2. Faça o seguinte código:

~~~css
.container {
    width: 100%;
    min-height: 90vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-block: 1rem;
    gap: 1rem;
}

~~~

3. Salve as alterações e feche o arquivo do css.

## Como usar o componente Container

Vamos usar o componente Container em todas as páginas, para isto, vamos começar com a página Home.

1. Abra o arquivo `index.jsx` da página `Home`
2. Selecione da linha 9 até 23, toda a section
3. Recorte estas linhas (CTRL + X)
4. Coloque o componente Container
5. Cole (CTRL + V) entre as tags do componente Container as linhas que foram recortadas. Ficará assim o código:

~~~javascript
<Container>
  <section className="container">
    <div className="apresentacao">
        <p>
            Olá, sou <br />
            <span>Edson Maia</span> <br />
            Dev Full Stack
        </p>
        <Link to="/sobre" className="btn btn-red">
            Saiba mais sobre mim
        </Link>
    </div>
    <figure>
        <img className="img-home" src="/developer-red.svg" alt="Imagem de Home" />
    </figure>
  </section>
</Container>

~~~

6. Faça o import do componente Container
`import Container from '../../components/Container'`

7. Salve e vejas a altearações no browser.

## Ajustes no CSS da página Home

1. Faça o import do css da página Home

`import styles from './Home.module.css'`

2. Vamos mudar a forma de utilização das classes com o CSS module. Mude a declaração de classes entre aspas por {styles.nome_da_classe} entre chaves. O código deverá ficar assim:

~~~javascript
<Container>
  <section className={styles.home}>
      <div className={styles.apresentacao}>
          <p>
              Olá, sou <br />
              <span>Edson Maia</span> <br />
              Dev Full Stack
          </p>
          <Link to="/sobre" className={`${styles.btn} ${styles.btn_red}`}>
              Saiba mais sobre mim
          </Link>
      </div>
      <figure>
          <img className={styles.img_home} src="/developer-red.svg" alt="Imagem de Home" />
      </figure>
  </section>
</Container>
~~~

> Mudamos a class container da section para o nome 'home' para evitar ambiquidade com a classe cont

## CSS de página Home

1. Abra o arquivo `App.css`
2. Selecione todo o código, recorte (CTRL + X)
3. Abra o arquivo `Home.module.css`
4. Cole nele todo o CSS que estava no arquivo App.css
5. Faça alguns ajustes nos nomes das classes

## Ajustes nas classes CSS de Home

1. Mude os nomes das classes:
1.1 A class '.container' mude para '.home'
1.2 A class '.btn-red' mude para '.btn_red'
2. Salve as alterações do CSS de Home, depois feche o arquivo.
3. Veja o resultado no brouwer.

## Utilizar o componente Container nas outras páginas

1. Abra o arquivo index.jsx da página Sobre
2. Mude a tag h1 para h2
3. Recorte a linha da tag h2
4. Coloque o componente Container
5. Cole a linha da tag h2 entre as tags do Container. O código ficará assim:

~~~javascript
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Container from '../../components/Container'

function Sobre() {
    return (
        <>
            <Header />
            <Container>
                <h2>Sobre</h2>
            </Container>
            <Footer />
        </>
    )
}

export default Sobre

~~~

6. Não se esqueça de fazer o import do componente Container
`import Container from '../../components/Container'`

7. Salve as alterações e veja o resultado no browser.

> Faça o mesmo processo nos arquivos 'index.jsx' das páginas 'Projetos' e 'Contatos'.


## Criar página 404

> Para as rotas não existentes precisamos criar uma página 404 que representa o erro Page Not Found, erro na requisição http de uma página web.

1. Dentro da pasta `pages` crie a pasta `Page404`
2. Dentro da pasta `Page404` crie os dois arquivos `index.jsx` e `Page404.module.css`
3. Abra o arquivo `index.jsx` e faça o seguinte código:

~~~javascript
import Header from '../../components/Header'
import Container from '../../components/Container'
import Footer from '../../components/Footer'
import styles from './Page404.module.css'

function Page404() {
    return (
        <>
            <Header />
            <Container>
                <h2 className={styles.titulo2}>Algo de errado não está certo!</h2>
                <div className={styles.textos}>
                    <span className={styles.texto_grande}>404</span> <br />
                    <strong className={styles.texto_vermelho}>Página Não Localizada!</strong>
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default Page404

~~~

4. Salve as alterações e feche.

## CSS da página 404

1. Abra o arquivo `Page404.module.css` e faça o seguinte código:

~~~css
.titulo2 {
    padding-top: 2rem;
}

.textos {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.texto_grande, .texto_vermelho {
    font-size: 300px;
    color: var(--red);
    font-weight: bold;
}

.texto_vermelho {
    font-size: 1.5rem;
}

~~~

2. Salve as alterações, feche o arquivo do CSS.

## Como usar a página 404

1. Abra o arquivo `routes.jsx`
2. Copie a última linha de rotas (CTRL + ALT + SETA P/ BAIXO)
3. Deixe da seguinte forma:

~~~javascript
<Routes>
    <Route path="/" element={ <Home /> }></Route>
    <Route path="/sobre" element={ <Sobre /> }></Route>
    <Route path="/projetos" element={ <Projetos /> }></Route>
    <Route path="/contatos" element={ <Contatos /> }></Route>
    <Route path="*" element={ <Page404 /> }></Route>
</Routes>
~~~

4. O path é para * e o element é para o componente Page404. Não se esqueça de fazer o importe da Page404:
`import Page404 from './pages/Page404'`

5. Salve as alterações e feche o arquivo de rotas.
6. Para testar, no browser tente acessar uma rota que não existe, por exemplo `http://localhost:5147/teste`

> Veja como aparecerá a página 404 toda vez que você acessar no seu projeto alguma rota que não existe.

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
