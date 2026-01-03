/**
 * Vinex Industry - Utility Functions
 * Helper functions untuk manajemen data industri
 */

// ============================================
// AUTHENTICATION & SESSION MANAGEMENT
// ============================================

function isIndustryLoggedIn() {
  const login = localStorage.getItem('industryLogin');
  return login ? JSON.parse(login) : null;
}

function getIndustryProfile() {
  const profile = localStorage.getItem('industryProfile');
  return profile ? JSON.parse(profile) : {};
}

function setIndustryLogin(email, companyName) {
  const loginData = {
    email: email,
    name: companyName,
    isLoggedIn: true,
    loginTime: new Date().toISOString()
  };
  localStorage.setItem('industryLogin', JSON.stringify(loginData));
}

function logout() {
  localStorage.removeItem('industryLogin');
  localStorage.removeItem('industryProfile');
  window.location.href = 'index.html';
}

// ============================================
// PROJECT MANAGEMENT
// ============================================

function createProject(projectData) {
  const project = {
    id: Date.now(),
    ...projectData,
    createdAt: new Date().toISOString(),
    status: 'Available'
  };
  
  const projects = JSON.parse(localStorage.getItem('industryProjects') || '[]');
  projects.push(project);
  localStorage.setItem('industryProjects', JSON.stringify(projects));
  return project;
}

function getProject(projectId) {
  const projects = JSON.parse(localStorage.getItem('industryProjects') || '[]');
  return projects.find(p => p.id === projectId);
}

function getAllProjects() {
  return JSON.parse(localStorage.getItem('industryProjects') || '[]');
}

function updateProject(projectId, updates) {
  const projects = JSON.parse(localStorage.getItem('industryProjects') || '[]');
  const projectIndex = projects.findIndex(p => p.id === projectId);
  
  if (projectIndex !== -1) {
    projects[projectIndex] = { ...projects[projectIndex], ...updates };
    localStorage.setItem('industryProjects', JSON.stringify(projects));
    return projects[projectIndex];
  }
  return null;
}

function deleteProject(projectId) {
  let projects = JSON.parse(localStorage.getItem('industryProjects') || '[]');
  projects = projects.filter(p => p.id !== projectId);
  localStorage.setItem('industryProjects', JSON.stringify(projects));
  return true;
}

// ============================================
// STUDENT REQUESTS MANAGEMENT
// ============================================

function getStudentRequests(filter = 'all') {
  const requests = JSON.parse(localStorage.getItem('studentRequests') || '[]');
  
  if (filter === 'all') {
    return requests;
  }
  
  return requests.filter(r => r.status === filter);
}

function getStudentRequest(requestId) {
  const requests = JSON.parse(localStorage.getItem('studentRequests') || '[]');
  return requests.find(r => r.id === requestId);
}

function acceptStudentRequest(requestId) {
  const requests = JSON.parse(localStorage.getItem('studentRequests') || '[]');
  const request = requests.find(r => r.id === requestId);
  
  if (request) {
    request.status = 'accepted';
    localStorage.setItem('studentRequests', JSON.stringify(requests));
    return request;
  }
  return null;
}

function rejectStudentRequest(requestId) {
  const requests = JSON.parse(localStorage.getItem('studentRequests') || '[]');
  const request = requests.find(r => r.id === requestId);
  
  if (request) {
    request.status = 'rejected';
    localStorage.setItem('studentRequests', JSON.stringify(requests));
    return request;
  }
  return null;
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function formatCurrency(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(value);
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

function checkAuthAndRedirect() {
  if (!isIndustryLoggedIn()) {
    window.location.href = 'index.html';
    return false;
  }
  return true;
}

function initializeHeader() {
  const profileBtn = document.getElementById('profileBtn');
  const profileMenu = document.getElementById('profileMenu');

  if (profileBtn && profileMenu) {
    profileBtn.addEventListener('click', function() {
      profileMenu.style.display = profileMenu.style.display === 'none' ? 'block' : 'none';
    });

    document.addEventListener('click', function(e) {
      if (!e.target.closest('.profile-wrap')) {
        profileMenu.style.display = 'none';
      }
    });
  }

  // Set year in footer
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Load profile name in header
  const profile = getIndustryProfile();
  const headerProfileName = document.getElementById('headerProfileName');
  if (headerProfileName) {
    headerProfileName.textContent = profile.companyName || 'Company';
  }
}

function setupLogout() {
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', logout);
  }
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  // Initialize common elements on all pages
  initializeHeader();
  setupLogout();
});
