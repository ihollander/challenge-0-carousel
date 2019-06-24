/** Application State **/
const images = [
  "hero-image-0.jpg",
  "hero-image-1.jpg",
  "hero-image-2.jpg",
  "hero-image-3.jpg"
]

let currentImageIndex = 0

const heroImage = document.querySelector('.hero-image .image')

setInterval(() => {
  currentImageIndex++
  if (currentImageIndex > images.length - 1) {
    currentImageIndex = 0
  }

  heroImage.style.backgroundImage = `url(./images/${images[currentImageIndex]})`
}, 3000)