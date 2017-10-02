function xmlConverter(xml){
  let item = xml.split("<item>")
  item.splice(0,1);
  let listOfItens=[];
  // a partir. do 1 começa os itens
  this.getTitle =(news)=>{
    halfTitle = news.split("<title>");
    fullTitle = halfTitle[1].split("</title>");
    return fullTitle[0];
  }

  this.getLink =(news)=>{
    halfLink = news.split("<link>");
    fullLink = halfLink[1].split("</link>");
    return fullLink[0];
  }

  this.getPubDate =(news)=>{
    getDate = news.split("<pubDate>");
    fullDate = getDate[1].split("</pubDate>");
    return fullDate[0];
  }

  this.getImg =(news)=>{
    desc = news.split("<description>");
    halfImg = desc[1].split('src="');
    if(halfImg[1]){
      fullImg = halfImg[1].split(/"/) ;
      return fullImg[0];
    }else{
      return halfImg
    }

  }

  this.getDescription =(news)=>{
    desc = news.split("<description>");
    fullDesc =desc[1].split("</description>")
    return fullDesc[0]
  }

  // return ({
  //     title:this.getTitle(),
  //     link:this.getLink(),
  //     date:this.getDate(),
  //     content:this.getDescription(),
  //     icon:this.getImg()
  // })

item.map( (news) => {
  info={
      title:this.getTitle(news),
      content:this.getLink(news),
      date:this.getPubDate(news),
      // content:this.getDescription(news),
      icon:this.getImg(news)
  }
  listOfItens.push(info)
})

return listOfItens;


}
