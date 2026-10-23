# Site GAE Construtora e Engenharia

Site estático (HTML + CSS puro, sem programas de build), publicado pelo **GitHub Pages** no domínio **gaeconstrutora.com.br**.

## Estrutura

```
index.html            → Home
sobre/index.html      → Sobre
servicos/index.html   → Serviços
portfolio/index.html  → Portfólio
assets/css/style.css  → cores, fontes e layout de todas as páginas
assets/js/main.js     → menu do celular, animações e formulário
assets/img/           → imagens usadas no site (otimizadas para web)
assets/originais/     → imagens em resolução original (backup, não são carregadas pelo site)
CNAME                 → domínio usado pelo GitHub Pages
```

## Como atualizar

**Trocar um texto:** abra a página no GitHub, clique no lápis (Edit), procure o texto (Ctrl+F), altere e clique em *Commit changes*. Em 1–2 minutos o site atualiza.

**Trocar/adicionar uma foto:**
1. Reduza a foto para no máximo ~1920 px no lado maior (JPG). Fotos de celular direto pesam muito.
2. No GitHub, entre em `assets/img/` → *Add file* → *Upload files*.
3. Na página, troque o nome do arquivo no `src="..."` da imagem.

**Adicionar uma obra na página Serviços:** copie um bloco `<div class="linha ...">...</div>` inteiro em `servicos/index.html`, cole logo abaixo e troque imagem, título e texto.

**Cabeçalho e rodapé** se repetem nas 4 páginas. Se mudar telefone, e-mail ou redes sociais, altere nos 4 arquivos (Ctrl+F ajuda).

## Publicação (primeira vez)

1. Crie um repositório no GitHub (ex.: `gae-site`) e envie todos os arquivos desta pasta (pelo GitHub Desktop ou *Upload files*).
2. No repositório: **Settings → Pages → Source: Deploy from a branch → Branch: `main` / pasta `/ (root)`**.
3. Ainda em Pages, em **Custom domain** confirme `gaeconstrutora.com.br` e, depois que o DNS propagar, marque **Enforce HTTPS**.
4. No painel da Hostinger (DNS do domínio), troque só os registros do site:
   - Registros **A** de `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Registro **CNAME** de `www` → `SEU-USUARIO.github.io`
   - **Não mexa nos registros MX/TXT** — eles mantêm o e-mail funcionando.
5. Só desative o site no Construtor da Hostinger depois que o novo estiver no ar.

## Formulário de contato

Envia as mensagens para `contato@gaeconstrutora.com.br` pelo serviço gratuito [FormSubmit](https://formsubmit.co). Na **primeira** mensagem enviada pelo site, o FormSubmit manda um e-mail de ativação para esse endereço — é preciso clicar em *Activate* uma única vez.

## Testar no computador

Na pasta do site: `python -m http.server 8000` e abra http://localhost:8000
