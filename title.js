const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    // promise of response
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      displayPosts(json);
    });
};
const displayPosts = (posts) => {
  // 1. get the container and empty the container
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";
  posts.forEach((post) => {
    // 2. create element
    const postCard = document.createElement("div");
    postCard.innerHTML = `
     <div class="post-card">
        <h2>${post.title}</h2>
        <p>${post.body}
          
        </p>
      </div>`;

    //   3. add to the container
    postContainer.append(postCard);
  });
};

loadPost();
