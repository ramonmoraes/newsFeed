// if('serviceWorker' in navigator){
//   navigator.serviceWorker
//     .register('./service-worker.js', {scope:'./*'})
//     .then(function(x){
//         console.log('[serviceWorker] Registrado');
//     })
//     .catch(function(err){
//       console.log(err);
//     })
// }else{
//   console.log('n tem');
// }

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js');
  });
}


const getNews = function(){
  console.log('getNews');
}
