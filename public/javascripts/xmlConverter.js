function xmlConverter(xml){
  let item = xml.split("<item>")
  // a partir. do 1 começa os itens
  this.getTitle =()=>{
    halfTitle = item[1].split("<title>");
    fullTitle = halfTitle[1].split("</title>");
    return fullTitle[0];
  }

  this.getLink =()=>{
    halfLink = item[1].split("<link>");
    fullLink = halfLink[1].split("</link>");
    return fullLink[0];
  }

  this.getDate =()=>{
    getDate = item[1].split("<pubDate>");
    fullDate = getDate[1].split("</pubDate>");
    return fullDate[0];
  }

  this.getImg =()=>{
    desc = item[1].split("<description>");
    halfImg = desc[1].split('src="');
    fullImg = halfImg[1].split(/"/) ;
    return fullImg[0];
  }

  this.getDescription =()=>{

  }
  let x = getImg();
  // console.log(x);
}
