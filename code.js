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
  constructor(flowerID) { 
    this.imgPath = [`images/flower/flower0.png`, `images/flower/flower1.png`, `images/flower/flower2.png`];
    this.imgIndex = 0;
    this.flowerID = flowerID;
  }
  grow = () => {
    let image = document.getElementById(`${this.flowerID}`);
    if (this.imgIndex >= this.imgPath.length - 1) {
      image.src = this.imgPath[this.imgPath.length - 1];
    } else {
      this.imgIndex += 1;
      image.src = this.imgPath[this.imgIndex];
    }
  }
  render() {
    let imgElement = document.createElement("img");
    document.body.append(imgElement);
    imgElement.src = this.imgPath[this.imgIndex];
    imgElement.id = `${this.flowerID}`;
  }
  onclick() {
    let image = document.getElementById(`${this.flowerID}`);
    image.onclick = this.grow;
  }
}

let flower1 = new Flower("flower1");
let flower2 = new Flower("flower2");

flower1.render();
flower1.onclick();
flower2.render();
flower2.onclick()

class Pokemon {
  constructor (imgPath, pokemonID) {
    this.imgPath = imgPath;
    this.imgIndex = -1;
    this.pokemonID = pokemonID;
  }
  evolve = () => {
    let image = document.getElementById(`${this.pokemonID}`);
    let evolveChance = Math.random() * 100;
    toggleShake(image);
    if (evolveChance <= 20) {
      if (this.imgIndex >= this.imgPath.length - 1) {
       image.src = this.imgPath[this.imgPath.length - 1];
     } else {
       this.imgIndex += 1;
       image.src = this.imgPath[this.imgIndex];
     }
   }
  }
  render() {
    let imgElement = document.createElement("img");
    document.body.append(imgElement);
    imgElement.src = "images/pokeball.png";
    imgElement.id = `${this.pokemonID}`;
    imgElement.classList = "shake1"
    imgElement.style.width = "25%"
  }
  onclick() {
    let image = document.getElementById(`${this.pokemonID}`);
    image.onclick = this.evolve;
  }
}

let charmanderImgPath = [`images/charmander/charmander0.png`, `images/charmander/charmander1.png`, `images/charmander/charmander2.png`];
let charmander = new Pokemon(charmanderImgPath, "charmandder");

charmander.render()
charmander.onclick();