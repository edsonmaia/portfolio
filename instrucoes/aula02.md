# Aula 02 Organizar projeto, criar página Home e componentes [43:04]

> O nosso projeto terá o seguinte modelo do figma
> https://www.figma.com/file/qJ2Z3P3U7899IgAiovag65/portfolio?type=design&node-id=1-35&t=dbRx0ccLmY7xrepP-0

## Imagens e Favicon

Inicialmente, precisamos copiar 3 arquivos favicon.svg, developer-blue.svg, developer-red.svg para a pasta public
Em seguida, vamos mudar o favicon no arquivo index.html

## Organização do projeto

### Criar pastas pages e components

Dentro de src
1. Criar pasta pages
2. Criar pasta components

## Criar componente Header

Dentro de \src\components
1. Crie a pasta 'Header'
2. Dentro de Header crie os arquivos 'index.jsx' e 'Header.module.css'

Criar componente Container

Dentro de \src\components
1. Crie a pasta 'Container'
2. Dentro de Header crie os arquivos 'index.jsx' e 'Container.module.css'

Criar componente Footer

Dentro de \src\components
1. Crie a pasta 'Footer'
2. Dentro de Header crie os arquivos 'index.jsx' e 'Footer.module.css'

## Componente Header

1. Abra o arquivo index.jsx de Header
2. Faça o seguinte código:

~~~javascript
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <span>edsonMaia.dev</span>
            <nav>
                <a href="">Home</a>
                <a href="">Sobre</a>
                <a href="">Projetos</a>
                <a href="">Contatos</a>
            </nav>
        </header>
    )    
}

export default Header

~~~

3. Salve as alterações.

## CSS do Header

1. Abra o arquivo Header.module.css
2. Faça o seguinte código:

~~~css
.header {
    width: 100%;
    height: 50px;
    background-color: var(--primary);
    color: var(--white);

    display: flex;
    align-items: center;
    justify-content: space-around;
}

.header span {
    font-size: 1.5rem; /* 24px -> 16px = 1rem */
    font-weight: bold;
}

.header a {
    text-decoration: none;
    color: var(--white);
    padding-right: 1.5rem;
    font-size: 1.125rem; /* 18px */
}

.header a:hover {
    color: var(--red);
}

~~~

3. Salve as alterações.

## Utilizar o compomente Header

1. Abra o arquivo App.jsx
2. Dentro do fragment apague a tag h1 e coloque a tag do componente `<Header />`

~~~javascript
  <>
    <Header />
  </>
~~~

3. Faça o import do componente Header
`import from './components/Header'`

4. Salve as alterações (CTRL + S) e veja o resultado no Browser

## Ajustes nos arquivos App.css e index.css [10:45]

1. Abra o arquivo App.css
2. Selecione tudo e apague
3. Salve as alterações e feche
4. Abra o arquivo index.css, é nosso css global [11:30]
5. Apague da linha 16 até a linha 70
6. Apague as 2 até 8 da propriedade line-height até background-color
7. O seletor :root ficará assim:

~~~css
:root {
  font-family: 'Fira Code', monospace;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}
~~~

8. Abaixo do seletor :root crie o seguinte:

~~~css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

~~~

9. Dentro do seletor :root acrescente as variáveis de cores do nosso projeto
~~~css
:root {
  font-family: 'Fira Code', monospace;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;

  --primary: #16213E;
  --secondary: #0F3460;
  --terceary: #533483;
  --red: #E94560;
  --soft-white: #f1f1f1;
  --white: #fefefe;
  --black: #111;
  --gray: #222222;
}
~~~

## Fonte personalizada [13:30]

Vamos usar a fonte 'Fira Code' do Google Fonts com os pesos 400, 500 e 600

1. Copie o código para usarmos ela como link no `head` do arquivo `index.html`

~~~html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap" rel="stylesheet">
~~~

2. Salve as alterações
3. Feche o arquivo index.html

## CSS span, nav e a do Header [17:50]
Formatação do span [17:50]
Formatação dos links da tag a [20:30]

## Criar component Footer [24:13]

1. Abra o arquivo index.jsx do Footer
2. Faça o seguinte código:

~~~javascript
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            Feito com ❣️ por Edson Maia © 2023
        </footer>
    )
}

export default Footer

~~~

## CSS do Footer [25:45]

1. Abra o arquivo Footer.module.css
2. Faça o seguinte código:

~~~css
.footer {
    width: 100%;
    height: 50px;
    background-color: var(--primary);
    color: var(--white);
    font-weight: bold;
    font-size: 1.125rem; /* 18px */

    display: flex;
    align-items: center;
    justify-content: center;
}

~~~

3. Salve as alterações

## Utilizar o Footer no App.jsx [27:05]

1. Abra o arquivo `App.jsx`
2. Abaixo do Header digite o seguinte código:

~~~javascript
  Conteúdo
  <Footer />
~~~

3. Faça o import do component Footer
`import Footer from './components/Footer`

4. Salve as alterações e veja o resultado no Browser

## Sobre o Conteúdo da página [28:00]

> Vamos fazer o conteúdo da página Home diretamente dentro de App.jsx, mas, depois iremos colocar na page Home, como um componente funcional.

## Imagem da página Home [28:30]

> https://undraw.co/illustrations

No site unDraw você pode escolher uma ilustração, personalizar a cor de destaque, salvar a imagem no formato svg ou png.

## Conteúdo da página Home [30:00]

1. Abra o arquivo `App.jsx`
2. Abaixo do `Header` faça o seguinte código:

~~~javascript
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

~~~

3. Salve as alterações e veja o resultado no browser.

## CSS do Conteúdo da página Home [34:40]

> Por enquanto, vamos fazer a formatação destes conteúdos usando o arquivo App.css

1. Abra o arquivo App.css
2. Faça o seguinte código:

~~~css
/* css da page Home */
.container {
    width: 100%;
    min-height: 90vh;

    display: flex;
    align-items: center;
    justify-content: space-around;
}

.container img {
    height: 500px;
}

.container p {
    font-size: 3rem; /* 48px */
    font-weight: bold;
    margin-bottom: 1rem;
}

.container span {
    color: var(--red);
}

.btn {
    width: 250px;
    height: 50px;
    font-size: 1.125rem;
    font-weight: bold;
    border: 0;
    border-radius: 8px;
    cursor: pointer;
}

.btn-red {
    background-color: var(--red);
    color: var(--white);
}

.btn-red:hover {
    background-color: var(--primary);
}

~~~

3. Salve as alterações e veja o resultado no browser.

[43:04]
