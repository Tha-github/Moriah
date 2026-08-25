# Deploy — Escola de Educação Infantil Moriah

Site 100% estático. Não precisa de build, banco de dados, PHP ou
qualquer processamento no servidor — é só enviar os arquivos por FTP.

## Antes de publicar

1. Confira o checklist de pendências em `PROJETO-MORIAH.md` (seção 11)
   e em `README.md`. Idealmente, nada marcado como `PENDENTE` ou
   `PROVISÓRIO` deve ir ao ar sem revisão do cliente.
2. Troque o número de WhatsApp real em `js/main.js`
   (constante `WHATSAPP_NUMBER`) e no JSON-LD em `index.html`.
3. Confirme se todas as fotos (`assets/img/`) e o logotipo
   (`assets/logo.png`, `assets/logo-branco.png`) já foram substituídos
   pelos arquivos reais do cliente.
4. Atualize `css/theme.css` com as cores exatas da marca, se o cliente
   já tiver enviado o logotipo oficial.
5. Atualize a `<url><loc>` em `sitemap.xml` e o `og:url`/`canonical`
   em `index.html` se o domínio final for diferente de
   `escolainfantilmoriah.com.br`.

## Passo a passo — publicação via FTP

1. **Domínio e hospedagem**
   - A hospedagem anterior (G3 Sites) está suspensa. É preciso
     contratar uma nova hospedagem antes de publicar.
   - O domínio `escolainfantilmoriah.com.br` já está transferido para
     o Registro.br do cliente — falta apontar o DNS para o servidor da
     nova hospedagem (geralmente alterando os *nameservers* no painel
     do Registro.br para os fornecidos pela hospedagem).
   - **Importante:** este é o primeiro dos três sites da rede (Moriah,
     Bela Vista Kids, Lumina). Ao escolher o plano de hospedagem,
     confirme que ele permite **domínios adicionais** (add-on domains),
     para hospedar as três escolas na mesma conta sem custo extra de
     um novo plano para cada uma. Verifique também se existe alguma
     conta de e-mail vinculada ao domínio atual que precise ser
     preservada na migração de DNS (ver seção 8 e 11 do
     `PROJETO-MORIAH.md`).

2. **Dados de acesso FTP**
   - Normalmente fornecidos pelo painel da hospedagem (cPanel, Plesk
     ou similar): host/endereço FTP, usuário, senha e porta (21 para
     FTP, 22 se for SFTP).
   - Use um cliente FTP (ex.: FileZilla) ou o gerenciador de arquivos
     do próprio painel da hospedagem.

3. **Envio dos arquivos**
   - Conecte no FTP e navegue até a pasta pública do domínio
     (geralmente `public_html/`, `www/` ou `htdocs/` — varia por
     hospedagem).
   - Envie **todo o conteúdo** da pasta do projeto para essa pasta
     pública, mantendo a estrutura de diretórios:
     `index.html`, `sitemap.xml`, `robots.txt`, `/css`, `/js`,
     `/assets` (com todas as subpastas e imagens).
   - Não envie `PROJETO-MORIAH.md`, `README.md` ou `DEPLOY.md` — são
     documentos internos, não fazem parte do site publicado (não têm
     nenhum problema em subir junto, mas não é necessário).

4. **Teste pós-publicação**
   - Acesse o domínio e confira: header, menu mobile, hero, todas as
     seções, formulário de contato, mapa, galeria com lightbox,
     carrossel de depoimentos, FAQ e botão flutuante de WhatsApp.
   - Teste em pelo menos um celular real (não só no navegador do
     computador redimensionado).
   - Confirme que os links de WhatsApp abrem com o número correto.
   - Rode o site no
     [PageSpeed Insights](https://pagespeed.web.dev/) e no
     [Rich Results Test](https://search.google.com/test/rich-results)
     do Google (para validar o JSON-LD).

5. **Pós-publicação**
   - Cadastre o site no
     [Google Search Console](https://search.google.com/search-console)
     e envie o `sitemap.xml`.
   - Cadastre/atualize o
     [Google Meu Negócio](https://business.google.com/) da escola com
     o endereço, telefone e site — importante para SEO local em
     Osasco/Padroeira.

## Reaproveitamento para as outras escolas da rede

Ao adaptar este mesmo template para o Colégio Bela Vista Kids e para a
Lumina:

- Copie a estrutura de pastas inteira.
- Troque **apenas** `css/theme.css` (cores e referência do logo) e o
  conteúdo textual/fotos de `index.html`.
- `css/reset.css`, `css/base.css` e `css/components.css` foram
  escritos para serem **idênticos** nos três sites — não precisam de
  alteração.
- Publique cada escola como um domínio adicional dentro do mesmo plano
  de hospedagem (ver item 1 acima).
