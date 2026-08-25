# Site — Escola de Educação Infantil Moriah

Site institucional one-page, estático (HTML/CSS/JS puro, sem build e
sem dependências). Publicado por upload de arquivos via FTP.

Antes de editar qualquer coisa, leia `PROJETO-MORIAH.md` — é o
documento de referência do projeto (identidade visual, regras de
conteúdo, pendências com o cliente).

## Estrutura de arquivos

```
/
├── index.html
├── sitemap.xml
├── robots.txt
├── /css
│   ├── reset.css        (normalização — igual nos 3 sites da rede)
│   ├── base.css          (tipografia/espaçamento — igual nos 3 sites)
│   ├── components.css     (componentes de UI — igual nos 3 sites)
│   └── theme.css          (cores e logo — ÚNICO arquivo que muda entre
│                            Moriah, Bela Vista Kids e Lumina)
├── /js
│   └── main.js
└── /assets
    ├── favicon.svg
    ├── logo.png            (a enviar pelo cliente)
    ├── logo-branco.png     (versão clara do logo, para o rodapé)
    └── /img
        ├── hero.jpg
        ├── proposta.jpg
        ├── og-image.jpg          (1200×630, para compartilhamento)
        └── estrutura-1.jpg … estrutura-10.jpg
```

## Onde trocar cada coisa

### 1. Número de WhatsApp

Arquivo: `js/main.js`, constante no topo do arquivo:

```js
const WHATSAPP_NUMBER = '5511999999999'; // formato: 55DDDNUMERO, só dígitos
```

Todos os botões e links de WhatsApp do site (header, hero, cards de
turma, depoimentos, FAQ, faixa de CTA, formulário de contato, rodapé e
botão flutuante) usam essa mesma constante — troque em um único lugar
e o site inteiro é atualizado.

Também existe um número placeholder em `index.html`, dentro do bloco
`<script type="application/ld+json">` (campo `"telephone"`) — atualize
para o mesmo número real ao publicar.

### 2. Logotipo

- `assets/logo.png` — logo colorido, usado no header. Enquanto o
  arquivo não existir, o header mostra automaticamente o nome da
  escola em texto (Poppins), no mesmo espaço reservado do logo final.
- `assets/logo-branco.png` — versão clara (branca) do logo, usada no
  rodapé (fundo azul-escuro). Mesmo comportamento de fallback em texto.
- `assets/favicon.svg` — ícone da aba do navegador. Já está funcional
  (gerado a partir das cores da marca), mas é provisório. Ao receber o
  logo oficial, gere o conjunto completo de ícones (recomendado:
  [realfavicongenerator.net](https://realfavicongenerator.net)) e
  salve como `assets/favicon-32.png`, `assets/favicon-16.png` e
  `assets/apple-touch-icon.png` — os `<link>` desses tamanhos já estão
  no `<head>` do `index.html`, só faltam os arquivos.

Nos três casos, basta colocar o arquivo com o nome exato acima dentro
de `/assets` — não é preciso editar HTML nem CSS.

### 3. Fotos

| Arquivo | Usado em |
|---|---|
| `assets/img/hero.jpg` | Foto principal, topo do site |
| `assets/img/proposta.jpg` | Seção "Nossa proposta" |
| `assets/img/estrutura-1.jpg` a `estrutura-10.jpg` | Galeria da seção "Conheça o espaço" (mosaico + lightbox) |
| `assets/img/og-image.jpg` | Imagem de compartilhamento (WhatsApp, Facebook, Twitter/X) — recomendado 1200×630px |

Basta substituir o arquivo mantendo o mesmo nome. Se o tamanho real da
foto for muito diferente do placeholder, ajuste os atributos `width` e
`height` da tag `<img>` correspondente em `index.html` (evita "pulos"
de layout no carregamento).

**Atenção (LGPD):** nenhuma foto com criança pode ser publicada sem
autorização por escrito dos responsáveis. Ao trocar qualquer foto da
galeria, do hero ou da seção de proposta pedagógica, confira se ela
contém criança identificável — se sim, guarde a autorização assinada
antes de publicar.

### 4. Recomendações de formato e peso das fotos

- Formato: `.jpg` (fotos) — se possível, gerar também uma versão
  `.webp` de cada uma no futuro para reduzir ainda mais o peso.
- Peso máximo recomendado: **~200 KB** por foto da galeria, **~300 KB**
  para a foto do hero (ela carrega imediatamente, sem lazy loading).
- Resolução: não é necessário enviar em resolução maior que a exibida
  no site (a galeria exibe no máximo ~800px de largura). Fotos maiores
  só deixam o site mais lento sem ganho visual.

### 5. Mapa (Google Maps)

Arquivo: `index.html`, seção `#contato`, procure pelo comentário
`TROCAR AQUI`. O `src` do `<iframe>` hoje é gerado automaticamente a
partir do endereço em texto — funciona, mas o ideal é usar o link
oficial do Google Maps assim que o cliente enviar (Google Maps →
"Compartilhar" → "Incorporar um mapa" → copiar o `src` do `<iframe>`).

### 6. Cores da identidade visual

Arquivo: `css/theme.css` — é o único arquivo de cor do site (e o único
que muda ao adaptar este mesmo template para as outras duas escolas da
rede, Bela Vista Kids e Lumina). Contém apenas variáveis:

```css
--cor-primaria, --cor-primaria-escura, --cor-primaria-clara,
--cor-destaque, --cor-destaque-escura,
--cinza-texto, --cinza-borda, --branco
```

Os valores atuais são provisórios — ajuste-os para o azul e o amarelo
exatos da marca assim que o cliente enviar o logotipo oficial. Não é
necessário mexer em nenhum outro arquivo CSS.

**Regra de cor do cliente (vale para qualquer alteração futura):**
nenhum tom de vermelho em lugar nenhum do site; amarelo nunca como cor
de texto sobre fundo claro (só em fundos, faixas e detalhes).

### 7. Depoimentos

Arquivo: `js/main.js`, array `DEPOIMENTOS` (perto do topo do arquivo).
Os 4 itens atuais são placeholders claramente marcados. Basta substituir
`texto`, `nome` e `turma` de cada item pelos relatos reais que o
cliente enviar — o carrossel é montado automaticamente a partir desse
array, não precisa mexer no HTML.

## Checklist de conteúdo pendente

Veja a seção 11 de `PROJETO-MORIAH.md` — lista completa e atualizada
de tudo que está marcado como `PENDENTE`, `PROVISÓRIO`,
`CONFIRMAR COM O CLIENTE` ou `AUTORIZACAO PENDENTE` no código,
organizada por seção do site. Nada disso deve ir ao ar sem revisão do
cliente.
