// Ano atual no rodapé
const ano = document.getElementById('ano');
if (ano) ano.textContent = new Date().getFullYear();

// Menu do celular
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuBtn && nav) {
  const alternar = (abrir) => {
    nav.classList.toggle('aberto', abrir);
    menuBtn.setAttribute('aria-expanded', abrir);
    document.body.style.overflow = abrir ? 'hidden' : '';
  };
  menuBtn.addEventListener('click', () => alternar(!nav.classList.contains('aberto')));
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => alternar(false)));
}

// Elementos aparecem suavemente ao rolar a página
const revelar = document.querySelectorAll('.revelar');
if ('IntersectionObserver' in window) {
  const obs = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visivel');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  revelar.forEach((el) => obs.observe(el));
} else {
  revelar.forEach((el) => el.classList.add('visivel'));
}

// Ampliar imagens (portfólio e obras)
const links = document.querySelectorAll('a.ampliar');
if (links.length) {
  const caixa = document.createElement('div');
  caixa.className = 'lightbox';
  caixa.innerHTML = '<button aria-label="Fechar">&times;</button><img alt=""><p></p>';
  document.body.appendChild(caixa);
  const foto = caixa.querySelector('img');
  const legenda = caixa.querySelector('p');
  const fechar = () => caixa.classList.remove('aberto');
  links.forEach((a) => {
    a.addEventListener('click', (ev) => {
      ev.preventDefault();
      foto.src = a.href;
      foto.alt = a.querySelector('img').alt;
      const fig = a.closest('figure');
      const cap = fig && fig.querySelector('figcaption b');
      legenda.textContent = cap ? cap.textContent : '';
      caixa.classList.add('aberto');
    });
  });
  caixa.addEventListener('click', fechar);
  document.addEventListener('keydown', (ev) => { if (ev.key === 'Escape') fechar(); });
}

// Formulário de orçamento: monta a mensagem e abre o WhatsApp
const form = document.querySelector('#form-orcamento');
if (form) {
  form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const v = (nome) => (form.elements[nome].value || '').trim();
    let msg = 'Olá! Vim pelo site da GAE e gostaria de um orçamento.\n\n';
    msg += 'Nome: ' + v('nome') + '\n';
    msg += 'Serviço: ' + v('servico');
    if (v('cidade')) msg += '\nCidade: ' + v('cidade');
    if (v('detalhes')) msg += '\n\n' + v('detalhes');
    window.open('https://wa.me/5515997791768?text=' + encodeURIComponent(msg), '_blank', 'noopener');
  });
}
