if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js');
  });
}

const get =(func)=>{
    fetch('/api/newsfeed')
    .then( (x)=>{
        x.json()
        .then( (res) => {
          func(res);
        })
    });
}

window.onload = function(){
  let refreshBtn = document.getElementById('refreshBtn');
  refreshBtn.addEventListener("click", ()=>{
    get(createStreamOfCards);
  });
  get(createStreamOfCards);
}
