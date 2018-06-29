"use strict";

const CardSnippet = (jsonInfo = {}) => {
  const cardSkeleton = document.querySelector("#card-skeleton").cloneNode(true);
  const infos = cardSkeleton.querySelector(".NewsCard-infos");
  const createCard = () => {
    const title = infos.querySelector("h1");
    const paragraph = infos.querySelector("p");
    const imageFrame = cardSkeleton.querySelector(".NewsCard-frame");
    const sourceLink = cardSkeleton.querySelector(".NewsCard-source");

    showImageIfAble(imageFrame);
    showLinkIfAble(sourceLink);

    title.innerHTML = jsonInfo.title;
    paragraph.innerHTML = jsonInfo.paragraph;
    return cardSkeleton;
  };

  const showImageIfAble = imageFrame => {
    if (jsonInfo.imgSrc) {
      imageFrame.querySelector("img").src = jsonInfo.imgSrc;
    } else {
      cardSkeleton.removeChild(imageFrame);
    }
  };

  const showLinkIfAble = sourceLink => {
    if (jsonInfo.source) {
      sourceLink.href = jsonInfo.source;
    } else {
      infos.removeChild(sourceLink);
    }
  };

  return createCard();
};

export default CardSnippet;
