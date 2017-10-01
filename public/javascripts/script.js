if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js');
  });
}

const get =(func)=>{
  let proxyurl = "https://cors-anywhere.herokuapp.com/";
  let url = "https://news.google.com/news/rss/headlines/section/topic/SCITECH.pt-BR_br/Ci%C3%AAncia%2FTecnologia?ned=pt-BR_br&hl=pt-BR";
  // let url = '/api/newsfeed';
    fetch(proxyurl + url)
    .then( (x)=>{
      x.text().then( (res)=>{
        // a partir da posição 1 começam as infos
        xmlConverter(res);
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
