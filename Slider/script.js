class ImageCarousel {
    constructor() {
      this.imageElement = document.getElementById('image');
      this.previousBtn = document.getElementById('previousBtn');
      this.nextBtn = document.getElementById('nextBtn');
      this.images = [];
      this.currentIndex = 0;
  
      this.addEventListeners();
      this.startCarousel();
    }
  
    async fetchImage() {
      try {
        const response = await fetch('https://source.unsplash.com/random/500x500');
        const imageURL = response.url;
        return imageURL;
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    }
  
    updateImageSource(imageURL) {
      this.imageElement.src = imageURL;
    }
  
    navigateCarousel(increment) {
      this.currentIndex = (this.currentIndex + increment + this.images.length) % this.images.length;
      const imageURL = this.images[this.currentIndex];
      this.updateImageSource(imageURL);
    }
  
    async initialize() {
      const imageURL = await this.fetchImage();
      this.images.push(imageURL);
      this.updateImageSource(imageURL);
    }
  
    async fetchAndUpdateImage() {
      const imageURL = await this.fetchImage();
      this.images.push(imageURL);
      if (this.images.length > 5) {
        this.images.shift();
      }
      this.updateImageSource(imageURL);
    }
  
    addEventListeners() {
      this.previousBtn.addEventListener('click', () => this.navigateCarousel(-1));
      this.nextBtn.addEventListener('click', () => this.navigateCarousel(1));
    }
  
    startCarousel() {
      this.initialize();
      setInterval(() => this.fetchAndUpdateImage(), 3000);
    }
  }
  
  const carousel = new ImageCarousel();

  
//   const imageElement = document.getElementById('image');
// const previousBtn = document.getElementById('previousBtn');
// const nextBtn = document.getElementById('nextBtn');
// const images = [];
// let currentIndex = 0;

// async function fetchImage() {
//   try {
//     const response = await fetch('https://source.unsplash.com/random/500x500');
//     const imageURL = response.url;
//     return imageURL;
//   } catch (error) {
//     console.error('Error fetching image:', error);
//   }
// }

// function updateImageSource(imageURL) {
//   imageElement.src = imageURL;
// }

// function goPrevious() {
//   currentIndex = (currentIndex - 1 + images.length) % images.length;
//   updateImageSource(images[currentIndex]);
// }

// function goNext() {
//   currentIndex = (currentIndex + 1) % images.length;
//   updateImageSource(images[currentIndex]);
// }

// async function initialize() {
//   const imageURL = await fetchImage();
//   images.push(imageURL);
//   updateImageSource(imageURL);
// }

// async function fetchAndUpdateImage() {
//   const imageURL = await fetchImage();
//   images.push(imageURL);
//   if (images.length > 5) {
//     images.shift();
//   }
//   updateImageSource(imageURL);
// }

// function addEventListeners() {
//   previousBtn.addEventListener('click', goPrevious);
//   nextBtn.addEventListener('click', goNext);
// }

// function startCarousel() {
//   initialize();
//   setInterval(fetchAndUpdateImage, 3000);
// }

// addEventListeners();
// startCarousel();
