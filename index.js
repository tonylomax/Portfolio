// let sendButton = document.querySelector("#sendButton");

// let xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function() {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     let response = JSON.parse(xhr.responseText);
//     //console.log(response);
//     response.forEach(e => {
//       //console.log(e.homepage);
//     });
//   }
// };
// xhr.open("GET", `https://api.github.com/users/tonylomax/repos`, true);
// xhr.send();

const iframeContainer = document.querySelector(".projects__iframes");

let iframePopulator = projURL => {
  if (projURL) {
    let projectIframe = document.createElement("iframe");
    projectIframe.src = projURL;
    projectIframe.classList.add("iframe");
    iframeContainer.appendChild(projectIframe);
  }
};

// Testing using fetch

const url = "https://api.github.com/users/tonylomax/repos";

fetch(url)
  .then(data => {
    return data.json();
  })
  .then(res => {
    console.log(res);
    res.forEach(e => {
      console.log(e.statuses_url);
      iframePopulator(e.homepage);
    });
  });
