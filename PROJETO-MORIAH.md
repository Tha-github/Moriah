# Escola de Educação Infantil Moriah — Site Institucional

## 1. Visão geral

| Item | Valor |
|---|---|
| Escola | Escola de Educação Infantil Moriah |
| Responsável | Wesley Conceição |
| Domínio | escolainfantilmoriah.com.br |
| Segmento | Educação Infantil |
| Endereço | Av. José Barbosa de Siqueira, 1018 — Padroeira, Osasco (SP) |
| Instagram | https://www.instagram.com/escoladeeducacaoinfantilmoriah |
| Tipo de site | One-page institucional |
| Objetivo principal | Gerar leads (matrículas) via WhatsApp |
| Objetivo secundário | Apresentar a escola e sua estrutura |

## 2. Situação atual

- Hospedagem anterior na G3 Sites está SUSPENSA — o site está fora do ar
- Domínio já transferido para o ID do cliente no Registro.br
- O site antigo tinha conteúdo DUPLICADO de outra escola da rede: a
  página "Quem somos" contava a história do Colégio Bela Vista Kids.
  Não usar o conteúdo antigo como fonte para nada.
- Este é o primeiro dos três sites da rede (Moriah, Bela Vista Kids e
  Lumina). A estrutura de arquivos deve permitir reaproveitamento.

## 3. Público-alvo

Pais e responsáveis que buscam escola para os filhos, moradores do
bairro Padroeira e região, em Osasco.

Tom de comunicação: acolhedor, afetivo, tranquilizador. Sem jargão
pedagógico pesado. A dúvida central de quem visita o site é "meu filho
vai ficar bem aqui?" — todo o conteúdo precisa responder isso.

Prioridade declarada pelo cliente sobre o que destacar: **fotos da
escola no geral**. A galeria de estrutura é a seção mais importante.

## 4. Estrutura de seções

1. Header fixo com navegação por âncoras
2. Hero com CTA "Agende uma visita"
3. Diferenciais da escola
4. Turmas e faixas etárias
5. Proposta pedagógica
6. Estrutura e instalações (galeria) — seção principal
7. Rotina do dia a dia
8. Depoimentos de famílias
9. FAQ
10. Faixa de CTA
11. Contato: formulário + mapa
12. Rodapé
13. Botão flutuante de WhatsApp

## 5. Identidade visual

### Paleta

| Token | Uso | Hex |
|---|---|---|
| `--azul` | Cor principal, títulos, header | `#1B5FA8` |
| `--azul-escuro` | Texto principal, rodapé | `#123F6E` |
| `--azul-claro` | Fundos de seção, cards | `#E8F1FA` |
| `--amarelo` | Destaques, faixas, detalhes | `#F5C518` |
| `--amarelo-escuro` | Botões, hover | `#D9A400` |
| `--cinza-texto` | Texto secundário | `#5A6672` |
| `--cinza-borda` | Bordas e divisores | `#DDE3E8` |
| `--branco` | Fundo base | `#FFFFFF` |

> Valores provisórios. Ajustar quando o cliente enviar o logotipo,
> extraindo o azul e o amarelo exatos da marca.

### Regras de cor

- **PROIBIDO vermelho** em qualquer tom. O cliente vetou explicitamente.
- **PROIBIDO preto puro** (`#000`). Texto escuro usa `--azul-escuro`.
- **Amarelo nunca como cor de texto** sobre fundo claro: não passa em
  contraste. Só em fundos, faixas, ícones e detalhes decorativos, sempre
  com texto azul escuro por cima.
- Botões: fundo `--azul` com texto branco, ou fundo `--amarelo` com
  texto `--azul-escuro`. Testar os dois e usar o que passar melhor em AA.
- Predominância de branco e azul claro, para o site não cansar a leitura.

### Tipografia

- Títulos: **Poppins** (500, 600)
- Corpo e interface: **Inter** (400, 500)
- Google Fonts com `display=swap` e preconnect
- Escala: 14 / 16 / 18 / 20 / 24 / 30 / 38 / 48 px
- Corpo com `line-height` 1.7 e largura máxima de 65ch

### Espaçamento

Escala de 8px: 8 / 16 / 24 / 32 / 48 / 64 / 96 px.
Padding vertical de seção: 96px desktop, 64px mobile.

### Estilo geral

Claro, arejado, acolhedor. Cantos arredondados de 12 a 16px, sombras
suaves, formas orgânicas. Fotos grandes com bordas arredondadas.
Sem elementos duros ou corporativos, mas também sem infantilização
excessiva — quem decide a matrícula são os pais, não as crianças.

### Referência

**objetivo.br** — site institucional de escola, limpo, organizado, com
navegação clara. Usar como referência de ESTRUTURA e ORGANIZAÇÃO, nunca
de paleta ou tom. A Moriah é educação infantil: precisa ser mais afetiva
e menos corporativa que a referência.

### Diretriz de layout do cliente

"Que seja intuitivo, de fácil manuseio." Na prática: navegação óbvia,
poucos cliques até o contato, botão de WhatsApp sempre visível, nada
escondido em menus profundos.

