window.onload = function () {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const shoutInput = document.getElementById("shoutInput").value;
  

    document.querySelector("span#original").innerText = shoutInput;
    document.querySelector("span#shout").innerText = shoutInput.toUpperCase();
    document.querySelector("div#sentenceShouted").removeAttribute("class");
  };
};