const shareButtons = document.querySelectorAll('.title-share-button','share-button')
console.log(shareButtons)

async function copyText(e){

    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try{
        await navigator.clipboard.writeText(link)
        
    }catch(err){
        console.error(err)
    }
}

document.getElementById('B1').addEventListener('click', function() {
    // Envia un evento personalizado a Google Analytics 4
    gtag('event', 'Click en MethodOz', {
      'event_category': 'Interacción',
      'event_label': 'B MethodOz'
    });
  });

  document.getElementById('B2').addEventListener('click', function() {
    // Envia un evento personalizado a Google Analytics 4
    gtag('event', 'Click en FreshBites', {
      'event_category': 'Interacción',
      'event_label': 'B FreshBites'
    });
  });

  document.getElementById('B3').addEventListener('click', function() {
    // Envia un evento personalizado a Google Analytics 4
    gtag('event', 'Click en Aixa Lingerie', {
      'event_category': 'Interacción',
      'event_label': 'B Aixa Lingerie'
    });
  });

  document.getElementById('B4').addEventListener('click', function() {
    // Envia un evento personalizado a Google Analytics 4
    gtag('event', 'Click en Teje que Teje', {
      'event_category': 'Interacción',
      'event_label': 'B Teje que Teje'
    });
  });
  
  document.getElementById('B5').addEventListener('click', function() {
    // Envia un evento personalizado a Google Analytics 4
    gtag('event', 'Click en Cucina NG', {
      'event_category': 'Interacción',
      'event_label': 'B Cucina NG'
    });
  });


shareButtons.forEach(shareButton => 
    shareButton.addEventListener('click', copyText))