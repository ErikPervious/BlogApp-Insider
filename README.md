<h1 align="center">
  <img alt="move.it" title="move.it" src="https://user-images.githubusercontent.com/51729214/172024148-cd66aaf3-31f0-456c-8b44-7acc0f368874.png" />
  <p></p>
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=48F4FF&labelColor=162133" />
  <img alt="Insider 5.0" src="https://img.shields.io/static/v1?label=Insider&message=5.0&color=48F4FF&labelColor=162133" />
</h1>

<p align="center">
  <a href="#title">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
  <a href="#features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
  <a href="#preview">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#requirements">Pré-requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rodando">Rodando o App</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#openApp">Abrindo no Smarphone</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#technologies">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 
  <a href="#license">Licença</a>
</p>

<h1 id="title">💻 Projeto</h1>

<p>&nbsp;O Insider é um projeto criado pelo <a href="https://sujeitoprogramador.com">SujeitoProgramador</a> e em todas as edições desenvolvemos uma aplicação mobile completa do zero usando o <a href="https://reactnative.dev/">React Native</a>.</p>
<p>&nbsp;Nessa edição 5.0 desenvolvemos um aplicativo de blog, no qual o mesmo busca pelos dados usando uma API que criamos com o <a href="https://strapi.io/">Strapi</a>, foram 4 dias de muito código e bastante aprendizado.</p>

<h2 id="features">🚀 Features Novas</h1>

<p>&nbsp;Para levar a aplicação ao próximo nível eu fiz algumas alterações como: criar o projeto do zero usando o <a href="https://styled-components.com/">Styled Components</a>, Adicionei animações em todo o aplicativo usando o <a href="https://github.com/oblador/react-native-animatable">Animatable</a>, deixando o mesmo mais interativo e chamativo e por fim também adicionei o tema escuro que toda aplicação deve ter haha!</p>

<h2 id="preview">🔖 Layout</h2>

<div align="center">
  <a href="https://www.figma.com/file/ZGWvU0fpd3ihQqEopC9T2U/BlogApp-Insider-5">Projeto Completo No Figma</a>
</div>

<div align="center">
  <img alt="Home" title="Home" src="https://user-images.githubusercontent.com/51729214/172025242-d8efc822-8790-486d-9ca6-4d33678c74ff.png"  width="240"/>
  <img alt="Details" title="Details" src="https://user-images.githubusercontent.com/51729214/172025177-3fc5740b-b052-4941-bc5d-a1b40c627aa0.png" width="240" />
  <img alt="Category" title="Category" src="https://user-images.githubusercontent.com/51729214/172025208-b48885db-6d3d-4442-904b-2cb7f4ff1b66.png" width="240" />
</div>

<h2 id="requirements">:hammer: Pré-requisitos</h1>

<p>&nbsp;Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: <a href="https://git-scm.com">Git</a>, <a href="https://nodejs.org/pt-br/">NodeJS</a>, <a href="https://expo.io/">Expo</a>, um bom editor de texto para trabalhar com o código como o <a href="https://code.visualstudio.com/">VSCode</a>.</p>

<h2 id="rodando">:game_die: Rodando o Aplicativo</h2>

```bash
# Clone este repositório
$ git clone https://github.com/ErikPervious/BlogApp-Insider

# Acesse a pasta do projeto no terminal/cmd
$ cd BlogApp-Insider

# Entre na pasta da API e rode ela
$ cd BlogApp-Api 
e depois $ yarn develop

# A API irá rodar e abrir no seu navegador o painel de administrador do Strapi
# No Painel você pode postar suas publicações, criar/editar regras, ver os endereços acessíveis entre várias outras coisas
# A Documentação do Strapi está disponível no site: https://docs.strapi.io/

# Pegue o IP da sua máquina, você pode fazer isso usando o seguinte comando no seu terminal/cmd
$ ipconfig # Windows
$ ifconfig # Linux

# Agora acesse o arquivo api.js e coloque seu ip na baseURL
# Caminho até o arquivo api.js -> BlogApp/src/services/api.js
# Exemplo:
$ baseURL: 'http://ColoqueSeuIpAqui:1337/'

# Feito isso, volte na pasta do aplicativo e instale as dependendências necessárias
# Caminho até a pasta do aplicativo -> BlogApp/
$ yarn install

# Agora você pode executar a aplicação usando o Yarn
$ yarn start
# Ou usando o próprio Expo
$ expo start
```

<h2 id="openApp">:calling: Abrindo no smartphone</h2>

! Você pode executar o aplicativo no seu emulador ou usar seu próprio dispositivo.

* Baixe o aplicativo Expo Go na [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US) ou na [App Store](https://apps.apple.com/br/app/expo-go/id982107779).
* Abra o app, conceda as permissões necessárias e aperte no ***Scan QR Code***.

<div align="center">
  <img alt="Expo" title="#Expo" src="https://user-images.githubusercontent.com/51729214/135946910-416f470a-4375-48fb-9519-8a7b1015c1af.png" />
</div>

* Escaneie o QR Code que irá aparecer no seu CMD/Terminal.
* Agora aguarde carregar e pronto.

<h2 id="technologies">✨ Tecnologias</h2>

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)
- [React Native](https://reactnative.dev/)
- [Styled Components](https://reactnative.dev/)
- [Expo](https://expo.io)
- [Strapi](https://strapi.io/)
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/docs/install/)

<h2 id="license">📄 Licença</h2>

Esse projeto está sob a licença GNU. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
