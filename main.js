// const slidesContainer = document.getElementById("slides");

// //creating parent container 
// const parentContainer = document.createElement("div");
// parentContainer.className = "parent-container";

// // creating image contaienr
// const imageContainer = document.createElement('div');
// imageContainer.className = "image-container";
// const image = document.createElement("img");
// image.src = "./realistic-happy-birthday-black-golden_1361-3241.webp"; 

// // appending image to image container
// imageContainer.appendChild(image);

// // creating details container
// const detailsContainer = document.createElement("div");
// detailsContainer.className = "details-container";

// // creating name container
// const nameContainer = document.createElement("div");
// nameContainer.className = "name-container";

// // creating the logo
// const logoImage = document.createElement("img");
// logoImage.src = "./heart.svg";

// // creating image title
// const imageTitle = document.createElement("p");
// imageTitle.id = "title";
// imageTitle.textContent = "TARUN";

// // appending the title and images to name container
// nameContainer.appendChild(logoImage);
// nameContainer.appendChild(imageTitle);

// // appending name container to details container
// detailsContainer.appendChild(nameContainer);

// // creating reach container
// const reachContainer = document.createElement("div");
// reachContainer.className = "reach-container";

// // creating like container
// const likeContainer = document.createElement("div");
// likeContainer.className = "like-conatainer";

// // const svgContainer = document.createElement("")


// // creating views container
// const viewContainer = document.createElement("div");
// viewContainer.className = "view-container";

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
    if (document.getElementById("filter-option").style.display === 'flex') {
        document.getElementById("filter-option").style.display = 'none';
    } else {
        document.getElementById("filter-option").style.display = 'flex';
    }
}