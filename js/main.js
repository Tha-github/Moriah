// ============================================
// MAIN.JS — Interações do site
// Escola de Educação Infantil Moriah
// ============================================

(function () {
  'use strict';

  // PENDENTE: confirmar número oficial do WhatsApp da unidade com o cliente.
  // Formato esperado: 55DDDNUMERO (ex.: 5511999999999), sem espaços ou símbolos.
  const WHATSAPP_NUMBER = '5511999999999';

  // PLACEHOLDER: depoimentos de exemplo — o cliente enviará os relatos reais
  // das famílias pelo WhatsApp. Substituir os itens deste array quando
  // chegarem. Não usar nome de criança, apenas o nome do responsável.
  const DEPOIMENTOS = [
    {
      texto: 'Minha filha chegou tímida e hoje corre para a escola todos os dias. Sinto que ela é bem cuidada e acompanhada de perto.',
      nome: 'Fulana de Tal',
      turma: 'Responsável — turma do Berçário'
    },
    {
      texto: 'A comunicação da escola com a gente é muito próxima. Sempre sabemos como foi o dia do nosso filho.',
      nome: 'Beltrano da Silva',
      turma: 'Responsável — turma do Maternal II'
    },
    {
      texto: 'Um ambiente acolhedor, que trata cada criança com atenção individual. Recomendo de olhos fechados.',
      nome: 'Ciclana Souza',
      turma: 'Responsável — turma do Pré I'
    },
    {
      texto: 'Desde que veio para a Moriah, percebo uma evolução grande no desenvolvimento do nosso filho. Somos muito gratos.',
      nome: 'Sicrano Oliveira',
      turma: 'Responsável — turma do Pré II'
    }
  ];

  function montarLinkWhatsApp(mensagem) {
    const texto = encodeURIComponent(
      mensagem || 'Olá! Gostaria de agendar uma visita à Escola Moriah.'
    );
    return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + texto;
  }

  // Preenche todos os CTAs de WhatsApp da página (header, hero, drawer etc.)
  function inicializarBotoesWhatsApp() {
    document.querySelectorAll('[data-whatsapp-cta]').forEach(function (botao) {
      const mensagem = botao.getAttribute('data-message');
      botao.setAttribute('href', montarLinkWhatsApp(mensagem));
      botao.setAttribute('target', '_blank');
      botao.setAttribute('rel', 'noopener noreferrer');
    });
  }

  // Adiciona sombra ao header quando a página é rolada
  function inicializarSombraHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    const LIMIAR_SCROLL = 10;

    function atualizarSombra() {
      header.classList.toggle('scrolled', window.scrollY > LIMIAR_SCROLL);
    }

    atualizarSombra();
    window.addEventListener('scroll', atualizarSombra, { passive: true });
  }

  // Menu mobile (drawer): abrir, fechar, travar scroll do body e acessibilidade
  function inicializarDrawer() {
    const hamburger = document.getElementById('hamburger');
    const drawer = document.getElementById('mobile-drawer');
    const overlay = document.getElementById('drawer-overlay');
    const botaoFechar = document.getElementById('drawer-close');

    if (!hamburger || !drawer || !overlay || !botaoFechar) return;

    function abrirDrawer() {
      drawer.classList.add('is-open');
      overlay.hidden = false;
      hamburger.setAttribute('aria-expanded', 'true');
      drawer.setAttribute('aria-hidden', 'false');
      document.body.classList.add('no-scroll');
    }

    function fecharDrawer() {
      drawer.classList.remove('is-open');
      overlay.hidden = true;
      hamburger.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('no-scroll');
      hamburger.focus();
    }

    hamburger.addEventListener('click', function () {
      const estaAberto = hamburger.getAttribute('aria-expanded') === 'true';
      if (estaAberto) {
        fecharDrawer();
      } else {
        abrirDrawer();
      }
    });

    overlay.addEventListener('click', fecharDrawer);
    botaoFechar.addEventListener('click', fecharDrawer);

    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', fecharDrawer);
    });

    document.addEventListener('keydown', function (evento) {
      if (evento.key === 'Escape' && drawer.classList.contains('is-open')) {
        fecharDrawer();
      }
    });
  }

  // Scroll spy: destaca no menu desktop o link da seção visível
  function inicializarScrollSpy() {
    const links = Array.from(document.querySelectorAll('.nav-desktop .nav-link'));
    if (!links.length || !('IntersectionObserver' in window)) return;

    const secoes = links
      .map(function (link) {
        const id = link.getAttribute('href').replace('#', '');
        return document.getElementById(id);
      })
      .filter(Boolean);

    if (!secoes.length) return;

    const observador = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (entrada) {
          if (!entrada.isIntersecting) return;
          const linkAtivo = document.querySelector(
            '.nav-desktop .nav-link[href="#' + entrada.target.id + '"]'
          );
          if (!linkAtivo) return;
          links.forEach(function (link) {
            link.classList.remove('is-active');
          });
          linkAtivo.classList.add('is-active');
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    secoes.forEach(function (secao) {
      observador.observe(secao);
    });
  }

  // Revela os cards de diferenciais com animação escalonada ao entrar na tela
  function inicializarAnimacaoCards() {
    const cards = Array.from(document.querySelectorAll('.card-diferencial'));
    if (!cards.length) return;

    if (!('IntersectionObserver' in window)) {
      cards.forEach(function (card) { card.classList.add('is-visible'); });
      return;
    }

    const observador = new IntersectionObserver(
      function (entradas, obs) {
        entradas.forEach(function (entrada) {
          if (!entrada.isIntersecting) return;
          const card = entrada.target;
          const indice = cards.indexOf(card);
          setTimeout(function () {
            card.classList.add('is-visible');
          }, indice * 90);
          obs.unobserve(card);
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach(function (card) {
      observador.observe(card);
    });
  }

  // Lightbox da galeria de estrutura: abrir/fechar, navegação, swipe e foco
  function inicializarLightbox() {
    const botoes = Array.from(document.querySelectorAll('.galeria__botao'));
    const lightbox = document.getElementById('lightbox');
    if (!botoes.length || !lightbox) return;

    const imgEl = document.getElementById('lightbox-img');
    const legendaEl = document.getElementById('lightbox-legenda');
    const btnFechar = document.getElementById('lightbox-fechar');
    const btnAnterior = document.getElementById('lightbox-anterior');
    const btnProxima = document.getElementById('lightbox-proxima');

    const fotos = botoes.map(function (botao) {
      const img = botao.querySelector('img');
      const legenda = botao.querySelector('.galeria__legenda');
      return {
        src: img.getAttribute('src'),
        alt: img.getAttribute('alt'),
        legenda: legenda ? legenda.textContent : ''
      };
    });

    let indiceAtual = 0;
    let elementoOrigem = null;
    let inicioToqueX = null;

    function mostrarFoto(indice) {
      indiceAtual = (indice + fotos.length) % fotos.length;
      const foto = fotos[indiceAtual];
      imgEl.setAttribute('src', foto.src);
      imgEl.setAttribute('alt', foto.alt);
      legendaEl.textContent = foto.legenda;
    }

    function aoTeclar(evento) {
      if (evento.key === 'Escape') fecharLightbox();
      if (evento.key === 'ArrowLeft') mostrarFoto(indiceAtual - 1);
      if (evento.key === 'ArrowRight') mostrarFoto(indiceAtual + 1);
    }

    function abrirLightbox(indice, origem) {
      elementoOrigem = origem;
      mostrarFoto(indice);
      lightbox.hidden = false;
      document.body.classList.add('no-scroll');
      btnFechar.focus();
      document.addEventListener('keydown', aoTeclar);
    }

    function fecharLightbox() {
      lightbox.hidden = true;
      document.body.classList.remove('no-scroll');
      document.removeEventListener('keydown', aoTeclar);
      if (elementoOrigem) elementoOrigem.focus();
    }

    botoes.forEach(function (botao, indice) {
      botao.addEventListener('click', function () {
        abrirLightbox(indice, botao);
      });
    });

    btnFechar.addEventListener('click', fecharLightbox);
    btnAnterior.addEventListener('click', function () { mostrarFoto(indiceAtual - 1); });
    btnProxima.addEventListener('click', function () { mostrarFoto(indiceAtual + 1); });

    // Fecha ao clicar fora da foto (na área escura de fundo)
    lightbox.addEventListener('click', function (evento) {
      if (evento.target === lightbox) fecharLightbox();
    });

    // Swipe no mobile
    lightbox.addEventListener('touchstart', function (evento) {
      inicioToqueX = evento.touches[0].clientX;
    }, { passive: true });

    lightbox.addEventListener('touchend', function (evento) {
      if (inicioToqueX === null) return;
      const LIMIAR_SWIPE = 40;
      const diferenca = evento.changedTouches[0].clientX - inicioToqueX;
      if (diferenca > LIMIAR_SWIPE) {
        mostrarFoto(indiceAtual - 1);
      } else if (diferenca < -LIMIAR_SWIPE) {
        mostrarFoto(indiceAtual + 1);
      }
      inicioToqueX = null;
    });
  }

  // Carrossel de depoimentos: renderiza os cards a partir do array
  // DEPOIMENTOS e liga setas, bullets, swipe, teclado e autoplay pausável
  function inicializarCarrossel() {
    const carrossel = document.getElementById('carrossel-depoimentos');
    const trilho = document.getElementById('depoimentos-trilho');
    const bulletsContainer = document.getElementById('depoimentos-bullets');
    const btnAnterior = document.getElementById('depoimentos-anterior');
    const btnProxima = document.getElementById('depoimentos-proxima');

    if (!carrossel || !trilho || !bulletsContainer || !DEPOIMENTOS.length) return;

    trilho.innerHTML = DEPOIMENTOS.map(function (depoimento, indice) {
      return (
        '<article class="card-depoimento" role="group" aria-roledescription="slide" aria-label="Depoimento ' +
        (indice + 1) + ' de ' + DEPOIMENTOS.length + '">' +
        '<span class="card-depoimento__aspas" aria-hidden="true">&ldquo;</span>' +
        '<p class="card-depoimento__texto">' + depoimento.texto + '</p>' +
        '<p class="card-depoimento__nome">' + depoimento.nome + '</p>' +
        '<p class="card-depoimento__turma">' + depoimento.turma + '</p>' +
        '</article>'
      );
    }).join('');

    bulletsContainer.innerHTML = DEPOIMENTOS.map(function (_, indice) {
      return (
        '<button type="button" class="carrossel__bullet" data-indice="' + indice +
        '" role="tab" aria-label="Ir para o depoimento ' + (indice + 1) + '"></button>'
      );
    }).join('');

    const cards = Array.from(trilho.children);
    const bullets = Array.from(bulletsContainer.children);
    const INTERVALO_AUTOPLAY = 6000;
    let indiceAtual = 0;
    let temporizador = null;
    let scrollTimeout = null;

    function atualizarBullets() {
      bullets.forEach(function (bullet, indice) {
        const ativo = indice === indiceAtual;
        bullet.classList.toggle('is-ativo', ativo);
        bullet.setAttribute('aria-selected', ativo ? 'true' : 'false');
      });
    }

    function irPara(indice) {
      indiceAtual = (indice + cards.length) % cards.length;
      trilho.scrollTo({
        left: cards[indiceAtual].offsetLeft - trilho.offsetLeft,
        behavior: 'smooth'
      });
      atualizarBullets();
    }

    function proximo() { irPara(indiceAtual + 1); }
    function anterior() { irPara(indiceAtual - 1); }

    function pararAutoplay() {
      if (temporizador) clearInterval(temporizador);
      temporizador = null;
    }

    function iniciarAutoplay() {
      pararAutoplay();
      temporizador = setInterval(proximo, INTERVALO_AUTOPLAY);
    }

    function reiniciarAutoplayAposInteracao() {
      pararAutoplay();
      iniciarAutoplay();
    }

    if (btnProxima) {
      btnProxima.addEventListener('click', function () {
        proximo();
        reiniciarAutoplayAposInteracao();
      });
    }

    if (btnAnterior) {
      btnAnterior.addEventListener('click', function () {
        anterior();
        reiniciarAutoplayAposInteracao();
      });
    }

    bullets.forEach(function (bullet) {
      bullet.addEventListener('click', function () {
        irPara(Number(bullet.getAttribute('data-indice')));
        reiniciarAutoplayAposInteracao();
      });
    });

    trilho.addEventListener('keydown', function (evento) {
      if (evento.key === 'ArrowRight') {
        proximo();
        reiniciarAutoplayAposInteracao();
      } else if (evento.key === 'ArrowLeft') {
        anterior();
        reiniciarAutoplayAposInteracao();
      }
    });

    // Mantém o bullet ativo sincronizado quando o usuário arrasta (swipe)
    trilho.addEventListener('scroll', function () {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(function () {
        let maisProximo = 0;
        let menorDistancia = Infinity;
        cards.forEach(function (card, indice) {
          const distancia = Math.abs(card.offsetLeft - trilho.offsetLeft - trilho.scrollLeft);
          if (distancia < menorDistancia) {
            menorDistancia = distancia;
            maisProximo = indice;
          }
        });
        indiceAtual = maisProximo;
        atualizarBullets();
      }, 100);
    }, { passive: true });

    const prefereReduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefereReduzirMovimento) {
      iniciarAutoplay();
      carrossel.addEventListener('mouseenter', pararAutoplay);
      carrossel.addEventListener('mouseleave', iniciarAutoplay);
      carrossel.addEventListener('focusin', pararAutoplay);
      carrossel.addEventListener('focusout', iniciarAutoplay);
    }

    atualizarBullets();
  }

  // Accordion do FAQ: um item aberto por vez, com navegação por setas
  // (padrão WAI-ARIA de accordion) entre os cabeçalhos
  function inicializarAccordion() {
    const itens = Array.from(document.querySelectorAll('.accordion__item'));
    if (!itens.length) return;

    const botoes = itens.map(function (item) {
      return item.querySelector('.accordion__botao');
    });
    const paineis = itens.map(function (item) {
      return item.querySelector('.accordion__painel');
    });

    function fecharPainel(indice) {
      botoes[indice].setAttribute('aria-expanded', 'false');
      paineis[indice].classList.remove('is-aberto');
      paineis[indice].setAttribute('aria-hidden', 'true');
    }

    function abrirPainel(indice) {
      botoes.forEach(function (botao, i) {
        if (i !== indice) fecharPainel(i);
      });
      botoes[indice].setAttribute('aria-expanded', 'true');
      paineis[indice].classList.add('is-aberto');
      paineis[indice].setAttribute('aria-hidden', 'false');
    }

    botoes.forEach(function (botao, indice) {
      botao.addEventListener('click', function () {
        const estaAberto = botao.getAttribute('aria-expanded') === 'true';
        if (estaAberto) {
          fecharPainel(indice);
        } else {
          abrirPainel(indice);
        }
      });

      botao.addEventListener('keydown', function (evento) {
        let novoIndice = null;
        if (evento.key === 'ArrowDown') novoIndice = (indice + 1) % botoes.length;
        if (evento.key === 'ArrowUp') novoIndice = (indice - 1 + botoes.length) % botoes.length;
        if (evento.key === 'Home') novoIndice = 0;
        if (evento.key === 'End') novoIndice = botoes.length - 1;
        if (novoIndice !== null) {
          evento.preventDefault();
          botoes[novoIndice].focus();
        }
      });
    });
  }

  // Aplica a máscara (00) 00000-0000 / (00) 0000-0000 enquanto o usuário digita
  function mascararTelefone(valor) {
    const digitos = valor.replace(/\D/g, '').slice(0, 11);
    const tamanho = digitos.length;

    if (tamanho === 0) return '';
    if (tamanho <= 2) return '(' + digitos;
    if (tamanho <= 6) return '(' + digitos.slice(0, 2) + ') ' + digitos.slice(2);
    if (tamanho <= 10) return '(' + digitos.slice(0, 2) + ') ' + digitos.slice(2, 6) + '-' + digitos.slice(6);
    return '(' + digitos.slice(0, 2) + ') ' + digitos.slice(2, 7) + '-' + digitos.slice(7);
  }

  // Formulário de contato: máscara de telefone, validação no submit e
  // envio da mensagem pronta para o WhatsApp (sem backend)
  function inicializarFormularioContato() {
    const form = document.getElementById('form-contato');
    if (!form) return;

    const campoNome = document.getElementById('campo-nome');
    const campoTelefone = document.getElementById('campo-telefone');
    const campoTurma = document.getElementById('campo-turma');
    const campoMensagem = document.getElementById('campo-mensagem');
    const erroNome = document.getElementById('erro-nome');
    const erroTelefone = document.getElementById('erro-telefone');
    const erroTurma = document.getElementById('erro-turma');

    campoTelefone.addEventListener('input', function () {
      campoTelefone.value = mascararTelefone(campoTelefone.value);
    });

    function definirErro(campo, elementoErro, mensagem) {
      elementoErro.textContent = mensagem ? '⚠ ' + mensagem : '';
      if (mensagem) {
        campo.setAttribute('aria-invalid', 'true');
      } else {
        campo.removeAttribute('aria-invalid');
      }
    }

    form.addEventListener('submit', function (evento) {
      evento.preventDefault();

      definirErro(campoNome, erroNome, '');
      definirErro(campoTelefone, erroTelefone, '');
      definirErro(campoTurma, erroTurma, '');

      const nome = campoNome.value.trim();
      const telefoneDigitos = campoTelefone.value.replace(/\D/g, '');
      const turma = campoTurma.value;
      const mensagem = campoMensagem.value.trim();

      let primeiroCampoComErro = null;

      if (nome.length < 3) {
        definirErro(campoNome, erroNome, 'Informe um nome com pelo menos 3 letras.');
        primeiroCampoComErro = primeiroCampoComErro || campoNome;
      }

      if (telefoneDigitos.length !== 10 && telefoneDigitos.length !== 11) {
        definirErro(campoTelefone, erroTelefone, 'Informe um telefone válido, com DDD.');
        primeiroCampoComErro = primeiroCampoComErro || campoTelefone;
      }

      if (!turma) {
        definirErro(campoTurma, erroTurma, 'Selecione uma turma de interesse.');
        primeiroCampoComErro = primeiroCampoComErro || campoTurma;
      }

      if (primeiroCampoComErro) {
        primeiroCampoComErro.focus();
        return;
      }

      let textoMensagem = 'Olá! Meu nome é ' + nome + '. Tenho interesse na turma ' + turma + ' para o meu filho.';
      if (mensagem) textoMensagem += ' ' + mensagem;
      textoMensagem += ' Meu contato: ' + campoTelefone.value;

      window.open(montarLinkWhatsApp(textoMensagem), '_blank', 'noopener');
    });
  }

  // Botão flutuante de WhatsApp: aparece após 300px de rolagem e some
  // enquanto o botão de envio do formulário estiver visível, para não cobri-lo
  function inicializarWhatsAppFlutuante() {
    const botao = document.getElementById('whatsapp-flutuante');
    if (!botao) return;

    const botaoEnviar = document.getElementById('contato-enviar');
    const LIMIAR_SCROLL = 300;
    let ocultoPeloFormulario = false;

    function atualizarVisibilidade() {
      const deveAparecer = window.scrollY > LIMIAR_SCROLL && !ocultoPeloFormulario;
      botao.classList.toggle('is-visivel', deveAparecer);
    }

    window.addEventListener('scroll', atualizarVisibilidade, { passive: true });

    if (botaoEnviar && 'IntersectionObserver' in window) {
      const observador = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (entrada) {
          ocultoPeloFormulario = entrada.isIntersecting;
          atualizarVisibilidade();
        });
      });
      observador.observe(botaoEnviar);
    }

    atualizarVisibilidade();
  }

  // Ano dinâmico na barra inferior do rodapé
  function inicializarAnoRodape() {
    const elementoAno = document.getElementById('ano-atual');
    if (!elementoAno) return;
    elementoAno.textContent = new Date().getFullYear();
  }

  document.addEventListener('DOMContentLoaded', function () {
    inicializarBotoesWhatsApp();
    inicializarSombraHeader();
    inicializarDrawer();
    inicializarScrollSpy();
    inicializarAnimacaoCards();
    inicializarLightbox();
    inicializarCarrossel();
    inicializarAccordion();
    inicializarFormularioContato();
    inicializarWhatsAppFlutuante();
    inicializarAnoRodape();
  });
})();
