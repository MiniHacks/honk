// this code will be executed after page load
(function() {
  console.log('after.js executed');
  console.log(getText())
  setInterval(() => {
    console.log(getText())
  }, 30 * 1000)
})();

function getText() {
  if (location.href.includes("google.com")) return;
  const data = {
    title: document.querySelector("title")?.innerText,
    header: document.querySelector("h1")?.innerText,
    content: document.querySelector("body")?.innerText
  };
  const formData = new FormData();
  formData.append("title", document.querySelector("title")?.innerText);
  formData.append("header", document.querySelector("h1")?.innerText);
  formData.append("content", document.querySelector("body")?.innerText);
  fetch("http://localhost:5001/api/isdistracted", {
    // header: {"Content-Type": "application/json"},
    method: "POST",
    body: formData
   }).then(r => r.json()).then(r => {
     console.log(r);
  })
  return;
}
