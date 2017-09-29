function createNewCard (info, place){
  this.atributes = {
    date : info.date,
    title : info.title,
    icon : info.icon,
    content : info.content,
    activated : false
  }

  this.shape=(info)=>{
    let card = template.content.cloneNode("true");
    title = card.querySelector(".cardH1");
    date = card.querySelector(".cardDate");
    content = card.querySelector(".cardText");
    icon = card.querySelector(".cardIcon")

    title.innerHTML='<strong><h1>'+info.title+'</strong></h1>'
    date.innerHTML='<p>' +info.date +'</p>';
    icon.src=info.icon;
    content.innerHTML ='<p>' + info.content +'</p>';
    return (card);
  }

  this.actions =(ele)=>{
    console.log('q');
    ele.addEventListener('click', function(){
      console.log('oi');
    });
    return ele
  }

  this.render=()=>{
    let card = shape(atributes)
    card = actions(card)
    place.appendChild(card);
  }

  render()

}
