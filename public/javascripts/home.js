const createStreamOfCards=(stream)=>{
  template = document.querySelector("template");
  place = document.getElementById('contentBox');

  this.limparTemplate =()=>{
    place.innerHTML=''
  }

  limparTemplate();
  stream.map( (infoAboutEachCard) => {
    createNewCard(infoAboutEachCard, place,template)
  })
}
