# Aula 01 Criar projeto React JS com o Vite, Estrutura do projeto

## Criar projeto React JS

1. Abra o terminal de comandos, no caso eu usei o Hyper
2. Acesse a sua pasta de projetos. Ex.: cd web
3. Digite o seguinte comando:

`npx create-vite@latest portfolio --template react`

> Acesse o link https://vitejs.dev para mais informações

4. Em seguida entre na pasta portfolio

`cd portfolio`

5. Digite o comomando:

`npm install`

Aguarde o processo de criação do projeto com o Vite.
Para abrir o projeto no VS Code, no terminal digite o comando:

`code .`

6. No VS Code abra o Terminal integrado usando o atalho:

CTRL + J ou CTRL + '

7. No terminal integrado do VS Code digite o comando:

`npm run dev`

Aguarde o carregamento da Aplicação React no seu browser,
irá abrir no endereço http://localhost:4157

8. Na raiz do projeto abra o index.html

> Mude o título da página para `<title>Portfólio</title>`

Salve a alteração (CTRL + S) e veja o resultado no browser.

9. Na estrutura de pastas dentro de src está o arquivo App.jsx abra ele.

9.1 Apague todo o conteúdo que está dentro do fragment do return e digite
~~~html
<h1>Olá Mundo!</h1>
~~~

9.2 Apague a `const count do useState` que não vamos usar nesse projeto

9.3 Apague as linhas de `import` que não estão mais sendo usadas

Salve a alteração (CTRL + S) e veja o resultado no browser.

10. Apague os arquivos `vite.svg` que está na pasta `public` e o arquivo `react.svg` que está na pasta assets dentro de `src`.

> Após apagar o arquivo vite.svg o favicon da página não irá aparecer. Não se preocupe, vamos usar o nosso próprio favicon.

Estes são os passos básicos para criar um projeto react usando Vite.

Salve Devs, até a próxima aula dessa nossa série.
