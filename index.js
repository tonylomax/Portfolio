const iframeContainer = document.querySelector(".iframe__container");

let iframePopulator = proj => {
  if (proj.homepage) {
    let iframeContainer = document.querySelector(".iframe__container");
    let iframeImg = document.createElement("iframe");
    let iframeDesc = document.createElement("p");
    let uniqueIframeContainer = document.createElement("section");

    iframeImg.classList.add("unique__iframe__img");
    iframeDesc.classList.add("unique__iframe__description");
    uniqueIframeContainer.classList.add("unique__iframe");

    iframeImg.src = proj.homepage;
    iframeDesc.textContent = proj.description;
    iframeImg.scroll = "no";

    uniqueIframeContainer.appendChild(iframeImg);
    uniqueIframeContainer.appendChild(iframeDesc);

    iframeContainer.appendChild(uniqueIframeContainer);
  }
};

// Testing using fetch

const url = "https://api.github.com/users/tonylomax/repos";

fetch(url)
  .then(data => {
    return data.json();
  })
  .then(res => {
    res.forEach(e => {
      iframePopulator(e);
    });
  });
