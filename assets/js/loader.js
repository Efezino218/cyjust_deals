 // Example of how to hide the loader when content is ready
 document.querySelector('.custom-page-loader-container').style.display = 'flex';
 document.querySelector('.custom-page-loader-container').style.display = 'none';
 function hideLoader() {
    document.querySelector('.custom-page-loader-container').style.display = 'none';
  }
  
  // Example: Hide loader after content loads
  // window.addEventListener('load', hideLoader);

  document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('header');
    const heroSection = document.getElementById('hero');
    
    // Set initial hero section height
    function setHeroHeight() {
      const navbarHeight = document.querySelector('#header').offsetHeight;
      heroSection.style.marginTop = `-${navbarHeight}px`;
      heroSection.style.paddingTop = `${navbarHeight}px`;
    }
    
    setHeroHeight();
    window.addEventListener('resize', setHeroHeight);

    // Change navbar on scroll
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  });