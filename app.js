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

shareButtons.forEach(shareButton => 
    shareButton.addEventListener('click', copyText))