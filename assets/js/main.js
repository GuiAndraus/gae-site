// Menu do celular
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const aberto = nav.classList.toggle('aberto');
    menuBtn.setAttribute('aria-expanded', aberto);
  });
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
  }, { threshold: 0.12 });
  revelar.forEach((el) => obs.observe(el));
} else {
  revelar.forEach((el) => el.classList.add('visivel'));
}

// Formulário de contato (enviado por e-mail via FormSubmit)
const form = document.querySelector('#form-contato');
if (form) {
  const msg = form.querySelector('.form__msg');
  const btn = form.querySelector('button');
  form.addEventListener('submit', async (ev) => {
    ev.preventDefault();
    btn.disabled = true;
    msg.textContent = '';
    msg.classList.remove('form__msg--erro');
    try {
      const resp = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!resp.ok) throw new Error(resp.status);
      form.reset();
      msg.textContent = 'Obrigado! Entraremos em contato o mais breve possível!';
    } catch (err) {
      msg.classList.add('form__msg--erro');
      msg.textContent = 'Não foi possível enviar agora. Tente novamente ou fale conosco pelo WhatsApp.';
    } finally {
      btn.disabled = false;
    }
  });
}
