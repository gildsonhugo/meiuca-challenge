# meiuca-challenge

Projeto utilizado para o processo seletivo como dev na Meiuca.

O objetivo do projeto está em desenvolver alguns componentes de design system de acordo com os designs desenvolvidos no figma, enviados por email.

Os componentes devem ser implementados e documentados utilizando storybook, e devem usar os design tokens que foram disponibilizados no desafio.

## Testando a solução

Clonar o repositório, acessar o diretório meiuca-challenge, e rodar o comando

```bash
npm install
```

Após finalizar a instalação das dependência, executar o comando: 

```bash
npm run storybook
```
Esse comando irá executar os scripts necessários para rodar a aplicação, e após finalizado, acessar o browser em: http://localhost:6006/


## Explicação da implementação

O projeto possui a capacidade de gerar de maneira automatizada dos design tokens a partir da leitura do arquivo .json disponibilizado no desafio (para a implementação realizei algumas mudanças no json). 

O projeto é desenvolvido utilizando Angular como framework e está organizado no formato de um módulo chamado "sharedModule" que engloba todos os componentes solicitados no desafio. 

Vídeo de apresentação: https://youtu.be/jn1J_N8k1vU