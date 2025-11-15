<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Minimal Template — Home</title>
  <link rel="icon" href="uploads/Logo-brand.png">
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@600;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/styles.css">
  <meta name="description" content="A simple, minimal and stylized multi-page template you can adapt.">
</head>
<body>
  <header class="site-header">
    <a class="brand" href="index.html">
      <img src="uploads/Logo-normal.png" alt="logo" class="logo">
      <strong class="brand-title">Your Brand</strong>
    </a>

    <nav class="nav" id="mainNav">
      <a href="index.html" class="nav-link">Home</a>
      <a href="about.html" class="nav-link">About</a>
      <a href="contact.html" class="nav-link">Contact</a>
      <button class="btn btn-primary" id="ctaBtn">Get Started</button>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation">☰</button>
    </nav>
  </header>

  <main>
    <section class="hero">
      <div class="hero-inner">
        <h1 class="hero-title">A Minimal, Beautiful Starting Point</h1>
        <p class="hero-sub">A clean, multi-purpose template inspired by the same minimal aesthetic as your landing page. Replace text, swap images, and reuse components.</p>
        <div class="hero-actions">
          <a href="about.html" class="btn btn-outline">Learn More</a>
          <a href="contact.html" class="btn btn-primary">Contact Us</a>
        </div>
      </div>
    </section>

    <section class="features" id="features">
      <h2>What you get</h2>
      <p class="muted">A flexible header, page navigation, content sections, and a footer with logo slot.</p>
      <div class="feature-grid">
        <article class="feature">
          <img src="uploads/Caprese-Salad.png" alt="sample" class="feature-img">
          <h3>Clean design</h3>
          <p>Minimal, readable, and friendly for customization.</p>
        </article>
        <article class="feature">
          <img src="uploads/Logo-normal.png" alt="sample" class="feature-img">
          <h3>Multi-page</h3>
          <p>Navigation and buttons link between pages by default.</p>
        </article>
        <article class="feature">
          <img src="uploads/Whatsapp.png" alt="sample" class="feature-img">
          <h3>Lightweight</h3>
          <p>Small CSS and a tiny script to handle UI behaviors.</p>
        </article>
      </div>
    </section>

    <section class="content-cards">
      <h2>Examples</h2>
      <div class="card-grid">
        <div class="card">
          <img src="uploads/r-eris-o6Oq7rBMqVc-unsplash.jpg" alt="example 1">
          <h4>Section Title</h4>
          <p class="muted">Short description goes here to explain the content.</p>
          <a href="about.html" class="btn btn-outline">Read</a>
        </div>
        <div class="card">
          <img src="uploads/muhammad-arifin-nursalim-DPGj8mAIIj0-unsplash.jpg" alt="example 2">
          <h4>Another item</h4>
          <p class="muted">Use this area for portfolio pieces, services, or posts.</p>
          <a href="contact.html" class="btn btn-primary">Get in touch</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <img src="uploads/Logo-normal.png" alt="logo" class="footer-logo">
        <div>
          <strong>Your Brand</strong>
          <p class="muted">A short tagline or description for your site.</p>
        </div>
      </div>

      <div class="footer-links">
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
        <a href="#features">Features</a>
      </div>
    </div>
    <div class="footer-bottom">
      <small>&copy; <span id="year"></span> Your Brand. All rights reserved.</small>
    </div>
  </footer>

  <script src="assets/script.js"></script>
</body>
</html>
