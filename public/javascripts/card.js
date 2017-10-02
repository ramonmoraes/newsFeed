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

    this.actions(card.querySelector('.card'));
    title.innerHTML='<strong><h1>'+info.title+'</strong></h1>'
    date.innerHTML='<p>' +info.date +'</p>';
    icon.src=info.icon;
    content.innerHTML ='<a>' + info.content +'</a>';
    return (card);
  }

  this.actions =(element)=> {
    element.addEventListener('click', ()=>{
      toggleActivated(element)
    });
  }

  this.toggleActivated =(ele)=> {
    if(this.atributes.activated){
      this.atributes.activated=false;
      ele.classList.remove("cardActivated")
    }else{
      this.atributes.activated=true;
      ele.classList.add("cardActivated")
    }
  }

  this.render=()=>{
    let card = shape(atributes)
    place.appendChild(card);
  }

  render()

}
