export function register(){
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
    .then(() =>
    console.log('Service worker is registered.')
    )
    .catch(error =>
    console.log('Error with.', error)
    );
  }
  }


  // Dear Service worker , you are so smart!