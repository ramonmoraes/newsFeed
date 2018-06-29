const appendToFeed = ele => {
  const feed = document.querySelector(".AppShell-feed");
  feed.appendChild(ele);
};

const createCard = (jsonInfo = {}) => {
    console.log(jsonInfo);
  const cardSkeleton = document.querySelector("#card-skeleton").cloneNode(true);
  const title = cardSkeleton.querySelector("h1");
  const paragraph = cardSkeleton.querySelector("p");
    
  title.innerHTML = jsonInfo.title;
  paragraph.innerHTML = jsonInfo.paragraph;
  return cardSkeleton;
};

const mockData = [
    {
        title: "Big title",
        paragraph: "Not so big paragraph",
    },
    {
        title: "Sad title =(",
        paragraph: ":,( .....",
    }
];

mockData.forEach(card => appendToFeed(createCard(card)));