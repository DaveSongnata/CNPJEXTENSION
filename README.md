# 🚀 Consulta CNPJ Automática (Extensão de Navegador)

Pequena extensão JavaScript para navegador que consulta dados de CNPJ diretamente da [BrasilAPI](https://brasilapi.com.br/) e exibe as informações da empresa com um botão de **copiar com um clique** — tudo isso sem CAPTCHA.

## 💡 Problema Resolvido

Preencher informações de empresa como Razão Social, Nome Fantasia e Endereço direto pelo site da Receita é lento, exige múltiplas etapas e precisa passar por CAPTCHA.

## ⚙️ Solução

- Insira um CNPJ no campo
- A extensão faz a requisição à BrasilAPI
- Mostra os dados na tela com botão de “copiar”
- Sem CAPTCHA, sem fricção

## 📊 Resultado

- Redução de ~50% no tempo necessário para consultar dados
- Mais agilidade e menos estresse no suporte
- Usado internamente diariamente por mim e colegas

## 📹 Demonstração

![Demonstração do sistema](https://raw.githubusercontent.com/DaveSongnata/CNPJEXTENSION/a2664574e7d39bbaed4eb1fb9763ed212b4159dc/public/2025-07-26%2003-51-33.gif)

> Exemplo real comparando com o site da Receita. Resultado em menos da metade do tempo.

## 🧪 Tecnologias

- JavaScript Vanilla
- HTML/CSS
- API REST (BrasilAPI)

## 🔒 Segurança

- Nenhum dado é armazenado
- Toda consulta acontece no navegador do usuário

## 📁 Como testar

1. Clone este repositório
2. Acesse `chrome://extensions/`
3. Ative o “Modo Desenvolvedor”
4. Clique em “Carregar sem compactação” e selecione a pasta do projeto
5. Insira um CNPJ válido no campo
6. Clique no botão “Copiar” ao lado das informações

---

## ✅ Vantagens frente ao site da Receita

| Critério             | Site da Receita | Extensão CNPJ |
|----------------------|------------------|----------------|
| CAPTCHA              | ✅ Sim           | ❌ Não         |
| Velocidade           | 🐢 Lenta         | ⚡️ Rápida     |
| Copiar informações   | Manual           | 1 clique       |
| Interface limpa      | ❌ Não           | ✅ Sim         |

---

## 🧠 Motivação

Esse projeto surgiu de uma dor real que eu e colegas enfrentávamos diariamente no setor de suporte. Ao invés de aceitar o incômodo, resolvi criar minha própria ferramenta para ganhar tempo e evitar erros. Deu certo — e tá aqui no GitHub agora. 😉









Para instalar:

1 - Faça o Download do Arquivo ZIP

2 - Abra o Chrome

3 - Ative o modo desenvolvedor do Chrome

4 - Importe a extensão

5 - Pronto, a extensão já pode ser usada

(Essa extensão possui dependências diretas ao site [brasilapi.com](https://brasilapi.com.br/))
