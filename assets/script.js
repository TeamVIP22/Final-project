// Utility functions for user registration and login system

/**
 * Get user profile data dari localStorage
 * Mengembalikan data registrasi jika tersedia, atau data dummy
 */
function getUserProfile() {
  const profileData = JSON.parse(localStorage.getItem('profileData') || '{}');
  return {
    fullName: profileData.fullName || 'Pengguna',
    email: profileData.email || '',
    phone: profileData.phone || '',
    university: profileData.university || '',
    major: profileData.major || '',
    skills: profileData.skills || [],
    bio: profileData.bio || '',
    isRegistered: profileData.isRegistered || false
  };
}

/**
 * Get user registry data berdasarkan email
 * Mengembalikan data registrasi lengkap atau null
 */
function getUserByEmail(email) {
  const userRegistry = JSON.parse(localStorage.getItem('userRegistry') || '{}');
  return userRegistry[email] || null;
}

/**
 * Update user profile data
 * Sinkronisasi dengan userRegistry jika user sudah terdaftar
 */
function updateUserProfile(updates) {
  const profileData = JSON.parse(localStorage.getItem('profileData') || '{}');
  const userLogin = JSON.parse(localStorage.getItem('userLogin') || '{}');
  
  Object.assign(profileData, updates);
  localStorage.setItem('profileData', JSON.stringify(profileData));
  
  // Update di userRegistry jika user terdaftar
  if (profileData.isRegistered && userLogin.email) {
    const userRegistry = JSON.parse(localStorage.getItem('userRegistry') || '{}');
    if (userRegistry[userLogin.email]) {
      Object.assign(userRegistry[userLogin.email], updates);
      localStorage.setItem('userRegistry', JSON.stringify(userRegistry));
    }
  }
}

/**
 * Check apakah user sudah login
 */
function isUserLoggedIn() {
  const userLogin = localStorage.getItem('userLogin');
  return userLogin ? JSON.parse(userLogin) : null;
}

/**
 * Check apakah user sudah register dengan email tertentu
 */
function isUserRegistered(email) {
  const userRegistry = JSON.parse(localStorage.getItem('userRegistry') || '{}');
  return userRegistry[email] && userRegistry[email].isRegistered;
}

// Original script.js code
document.addEventListener('DOMContentLoaded', function(){
  var y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();

  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  if(navToggle && mainNav){
    navToggle.addEventListener('click', function(){
      mainNav.classList.toggle('open');
    });
  }

  var ctas = document.querySelectorAll('#ctaBtn');
  ctas.forEach(function(b){
    b.addEventListener('click', function(){
      window.location.href = 'register.html';
    });
  });

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
