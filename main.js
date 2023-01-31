const listSet = [
  {
    imageLink: "./realistic-happy-birthday-black-golden_1361-3241.webp",
    imageName: "Tarun",
    likeCount: 0,
    viewsCount: 0,
    category: "Birthday",
    color: "Black",
    id: 0,
  },
  {
    imageLink: "./NoYclA.webp",
    imageName: "Hareesh",
    likeCount: 0,
    viewsCount: 0,
    category: "Anniversary",
    color: "Pink",
    id: 1,
  },
  {
    imageLink: "./pikrepo.jpg",
    imageName: "Ashwary",
    likeCount: 0,
    viewsCount: 0,
    category: "Wedding",
    color: "White",
    id: 2,
  },
];

const colorSet = {
  1: "Black",
  2: "Pink",
  3: "White",
};

// const editPage = (id) => {
//   // const editPageURL = `./preview.html?id=${id}`;
//   // window.location = editPageURL;
//   console.log("called", id);
// };

const slidesContainer = document.getElementById("slides");

const previewTemplate = (data, i) => {
  console.log(i);
  console.log("data", data);
  console.log(document.getElementById("card-image-modal"));
  document.getElementById("card-image-modal").src = data;
  // Get the modal
  var modal = document.getElementById("myModal");
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  var btn = document.getElementsByClassName("image-container")[i];
  console.log("btn", btn);
  // btn.onclick = function () {
  modal.style.display = "block";
  // };
  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  const editClick = document.getElementById("edit-template");
  console.log(editClick);
  editClick.onclick = function () {
    const editPageURL = `./preview.html?id=${i}`;
    window.location = editPageURL;
    console.log("called");
  };
};
// editClick.onclick = editPage(i);

const fragment = document.createDocumentFragment();
function renderList(updatedList) {
  // console.log("func");
  slidesContainer.innerHTML = "";
  for (let i of updatedList) {
    //creating parent container
    const parentContainer = document.createElement("div");
    parentContainer.className = "parent-container";

    // creating image contaienr
    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";
    const image = document.createElement("img");
    image.src = i.imageLink;

    // appending image to image container
    imageContainer.appendChild(image);

    // creating details container
    const detailsContainer = document.createElement("div");
    detailsContainer.className = "details-container";

    // creating name container
    const nameContainer = document.createElement("div");
    nameContainer.className = "name-container";

    // creating the logo
    const logoImage = document.createElement("img");
    logoImage.src = "./heart.svg";

    // creating image title
    const imageTitle = document.createElement("p");
    imageTitle.id = "title";
    imageTitle.textContent = i.imageName;

    // appending the title and images to name container
    nameContainer.appendChild(logoImage);
    nameContainer.appendChild(imageTitle);

    // appending name container to details container
    detailsContainer.appendChild(nameContainer);

    // creating reach container
    const reachContainer = document.createElement("div");
    reachContainer.className = "reach-container";

    // creating like container
    const likeContainer = document.createElement("div");
    likeContainer.className = "like-container";

    // svg
    const svgContainer = document.createElement("img");
    svgContainer.src = "./heart.svg";
    svgContainer.className = "svg-cont";

    // like count
    const likesCount = document.createElement("span");
    likesCount.innerText = i.likeCount;

    likeContainer.appendChild(svgContainer);
    likeContainer.appendChild(likesCount);

    // like increasing
    svgContainer.addEventListener("click", function like() {
      // console.log(likesCount);
      i.likeCount++;
      likesCount.innerText = i.likeCount;
    });

    // creating views container
    const viewContainer = document.createElement("div");
    viewContainer.className = "views-container";

    // creating image
    const viewImage = document.createElement("img");
    viewImage.src = "./view-svgrepo-com.svg";
    viewImage.height = "20";

    // view count
    const viewCount = document.createElement("span");
    viewCount.innerText = i.viewsCount;

    // view count updating
    imageContainer.addEventListener("click", function like() {
      // console.log(likesCount);
      i.viewsCount++;
      viewCount.innerText = i.viewsCount;
      previewTemplate(i.imageLink, i.id);
    });

    // appending to parent view
    viewContainer.appendChild(viewImage);
    viewContainer.appendChild(viewCount);

    // appending to reach
    reachContainer.appendChild(likeContainer);
    reachContainer.appendChild(viewContainer);

    // appendig to details
    detailsContainer.appendChild(reachContainer);

    // appending to parent
    parentContainer.appendChild(imageContainer);
    parentContainer.appendChild(detailsContainer);

    // appending to slides
    fragment.appendChild(parentContainer);
  }
  slidesContainer.appendChild(fragment);
  // console.log(slidesContainer);

  // image.addEventListener("click", previewTemplate(i.imageLink));
}

renderList(listSet);

function renderNoData() {
  const noFragment = document.createDocumentFragment();
  console.log("nodata");
  slidesContainer.innerHTML = "";

  const noResultContainer = document.createElement("div");
  noResultContainer.className = "no-result";

  const naImageContainer = document.createElement("div");
  naImageContainer.className = "na-image-container";

  const naImage = document.createElement("img");
  naImage.className = "na-image";
  naImage.src =
    "https://cdn.dribbble.com/assets/art-banners/record-d05a64c16f564e98f34e41aec5ec07d5b12eb7ea8fb3a1bb0b12250b558de93b.png";

  naImageContainer.appendChild(naImage);

  const noResultText = document.createElement("h3");
  noResultText.textContent = "No Results found";

  const noResultTextReason = document.createElement("p");
  noResultTextReason.textContent =
    "It seems we can't find any results based on your search.";

  noResultContainer.appendChild(naImageContainer);
  noResultContainer.appendChild(noResultText);
  noResultContainer.appendChild(noResultTextReason);

  console.log("no result", noResultContainer);
  // noFragment.appendChild(noResultContainer);
  slidesContainer.appendChild(noResultContainer);
  console.log(slidesContainer);
}

function triggerEnter(e) {
  if (e.code === "Enter") {
    console.log(e.target.value);
    tagFilterList(e.target.value);
  }
}

function tagFilterList(tag) {
  console.log(tag);
  let filterData = listSet.filter((data) => {
    // console.log(data.category);
    if (data.category === tag) {
      return data;
    }
  });
  console.log("W", filterData);
  if (filterData.length === 0) {
    renderNoData();
    return;
  }
  renderList(filterData);
}

function colorFilterList(key) {
  console.log(colorSet[key]);
  let filterData = listSet.filter((data) => {
    if (data.color === colorSet[key]) {
      return data;
    }
  });
  if (filterData.length === 0) {
    renderNoData();
  }
  renderList(filterData);
}

function openNav() {
  document.getElementById("mySidenav").style.height = "100vh";
  document.getElementById("mySidenav").style.width = "100%";
  document.getElementById("mySidenav").style.padding = "10px 0 100px 50px";
  document.getElementById("open").style.display = "none";
  document.getElementById("close").style.display = "block";
}

function closeNav() {
  document.getElementById("mySidenav").style.height = "0";
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.padding = "0";
  document.getElementById("open").style.display = "flex";
  document.getElementById("close").style.display = "none";
}

function display(id) {
  document.getElementById(id).style.display = "flex";
}

function filterOption() {
  if (document.getElementById("filter-option").style.display === "flex") {
    document.getElementById("filter-option").style.display = "none";
  } else {
    document.getElementById("filter-option").style.display = "flex";
  }
}