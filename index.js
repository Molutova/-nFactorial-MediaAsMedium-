const articleFromApi = [
  {
    id: 1,
    title: "7 Practical CSS Tips",
    body: "You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.",
    image: "./img/Img.png",
  },
  {
    id: 2,
    title: "7 Practical CSS Tips",
    body: "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...",
    image: "./img/PainImg.png",
  },
  {
    id: 3,
    title: "7 Practical CSS Tips",
    body: "Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to that I have 5 new projects that I classified as beginner, intermediate, and advanced. You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a challenge to each of them to test your Python skills.To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...",
    image: "./img/pplImg.png",
  },
];

function articleNew(item) {
  return `
  <div class="container-md">
  <div class="d-flex justify-content-between m-5">
      <div class="m-5">
      <div class="d-flex flex-row g-2">
        <img src="./img/Img2.png" style="width: 30px" />
        <p>
          Authors name <span class="text-muted">in</span> Topic Name
          <span class="text-muted">7 july</span>
        </p>
      </div>
        <a href="./article.html"><p id="title" class="mt-5" style="font-weight: bold; font-size: 20px; color: black; text-decoration: none;">
        ${item.title}</p></a>
        <p id="body">
        ${item.body}
        </p>
      </div>
      <img src="${item.image}" alt="picture" style="width: 300px; height: 300px"/>
  </div>
<div class="d-flex justify-content-between m-5">
  <div class="d-flex justify-content-around gap-2">
    <p class="bg-muted rounded-pill h-75 w-45">Java Script</p>
    <p class="text-muted">12 min read</p>
    <p class="text-muted">Selected for you</p>
  </div>
  <div>
    <img src="./img/Icon.png" />
    <img src="./img/Icon.png" />
    <img src="./img/Icon.png" />
  </div>
</div>
<hr style="border-color: gray;"
</div>       
  `;
}

document.addEventListener("DOMContentLoaded", function () {
  const productRow = document.getElementById("article");
  if (productRow) {
    const articles = articleFromApi;
    for (let i = 0; i < 10 && i < articles.length; i++) {
      const title = `Заголовок ${i + 1}`;
      productRow.innerHTML += articleNew(articles[i], title);
    }
  } else {
    console.log("Элемент с id 'article' не найден.");
  }
});

articleNew();
