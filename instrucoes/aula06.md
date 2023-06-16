# Aula 06 Rotas aninhadas no React JS com o react router dom [14:36]

Vamos implementar uma funcionalidade na nossa aplicação para não repetir códigos da estrutura das páginas.
Toda página tem Header, Container e Footer. Para não repetir podemos fazer o seguinte:

## Forma mais rápida

1. Abra o arquivo routes.jsx
2. Faça o ajuste no código, adicione os componentes:

* Header abaixo da abertura do BrowserRouter
* Container, envolvendo o componente Routes
* Footer abaixo, antes do fechamento do BrowserRouter

3. Ajuste o código conforme o exemplo abaixo, não se esqueça dos imports

~~~javascript
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Projetos from './pages/Projetos'
import Contatos from './pages/Contatos'
import Page404 from './pages/Page404'
import Header from './components/Header'
import Footer from './components/Footer'
import Container from './components/Container'

function AppRoutes() {
    return (
        <>
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path="/" element={ <Home /> }></Route>
                    <Route path="/sobre" element={ <Sobre /> }></Route>
                    <Route path="/projetos" element={ <Projetos /> }></Route>
                    <Route path="/contatos" element={ <Contatos /> }></Route>
                    <Route path="*" element={ <Page404 /> }></Route>
                </Routes>
            </Container>
            <Footer />
        </BrowserRouter>
        </>
    )
}

export default AppRoutes

~~~

4. Salve as alterações e feche este arquivo.

### Ajustes nas páginas

1. Abra o arquivo index.jsx de cada página
2. Apague os componentes Header, Container e Footer
3. Apague os imports deles
4. Ajuste as indentações
5. Salve os arquivos, feche e veja o resultad no browser.

> Veja que adicionamos no arquivo `routes.jsx` os componentes Header, Container e Footer que são comuns a todas páginas.
> Mas, existe outra forma de fazer isto, utilizando rotas aninhadas (routes nested) do react-router-dom

## Rotas Aninhadas (routes nested)

### Página Base ou Template da Página

1. Dentro de pages crie a pasta `PaginaBase`
2. Dentro de `PaginaBase` crie o arquivo `index.jsx`
3. Faça o seguinte código:

~~~javascript

import Header from 'components/Header'
import Footer from 'components/Footer'
import Container from 'components/Container'
import { Outlet } from 'react-router-dom'

function PageBase() {
    return (
        <main>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </main>
    )
}

export default PageBase

~~~

> No vídeo crie a pasta PaginaBase e dentro do código do componente eu usei o nome PageBase.
> É recomendável que o componente tenha o mesmo nome da pasta, por uma questão de padronização, para evitar problemas no import.
> Eu sugiro que você escolha qual nome fica melhor para a pasta e o componente.

4. Salve e feche este arquivo

### Modificar o routes.jsx

1. Abra o arquivo routes.jsx

2. Faça o seguinte ajuste no código

* Dentro de Routes crie um Route para a PaginaBase
* Dentro desse Route da PaginaBase 'aninhe' todas as outras rotas
* Apague o path="/" da rota Home e mude para index

3. O código deverá ficar da seguinte forma:

~~~javascript
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Projetos from './pages/Projetos'
import Contatos from './pages/Contatos'
import Page404 from './pages/Page404'
import PageBase from './pages/PageBase'

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <PageBase /> }>
                    <Route index element={ <Home /> }></Route>
                    <Route path="/sobre" element={ <Sobre /> }></Route>
                    <Route path="/projetos" element={ <Projetos /> }></Route>
                    <Route path="/contatos" element={ <Contatos /> }></Route>
                    <Route path="*" element={ <Page404 /> }></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes

~~~
## AVISOS IMPORTANTES:

> Lembre-se do nome da pasta PageBase e do componente PageBase que eu criei um pouco diferente no vídeo.
> Mas, Você pode usar o seu padrão de nomes.

> Observe que a route PageBase agora é a rota raiz, mas, o index, ou seja, a primeira é a página Home.
> Ela e todas as outras rotas são rotas aninhadas, estão dentro, da rota PageBase.
> E o outlet? lembre-se que o outlet da PageBase indica que ali terá um conteúdo filho (children) que no caso são os conteúdos das rotas aninhadas.


### Link da documentação oficial do React Router Dom

https://reactrouter.com/en/main/components/outlet

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

