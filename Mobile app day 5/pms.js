/Using async/await/
async function loadCourses1() {
  const res = await fetch("https://69329a66e5a9e342d26ff2d3.mockapi.io/SkyRecharge");
  const data = await res.json();

  const list = document.getElementById("post-list");
  list.innerHTML = "";

  data.map((post, index) => {
    if (index < 15) {
      const li = document.createElement("li");
      li.innerText = ID: ${plan.id} | ₹${plan.price} | ${plan.dailydata} | ${plan.validity};
      list.appendChild(li);
    }
  });
}

function loadCourses2() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      const list = document.getElementById("post-list1");
      list.innerHTML = "";

      data.map((post, index) => {
        if (index < 5) {
          const li = document.createElement("li");
          li.innerText = ${post.id}. ${post.title};
          list.appendChild(li);
        }
      });
    })
    .catch((err) => {
      console.log("Error:", err);
    });
}