// This function is provided to shake an image.  Use it every time the user clicks on a pokemon.
// Feel free to delete this function and include it as a method within your classes...
const toggleShake = function(element) {
  // Animations only occur when a new class is added to the element.
  // Since we want this to happen every time, we can switch between two different animations
  if (element.classList.contains("shake1")) {
    element.classList.remove("shake1");
    element.classList.add("shake2")
  } else {
    element.classList.remove("shake2");
    element.classList.add("shake1")
  }
}

const main = document.querySelector("main");

// Your Code Here
class Flower {
  constructor() { 
    this.imgPath = [`images/flower/flower0.png`, `images/flower/flower1.png`, `images/flower/flower2.png`];
    this.imgIndex = 0;
  }
  grow() {
    let image = document.getElementById("flower");
    if (this.imgIndex < this.imgPath.length) {
      this.imgIndex += 1;
      image.src = this.imgPath[this.imgIndex];
    }
  }
  render() {
    let imgElement = document.createElement("img");
    document.body.append(imgElement);
    imgElement.src = this.imgPath[this.imgIndex];
    imgElement.id = "flower";
    imgElement.alt = "A Flower Grows"
  }
}

let flower = new Flower();

flower.render();
flower.grow();