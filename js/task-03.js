const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

const createGalleryMarkup = (images) => {
  return images
    .map(
      (image) => `<li class="gallery-item">
        <img src="${image.url}" alt="${image.alt}" class="gallery-image">
      </li>`
    )
    .join("");
};

const galleryMarkup = createGalleryMarkup(images);
gallery.insertAdjacentHTML("beforeend", galleryMarkup);

// --------------------------------------------------------------------------------------------------------------------
// (це зробlенно за допомогою чата gpt, хотів узнати як реаlізувати анімацію)
// const gallery = document.querySelector(".gallery");

// const img = document.createElement("img");
// img.src = images[0].url;
// img.alt = images[0].alt;
// img.classList.add("gallery-image");
// gallery.appendChild(img);

// let currentImageIndex = 0;

// function changeImage() {
//   currentImageIndex = (currentImageIndex + 1) % images.length;
//   const currentImage = images[currentImageIndex];
//   img.src = currentImage.url;
//   img.alt = currentImage.alt;
// }

// const changeImageInterval = setInterval(changeImage, 3000);