## 6. Regras técnicas

- HTML5 semântico, CSS moderno (Grid/Flex + variáveis), JavaScript vanilla
- Sem frameworks, sem dependências externas, sem build. O site roda como
  arquivos estáticos enviados por FTP.
- Caminhos relativos em todos os assets
- Mobile-first: a maioria dos pais acessa pelo celular
- Testar em 375 / 768 / 1024 / 1440px
- Zero scroll horizontal em qualquer largura
- Área de toque mínima de 44x44px
- Imagens com `loading="lazy"`, `alt` descritivo, `width` e `height`
  explícitos para evitar layout shift
- Acessibilidade: labels, aria-labels, foco visível, navegação por teclado
- Contraste WCAG AA em todas as combinações
- SEO local: "escola infantil Osasco", "educação infantil Padroeira",
  "berçário Osasco"
- JSON-LD do tipo `School` com endereço e contato
- Código comentado em português

### Separação de arquivos (para reaproveitar nas outras escolas)

- `theme.css` — APENAS variáveis de cor e referência ao logo. Único
  arquivo que muda ao adaptar o template para Bela Vista Kids e Lumina.
- `base.css` e `components.css` — idênticos nos três sites.

## 7. Estrutura de arquivos
/
├── index.html
├── PROJETO-MORIAH.md
├── README.md
├── DEPLOY.md
├── sitemap.xml
├── robots.txt
├── /css
│ ├── reset.css
│ ├── base.css
│ ├── components.css
│ └── theme.css
├── /js
│ └── main.js
└── /assets
├── /img
└── logo.png


## 8. Integrações

- **Instagram:** https://www.instagram.com/escoladeeducacaoinfantilmoriah
  (confirmar com o cliente: encontrei também o perfil
  @escolainfantil.moriah — verificar qual está ativo)
- **Formulário de contato:** SIM, sem backend. Monta a mensagem e abre
  `https://wa.me/55DDDNUMERO?text=...`
- **Google Maps:** SIM. O cliente confirmou que quer, mas ainda não
  enviou o link. Usar o endereço da seção 1 para gerar o embed.
- **E-mail:** o cliente citou "termos de mail" no briefing. Confirmar se
  quer campo de e-mail no formulário, um endereço de contato exibido no
  site, ou os dois.
- **WhatsApp:** número a definir — constante `WHATSAPP_NUMBER` em
  `js/main.js`.

## 9. LGPD e imagem de menores

Regra inegociável em site de escola infantil:

- Nenhuma foto de criança pode ser publicada sem autorização escrita
  dos pais ou responsáveis.
- Onde houver foto com criança, marcar a tag no HTML com o comentário
  `AUTORIZACAO PENDENTE` até a confirmação do cliente.
- Priorizar fotos de ambiente vazio, detalhes da estrutura e imagens em
  que a criança não seja identificável.
- `alt` das fotos da galeria deve descrever o AMBIENTE, não pessoas.
- Não usar nome de criança em depoimentos — apenas o nome do responsável.
- Incluir aviso de privacidade discreto abaixo do formulário e no rodapé.

## 10. Regra de conteúdo — não inventar

O briefing veio incompleto. O cliente respondeu "podemos alinhar depois"
em vários campos. Por isso, vale a regra:

**Nunca afirmar no site nada que não esteja confirmado neste documento.**

Especificamente, NÃO inventar:
- Faixas etárias e turmas
- Ano de fundação ou tempo de mercado
- Número de alunos, turmas ou professores
- Nome de metodologia (Montessori, construtivismo, BNCC etc.)
- Sistema de ensino, material didático ou parcerias
- Certificações, prêmios ou autorizações
- Horários, valores, cardápio ou política de matrícula
- Atividades extracurriculares

Onde a informação faltar, usar texto genérico e seguro, marcado no HTML
com um destes comentários: `PENDENTE`, `TEXTO PROVISÓRIO`,
`CONFIRMAR COM O CLIENTE`.

Na Etapa 10, todos esses marcadores devem ser compilados em uma lista
única, que será o checklist de revisão enviado ao cliente antes da
publicação.

## 11. Pendências com o cliente

Checklist final, gerado na Etapa 10 a partir de todos os comentários
`PENDENTE`, `TEXTO PROVISÓRIO`, `CONFIRMAR COM O CLIENTE` e
`AUTORIZACAO PENDENTE` deixados no código, organizado por seção do
site (ordem de leitura do `index.html`). Este é o checklist a enviar
ao cliente antes da publicação — nada aqui deve ir ao ar sem revisão.

### Header e menu
- [ ] Logotipo colorido (`assets/logo.png`) — enquanto não chega, o
      header exibe o nome da escola em texto

### Hero
- [ ] Foto principal do hero (`assets/img/hero.jpg`)
- [ ] Faixa etária atendida (a partir de qual idade)
- [ ] Período(s) de atendimento (manhã, tarde, integral)
- [ ] Bairro/região a exibir publicamente (endereço já confirmado na
      seção 1, mas o texto exato da faixa do hero ficou como placeholder)

