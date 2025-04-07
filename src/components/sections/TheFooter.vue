<template>
  <footer class="footer-section">
    <div class="footer-background">
      <div class="footer-gradient"></div>

      <div class="footer-grid"></div>

      <div class="footer-orb"></div>
    </div>

    <div class="footer-container">
      <div class="footer-content">
        <div class="quote-section">
          <p class="quote-text">"Indeed, with hardship comes ease"</p>
        </div>

        <div class="copyright-section">
          <p class="crafted-text">
            Designed & Crafted with
            <span class="heart-icon">
              <font-awesome-icon class="w-3" :icon="['fas', 'heart']" />
            </span>
            by Emad Rahimi
          </p>
          <p class="rights-text">© {{ new Date().getFullYear() }} All rights reserved</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-section {
  position: relative;
  width: 100%;
  padding: 2.5rem 0;
  overflow: hidden;
  border-top: 1px solid rgba(51, 65, 85, 0.5);
}

.footer-background {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.footer-gradient {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 150%, #0f172a 0%, #020617 100%);
}

.footer-grid {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(226, 232, 240, 0.08) 1px, transparent 1px);
  background-size: 20px 20px;
  opacity: 0.3;
  mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
}

.footer-orb {
  position: absolute;
  width: 40vh;
  height: 40vh;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.1;
  bottom: -20vh;
  right: -10vh;
  background: radial-gradient(circle at center, rgba(20, 184, 166, 0.3), rgba(45, 212, 191, 0));
}

.footer-container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  z-index: 10;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

.quote-section {
  text-align: center;
}

.quote-text {
  font-size: 0.875rem;
  font-weight: 500;
  background: linear-gradient(to right, #e2e8f0, #fb7185, #2dd4bf);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0;
}

@media (min-width: 640px) {
  .quote-text {
    font-size: 1.125rem;
    font-weight: 500;
  }
}

.copyright-section {
  text-align: center;
}

.crafted-text {
  font-size: 0.6875rem;
  color: #94a3b8;
  margin-bottom: 0.5rem;
}

@media (min-width: 640px) {
  .crafted-text {
    font-size: 0.875rem;
    margin-bottom: 0.75rem;
  }
}

.heart-icon {
  display: inline-block;
  color: #fb7185;
  animation: pulse 2s infinite;
  margin: 0 0.25rem;
}

.rights-text {
  font-size: 0.625rem;
  color: #64748b;
}

@media (min-width: 640px) {
  .rights-text {
    font-size: 0.75rem;
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.2);
  }
}
</style>
