import CardSnippet from "./components/CardSnippet";

const appendToFeed = ele => {
  const feed = document.querySelector(".AppShell-feed");
  feed.appendChild(ele);
};

const mockData = [
  {
    title: "Big title",
    paragraph: "Not so big paragraph"
  },
  {
    title: "Sad title =(",
    paragraph: ":,( ....."
  },
  {
    title: "Olha eu com boné",
    paragraph: "Olha eu sem boné =(",
    source: "https://imgcentauro-a.akamaihd.net/180x180/91317402.jpg",
    imgSrc: "https://imgcentauro-a.akamaihd.net/180x180/91317402.jpg"
  }
];

mockData.forEach(card => appendToFeed(CardSnippet(card)));
