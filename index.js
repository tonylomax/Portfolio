let sendButton = document.querySelector("#sendButton");

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (xhr.readyState == 4 && xhr.status == 200) {
    let response = JSON.parse(xhr.responseText);
    //console.log(response);
    response.forEach(e => {
      //console.log(e.homepage);
    });
  }
};
xhr.open("GET", `https://api.github.com/users/tonylomax/repos`, true);
xhr.send();