### Diferenciais (#sobre)
- [ ] Confirmar os 6 diferenciais reais da escola — atualmente com
      títulos genéricos e seguros (Ambiente seguro e acolhedor, Equipe
      qualificada, Turmas reduzidas, Comunicação próxima com as
      famílias, Espaço planejado para crianças, Rotina com atividades
      lúdicas) e descrições qualitativas, sem números nem nomes de
      metodologia

### Turmas (#turmas)
- [ ] Confirmar se Berçário, Maternal I, Maternal II, Pré I e Pré II
      são de fato as turmas oferecidas pela unidade
- [ ] Faixa etária de cada turma (hoje como placeholder "x a y anos")
- [ ] Períodos de atendimento realmente oferecidos (Manhã / Tarde /
      Integral, exibidos como placeholder abaixo do grid de turmas)

### Proposta pedagógica (#proposta)
- [ ] Texto oficial da proposta pedagógica (2 parágrafos atuais são
      genéricos e provisórios, sem citar metodologia, material
      didático, sistema de ensino, parcerias ou certificações)
- [ ] Os 3 pilares (Acolhimento diário, Aprendizado pelo brincar,
      Respeito ao tempo de cada criança) também são provisórios
- [ ] Foto da seção (`assets/img/proposta.jpg`)
- [ ] Se a foto mostrar criança identificável, autorização de imagem
      por escrito dos responsáveis antes de publicar

### Estrutura e galeria (#estrutura) — seção mais importante do site
- [ ] As 10 fotos da galeria (`assets/img/estrutura-1.jpg` a
      `estrutura-10.jpg`) — prioridade máxima segundo o cliente
- [ ] Legenda exata de cada foto (hoje: Recepção, Sala de aula, Parque,
      Berçário, Refeitório, Brinquedoteca, Pátio — em duplicidade em
      algumas fotos, como placeholder)
- [ ] Se alguma foto real mostrar criança identificável, autorização
      de imagem por escrito antes de publicar (priorizar fotos de
      ambiente vazio, como já orientado na seção 9)

### Rotina (#rotina)
- [ ] Horários de cada momento do dia (Acolhida, Atividades, Lanche,
      Parque, Descanso, Saída) — todos como placeholder "A confirmar"

### Depoimentos
- [ ] Relatos reais das famílias, para substituir os 4 placeholders
      do array `DEPOIMENTOS` em `js/main.js` (nomes fictícios "Fulana
      de Tal", "Beltrano da Silva" etc.) — o cliente enviará pelo
      WhatsApp
- [ ] Ao cadastrar os relatos reais, usar apenas o nome do responsável,
      nunca o nome da criança

### Dúvidas / FAQ (#duvidas)
- [ ] Respostas oficiais das 7 perguntas — todas as respostas atuais
      são genéricas e provisórias, sem valores, horários, cardápio ou
      política de matrícula

### Contato, mapa e rodapé
- [ ] Número de WhatsApp da unidade (constante `WHATSAPP_NUMBER` em
      `js/main.js` — hoje um placeholder usado em todos os CTAs do site,
      inclusive o telefone do JSON-LD em `index.html`)
- [ ] Telefone fixo, se houver
- [ ] E-mail de contato (exibido como "E-mail a confirmar")
- [ ] Confirmar qual perfil do Instagram está ativo:
      `@escoladeeducacaoinfantilmoriah` ou `@escolainfantil.moriah`
- [ ] Link oficial do Google Maps (o `<iframe>` atual é gerado a partir
      do endereço em texto — funciona, mas não é o link oficial do
      Google Meu Negócio da escola)
- [ ] Logo em versão clara (`assets/logo-branco.png`) para o rodapé

### SEO e itens técnicos
- [ ] Imagem de compartilhamento — `assets/img/og-image.jpg`
      (1200×630px), usada no Open Graph e no Twitter Card
- [ ] CEP da unidade — não informado em nenhum momento do briefing;
      falta no endereço estruturado (JSON-LD)
- [ ] Confirmar o domínio final do `og:url`/`canonical`/`sitemap.xml`
      caso não seja `escolainfantilmoriah.com.br`
- [ ] Gerar o conjunto completo de favicon (PNG/ICO em vários tamanhos)
      a partir do logotipo oficial — hoje o site usa um favicon SVG
      funcional, mas provisório

### Outras informações institucionais (ainda sem espaço no site)
Nenhum destes dados foi informado até agora, por isso não aparecem em
nenhuma seção — não foram inventados nem usados como placeholder. Se o
cliente enviar, avaliar em qual seção incluir:
- [ ] Ano de fundação da unidade / tempo de mercado
- [ ] Atividades extracurriculares oferecidas
- [ ] Sistema de ensino, material didático ou parcerias
- [ ] Certificações ou prêmios

### Materiais gerais
- [ ] Cores exatas da identidade visual (ajustar `css/theme.css`
      quando o logotipo oficial chegar)

### Infraestrutura
- [ ] Definir a nova hospedagem
- [ ] Confirmar se o plano permite domínios adicionais (para hospedar
      as três escolas no mesmo plano)
- [ ] Verificar se existe conta de e-mail vinculada ao domínio que
      precise ser preservada na migração de DNS