// ============================================
// Mobile Menu Toggle Functionality
// ============================================
const menuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close menu when a link is clicked
  const menuLinks = mobileMenu.querySelectorAll('a, button');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// ============================================
// CV Download Modal
// ============================================
function openDownloadModal() {
  document.getElementById('downloadModal').classList.add('active');
}

function closeDownloadModal() {
  document.getElementById('downloadModal').classList.remove('active');
}

function downloadCV(type) {
  const filename = type === 'embedded' 
    ? 'CV-Ferry-Rachman-Kurniawan-embedded.pdf' 
    : 'CV-Ferry-Rachman-Kurniawan-mobile.pdf';
  
  const link = document.createElement('a');
  link.href = `resume/${filename}`;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  closeDownloadModal();
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('downloadModal');
  if (event.target == modal) {
    modal.classList.remove('active');
  }
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});
