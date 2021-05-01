let typeValue = "feedback";
const send = document.getElementById("send");
const type = document.getElementById("dropdown");
const source = document.getElementById("alert-user");
const queries = document.getElementById("queries");

queries.addEventListener("click", (e) => {
  location.href = "http://35.154.88.197:8000/feedback.html";
});

type.addEventListener("change", (e) => {
  typeValue = type.value;
});

send.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  if (name.length == 0 || email.length == 0 || message.length == 0) {
    source.innerHTML = `<div class="alert alert-warning" role="alert">
                              Please fill the form !
                          </div>`;
    setTimeout(() => {
      source.innerHTML = ``;
    }, 2000);
    return
  }
  const url = "http://localhost:3000/feedbacks";
  fetch(url, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      email: email,
      type: typeValue,
      message: message,
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then(() => {
      source.innerHTML = `<div class="alert alert-success" role="alert">
                              Your response have been saved !
                          </div>`;
      setTimeout(() => {
        source.innerHTML = ``;
      }, 2000);
    })
    .catch((err) => {
      console.log(err);
      source.innerHTML = `<div class="alert alert-warning" role="alert">
                              Oops Something went wrong :( !
                          </div>`;
      setTimeout(() => {
        source.innerHTML = ``;
      }, 2000);
    });
});
