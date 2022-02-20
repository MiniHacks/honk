// this code will be executed after page load
(function() {
  console.log('after.js executed');
  console.log(getText())
  setInterval(() => {
    console.log(getText())
  }, 30 * 1000)
})();

function getText() {
  return {
    title: document.querySelector("title")?.innerText,
    header: document.querySelector("h1")?.innerText,
    content: document.querySelector("body")?.innerText
  }
}
