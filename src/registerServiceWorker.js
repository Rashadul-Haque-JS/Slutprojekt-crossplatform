export function register(){
    if('serviceWorker' in navigator ){
      navigator.serviceWorker.register('/service-worker.js')
      .then(() => console.log("SW Registered"))
      .catch(error => console.log("SW not registered ", error))
    }
  }