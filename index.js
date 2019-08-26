const iframeContainer = document.querySelector(".iframe__container");

let iframePopulator = proj => {
  if (proj.homepage) {
    let projectIframe = document.createElement("iframe");
    //let iframeDesc = document.createElement("p");
    //iframeDesc.textContent = proj.description;
    projectIframe.title = "test";
    projectIframe.src = proj.homepage;
    projectIframe.scroll = "no";
    projectIframe.classList.add("iframe");
    iframeContainer.appendChild(projectIframe);
    //iframeContainer.appendChild(iframeDesc);
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
      iframePopulator(e);
    });
  });
