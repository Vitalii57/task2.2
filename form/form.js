const buttonPush = (document.querySelector(".button_Push").onclick = textPush);
const fieldName = document.querySelector(".field_Name");
const fieldEmail = document.querySelector(".field_Email");
const fieldMessage = document.querySelector(".field_Message");
// const buttonClear = (document.querySelector("button_Clear").onclick = textClear);

const requestURL = "https://jsonplaceholder.typicode.com/users";

function getRequest(method, url, body = null) {
  return fetch(url);
}

const obj = []
  // id: 0,
  // name: "",
  // email: "",
  // massage: "",


getRequest("GET", requestURL)
  .then((res) => res.json())
  .then((json) => obj.push([...json]));


 console.log(typeof(obj))



function textPush(e) {
  e.preventDefault();
   obj.push({
    // id: obj.length
    name: fieldName.value,
    email: fieldEmail.value,
    massage: fieldMessage.value,
  })
  fetch(requestURL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj),
  })
    .then((res) => res.json())
    .then((json) => console.log(json));

    getRequest("GET", requestURL)
  .then((res) => res.json())
  .then((json) => console.log(json));
}


// function textClear(e) {
//   e.preventDefault();
// }
