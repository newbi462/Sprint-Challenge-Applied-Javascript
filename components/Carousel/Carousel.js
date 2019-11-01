/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>


https://medium.com/@marcusmichaels/how-to-build-a-carousel-from-scratch-in-vanilla-js-9a096d3b98c9
but ya would not fish in time doing all by dom...

HTML
<div class="carousel-wrapper">
  <div class="carousel">
    <img class="carousel__photo initial" src="assets/img_1.jpg">
    <img class="carousel__photo" src="assets/img_2.jpg">
    <img class="carousel__photo" src="assets/img_3.jpg">
    <img class="carousel__photo" src="assets/img_4.jpg">
    <img class="carousel__photo" src="assets/img_5.jpg">

    <div class="carousel__button--next"></div>
    <div class="carousel__button--prev"></div>
  </div>
</div>


css
.carousel-wrapper {
  overflow: hidden;
  width: 90%;
}

.carousel-wrapper * {
  box-sizing: border-box;
}

.carousel {
  transform-style: preserve-3d;
}

.carousel__photo {
  opacity: 0;
  position: absolute;
  top:0;
  width: 100%;
  margin: auto;
  padding: 1rem 4rem;
  z-index: 100;
  transition: transform .5s, opacity .5s, z-index .5s;
}

.carousel__photo.initial,
.carousel__photo.active {
  opacity: 1;
  position: relative;
  z-index: 900;
}

.carousel__photo.prev,
.carousel__photo.next {
  z-index: 800;
}
.carousel__photo.prev {
  transform: translateX(-100%);
}
.carousel__photo.next {
  transform: translateX(100%);
}

.carousel__button--prev,
.carousel__button--next {
  position: absolute;
  top:50%;
  width: 3rem;
  height: 3rem;
  background-color: #FFF;
  transform: translateY(-50%);
  border-radius: 50%;
  cursor: pointer;
  z-index: 1001;
  border: 1px solid black;
}
.carousel__button--prev {
  left:0;
}
.carousel__button--next {
  right:0;
}
.carousel__button--prev::after,
.carousel__button--next::after {
  content: " ";
  position: absolute;
  width: 10px;
  height: 10px;
  top: 50%;
  left: 54%;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  transform: translate(-50%, -50%) rotate(135deg);
}
.carousel__button--next::after {
  left: 47%;
  transform: translate(-50%, -50%) rotate(-45deg);
}



JS
SO YA COULD SET THIS UP BUT NOT ENOUGH TIME TO DO THAT MUCH DOM

*/
