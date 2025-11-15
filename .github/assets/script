// Small script for nav toggle, year and simple form behavior
document.addEventListener('DOMContentLoaded', function(){
  // set year in footer
  var y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  // nav toggle for small screens
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  if(navToggle && mainNav){
    navToggle.addEventListener('click', function(){
      mainNav.classList.toggle('open');
    });
  }

  // CTA buttons navigate to contact by default
  var ctas = document.querySelectorAll('#ctaBtn');
  ctas.forEach(function(b){
    b.addEventListener('click', function(){
      window.location.href = 'contact.html';
    });
  });

  // simple contact form submission (no backend) — shows a quick message
  var contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(ev){
      ev.preventDefault();
      var btn = contactForm.querySelector('button[type="submit"]');
      var orig = btn.textContent;
      btn.textContent = 'Sending...';
      setTimeout(function(){
        btn.textContent = 'Sent ✓';
        contactForm.reset();
        setTimeout(function(){ btn.textContent = orig; }, 2000);
      }, 800);
    });
  }
});
