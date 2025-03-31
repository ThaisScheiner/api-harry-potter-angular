# Aplicação da API do Harry Potter

A aplicação consome a **API do Harry Potter** para exibir informações sobre os personagens do universo de Harry Potter. A API oferece dados como nome, imagem, casa e outras informações sobre os personagens da série. A aplicação permite que os usuários busquem personagens específicos e exibam esses dados de forma visualmente atraente.

## Funcionalidades principais:
1. **Exibição de Personagens:** A aplicação lista os personagens do universo de Harry Potter, com informações como nome, casa e imagem.
2. **Busca de Personagens:** Os usuários podem buscar personagens específicos por nome, com a aplicação exibindo resultados em tempo real, utilizando a busca oferecida pela API.
3. **Exibição Dinâmica:** A aplicação exibe os personagens em cards, com informações como imagem, nome e casa. O layout dos cards é responsivo, garantindo boa visualização em diferentes tamanhos de tela.
4. **Carregamento e Erro:** Há uma funcionalidade de carregamento enquanto os dados estão sendo obtidos da API e um sistema de mensagens de erro caso algo dê errado ao tentar carregar ou buscar os dados.

## Tecnologias Usadas:

### 1. Angular:
   - **Framework Front-End:** O Angular é o framework utilizado para construir a interface da aplicação. Ele permite a criação de componentes reutilizáveis e mantém o fluxo de dados de forma eficiente através do binding.
   - **Componentes Standalone:** A aplicação usa **componentes standalone**, o que facilita a modularização e reutilização de código.
   - **Diretivas:** O Angular utiliza diretivas como `*ngFor`, `*ngIf`, e `ng-template` para manipulação dinâmica dos dados.
   - **Reactive Forms e Eventos:** Para o formulário de pesquisa, o Angular lida com eventos e binding de forma reativa.

### 2. Angular Material:
   - **UI Components:** A biblioteca **Angular Material** é usada para fornecer componentes visuais prontos, como **MatCard** para exibir os personagens em cards com imagens, textos e botões.
   - **Design Responsivo:** O Angular Material ajuda a manter um design responsivo e acessível, como é visto no comportamento dos cards que se ajustam em diferentes resoluções de tela.

### 3. API do Harry Potter (Public API):
   - **API Externa:** A API utilizada é uma **API pública de Harry Potter**, que oferece endpoints para buscar informações sobre personagens, casas, e outros detalhes do universo Harry Potter. A aplicação faz requisições HTTP para essa API para obter os dados.

### 4. Serviços Angular (Angular Services):
   - **Service de Comunicação com a API:** A aplicação utiliza serviços Angular para realizar chamadas HTTP para a API do Harry Potter. Esses serviços gerenciam a lógica de comunicação com a API, como o carregamento de dados e a busca de personagens específicos.
   - **RxJS:** A biblioteca RxJS é utilizada para trabalhar com observables, permitindo a manipulação assíncrona das requisições HTTP e respondendo a eventos de carregamento ou erro.

### 5. SCSS (Sass):
   - **Estilos Personalizados:** O estilo da aplicação é configurado usando **SCSS**, permitindo um controle mais eficiente sobre a aparência dos componentes, como a personalização de cores, fontes, e layout.
   - **Layout Responsivo:** A aplicação é construída de forma responsiva, com ajustes no layout dos cards para diferentes tamanhos de tela, utilizando media queries e unidades relativas.

### 6. TypeScript:
   - **Linguagem de Programação:** A aplicação é desenvolvida utilizando **TypeScript**, que oferece tipagem estática e recursos de programação orientada a objetos. Isso torna o desenvolvimento mais eficiente e menos propenso a erros.
   - **Models e Interfaces:** Tipos como `Character` são definidos com interfaces, garantindo que os dados sejam manipulados de forma segura e organizada.

### 7. RxJS e Observables:
   - **Reatividade:** A aplicação usa **RxJS** para tratar observables. Isso é particularmente útil para lidar com requisições assíncronas e atualizar a interface sem bloquear a aplicação. Usando métodos como `subscribe`, a aplicação reage aos dados recebidos da API.

## Fluxo de Dados:
1. **Carregamento Inicial:** Ao carregar a página, a aplicação faz uma requisição HTTP à API do Harry Potter, buscando uma lista de personagens. A resposta da API é armazenada na variável `personagens`, que alimenta a lista exibida na tela.
2. **Busca de Personagens:** Quando o usuário digita um nome na barra de busca, o evento é capturado e a aplicação realiza uma nova requisição à API, agora filtrando pelos personagens que correspondem ao nome informado.
3. **Exibição Dinâmica:** A lista de personagens é exibida dinamicamente em cards. A aplicação usa a diretiva `*ngFor` para gerar os cards com base nos dados recebidos da API.
4. **Tratamento de Erros:** Se houver um erro na requisição (como problemas de rede), uma mensagem de erro é exibida ao usuário.

## Conclusão:
Essa aplicação é uma ótima combinação de Angular com API externa para criar uma experiência interativa e visualmente agradável. Ela utiliza boas práticas de desenvolvimento como modularização com componentes, serviços para lógica de dados e design responsivo, garantindo uma boa experiência em dispositivos móveis e desktops.

## Development server

To start a local development server, run:

```bash
ng serve
```