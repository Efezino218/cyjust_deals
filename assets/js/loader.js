 // Example of how to hide the loader when content is ready
 document.querySelector('.custom-page-loader-container').style.display = 'flex';
 document.querySelector('.custom-page-loader-container').style.display = 'none';
 function hideLoader() {
    document.querySelector('.custom-page-loader-container').style.display = 'none';
  }
  
  // Example: Hide loader after content loads
  // window.addEventListener('load', hideLoader);