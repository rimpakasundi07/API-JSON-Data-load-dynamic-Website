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
      displayPost(json);
    });
};
// ------------------------------------------------------>>>>>>>>>
const displayPosts = (posts) => {
  for (let i = 0; i < posts.length; i++) {
    console.log(posts[i]);
  }

  for (let post of posts) {
    console.log(post);
  }

  // ---------------- array of object

  //  1. get the container
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";
  //  console.log(postContainer);

  posts.forEach((post) => {
    console.log(post.title);

    //     // 2. create HTML element
    const li = document.createElement("li");
    li.innerText = post.title;
    console.log(li);

    //     // 3. add li into container
    postContainer.appendChild(li);
  });
};

// // ---------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>.

console.log("Explore API");

const person = {
  name: "Nikita",
  fruit: "Strawberry",
  dish: "mutton thali",
  friends: ["Soniya", "Riya", "Keya"],
  isRich: true,
  money: 34000,
};

console.log(person, typeof person);

// * JSON -> JS object with Notation
// * JSON.stringify -> JSON
// * JSON.parse -> object

const personJSON = JSON.stringify(person);
console.log(personJSON, typeof personJSON);

const parseJSON = JSON.parse(personJSON);
console.log(parseJSON);

// -------------------------------------->>>>>>>>>>>>>>>>>>>>>>>
