// this code will be executed after page load
(function() {
  console.log('after.js executed');
  console.log(getText())
  setInterval(() => {
    console.log(getText())
  }, 3 * 1000)
})();
const frm = document.createElement("iframe");

function getText() {
  if (location.href.includes("google.com")) return;
  const data = {
    title: document.querySelector("title")?.innerText,
    header: document.querySelector("h1")?.innerText,
    content: document.querySelector("body")?.innerText
  };
  fetch("http://localhost:5001/api/isdistracted", {
    header: {"Content-Type": "application/json"},
    method: "POST",
    body: JSON.stringify(data)
   }).then(r => r.json()).then(r => {
     if(r.distracted_by) {
       frm.src = "http://localhost:5001/honk?topic=" + r.distracted_by;
       frm.id = "testFrame"
       frm.style.width = "500px";
       frm.style.height = "500px";
       frm.style.position = "fixed";
       frm.style.right = "10px";
       frm.style.display = "block"
       frm.style.top = "10px";
       frm.style.zIndex = "9999999";
       if(!document.querySelector("#testFrame"))
         document.body.appendChild(frm);
     } else {
       frm.style.display = "none"
     }
  })
  return;
}
